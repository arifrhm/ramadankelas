# Deployment Guide - RamadanKelas

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

RamadanKelas dibangun dengan Next.js, sehingga deployment ke Vercel sangat optimal.

#### Prerequisites:
- Vercel account
- GitHub repository
- Mayar account (untuk payment integration)

#### Steps:

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Deploy ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Import dari GitHub
   - Pilih preset "Next.js"
   - Configure environment variables

3. **Environment Variables**
   ```env
   NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
   DATABASE_URL=<use-production-database>
   MAYAR_API_KEY=<your-mayar-api-key>
   ```

4. **Database Production**
   ```bash
   # Gunakan PostgreSQL/MySQL untuk production
   # Update prisma/schema.prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   
   npx prisma migrate deploy
   ```

5. **Seed Production Data**
   ```bash
   npx prisma db seed
   ```

### Option 2: Railway

1. **Create Project**
   - Buka [railway.app](https://railway.app)
   - New Project → Deploy from GitHub repo

2. **Add Database**
   - Add PostgreSQL database
   - Copy DATABASE_URL

3. **Configure Variables**
   - Add environment variables di Railway dashboard

4. **Deploy**
   - Railway akan otomatis deploy

### Option 3: Docker + VPS

1. **Build Docker Image**
   ```dockerfile
   # Dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build
   CMD ["npm", "start"]
   ```

2. **Push ke Registry**
   ```bash
   docker build -t ramadankelas .
   docker tag ramadankelas <username>/ramadankelas
   docker push <username>/ramadankelas
   ```

3. **Deploy ke VPS**
   ```bash
   docker pull <username>/ramadankelas
   docker run -p 3000:3000 -e DATABASE_URL=<url> <username>/ramadankelas
   ```

## 🔧 Environment Variables

| Variable | Description | Required | Example |
|-----------|-------------|-----------|---------|
| `NEXT_PUBLIC_BASE_URL` | Base URL aplikasi | Yes | `https://ramadankelas.vercel.app` |
| `DATABASE_URL` | Database connection string | Yes | `postgresql://user:pass@host:5432/db` |
| `MAYAR_API_KEY` | Mayar API key (opsional) | No | `mayar_live_xxxxx` |

## 📊 Checklist Pre-Deployment

- [ ] Update `.env` dengan production values
- [ ] Ganti SQLite ke PostgreSQL/MySQL untuk production
- [ ] Run `npx prisma migrate deploy`
- [ ] Seed production data
- [ ] Test semua features di staging
- [ ] Setup Mayar integration
- [ ] Configure domain
- [ ] Setup monitoring (optional)

## 🎯 Submission ke Kompetisi

Untuk submit ke Mayar Vibecoding Competition 2026:

1. **Persiapkan Materials**
   - [ ] Repository GitHub yang publik
   - [ ] README.md yang lengkap
   - [ ] Demo link (Vercel/Railway)
   - [ ] Screenshot/video demo (opsional)

2. **Submit**
   - Buka halaman submission kompetisi
   - Isi form dengan link repository
   - Jelaskan fitur dan Mayar integration
   - Mention bahwa konten text-based

3. **Points yang Ditonjolkan**
   - ✅ Dibangun dengan vibecoding (AI assistance)
   - ✅ Text-based content materials
   - ✅ Mayar payment integration
   - ✅ PoC courses untuk upgrade ke senior
   - ✅ Modern tech stack (Next.js 14, TypeScript)
   - ✅ Responsive dan accessible design

## 🔍 Testing Post-Deployment

```bash
# Test API endpoints
curl https://your-domain.com/api/courses

# Test checkout API
curl -X POST https://your-domain.com/api/checkout \
  -H "Content-Type: application/json" \
  -d '{"courseId":"xxx","userName":"Test","userEmail":"test@example.com"}'

# Test web vitals
npx lighthouse https://your-domain.com
```

## 📈 Monitoring

### Recommended Tools:
- **Vercel Analytics** - Traffic dan performance
- **Sentry** - Error tracking
- **Prisma Accelerate** - Database query optimization (opsional)
- **Uptime monitoring** - UptimeRobot atau Pingdom

## 🔄 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

Good luck with the competition! 🚀
