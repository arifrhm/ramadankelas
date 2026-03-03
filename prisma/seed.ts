import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create sample courses
  const courses = await Promise.all([
    prisma.course.create({
      data: {
        title: 'Belajar Tilawah Juz 30',
        description: 'Panduan lengkap belajar membaca Al-Quran Juz 30 dengan tajwid yang benar. Cocok untuk pemula maupun yang sudah terbiasa membaca.',
        thumbnail: '/tilawah.jpg',
        price: 99000,
        category: 'keagamaan',
        level: 'beginner',
        duration: 10,
        totalLessons: 5,
        lessons: {
          create: [
            {
              title: 'Pengenalan Huruf Hijaiyah',
              content: '# Pengenalan Huruf Hijaiyah\n\nDalam modul ini kita akan belajar mengenal huruf-huruf hijaiyah dasar dan cara membacanya dengan benar.',
              order: 1,
            },
            {
              title: 'Aturan Tajwid Dasar',
              content: '# Aturan Tajwid Dasar\n\nMemahami hukum nun mati dan tanwin, serta hukum mim sukun dasar yang penting dalam tilawah.',
              order: 2,
            },
            {
              title: 'Juz 30 - Surah An-Naba',
              content: '# Surah An-Naba\n\nPraktik membaca Surah An-Naba dengan penjelasan tajwid dan maknanya.',
              order: 3,
            },
            {
              title: 'Juz 30 - Surah An-Naziat',
              content: '# Surah An-Naziat\n\nPraktik membaca Surah An-Naziat dengan penjelasan tajwid dan maknanya.',
              order: 4,
            },
            {
              title: 'Juz 30 - Surah Abasa',
              content: '# Surah Abasa\n\nPraktik membaca Surah Abasa dengan penjelasan tajwid dan maknanya.',
              order: 5,
            },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: 'React dengan Typescript: Level Up',
        description: 'Tingkatkan skill React kamu dengan Typescript. Pelajari best practices, type safety, dan bagaimana membangun aplikasi React yang scalable.',
        thumbnail: '/react-ts.jpg',
        price: 249000,
        category: 'tech',
        level: 'intermediate',
        duration: 15,
        totalLessons: 6,
        lessons: {
          create: [
            {
              title: 'Setup & Konfigurasi Typescript',
              content: '# Setup Typescript di React\n\nCara meng-setup project React dengan Typescript dari nol menggunakan Vite atau Next.js.',
              order: 1,
            },
            {
              title: 'Type System Fundamentals',
              content: '# Type System Fundamentals\n\nMemahami primitive types, union types, intersection types, dan type inference.',
              order: 2,
            },
            {
              title: 'Component Props & State',
              content: '# Component Props & State\n\nMendefinisikan props dengan typescript dan menggunakan useState dengan type safety.',
              order: 3,
            },
            {
              title: 'Custom Hooks dengan Typescript',
              content: '# Custom Hooks dengan Typescript\n\nMembuat custom hooks dengan typescript untuk reusable logic.',
              order: 4,
            },
            {
              title: 'Context API & Typescript',
              content: '# Context API & Typescript\n\nMenggunakan Context API dengan typescript untuk global state management.',
              order: 5,
            },
            {
              title: 'Best Practices & Patterns',
              content: '# Best Practices & Patterns\n\nPatterns dan best practices saat menggunakan Typescript di React.',
              order: 6,
            },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: 'Manajemen Waktu Productivity',
        description: 'Pelajari teknik-teknik manajemen waktu yang efektif untuk meningkatkan produktivitas kerja dan belajar, terutama di bulan Ramadhan.',
        thumbnail: '/productivity.jpg',
        price: 149000,
        category: 'productivity',
        level: 'beginner',
        duration: 8,
        totalLessons: 4,
        lessons: {
          create: [
            {
              title: 'Pomodoro Technique',
              content: '# Pomodoro Technique\n\nTeknik manajemen waktu dengan interval 25 menit kerja dan 5 menit istirahat.',
              order: 1,
            },
            {
              title: 'Time Blocking',
              content: '# Time Blocking\n\nCara membagi waktu dalam blok-blok tertentu untuk fokus pada tugas tertentu.',
              order: 2,
            },
            {
              title: 'Prioritas dengan Eisenhower Matrix',
              content: '# Eisenhower Matrix\n\nMemahami cara mengelompokkan tugas berdasarkan urgency dan importance.',
              order: 3,
            },
            {
              title: 'Focus & Deep Work',
              content: '# Focus & Deep Work\n\nTeknik untuk mencapai deep work dan menghindari distraksi.',
              order: 4,
            },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: 'Fiqih Puasa Praktis',
        description: 'Panduan praktis fiqih puasa untuk bulan Ramadhan. Mulai dari syarat, rukun, sunnah, hingga hal-hal yang membatalkan puasa.',
        thumbnail: '/fiqih.jpg',
        price: 129000,
        category: 'keagamaan',
        level: 'beginner',
        duration: 6,
        totalLessons: 5,
        lessons: {
          create: [
            {
              title: 'Syarat & Rukun Puasa',
              content: '# Syarat & Rukun Puasa\n\nMemahami syarat wajib dan rukun puasa yang sah menurut fikih.',
              order: 1,
            },
            {
              title: 'Sunnah-sunnah Puasa',
              content: '# Sunnah-sunnah Puasa\n\nAmalan-amalan sunnah yang dianjurkan saat berpuasa.',
              order: 2,
            },
            {
              title: 'Hal yang Membatalkan Puasa',
              content: '# Hal yang Membatalkan Puasa\n\nMemahami hal-hal yang membatalkan puasa dan hukumnya.',
              order: 3,
            },
            {
              title: 'Orang yang Diperbolehkan Tidak Puasa',
              content: '# Orang yang Diperbolehkan Tidak Puasa\n\nKategori orang yang diperbolehkan berbuka dan cara menggantinya.',
              order: 4,
            },
            {
              title: 'Qadha & Kafarah',
              content: '# Qadha & Kafarah\n\nHukum mengganti puasa yang ditinggalkan dan kafaratannya.',
              order: 5,
            },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: 'Next.js 14 App Router Mastery',
        description: 'Pelajari Next.js 14 App Router secara mendalam. Server Components, Client Components, Route Handlers, dan deployment.',
        thumbnail: '/nextjs.jpg',
        price: 299000,
        category: 'tech',
        level: 'intermediate',
        duration: 20,
        totalLessons: 8,
        lessons: {
          create: [
            {
              title: 'App Router Introduction',
              content: '# App Router Introduction\n\nMemahami konsep App Router dan perbedaannya dengan Pages Router.',
              order: 1,
            },
            {
              title: 'Server vs Client Components',
              content: '# Server vs Client Components\n\nKapan menggunakan Server Components dan kapan Client Components.',
              order: 2,
            },
            {
              title: 'Routing & Dynamic Routes',
              content: '# Routing & Dynamic Routes\n\nMembuat routes dan dynamic routes di App Router.',
              order: 3,
            },
            {
              title: 'Data Fetching',
              content: '# Data Fetching\n\nTeknik data fetching di Next.js 14 dengan Server Actions dan fetch.',
              order: 4,
            },
            {
              title: 'Server Actions',
              content: '# Server Actions\n\nMenggunakan Server Actions untuk form handling dan mutations.',
              order: 5,
            },
            {
              title: 'Route Handlers',
              content: '# Route Handlers\n\nMembuat API routes di App Router untuk backend logic.',
              order: 6,
            },
            {
              title: 'Authentication & Authorization',
              content: '# Authentication & Authorization\n\nImplementasi auth di Next.js 14 dengan NextAuth atau Clerk.',
              order: 7,
            },
            {
              title: 'Deployment',
              content: '# Deployment\n\nCara deploy Next.js 14 app ke Vercel atau platform lainnya.',
              order: 8,
            },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: 'PoC: Distributed System dengan CQRS & Event Sourcing',
        description: 'Belajar membangun sistem terdistribusi yang scalable menggunakan pattern CQRS (Command Query Responsibility Segregation) dan Event Sourcing. Build complete PoC dari 0 dengan real-world use case.',
        thumbnail: '/cqrs.jpg',
        price: 599000,
        category: 'tech',
        level: 'advanced',
        duration: 25,
        totalLessons: 10,
        lessons: {
          create: [
            {
              title: 'Introduction to CQRS',
              content: '# CQRS Fundamentals\n\nMemahami konsep CQRS: memisahkan Command (write) dan Query (read). Kenapa pattern ini penting untuk scalable systems?\n\n## Key Concepts\n- Command Model: Mutasi data\n- Query Model: Optimasi read\n- Eventual Consistency\n- Scalability Benefits',
              order: 1,
            },
            {
              title: 'Event Sourcing Deep Dive',
              content: '# Event Sourcing Architecture\n\nStore semua state sebagai sequence of events, bukan current state snapshot.\n\n## Benefits\n- Complete audit trail\n- Temporal queries\n- Reproducible bugs\n- Event replay capability',
              order: 2,
            },
            {
              title: 'Building the Event Store',
              content: '# PoC: Event Store Implementation\n\nPraktik implementasi event store dengan:\n- Append-only storage\n- Event versioning\n- Snapshot strategy\n- Event replay mechanism',
              order: 3,
            },
            {
              title: 'Command Side Implementation',
              content: '# Command Handler Pattern\n\nImplementasi command handlers dengan:\n- Validation pipeline\n- Aggregate root pattern\n- Event emission\n- Transaction management',
              order: 4,
            },
            {
              title: 'Query Side Optimization',
              content: '# Read Models & Projections\n\nBuild optimized read models:\n- Materialized views\n- CQRS read adapters\n- Query optimization strategies\n- Caching layer',
              order: 5,
            },
            {
              title: 'Event Bus Implementation',
              content: '# Event-Driven Architecture\n\nImplementasi event bus dengan:\n- Pub/sub pattern\n- Event routing\n- Retry mechanisms\n- Dead letter queue',
              order: 6,
            },
            {
              title: 'Saga Pattern for Distributed Transactions',
              content: '# Distributed Transaction Management\n\nMenghandle transaction lintas service dengan Saga pattern:\n- Choreography vs Orchestration\n- Compensating transactions\n- Timeout handling\n- Recovery strategies',
              order: 7,
            },
            {
              title: 'Testing Strategies',
              content: '# Testing CQRS & Event Sourcing\n\nTesting strategies untuk distributed systems:\n- Unit testing command handlers\n- Integration testing event flow\n- Event replay testing\n- Performance testing',
              order: 8,
            },
            {
              title: 'Production Considerations',
              content: '# Production Readiness\n\nDeployment considerations:\n- Monitoring & observability\n- Event schema evolution\n- Data migration strategies\n- Performance tuning',
              order: 9,
            },
            {
              title: 'Complete PoC Demo',
              content: '# End-to-End PoC\n\nComplete demo dengan:\n- Real-time dashboard\n- Event replay showcase\n- Load testing results\n- Production checklist',
              order: 10,
            },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: 'PoC: Microservices with Kubernetes & Service Mesh',
        description: 'Master microservices architecture dengan hands-on PoC. Deploy ke Kubernetes dengan Istio Service Mesh, implementasi traffic management, security, dan observability.',
        thumbnail: '/k8s.jpg',
        price: 699000,
        category: 'tech',
        level: 'advanced',
        duration: 30,
        totalLessons: 12,
        lessons: {
          create: [
            {
              title: 'Microservices Architecture Principles',
              content: '# When & Why Microservices\n\nTrade-offs analysis:\n- Monolith vs Microservices\n- Domain-driven design (DDD)\n- Bounded contexts\n- Decomposition strategies',
              order: 1,
            },
            {
              title: 'Kubernetes Fundamentals',
              content: '# K8s Core Concepts\n\nDeep dive into:\n- Pods & Deployments\n- Services & Ingress\n- ConfigMaps & Secrets\n- Volumes & Persistent Storage',
              order: 2,
            },
            {
              title: 'Service Mesh with Istio',
              content: '# Service Mesh Architecture\n\nWhy service mesh:\n- Traffic management\n- Security (mTLS)\n- Observability\n- Resilience patterns',
              order: 3,
            },
            {
              title: 'Building Microservice 1: Order Service',
              content: '# PoC: Order Service\n\nImplementasi service pertama:\n- REST API design\n- Database per service\n- Event publishing\n- Configuration management',
              order: 4,
            },
            {
              title: 'Building Microservice 2: Payment Service',
              content: '# PoC: Payment Service\n\nIntegrasi dengan external APIs:\n- Payment gateway integration\n- Webhook handling\n- Idempotency pattern\n- Circuit breaker',
              order: 5,
            },
            {
              title: 'Building Microservice 3: Notification Service',
              content: '# PoC: Notification Service\n\nAsync processing:\n- Message queue integration\n- Email/SMS providers\n- Template management\n- Retry logic',
              order: 6,
            },
            {
              title: 'Istio Traffic Management',
              content: '# Traffic Routing Policies\n\nAdvanced traffic management:\n- Virtual services\n- Destination rules\n- Canary deployments\n- A/B testing',
              order: 7,
            },
            {
              title: 'Observability & Monitoring',
              content: '# Full Stack Observability\n\nImplementasi monitoring:\n- Prometheus metrics\n- Grafana dashboards\n- Distributed tracing\n- Log aggregation',
              order: 8,
            },
            {
              title: 'Security with mTLS & RBAC',
              content: '# Zero Trust Security\n\nImplementasi security:\n- Mutual TLS\n- Service-to-service auth\n- Istio RBAC\n- Policy as code',
              order: 9,
            },
            {
              title: 'CI/CD for Microservices',
              content: '# GitOps Pipeline\n\nAutomated deployment:\n- ArgoCD/Helm\n- GitOps workflow\n- Progressive delivery\n- Rollback strategies',
              order: 10,
            },
            {
              title: 'Testing Distributed Systems',
              content: '# Testing Strategies\n\nComprehensive testing:\n- Contract testing (Pact)\n- Integration testing\n- Chaos engineering\n- Performance testing',
              order: 11,
            },
            {
              title: 'Complete E2E Demo',
              content: '# Production-Grade PoC\n\nComplete demo deployment:\n- Full cluster setup\n- Multi-environment configs\n- Real traffic simulation\n- Failure scenarios',
              order: 12,
            },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: 'PoC: High-Performance Caching Strategies',
        description: 'Deep dive caching strategies untuk high-traffic systems. Build PoC dengan Redis, implementasi multi-level caching, cache invalidation patterns, dan cache consistency.',
        thumbnail: '/cache.jpg',
        price: 449000,
        category: 'tech',
        level: 'intermediate',
        duration: 20,
        totalLessons: 8,
        lessons: {
          create: [
            {
              title: 'Caching Fundamentals',
              content: '# Why Caching Matters\n\nPerformance impact analysis:\n- Latency reduction\n- Database load reduction\n- Cost optimization\n- User experience',
              order: 1,
            },
            {
              title: 'Redis Deep Dive',
              content: '# Redis Architecture\n\nRedis internals:\n- Data structures\n- Persistence options\n- Replication & clustering\n- Performance tuning',
              order: 2,
            },
            {
              title: 'Cache-Aside Pattern',
              content: '# Lazy Loading Strategy\n\nImplementation details:\n- Read-through cache\n- Cache miss handling\n- TTL strategies\n- Warm-up strategies',
              order: 3,
            },
            {
              title: 'Write-Through & Write-Behind',
              content: '# Write Caching Strategies\n\nComparison and use cases:\n- Write-through\n- Write-behind\n- Refresh-ahead\n- Trade-offs analysis',
              order: 4,
            },
            {
              title: 'Multi-Level Caching',
              content: '# L1/L2 Cache Architecture\n\nBuild hierarchical cache:\n- In-memory L1\n- Redis L2\n- Cache hierarchy\n- Smart routing',
              order: 5,
            },
            {
              title: 'Cache Invalidation Patterns',
              content: '# The Cache Invalidation Problem\n\nStrategies for consistency:\n- Time-based expiration\n- Event-based invalidation\n- Write-through cache\n- Cache coherency',
              order: 6,
            },
            {
              title: 'Distributed Caching',
              content: '# Cache Distribution\n\nScale caching across nodes:\n- Consistent hashing\n- Redis cluster\n- Client-side caching\n- Geo-distribution',
              order: 7,
            },
            {
              title: 'Complete PoC Demo',
              content: '# Performance Benchmarking\n\nReal-world demo:\n- Load testing results\n- Cache hit ratio analysis\n- Cost-benefit analysis\n- Production recommendations',
              order: 8,
            },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: 'Senior Engineering: System Design & Architecture',
        description: 'Transition dari Developer ke Senior Engineer. Pelajari system design, architectural patterns, technical leadership, dan decision-making skills yang di butuhkan Senior Engineers.',
        thumbnail: '/senior.jpg',
        price: 799000,
        category: 'tech',
        level: 'advanced',
        duration: 35,
        totalLessons: 14,
        lessons: {
          create: [
            {
              title: 'The Senior Mindset Shift',
              content: '# Developer vs Senior Engineer\n\nKey differences:\n- Code quality vs System quality\n- Feature delivery vs Long-term viability\n- Individual contribution vs Team impact\n- Problem-solving approach',
              order: 1,
            },
            {
              title: 'System Design Principles',
              content: '# Fundamental Principles\n\nCore concepts:\n- CAP theorem\n- Consistency models\n- Availability patterns\n- Partition tolerance strategies',
              order: 2,
            },
            {
              title: 'Designing for Scale',
              content: '# Scalability Patterns\n\nHorizontal vs Vertical scaling:\n- Load balancing\n- Database sharding\n- Caching strategies\n- CDN implementation',
              order: 3,
            },
            {
              title: 'API Design Best Practices',
              content: '# REST & GraphQL Architecture\n\nDesign guidelines:\n- API versioning\n- Error handling\n- Rate limiting\n- Documentation standards',
              order: 4,
            },
            {
              title: 'Database Architecture',
              content: '# SQL vs NoSQL Decision Matrix\n\nSelection criteria:\n- ACID requirements\n- Data relationships\n- Query patterns\n- Scale requirements',
              order: 5,
            },
            {
              title: 'Microservices vs Monolith',
              content: '# Architecture Decision Framework\n\nWhen to use what:\n- Team size & structure\n- Domain complexity\n- Operational overhead\n- Migration strategies',
              order: 6,
            },
            {
              title: 'Message Queues & Event-Driven',
              content: '# Asynchronous Processing\n\nEvent-driven patterns:\n- Pub/sub\n- Request/reply\n- Event sourcing\n- Saga pattern',
              order: 7,
            },
            {
              title: 'Observability & Monitoring',
              content: '# Three Pillars of Observability\n\nImplementation:\n- Metrics (Prometheus)\n- Logging (ELK stack)\n- Tracing (Jaeger/Zipkin)\n- Dashboards & alerting',
              order: 8,
            },
            {
              title: 'Security Architecture',
              content: '# Defense in Depth\n\nSecurity layers:\n- Authentication & authorization\n- Network security\n- Data encryption\n- Compliance & audit',
              order: 9,
            },
            {
              title: 'Performance Engineering',
              content: '# Performance Optimization\n\nOptimization strategies:\n- Profiling tools\n- Database optimization\n- Caching strategies\n- Algorithmic improvements',
              order: 10,
            },
            {
              title: 'Technical Documentation',
              content: '# Writing for Engineers\n\nDocumentation types:\n- Architecture Decision Records (ADR)\n- API documentation\n- Runbooks\n- Onboarding guides',
              order: 11,
            },
            {
              title: 'Code Review Excellence',
              content: '# Effective Code Reviews\n\nReview guidelines:\n- What to look for\n- How to give feedback\n- Pattern recognition\n- Teaching vs Checking',
              order: 12,
            },
            {
              title: 'Technical Leadership',
              content: '# Leading Technical Teams\n\nLeadership skills:\n- Technical decision-making\n- Mentoring juniors\n- Technical roadmapping\n- Stakeholder communication',
              order: 13,
            },
            {
              title: 'System Design Case Studies',
              content: '# Real-World Architectures\n\nAnalyze systems like:\n- URL shortener\n- Chat application\n- E-commerce platform\n- Streaming service\n- Real-time analytics',
              order: 14,
            },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: 'Fiqih Muamalah untuk Tech Professionals',
        description: 'Memahami hukum muamalah Islam dalam konteks dunia teknologi modern. Cryptocurrency, e-commerce, freelance, dan hukum keuangan syariah untuk tech professionals.',
        thumbnail: '/muamalah.jpg',
        price: 199000,
        category: 'keagamaan',
        level: 'intermediate',
        duration: 12,
        totalLessons: 6,
        lessons: {
          create: [
            {
              title: 'Prinsip Dasar Muamalah',
              content: '# Kaidah Fiqih Muamalah\n\nPrinsip fundamental:\n- Akad dan syarat sahnya\n- Riba dan jenis-jenisnya\n- Gharar (ketidakjelasan)\n- Maisir (perjudian)',
              order: 1,
            },
            {
              title: 'Hukum Cryptocurrency',
              content: '# Crypto dalam Perspektif Islam\n\nPandangan ulama:\n- Bitcoin sebagai currency\n- Stablecoin dan pegged coins\n- NFT dan virtual assets\n- DeFi dan smart contracts',
              order: 2,
            },
            {
              title: 'E-commerce Syariah',
              content: '# Berjualan Online Islami\n\nBest practices:\n- Transparansi produk\n- Pengiriman dan warranty\n- Refund policy\n- Penipuan dan fraud prevention',
              order: 3,
            },
            {
              title: 'Freelance & Remote Work',
              content: 'Bekerja dari Mana Saja\n\nHukum remote work:\n- Akad jasa (ijarah)\n- Project-based pricing\n- Hourly vs fixed rate\n- Working with international clients',
              order: 4,
            },
            {
              title: 'Investasi Syariah',
              content: '# Halal Investment Options\n\nSaham & reksadana:\n- Screening saham syariah\n- Sukuk vs obligasi\n- P2P lending\n- Properti investment',
              order: 5,
            },
            {
              title: 'Tech Ethics in Islam',
              content: '# Etika dalam Teknologi\n\nIslamic perspective:\n- Data privacy\n- AI and automation\n- Social media usage\n- Digital content creation',
              order: 6,
            },
          ],
        },
      },
    }),
  ])

  console.log(`✅ Created ${courses.length} courses`)
  console.log('🌱 Seed complete!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
