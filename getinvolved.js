// ==========================================================
// GET INVOLVED (CONTACT) PAGE JAVASCRIPT
// Handles animated number counters & smooth scroll reveals
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

    // ---------------- 1. ANIMATED COUNTER ----------------
    const counters = document.querySelectorAll(".counter");

    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute("data-target");

                    let count = 0;
                    const speed = target / 80;

                    const updateCounter = () => {
                        count += speed;
                        if (count < target) {
                            counter.innerText = Math.floor(count) + "+";
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target + "+";
                        }
                    };

                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            });
        }, {
            threshold: 0.4
        });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    // ---------------- 2. BUTTON HOVER EFFECTS ----------------
    document.querySelectorAll(".get-involved-page .btn-orange, .get-involved-page .btn-white").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "translateY(-3px)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translateY(0)";
        });
    });

});
