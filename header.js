/* ==========================================================
   AJMF RESPONSIVE HEADER JAVASCRIPT
   Handles Hamburger Menu toggle, smooth vertical navbar drawer,
   accordion expand/collapse for mobile & tablet submenus,
   auto-close on leaf link click, and click-outside closing.
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (!hamburgerBtn || !navMenu) return;

    // Toggle Mobile / Tablet Navigation Drawer
    hamburgerBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isActive = navMenu.classList.toggle('is-active');
        hamburgerBtn.classList.toggle('is-active', isActive);

        const icon = hamburgerBtn.querySelector('i');
        if (icon) {
            if (isActive) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Helper to close navigation drawer and reset all open accordions
    function closeMenu() {
        navMenu.classList.remove('is-active');
        hamburgerBtn.classList.remove('is-active');
        const icon = hamburgerBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
        document.querySelectorAll('.dropdown.is-open').forEach(function (el) {
            el.classList.remove('is-open');
        });
    }

    // Accordion expand/collapse for mobile & tablet screens (< 1024px)
    const dropdowns = navMenu.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
        const parentLink = dropdown.querySelector(':scope > a');

        if (parentLink) {
            parentLink.addEventListener('click', function (e) {
                if (window.innerWidth < 1024) {
                    const icon = parentLink.querySelector('i');
                    const isIconClick = (icon && (e.target === icon || icon.contains(e.target)));
                    const href = parentLink.getAttribute('href');

                    if (isIconClick || !href || href === '#') {
                        e.preventDefault();
                        e.stopPropagation();

                        const isOpen = dropdown.classList.contains('is-open');

                        dropdowns.forEach(function (other) {
                            if (other !== dropdown) {
                                other.classList.remove('is-open');
                            }
                        });

                        if (isOpen) {
                            dropdown.classList.remove('is-open');
                        } else {
                            dropdown.classList.add('is-open');
                        }
                    } else {
                        closeMenu();
                    }
                }
            });
        }
    });

    // Navigation for leaf links and sub-links (links without child submenus)
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            // Check if this link is a direct parent of a dropdown
            const isDropdownParent = link.parentElement.classList.contains('dropdown');

            if (window.innerWidth < 1024) {
                // If it's a sub-link or a single page link without a submenu, navigate and close drawer
                if (!isDropdownParent) {
                    const href = link.getAttribute('href');
                    if (href && href !== '#') {
                        closeMenu();
                    }
                }
            }
        });
    });

    // Close menu drawer when clicking outside the header
    document.addEventListener('click', function (e) {
        if (window.innerWidth < 1024 && navMenu.classList.contains('is-active')) {
            if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                closeMenu();
            }
        }
    });

    // Reset menu state on window resize to Desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1024) {
            closeMenu();
        }
    });

    // ==========================================================
    // FOOTER NEWSLETTER FORM VALIDATION & SUBMISSION
    // ==========================================================
    const newsletterForms = document.querySelectorAll('.newsletter form, form.newsletter-form');
    
    newsletterForms.forEach(function (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"], .newsletter-email');
            let messageBox = form.querySelector('.newsletter-message');
            
            if (!messageBox) {
                messageBox = document.createElement('div');
                messageBox.className = 'newsletter-message';
                messageBox.setAttribute('aria-live', 'polite');
                form.appendChild(messageBox);
            }
            
            if (!emailInput) return;
            
            const emailValue = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailValue) {
                messageBox.textContent = 'Please enter your email address.';
                messageBox.className = 'newsletter-message error';
                emailInput.focus();
            } else if (!emailRegex.test(emailValue)) {
                messageBox.textContent = 'Please enter a valid email address.';
                messageBox.className = 'newsletter-message error';
                emailInput.focus();
            } else {
                messageBox.textContent = 'Thank you for subscribing to our newsletter!';
                messageBox.className = 'newsletter-message success';
                emailInput.value = '';
            }
        });
    });
});
