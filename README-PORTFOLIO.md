# 🎨 TICKET CREATIVE DIGITAL - PORTFOLIO WEBSITE

Website portfolio lengkap dengan **MODAL POPUP SYSTEM** - klik subcategory untuk melihat detail lengkap project dengan 6+ foto dari folder hardisk Anda!

---

## ✨ FITUR UTAMA

### 1. **Portfolio Modal Popup** ⭐
- ✅ Klik subcategory (contoh: "Wedding Photography") → Modal popup terbuka
- ✅ Tampilkan 6+ foto per project dari **FOLDER HARDISK**
- ✅ Detail lengkap: Tanggal pelaksanaan, lokasi, client, duration, deliverables
- ✅ Smooth animations dan responsive design

### 2. **Lightbox Full View** 🖼️
- ✅ Klik foto di modal → Lightbox full-screen
- ✅ Navigasi prev/next dengan tombol atau keyboard (Arrow Keys)
- ✅ Wraparound navigation (foto terakhir → foto pertama)

### 3. **Portfolio Filter** 🔍
- ✅ Filter by category: All Works, UI/UX, Social Media, Photography
- ✅ Smooth fade animations

### 4. **Semua Foto dari Folder Hardisk** 📁
- ✅ **TIDAK ADA foto dari website/URL**
- ✅ Semua path menggunakan: `images/portfolio/kategori/nama-foto.jpg`

---

## 📁 STRUKTUR FOLDER LENGKAP

```
website-ticket/
│
├── index.html              # Homepage
├── about.html              # Halaman About
├── portfolio.html          # Halaman Portfolio dengan MODAL POPUP
├── contact.html            # Halaman Contact
├── style.css               # Semua styling termasuk modal & lightbox
├── script.js               # JavaScript dengan portfolio data & fungsi modal
│
└── images/                 # ⚠️ FOLDER INI HARUS ANDA BUAT!
    └── portfolio/          # Semua foto portfolio di sini
        │
        ├── wedding/        # 📸 Wedding Photography (6 foto)
        │   ├── ceremony-moment.jpg
        │   ├── couple-portrait.jpg
        │   ├── reception-party.jpg
        │   ├── detail-shots.jpg
        │   ├── family-moments.jpg
        │   └── sunset-portrait.jpg
        │
        ├── product/        # 📸 Product Photography (6 foto)
        │   ├── flatlay.jpg
        │   ├── clothing-detail.jpg
        │   ├── lifestyle-shot.jpg
        │   ├── accessories.jpg
        │   ├── model-shoot.jpg
        │   └── packaging.jpg
        │
        ├── portrait/       # 📸 Portrait Photography (6 foto)
        │   ├── studio-portrait.jpg
        │   ├── outdoor-natural.jpg
        │   ├── closeup.jpg
        │   ├── fashion-look.jpg
        │   ├── black-white.jpg
        │   └── creative-angle.jpg
        │
        ├── event/          # 📸 Event Photography (6 foto)
        │   ├── opening-ceremony.jpg
        │   ├── keynote-speaker.jpg
        │   ├── networking.jpg
        │   ├── award-ceremony.jpg
        │   ├── dinner-gala.jpg
        │   └── group-photo.jpg
        │
        ├── uiux/           # 🎨 UI/UX Design (6 screenshot)
        │   ├── dashboard-overview.jpg
        │   ├── data-visualization.jpg
        │   ├── task-management.jpg
        │   ├── settings-panel.jpg
        │   ├── reports-page.jpg
        │   └── mobile-view.jpg
        │
        ├── mobile/         # 🎨 Mobile App (6 screenshot)
        │   ├── home-screen.jpg
        │   ├── product-detail.jpg
        │   ├── shopping-cart.jpg
        │   ├── checkout-flow.jpg
        │   ├── user-profile.jpg
        │   └── search-filter.jpg
        │
        ├── social/         # 📱 Social Media Campaign (6 content)
        │   ├── teaser-campaign.jpg
        │   ├── launch-day.jpg
        │   ├── product-showcase.jpg
        │   ├── influencer-collab.jpg
        │   ├── user-generated.jpg
        │   └── campaign-results.jpg
        │
        └── instagram/      # 📱 Instagram Content (6 content)
            ├── feed-grid.jpg
            ├── product-posts.jpg
            ├── quote-graphics.jpg
            ├── lifestyle-shots.jpg
            ├── carousel-posts.jpg
            └── stories-template.jpg
```

**Total: 48 foto yang perlu diupload**

---

## 🚀 CARA SETUP (3 LANGKAH MUDAH)

### LANGKAH 1: Buat Struktur Folder

Buka terminal/command prompt di folder website, lalu jalankan:

```bash
mkdir -p images/portfolio/wedding
mkdir -p images/portfolio/product
mkdir -p images/portfolio/portrait
mkdir -p images/portfolio/event
mkdir -p images/portfolio/uiux
mkdir -p images/portfolio/mobile
mkdir -p images/portfolio/social
mkdir -p images/portfolio/instagram
```

**Atau buat manual** di File Explorer:
1. Buat folder `images`
2. Di dalam `images`, buat folder `portfolio`
3. Di dalam `portfolio`, buat 8 folder: wedding, product, portrait, event, uiux, mobile, social, instagram

### LANGKAH 2: Upload Foto Anda

**⚠️ SUPER PENTING: Nama file harus PERSIS SAMA!**

Upload foto Anda ke folder yang sesuai dengan nama file **EXACTLY** seperti ini:

**Photography:**
- `wedding/ceremony-moment.jpg` ✅
- `wedding/Ceremony-Moment.jpg` ❌ (huruf kapital)
- `wedding/ceremony moment.jpg` ❌ (ada spasi)

**Tips:**
- Rename foto Anda sesuai nama di struktur folder
- Gunakan huruf kecil semua
- Gunakan dash (-) bukan spasi atau underscore

### LANGKAH 3: Buka Website

1. Double-click `index.html` atau buka di browser
2. Navigate ke halaman **Portfolio**
3. **KLIK salah satu subcategory** (contoh: Wedding Photography)
4. **Modal popup** akan muncul dengan 6 foto dan detail lengkap!

---

## 💡 CARA MENGGUNAKAN FITUR

### Klik Subcategory → Modal Popup
1. Di halaman portfolio, klik salah satu item (contoh: "Wedding Photography")
2. Modal popup akan muncul dengan:
   - **6 foto** dalam gallery grid
   - **Project details**: Tanggal pelaksanaan, lokasi, client
   - **Deliverables**: Apa yang diserahkan ke client

### Klik Foto → Lightbox Full View
1. Di dalam modal, klik salah satu foto
2. Lightbox full-screen akan muncul
3. Gunakan:
   - **Tombol ‹ › ** untuk prev/next
   - **Arrow Keys (←  →)** pada keyboard
   - **ESC** untuk close
   - **Klik di luar** untuk close

### Filter Portfolio
- Klik **"ALL WORKS"** → Tampilkan semua (12 items)
- Klik **"UI/UX DESIGN"** → Tampilkan 4 items UI/UX
- Klik **"SOCIAL MEDIA"** → Tampilkan 4 items Social Media
- Klik **"PHOTOGRAPHY"** → Tampilkan 4 items Photography

---

## 📝 DATA PORTFOLIO YANG SUDAH ADA

### Photography (4 subcategories)
1. **Wedding Photography**
   - Tanggal: 15 Desember 2024
   - Client: Rani & Ahmad
   - 6 foto dari folder

2. **Product Photography**
   - Tanggal: 3 Januari 2025
   - Client: Urban Style Co.
   - 6 foto dari folder

3. **Portrait Session**
   - Tanggal: 20 November 2024
   - Client: Sarah Martinez
   - 6 foto dari folder

4. **Event Coverage**
   - Tanggal: 8 Januari 2025
   - Client: PT. Maju Bersama
   - 6 foto dari folder

### UI/UX Design (2 subcategories)
1. **Dashboard Design**
   - Tanggal: 10 Desember 2024
   - Client: TechStart Solutions
   - 6 screenshot dari folder

2. **Mobile App**
   - Tanggal: 5 Januari 2025
   - Client: ShopEasy Indonesia
   - 6 screenshot dari folder

### Social Media (2 subcategories)
1. **Brand Launch Campaign**
   - Tanggal: 1 Desember 2024
   - Client: Elevate Fashion
   - 6 content dari folder

2. **Instagram Content Series**
   - Tanggal: 15 Januari 2025
   - Client: Minimalist Living Co.
   - 6 content dari folder

---

## 🔧 CARA MENAMBAH PORTFOLIO BARU

### 1. Tambah Data di `script.js`

Buka `script.js`, cari object `portfolioData`, dan tambahkan:

```javascript
'portfolio-id-baru': {
    category: 'PHOTOGRAPHY',  // atau 'UI/UX DESIGN', 'SOCIAL MEDIA'
    title: 'JUDUL PORTFOLIO BARU',
    date: 'DD Bulan YYYY',
    location: 'Lokasi Pelaksanaan',
    description: 'Deskripsi lengkap project...',
    client: 'Nama Client',
    duration: 'Durasi pengerjaan',
    deliverables: 'Apa yang diserahkan ke client',
    images: [
        {
            url: 'images/portfolio/folder-baru/foto-1.jpg',
            title: 'Judul Foto 1',
            description: 'Deskripsi singkat foto 1'
        },
        {
            url: 'images/portfolio/folder-baru/foto-2.jpg',
            title: 'Judul Foto 2',
            description: 'Deskripsi singkat foto 2'
        },
        // ... minimal 6 foto total
    ]
}
```

### 2. Tambah Item di `portfolio.html`

Cari section portfolio grid, dan tambahkan:

```html
<div class="portfolio-main-item" data-category="photography" data-portfolio-id="portfolio-id-baru">
    <div class="portfolio-main-image">
        <img src="images/portfolio/folder-baru/foto-1.jpg" alt="Portfolio Baru">
        <div class="portfolio-overlay">
            <div class="portfolio-overlay-content">
                <span class="portfolio-category">PHOTOGRAPHY</span>
                <h3>JUDUL PORTFOLIO BARU</h3>
                <p>Deskripsi singkat</p>
            </div>
        </div>
    </div>
</div>
```

### 3. Upload Foto ke Folder Baru

```bash
mkdir -p images/portfolio/folder-baru
# Upload 6+ foto ke folder ini
```

---

## 🐛 TROUBLESHOOTING

### Foto tidak muncul?
**Solusi:**
1. Cek path folder: harus `images/portfolio/...` (huruf kecil)
2. Cek nama file: harus **persis sama** dengan di `script.js`
3. Cek file extension: `.jpg` atau `.png` (huruf kecil)
4. File HTML dan folder `images` harus di folder yang sama

### Modal tidak muncul saat klik?
**Solusi:**
1. Buka browser console (F12) → lihat error
2. Pastikan `data-portfolio-id` di HTML sama dengan key di `portfolioData`
3. Clear browser cache (Ctrl+Shift+Del)

### Foto tampil tapi blur?
**Solusi:**
1. Gunakan resolusi minimal 1600x1200px
2. Compress foto tapi jangan terlalu kecil (target 300-500KB)

### Filter tidak bekerja?
**Solusi:**
1. Clear browser cache dan refresh (Ctrl+F5)
2. Cek console untuk error messages
3. Pastikan `data-category` di HTML benar (uiux, socialmedia, photography)

---

## 📊 UKURAN FOTO YANG DIREKOMENDASIKAN

| Kategori | Ukuran | Format | Max Size |
|----------|--------|--------|----------|
| **Photography** | 1600x1200px | JPG | 500KB |
| **UI/UX Screenshots** | 1920x1080px | PNG/JPG | 800KB |
| **Social Media** | 1080x1080px | JPG | 500KB |

**Tools untuk Compress Foto:**
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- ImageOptim (Mac)

---

## ⌨️ KEYBOARD SHORTCUTS

- **ESC** → Close modal/lightbox
- **← →** (Arrow Keys) → Navigate prev/next di lightbox
- **Click outside** → Close modal/lightbox

---

## ✅ TESTING CHECKLIST

Setelah setup, test fitur-fitur berikut:

- [ ] Filter "ALL WORKS" menampilkan 12 items
- [ ] Filter "PHOTOGRAPHY" menampilkan 4 items
- [ ] Filter "UI/UX DESIGN" menampilkan 2 items
- [ ] Filter "SOCIAL MEDIA" menampilkan 2 items
- [ ] Klik "Wedding Photography" → Modal muncul
- [ ] Modal menampilkan 6 foto
- [ ] Modal menampilkan tanggal, lokasi, client
- [ ] Klik foto di modal → Lightbox muncul
- [ ] Tombol prev/next di lightbox berfungsi
- [ ] Arrow keys di lightbox berfungsi
- [ ] ESC menutup modal dan lightbox
- [ ] Responsive di mobile

---

## 🎉 SELESAI!

Website Anda sekarang memiliki:
- ✅ Modal popup system yang profesional
- ✅ Semua foto dari folder hardisk (bukan website)
- ✅ Detail lengkap setiap project
- ✅ Lightbox full view dengan navigasi
- ✅ Responsive design

**Tinggal upload foto Anda dan website siap digunakan!** 🚀
