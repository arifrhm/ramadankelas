import Link from "next/link"
import { BookOpen, Clock, Users, ArrowLeft, Search, Filter } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { formatPrice } from "@/lib/utils"

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: { category?: string; level?: string }
}) {
  const courses = await prisma.course.findMany({
    include: {
      lessons: true,
      _count: {
        select: { enrollments: true }
      }
    },
    orderBy: { createdAt: 'desc' }
  })

  const filteredCourses = courses.filter(course => {
    if (searchParams.category && course.category !== searchParams.category) return false
    if (searchParams.level && course.level !== searchParams.level) return false
    return true
  })

  const categories = ['keagamaan', 'tech', 'productivity']
  const levels = ['beginner', 'intermediate', 'advanced']

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
            Mulai Belajar
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-600 hover:text-emerald-600 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>
      </div>

      {/* Page Header */}
      <section className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Kelas Ramadhan
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Tingkatkan skill dan keilmuanmu di bulan suci Ramadhan dengan pilihan kelas berkualitas.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 pb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Cari kelas..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/courses"
              className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                !searchParams.category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-zinc-600 hover:bg-zinc-50'
              }`}
            >
              Semua
            </Link>
            {categories.map(cat => (
              <Link
                key={cat}
                href={`/courses?category=${cat}`}
                className={`px-4 py-2 rounded-xl font-medium transition-colors capitalize ${
                  searchParams.category === cat
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          {levels.map(level => (
            <Link
              key={level}
              href={`/courses?level=${level}`}
              className={`px-4 py-2 rounded-xl font-medium transition-colors capitalize ${
                searchParams.level === level
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-zinc-600 hover:bg-zinc-50'
              }`}
            >
              {level}
            </Link>
          ))}
        </div>
      </section>

      {/* Course Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-zinc-100 hover:shadow-xl hover:shadow-emerald-100 transition-all hover:-translate-y-1"
            >
              <div className={`aspect-video bg-gradient-to-br flex items-center justify-center ${
                course.category === 'keagamaan' ? 'from-emerald-400 to-teal-400' :
                course.category === 'tech' ? 'from-blue-400 to-indigo-400' :
                'from-purple-400 to-pink-400'
              }`}>
                <BookOpen className="w-16 h-16 text-white/80" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                    course.category === 'keagamaan' ? 'bg-emerald-100 text-emerald-700' :
                    course.category === 'tech' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {course.category}
                  </span>
                  <span className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-xs font-medium capitalize">
                    {course.level}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {course.title}
                </h4>
                <p className="text-zinc-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration} jam
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course.lessons.length} materi
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-zinc-500">
                    <Users className="w-4 h-4" />
                    {course._count.enrollments}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600">
                    {formatPrice(course.price)}
                  </span>
                  <span className="text-emerald-600 font-medium text-sm">
                    Daftar Sekarang →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-zinc-300 mx-auto mb-4" />
            <p className="text-zinc-600 text-lg">Tidak ada kelas yang ditemukan</p>
          </div>
        )}
      </section>
    </div>
  )
}
