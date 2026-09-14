const programs = [

{
    titleKey: "prog_sop",
    title: "School of Programming",
    color:"#284a9fff",
    careerIcon: "fa-solid fa-briefcase",
    careerColor: "#3b82f6",

    image:
    "Sop.jpeg",

    descKey: "sop_desc",
    description:
    "Build the digital future through project-based learning, coding, teamwork and real-world software development.",

    highlights: [
        { key: "hl_html", text: "HTML" },
        { key: "hl_css", text: "CSS" },
        { key: "hl_js", text: "JavaScript" },
        { key: "hl_react", text: "React" },
        { key: "hl_db", text: "Databases" },
        { key: "hl_projects", text: "Projects" }
    ],

    careers: [
            { icon: "fa-solid fa-laptop-code", key: "career_sw_dev", name: "Software Developer", color:"#3b82f6" },
            { icon: "fa-solid fa-code", key: "career_fe_dev", name: "Frontend Developer", color:"#3b82f6" },
            { icon: "fa-solid fa-server", key: "career_be_dev", name: "Backend Developer", color:"#3b82f6" }
]
},

{
    titleKey: "prog_soe",
    title: "School of Education",
    color:"#284a9fff",
    careerIcon: "fa-solid fa-book-open",
    careerColor: "#a855f7",
    image:"Soe.jpeg",

    descKey: "soe_desc",
    description:
    "Prepare future educators through modern teaching practices and leadership development.",

    highlights: [
        { key: "hl_learning_science", text: "Learning Science & Metacognition" },
        { key: "hl_ai_tools", text: "AI Tools for Personalized Learning" },
        { key: "hl_curriculum_design", text: "Curriculum & Experience Design" },
        { key: "hl_leadership_ent", text: "Leadership & Social Enterpreneurship" }
    ],

    careers: [
             { icon: "fa-solid fa-chalkboard-user", key: "career_teacher", name: "Teacher", color:"#a855f7" },
             { icon: "fa-solid fa-user-graduate", key: "career_trainer", name: "Trainer", color:"#a855f7" },
             { icon: "fa-solid fa-school", key: "career_school_leader", name: "School Leader", color:"#a855f7" },
             { icon: "fa-solid fa-hands-helping", key: "career_mentor", name: "Mentor", color:"#a855f7" }
]
},

{
    titleKey: "prog_sosc",
    title: "School of Second Chance",
    color:"#284a9fff",
    careerIcon: "fa-solid fa-utensils",
    careerColor: "#22c55e" ,
    image:"Sosc.jpeg",

    descKey: "sosc_desc",
    description:
    "A life-changing program focused on rebuilding confidence and creating new opportunities.",

    highlights: [
        { key: "hl_life_skills", text: "Life Skills" },
        { key: "hl_culinary_skills", text: "Culinary Skills" },
        { key: "hl_entrepreneurship", text: "Entrepreneurship" },
        { key: "hl_career_readiness", text: "Career Readiness" }
    ],

   careers: [
           { icon: "fa-solid fa-utensils", key: "career_chef", name: "Chef", color:"#22c55e" },
           { icon: "fa-solid fa-briefcase", key: "career_entrepreneur", name: "Entrepreneur", color:"#22c55e" },
           { icon: "fa-solid fa-hotel", key: "career_hospitality", name: "Hospitality Professional", color:"#22c55e" }
]
},
{
    titleKey: "prog_sob",
    title: "School of Business",
    color:"#284a9fff",
    careerIcon: "fa-solid fa-chart-line",
    careerColor: "#f97316" ,
    video: "Schoolofbusiness.mp4",
    image:"Sob.jpeg",

    descKey: "sob_desc",
    description:
    "Develop business, marketing, operations and leadership skills for modern industries.",

    highlights: [
        { key: "hl_biz_fund", text: "Business Fundamentals" },
        { key: "hl_marketing", text: "Marketing" },
        { key: "hl_sales_ops", text: "Sales & Operations" },
        { key: "hl_leadership_skills", text: "Leadership Skills" },
        { key: "hl_data_analysis", text: "Data Analysis" }
    ],

    careers: [
           { icon: "fa-solid fa-chart-line", key: "career_biz_analyst", name: "Business Analyst", color:"#f97316" },
           { icon: "fa-solid fa-bullhorn", key: "career_mkt_exec", name: "Marketing Executive", color:"#f97316" },
           { icon: "fa-solid fa-gear", key: "career_ops_assoc", name: "Operations Associate", color:"#f97316" },
           { icon: "fa-solid fa-handshake", key: "career_sales_exec", name: "Sales Executive", color:"#f97316" }
]
},
{
    titleKey: "prog_sof",
    title: "School of Finance",
    color:"#284a9fff",
    careerIcon: "fa-solid fa-building-columns",
    careerColor: "#f59e0b",
    video: "SOF.mp4",
    image: "Sof.jpeg",

    descKey: "sof_desc",
    description:
    "Learn finance, business operations and analytical thinking for modern careers.",

    highlights: [
        { key: "hl_accounting", text: "Accounting" },
        { key: "hl_fin_analysis", text: "Financial Analysis" },
        { key: "hl_investments", text: "Investments" },
        { key: "hl_biz_planning", text: "Business Planning" }
    ],
   careers: [
            { icon: "fa-solid fa-chart-pie", key: "career_fin_analyst", name: "Financial Analyst", color:"#f59e0b" },
            { icon: "fa-solid fa-building-columns", key: "career_banking_prof", name: "Banking Professional", color:"#f59e0b" },
            { icon: "fa-solid fa-coins", key: "career_invest_adv", name: "Investment Advisor", color:"#f59e0b" }
 ]

},

];

const cardsContainer = document.getElementById("cards-container");

if (cardsContainer) {
    programs.forEach(program => {
        cardsContainer.innerHTML += `
        <div class="program-card">
            <div class="program-image" ${program.video ? `style="cursor:pointer;" onclick="openSofVideoModal('${program.video}')" title="Click to view video with sound"` : ''}>
                ${program.video ? `
                    <video src="${program.video}" autoplay muted playsinline loop class="program-video-preview"></video>
                    <div class="video-play-overlay" aria-label="Play video with sound"><i class="fa-solid fa-play"></i></div>
                ` : `<img src="${program.image}" alt="${program.title}">`}
            </div>

            <div class="program-content">
                <h3 class="p-title" data-i18n="${program.titleKey}">
                    ${program.title}
                </h3>

                <p class="p-description" data-i18n="${program.descKey}">
                    ${program.description}
                </p>
                <h4 class="highlights-title" data-i18n="curriculum_highlights" style="color:${program.color}; margin-top:18px; margin-bottom:10px; font-size:18px; font-family:'Poppins', sans-serif; font-weight:700; letter-spacing:0.5px;">
                      Curriculum Highlights
                </h4>

                <ul class="p-highlights">
                    ${program.highlights
                        .map(item => `<li data-i18n="${item.key}">${item.text}</li>`)
                        .join("")}
                </ul>
            </div>

            <div class="career-box" style="border:0.1px solid ${program.careerColor};">
                <h4 class="p-career" data-i18n="career_paths" style="color:${program.careerColor}">
                     <i class="${program.careerIcon}"></i>
                     Career Paths
                </h4>

                <ul class="career-list">
                   ${program.careers
                    .map(career => `
                 <li>
                    <i class="${career.icon}" style="color:${career.color}"></i>
                    <span data-i18n="${career.key}">${career.name}</span>
                 </li>
                `)
                    .join("")}
                </ul>
            </div>
        </div>
        `;
    });

    if (typeof applyTranslations === 'function') {
        const savedLang = localStorage.getItem('language') || 'en';
        applyTranslations(savedLang);
    }
}

/* ==========================================================
   SOF VIDEO MODAL SYSTEM (CLICK TO VIEW FULL WITH AUDIO)
   ========================================================== */
function ensureSofVideoModalExists() {
    if (document.getElementById('sofVideoModal')) return;

    const modalMarkup = `
        <div class="sof-video-modal" id="sofVideoModal" aria-hidden="true">
            <div class="sof-video-modal-backdrop" id="sofVideoModalBackdrop"></div>
            <div class="sof-video-modal-container">
                <button type="button" class="sof-video-modal-close" id="closeSofVideoModalBtn" aria-label="Close video player">&times;</button>
                <video id="sofFullVideoPlayer" class="sof-video-player" controls playsinline preload="metadata">
                    <source id="sofVideoSource" src="" type="video/mp4">
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalMarkup);

    const closeBtn = document.getElementById('closeSofVideoModalBtn');
    const backdrop = document.getElementById('sofVideoModalBackdrop');

    if (closeBtn) closeBtn.addEventListener('click', closeSofVideoModal);
    if (backdrop) backdrop.addEventListener('click', closeSofVideoModal);

    document.addEventListener('keydown', function (e) {
        const modal = document.getElementById('sofVideoModal');
        if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
            closeSofVideoModal();
        }
    });
}

function openSofVideoModal(videoSrc) {
    ensureSofVideoModalExists();
    const modal = document.getElementById('sofVideoModal');
    const fullVid = document.getElementById('sofFullVideoPlayer');
    const source = document.getElementById('sofVideoSource');

    if (!modal || !fullVid) return;

    // Pause any active preview background videos
    document.querySelectorAll('.program-video-preview').forEach(function (v) {
        if (!v.paused) v.pause();
    });

    if (source.getAttribute('src') !== videoSrc) {
        source.setAttribute('src', videoSrc);
        fullVid.load();
    }

    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Play complete video with sound from beginning
    fullVid.currentTime = 0;
    fullVid.muted = false;
    fullVid.volume = 1.0;

    const playPromise = fullVid.play();
    if (playPromise !== undefined) {
        playPromise.catch(function (err) {
            console.log('SOF Video Playback with audio notice:', err);
        });
    }
}

function closeSofVideoModal() {
    const modal = document.getElementById('sofVideoModal');
    const fullVid = document.getElementById('sofFullVideoPlayer');

    if (modal) {
        modal.classList.remove('is-active');
        modal.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';

    if (fullVid) {
        fullVid.pause(); // Pause video and stop audio immediately
    }

    // Resume background preview video
    document.querySelectorAll('.program-video-preview').forEach(function (v) {
        v.play().catch(function () {});
    });
}

const campusSchedule = [
{
    icon:"💪",
    time:"06:00 AM",
    task:"Exercise"
},
{
    icon:"🍳",
    time:"08:30 AM",
    task:"Breakfast"
},
{
    icon:"📚",
    time:"09:00 AM",
    task:"Session 1"
},
{
    icon:"🍽️",
    time:"01:00 PM",
    task:"Lunch"
},
{
    icon:"📚",
    time:"02:00 PM",
    task:"Session 2"
},
{
    icon:"📖",
    time:"04:00 PM",
    task:"English Activity"
},
{
    icon:"🍟",
    time:"05:00 PM",
    task:"Snacks Break"
},
{
    icon:"⚽",
    time:"05:30 PM",
    task:"Culture Activity"
},
{
    icon:"📚",
    time:"06:30 PM",
    task:"Session 3"
},
{
    icon:"🍽️",
    time:"08:30 PM",
    task:"Dinner"
},
{
    icon:"🌙",
    time:"10:30 PM",
    task:"Lights Out"
}
];

const timelineContainer = document.getElementById("timeline-container");

if (timelineContainer) {
    timelineContainer.innerHTML = `<div class="timeline"></div>`;
    const timeline = timelineContainer.querySelector(".timeline");

    if (timeline) {
        campusSchedule.forEach(item => {
            timeline.innerHTML += `
            <div class="time-item">
                <div class="circle">
                    ${item.icon}
                </div>
                <div class="time-card">
                    <h4>${item.time}</h4>
                    <p>${item.task}</p>
                </div>
            </div>
            `;
        });
    }
}

/* Hero Video Audio & Controls Handler */
document.addEventListener("DOMContentLoaded", function () {
    const heroVid = document.getElementById("heroVideo") || document.querySelector(".hero-image video");
    if (heroVid) {
        heroVid.addEventListener("click", function () {
            heroVid.muted = false;
            heroVid.volume = 1.0;
            heroVid.controls = true;
            if (heroVid.paused) {
                heroVid.play().catch(function (err) {
                    console.log("Hero video playback notice:", err);
                });
            }
        });
    }
});
