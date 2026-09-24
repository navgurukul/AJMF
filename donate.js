// ==========================================================
// DONATE PAGE INTERACTIVE JAVASCRIPT
// Handles Payment Tabs, Copy-to-Clipboard, Amount Selection logic
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

    // ---------------- 1. COPY TO CLIPBOARD ----------------
    const copyBtns = document.querySelectorAll('.copy-action-btn');

    copyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const textToCopy = btn.getAttribute('data-copy');
            const currentLang = localStorage.getItem('language') || 'en';

            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    // Show Feedback
                    const originalIcon = btn.innerHTML;
                    btn.innerHTML = '<i class="fa-solid fa-check" style="color: #22c55e;"></i>';
                    btn.setAttribute('title', (currentLang === 'hi') ? 'कॉपी हो गया!' : 'Copied!');

                    // Show temporary Toast notification
                    showToast((currentLang === 'hi') ? 'क्लिपबोर्ड पर कॉपी हो गया!' : 'Copied to clipboard!');

                    setTimeout(() => {
                        btn.innerHTML = originalIcon;
                        btn.setAttribute('title', (currentLang === 'hi') ? 'क्लिपबोर्ड पर कॉपी करें' : 'Copy to clipboard');
                    }, 2000);
                }).catch(err => {
                    console.error('Copy failed: ', err);
                });
            }
        });
    });

    // Simple Toast notification helper
    function showToast(message) {
        let toast = document.getElementById('donateToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'donateToast';
            toast.className = 'donate-toast-msg';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 2200);
    }


    // ---------------- 2. PAYMENT MODE TABS ----------------
    const tabBtns = document.querySelectorAll('.pay-tab-btn');
    const tabPanels = document.querySelectorAll('.tab-content-panel');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTabId = btn.getAttribute('data-tab');

                // Active class on button
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Active class on panel
                tabPanels.forEach(panel => {
                    if (panel.id === targetTabId) {
                        panel.classList.add('active');
                    } else {
                        panel.classList.remove('active');
                    }
                });
            });
        });
    }


    // ---------------- 3. CONTRIBUTION AMOUNT SELECTION ----------------
    const amountBtns = document.querySelectorAll('.amt-btn');
    const customInputBox = document.getElementById('customInputBox');
    const customInput = document.getElementById('customAmountInput');

    if (amountBtns.length > 0) {
        amountBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active from all buttons
                amountBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const amountVal = btn.getAttribute('data-amount');

                if (amountVal === 'custom') {
                    if (customInputBox) {
                        customInputBox.style.display = 'flex';
                        if (customInput) customInput.focus();
                    }
                } else {
                    if (customInputBox) {
                        customInputBox.style.display = 'none';
                    }
                }
            });
        });
    }

    if (customInput) {
        customInput.addEventListener('input', () => {
            if (customInput.value.length > 0) {
                amountBtns.forEach(b => b.classList.remove('active'));
                const customToggleBtn = document.querySelector('.custom-amt-toggle');
                if (customToggleBtn) customToggleBtn.classList.add('active');
            }
        });
    }

});
