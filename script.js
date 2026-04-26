// ============================================================
// PANDUAN PENGATURAN FOTO — HANYA UNTUK PEMILIK FILE
// ============================================================
//
// Setiap foto bisa kamu atur dengan 2 properti:
//
//   pos  → posisi fokus foto (x% y%)
//          Contoh:
//            "50% 50%"  = tengah (default)
//            "50% 20%"  = fokus ke bagian atas
//            "50% 80%"  = fokus ke bagian bawah
//            "30% 50%"  = fokus ke kiri
//            "70% 50%"  = fokus ke kanan
//
//   zoom → seberapa besar foto di-zoom (1 = normal)
//          Contoh:
//            1.0  = tidak di-zoom (pas dengan kotak)
//            1.2  = zoom 20% lebih besar
//            1.5  = zoom 50% lebih besar
//            2.0  = zoom 2x lipat
//
// CARA PAKAI:
//   1. Cari portfolio ID yang mau diubah (contoh: 'wedding-photo')
//   2. Temukan foto yang ingin diatur (lihat url-nya)
//   3. Ubah nilai pos dan/atau zoom
//   4. Simpan file → refresh browser → langsung keliatan hasilnya!
//
// CATATAN: pos dan zoom HANYA mengatur tampilan crop di card/modal.
//          Foto aslinya tidak berubah sama sekali.
// ============================================================

const portfolioData = {

    'wedding-photo': {
        category: 'PHOTOGRAPHY',
        title: 'WEDDING PHOTOGRAPHY',
        date: '24 Mei 2009',
        location: 'Ballroom Grand Hyatt, Jakarta',
        description: 'Dokumentasi pernikahan dengan style cinematic yang mengabadikan setiap momen berharga dari hari istimewa. Kami menangkap emosi, kebahagiaan, dan keintiman dengan pendekatan yang natural namun tetap memperhatikan komposisi dan lighting profesional.',
        client: 'Rani & Ahmad',
        duration: '10 jam',
        deliverables: '500+ foto teredited, 1 highlight video, 1 full ceremony video',
        // COVER CARD — foto yang tampil di grid portfolio
        coverImage: {
            url: 'Cover.jpg',
            pos: '50% 50%',   // ← ubah posisi fokus
            zoom: 1.0         // ← ubah zoom
        },
        images: [
            { url: 'images/portfolio/wedding/ceremony-moment.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Ceremony Moment',  description: 'Akad nikah yang penuh haru' },
            { url: 'images/portfolio/wedding/couple-portrait.jpg',  pos: '50% 30%', zoom: 1.1,  title: 'Couple Portrait',  description: 'Foto pasangan dengan lighting natural' },
            { url: 'images/portfolio/wedding/reception-party.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Reception Party',  description: 'Suasana resepsi yang meriah' },
            { url: 'images/portfolio/wedding/detail-shots.jpg',     pos: '50% 50%', zoom: 1.2,  title: 'Detail Shots',     description: 'Detail cincin dan dekorasi' },
            { url: 'images/portfolio/wedding/family-moments.jpg',   pos: '50% 50%', zoom: 1.0,  title: 'Family Moments',   description: 'Kebersamaan dengan keluarga' },
            { url: 'images/portfolio/wedding/sunset-portrait.jpg',  pos: '50% 40%', zoom: 1.0,  title: 'Sunset Portrait',  description: 'Golden hour shoot' }
        ]
    },

    'product-photo': {
        category: 'PHOTOGRAPHY',
        title: 'PRODUCT PHOTOGRAPHY',
        date: '3 Januari 2025',
        location: 'Studio Ticket Creative, Jakarta',
        description: 'Sesi fotografi produk untuk brand fashion & lifestyle dengan konsep minimalis modern.',
        client: 'Urban Style Co.',
        duration: '3 hari shooting',
        deliverables: '150+ foto produk, 50+ lifestyle shots',
        coverImage: {
            url: 'Cover1.jpg',
            pos: '50% 50%',
            zoom: 1.0
        },
        images: [
            { url: 'F:\web ticket\rev 2\images\portofolio\Cover1.jpg',          pos: '50% 50%', zoom: 1.0,  title: 'Product Flatlay',  description: 'Komposisi flatlay dengan props minimal' },
            { url: 'images/portfolio/product/clothing-detail.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Clothing Detail',  description: 'Close-up detail tekstur kain' },
            { url: 'images/portfolio/product/lifestyle-shot.jpg',   pos: '50% 50%', zoom: 1.0,  title: 'Lifestyle Shot',   description: 'Produk dalam konteks penggunaan' },
            { url: 'images/portfolio/product/accessories.jpg',      pos: '50% 50%', zoom: 1.0,  title: 'Accessories',      description: 'Koleksi aksesori pelengkap' },
            { url: 'images/portfolio/product/model-shoot.jpg',      pos: '50% 20%', zoom: 1.1,  title: 'Model Shoot',      description: 'Produk on model' },
            { url: 'images/portfolio/product/packaging.jpg',        pos: '50% 50%', zoom: 1.0,  title: 'Packaging',        description: 'Detail kemasan produk' }
        ]
    },

    'portrait-session': {
        category: 'PHOTOGRAPHY',
        title: 'PORTRAIT SESSION',
        date: '20 November 2024',
        location: 'Outdoor Location & Studio',
        description: 'Sesi portrait photography dengan lighting profesional yang menangkap karakter dan kepribadian subjek.',
        client: 'Sarah Martinez',
        duration: '4 jam',
        deliverables: '80+ foto teredited, 10 foto premium retouch',
        coverImage: {
            url: 'images/portfolio/portrait/studio-portrait.jpg',
            pos: '50% 20%',
            zoom: 1.1
        },
        images: [
            { url: 'images/portfolio/portrait/studio-portrait.jpg', pos: '50% 20%', zoom: 1.1,  title: 'Studio Portrait',  description: 'Classic studio portrait dengan dramatic lighting' },
            { url: 'images/portfolio/portrait/outdoor-natural.jpg', pos: '50% 30%', zoom: 1.0,  title: 'Outdoor Natural',  description: 'Portrait dengan natural light' },
            { url: 'images/portfolio/portrait/closeup.jpg',         pos: '50% 20%', zoom: 1.2,  title: 'Close-up',         description: 'Detail wajah dengan focus tajam' },
            { url: 'images/portfolio/portrait/fashion-look.jpg',    pos: '50% 10%', zoom: 1.0,  title: 'Fashion Look',     description: 'Full body fashion portrait' },
            { url: 'images/portfolio/portrait/black-white.jpg',     pos: '50% 25%', zoom: 1.1,  title: 'Black & White',    description: 'Timeless monochrome portrait' },
            { url: 'images/portfolio/portrait/creative-angle.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Creative Angle',   description: 'Eksperimen sudut unik' }
        ]
    },

    'event-coverage': {
        category: 'PHOTOGRAPHY',
        title: 'EVENT COVERAGE',
        date: '8 Januari 2025',
        location: 'The Ritz-Carlton, Jakarta',
        description: 'Dokumentasi lengkap acara corporate gathering dan special moments.',
        client: 'PT. Maju Bersama',
        duration: '8 jam',
        deliverables: '400+ foto dokumentasi, slideshow video',
        coverImage: {
            url: 'images/portfolio/event/opening-ceremony.jpg',
            pos: '50% 50%',
            zoom: 1.0
        },
        images: [
            { url: 'images/portfolio/event/opening-ceremony.jpg',   pos: '50% 50%', zoom: 1.0,  title: 'Opening Ceremony', description: 'Pembukaan acara oleh CEO' },
            { url: 'images/portfolio/event/keynote-speaker.jpg',    pos: '50% 30%', zoom: 1.0,  title: 'Keynote Speaker',  description: 'Pembicara utama presentasi' },
            { url: 'images/portfolio/event/networking.jpg',         pos: '50% 50%', zoom: 1.0,  title: 'Networking',       description: 'Sesi networking peserta' },
            { url: 'images/portfolio/event/award-ceremony.jpg',     pos: '50% 50%', zoom: 1.0,  title: 'Award Ceremony',   description: 'Penyerahan penghargaan' },
            { url: 'images/portfolio/event/dinner-gala.jpg',        pos: '50% 50%', zoom: 1.0,  title: 'Dinner Gala',      description: 'Makan malam gala' },
            { url: 'images/portfolio/event/group-photo.jpg',        pos: '50% 50%', zoom: 1.0,  title: 'Group Photo',      description: 'Foto bersama seluruh peserta' }
        ]
    },

    'dashboard-design': {
        category: 'UI/UX DESIGN',
        title: 'MODERN DASHBOARD DESIGN',
        date: '10 Desember 2024',
        location: 'Remote Project',
        description: 'Interface design untuk aplikasi manajemen bisnis dengan pendekatan modern dan user-friendly.',
        client: 'TechStart Solutions',
        duration: '6 minggu',
        deliverables: 'Complete UI Kit, Prototype Interactive, Design System',
        coverImage: {
            url: 'images/portfolio/uiux/dashboard-overview.jpg',
            pos: '50% 50%',
            zoom: 1.0
        },
        images: [
            { url: 'images/portfolio/uiux/dashboard-overview.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Dashboard Overview',   description: 'Main dashboard dengan analytics' },
            { url: 'images/portfolio/uiux/data-visualization.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Data Visualization',   description: 'Charts dan graphs interaktif' },
            { url: 'images/portfolio/uiux/task-management.jpg',     pos: '50% 50%', zoom: 1.0,  title: 'Task Management',      description: 'Interface pengelolaan task' },
            { url: 'images/portfolio/uiux/settings-panel.jpg',      pos: '50% 50%', zoom: 1.0,  title: 'Settings Panel',       description: 'Customizable settings interface' },
            { url: 'images/portfolio/uiux/reports-page.jpg',        pos: '50% 50%', zoom: 1.0,  title: 'Reports Page',         description: 'Laporan detail dan export' },
            { url: 'images/portfolio/uiux/mobile-view.jpg',         pos: '50% 50%', zoom: 1.0,  title: 'Mobile View',          description: 'Responsive mobile design' }
        ]
    },

    'mobile-app': {
        category: 'UI/UX DESIGN',
        title: 'MOBILE APP CONCEPT',
        date: '5 Januari 2025',
        location: 'Remote Project',
        description: 'Design aplikasi mobile e-commerce dengan user experience yang optimal.',
        client: 'ShopEasy Indonesia',
        duration: '8 minggu',
        deliverables: 'Mobile UI Kit, Interactive Prototype, User Flow',
        coverImage: {
            url: 'images/portfolio/mobile/home-screen.jpg',
            pos: '50% 50%',
            zoom: 1.0
        },
        images: [
            { url: 'images/portfolio/mobile/home-screen.jpg',       pos: '50% 50%', zoom: 1.0,  title: 'Home Screen',      description: 'Landing page dengan featured products' },
            { url: 'images/portfolio/mobile/product-detail.jpg',    pos: '50% 50%', zoom: 1.0,  title: 'Product Detail',   description: 'Halaman detail produk lengkap' },
            { url: 'images/portfolio/mobile/shopping-cart.jpg',     pos: '50% 50%', zoom: 1.0,  title: 'Shopping Cart',    description: 'Keranjang belanja intuitif' },
            { url: 'images/portfolio/mobile/checkout-flow.jpg',     pos: '50% 50%', zoom: 1.0,  title: 'Checkout Flow',    description: 'Streamlined checkout process' },
            { url: 'images/portfolio/mobile/user-profile.jpg',      pos: '50% 50%', zoom: 1.0,  title: 'User Profile',     description: 'Profile dan order history' },
            { url: 'images/portfolio/mobile/search-filter.jpg',     pos: '50% 50%', zoom: 1.0,  title: 'Search & Filter',  description: 'Advanced search functionality' }
        ]
    },

    'web-redesign': {
        category: 'UI/UX DESIGN',
        title: 'WEB REDESIGN PROJECT',
        date: '20 November 2024',
        location: 'Remote Project',
        description: 'Redesign website corporate dengan modern aesthetic yang meningkatkan user experience dan brand perception.',
        client: 'PT. Corporate Indonesia',
        duration: '4 minggu',
        deliverables: 'Design mockup, style guide, developer handoff',
        coverImage: {
            url: 'images/portfolio/uiux/task-management.jpg',
            pos: '50% 50%',
            zoom: 1.0
        },
        images: [
            { url: 'images/portfolio/uiux/task-management.jpg',     pos: '50% 50%', zoom: 1.0,  title: 'Homepage Redesign',    description: 'Hero section baru yang impactful' },
            { url: 'images/portfolio/uiux/dashboard-overview.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'About Page',           description: 'Halaman about yang engaging' },
            { url: 'images/portfolio/uiux/reports-page.jpg',        pos: '50% 50%', zoom: 1.0,  title: 'Services Page',        description: 'Showcase layanan secara visual' },
            { url: 'images/portfolio/uiux/mobile-view.jpg',         pos: '50% 50%', zoom: 1.0,  title: 'Mobile Version',       description: 'Fully responsive mobile design' },
            { url: 'images/portfolio/uiux/data-visualization.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Portfolio Section',    description: 'Grid portfolio yang dinamis' },
            { url: 'images/portfolio/uiux/settings-panel.jpg',      pos: '50% 50%', zoom: 1.0,  title: 'Contact Page',         description: 'Form kontak yang user-friendly' }
        ]
    },

    'saas-platform': {
        category: 'UI/UX DESIGN',
        title: 'SaaS PLATFORM DESIGN',
        date: '15 Desember 2024',
        location: 'Remote Project',
        description: 'Interface untuk platform SaaS productivity yang membantu tim bekerja lebih efisien.',
        client: 'ProductivityPro',
        duration: '10 minggu',
        deliverables: 'Full UI Kit, interactive prototype, onboarding flow',
        coverImage: {
            url: 'images/portfolio/uiux/settings-panel.jpg',
            pos: '50% 50%',
            zoom: 1.0
        },
        images: [
            { url: 'images/portfolio/uiux/settings-panel.jpg',      pos: '50% 50%', zoom: 1.0,  title: 'Settings Panel',       description: 'Customizable user settings' },
            { url: 'images/portfolio/uiux/dashboard-overview.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Dashboard',            description: 'Overview produktivitas tim' },
            { url: 'images/portfolio/uiux/task-management.jpg',     pos: '50% 50%', zoom: 1.0,  title: 'Task Board',           description: 'Kanban-style task management' },
            { url: 'images/portfolio/uiux/reports-page.jpg',        pos: '50% 50%', zoom: 1.0,  title: 'Analytics',            description: 'Insight dan reporting' },
            { url: 'images/portfolio/uiux/mobile-view.jpg',         pos: '50% 50%', zoom: 1.0,  title: 'Mobile App',           description: 'Mobile companion app' },
            { url: 'images/portfolio/uiux/data-visualization.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Data Views',           description: 'Charts dan visualisasi data' }
        ]
    },

    'brand-launch': {
        category: 'SOCIAL MEDIA',
        title: 'BRAND LAUNCH CAMPAIGN',
        date: '1 Desember 2024',
        location: 'Multi-Platform Campaign',
        description: 'Kampanye media sosial terintegrasi untuk peluncuran produk fashion dengan strategi konten yang engaging dan visual yang konsisten.',
        client: 'Elevate Fashion',
        duration: '12 minggu',
        deliverables: '100+ konten posts, 20+ reels, campaign report',
        coverImage: {
            url: 'images/portfolio/social/launch-day.jpg',
            pos: '50% 50%',
            zoom: 1.0
        },
        images: [
            { url: 'images/portfolio/social/teaser-campaign.jpg',   pos: '50% 50%', zoom: 1.0,  title: 'Teaser Campaign',      description: 'Pre-launch teaser content' },
            { url: 'images/portfolio/social/launch-day.jpg',        pos: '50% 50%', zoom: 1.0,  title: 'Launch Day',           description: 'Main launch announcement' },
            { url: 'images/portfolio/social/product-showcase.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Product Showcase',     description: 'Detailed product features' },
            { url: 'images/portfolio/social/influencer-collab.jpg', pos: '50% 30%', zoom: 1.0,  title: 'Influencer Collab',    description: 'Partnership dengan influencer' },
            { url: 'images/portfolio/social/user-generated.jpg',    pos: '50% 50%', zoom: 1.0,  title: 'User Generated',       description: 'Customer testimonials' },
            { url: 'images/portfolio/social/campaign-results.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Campaign Results',     description: 'Success metrics visualization' }
        ]
    },

    'instagram-content': {
        category: 'SOCIAL MEDIA',
        title: 'INSTAGRAM CONTENT SERIES',
        date: '15 Januari 2025',
        location: 'Instagram Platform',
        description: 'Series konten visual feed dengan aesthetic minimalis yang konsisten untuk membangun brand identity yang kuat.',
        client: 'Minimalist Living Co.',
        duration: '8 minggu',
        deliverables: '60+ feed posts, content calendar, guidelines',
        coverImage: {
            url: 'images/portfolio/instagram/feed-grid.jpg',
            pos: '50% 50%',
            zoom: 1.0
        },
        images: [
            { url: 'images/portfolio/instagram/feed-grid.jpg',        pos: '50% 50%', zoom: 1.0,  title: 'Feed Grid',          description: 'Cohesive feed aesthetic' },
            { url: 'images/portfolio/instagram/product-posts.jpg',    pos: '50% 50%', zoom: 1.0,  title: 'Product Posts',      description: 'Styled product photography' },
            { url: 'images/portfolio/instagram/quote-graphics.jpg',   pos: '50% 50%', zoom: 1.0,  title: 'Quote Graphics',     description: 'Inspirational typography posts' },
            { url: 'images/portfolio/instagram/lifestyle-shots.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Lifestyle Shots',    description: 'Context and usage scenarios' },
            { url: 'images/portfolio/instagram/carousel-posts.jpg',   pos: '50% 50%', zoom: 1.0,  title: 'Carousel Posts',     description: 'Multi-slide storytelling' },
            { url: 'images/portfolio/instagram/stories-template.jpg', pos: '50% 50%', zoom: 1.0,  title: 'Stories Template',   description: 'Branded stories design' }
        ]
    },

    'reels-production': {
        category: 'SOCIAL MEDIA',
        title: 'REELS PRODUCTION',
        date: '10 Januari 2025',
        location: 'Multi-Platform',
        description: 'Produksi konten video pendek berkualitas tinggi untuk meningkatkan engagement di Instagram dan TikTok.',
        client: 'Various Clients',
        duration: '4 minggu',
        deliverables: '20+ reels teredited, caption & hashtag strategy',
        coverImage: {
            url: 'images/portfolio/social/product-showcase.jpg',
            pos: '50% 50%',
            zoom: 1.0
        },
        images: [
            { url: 'images/portfolio/social/product-showcase.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Product Reels',        description: 'Showcase produk secara dinamis' },
            { url: 'images/portfolio/social/teaser-campaign.jpg',   pos: '50% 50%', zoom: 1.0,  title: 'Teaser Reels',         description: 'Build-up hype sebelum launch' },
            { url: 'images/portfolio/social/launch-day.jpg',        pos: '50% 50%', zoom: 1.0,  title: 'Launch Reels',         description: 'Momen peluncuran yang impactful' },
            { url: 'images/portfolio/social/influencer-collab.jpg', pos: '50% 30%', zoom: 1.0,  title: 'Collab Reels',         description: 'Konten kolaborasi influencer' },
            { url: 'images/portfolio/social/user-generated.jpg',    pos: '50% 50%', zoom: 1.0,  title: 'UGC Reels',            description: 'User generated content curated' },
            { url: 'images/portfolio/social/campaign-results.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Results',              description: 'Metrics dan hasil campaign' }
        ]
    },

    'content-strategy': {
        category: 'SOCIAL MEDIA',
        title: '360 CONTENT STRATEGY',
        date: '5 Desember 2024',
        location: 'Multi-Platform',
        description: 'Strategi konten 360 derajat yang mencakup semua platform media sosial untuk membangun brand awareness yang kuat dan konsisten.',
        client: 'Brand X',
        duration: '6 bulan',
        deliverables: 'Content strategy doc, 200+ konten, monthly report',
        coverImage: {
            url: 'images/portfolio/social/campaign-results.jpg',
            pos: '50% 50%',
            zoom: 1.0
        },
        images: [
            { url: 'images/portfolio/social/campaign-results.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Strategy Results',     description: 'Hasil kampanye 6 bulan' },
            { url: 'images/portfolio/social/teaser-campaign.jpg',   pos: '50% 50%', zoom: 1.0,  title: 'Awareness Phase',      description: 'Konten fase brand awareness' },
            { url: 'images/portfolio/social/product-showcase.jpg',  pos: '50% 50%', zoom: 1.0,  title: 'Engagement Phase',     description: 'Konten untuk tingkatkan engagement' },
            { url: 'images/portfolio/social/influencer-collab.jpg', pos: '50% 30%', zoom: 1.0,  title: 'Amplification',        description: 'Strategi amplifikasi konten' },
            { url: 'images/portfolio/social/user-generated.jpg',    pos: '50% 50%', zoom: 1.0,  title: 'Community',            description: 'Membangun komunitas brand' },
            { url: 'images/portfolio/social/launch-day.jpg',        pos: '50% 50%', zoom: 1.0,  title: 'Conversion',           description: 'Konten fase konversi' }
        ]
    }
};

// ============================================================
// PENGATURAN FOTO TIM (about.html)
// ============================================================
// Sama seperti di atas — ubah pos dan zoom untuk setiap anggota tim.
//
// teamPhotoSettings — kunci = nama file foto (persis sama)
// ============================================================
const teamPhotoSettings = {
    'team-photo.jpg':  { pos: '50% 30%', zoom: 1.1 },  // Foto grup
    'kuskus.jpg':      { pos: '50% 15%', zoom: 1.2 },  // Founder
    'rinto.jpg':       { pos: '50% 15%', zoom: 1.2 },  // Staff Creative
    'jawir.jpg':       { pos: '50% 15%', zoom: 1.2 },  // Head Marketing (Jawir.png)
    'kiki.jpg':        { pos: '50% 15%', zoom: 1.2 },  // Head Creative (Kiki.png)
    'ilyas.jpg':       { pos: '50% 15%', zoom: 1.2 },  // Staff Creative
};

// ============================================================
// PENGATURAN FOTO HERO (index.html)
// ============================================================
const heroPhotoSettings = {
    pos:  '50% 30%',  // ← ubah posisi fokus foto hero
    zoom: 1.0         // ← ubah zoom foto hero
};

// ============================================================
// FUNGSI APPLY SETTINGS — Jangan diubah
// ============================================================
function applyImgSettings(img, pos, zoom) {
    img.style.objectFit      = 'cover';
    img.style.objectPosition = pos  || '50% 50%';
    img.style.transform      = 'scale(' + (zoom || 1) + ')';
    img.style.transformOrigin = pos || '50% 50%';
}

function applyAllPhotoSettings() {
    // Hero
    var heroImg = document.querySelector('.circular-frame img');
    if (heroImg) {
        applyImgSettings(heroImg, heroPhotoSettings.pos, heroPhotoSettings.zoom);
    }

    // Portfolio cover cards
    document.querySelectorAll('.portfolio-main-item[data-portfolio-id]').forEach(function(item) {
        var pid  = item.getAttribute('data-portfolio-id');
        var data = portfolioData[pid];
        if (!data) return;
        var img = item.querySelector('.portfolio-main-image img');
        if (!img) return;
        var cover = data.coverImage || (data.images && data.images[0]) || {};
        applyImgSettings(img, cover.pos, cover.zoom);
    });

    // Team photos — match by filename
    document.querySelectorAll('.team-photo img, .about-main-image img').forEach(function(img) {
        var src  = img.getAttribute('src') || '';
        var file = src.split('/').pop().split('\\').pop().toLowerCase();
        // Try exact match first, then by partial match
        var setting = teamPhotoSettings[file];
        if (!setting) {
            // partial match e.g. jawir.png → jawir.jpg key
            Object.keys(teamPhotoSettings).forEach(function(k) {
                if (file.indexOf(k.replace(/\.[^.]+$/, '')) === 0) setting = teamPhotoSettings[k];
            });
        }
        if (setting) applyImgSettings(img, setting.pos, setting.zoom);
    });
}

// ============================================================
// PORTFOLIO MODAL
// ============================================================

function openPortfolioModal(portfolioId) {
    var modal        = document.getElementById('portfolioModal');
    var modalContent = document.getElementById('portfolioModalContent');
    var data         = portfolioData[portfolioId];

    if (!data) { console.error('Portfolio not found:', portfolioId); return; }

    var imagesHTML = '';
    data.images.forEach(function(img, index) {
        var srcUrl    = img.url;
        var posStyle  = img.pos  ? 'object-position:' + img.pos + ';' : 'object-position:50% 50%;';
        var zoomStyle = img.zoom ? 'transform:scale(' + img.zoom + ');transform-origin:' + (img.pos || '50% 50%') + ';' : '';
        var imgId     = 'modal-img-' + portfolioId + '-' + index;

        imagesHTML +=
            '<div class="portfolio-modal-gallery-item" style="position:relative;" onclick="openLightbox(\'' + portfolioId + '\',' + index + ')">' +
                '<img id="' + imgId + '" src="' + srcUrl + '" alt="' + img.title + '" style="' + posStyle + zoomStyle + '">' +
                '<div class="portfolio-modal-image-caption"><h4>' + img.title + '</h4><p>' + img.description + '</p></div>' +
            '</div>';
    });

    modalContent.innerHTML =
        '<div class="portfolio-modal-header">' +
            '<span class="portfolio-modal-category">' + data.category + '</span>' +
            '<h1 class="portfolio-modal-title">' + data.title + '</h1>' +
            '<p class="portfolio-modal-date">📅 ' + data.date + ' | 📍 ' + data.location + '</p>' +
            '<p class="portfolio-modal-description">' + data.description + '</p>' +
        '</div>' +
        '<div class="portfolio-modal-gallery">' + imagesHTML + '</div>' +
        '<div class="portfolio-modal-details">' +
            '<h3>PROJECT DETAILS</h3>' +
            '<div class="portfolio-detail-grid">' +
                '<div class="portfolio-detail-item"><h4>CLIENT</h4><p>'      + data.client      + '</p></div>' +
                '<div class="portfolio-detail-item"><h4>DURATION</h4><p>'    + data.duration    + '</p></div>' +
                '<div class="portfolio-detail-item"><h4>DELIVERABLES</h4><p>'+ data.deliverables+ '</p></div>' +
                '<div class="portfolio-detail-item"><h4>DATE</h4><p>'        + data.date        + '</p></div>' +
            '</div>' +
        '</div>';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePortfolioModal() {
    document.getElementById('portfolioModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================================
// LIGHTBOX
// ============================================================
var currentLightboxData  = null;
var currentLightboxIndex = 0;
var currentLightboxPortfolioId = null;

function openLightbox(portfolioId, imageIndex) {
    var data = portfolioData[portfolioId];
    if (!data) return;
    currentLightboxData  = data.images;
    currentLightboxPortfolioId = portfolioId;
    currentLightboxIndex = imageIndex;
    document.getElementById('lightboxImage').src = data.images[imageIndex].url;
    document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    currentLightboxData = null;
}

function changeLightboxImage(direction) {
    if (!currentLightboxData) return;
    currentLightboxIndex = (currentLightboxIndex + direction + currentLightboxData.length) % currentLightboxData.length;
    document.getElementById('lightboxImage').src = currentLightboxData[currentLightboxIndex].url;
}

// ============================================================
// DOM READY
// ============================================================
document.addEventListener('DOMContentLoaded', function() {

    // Apply semua pengaturan foto
    applyAllPhotoSettings();

    // 1. Portfolio filter
    var filterBtns     = document.querySelectorAll('.filter-btn');
    var portfolioItems = document.querySelectorAll('.portfolio-main-item');

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            var filter = this.getAttribute('data-filter');
            portfolioItems.forEach(function(item) {
                var cat = item.getAttribute('data-category');
                if (filter === 'all' || cat === filter) {
                    item.style.display = 'block';
                    setTimeout(function() {
                        item.style.opacity   = '1';
                        item.style.transform = 'translateY(0) scale(1)';
                    }, 10);
                } else {
                    item.style.opacity   = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(function() { item.style.display = 'none'; }, 300);
                }
            });
        });
    });

    // 2. Portfolio card click → open modal
    document.querySelectorAll('.portfolio-main-item[data-portfolio-id]').forEach(function(item) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            openPortfolioModal(this.getAttribute('data-portfolio-id'));
        });
    });

    // 3. Mobile hamburger menu
    var hamburger = document.querySelector('.hamburger');
    var navMenu   = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 4. FAQ accordion
    document.querySelectorAll('.faq-item').forEach(function(item) {
        var q = item.querySelector('.faq-question');
        if (q) {
            q.addEventListener('click', function() {
                var wasActive = item.classList.contains('active');
                document.querySelectorAll('.faq-item').forEach(function(f) { f.classList.remove('active'); });
                if (!wasActive) item.classList.add('active');
            });
        }
    });

    // 5. Contact form
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
            contactForm.reset();
        });
    }

    // 6. Fade-in scroll animation
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    document.querySelectorAll('.fade-in').forEach(function(el) { observer.observe(el); });

    // 7. Smooth scroll anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
        a.addEventListener('click', function(e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });
});

// ============================================================
// GLOBAL EVENTS
// ============================================================
document.addEventListener('click', function(e) {
    if (e.target === document.getElementById('portfolioModal')) closePortfolioModal();
    if (e.target === document.getElementById('lightbox'))       closeLightbox();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closePortfolioModal(); closeLightbox(); }
    if (currentLightboxData) {
        if (e.key === 'ArrowLeft')  changeLightboxImage(-1);
        if (e.key === 'ArrowRight') changeLightboxImage(1);
    }
});
