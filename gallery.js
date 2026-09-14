// ==========================
// LIGHTBOX
// ==========================

const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const openBtn = document.getElementById("openGallery");

let currentIndex = 0;

// Gallery madhla kontahi photo click
images.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;
        lightbox.classList.add("active");
        lightboxImg.src = images[currentIndex].src;

    });

});

// Explore Gallery button
openBtn.addEventListener("click", (e) => {

    e.preventDefault();

    currentIndex = 0;

    lightbox.classList.add("active");

    lightboxImg.src = images[currentIndex].src;

});

// Close
closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// Next
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;

});

// Previous
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex].src;

});

// Click outside image
lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){
        lightbox.classList.remove("active");
    }

});
// Keyboard Arrow Support

document.addEventListener("keydown", (e) => {

    // Lightbox open asel tevhach kam kar
    if (!lightbox.classList.contains("active")) return;

    // Right Arrow
    if (e.key === "ArrowRight") {

        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        lightboxImg.src = images[currentIndex].src;
    }

    // Left Arrow
    if (e.key === "ArrowLeft") {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        lightboxImg.src = images[currentIndex].src;
    }

    // ESC key ne close
    if (e.key === "Escape") {
        lightbox.classList.remove("active");
    }

});
