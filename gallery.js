// ==========================
// GALLERY LIGHTBOX SCRIPT
// ==========================

document.addEventListener("DOMContentLoaded", function () {
    const images = Array.from(document.querySelectorAll(".gallery-item img, .featured-card img, .life-card img"));
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("lightboxClose") || document.querySelector(".lightbox-close") || document.querySelector(".close");
    const nextBtn = document.getElementById("lightboxNext") || document.querySelector(".lightbox-nav.next") || document.querySelector(".next");
    const prevBtn = document.getElementById("lightboxPrev") || document.querySelector(".lightbox-nav.prev") || document.querySelector(".prev");
    const openBtn = document.getElementById("openGallery");

    let currentIndex = 0;

    function showImage(index) {
        if (!images.length || !lightbox || !lightboxImg) return;
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        if (lightboxImg) lightboxImg.src = "";
        document.body.style.overflow = "";
    }

    // Attach click listeners to all gallery images
    images.forEach((img, index) => {
        img.style.cursor = "pointer";
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            showImage(index);
        });

        // If parent item is clicked
        const parentItem = img.closest(".gallery-item, .featured-card, .life-card");
        if (parentItem) {
            parentItem.addEventListener("click", (e) => {
                if (e.target !== img && !e.target.closest("#lightbox, .gallery-lightbox")) {
                    showImage(index);
                }
            });
        }
    });

    // Explore Gallery button scroll
    if (openBtn) {
        openBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const gallerySection = document.querySelector(".gallery-section");
            if (gallerySection) {
                gallerySection.scrollIntoView({ behavior: "smooth" });
            } else {
                showImage(0);
            }
        });
    }

    // Direct event handler binding for Close button
    if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeLightbox();
        });
    }

    // Direct event handler binding for Next button
    if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            showImage(currentIndex + 1);
        });
    }

    // Direct event handler binding for Previous button
    if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            showImage(currentIndex - 1);
        });
    }

    // Unified Event Delegation on #lightbox for Close, Next, Prev, and Backdrop
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            const isClose = e.target.closest("#lightboxClose, .lightbox-close, .close");
            const isNext = e.target.closest("#lightboxNext, .lightbox-nav.next, .next");
            const isPrev = e.target.closest("#lightboxPrev, .lightbox-nav.prev, .prev");

            if (isClose) {
                e.preventDefault();
                e.stopPropagation();
                closeLightbox();
                return;
            }

            if (isNext) {
                e.preventDefault();
                e.stopPropagation();
                showImage(currentIndex + 1);
                return;
            }

            if (isPrev) {
                e.preventDefault();
                e.stopPropagation();
                showImage(currentIndex - 1);
                return;
            }

            if (e.target === lightbox || e.target.classList.contains("lightbox-container")) {
                closeLightbox();
            }
        });
    }

    // Keyboard controls
    document.addEventListener("keydown", (e) => {
        if (!lightbox || !lightbox.classList.contains("active")) return;

        if (e.key === "ArrowRight") {
            showImage(currentIndex + 1);
        } else if (e.key === "ArrowLeft") {
            showImage(currentIndex - 1);
        } else if (e.key === "Escape") {
            closeLightbox();
        }
    });
});

