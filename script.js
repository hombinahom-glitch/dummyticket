// ============================================================
// PORTFOLIO DATA
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
        images: [
            { url: 'images/portfolio/wedding/ceremony-moment.jpg',  title: 'Ceremony Moment',  description: 'Akad nikah yang penuh haru' },
            { url: 'images/portfolio/wedding/couple-portrait.jpg',  title: 'Couple Portrait',  description: 'Foto pasangan dengan lighting natural' },
            { url: 'images/portfolio/wedding/reception-party.jpg',  title: 'Reception Party',  description: 'Suasana resepsi yang meriah' },
            { url: 'images/portfolio/wedding/detail-shots.jpg',     title: 'Detail Shots',     description: 'Detail cincin dan dekorasi' },
            { url: 'images/portfolio/wedding/family-moments.jpg',   title: 'Family Moments',   description: 'Kebersamaan dengan keluarga' },
            { url: 'images/portfolio/wedding/sunset-portrait.jpg',  title: 'Sunset Portrait',  description: 'Golden hour shoot' }
        ]
    },
    'product-photo': {
        category: 'PHOTOGRAPHY',
        title: 'PRODUCT PHOTOGRAPHY',
        date: '3 Januari 2025',
        location: 'Studio Ticket Creative, Jakarta',
        description: 'Sesi fotografi produk untuk brand fashion & lifestyle dengan konsep minimalis modern. Setiap detail produk difoto dengan pencahayaan studio yang sempurna untuk menghasilkan gambar yang clean dan professional.',
        client: 'Urban Style Co.',
        duration: '3 hari shooting',
        deliverables: '150+ foto produk, 50+ lifestyle shots',
        images: [
            { url: 'images/portfolio/product/flatlay.jpg',          title: 'Product Flatlay',  description: 'Komposisi flatlay dengan props minimal' },
            { url: 'images/portfolio/product/clothing-detail.jpg',  title: 'Clothing Detail',  description: 'Close-up detail tekstur kain' },
            { url: 'images/portfolio/product/lifestyle-shot.jpg',   title: 'Lifestyle Shot',   description: 'Produk dalam konteks penggunaan' },
            { url: 'images/portfolio/product/accessories.jpg',      title: 'Accessories',      description: 'Koleksi aksesori pelengkap' },
            { url: 'images/portfolio/product/model-shoot.jpg',      title: 'Model Shoot',      description: 'Produk on model' },
            { url: 'images/portfolio/product/packaging.jpg',        title: 'Packaging',        description: 'Detail kemasan produk' }
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
        images: [
            { url: 'images/portfolio/portrait/studio-portrait.jpg', title: 'Studio Portrait',  description: 'Classic studio portrait dengan dramatic lighting' },
            { url: 'images/portfolio/portrait/outdoor-natural.jpg', title: 'Outdoor Natural',  description: 'Portrait dengan natural light' },
            { url: 'images/portfolio/portrait/closeup.jpg',         title: 'Close-up',         description: 'Detail wajah dengan focus tajam' },
            { url: 'images/portfolio/portrait/fashion-look.jpg',    title: 'Fashion Look',     description: 'Full body fashion portrait' },
            { url: 'images/portfolio/portrait/black-white.jpg',     title: 'Black & White',    description: 'Timeless monochrome portrait' },
            { url: 'images/portfolio/portrait/creative-angle.jpg',  title: 'Creative Angle',   description: 'Eksperimen sudut unik' }
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
        images: [
            { url: 'images/portfolio/event/opening-ceremony.jpg',   title: 'Opening Ceremony', description: 'Pembukaan acara oleh CEO' },
            { url: 'images/portfolio/event/keynote-speaker.jpg',    title: 'Keynote Speaker',  description: 'Pembicara utama presentasi' },
            { url: 'images/portfolio/event/networking.jpg',         title: 'Networking',       description: 'Sesi networking peserta' },
            { url: 'images/portfolio/event/award-ceremony.jpg',     title: 'Award Ceremony',   description: 'Penyerahan penghargaan' },
            { url: 'images/portfolio/event/dinner-gala.jpg',        title: 'Dinner Gala',      description: 'Makan malam gala' },
            { url: 'images/portfolio/event/group-photo.jpg',        title: 'Group Photo',      description: 'Foto bersama seluruh peserta' }
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
        images: [
            { url: 'images/portfolio/uiux/dashboard-overview.jpg',  title: 'Dashboard Overview',   description: 'Main dashboard dengan analytics' },
            { url: 'images/portfolio/uiux/data-visualization.jpg',  title: 'Data Visualization',   description: 'Charts dan graphs interaktif' },
            { url: 'images/portfolio/uiux/task-management.jpg',     title: 'Task Management',      description: 'Interface pengelolaan task' },
            { url: 'images/portfolio/uiux/settings-panel.jpg',      title: 'Settings Panel',       description: 'Customizable settings interface' },
            { url: 'images/portfolio/uiux/reports-page.jpg',        title: 'Reports Page',         description: 'Laporan detail dan export' },
            { url: 'images/portfolio/uiux/mobile-view.jpg',         title: 'Mobile View',          description: 'Responsive mobile design' }
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
        images: [
            { url: 'images/portfolio/mobile/home-screen.jpg',       title: 'Home Screen',      description: 'Landing page dengan featured products' },
            { url: 'images/portfolio/mobile/product-detail.jpg',    title: 'Product Detail',   description: 'Halaman detail produk lengkap' },
            { url: 'images/portfolio/mobile/shopping-cart.jpg',     title: 'Shopping Cart',    description: 'Keranjang belanja intuitif' },
            { url: 'images/portfolio/mobile/checkout-flow.jpg',     title: 'Checkout Flow',    description: 'Streamlined checkout process' },
            { url: 'images/portfolio/mobile/user-profile.jpg',      title: 'User Profile',     description: 'Profile dan order history' },
            { url: 'images/portfolio/mobile/search-filter.jpg',     title: 'Search & Filter',  description: 'Advanced search functionality' }
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
        images: [
            { url: 'images/portfolio/uiux/task-management.jpg',     title: 'Homepage Redesign',    description: 'Hero section baru yang impactful' },
            { url: 'images/portfolio/uiux/dashboard-overview.jpg',  title: 'About Page',           description: 'Halaman about yang engaging' },
            { url: 'images/portfolio/uiux/reports-page.jpg',        title: 'Services Page',        description: 'Showcase layanan secara visual' },
            { url: 'images/portfolio/uiux/mobile-view.jpg',         title: 'Mobile Version',       description: 'Fully responsive mobile design' },
            { url: 'images/portfolio/uiux/data-visualization.jpg',  title: 'Portfolio Section',    description: 'Grid portfolio yang dinamis' },
            { url: 'images/portfolio/uiux/settings-panel.jpg',      title: 'Contact Page',         description: 'Form kontak yang user-friendly' }
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
        images: [
            { url: 'images/portfolio/uiux/settings-panel.jpg',      title: 'Settings Panel',       description: 'Customizable user settings' },
            { url: 'images/portfolio/uiux/dashboard-overview.jpg',  title: 'Dashboard',            description: 'Overview produktivitas tim' },
            { url: 'images/portfolio/uiux/task-management.jpg',     title: 'Task Board',           description: 'Kanban-style task management' },
            { url: 'images/portfolio/uiux/reports-page.jpg',        title: 'Analytics',            description: 'Insight dan reporting' },
            { url: 'images/portfolio/uiux/mobile-view.jpg',         title: 'Mobile App',           description: 'Mobile companion app' },
            { url: 'images/portfolio/uiux/data-visualization.jpg',  title: 'Data Views',           description: 'Charts dan visualisasi data' }
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
        images: [
            { url: 'images/portfolio/social/teaser-campaign.jpg',   title: 'Teaser Campaign',      description: 'Pre-launch teaser content' },
            { url: 'images/portfolio/social/launch-day.jpg',        title: 'Launch Day',           description: 'Main launch announcement' },
            { url: 'images/portfolio/social/product-showcase.jpg',  title: 'Product Showcase',     description: 'Detailed product features' },
            { url: 'images/portfolio/social/influencer-collab.jpg', title: 'Influencer Collab',    description: 'Partnership dengan influencer' },
            { url: 'images/portfolio/social/user-generated.jpg',    title: 'User Generated',       description: 'Customer testimonials' },
            { url: 'images/portfolio/social/campaign-results.jpg',  title: 'Campaign Results',     description: 'Success metrics visualization' }
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
        images: [
            { url: 'images/portfolio/instagram/feed-grid.jpg',        title: 'Feed Grid',          description: 'Cohesive feed aesthetic' },
            { url: 'images/portfolio/instagram/product-posts.jpg',    title: 'Product Posts',      description: 'Styled product photography' },
            { url: 'images/portfolio/instagram/quote-graphics.jpg',   title: 'Quote Graphics',     description: 'Inspirational typography posts' },
            { url: 'images/portfolio/instagram/lifestyle-shots.jpg',  title: 'Lifestyle Shots',    description: 'Context and usage scenarios' },
            { url: 'images/portfolio/instagram/carousel-posts.jpg',   title: 'Carousel Posts',     description: 'Multi-slide storytelling' },
            { url: 'images/portfolio/instagram/stories-template.jpg', title: 'Stories Template',   description: 'Branded stories design' }
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
        images: [
            { url: 'images/portfolio/social/product-showcase.jpg',  title: 'Product Reels',        description: 'Showcase produk secara dinamis' },
            { url: 'images/portfolio/social/teaser-campaign.jpg',   title: 'Teaser Reels',         description: 'Build-up hype sebelum launch' },
            { url: 'images/portfolio/social/launch-day.jpg',        title: 'Launch Reels',         description: 'Momen peluncuran yang impactful' },
            { url: 'images/portfolio/social/influencer-collab.jpg', title: 'Collab Reels',         description: 'Konten kolaborasi influencer' },
            { url: 'images/portfolio/social/user-generated.jpg',    title: 'UGC Reels',            description: 'User generated content curated' },
            { url: 'images/portfolio/social/campaign-results.jpg',  title: 'Results',              description: 'Metrics dan hasil campaign' }
        ]
    },
    'content-strategy': {
        category: 'SOCIAL MEDIA',
        title: '360 CONTENT STRATEGY',
        date: '5 Desember 2024',
        location: 'Multi-Platform',
        description: 'Strategi konten 360° yang mencakup semua platform media sosial untuk membangun brand awareness yang kuat dan konsisten.',
        client: 'Brand X',
        duration: '6 bulan',
        deliverables: 'Content strategy doc, 200+ konten, monthly report',
        images: [
            { url: 'images/portfolio/social/campaign-results.jpg',  title: 'Strategy Results',     description: 'Hasil kampanye 6 bulan' },
            { url: 'images/portfolio/social/teaser-campaign.jpg',   title: 'Awareness Phase',      description: 'Konten fase brand awareness' },
            { url: 'images/portfolio/social/product-showcase.jpg',  title: 'Engagement Phase',     description: 'Konten untuk tingkatkan engagement' },
            { url: 'images/portfolio/social/influencer-collab.jpg', title: 'Amplification',        description: 'Strategi amplifikasi konten' },
            { url: 'images/portfolio/social/user-generated.jpg',    title: 'Community',            description: 'Membangun komunitas brand' },
            { url: 'images/portfolio/social/launch-day.jpg',        title: 'Conversion',           description: 'Konten fase konversi' }
        ]
    }
};

// ============================================================
// PHOTO ADJUSTMENT SYSTEM (localStorage)
// ============================================================
const ADJUST_KEY = 'ticket_photo_adjustments';

function loadAdjustments() {
    try { return JSON.parse(localStorage.getItem(ADJUST_KEY)) || {}; }
    catch(e) { return {}; }
}

function saveAdjustment(imageUrl, posX, posY, zoom) {
    const all = loadAdjustments();
    all[imageUrl] = { posX, posY, zoom };
    localStorage.setItem(ADJUST_KEY, JSON.stringify(all));
}

function getAdjustment(imageUrl) {
    return loadAdjustments()[imageUrl] || { posX: 50, posY: 50, zoom: 100 };
}

function applyStyleToImg(img, posX, posY, zoom) {
    img.style.objectPosition  = posX + '% ' + posY + '%';
    img.style.transform       = 'scale(' + (zoom / 100) + ')';
    img.style.transformOrigin = posX + '% ' + posY + '%';
}

function applyAllAdjustments() {
    document.querySelectorAll('.portfolio-main-image img').forEach(function(img) {
        var adj = getAdjustment(img.getAttribute('src') || '');
        applyStyleToImg(img, adj.posX, adj.posY, adj.zoom);
    });
}

// ============================================================
// EDIT PANEL
// ============================================================
var currentEditUrl = null;
var currentEditImg = null;
var isDragging     = false;

function openEditPanel(imageUrl, imgEl, event) {
    event.stopPropagation();
    currentEditUrl = imageUrl;
    currentEditImg = imgEl;

    var adj        = getAdjustment(imageUrl);
    var panel      = document.getElementById('photoAdjustPanel');
    var canvas     = document.getElementById('adjustCanvas');
    var zoomSlider = document.getElementById('zoomSlider');
    var zoomValue  = document.getElementById('zoomValue');

    zoomSlider.value      = adj.zoom;
    zoomValue.textContent = adj.zoom + '%';

    drawCanvas(canvas, imageUrl, adj.posX, adj.posY, adj.zoom);
    updateDot(canvas, adj.posX, adj.posY);

    panel.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEditPanel() {
    var panel = document.getElementById('photoAdjustPanel');
    if (panel) panel.classList.remove('active');
    // only restore scroll if no other modal is open
    var modal = document.getElementById('portfolioModal');
    if (!modal || !modal.classList.contains('active')) {
        document.body.style.overflow = 'auto';
    }
    currentEditUrl = null;
    currentEditImg = null;
    isDragging     = false;
}

function resetAdjustment() {
    if (!currentEditUrl || !currentEditImg) return;
    saveAdjustment(currentEditUrl, 50, 50, 100);
    applyStyleToImg(currentEditImg, 50, 50, 100);
    document.getElementById('zoomSlider').value      = 100;
    document.getElementById('zoomValue').textContent = '100%';
    var canvas = document.getElementById('adjustCanvas');
    drawCanvas(canvas, currentEditUrl, 50, 50, 100);
    updateDot(canvas, 50, 50);
}

function drawCanvas(canvas, src, posX, posY, zoom) {
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.onload = function() {
        var scale = zoom / 100;
        var fitR  = Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
        var drawW = img.naturalWidth  * fitR * scale;
        var drawH = img.naturalHeight * fitR * scale;
        var dx    = (posX / 100) * canvas.width  - (posX / 100) * drawW;
        var dy    = (posY / 100) * canvas.height - (posY / 100) * drawH;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, dx, dy, drawW, drawH);

        // Rule-of-thirds grid
        ctx.strokeStyle = 'rgba(255,255,255,0.18)';
        ctx.lineWidth   = 1;
        for (var i = 1; i < 3; i++) {
            ctx.beginPath(); ctx.moveTo(canvas.width / 3 * i, 0); ctx.lineTo(canvas.width / 3 * i, canvas.height); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, canvas.height / 3 * i); ctx.lineTo(canvas.width, canvas.height / 3 * i); ctx.stroke();
        }
    };
    img.src = src;
}

function updateDot(canvas, posX, posY) {
    var dot       = document.getElementById('adjustDot');
    dot.style.left = (posX / 100 * canvas.offsetWidth)  + 'px';
    dot.style.top  = (posY / 100 * canvas.offsetHeight) + 'px';
}

function initAdjustCanvas() {
    var canvas = document.getElementById('adjustCanvas');
    if (!canvas) return;

    function getPos(e) {
        var rect    = canvas.getBoundingClientRect();
        var clientX = e.touches ? e.touches[0].clientX : e.clientX;
        var clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: Math.max(0, Math.min(100, (clientX - rect.left) / rect.width  * 100)),
            y: Math.max(0, Math.min(100, (clientY - rect.top)  / rect.height * 100))
        };
    }

    function onMove(e) {
        if (!isDragging || !currentEditUrl) return;
        e.preventDefault();
        var pos  = getPos(e);
        var zoom = parseInt(document.getElementById('zoomSlider').value);
        saveAdjustment(currentEditUrl, pos.x, pos.y, zoom);
        applyStyleToImg(currentEditImg, pos.x, pos.y, zoom);
        drawCanvas(canvas, currentEditUrl, pos.x, pos.y, zoom);
        updateDot(canvas, pos.x, pos.y);
    }

    canvas.addEventListener('mousedown',  function(e) { isDragging = true;  onMove(e); });
    canvas.addEventListener('mousemove',  onMove);
    canvas.addEventListener('mouseup',    function() { isDragging = false; });
    canvas.addEventListener('mouseleave', function() { isDragging = false; });
    canvas.addEventListener('touchstart', function(e) { isDragging = true;  onMove(e); }, { passive: false });
    canvas.addEventListener('touchmove',  onMove, { passive: false });
    canvas.addEventListener('touchend',   function() { isDragging = false; });

    document.getElementById('zoomSlider').addEventListener('input', function() {
        if (!currentEditUrl) return;
        var zoom = parseInt(this.value);
        document.getElementById('zoomValue').textContent = zoom + '%';
        var adj = getAdjustment(currentEditUrl);
        saveAdjustment(currentEditUrl, adj.posX, adj.posY, zoom);
        applyStyleToImg(currentEditImg, adj.posX, adj.posY, zoom);
        drawCanvas(canvas, currentEditUrl, adj.posX, adj.posY, zoom);
        updateDot(canvas, adj.posX, adj.posY);
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
        var adj = getAdjustment(img.url);
        imagesHTML += '<div class="portfolio-modal-gallery-item" onclick="openLightbox(\'' + portfolioId + '\',' + index + ')">' +
            '<img src="' + img.url + '" alt="' + img.title + '" style="object-position:' + adj.posX + '% ' + adj.posY + '%;transform:scale(' + (adj.zoom/100) + ');transform-origin:' + adj.posX + '% ' + adj.posY + '%;">' +
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
                '<div class="portfolio-detail-item"><h4>CLIENT</h4><p>' + data.client + '</p></div>' +
                '<div class="portfolio-detail-item"><h4>DURATION</h4><p>' + data.duration + '</p></div>' +
                '<div class="portfolio-detail-item"><h4>DELIVERABLES</h4><p>' + data.deliverables + '</p></div>' +
                '<div class="portfolio-detail-item"><h4>DATE</h4><p>' + data.date + '</p></div>' +
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

function openLightbox(portfolioId, imageIndex) {
    var data = portfolioData[portfolioId];
    if (!data) return;
    currentLightboxData  = data.images;
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

    // 1. Apply saved photo adjustments to grid images
    applyAllAdjustments();

    // 2. Add ✏️ Adjust button to each portfolio grid card
    document.querySelectorAll('.portfolio-main-item[data-portfolio-id]').forEach(function(item) {
        var imgEl = item.querySelector('.portfolio-main-image img');
        if (!imgEl) return;
        var btn = document.createElement('button');
        btn.className = 'photo-edit-btn';
        btn.innerHTML = '✏️ Adjust';
        btn.title     = 'Adjust focal point & zoom';
        btn.addEventListener('click', function(e) {
            openEditPanel(imgEl.getAttribute('src'), imgEl, e);
        });
        item.querySelector('.portfolio-main-image').appendChild(btn);
    });

    // 3. Init canvas drag for adjust panel
    initAdjustCanvas();

    // 4. Portfolio filter
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

    // 5. Portfolio card click → open modal
    document.querySelectorAll('.portfolio-main-item[data-portfolio-id]').forEach(function(item) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            openPortfolioModal(this.getAttribute('data-portfolio-id'));
        });
    });

    // 6. Mobile hamburger menu
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

    // 7. FAQ accordion
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

    // 8. Contact form
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
            contactForm.reset();
        });
    }

    // 9. Fade-in scroll animation
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    document.querySelectorAll('.fade-in').forEach(function(el) { observer.observe(el); });

    // 10. Smooth scroll anchor links
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
    if (e.target === document.getElementById('portfolioModal'))   closePortfolioModal();
    if (e.target === document.getElementById('lightbox'))         closeLightbox();
    if (e.target === document.getElementById('photoAdjustPanel')) closeEditPanel();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closePortfolioModal(); closeLightbox(); closeEditPanel(); }
    if (currentLightboxData) {
        if (e.key === 'ArrowLeft')  changeLightboxImage(-1);
        if (e.key === 'ArrowRight') changeLightboxImage(1);
    }
});
