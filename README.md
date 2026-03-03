# RamadanKelas 🌙

**Platform Belajar untuk Bulan Suci Ramadhan**

Dibuat sebagai partisipasi dalam **Mayar Vibecoding Competition 2026**

## 📋 Deskripsi

RamadanKelas adalah platform e-learning yang dirancang khusus untuk bulan Ramadhan, memungkinkan para pembelajar untuk meningkatkan skill teknologi dan keagamaan tanpa harus mengorbankan waktu ibadah. Platform ini menyediakan kelas-kelas berkualitas tinggi dengan konten text-based, fleksibel, dan terintegrasi dengan sistem pembayaran Mayar.

### 🎯 Fitur Utama

- **📚 Katalog Kursus Lengkap** - Beragam pilihan kelas dari materi keagamaan hingga teknologi profesional
- **🎨 UI/UX Modern** - Desain responsif dan menarik dengan Tailwind CSS
- **💳 Integrasi Mayar** - Sistem pembayaran yang terintegrasi dengan Mayar (bonus point)
- **📝 Materi Text-Based** - Konten dalam format text/markdown yang mudah dibaca
- **🔍 Filter & Search** - Pencarian kelas berdasarkan kategori dan level
- **📊 Tracking Progress** - Sistem untuk melacak progress pembelajaran
- **💬 Discussion Forum** - Ruang diskusi antara siswa dan mentor

### 🚀 Kursus Tersedia

**Beginner/Intermediate:**
1. Belajar Tilawah Juz 30 - Rp 99.000 (keagamaan)
2. React dengan Typescript: Level Up - Rp 249.000 (tech)
3. Manajemen Waktu Productivity - Rp 149.000 (productivity)
4. Fiqih Puasa Praktis - Rp 129.000 (keagamaan)
5. Next.js 14 App Router Mastery - Rp 299.000 (tech)

**Advanced/Professional (PoC-focused):**
6. **Fiqih Muamalah untuk Tech Professionals** - Rp 199.000 (keagamaan, intermediate)
7. **PoC: Distributed System dengan CQRS & Event Sourcing** - Rp 599.000 (tech, advanced)
8. **PoC: Microservices with Kubernetes & Service Mesh** - Rp 699.000 (tech, advanced)
9. **PoC: High-Performance Caching Strategies** - Rp 449.000 (tech, intermediate)
10. **Senior Engineering: System Design & Architecture** - Rp 799.000 (tech, advanced)

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type safety untuk kode yang lebih robust
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library yang modern

### Backend & Database
- **Prisma ORM 5** - Type-safe ORM dengan SQLite
- **SQLite** - Database untuk development
- **Server Components** - React Server Components untuk performa optimal
- **API Routes** - RESTful API untuk checkout dan data fetching

### Payment Integration
- **Mayar Payment API** - Integrasi pembayaran untuk kursus (bonus point)

## 📦 Instalasi

```bash
# Clone repository
git clone <your-repo-url>
cd ramadankelas

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Setup database
npx prisma migrate dev

# Seed data
npm run db:seed

# Jalankan development server
npm run dev
```

## 🚀 Menjalankan Aplikasi

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

Aplikasi akan berjalan di `http://localhost:3000`

## 📁 Struktur Project

```
ramadankelas/
├── prisma/
│   ├── schema.prisma          # Database schema
│   ├── seed.ts                # Seed data
│   └── migrations/            # Database migrations
├── src/
│   ├── app/
│   │   ├── about/            # Halaman About
│   │   ├── api/
│   │   │   └── checkout/     # API routes untuk Mayar integration
│   │   ├── courses/
│   │   │   ├── [id]/         # Halaman detail course
│   │   │   └── page.tsx      # Halaman listing courses
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Landing page
│   ├── components/
│   │   └── ui/              # Reusable UI components
│   └── lib/
│       ├── prisma.ts          # Prisma client
│       └── utils.ts          # Utility functions
├── .env.local                # Environment variables
└── package.json
```

## 🎨 Fitur-fitur untuk Kompetisi

### ✅ Kriteria Terpenuhi

1. **Menggunakan vibecoding dalam proses development** ✅
   - Menggunakan AI (OpenClaw) untuk generate code
   - Prompt-driven development
   - Iterasi cepat dengan assistance AI

2. **Text-based content** ✅
   - Semua materi dalam format text/markdown
   - Mudah dibaca dan diakses
   - Ringan dan cepat dimuat

3. **Integrasi Mayar (opsional)** ✅
   - API endpoint `/api/checkout` untuk Mayar integration
   - Tombol checkout yang terhubung ke Mayar
   - Enrollments tracking di database

4. **Ide produk dengan vibe dan logika** ✅
   - Vibe: Ramadhan-themed, produktivitas selama ibadah
   - Logika: Sistem course tracking, payment flow
   - Nilai tambah: Konten PoC untuk upgrade ke senior level

### 🎯 Keunggulan Produk

- **Relevansi Ramadhan** - Theme yang tepat untuk bulan suci
- **Konten Professional** - Kursus dengan materi PoC yang actual
- **Mayar Integration** - Payment system yang terintegrasi
- **Modern Tech Stack** - Next.js 14, TypeScript, Prisma
- **Responsive Design** - Berfungsi di desktop dan mobile
- **Text-based Materials** - Konten mudah dibaca, tidak ada video complexity

## 📊 Database Schema

```
User          - pengguna aplikasi
Course        - kursus yang tersedia
Lesson        - materi dalam setiap kursus
Enrollment    - pendaftaran user ke course
Progress      - tracking progress user
Discussion    - forum diskusi
Comment       - komentar dalam diskusi
```

## 🎬 Demo

### Screenshot Halaman Utama
Aplikasi menampilkan landing page dengan:
- Hero section dengan tagline Ramadhan
- Statistik kelas, siswa, jam materi
- Featured courses dengan preview

### Screenshot Detail Kelas
Halaman detail course menampilkan:
- Informasi lengkap course
- Daftar materi (lessons)
- Tombol checkout terintegrasi Mayar
- Informasi harga dan benefit

### Integrasi Mayar
- API endpoint `/api/checkout` untuk create checkout session
- Redirect ke Mayar payment page
- Enrollment tracking di database

## 🔮 Future Improvements

- [ ] User authentication & authorization
- [ ] Real-time progress tracking
- [ ] Video lessons (optional, text-based tetap prioritas)
- [ ] Certificate generation
- [ ] More payment providers
- [ ] Discussion forum with real-time chat
- [ ] Mobile app (React Native)

## 📝 Notes untuk Juri

### Pembangunan dengan AI
Seluruh aplikasi dibangun menggunakan **vibecoding** - development dengan bantuan AI (OpenClaw):

1. **Prompting** - Memberikan instruksi yang jelas tentang fitur yang diinginkan
2. **AI Code Generation** - AI menghasilkan kode boilerplate dan fitur
3. **Iterasi** - Memperbaiki dan mengoptimalkan berdasarkan feedback
4. **Testing** - Menguji dan debug dengan bantuan AI

### Mayar Integration
Sesuai kriteria kompetisi, aplikasi sudah mengintegrasikan pembayaran Mayar:

- **API Endpoint**: `/api/checkout` (POST)
- **Features**: Create enrollment, tracking payment status
- **Implementation**: Terhubung dengan Mayar checkout flow

### Konten PoC untuk Upgrade ke Senior
Kursus-kursus advanced dirancang khusus untuk membantu developers upgrade ke level senior:

- **CQRS & Event Sourcing** - Pattern untuk distributed systems
- **Microservices with K8s** - Scalable architecture patterns
- **High-Performance Caching** - Performance optimization techniques
- **System Design & Architecture** - Senior engineering mindset dan skills

Ini bukan hanya tutorial dasar, tapi PoC dengan best practices industri yang dapat diaplikasikan di real-world scenarios.

## 🙏 Penutup

RamadanKelas dibuat dengan semangat untuk membantu para Muslim meningkatkan skill profesional sambil tetap fokus pada ibadah di bulan Ramadhan. Semoga aplikasi ini bermanfaat dan menjadi inspirasi untuk developer lain.

**Puasa bukan alasan untuk berhenti belajar!** 🌙✨

---

*Dibuat untuk Mayar Vibecoding Competition 2026*
*Deadline Submission: 15 Maret 2026*
