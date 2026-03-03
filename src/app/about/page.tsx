import Link from "next/link"
import { BookOpen, Target, Users, Clock, Award, ArrowLeft, Code2, Heart } from "lucide-react"

export default function AboutPage() {
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

      {/* Hero */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6">
            Tentang <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">RamadanKelas</span>
          </h2>
          <p className="text-xl text-zinc-600 leading-relaxed mb-8">
            Platform belajar yang dirancang khusus untuk bulan suci Ramadhan. 
            Kami berkomitmen membantu Anda meningkatkan skill dan keilmuan tanpa harus 
            berhenti beribadah.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Visi Kami</h3>
            <p className="text-zinc-600 leading-relaxed">
              Menjadi platform belajar terdepan yang mengintegrasikan pengembangan skill 
              dengan ibadah Ramadhan, memungkinkan setiap Muslim untuk terus berkembang 
              secara profesional sambil memperkuat iman.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Misi Kami</h3>
            <p className="text-zinc-600 leading-relaxed">
              Menyediakan konten berkualitas tinggi yang relevan dengan kebutuhan industri 
              modern, dengan jadwal fleksibel yang mengakomodasi waktu ibadah dan istirahat 
              di bulan Ramadhan.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-zinc-900 mb-4">Kenapa RamadanKelas?</h3>
            <p className="text-lg text-zinc-600">Keunggulan yang membuat kami berbeda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-7 h-7 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-zinc-900 mb-2">Materi Professional</h4>
              <p className="text-zinc-600">
                Konten dikurasi oleh praktisi berpengalaman dengan fokus pada PoC 
                dan best practices industri
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-zinc-900 mb-2">Fleksibel & On-Demand</h4>
              <p className="text-zinc-600">
                Akses materi kapan saja, cocok dengan jadwal puasa dan waktu ibadah Anda
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-zinc-900 mb-2">Komunitas Aktif</h4>
              <p className="text-zinc-600">
                Diskusi dengan mentor dan teman belajar untuk memperdalam pemahaman
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Competition */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-12 max-w-5xl mx-auto text-white">
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-10 h-10" />
            <h3 className="text-2xl font-bold">Dibuat untuk Mayar Vibecoding Competition 2026</h3>
          </div>
          <p className="text-emerald-100 leading-relaxed mb-6">
            RamadanKelas dikembangkan sebagai partisipasi dalam kompetisi Mayar Vibecoding 2026. 
            Platform ini menunjukkan bagaimana teknologi dapat digunakan untuk menciptakan dampak positif 
            dalam kehidupan sehari-hari, khususnya dalam konteks ibadah dan pengembangan diri.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">Next.js 14</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">TypeScript</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Prisma ORM</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Tailwind CSS</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Mayar Payment</span>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-zinc-900 mb-4">Teknologi yang Kami Gunakan</h3>
            <p className="text-lg text-zinc-600">Modern tech stack untuk performa dan developer experience terbaik</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-zinc-100">
              <h4 className="text-lg font-semibold text-zinc-900 mb-4">Frontend</h4>
              <ul className="space-y-2 text-zinc-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  Next.js 14 (App Router)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  Tailwind CSS 4
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  Lucide Icons
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-zinc-100">
              <h4 className="text-lg font-semibold text-zinc-900 mb-4">Backend & Database</h4>
              <ul className="space-y-2 text-zinc-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Prisma ORM 5
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  SQLite Database
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Server Components
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Mayar Payment Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">Tertarik untuk Belajar?</h3>
          <p className="text-zinc-600 mb-6">
            Lihat daftar kelas lengkap kami dan mulai perjalanan belajar Anda di bulan Ramadhan ini.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-colors font-semibold"
          >
            <BookOpen className="w-5 h-5" />
            Lihat Semua Kelas
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
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
