# SB school - Progressive Web App (PWA) สำหรับ GitHub Pages

ชุดไฟล์ PWA ครบวงจรสำหรับนำขึ้น **GitHub Pages** เพื่อให้ผู้ปกครองสามารถติดตั้งแอป **SB school** ลงบนโทรศัพท์มือถือ (ทั้ง iPhone, iPad และ Android) ได้อย่างง่ายดาย

---

## 📁 โครงสร้างไฟล์ในโฟลเดอร์นี้
* **index.html**: หน้า PWA Shell หลัก พร้อมหน้าจอ Splash Screen โลโก้โรงเรียน, Popup ติดตั้งแอป, และปุ่มลอย
* **manifest.json**: การกำหนดค่า Web App Manifest (ชื่อแอป SB school, สีธีม #1B3B6F, โหมด standalone)
* **sw.js**: Service Worker สำหรับแคชไฟล์และรองรับ PWA ออฟไลน์
* **icon-192.png**: ไอคอนแอปขนาด 192x192 สำหรับ Android
* **icon-512.png**: ไอคอนแอปขนาด 512x512 สำหรับหน้าจอความละเอียดสูง
* **apple-touch-icon.png**: ไอคอนตราโรงเรียนสำหรับ iPhone/iPad (iOS Home Screen)
* **favicon.png**: ไอคอนแท็บเบราว์เซอร์

---

## 🚀 วิธีเปิดใช้งานบน GitHub Pages (3 ขั้นตอนง่ายๆ)

### วิธีที่ 1: อัปโหลดผ่านหน้าเว็บ GitHub (ง่ายที่สุด ไม่ต้องลงโปรแกรม)
1. เข้าเว็บ [GitHub.com](https://github.com) แล้วล็อกอินบัญชีของคุณ
2. กดปุ่ม **New Repository** (ตั้งชื่อ เช่น `sb-school`) และเลือกเป็น **Public**
3. กดปุ่ม **Upload files** แล้วลากไฟล์ทั้งหมดในโฟลเดอร์นี้ (`github_pages_pwa`) ขึ้นไป แล้วกด **Commit changes**
4. ไปที่แท็บ **Settings** > เมนูด้านซ้ายเลือก **Pages**
   * ที่หัวข้อ **Build and deployment** > **Branch** ให้เลือกเป็น `main` (หรือ `master`) แล้วกดปุ่ม **Save**
5. รอประมาณ 1-2 นาที จะได้ลิงก์ของโรงเรียน เช่น:
   `https://<ชื่อผู้ใช้ของคุณ>.github.io/sb-school/`

---

## 📲 ประโยชน์เมื่อเปิดผ่าน GitHub Pages:
1. ได้โดเมนส่วนตัวที่มีระบบ HTTPS ปลอดภัยระดับสากล
2. รองรับ PWA แบบ 100% Native: มือถือ Android จะขึ้นแถบ **"ติดตั้งแอป"** ขึ้นมาให้ผู้ใช้กดทันที
3. iPhone / iPad เมื่อกด **"เพิ่มไปยังหน้าจอโฮม"** จะได้ชื่อ **SB school** และไอคอน **ตราโรงเรียนสีตบุตรบำรุง** คมชัดแน่นอน 100%!
