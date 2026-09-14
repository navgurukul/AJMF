document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".read-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let card = button.closest(".story-card");
            let fullText = card.querySelector(".full-text");
            const currentLang = localStorage.getItem("language") || "en";

            if (fullText.style.display === "block") {
                fullText.style.display = "none";
                button.setAttribute("data-i18n", "btn_read_story_arrow");
                button.innerHTML = (currentLang === "hi") ? "पूरी कहानी पढ़ें →" : "Read Full Story →";
            } else {
                fullText.style.display = "block";
                button.setAttribute("data-i18n", "btn_show_less_arrow");
                button.innerHTML = (currentLang === "hi") ? "कम दिखाएं ↓" : "Show Less ↓";
            }
        });
    });
});
