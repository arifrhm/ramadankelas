import Link from "next/link"
import { redirect } from "next/navigation"
import { BookOpen, Clock, Users, Play, Check, ArrowLeft, ShoppingCart, FileText } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { formatPrice } from "@/lib/utils"

export default async function CourseDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const course = await prisma.course.findUnique({
    where: { id: params.id },
    include: {
      lessons: {
        orderBy: { order: 'asc' }
      },
      _count: {
        select: { enrollments: true }
      }
    }
  })

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-zinc-300 mx-auto mb-4" />
          <p className="text-zinc-600 text-lg">Kelas tidak ditemukan</p>
          <Link href="/courses" className="text-emerald-600 hover:text-emerald-700">
            Kembali ke daftar kelas
          </Link>
        </div>
      </div>
    )
  }

  // Mayar checkout via our API (for Mayar integration bonus)
  const handleCheckout = async () => {
    'use server'
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3002'}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId: course.id,
          userName: 'Siswa RamadanKelas', // In production, get from auth
          userEmail: 'siswa@ramadankelas.id', // In production, get from auth
        }),
      })

      const data = await response.json()

      if (data.success && data.checkoutUrl) {
        redirect(data.checkoutUrl)
      }
    } catch (error) {
      console.error('Checkout error:', error)
      // Fallback to direct Mayar link
      const fallbackUrl = `https://mayar.id/product/${course.id}`
      redirect(fallbackUrl)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-emerald-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
              RamadanKelas
            </h1>
          </Link>
          <Link href="/courses" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Lihat Semua Kelas
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/courses" className="inline-flex items-center gap-2 text-zinc-600 hover:text-emerald-600 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Kelas
        </Link>
      </div>

      {/* Course Hero */}
      <section className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className={`aspect-video rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${
              course.category === 'keagamaan' ? 'from-emerald-400 to-teal-400' :
              course.category === 'tech' ? 'from-blue-400 to-indigo-400' :
              'from-purple-400 to-pink-400'
            }`}>
              <BookOpen className="w-16 h-16 text-white/80" />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
                course.category === 'keagamaan' ? 'bg-emerald-100 text-emerald-700' :
                course.category === 'tech' ? 'bg-blue-100 text-blue-700' :
                'bg-purple-100 text-purple-700'
              }`}>
                {course.category}
              </span>
              <span className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-full text-sm font-medium capitalize">
                {course.level}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              {course.title}
            </h2>

            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              {course.description}
            </p>

            {/* Course Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <Clock className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-zinc-900">{course.duration} jam</div>
                <div className="text-sm text-zinc-600">Durasi</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <BookOpen className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-zinc-900">{course.lessons.length}</div>
                <div className="text-sm text-zinc-600">Materi</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-zinc-900">{course._count.enrollments}</div>
                <div className="text-sm text-zinc-600">Siswa</div>
              </div>
            </div>

            {/* Course Content */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Materi Kelas</h3>
              <div className="space-y-3">
                {course.lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 hover:border-emerald-300 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-zinc-900 mb-1">
                        {lesson.title}
                      </h4>
                      <p className="text-sm text-zinc-600 line-clamp-2">
                        {lesson.content}
                      </p>
                    </div>
                    <FileText className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Checkout */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-6">
                <div className="text-4xl font-bold text-zinc-900 mb-2">
                  {formatPrice(course.price)}
                </div>
                <p className="text-zinc-600 text-sm">Akses seumur hidup</p>
              </div>

              <form
                action={async () => {
                  'use server'
                  try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3002'}/api/checkout`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        courseId: course.id,
                        userName: 'Siswa RamadanKelas',
                        userEmail: 'siswa@ramadankelas.id',
                      }),
                    })

                    const data = await response.json()

                    if (data.success && data.checkoutUrl) {
                      redirect(data.checkoutUrl)
                    }
                  } catch (error) {
                    console.error('Checkout error:', error)
                    const fallbackUrl = `https://mayar.id/product/${course.id}`
                    redirect(fallbackUrl)
                  }
                }}
              >
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 mb-4"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Daftar Sekarang
                </button>
              </form>

              <a
                href="https://mayar.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-xl font-medium hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <BookOpen className="w-5 h-5" />
                Powered by Mayar
              </a>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold text-zinc-900 mb-4">Yang kamu dapatkan:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-zinc-600">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Akses ke semua materi kelas</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-600">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Video pembelajaran berkualitas HD</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-600">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Materi downloadable</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-600">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Akses ke forum diskusi</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-600">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Sertifikat penyelesaian</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
