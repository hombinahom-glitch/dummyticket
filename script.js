// Portfolio Data with detailed information from LOCAL FOLDER
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
            {
                url: 'images/portfolio/wedding/ceremony-moment.jpg',
                title: 'Ceremony Moment',
                description: 'Akad nikah yang penuh haru'
            },
            {
                url: 'images/portfolio/wedding/couple-portrait.jpg',
                title: 'Couple Portrait',
                description: 'Foto pasangan dengan lighting natural'
            },
            {
                url: 'images/portfolio/wedding/reception-party.jpg',
                title: 'Reception Party',
                description: 'Suasana resepsi yang meriah'
            },
            {
                url: 'images/portfolio/wedding/detail-shots.jpg',
                title: 'Detail Shots',
                description: 'Detail cincin dan dekorasi'
            },
            {
                url: 'images/portfolio/wedding/family-moments.jpg',
                title: 'Family Moments',
                description: 'Kebersamaan dengan keluarga'
            },
            {
                url: 'images/portfolio/wedding/sunset-portrait.jpg',
                title: 'Sunset Portrait',
                description: 'Golden hour shoot'
            }
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
            {
                url: 'images/portfolio/product/flatlay.jpg',
                title: 'Product Flatlay',
                description: 'Komposisi flatlay dengan props minimal'
            },
            {
                url: 'images/portfolio/product/clothing-detail.jpg',
                title: 'Clothing Detail',
                description: 'Close-up detail tekstur kain'
            },
            {
                url: 'images/portfolio/product/lifestyle-shot.jpg',
                title: 'Lifestyle Shot',
                description: 'Produk dalam konteks penggunaan'
            },
            {
                url: 'images/portfolio/product/accessories.jpg',
                title: 'Accessories',
                description: 'Koleksi aksesori pelengkap'
            },
            {
                url: 'images/portfolio/product/model-shoot.jpg',
                title: 'Model Shoot',
                description: 'Produk on model'
            },
            {
                url: 'images/portfolio/product/packaging.jpg',
                title: 'Packaging',
                description: 'Detail kemasan produk'
            }
        ]
    },
    'portrait-session': {
        category: 'PHOTOGRAPHY',
        title: 'PORTRAIT SESSION',
        date: '20 November 2024',
        location: 'Outdoor Location & Studio',
        description: 'Sesi portrait photography dengan lighting profesional yang menangkap karakter dan kepribadian subjek. Kombinasi antara natural light dan studio lighting untuk hasil yang dramatic namun tetap natural.',
        client: 'Sarah Martinez',
        duration: '4 jam',
        deliverables: '80+ foto teredited, 10 foto premium retouch',
        images: [
            {
                url: 'images/portfolio/portrait/studio-portrait.jpg',
                title: 'Studio Portrait',
                description: 'Classic studio portrait dengan dramatic lighting'
            },
            {
                url: 'images/portfolio/portrait/outdoor-natural.jpg',
                title: 'Outdoor Natural',
                description: 'Portrait dengan natural light'
            },
            {
                url: 'images/portfolio/portrait/closeup.jpg',
                title: 'Close-up',
                description: 'Detail wajah dengan focus tajam'
            },
            {
                url: 'images/portfolio/portrait/fashion-look.jpg',
                title: 'Fashion Look',
                description: 'Full body fashion portrait'
            },
            {
                url: 'images/portfolio/portrait/black-white.jpg',
                title: 'Black & White',
                description: 'Timeless monochrome portrait'
            },
            {
                url: 'images/portfolio/portrait/creative-angle.jpg',
                title: 'Creative Angle',
                description: 'Eksperimen sudut unik'
            }
        ]
    },
    'event-coverage': {
        category: 'PHOTOGRAPHY',
        title: 'EVENT COVERAGE',
        date: '8 Januari 2025',
        location: 'The Ritz-Carlton, Jakarta',
        description: 'Dokumentasi lengkap acara corporate gathering dan special moments. Tim kami menangkap setiap momen penting dari acara, mulai dari persiapan hingga penutupan dengan pendekatan journalistic photography.',
        client: 'PT. Maju Bersama',
        duration: '8 jam',
        deliverables: '400+ foto dokumentasi, slideshow video',
        images: [
            {
                url: 'images/portfolio/event/opening-ceremony.jpg',
                title: 'Opening Ceremony',
                description: 'Pembukaan acara oleh CEO'
            },
            {
                url: 'images/portfolio/event/keynote-speaker.jpg',
                title: 'Keynote Speaker',
                description: 'Pembicara utama presentasi'
            },
            {
                url: 'images/portfolio/event/networking.jpg',
                title: 'Networking',
                description: 'Sesi networking peserta'
            },
            {
                url: 'images/portfolio/event/award-ceremony.jpg',
                title: 'Award Ceremony',
                description: 'Penyerahan penghargaan'
            },
            {
                url: 'images/portfolio/event/dinner-gala.jpg',
                title: 'Dinner Gala',
                description: 'Makan malam gala'
            },
            {
                url: 'images/portfolio/event/group-photo.jpg',
                title: 'Group Photo',
                description: 'Foto bersama seluruh peserta'
            }
        ]
    },
    'dashboard-design': {
        category: 'UI/UX DESIGN',
        title: 'MODERN DASHBOARD DESIGN',
        date: '10 Desember 2024',
        location: 'Remote Project',
        description: 'Interface design untuk aplikasi manajemen bisnis dengan pendekatan modern dan user-friendly. Dashboard yang dirancang untuk memberikan overview yang jelas dan navigasi yang intuitif untuk meningkatkan produktivitas pengguna.',
        client: 'TechStart Solutions',
        duration: '6 minggu',
        deliverables: 'Complete UI Kit, Prototype Interactive, Design System',
        images: [
            {
                url: 'images/portfolio/uiux/dashboard-overview.jpg',
                title: 'Dashboard Overview',
                description: 'Main dashboard dengan analytics'
            },
            {
                url: 'images/portfolio/uiux/data-visualization.jpg',
                title: 'Data Visualization',
                description: 'Charts dan graphs interaktif'
            },
            {
                url: 'images/portfolio/uiux/task-management.jpg',
                title: 'Task Management',
                description: 'Interface pengelolaan task'
            },
            {
                url: 'images/portfolio/uiux/settings-panel.jpg',
                title: 'Settings Panel',
                description: 'Customizable settings interface'
            },
            {
                url: 'images/portfolio/uiux/reports-page.jpg',
                title: 'Reports Page',
                description: 'Laporan detail dan export'
            },
            {
                url: 'images/portfolio/uiux/mobile-view.jpg',
                title: 'Mobile View',
                description: 'Responsive mobile design'
            }
        ]
    },
    'mobile-app': {
        category: 'UI/UX DESIGN',
        title: 'MOBILE APP CONCEPT',
        date: '5 Januari 2025',
        location: 'Remote Project',
        description: 'Design aplikasi mobile e-commerce dengan user experience yang optimal. Fokus pada kemudahan navigasi, proses checkout yang streamlined, dan interface yang menarik untuk meningkatkan conversion rate.',
        client: 'ShopEasy Indonesia',
        duration: '8 minggu',
        deliverables: 'Mobile UI Kit, Interactive Prototype, User Flow',
        images: [
            {
                url: 'images/portfolio/mobile/home-screen.jpg',
                title: 'Home Screen',
                description: 'Landing page dengan featured products'
            },
            {
                url: 'images/portfolio/mobile/product-detail.jpg',
                title: 'Product Detail',
                description: 'Halaman detail produk lengkap'
            },
            {
                url: 'images/portfolio/mobile/shopping-cart.jpg',
                title: 'Shopping Cart',
                description: 'Keranjang belanja intuitif'
            },
            {
                url: 'images/portfolio/mobile/checkout-flow.jpg',
                title: 'Checkout Flow',
                description: 'Streamlined checkout process'
            },
            {
                url: 'images/portfolio/mobile/user-profile.jpg',
                title: 'User Profile',
                description: 'Profile dan order history'
            },
            {
                url: 'images/portfolio/mobile/search-filter.jpg',
                title: 'Search & Filter',
                description: 'Advanced search functionality'
            }
        ]
    },
    'brand-launch': {
        category: 'SOCIAL MEDIA',
        title: 'BRAND LAUNCH CAMPAIGN',
        date: '1 Desember 2024',
        location: 'Multi-Platform Campaign',
        description: 'Kampanye media sosial terintegrasi untuk peluncuran produk fashion dengan strategi konten yang engaging dan visual yang konsisten. Campaign ini menghasilkan 300% increase in engagement dan 150% growth in followers.',
        client: 'Elevate Fashion',
        duration: '12 minggu',
        deliverables: '100+ konten posts, 20+ reels, campaign report',
        images: [
            {
                url: 'images/portfolio/social/teaser-campaign.jpg',
                title: 'Teaser Campaign',
                description: 'Pre-launch teaser content'
            },
            {
                url: 'images/portfolio/social/launch-day.jpg',
                title: 'Launch Day',
                description: 'Main launch announcement'
            },
            {
                url: 'images/portfolio/social/product-showcase.jpg',
                title: 'Product Showcase',
                description: 'Detailed product features'
            },
            {
                url: 'images/portfolio/social/influencer-collab.jpg',
                title: 'Influencer Collab',
                description: 'Partnership dengan influencer'
            },
            {
                url: 'images/portfolio/social/user-generated.jpg',
                title: 'User Generated',
                description: 'Customer testimonials'
            },
            {
                url: 'images/portfolio/social/campaign-results.jpg',
                title: 'Campaign Results',
                description: 'Success metrics visualization'
            }
        ]
    },
    'instagram-content': {
        category: 'SOCIAL MEDIA',
        title: 'INSTAGRAM CONTENT SERIES',
        date: '15 Januari 2025',
        location: 'Instagram Platform',
        description: 'Series konten visual feed dengan aesthetic minimalis yang konsisten untuk membangun brand identity yang kuat. Fokus pada high-quality imagery dan cohesive color palette.',
        client: 'Minimalist Living Co.',
        duration: '8 minggu',
        deliverables: '60+ feed posts, content calendar, guidelines',
        images: [
            {
                url: 'images/portfolio/instagram/feed-grid.jpg',
                title: 'Feed Grid',
                description: 'Cohesive feed aesthetic'
            },
            {
                url: 'images/portfolio/instagram/product-posts.jpg',
                title: 'Product Posts',
                description: 'Styled product photography'
            },
            {
                url: 'images/portfolio/instagram/quote-graphics.jpg',
                title: 'Quote Graphics',
                description: 'Inspirational typography posts'
            },
            {
                url: 'images/portfolio/instagram/lifestyle-shots.jpg',
                title: 'Lifestyle Shots',
                description: 'Context and usage scenarios'
            },
            {
                url: 'images/portfolio/instagram/carousel-posts.jpg',
                title: 'Carousel Posts',
                description: 'Multi-slide storytelling'
            },
            {
                url: 'images/portfolio/instagram/stories-template.jpg',
                title: 'Stories Template',
                description: 'Branded stories design'
            }
        ]
    }
};

// Open Portfolio Modal Function
function openPortfolioModal(portfolioId) {
    const modal = document.getElementById('portfolioModal');
    const modalContent = document.getElementById('portfolioModalContent');
    const data = portfolioData[portfolioId];
    
    if (!data) {
        console.error('Portfolio data not found for:', portfolioId);
        return;
    }
    
    // Build modal HTML with photos from folder
    let imagesHTML = '';
    data.images.forEach((img, index) => {
        imagesHTML += `
            <div class="portfolio-modal-gallery-item" onclick="openLightbox('${portfolioId}', ${index})">
                <img src="${img.url}" alt="${img.title}">
                <div class="portfolio-modal-image-caption">
                    <h4>${img.title}</h4>
                    <p>${img.description}</p>
                </div>
            </div>
        `;
    });
    
    modalContent.innerHTML = `
        <div class="portfolio-modal-header">
            <span class="portfolio-modal-category">${data.category}</span>
            <h1 class="portfolio-modal-title">${data.title}</h1>
            <p class="portfolio-modal-date">📅 ${data.date} | 📍 ${data.location}</p>
            <p class="portfolio-modal-description">${data.description}</p>
        </div>
        
        <div class="portfolio-modal-gallery">
            ${imagesHTML}
        </div>
        
        <div class="portfolio-modal-details">
            <h3>PROJECT DETAILS</h3>
            <div class="portfolio-detail-grid">
                <div class="portfolio-detail-item">
                    <h4>CLIENT</h4>
                    <p>${data.client}</p>
                </div>
                <div class="portfolio-detail-item">
                    <h4>DURATION</h4>
                    <p>${data.duration}</p>
                </div>
                <div class="portfolio-detail-item">
                    <h4>DELIVERABLES</h4>
                    <p>${data.deliverables}</p>
                </div>
                <div class="portfolio-detail-item">
                    <h4>DATE</h4>
                    <p>${data.date}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Portfolio Modal
function closePortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Lightbox Functions
let currentLightboxData = null;
let currentLightboxIndex = 0;

function openLightbox(portfolioId, imageIndex) {
    const data = portfolioData[portfolioId];
    if (!data) return;
    
    currentLightboxData = data.images;
    currentLightboxIndex = imageIndex;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.src = data.images[imageIndex].url;
    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    currentLightboxData = null;
}

function changeLightboxImage(direction) {
    if (!currentLightboxData) return;
    
    currentLightboxIndex += direction;
    
    // Wraparound
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = currentLightboxData.length - 1;
    } else if (currentLightboxIndex >= currentLightboxData.length) {
        currentLightboxIndex = 0;
    }
    
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = currentLightboxData[currentLightboxIndex].url;
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
        contactForm.reset();
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing Portfolio...');
    
    // Portfolio Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-main-item');

    console.log('Filter buttons found:', filterBtns.length);
    console.log('Portfolio items found:', portfolioItems.length);

    if (filterBtns.length > 0 && portfolioItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Filter clicked:', this.getAttribute('data-filter'));
                
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0) scale(1)';
                        }, 10);
                    } else {
                        if (category === filterValue) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0) scale(1)';
                            }, 10);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
        console.log('Filter initialized successfully');
    }
    
    // Add click handlers to portfolio items for modal
    const portfolioItemsWithId = document.querySelectorAll('.portfolio-main-item[data-portfolio-id]');
    
    portfolioItemsWithId.forEach(item => {
        item.addEventListener('click', function() {
            const portfolioId = this.getAttribute('data-portfolio-id');
            console.log('Portfolio item clicked:', portfolioId);
            openPortfolioModal(portfolioId);
        });
        
        // Add cursor pointer
        item.style.cursor = 'pointer';
    });
    
    console.log('Portfolio items click handlers initialized:', portfolioItemsWithId.length);
});

// Close modal when clicking outside content
document.addEventListener('click', function(event) {
    const modal = document.getElementById('portfolioModal');
    const lightbox = document.getElementById('lightbox');
    
    if (event.target === modal) {
        closePortfolioModal();
    }
    
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Close with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePortfolioModal();
        closeLightbox();
    }
    
    // Arrow keys for lightbox navigation
    if (currentLightboxData) {
        if (event.key === 'ArrowLeft') {
            changeLightboxImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeLightboxImage(1);
        }
    }
});
