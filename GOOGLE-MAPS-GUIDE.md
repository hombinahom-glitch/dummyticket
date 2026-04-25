# 🗺️ PANDUAN GOOGLE MAPS EMBED

Google Maps sudah terintegrasi di halaman Contact dengan lokasi Anda di **Jl. Cemerlang 2 No.12, Pondok Gede, Bekasi**.

---

## ✅ FITUR YANG SUDAH ADA

- ✅ Google Maps embed dengan lokasi real
- ✅ Interactive map (user bisa zoom, pan, dll)
- ✅ Link "View larger map" ke Google Maps
- ✅ Responsive design (mobile-friendly)
- ✅ Fast loading dengan lazy load

---

## 🎯 LOKASI YANG DITAMPILKAN

**Alamat:**
```
Jl. Cemerlang 2 No.12
RT.007/RW.002, Jatibening Baru
Kec. Pondok Gede
Kota Bekasi, Jawa Barat 17412
```

**Koordinat:**
- Latitude: -6.2585224
- Longitude: 106.9411221

---

## 🔧 CARA GANTI LOKASI MAPS (Jika Perlu)

### STEP 1: Cari Lokasi di Google Maps

1. Buka https://www.google.com/maps
2. Cari alamat Anda
3. Klik **Share** button
4. Pilih **Embed a map**
5. Copy HTML code

### STEP 2: Update contact.html

Buka `contact.html`, cari section map, dan ganti iframe src dengan code baru dari Google Maps.

**Lokasi di file:**
```html
<!-- Map Section -->
<section class="map-section">
    <div class="map-container">
        <iframe 
            src="PASTE_EMBED_URL_DI_SINI"
            ...
        </iframe>
    </div>
</section>
```

---

## 🎨 CUSTOMISASI MAP

### 1. Ubah Ukuran Height

Di `style.css`, cari `.map-container`:

```css
.map-container {
    width: 100%;
    height: 450px;  /* Ubah angka ini */
}
```

**Rekomendasi:**
- Desktop: 400-500px
- Mobile: 300-400px

### 2. Ubah Zoom Level

Di embed URL, tambahkan parameter `&z=`:

```
&z=15  → Zoom level 15 (close-up)
&z=10  → Zoom level 10 (wider area)
```

### 3. Ubah Map Type

Tambahkan parameter:
```
&maptype=roadmap    → Default (jalan)
&maptype=satellite  → Satellite view
&maptype=hybrid     → Hybrid (satellite + labels)
&maptype=terrain    → Terrain
```

---

## 📱 RESPONSIVE DESIGN

Map sudah responsive! CSS akan otomatis adjust:

```css
@media (max-width: 768px) {
    .map-container {
        height: 300px;  /* Lebih kecil di mobile */
    }
}
```

---

## ⚡ LOADING PERFORMANCE

Maps menggunakan `loading="lazy"` untuk fast page load:

```html
<iframe 
    loading="lazy"      ← Lazy load
    ...
</iframe>
```

Maps hanya load saat user scroll ke section tersebut.

---

## 🔒 PRIVACY & SECURITY

Embed menggunakan:
```html
referrerpolicy="no-referrer-when-downgrade"
```

Ini melindungi privacy user saat klik link di map.

---

## 🎯 FITUR INTERACTIVE

User bisa:
- ✅ Zoom in/out dengan scroll atau tombol +/-
- ✅ Drag map untuk explore area
- ✅ Klik "View larger map" untuk buka di Google Maps app
- ✅ Get directions ke lokasi Anda

---

## 🐛 TROUBLESHOOTING

### Map tidak muncul?

**Solusi:**
1. Check internet connection
2. Pastikan embed URL valid
3. Clear browser cache (Ctrl+F5)
4. Check browser console (F12) untuk error

### Map loading lambat?

**Solusi:**
1. Gunakan `loading="lazy"` (sudah ada)
2. Compress page assets
3. Enable browser caching

### Map tidak responsive?

**Solusi:**
1. Pastikan CSS `.map-container` ada
2. Check `width: 100%` di iframe
3. Test di different screen sizes

---

## 💡 TIPS PRO

### 1. Custom Marker Color
Tidak bisa customize marker di embed, tapi bisa pakai Google Maps API (advanced).

### 2. Multiple Locations
Untuk show multiple locations, gunakan Google My Maps atau API.

### 3. Dark Mode Map
Google Maps embed akan auto-adjust ke dark mode jika user punya dark mode enabled di browser.

---

## 📝 ALTERNATIF: Custom Map Style

Jika ingin styling lebih custom, bisa pakai:
1. **Mapbox** - https://www.mapbox.com/
2. **Leaflet.js** - https://leafletjs.com/
3. **Google Maps JavaScript API** - Lebih powerful tapi butuh API key

---

## ✅ QUICK CHECKLIST

- [x] Google Maps embed terintegrasi
- [x] Lokasi correct (Jl. Cemerlang 2 No.12)
- [x] Responsive design
- [x] Lazy loading enabled
- [x] Privacy protected

---

## 📞 COORDINATE INFO

Jika butuh coordinate untuk GPS:

```
Latitude:  -6.2585224
Longitude: 106.9411221
```

Copy-paste ke Google Maps atau GPS app.

---

**🎉 Google Maps sudah siap digunakan!**

User bisa langsung klik map dan get directions ke lokasi Anda!
