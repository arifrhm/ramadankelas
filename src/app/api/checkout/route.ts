import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { courseId, userName, userEmail } = body

    // Get course details
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        lessons: true,
      },
    })

    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      )
    }

    // Create or find user
    let user
    if (userEmail) {
      user = await prisma.user.upsert({
        where: { email: userEmail },
        update: { name: userName },
        create: {
          name: userName || userEmail.split('@')[0],
          email: userEmail,
        },
      })
    }

    // Create enrollment
    if (user) {
      const existingEnrollment = await prisma.enrollment.findUnique({
        where: {
          userId_courseId: {
            userId: user.id,
            courseId,
          },
        },
      })

      if (!existingEnrollment) {
        await prisma.enrollment.create({
          data: {
            userId: user.id,
            courseId,
            paymentStatus: 'paid',
          },
        })
      }
    }

    // In production, this would create a real Mayar checkout session
    // For this PoC, we return a simulated Mayar checkout URL
    const mayarCheckoutUrl = `https://mayar.id/product/${courseId}?name=${encodeURIComponent(userName || '')}&email=${encodeURIComponent(userEmail || '')}`

    return NextResponse.json({
      success: true,
      checkoutUrl: mayarCheckoutUrl,
      course: {
        id: course.id,
        title: course.title,
        price: course.price,
        description: course.description,
        lessons: course.lessons.length,
      },
    })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
