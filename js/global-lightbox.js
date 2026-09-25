/* ==========================================================
   UNIVERSAL SITE-WIDE LIGHTBOX SCRIPT FOR ALL PAGES
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {
    // 1. Inject CSS for global lightbox dynamically
    const lightboxStyles = `
    .global-lightbox-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(6, 19, 37, 0.92);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 999999;
        padding: 20px;
        box-sizing: border-box;
    }

    .global-lightbox-overlay.active {
        display: flex !important;
    }

    .global-lightbox-container {
        position: relative;
        max-width: 92vw;
        max-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
    }

    .global-lightbox-img {
        max-width: 90vw !important;
        max-height: 88vh !important;
        width: auto !important;
        height: auto !important;
        object-fit: contain !important;
        border-radius: 12px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
        display: block;
        background: #ffffff;
    }

    .global-lightbox-close {
        position: fixed;
        top: 25px;
        right: 30px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        color: #ffffff;
        border: 2px solid rgba(255, 255, 255, 0.4);
        font-size: 28px;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 1000000;
        transition: all 0.25s ease;
        outline: none;
    }

    .global-lightbox-close:hover {
        background: #f97316;
        border-color: #f97316;
        color: #ffffff;
        transform: scale(1.1);
    }
    `;

    const styleEl = document.createElement("style");
    styleEl.innerHTML = lightboxStyles;
    document.head.appendChild(styleEl);

    // 2. Inject Lightbox HTML Modal
    if (!document.getElementById("globalLightboxModal")) {
        const lightboxHTML = `
        <div id="globalLightboxModal" class="global-lightbox-overlay" aria-hidden="true" role="dialog">
            <div class="global-lightbox-container">
                <img id="globalLightboxImage" class="global-lightbox-img" src="" alt="Enlarged view">
            </div>
            <button id="globalLightboxCloseBtn" class="global-lightbox-close" aria-label="Close modal" type="button">&times;</button>
        </div>
        `;
        document.body.insertAdjacentHTML("beforeend", lightboxHTML);
    }

    const modal = document.getElementById("globalLightboxModal");
    const modalImg = document.getElementById("globalLightboxImage");
    const closeBtn = document.getElementById("globalLightboxCloseBtn");

    function openGlobalLightbox(src, alt) {
        if (!modal || !modalImg) return;
        modalImg.src = src;
        modalImg.alt = alt || "Enlarged photo view";
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeGlobalLightbox() {
        if (!modal) return;
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        if (modalImg) modalImg.src = "";
        document.body.style.overflow = "";
    }

    // 3. Attach Click Handlers to all content photos across the page
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        // Skip hidden watermarks, background decorative leaves, or small icons
        if (img.getAttribute("aria-hidden") === "true" || img.classList.contains("apply-botanical-topleft") || img.classList.contains("gallery-botanical-topleft") || img.classList.contains("partner-logo-img") || img.classList.contains("navgurukul-img")) {
            return;
        }

        // Allow logo links in header to navigate normally
        const parentLogoLink = img.closest(".logo-area a");
        if (parentLogoLink) return;

        img.style.cursor = "pointer";

        img.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            openGlobalLightbox(img.src, img.alt);
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            closeGlobalLightbox();
        });
    }

    if (modal) {
        modal.addEventListener("click", function (e) {
            if (e.target === modal || e.target.classList.contains("global-lightbox-container")) {
                closeGlobalLightbox();
            }
        });
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal && modal.classList.contains("active")) {
            closeGlobalLightbox();
        }
    });
});
