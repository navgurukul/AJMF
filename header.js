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
    // SITE-WIDE MEDIA & SCREENSHOT PROTECTION (PRIVACY & SECURITY)
    // Prevents image/video downloading, right-click saving, drag-saving,
    // print-to-PDF, and deters screenshots / screen capture tools.
    // ==========================================================
    (function initContentProtection() {
        // 1. Inject protection styles & print blocker
        const style = document.createElement('style');
        style.id = 'ajmf-security-styles';
        style.textContent = `
            img, video, picture, canvas {
                -webkit-user-drag: none !important;
                user-drag: none !important;
                -webkit-touch-callout: none !important;
                -webkit-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
            }
            body.ajmf-capture-blocked > *:not(#ajmf-privacy-shield) {
                filter: blur(30px) brightness(0.2) !important;
                -webkit-filter: blur(30px) brightness(0.2) !important;
                pointer-events: none !important;
                user-select: none !important;
            }
            #ajmf-privacy-shield {
                position: fixed;
                inset: 0;
                background: rgba(6, 27, 54, 0.96);
                color: #ffffff;
                display: none;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                text-align: center;
                padding: 24px;
                z-index: 2147483647;
                font-family: 'Poppins', sans-serif;
            }
            body.ajmf-capture-blocked #ajmf-privacy-shield {
                display: flex !important;
            }
            @media print {
                html, body {
                    display: none !important;
                    visibility: hidden !important;
                }
            }
        `;
        document.head.appendChild(style);

        // 2. Create privacy shield overlay for screenshot deterrence
        const shield = document.createElement('div');
        shield.id = 'ajmf-privacy-shield';
        shield.setAttribute('aria-hidden', 'true');
        shield.innerHTML = `
            <i class="fas fa-shield-alt" style="font-size: 48px; color: #f57c00; margin-bottom: 16px;"></i>
            <h3 style="margin: 0 0 8px; font-size: 22px; font-weight: 600;">Content Protected</h3>
            <p style="margin: 0; font-size: 15px; color: #dcdcdc; max-width: 420px;">
                For the safety and privacy of our students, screenshots and media downloads are disabled on this website.
            </p>
        `;
        document.body.appendChild(shield);

        // 3. Lock down all images and videos (existing and dynamically added)
        function protectMediaElements(root) {
            const scope = root && root.querySelectorAll ? root : document;
            scope.querySelectorAll('img, video').forEach(function (el) {
                el.setAttribute('draggable', 'false');
                el.setAttribute('oncontextmenu', 'return false;');
                if (el.tagName === 'VIDEO') {
                    el.setAttribute('controlsList', 'nodownload noplaybackrate noremoteplayback');
                    el.setAttribute('disablePictureInPicture', 'true');
                    el.setAttribute('disableRemotePlayback', 'true');
                    el.disablePictureInPicture = true;
                    el.disableRemotePlayback = true;
                }
            });
        }

        protectMediaElements(document);

        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                mutation.addedNodes.forEach(function (node) {
                    if (node.nodeType === 1) {
                        if (node.tagName === 'IMG' || node.tagName === 'VIDEO') {
                            node.setAttribute('draggable', 'false');
                            node.setAttribute('oncontextmenu', 'return false;');
                            if (node.tagName === 'VIDEO') {
                                node.setAttribute('controlsList', 'nodownload noplaybackrate noremoteplayback');
                                node.setAttribute('disablePictureInPicture', 'true');
                                node.setAttribute('disableRemotePlayback', 'true');
                                node.disablePictureInPicture = true;
                                node.disableRemotePlayback = true;
                            }
                        }
                        protectMediaElements(node);
                    }
                });
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });

        // 4. Disable right-click, middle-click open-in-new-tab, copy, & drag-and-drop saving
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            return false;
        }, { capture: true });

        document.addEventListener('dragstart', function (e) {
            e.preventDefault();
            return false;
        }, { capture: true });

        document.addEventListener('auxclick', function (e) {
            if (e.target && e.target.closest && e.target.closest('img, video, picture, .global-lightbox-overlay, #lightbox')) {
                e.preventDefault();
                return false;
            }
        }, { capture: true });

        document.addEventListener('copy', function (e) {
            const sel = window.getSelection ? window.getSelection() : null;
            if (sel && sel.anchorNode && sel.anchorNode.parentElement && sel.anchorNode.parentElement.closest('img, video')) {
                e.preventDefault();
                return false;
            }
        }, { capture: true });

        // 5. Screenshot & Keyboard Shortcut Protection
        // Note: OS screenshot tools (macOS Cmd+Shift+3/4/5, Windows Win+Shift+S) intercept
        // the final number/letter key at the OS level before the browser sees it.
        // However, the browser DOES receive the keydown for the modifier combo (Cmd+Shift / Ctrl+Shift)
        // right before the final key is pressed. Activating the shield immediately on the modifier
        // combo blocks the screen BEFORE the OS captures the frame.
        let shieldLockedUntil = 0;
        let shieldTimeout = null;

        function activatePrivacyShield(durationMs) {
            const lockMs = durationMs || 3500;
            shieldLockedUntil = Date.now() + lockMs;
            document.body.classList.add('ajmf-capture-blocked');

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText('').catch(function () {});
            }

            if (shieldTimeout) clearTimeout(shieldTimeout);
            shieldTimeout = setTimeout(function () {
                if (document.hasFocus() && Date.now() >= shieldLockedUntil) {
                    document.body.classList.remove('ajmf-capture-blocked');
                }
            }, lockMs + 50);
        }

        function deactivatePrivacyShield(force) {
            if (!force && Date.now() < shieldLockedUntil) {
                return;
            }
            if (shieldTimeout) {
                clearTimeout(shieldTimeout);
                shieldTimeout = null;
            }
            document.body.classList.remove('ajmf-capture-blocked');
        }

        window.addEventListener('keydown', function (e) {
            const key = (e.key || '').toLowerCase();
            const isCmdOrCtrl = e.ctrlKey || e.metaKey;

            // Immediately shield when Cmd+Shift, Win+Shift, Ctrl+Shift, or Cmd+Option is held down
            // (fires BEFORE the 3/4/5/S key is intercepted by macOS/Windows screenshot utilities)
            if ((e.metaKey && e.shiftKey) || (e.ctrlKey && e.shiftKey) || (e.metaKey && e.altKey)) {
                activatePrivacyShield(4000);
            }

            // PrintScreen key
            if (e.key === 'PrintScreen' || e.keyCode === 44) {
                e.preventDefault();
                activatePrivacyShield(4000);
                return false;
            }

            // macOS screenshot shortcuts (Cmd + Shift + 3 / 4 / 5) or Windows/Browser capture (Ctrl/Win + Shift + S)
            if (isCmdOrCtrl && e.shiftKey && (key === '3' || key === '4' || key === '5' || key === 's')) {
                e.preventDefault();
                activatePrivacyShield(4000);
                return false;
            }

            // Block Save (Ctrl/Cmd+S), Print (Ctrl/Cmd+P), View Source (Ctrl/Cmd+U)
            if (isCmdOrCtrl && (key === 's' || key === 'p' || key === 'u')) {
                e.preventDefault();
                activatePrivacyShield(2500);
                return false;
            }

            // Block DevTools (F12, Ctrl/Cmd+Shift+I/J/C, Cmd+Option+I/J/C/U)
            if (
                e.key === 'F12' ||
                (isCmdOrCtrl && e.shiftKey && (key === 'i' || key === 'j' || key === 'c')) ||
                (e.metaKey && e.altKey && (key === 'i' || key === 'j' || key === 'c' || key === 'u'))
            ) {
                e.preventDefault();
                activatePrivacyShield(2500);
                return false;
            }
        }, { capture: true });

        window.addEventListener('keyup', function (e) {
            if (e.key === 'PrintScreen' || e.keyCode === 44) {
                e.preventDefault();
                activatePrivacyShield(4000);
            }
        }, { capture: true });

        // Blur content immediately when window loses focus (e.g., Snipping Tool or external screen capture app)
        window.addEventListener('blur', function () {
            if (document.activeElement && document.activeElement.tagName === 'IFRAME') {
                return;
            }
            document.body.classList.add('ajmf-capture-blocked');
        });

        window.addEventListener('focus', function () {
            deactivatePrivacyShield(false);
        });

        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'hidden') {
                document.body.classList.add('ajmf-capture-blocked');
            } else if (document.hasFocus()) {
                deactivatePrivacyShield(false);
            }
        });

        // Allow user to dismiss the shield by clicking on the page once they finish/cancel
        window.addEventListener('pointerdown', function (e) {
            if (!e.metaKey && !e.ctrlKey && !e.shiftKey) {
                shieldLockedUntil = 0;
                deactivatePrivacyShield(true);
            }
        }, { passive: true });
    })();
});

