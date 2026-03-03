import Link from "next/link"
import { BookOpen, Users, Target, Clock, Star, ArrowRight } from "lucide-react"
import { prisma } from "@/lib/prisma"

export default async function Home() {
  const courses = await prisma.course.findMany({
    include: {
      lessons: true,
      _count: {
        select: { enrollments: true }
      }
    },
    take: 6,
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-emerald-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
              RamadanKelas
            </h1>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/courses" className="text-zinc-600 hover:text-emerald-600 transition-colors">
              Kelas
            </Link>
            <Link href="/about" className="text-zinc-600 hover:text-emerald-600 transition-colors">
              Tentang
            </Link>
            <Link href="/courses" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Mulai Belajar
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Mayar Vibecoding Competition 2026</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
            Puasa bukan alasan untuk{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
              berhenti belajar
            </span>
          </h2>
          <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
            Tingkatkan skill dan keilmuanmu di bulan suci Ramadhan dengan kelas-kelas berkualitas.
            Belajar materi keagamaan, teknologi, hingga produktivitas dalam satu platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold">
              <BookOpen className="w-5 h-5" />
              Lihat Semua Kelas
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/about" className="border-2 border-zinc-200 text-zinc-700 px-8 py-4 rounded-xl hover:border-emerald-600 hover:text-emerald-600 transition-all flex items-center justify-center gap-2 font-semibold">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-emerald-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-zinc-900 mb-1">{courses.length}+</div>
            <div className="text-sm text-zinc-600">Kelas Tersedia</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-amber-100">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-zinc-900 mb-1">500+</div>
            <div className="text-sm text-zinc-600">Siswa Belajar</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-zinc-900 mb-1">50+</div>
            <div className="text-sm text-zinc-600">Jam Pembelajaran</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-purple-100">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-zinc-900 mb-1">100%</div>
            <div className="text-sm text-zinc-600">Satisfaction Rate</div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-zinc-900 mb-4">Kelas Pilihan Ramadhan</h3>
            <p className="text-lg text-zinc-600">Pilih kelas yang sesuai dengan kebutuhanmu</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-zinc-100 hover:shadow-xl hover:shadow-emerald-100 transition-all hover:-translate-y-1"
              >
                <div className="aspect-video bg-gradient-to-br from-emerald-400 to-amber-400 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/80" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.category === 'keagamaan' ? 'bg-emerald-100 text-emerald-700' :
                      course.category === 'tech' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {course.category}
                    </span>
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-xs font-medium">
                      {course.level}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-zinc-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
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
                    <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-emerald-600 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/courses" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold">
              Lihat Semua Kelas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Kenapa RamadanKelas?</h3>
            <p className="text-emerald-100 text-lg">Platform belajar yang dirancang khusus untuk bulan Ramadhan</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Materi Terarah</h4>
              <p className="text-emerald-100">Konten dikurasi oleh praktisi berpengalaman di bidangnya</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Belajar Fleksibel</h4>
              <p className="text-emerald-100">Akses materi kapan saja, cocok dengan jadwal puasa</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Komunitas Aktif</h4>
              <p className="text-emerald-100">Diskusi dengan mentor dan teman belajar lainnya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                RamadanKelas
              </span>
            </div>
            <p className="text-zinc-600 text-sm">
              Dibuat untuk Mayar Vibecoding Competition 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
