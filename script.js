// ==========================================================
// STUDENT-LED CAMPUS COUNCILS DATA & INTERACTIVE SCRIPT
// ==========================================================

const councilData = [
    {
        id: 1,
        num: "01",
        title: "DISCO - Discipline Coordinator",
        titleHi: "डिस्को - अनुशासन समन्वयक",
        image: "DISCO.jpeg",
        description: "The backbone of campus harmony. The Discipline Coordinator doesn't just enforce rules, they foster a culture of mutual respect, ensuring every student feels safe and valued within the community.",
        descriptionHi: "कैंपस सामंजस्य की रीढ़। अनुशासन समन्वयक केवल नियमों को लागू नहीं करता है, बल्कि आपसी सम्मान की संस्कृति को बढ़ावा देता है, यह सुनिश्चित करता है कि समुदाय के भीतर प्रत्येक छात्र सुरक्षित और मूल्यवान महसूस करे।",
        responsibilities: [
            "Maintain discipline and decorum across campus",
            "Resolve student conflicts peacefully and constructively",
            "Monitor attendance and punctuality",
            "Coordinate with mentors for behavioral guidance",
            "Promote respectful and inclusive campus behavior"
        ],
        responsibilitiesHi: [
            "पूरे परिसर में अनुशासन और मर्यादा बनाए रखना",
            "छात्रों के विवादों का शांतिपूर्वक और रचनात्मक रूप से समाधान करना",
            "उपस्थिति और समय की पाबंदी की निगरानी करना",
            "व्यवहारात्मक मार्गदर्शन के लिए मेंटर्स के साथ समन्वय करना",
            "सम्मानजनक और समावेशी कैंपस व्यवहार को बढ़ावा देना"
        ]
    },
    {
        id: 2,
        num: "02",
        title: "Academic Coordinator",
        titleHi: "अकादमिक समन्वयक",
        image: "AF.jpeg",
        description: "Driving the educational mission forward. This council ensures that the learning environment is productive, managing study schedules and providing the necessary support for every student to excel.",
        descriptionHi: "शैक्षणिक मिशन को आगे बढ़ाना। यह परिषद सुनिश्चित करती है कि सीखने का माहौल उत्पादक हो, अध्ययन कार्यक्रमों का प्रबंधन करती है और प्रत्येक छात्र को उत्कृष्ट बनाने के लिए आवश्यक सहायता प्रदान करती है।",
        responsibilities: [
            "Monitor daily academic progress and curriculum flow",
            "Conduct peer study and doubt-clearing sessions",
            "Coordinate learning resources with academic mentors",
            "Provide specialized support for struggling students",
            "Manage academic schedules and peer learning workshops"
        ],
        responsibilitiesHi: [
            "दैनिक शैक्षणिक प्रगति और पाठ्यक्रम प्रवाह की निगरानी करना",
            "सहकर्मी अध्ययन और शंका-समाधान सत्र आयोजित करना",
            "अकादमिक मेंटर्स के साथ शिक्षण संसाधनों का समन्वय करना",
            "संघर्षरत छात्रों के लिए विशेष सहायता प्रदान करना",
            "अकादमिक कार्यक्रमों और सहकर्मी शिक्षण कार्यशालाओं का प्रबंधन करना"
        ]
    },
    {
        id: 3,
        num: "03",
        title: "Kitchen Coordinator",
        titleHi: "रसोई समन्वयक",
        image: "kitchen.jpeg",
        description: "More than just food—it's about fueling the mind. The Kitchen Coordinator manages the entire dining experience, ensuring nutritious, hygienic meals that keep the campus energetic.",
        descriptionHi: "सिर्फ भोजन से अधिक—यह दिमाग को ऊर्जा देने के बारे में है। रसोई समन्वयक संपूर्ण भोजन अनुभव का प्रबंधन करता है, पौष्टिक, स्वच्छ भोजन सुनिश्चित करता है जो परिसर को ऊर्जावान बनाए रखता है।",
        responsibilities: [
            "Maintain strict food hygiene and safety standards",
            "Coordinate meal preparation schedules and kitchen team",
            "Collect and incorporate regular student dietary feedback",
            "Monitor meal nutritional quality and ingredient inventory",
            "Ensure complete kitchen and dining hall cleanliness"
        ],
        responsibilitiesHi: [
            "सख्त भोजन स्वच्छता और सुरक्षा मानकों को बनाए रखना",
            "भोजन की तैयारी के शेड्यूल और रसोई टीम का समन्वय करना",
            "नियमित छात्र आहार संबंधी प्रतिक्रिया एकत्र और शामिल करना",
            "भोजन की पोषण गुणवत्ता और सामग्री सूची की निगरानी करना",
            "संपूर्ण रसोई और डाइनिंग हॉल की सफाई सुनिश्चित करना"
        ]
    },
    {
        id: 4,
        num: "04",
        title: "Health Coordinator",
        titleHi: "स्वास्थ्य समन्वयक",
        image: "health.jpeg",
        description: "Guardians of well-being. The Health Coordinator ensures that physical and mental health resources are always accessible, organizing medical checkups and providing swift support during emergencies.",
        descriptionHi: "कल्याण के संरक्षक। स्वास्थ्य समन्वयक यह सुनिश्चित करता है कि शारीरिक और मानसिक स्वास्थ्य संसाधन हमेशा सुलभ हों, चिकित्सा जांच का आयोजन करता है और आपात स्थिति के दौरान त्वरित सहायता प्रदान करता है।",
        responsibilities: [
            "Maintain comprehensive student health records and first-aid kits",
            "Organize health awareness sessions and hygiene drives",
            "Coordinate emergency medical assistance and doctor visits",
            "Monitor student physical and mental well-being",
            "Promote healthy lifestyle habits across campus"
        ],
        responsibilitiesHi: [
            "व्यापक छात्र स्वास्थ्य रिकॉर्ड और प्राथमिक चिकित्सा किट बनाए रखना",
            "स्वास्थ्य जागरूकता सत्र और स्वच्छता अभियान आयोजित करना",
            "आपातकालीन चिकित्सा सहायता और डॉक्टर के दौरे का समन्वय करना",
            "छात्रों के शारीरिक और मानसिक स्वास्थ्य की निगरानी करना",
            "पूरे परिसर में स्वस्थ जीवन शैली की आदतों को बढ़ावा देना"
        ]
    },
    {
        id: 5,
        num: "05",
        title: "Workout Coordinator",
        titleHi: "व्यायाम समन्वयक",
        image: "workout.jpeg",
        description: "Promoting a healthy lifestyle through action. From morning yoga to evening sports, this council ensures students stay physically active, fit, and energized.",
        descriptionHi: "कार्य के माध्यम से स्वस्थ जीवन शैली को बढ़ावा देना। सुबह के योग से लेकर शाम के खेलों तक, यह परिषद सुनिश्चित करती है कि छात्र शारीरिक रूप से सक्रिय, फिट और ऊर्जावान रहें।",
        responsibilities: [
            "Conduct morning fitness and yoga routines",
            "Plan and supervise evening sports and physical activities",
            "Motivate every student to maintain physical fitness",
            "Maintain workout equipment and sports grounds",
            "Track daily student participation in fitness activities"
        ],
        responsibilitiesHi: [
            "सुबह की फिटनेस और योग दिनचर्या का संचालन करना",
            "शाम के खेल और शारीरिक गतिविधियों की योजना बनाना और पर्यवेक्षण करना",
            "प्रत्येक छात्र को शारीरिक फिटनेस बनाए रखने के लिए प्रेरित करना",
            "वर्कआउट उपकरण और खेल के मैदानों का रखरखाव करना",
            "फिटनेस गतिविधियों में दैनिक छात्र भागीदारी को ट्रैक करना"
        ]
    },
    {
        id: 6,
        num: "06",
        title: "Facility Manager",
        titleHi: "सुविधा प्रबंधक",
        image: "Facility Managment.jpeg",
        description: "Ensuring the campus runs like a well-oiled machine. The Facility Manager oversees the maintenance of all infrastructure, creating a comfortable and functional environment.",
        descriptionHi: "यह सुनिश्चित करना कि परिसर सुचारू रूप से चले। सुविधा प्रबंधक सभी बुनियादी ढांचे के रखरखाव की देखरेख करता है, जिससे एक आरामदायक और कार्यात्मक वातावरण बनता है।",
        responsibilities: [
            "Maintain campus infrastructure, rooms, and facilities",
            "Inspect and report maintenance issues promptly",
            "Oversee campus cleanliness and waste management",
            "Coordinate timely repairs with service vendors",
            "Continuously improve campus living infrastructure"
        ],
        responsibilitiesHi: [
            "कैंपस इंफ्रास्ट्रक्चर, कमरों और सुविधाओं का रखरखाव करना",
            "रखरखाव के मुद्दों का तुरंत निरीक्षण और रिपोर्ट करना",
            "कैंपस की सफाई और अपशिष्ट प्रबंधन की देखरेख करना",
            "सर्विस विक्रेताओं के साथ समय पर मरम्मत का समन्वय करना",
            "कैंपस लिविंग इंफ्रास्ट्रक्चर में लगातार सुधार करना"
        ]
    },
    {
        id: 7,
        num: "07",
        title: "Outreach Coordinator",
        titleHi: "आउटरीच समन्वयक",
        image: "outreach.jpeg",
        description: "The face of the campus. The Outreach Coordinator builds bridges with the outside world, connecting students with local communities, partner NGOs, and social initiatives.",
        descriptionHi: "परिसर का चेहरा। आउटरीच समन्वयक बाहरी दुनिया के साथ संबंध बनाता है, छात्रों को स्थानीय समुदायों, भागीदार गैर-सरकारी संगठनों और सामाजिक पहलों से जोड़ता है।",
        responsibilities: [
            "Organize community outreach and social impact events",
            "Coordinate joint initiatives with partner NGOs",
            "Drive student community engagement projects",
            "Manage volunteer activities and awareness campaigns",
            "Promote social responsibility and leadership"
        ],
        responsibilitiesHi: [
            "सामुदायिक आउटरीच और सामाजिक प्रभाव कार्यक्रमों का आयोजन करना",
            "भागीदार गैर सरकारी संगठनों के साथ संयुक्त पहलों का समन्वय करना",
            "छात्र सामुदायिक सहभागिता परियोजनाओं को आगे बढ़ाना",
            "स्वयंसेवक गतिविधियों और जागरूकता अभियानों का प्रबंधन करना",
            "सामाजिक उत्तरदायित्व और नेतृत्व को बढ़ावा देना"
        ]
    },
    {
        id: 8,
        num: "08",
        title: "IT Coordinator",
        titleHi: "आईटी समन्वयक",
        image: "IT cordinator.jpeg",
        description: "Powering the digital learning experience. The IT Coordinator ensures that the technological backbone of the campus—from WiFi to laptops—is always operational.",
        descriptionHi: "डिजिटल शिक्षण अनुभव को सशक्त बनाना। आईटी समन्वयक यह सुनिश्चित करता है कि परिसर की तकनीकी रीढ़—वाईफाई से लेकर लैपटॉप तक—हमेशा चालू रहे।",
        responsibilities: [
            "Maintain computer lab hardware, laptops, and networking",
            "Provide swift technical support to students and mentors",
            "Manage software installations and updates",
            "Troubleshoot hardware, internet, and system issues",
            "Ensure uninterrupted access to digital learning tools"
        ],
        responsibilitiesHi: [
            "कंप्यूटर लैब हार्डवेयर, लैपटॉप और नेटवर्किंग का रखरखाव करना",
            "छात्रों और मेंटर्स को त्वरित तकनीकी सहायता प्रदान करना",
            "सॉफ्टवेयर इंस्टॉलेशन और अपडेट का प्रबंधन करना",
            "हार्डवेयर, इंटरनेट और सिस्टम की समस्याओं का निवारण करना",
            "डिजिटल शिक्षण उपकरणों तक निर्बाध पहुंच सुनिश्चित करना"
        ]
    },
    {
        id: 9,
        num: "09",
        title: "Onboarding Coordinator",
        titleHi: "ऑनबोर्डिंग समन्वयक",
        image: "onboarding.jpeg",
        description: "Making the first impression count. This council ensures new students feel at home immediately, guiding them seamlessly through their transition into campus life.",
        descriptionHi: "पहला प्रभाव को यादगार बनाना। यह परिषद सुनिश्चित करती है कि नए छात्र तुरंत घर जैसा महसूस करें, कैंपस जीवन में उनके संक्रमण के माध्यम से उनका निर्बाध मार्गदर्शन करें।",
        responsibilities: [
            "Warmly welcome and assist newly arrived students",
            "Conduct comprehensive campus orientation tours",
            "Maintain onboarding documentation and buddy assignments",
            "Guide freshers through campus norms and routines",
            "Support smooth emotional and social student integration"
        ],
        responsibilitiesHi: [
            "नवागंतुक छात्रों का गर्मजोशी से स्वागत और सहायता करना",
            "व्यापक परिसर अभिविन्यास पर्यटन आयोजित करना",
            "ऑनबोर्डिंग दस्तावेज़ीकरण और बडी असाइनमेंट बनाए रखना",
            "कैंपस के मानदंडों और दिनचर्या के माध्यम से नए छात्रों का मार्गदर्शन करना",
            "सुचारू भावनात्मक और सामाजिक छात्र एकीकरण का समर्थन करना"
        ]
    },
    {
        id: 10,
        num: "10",
        title: "English Coordinator",
        titleHi: "अंग्रेजी समन्वयक",
        image: "english.jpeg",
        description: "Breaking language barriers. This council creates an immersive environment for mastering English communication, boosting confidence and unlocking global opportunities.",
        descriptionHi: "भाषा की बाधाओं को तोड़ना। यह परिषद अंग्रेजी संचार में महारत हासिल करने, आत्मविश्वास बढ़ाने और वैश्विक अवसरों को अनलॉक करने के लिए एक इमर्सिव वातावरण बनाती है।",
        responsibilities: [
            "Conduct daily spoken English practice and vocabulary sessions",
            "Improve interpersonal communication skills",
            "Organize public speaking, debate, and drama activities",
            "Facilitate language learning games and peer circles",
            "Monitor individual student progress in English fluency"
        ],
        responsibilitiesHi: [
            "दैनिक बोलचाल की अंग्रेजी अभ्यास और शब्दावली सत्र आयोजित करना",
            "पारस्परिक संचार कौशल में सुधार करना",
            "सार्वजनिक भाषण, वाद-विवाद और नाटक गतिविधियों का आयोजन करना",
            "भाषा सीखने के खेल और सहकर्मी मंडलों की सुविधा प्रदान करना",
            "अंग्रेजी प्रवाह में व्यक्तिगत छात्र प्रगति की निगरानी करना"
        ]
    },
    {
        id: 11,
        num: "11",
        title: "Placement Coordinator",
        titleHi: "प्लेसमेंट समन्वयक",
        image: "placement.jpeg.png",
        description: "Bridging the gap between education and career. The Placement Coordinator works tirelessly to prepare students for interviews, build professional resumes, and connect with top employers.",
        descriptionHi: "शिक्षा और करियर के बीच के अंतर को पाटना। प्लेसमेंट समन्वयक छात्रों को साक्षात्कारों के लिए तैयार करने, पेशेवर रिज्यूमे बनाने और शीर्ष नियोक्ताओं से जुड़ने के लिए अथक प्रयास करता है।",
        responsibilities: [
            "Coordinate drive schedules and recruitment logistics",
            "Conduct regular mock interviews and aptitude tests",
            "Provide personalized resume building and LinkedIn guidance",
            "Maintain effective communication with hiring partners",
            "Track placement statistics and interview feedback"
        ],
        responsibilitiesHi: [
            "ड्राइव शेड्यूल और भर्ती लॉजिस्टिक्स का समन्वय करना",
            "नियमित मॉक इंटरव्यू और एप्टीट्यूड टेस्ट आयोजित करना",
            "व्यक्तिगत रिज्यूमे निर्माण और लिंक्डइन मार्गदर्शन प्रदान करना",
            "हायरिंग पार्टनर्स के साथ प्रभावी संचार बनाए रखना",
            "प्लेसमेंट आंकड़ों और साक्षात्कार प्रतिक्रिया को ट्रैक करना"
        ]
    },
    {
        id: 12,
        num: "12",
        title: "Cultural Coordinator",
        titleHi: "सांस्कृतिक समन्वयक",
        image: "culture.jpeg",
        description: "The heartbeat of campus fun. This council organizes festivals, talent showcases, and cultural events that celebrate diversity and create lifelong memories.",
        descriptionHi: "कैंपस मनोरंजन की धड़कन। यह परिषद त्योहारों, प्रतिभा प्रदर्शनियों और सांस्कृतिक कार्यक्रमों का आयोजन करती है जो विविधता का जश्न मनाते हैं और जीवन भर की यादें बनाते हैं।",
        responsibilities: [
            "Organize campus cultural events and festival celebrations",
            "Manage music, dance, and theatrical performances",
            "Encourage full student participation and creative expression",
            "Coordinate event decorations and volunteer teams",
            "Foster inclusive joy, creativity, and team spirit"
        ],
        responsibilitiesHi: [
            "कैंपस सांस्कृतिक कार्यक्रमों और उत्सव समारोहों का आयोजन करना",
            "संगीत, नृत्य और नाट्य प्रदर्शन का प्रबंधन करना",
            "पूर्ण छात्र भागीदारी और रचनात्मक अभिव्यक्ति को प्रोत्साहित करना",
            "इवेंट सजावट और स्वयंसेवक टीमों का समन्वय करना",
            "समावेशी आनंद, रचनात्मकता और टीम भावना को बढ़ावा देना"
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // ---------------- CARD FILTERING ----------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const councilCards = document.querySelectorAll('.council-card');

    if (filterBtns.length > 0 && councilCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                councilCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(15px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // ---------------- COUNCIL MODAL POPUP ----------------
    const modal = document.getElementById('councilModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const viewBtns = document.querySelectorAll('.view-more-btn');

    const modalNum = document.getElementById('modalNum');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDescription');
    const modalResp = document.getElementById('modalResponsibilities');
    const modalImg = document.getElementById('modalImg');

    function openModal(id) {
        const item = councilData.find(c => c.id === parseInt(id));
        if (!item || !modal) return;

        const currentLang = localStorage.getItem('language') || 'en';
        const isHi = (currentLang === 'hi');

        if (modalNum) modalNum.textContent = item.num;
        if (modalTitle) modalTitle.textContent = (isHi && item.titleHi) ? item.titleHi : item.title;
        if (modalDesc) modalDesc.textContent = (isHi && item.descriptionHi) ? item.descriptionHi : item.description;
        if (modalImg) modalImg.src = item.image;

        const respHeading = modal.querySelector('.modal-resp-box h3');
        if (respHeading) {
            respHeading.textContent = isHi ? 'मुख्य जिम्मेदारियां' : 'Key Responsibilities';
        }

        if (modalResp) {
            modalResp.innerHTML = '';
            const listToUse = (isHi && item.responsibilitiesHi) ? item.responsibilitiesHi : item.responsibilities;
            listToUse.forEach(respText => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${respText}`;
                modalResp.appendChild(li);
            });
        }

        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    viewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-id');
            openModal(id);
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
            closeModal();
        }
    });

    // ---------------- PHOTO LIGHTBOX ----------------
    const viewerModal = document.getElementById('imageViewerModal');
    const expandedImg = document.getElementById('expandedImage');
    const closeViewerBtn = document.getElementById('closeViewerBtn');
    const allImages = document.querySelectorAll('.clickable-image');

    allImages.forEach((img) => {
        img.addEventListener('click', () => {
            if (viewerModal && expandedImg) {
                expandedImg.src = img.src;
                viewerModal.classList.add('is-active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeViewerBtn && viewerModal) {
        closeViewerBtn.addEventListener('click', () => {
            viewerModal.classList.remove('is-active');
            document.body.style.overflow = '';
        });
    }

    if (viewerModal) {
        viewerModal.addEventListener('click', (e) => {
            if (e.target === viewerModal) {
                viewerModal.classList.remove('is-active');
                document.body.style.overflow = '';
            }
        });
    }
});
