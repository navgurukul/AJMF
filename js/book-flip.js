// 3D Notebook/Book Page-Turn Animation System & Lightbox Modal for Facility Cards
document.addEventListener('DOMContentLoaded', function () {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const cardsData = [
        {
            // CARD 1: UNCHANGED as requested
            images: ['confrenceroom.jpeg', 'class.jpeg', 'staffroom.jpeg'],
            alts: ['Training & Conference Room', 'Modern Classroom', 'Staff Conference Room'],
            stagger: 0
        },
        {
            // CARD 2: Student Accommodation
            images: ['dom1.jpeg', 'dom2.jpeg', 'dom3.jpeg'],
            alts: ['Student Dormitory Accommodation', 'Residential Dormitory Room', 'Hostel Accommodation Space'],
            stagger: 600
        },
        {
            // CARD 3: Kitchen & Dining
            images: ['images-photo/breakfast-1.jpeg', 'images-photo/lunch-1.jpeg', 'images-photo/Dinner-1.jpeg'],
            alts: ['Student Community Breakfast', 'Campus Dining Hall Lunch', 'Residential Dining Area'],
            stagger: 1200
        },
        {
            // CARD 4: UNCHANGED as requested
            images: ['library.jpeg', 'reception.jpeg', 'staff.jpeg'],
            alts: ['Central Campus Library', 'Main Administrative Reception', 'Staff & Faculty Center'],
            stagger: 1800
        },
        {
            // CARD 5: Eco-Friendly Infra
            images: ['ecofriendly1.jpeg', 'ecofriendly2.jpeg', 'ecofriendly3.jpeg'],
            alts: ['Solar Power Generation', 'Eco-Friendly Green Campus', 'Sustainable Solar Architecture'],
            stagger: 2400
        },
        {
            // CARD 6: Sports & Recreation
            images: ['images-photo/Excercise1.jpeg', 'images-photo/Excercise2.jpeg', 'images/kho-kho.jpeg'],
            alts: ['Morning Fitness & Yoga Sessions', 'Outdoor Physical Fitness', 'Sports Field & Outdoor Games'],
            stagger: 3000
        },
        // ADDITIONAL VIEW MORE CARDS
        {
            // CARD 7: Spacious Campus
            images: ['facility_campus.png', 'building.jpeg', 'images-photo/Building.jpeg'],
            alts: ['Spacious Campus – 25,000 sq. ft.', 'Main Campus Building', 'Campus Environment'],
            stagger: 200
        },
        {
            // CARD 8: CCTV Surveillance
            images: ['facility_cctv.png', 'Facility Managment.jpeg', 'FM.jpeg'],
            alts: ['CCTV Surveillance – 64 Cameras', 'Facility Security Management', 'Security Control Room'],
            stagger: 800
        },
        {
            // CARD 9: 24/7 Security Guards
            images: ['facility_security.png', 'FM.jpeg', 'Facility Managment.jpeg'],
            alts: ['24/7 Security Guards', 'On-Site Security Staff', 'Campus Entrance Gate'],
            stagger: 1400
        },
        {
            // CARD 10: Water Softener Plant
            images: ['facility_water_softener.png', 'water softner1.jpeg', 'water softner2.jpeg'],
            alts: ['Water Softener Plant', 'Water Softening Equipment', 'Water Treatment System'],
            stagger: 2000
        },
        {
            // CARD 11: Sewage Treatment Plant
            images: ['facility_sewage.png', 'sewage treatment plant1.jpeg', 'sewage treatment plant2.jpeg'],
            alts: ['Sewage Treatment Plant', 'STP Recycling Unit', 'Eco-Friendly Wastewater System'],
            stagger: 2600
        },
        {
            // CARD 12: 3000 LPD Solar Water Heater
            images: ['facility_solar_water.png', 'Water heater1.jpeg', 'Water heater2.jpeg'],
            alts: ['3000 LPD Solar Water Heater', 'Rooftop Solar Water Heating System', 'Solar Water Tank'],
            stagger: 3200
        },
        {
            // CARD 13: 15 Kg Solar Power Plant
            images: ['facility_solar_power.png', 'solar plant1.jpeg', 'solar plant2.jpeg'],
            alts: ['15 Kg Solar Power Plant', 'Solar Panel Array', 'Green Energy Solar Plant'],
            stagger: 3800
        },
        {
            // CARD 14: RO Plant with TDS Controller
            images: ['facility_ro_plant.png', 'RO plant1.jpeg', 'RO plant2.jpeg'],
            alts: ['RO Plant with TDS Controller', 'Commercial RO Water Purifier', 'Drinking Water TDS System'],
            stagger: 4400
        }
    ];

    // ================= LIGHTBOX MODAL CONTROLLER =================
    const lightboxModal = document.getElementById('facilityLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxOverlay = document.getElementById('lightboxOverlay');

    function openLightbox(src, captionText) {
        if (!lightboxModal || !lightboxImg) return;
        lightboxImg.src = src;
        lightboxImg.alt = captionText || 'Facility Preview';
        if (lightboxCaption) {
            lightboxCaption.textContent = captionText || '';
        }
        lightboxModal.classList.add('active');
        lightboxModal.setAttribute('aria-hidden', 'false');
    }

    function closeLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove('active');
        lightboxModal.setAttribute('aria-hidden', 'true');
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', closeLightbox);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ================= 3D BOOK PAGE-FLIP ENGINE =================
    const wrappers = document.querySelectorAll('.book-flip-wrapper');

    wrappers.forEach((wrapper, index) => {
        const data = cardsData[index] || {};

        let images = [];
        let alts = [];

        // Collect exact images present inside this card in the HTML markup
        const domImgs = wrapper.querySelectorAll('img.book-img');
        domImgs.forEach(img => {
            const src = img.getAttribute('src');
            if (src && !images.includes(src)) {
                images.push(src);
                alts.push(img.getAttribute('alt') || '');
            }
        });

        // Fallback to cardsData if DOM yielded fewer than 2 images
        if (images.length < 2 && data.images) {
            images = data.images;
            alts = data.alts;
        }

        if (images.length === 0) return;

        let currentIndex = 0;
        let isFlipping = false;
        let autoFlipInterval = null;
        const staggerDelay = data.stagger !== undefined ? data.stagger : (index % 6) * 600;

        const baseImg = wrapper.querySelector('.base-img');
        const flipper = wrapper.querySelector('.book-page-flipper');
        const frontImg = wrapper.querySelector('.page-front img');
        
        let backFace = wrapper.querySelector('.page-back');
        if (!backFace && flipper) {
            backFace = document.createElement('div');
            backFace.className = 'page-face page-back';
            flipper.appendChild(backFace);
        }
        let backImg = wrapper.querySelector('.page-back img');
        if (!backImg && backFace) {
            backImg = document.createElement('img');
            backImg.className = 'book-img';
            backFace.appendChild(backImg);
        }

        const dots = wrapper.querySelectorAll('.book-page-dots .dot');

        function updateDots(activeIdx) {
            dots.forEach((dot, dIdx) => {
                if (dIdx === activeIdx) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function turnPageTo(nextIndex) {
            if (isFlipping || nextIndex === currentIndex || !flipper || !baseImg || !backImg || !frontImg) return;
            isFlipping = true;

            // 1. Prepare Base image with next photograph
            baseImg.src = images[nextIndex];
            baseImg.alt = alts[nextIndex];

            // 2. Prepare Back face of the flipping page with next photograph
            backImg.src = images[nextIndex];
            backImg.alt = alts[nextIndex];

            // 3. Trigger 3D Page Flip animation
            if (prefersReducedMotion) {
                frontImg.src = images[nextIndex];
                frontImg.alt = alts[nextIndex];
                currentIndex = nextIndex;
                updateDots(currentIndex);
                isFlipping = false;
            } else {
                flipper.classList.add('flipping');

                setTimeout(() => {
                    // 4. After 850ms flip animation finishes, reset flipper silently
                    flipper.style.transition = 'none';
                    frontImg.src = images[nextIndex];
                    frontImg.alt = alts[nextIndex];
                    flipper.classList.remove('flipping');

                    // Force browser reflow before restoring transition
                    void flipper.offsetHeight;
                    flipper.style.transition = '';

                    currentIndex = nextIndex;
                    updateDots(currentIndex);
                    isFlipping = false;
                }, 850);
            }
        }

        function turnNext() {
            const nextIdx = (currentIndex + 1) % images.length;
            turnPageTo(nextIdx);
        }

        function resetAutoFlip() {
            if (autoFlipInterval) {
                clearInterval(autoFlipInterval);
            }
            autoFlipInterval = setInterval(turnNext, 4000);
        }

        // Dot click listener
        dots.forEach((dot, dIdx) => {
            dot.addEventListener('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                turnPageTo(dIdx);
                resetAutoFlip();
            });
        });

        // Click handler on card image wrapper: Opens current image in lightbox modal
        wrapper.addEventListener('click', function (e) {
            if (e.target.closest('.book-page-dots')) {
                return;
            }
            e.stopPropagation();
            const currentSrc = images[currentIndex];
            const currentAlt = alts[currentIndex];
            openLightbox(currentSrc, currentAlt);
        });

        // Start staggered interval for realistic natural automatic flipping sequence
        setTimeout(() => {
            autoFlipInterval = setInterval(turnNext, 4000);
        }, staggerDelay);
    });
});
