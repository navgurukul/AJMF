// ==========================================================
// CONTACT US PAGE JAVASCRIPT
// Handles FAQ accordion toggle & contact form feedback
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

    // ---------------- 1. FAQ ACCORDION ----------------
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');

        if (questionBtn) {
            questionBtn.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');

                // Close all other items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherBtn = otherItem.querySelector('.faq-question');
                    const otherAns = otherItem.querySelector('.faq-answer');
                    if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                    if (otherAns) otherAns.style.display = 'none';
                });

                // Toggle clicked item
                if (!isOpen) {
                    item.classList.add('active');
                    questionBtn.setAttribute('aria-expanded', 'true');
                    const answer = item.querySelector('.faq-answer');
                    if (answer) answer.style.display = 'block';
                }
            });
        }
    });

    // ---------------- 2. CONTACT FORM SUBMISSION ----------------
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.getElementById('fullName')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const message = document.getElementById('message')?.value.trim();
            const currentLang = localStorage.getItem('language') || 'en';

            if (!fullName || !email || !message) {
                if (formStatus) {
                    formStatus.style.color = '#ef4444';
                    formStatus.textContent = (currentLang === 'hi')
                        ? 'कृपया सभी आवश्यक फ़ील्ड (*) भरें।'
                        : 'Please fill in all required fields (*).';
                }
                return;
            }

            if (formStatus) {
                formStatus.style.color = '#16a34a';
                formStatus.textContent = (currentLang === 'hi')
                    ? 'संपर्क करने के लिए धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।'
                    : 'Thank you for reaching out! Your message has been sent successfully. We will get back to you shortly.';
            }

            contactForm.reset();
        });
    }

});
