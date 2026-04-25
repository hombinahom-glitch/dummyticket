# 🎨 TICKET CREATIVE DIGITAL - WEBSITE PORTFOLIO

Website portfolio lengkap dengan sistem modal popup untuk showcase portfolio photography, UI/UX design, dan social media content.

---

## 📁 STRUKTUR FOLDER LENGKAP

```
website-ticket/
│
├── index.html              # Homepage
├── about.html              # Halaman About
├── portfolio.html          # Halaman Portfolio dengan modal
├── contact.html            # Halaman Contact
├── style.css               # Semua styling termasuk modal
├── script.js               # JavaScript dengan portfolio data dan fungsi modal
│
└── images/                 # FOLDER FOTO - BUAT FOLDER INI!
    │
    ├── hero/               # Foto untuk homepage
    │   └── team-hero.jpg   # Foto tim untuk hero section (550x550px)
    │
    ├── team/               # Foto tim untuk about page
    │   ├── team-photo.jpg  # Foto grup tim (700x800px)
    │   ├── kuskus.jpg      # Foto Kuskus (400x500px)
    │   ├── yanto.jpg       # Foto Yanto (400x500px)
    │   ├── tirek.jpg       # Foto Tirek (400x500px)
    │   ├── kiki-gendut.jpg # Foto Kiki Gendut (400x500px)
    │   └── acil.jpg        # Foto Acil (400x500px)
    │
    └── portfolio/          # Foto portfolio (yang paling penting!)
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

---

## 🚀 CARA SETUP

### 1. Buat Struktur Folder

**OTOMATIS** - Gunakan script yang sudah disediakan:
```bash
bash create-image-folders.sh
```

**MANUAL** - Atau buat folder manual:
```bash
mkdir -p images/hero
mkdir -p images/team
mkdir -p images/portfolio/wedding
mkdir -p images/portfolio/product
mkdir -p images/portfolio/portrait
mkdir -p images/portfolio/event
mkdir -p images/portfolio/uiux
mkdir -p images/portfolio/mobile
mkdir -p images/portfolio/social
mkdir -p images/portfolio/instagram
```

### 2. Upload Foto Anda

**⚠️ PENTING: Nama file harus PERSIS SAMA dengan yang tertera!**

Contoh BENAR:
- ✅ `ceremony-moment.jpg`
- ✅ `couple-portrait.jpg`

Contoh SALAH:
- ❌ `Ceremony-Moment.jpg` (huruf kapital)
- ❌ `ceremony moment.jpg` (ada spasi)
- ❌ `ceremony_moment.jpg` (pakai underscore)

### 3. Ukuran Foto yang Direkomendasikan

| Kategori | Ukuran | Format | Max Size |
|----------|--------|--------|----------|
| **Portfolio Photos** | 1600x1200px | JPG/PNG | 500KB |
| **UI/UX Screenshots** | 1920x1080px | JPG/PNG | 800KB |
| **Social Media** | 1080x1080px | JPG/PNG | 500KB |
| **Team Photos** | 400x500px | JPG/PNG | 300KB |
| **Hero Image** | 550x550px | JPG/PNG | 400KB |

### 4. Test Website

1. Buka `index.html` di browser
2. Navigate ke halaman Portfolio
3. Klik setiap portfolio item
4. Pastikan:
   - ✅ Modal popup muncul
   - ✅ 6 foto tampil semua
   - ✅ Bisa klik foto untuk lightbox
   - ✅ Navigasi prev/next berfungsi

---

## ✨ FITUR YANG SUDAH TERINTEGRASI

### 1. Modal Popup Portfolio
- Klik portfolio item → Modal terbuka
- Menampilkan 6+ foto per project
- Detail lengkap: client, tanggal, duration, deliverables
- Smooth animations

### 2. Lightbox Full View
- Klik foto di modal → Lightbox full-screen
- Navigasi prev/next dengan tombol atau keyboard (arrow keys)
- Close dengan ESC atau klik di luar

### 3. Portfolio Filter
- Filter by category: All, UI/UX, Social Media, Photography
- Smooth fade animations

### 4. Responsive Design
- Mobile-friendly
- Hamburger menu untuk mobile
- Touch-friendly interactions

---

## 📝 CHECKLIST UPLOAD FOTO

**Total: 54 foto yang perlu diupload**

### Homepage & About (8 foto)
- [ ] images/hero/team-hero.jpg
- [ ] images/team/team-photo.jpg
- [ ] images/team/kuskus.jpg
- [ ] images/team/yanto.jpg
- [ ] images/team/tirek.jpg
- [ ] images/team/kiki-gendut.jpg
- [ ] images/team/acil.jpg

### Photography Portfolio (24 foto)
**Wedding (6):**
- [ ] ceremony-moment.jpg
- [ ] couple-portrait.jpg
- [ ] reception-party.jpg
- [ ] detail-shots.jpg
- [ ] family-moments.jpg
- [ ] sunset-portrait.jpg

**Product (6):**
- [ ] flatlay.jpg
- [ ] clothing-detail.jpg
- [ ] lifestyle-shot.jpg
- [ ] accessories.jpg
- [ ] model-shoot.jpg
- [ ] packaging.jpg

**Portrait (6):**
- [ ] studio-portrait.jpg
- [ ] outdoor-natural.jpg
- [ ] closeup.jpg
- [ ] fashion-look.jpg
- [ ] black-white.jpg
- [ ] creative-angle.jpg

**Event (6):**
- [ ] opening-ceremony.jpg
- [ ] keynote-speaker.jpg
- [ ] networking.jpg
- [ ] award-ceremony.jpg
- [ ] dinner-gala.jpg
- [ ] group-photo.jpg

### UI/UX Design (12 screenshot)
**Dashboard (6):**
- [ ] dashboard-overview.jpg
- [ ] data-visualization.jpg
- [ ] task-management.jpg
- [ ] settings-panel.jpg
- [ ] reports-page.jpg
- [ ] mobile-view.jpg

**Mobile App (6):**
- [ ] home-screen.jpg
- [ ] product-detail.jpg
- [ ] shopping-cart.jpg
- [ ] checkout-flow.jpg
- [ ] user-profile.jpg
- [ ] search-filter.jpg

### Social Media (12 content)
**Campaign (6):**
- [ ] teaser-campaign.jpg
- [ ] launch-day.jpg
- [ ] product-showcase.jpg
- [ ] influencer-collab.jpg
- [ ] user-generated.jpg
- [ ] campaign-results.jpg

**Instagram (6):**
- [ ] feed-grid.jpg
- [ ] product-posts.jpg
- [ ] quote-graphics.jpg
- [ ] lifestyle-shots.jpg
- [ ] carousel-posts.jpg
- [ ] stories-template.jpg

---

## 🔧 CARA MENAMBAH PORTFOLIO BARU

### 1. Edit `script.js`

Tambahkan data portfolio baru di object `portfolioData`:

```javascript
'portfolio-id-baru': {
    category: 'PHOTOGRAPHY',  // atau 'UI/UX DESIGN', 'SOCIAL MEDIA'
    title: 'JUDUL PORTFOLIO BARU',
    date: 'DD Bulan YYYY',
    location: 'Lokasi Pelaksanaan',
    description: 'Deskripsi lengkap project...',
    client: 'Nama Client',
    duration: 'Durasi',
    deliverables: 'Deliverables',
    images: [
        {
            url: 'images/portfolio/folder-baru/foto-1.jpg',
            title: 'Judul Foto',
            description: 'Deskripsi foto'
        },
        // ... minimal 6 foto
    ]
}
```

### 2. Edit `portfolio.html`

Tambahkan item portfolio baru:

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

### 3. Upload Foto

Buat folder baru di `images/portfolio/folder-baru/` dan upload 6+ foto

---

## 🐛 TROUBLESHOOTING

### Foto tidak muncul?
**Solusi:**
1. Cek path folder: harus `images/portfolio/...` (huruf kecil semua)
2. Cek nama file: harus persis sama dengan di `script.js`
3. Cek file extension: `.jpg` atau `.png` (huruf kecil)
4. Cek lokasi file: file HTML dan folder images harus di root yang sama

### Modal tidak muncul saat klik?
**Solusi:**
1. Pastikan `data-portfolio-id` di HTML sama dengan key di `portfolioData`
2. Cek browser console untuk error (F12)
3. Pastikan `script.js` ter-load dengan benar

### Foto loading lambat?
**Solusi:**
1. Compress semua foto dengan tools seperti TinyPNG
2. Target ukuran file < 500KB
3. Gunakan format JPG untuk foto (bukan PNG)

### Lightbox tidak berfungsi?
**Solusi:**
1. Pastikan modal HTML sudah ditambahkan di `portfolio.html`
2. Cek apakah `style.css` memiliki styling `.lightbox`
3. Clear browser cache dan refresh

---

## 📞 SUPPORT

Jika ada masalah atau butuh bantuan:
1. Check browser console untuk error messages (F12)
2. Pastikan semua file ada di lokasi yang benar
3. Verify nama file foto sesuai dengan yang di `script.js`

---

## ✅ QUICK START CHECKLIST

- [ ] Extract semua file HTML, CSS, JS ke folder website
- [ ] Jalankan `bash create-image-folders.sh` untuk buat struktur folder
- [ ] Upload foto ke folder yang sesuai (ikuti CHECKLIST UPLOAD FOTO)
- [ ] Buka `index.html` di browser
- [ ] Test semua fitur (navigate, modal, lightbox)
- [ ] Deploy ke hosting jika sudah oke!

---

**🎉 Website siap digunakan! Semua foto dari hardisk Anda sendiri!**
