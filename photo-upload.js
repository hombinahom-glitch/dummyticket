// ============================================================
// SISTEM UPLOAD FOTO DARI PC
// Ticket Creative Digital - Photo Upload System
// ============================================================

const PHOTO_STORAGE_KEY = 'ticket_uploaded_photos';

// ---- Storage Helpers ----
function getStoredPhotos() {
    try { return JSON.parse(localStorage.getItem(PHOTO_STORAGE_KEY)) || {}; }
    catch(e) { return {}; }
}

function storePhoto(key, dataUrl) {
    var all = getStoredPhotos();
    all[key] = dataUrl;
    try {
        localStorage.setItem(PHOTO_STORAGE_KEY, JSON.stringify(all));
    } catch(e) {
        // localStorage penuh — hapus yang lama
        console.warn('localStorage penuh, mencoba hapus data lama...');
        var keys = Object.keys(all);
        if (keys.length > 0) {
            delete all[keys[0]];
            all[key] = dataUrl;
            try { localStorage.setItem(PHOTO_STORAGE_KEY, JSON.stringify(all)); }
            catch(e2) { console.error('Masih gagal menyimpan foto.'); }
        }
    }
}

function getStoredPhoto(key) {
    return getStoredPhotos()[key] || null;
}

// ---- Apply stored photos to all img elements ----
function applyStoredPhotos() {
    document.querySelectorAll('[data-photo-key]').forEach(function(el) {
        var key = el.getAttribute('data-photo-key');
        var stored = getStoredPhoto(key);
        if (stored) {
            var img = el.tagName === 'IMG' ? el : el.querySelector('img');
            if (img) img.src = stored;
        }
    });
}

// ---- Create hidden file input ----
var _fileInput = null;
var _currentCallback = null;

function getFileInput() {
    if (!_fileInput) {
        _fileInput = document.createElement('input');
        _fileInput.type = 'file';
        _fileInput.accept = 'image/*';
        _fileInput.style.display = 'none';
        document.body.appendChild(_fileInput);
        _fileInput.addEventListener('change', function() {
            var file = _fileInput.files[0];
            if (!file || !_currentCallback) return;
            var reader = new FileReader();
            reader.onload = function(e) {
                _currentCallback(e.target.result);
            };
            reader.readAsDataURL(file);
            _fileInput.value = '';
        });
    }
    return _fileInput;
}

// ---- Open file picker and run callback with dataUrl ----
function pickPhoto(callback) {
    _currentCallback = callback;
    getFileInput().click();
}

// ---- Make an image element clickable for upload ----
// wrapperEl: the container div; imgEl: the <img>; photoKey: unique storage key
function makeUploadable(wrapperEl, imgEl, photoKey) {
    if (!wrapperEl || !imgEl || !photoKey) return;

    // Apply stored photo immediately
    var stored = getStoredPhoto(photoKey);
    if (stored) imgEl.src = stored;

    // Create upload button
    var btn = document.createElement('button');
    btn.className = 'photo-upload-btn';
    btn.innerHTML = '📁 Ganti Foto';
    btn.title = 'Klik untuk upload foto dari PC';
    btn.type = 'button';

    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        pickPhoto(function(dataUrl) {
            imgEl.src = dataUrl;
            storePhoto(photoKey, dataUrl);
            showUploadSuccess(btn);
        });
    });

    // Position wrapper for button
    if (getComputedStyle(wrapperEl).position === 'static') {
        wrapperEl.style.position = 'relative';
    }
    wrapperEl.appendChild(btn);

    // Also allow clicking the image itself to upload
    wrapperEl.style.cursor = 'pointer';
    wrapperEl.addEventListener('click', function(e) {
        if (e.target === btn) return;
        pickPhoto(function(dataUrl) {
            imgEl.src = dataUrl;
            storePhoto(photoKey, dataUrl);
            showUploadSuccess(btn);
        });
    });
}

function showUploadSuccess(btn) {
    var orig = btn.innerHTML;
    btn.innerHTML = '✅ Tersimpan!';
    btn.style.background = '#22c55e';
    setTimeout(function() {
        btn.innerHTML = orig;
        btn.style.background = '';
    }, 2000);
}

// ---- Init: scan all [data-photo-key] wrappers ----
function initPhotoUploadSystem() {
    // Wrapper divs with data-photo-key
    document.querySelectorAll('[data-photo-key]').forEach(function(wrapper) {
        var photoKey = wrapper.getAttribute('data-photo-key');
        var img = wrapper.querySelector('img');
        if (!img) return;

        var stored = getStoredPhoto(photoKey);
        if (stored) img.src = stored;

        var btn = document.createElement('button');
        btn.className = 'photo-upload-btn';
        btn.innerHTML = '📁 Ganti Foto';
        btn.title = 'Klik untuk upload foto dari PC';
        btn.type = 'button';

        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            pickPhoto(function(dataUrl) {
                img.src = dataUrl;
                storePhoto(photoKey, dataUrl);
                showUploadSuccess(btn);
            });
        });

        if (getComputedStyle(wrapper).position === 'static') {
            wrapper.style.position = 'relative';
        }
        wrapper.appendChild(btn);

        wrapper.style.cursor = 'pointer';
        wrapper.addEventListener('click', function(e) {
            if (e.target === btn || btn.contains(e.target)) return;
            btn.click();
        });
    });

    // Portfolio grid images — keyed by data-portfolio-img-key on the item
    document.querySelectorAll('.portfolio-main-item[data-portfolio-id]').forEach(function(item) {
        var pid = item.getAttribute('data-portfolio-id');
        var imgEl = item.querySelector('.portfolio-main-image img');
        if (!imgEl) return;
        var photoKey = 'portfolio-cover-' + pid;
        var stored = getStoredPhoto(photoKey);
        if (stored) imgEl.src = stored;
        // Button injected separately by script.js (✏️ Adjust) — we add our own
        // using the item wrapper
        var uploadBtn = document.createElement('button');
        uploadBtn.className = 'photo-upload-btn portfolio-upload-btn';
        uploadBtn.innerHTML = '📁 Foto';
        uploadBtn.title = 'Upload foto cover portfolio';
        uploadBtn.type = 'button';
        uploadBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            pickPhoto(function(dataUrl) {
                imgEl.src = dataUrl;
                storePhoto(photoKey, dataUrl);
                // Also update portfolioData images[0] so modal shows it
                if (window.portfolioData && window.portfolioData[pid]) {
                    window.portfolioData[pid].images[0].url = dataUrl;
                }
                showUploadSuccess(uploadBtn);
            });
        });
        item.querySelector('.portfolio-main-image').appendChild(uploadBtn);
    });
}

// ============================================================
// CSS STYLES (injected)
// ============================================================
(function injectStyles() {
    var style = document.createElement('style');
    style.textContent = `
        /* ---- Upload button base ---- */
        .photo-upload-btn {
            position: absolute;
            bottom: 10px;
            left: 10px;
            background: rgba(10, 10, 10, 0.88);
            color: #fff;
            border: 1.5px solid rgba(255,255,255,0.25);
            border-radius: 6px;
            padding: 6px 13px;
            font-size: 0.72rem;
            font-family: 'Archivo', sans-serif;
            font-weight: 700;
            letter-spacing: 1px;
            cursor: pointer;
            z-index: 20;
            opacity: 0;
            transform: translateY(6px);
            transition: opacity 0.25s ease, transform 0.25s ease, background 0.2s ease, border-color 0.2s ease;
            pointer-events: none;
            backdrop-filter: blur(4px);
        }

        /* Show on hover of parent */
        [data-photo-key]:hover .photo-upload-btn,
        .portfolio-main-item:hover .photo-upload-btn,
        .team-member:hover .photo-upload-btn,
        .about-main-image:hover .photo-upload-btn {
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;
        }

        .photo-upload-btn:hover {
            background: #FF5722;
            border-color: #FF5722;
        }

        /* Portfolio cover upload button — left side so it doesn't clash with ✏️ Adjust */
        .portfolio-upload-btn {
            bottom: 10px;
            left: 10px;
            right: auto;
        }

        /* Hero circular frame upload overlay */
        .circular-frame {
            cursor: pointer;
        }
        .circular-frame .photo-upload-btn {
            bottom: 60px;
            left: 50%;
            transform: translateX(-50%) translateY(6px);
            opacity: 0;
            border-radius: 30px;
            padding: 8px 20px;
            font-size: 0.78rem;
            pointer-events: none;
        }
        .circular-frame:hover .photo-upload-btn {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
            pointer-events: all;
        }

        /* Upload zone hint overlay for empty/placeholder images */
        [data-photo-key]:not([data-has-photo]) img[src*="data:image/svg"] {
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
})();

// Run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initPhotoUploadSystem);
