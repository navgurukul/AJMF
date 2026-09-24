/* ==========================================================
   AJMF CENTRALIZED LANGUAGE SWITCHING SYSTEM
   Handles language detection, localStorage persistence,
   and dynamic DOM translation across all 17 website pages.
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {
    // 0. Ensure Language Switcher UI component exists in header
    ensureLanguageSelectorExists();

    // 1. Determine current language preference (defaulting to English 'en')
    const savedLanguage = localStorage.getItem('language') || 'en';
    
    // 2. Initial application of translations
    applyTranslations(savedLanguage);
    
    // 3. Attach event listener to language toggle button(s) if available
    setupLanguageSelectorListeners();

    // 4. Setup observer for dynamic elements (Read More expansions, Modals, Accordions)
    observeDynamicTextChanges();
});

/**
 * Ensures the language dropdown UI component is mounted in the header if missing
 */
function ensureLanguageSelectorExists() {
    const container = document.querySelector('.header .container');
    if (!container || container.querySelector('.lang-dropdown-wrapper')) return;

    let actionsDiv = container.querySelector('.header-actions');
    const hamburgerBtn = container.querySelector('.hamburger-menu, #hamburgerBtn');
    const desktopBtn = container.querySelector('.donate-btn.desktop-only-btn');

    if (!actionsDiv) {
        actionsDiv = document.createElement('div');
        actionsDiv.className = 'header-actions';
        if (hamburgerBtn) {
            hamburgerBtn.parentNode.insertBefore(actionsDiv, hamburgerBtn);
        } else if (desktopBtn) {
            desktopBtn.parentNode.insertBefore(actionsDiv, desktopBtn);
        } else {
            container.appendChild(actionsDiv);
        }
        if (desktopBtn) {
            actionsDiv.appendChild(desktopBtn);
        }
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'lang-dropdown-wrapper';
    wrapper.id = 'langDropdownWrapper';
    wrapper.innerHTML = `
        <button type="button" class="lang-dropdown-btn" id="langDropdownBtn" aria-expanded="false" aria-label="Select Language">
            <i class="fa-solid fa-globe lang-globe-icon"></i>
            <span id="currentLangText">English</span>
            <i class="fa-solid fa-chevron-down lang-chevron"></i>
        </button>
        <ul class="lang-dropdown-menu" id="langDropdownMenu">
            <li><button type="button" class="lang-option" data-lang="en">English</button></li>
            <li><button type="button" class="lang-option" data-lang="hi">हिंदी</button></li>
        </ul>
    `;
    if (desktopBtn && desktopBtn.parentNode === actionsDiv) {
        actionsDiv.insertBefore(wrapper, desktopBtn);
    } else {
        actionsDiv.appendChild(wrapper);
        if (desktopBtn) {
            actionsDiv.appendChild(desktopBtn);
        }
    }

    // Dropdown toggle event
    const btn = wrapper.querySelector('#langDropdownBtn');
    if (btn) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const isOpen = wrapper.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', isOpen);
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!wrapper.contains(e.target)) {
            wrapper.classList.remove('is-open');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
    });

    // Option click event
    wrapper.querySelectorAll('.lang-option').forEach(function (opt) {
        opt.addEventListener('click', function (e) {
            e.preventDefault();
            const selectedLang = opt.getAttribute('data-lang');
            changeLanguage(selectedLang);
            wrapper.classList.remove('is-open');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    });
}

/**
 * Main function to change the active language and persist preference
 * @param {string} lang - Language code ('en' or 'hi')
 */
function changeLanguage(lang) {
    if (lang !== 'en' && lang !== 'hi') lang = 'en';
    
    // Save selection in localStorage
    localStorage.setItem('language', lang);
    
    // Apply translations to current page
    applyTranslations(lang);
}

/**
 * Applies translations to all elements with data-i18n, data-i18n-placeholder, and data-i18n-alt
 * @param {string} lang - Active language ('en' or 'hi')
 */
function applyTranslations(lang) {
    if (typeof translations === 'undefined' || !translations[lang]) {
        console.warn('AJMF Translation Dictionary not loaded for language:', lang);
        return;
    }

    const dict = translations[lang];
    document.documentElement.lang = lang;

    // Body font class toggle for Hindi typography support
    if (lang === 'hi') {
        document.body.classList.add('lang-hi');
    } else {
        document.body.classList.remove('lang-hi');
    }

    // Translate Text Elements (data-i18n)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            updateElementTextPreservingIcons(el, dict[key]);
        }
    });

    // Translate Input & Textarea Placeholders (data-i18n-placeholder)
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(function (el) {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) {
            el.placeholder = dict[key];
        }
    });

    // Translate Image Alt Text (data-i18n-alt)
    const altElements = document.querySelectorAll('[data-i18n-alt]');
    altElements.forEach(function (el) {
        const key = el.getAttribute('data-i18n-alt');
        if (dict[key] !== undefined) {
            el.alt = dict[key];
        }
    });

    // Translate Title Attributes (data-i18n-title)
    const titleElements = document.querySelectorAll('[data-i18n-title]');
    titleElements.forEach(function (el) {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key] !== undefined) {
            el.title = dict[key];
        }
    });

    // Update active UI state on language switcher controls
    updateSwitcherUI(lang);
}

/**
 * Updates element text content while preserving any child icons (<i> or <svg>)
 * and correctly parsing intentional HTML markup (such as <br>, <strong>, <span>).
 */
function updateElementTextPreservingIcons(el, newText) {
    const icons = el.querySelectorAll('i, svg');
    if (icons.length > 0) {
        const iconNodes = Array.from(icons).map(function (icon) { return icon.cloneNode(true); });
        const isIconFirst = el.firstElementChild && (el.firstElementChild.tagName === 'I' || el.firstElementChild.tagName === 'SVG');
        
        el.innerHTML = '';
        const tempSpan = document.createElement('span');
        tempSpan.innerHTML = newText;

        if (isIconFirst) {
            iconNodes.forEach(function (icon) { el.appendChild(icon); });
            el.appendChild(document.createTextNode(' '));
            while (tempSpan.firstChild) {
                el.appendChild(tempSpan.firstChild);
            }
        } else {
            while (tempSpan.firstChild) {
                el.appendChild(tempSpan.firstChild);
            }
            el.appendChild(document.createTextNode(' '));
            iconNodes.forEach(function (icon) { el.appendChild(icon); });
        }
    } else {
        el.innerHTML = newText;
    }
}

/**
 * Updates the visual state of language toggle buttons / selects across the page
 */
function updateSwitcherUI(lang) {
    const currentLangText = document.getElementById('currentLangText');
    if (currentLangText) {
        currentLangText.textContent = (lang === 'hi') ? 'हिंदी' : 'English';
    }

    document.querySelectorAll('.lang-option').forEach(function (btn) {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('is-active');
        } else {
            btn.classList.remove('is-active');
        }
    });
}

/**
 * Attaches event listeners to language switcher controls
 */
function setupLanguageSelectorListeners() {
    document.addEventListener('click', function (e) {
        const toggleBtn = e.target.closest('.lang-toggle-btn');
        if (toggleBtn) {
            const currentLang = localStorage.getItem('language') || 'en';
            const nextLang = (currentLang === 'en') ? 'hi' : 'en';
            changeLanguage(nextLang);
            return;
        }

        const pillBtn = e.target.closest('.lang-pill');
        if (pillBtn) {
            const lang = pillBtn.getAttribute('data-lang');
            if (lang) changeLanguage(lang);
        }
    });

    document.addEventListener('change', function (e) {
        const select = e.target.closest('.lang-select-dropdown');
        if (select) {
            changeLanguage(select.value);
        }
    });
}

/**
 * Re-applies active language when dynamic content (modals, read more) is triggered
 */
function observeDynamicTextChanges() {
    document.addEventListener('click', function (e) {
        const trigger = e.target.closest('.btn-read-more, .more-btn, .learning-card, #watchHeroVideoBtn, .dropdown > a, button');
        if (trigger) {
            setTimeout(function () {
                const currentLang = localStorage.getItem('language') || 'en';
                if (currentLang === 'hi') {
                    applyTranslations('hi');
                }
            }, 100);
        }
    });
}
