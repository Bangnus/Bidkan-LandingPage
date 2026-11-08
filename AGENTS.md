# 🚲 Project Context & Agent Instructions: "BidKan" (บิดกัน) - Landing Page

ยินดีต้อนรับสู่โปรเจกต์ **BidKan Landing Page** — เว็บไซต์ประชาสัมพันธ์หลัก (Marketing & SEO Website) สำหรับแพลตฟอร์มสมาร์ทอีไบค์แชร์ริ่ง BidKan

---

## 🌟 สถาปัตยกรรมระบบแบบแยกโปรเจกต์ (Separated Ecosystem)
โปรเจกต์ในระบบ BidKan แยกการทำงานตามหน้าที่ชัดเจน:
1. **`bidkan-landingpage` (Port 3002 / `bidkan.com`):** เว็บหน้าบ้านสำหรับโฆษณา ประชาสัมพันธ์ แนะนำฟีเจอร์ ขั้นตอนการใช้งาน และ SEO โดยปุ่ม CTA ทั้งหมดจะลิงก์ไปยัง `NEXT_PUBLIC_CLIENT_APP_URL` (`bidkan-client`)
2. **`bidkan-client` (Port 3000 / `app.bidkan.com`):** Web Application สำหรับผู้ใช้งานจริง (แผนที่, กระเป๋าเงิน, สแกน QR) และใช้แสดงผลภายในแอปมือถือ (Mobile WebView / PWA)
3. **`bidkan-backoffice` (Port 3001 / `admin.bidkan.com`):** ระบบบริหารจัดการหลังบ้านสำหรับแอดมิน
4. **`Bidkan-backend` (Port 8080 / `api.bidkan.com`):** Go REST API, PostgreSQL/PostGIS, Redis, และ MQTT Broker

---

## 🛠️ Tech Stack
- **Framework:** Next.js 16 (App Router)
- **UI & Runtime:** React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **Animation & Icons:** Framer Motion (`framer-motion`), Lucide React (`lucide-react`)

---

## 🚀 Common Commands
```bash
# Start Development Server (Port 3002)
npm run dev -- -p 3002

# Lint Check
npm run lint

# Production Build
npm run build
```
