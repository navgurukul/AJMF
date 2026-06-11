// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//     FaBuilding, FaChalkboardTeacher, FaUtensils, FaDumbbell,
//     FaHeartbeat, FaWifi, FaBookOpen, FaLaptop, FaSolarPanel
// } from 'react-icons/fa';
// import styles from './CampusAndFacilities.module.css';
// import { trackSectionView, trackFacilityInteraction } from '../utils/analytics';
// import { usePageAnalytics, useScrollAnalytics } from '../utils/analyticsHooks';
// import womansDayImage from '../assets/womans-Day.jpg';
// import exercisePhoto from '../assets/Excercise 5.jpg';
// import hackathonsPhoto from '../assets/Programming Hackathon.jpeg';

// const MotionDiv = motion.div;
// const MotionSection = motion.section;

// const containerVariants = {
//     visible: { transition: { staggerChildren: 0.1 } }
// };
// const fadeInUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.8, ease: "easeOut" }
//     }
// };
// const cardStaggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: { staggerChildren: 0.2 }
//     }
// };
// const facilityCardVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.95 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//             type: "spring",
//             stiffness: 100,
//             damping: 15,
//             duration: 0.6
//         }
//     }
// };
// const cardSlideIn = {
//     hidden: { opacity: 0, y: 50, scale: 0.9 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//             type: "spring",
//             stiffness: 50,
//             damping: 18,
//             mass: 1.2,
//         }
//     }
// };

// const FlowingDotsBackground = () => (
//     <div className={`${styles.backgroundAnimation} ${styles.dotsBackground}`}>
//         <div className={styles.dotFlow}></div>
//         <div className={styles.dotFlow}></div>
//         <div className={styles.dotFlow}></div>
//     </div>
// );

// const FacilityIcon = ({ icon }) => (
//     <motion.div
//         className={styles.facilityIconWrapper}
//         initial={{ opacity: 0, scale: 0 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{
//             type: "spring",
//             stiffness: 200,
//             damping: 15,
//             delay: 0.1
//         }}
//         viewport={{ once: true }}
//         whileHover={{
//             scale: 1.1,
//             rotate: [0, -5, 5, 0],
//             transition: { duration: 0.3 }
//         }}
//     >
//         <motion.span
//             className={styles.facilityIcon}
//             initial={{ rotate: -180, opacity: 0 }}
//             whileInView={{ rotate: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//         >
//             {icon}
//         </motion.span>
//     </motion.div>
// );

// // 🌟 Naya 'Activity Row' component
// const ActivityRow = ({ title, description, mediaType, mediaSrc, isReversed }) => {
//     return (
//         <motion.div
//             className={`${styles.activityRow} ${isReversed ? styles.reversed : ''}`}
//             variants={cardSlideIn}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//         >
//             <div className={styles.activityMediaContainer}>
//                 {mediaType === 'video' ? (
//                     <video
//                         className={styles.activityMedia}
//                         src={mediaSrc}
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                     />
//                 ) : (
//                     <img
//                         src={mediaSrc}
//                         alt={title}
//                         className={styles.activityMedia}
//                     />
//                 )}
//             </div>
//             <div className={styles.activityContentContainer}>
//                 <h3 className={styles.activityTitle}>{title}</h3>
//                 <p className={styles.activityDescription}>{description}</p>
//             </div>
//         </motion.div>
//     );
// };


// function CampusAndFacilities() {
//     usePageAnalytics('Campus & Facilities');
//     useScrollAnalytics('Campus & Facilities');

//     const facilities = [
//         { icon: <FaChalkboardTeacher />, title: "Training & Conference", description: "8 state-of-the-art training rooms, plus a mini auditorium and conference hall for events." },
//         { icon: <FaBuilding />, title: "Student Accommodation", description: "Comfortable and secure dormitories for 150 students and accommodation for 10 instructors." },
//         { icon: <FaUtensils />, title: "Kitchen & Dining", description: "A fully functional kitchen and a spacious dining hall serving nutritious meals." },
//         { icon: <FaBookOpen />, title: "Admin & Learning", description: "Includes reception, administrative office, staff room, and a well-stocked library." },
//         { icon: <FaSolarPanel />, title: "Eco-Friendly Campus", description: "Sustainable features like STP, Solar Power, Rainwater Harvesting, and energy-efficient windows." },
//         { icon: <FaLaptop />, title: "Digital Access", description: "Provision of laptops, high-speed internet, mentorship, English classes, and mental health counselling." },
//         { icon: <FaDumbbell />, title: "Sports & Recreation", description: "A large playground for outdoor activities and promoting a healthy, active lifestyle." },
//     ];

//     // 🌟 Naya data array
//     const eventsAndActivitiesData = [
//         {
//             title: "Independence Day Celebration",
//             description: "Honoring the nation's spirit with flag hoisting, cultural programs, and patriotic fervor displayed by our students and staff.",
//             mediaType: 'video',
//             mediaSrc: 'https://2c28zt61kz.ucarecd.net/ad074c4e-e4ce-4ade-866f-20234854c7f9/independence_day_2024.mp4' // <-- UPDATED URL
//         },
//         {
//             title: "Infosys Campus Visit",
//             description: "Our students gained invaluable industry exposure during an insightful visit to the Infosys campus, interacting with professionals.",
//             mediaType: 'video',
//             mediaSrc: 'https://2c28zt61kz.ucarecd.net/4dfe157b-f679-4c0b-a1d2-b23318aa6056/InfosysVisitvideo1.mp4'
//         },
//         {
//             title: "Meetup with MIT USA Students",
//             description: "A collaborative session where our students exchanged ideas, culture, and technical knowledge with peers from MIT, USA.",
//             mediaType: 'video',
//             mediaSrc:' https://2c28zt61kz.ucarecd.net/c70d88bf-45f8-486e-8352-758e9a82c631/VID_20240125_124807798.mp4'
//         },
//         {
//             title: "Women's Day",
//             description: "Celebrating the strength and achievements of women within our community and beyond with special workshops and talks.",
//             mediaType: 'images',
//             mediaSrc: womansDayImage
//         },
//         {
//             title: "Community Healthcare Camp",
//             description: "Our commitment to wellness in action. A free healthcare camp providing essential check-ups and medical advice.",
//             mediaType: 'video',
//             mediaSrc: ' https://2c28zt61kz.ucarecd.net/1015491d-6622-42f8-b319-958cc04d5b4b/HealthCamp30July24.mp4'
//         },
//         {
//             title: "Visit from Sister Lucy",
//             description: "A blessed and inspiring day as students and staff interact with Sister Lucy, sharing moments of joy and wisdom.",
//             mediaType: 'video',
//             mediaSrc: 'https://2c28zt61kz.ucarecd.net/4704ba41-31cc-49ac-aad3-ed97eb380088/VisitSisterLucyFounderMaher.mp4'
//         },
//         {
//             title: "Daily Exercise & Wellness",
//             description: "Physical well-being is core to our philosophy. Students engaging in daily exercise routines to stay fit and focused.",
//             mediaType: 'photo',
//             mediaSrc: exercisePhoto
//         },
//         {
//             title: "Intensive Hackathons",
//             description: "Fueling innovation and teamwork. Students deep in concentration during one of our weekend-long hackathons.",
//             mediaType: 'photo',
//             mediaSrc: hackathonsPhoto
//         },
//     ];

//     return (
//         <MotionDiv
//             className={styles.pageContainer}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//         >

//             <section className={`${styles.campusSection}`}>
//                 <video
//                     className={styles.videoElement}
//                     src="https://2c28zt61kz.ucarecd.net/980f4330-9205-408f-ad09-9cd48797daf4/AnishJadhavMemorialFoundationSkillingInstitue.mp4"
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                 >
//                     Your browser does not support the video tag.
//                 </video>
//                 <div className={styles.videoOverlay}></div>

//                 <div className={`${styles.container} ${styles.campusSectionContainer}`}>
//                     <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>A Glimpse of Campus Life</h2>
//                     <div className={styles.accentBar}></div>
//                     <p className={`${styles.fontBody} ${styles.sectionSubtitle}`}>
//                         A nurturing residential environment where students learn, grow, and thrive together.
//                     </p>
//                 </div>
//             </section>

//             <MotionSection
//                 className={`${styles.section} ${styles.relativePosition}`}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.1 }}
//                 variants={containerVariants}
//                 onViewportEnter={() => trackSectionView('World-Class Facilities', 'Campus & Facilities')}
//             >
//                 <FlowingDotsBackground />

//                 <div className={`${styles.container} ${styles.textCenter} ${styles.contentAboveBackground}`}>
//                     <MotionDiv variants={fadeInUp}>
//                         <h2 className={styles.sectionHeading}>
//                             Facilities
//                         </h2>
//                         <div className={styles.accentBar}></div>
//                         <p className={styles.sectionSubtitle}>
//                             Every aspect of our campus is designed to support student success, from academics to wellness.
//                         </p>
//                     </MotionDiv>

//                     <MotionDiv variants={cardStaggerContainer} className={styles.facilitiesGrid}>
//                         {facilities.map((facility, index) => (
//                             <MotionDiv
//                                 key={index}
//                                 className={styles.facilityCard}
//                                 variants={facilityCardVariants}
//                                 whileHover={{
//                                     scale: 1.03,
//                                     boxShadow: "0 15px 35px rgba(0, 0, 0, 0.12)",
//                                     y: -5,
//                                     transition: { type: "spring", stiffness: 300, damping: 20 }
//                                 }}
//                                 onViewportEnter={() => trackFacilityInteraction(facility.title, 'view')}
//                             >
//                                 <FacilityIcon icon={facility.icon} />
//                                 <div>
//                                     <motion.h3
//                                         className={styles.facilityTitle}
//                                         initial={{ opacity: 0, x: -20 }}
//                                         whileInView={{ opacity: 1, x: 0 }}
//                                         transition={{ duration: 0.5, delay: 0.1 }}
//                                         viewport={{ once: true }}
//                                     >
//                                         {facility.title}
//                                     </motion.h3>
//                                     <motion.p
//                                         className={styles.facilityDescription}
//                                         initial={{ opacity: 0, x: -20 }}
//                                         whileInView={{ opacity: 1, x: 0 }}
//                                         transition={{ duration: 0.5, delay: 0.2 }}
//                                         viewport={{ once: true }}
//                                     >
//                                         {facility.description}
//                                     </motion.p>
//                                 </div>
//                             </MotionDiv>
//                         ))}
//                     </MotionDiv>
//                 </div>
//             </MotionSection>

//             <MotionSection
//                 className={`${styles.section} ${styles.relativePosition} ${styles.lightBg}`}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.1 }}
//                 variants={containerVariants}
//                 onViewportEnter={() => trackSectionView('Events & Activities', 'Campus & Facilities')}
//             >
//                 <div className={`${styles.container} ${styles.textCenter} ${styles.contentAboveBackground}`}>
//                     <MotionDiv variants={fadeInUp}>
//                         <h2 className={styles.sectionHeading}>
//                             Events & Activities
//                         </h2>
//                         <div className={styles.accentBar}></div>
//                         <p className={styles.sectionSubtitle}>
//                             Learning beyond classrooms. We focus on holistic development through events, sports, and community activities.
//                         </p>
//                     </MotionDiv>

//                     <MotionDiv
//                         className={styles.activityGrid}
//                         variants={cardStaggerContainer}
//                     >
//                         {eventsAndActivitiesData.map((activity, index) => (
//                             <ActivityRow
//                                 key={index}
//                                 title={activity.title}
//                                 description={activity.description}
//                                 mediaType={activity.mediaType}
//                                 mediaSrc={activity.mediaSrc}
//                                 isReversed={index % 2 !== 0}
//                             />
//                         ))}
//                     </MotionDiv>
//                 </div>
//             </MotionSection>

//         </MotionDiv>
//     );
// }

// export default CampusAndFacilities;




import React from 'react';
import { motion } from 'framer-motion';
import {
    FaBuilding, FaChalkboardTeacher, FaUtensils, FaDumbbell,
    FaBookOpen, FaLaptop, FaSolarPanel
} from 'react-icons/fa';
import styles from './CampusAndFacilities.module.css';
import { useScrollAnalytics } from '../utils/analyticsHooks';
import { trackSectionView, trackFacilityInteraction } from '../utils/analytics';

const MotionDiv = motion.div;
const MotionSection = motion.section;

// --- Animation Variants ---
const containerVariants = {
    visible: { transition: { staggerChildren: 0.1 } }
};
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};
const cardStaggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const facilityCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, y: 0, 
        transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
};

const FacilityIcon = ({ icon }) => (
    <div className={styles.facilityIconWrapper}>
        <span className={styles.facilityIcon}>{icon}</span>
    </div>
);

function CampusAndFacilities() {
    useScrollAnalytics('Campus & Facilities');
    
    const facilities = [
        { icon: <FaChalkboardTeacher />, title: "Training & Conference", description: "8 state-of-the-art training rooms equipped with projectors and audio systems, plus a mini auditorium and conference hall for large gatherings and workshops." },
        { icon: <FaBuilding />, title: "Student Accommodation", description: "Safe and comfortable residential dormitories capable of housing 150 students, along with dedicated separate accommodation for 10 full-time instructors." },
        { icon: <FaUtensils />, title: "Kitchen & Dining", description: "A hygienic, fully functional industrial-grade kitchen and a spacious community dining hall serving nutritious, balanced meals three times a day." },
        { icon: <FaBookOpen />, title: "Admin & Learning Center", description: "A central hub containing the reception, administrative offices, staff rooms, and a well-stocked library for self-paced learning." },
        { icon: <FaSolarPanel />, title: "Eco-Friendly Infra", description: "committed to sustainability with a Sewage Treatment Plant (STP), Solar Power generation, Rainwater Harvesting, and energy-efficient architecture." },
        { icon: <FaLaptop />, title: "Digital Infrastructure", description: "High-speed internet access across campus, provision of laptops for every student, and a dedicated computer lab for technical training." },
        { icon: <FaDumbbell />, title: "Sports & Recreation", description: "A large outdoor playground for cricket, volleyball, and morning yoga sessions to ensure physical fitness alongside mental growth." },
    ];

    return (
        <div className={styles.pageContainer}>

            {/* --- NEW HERO SECTION (Text Only) --- */}
            <section className={styles.heroSection}>
                <MotionDiv 
                    className={styles.heroContent}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <MotionDiv variants={fadeInUp}>
                        <h1 className={styles.heroTitle}>Infrastructure</h1>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp}>
                        <div className={styles.heroAccentLine}></div>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp}>
                        <p className={styles.heroSubtitle}>
                            A nurturing residential environment designed to foster learning, 
                            growth, and community living.
                        </p>
                    </MotionDiv>
                </MotionDiv>
            </section>

            {/* --- FACILITIES GRID --- */}
            <MotionSection
                className={styles.facilitiesSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                onViewportEnter={() => trackSectionView('Facilities Section', 'Campus & Facilities')}
            >
                <div className={styles.container}>
                    <MotionDiv variants={fadeInUp} className={styles.sectionHeader}>
                        <h2 className={styles.sectionHeading}>Our Facilities</h2>
                        <p className={styles.sectionDesc}>
                            Every aspect of our campus is designed to support student success, from academics to wellness.
                        </p>
                    </MotionDiv>

                    <MotionDiv variants={cardStaggerContainer} className={styles.facilitiesGrid}>
                        {facilities.map((facility, index) => (
                            <MotionDiv
                                key={index}
                                className={styles.facilityCard}
                                variants={facilityCardVariants}
                                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                onViewportEnter={() => trackFacilityInteraction(facility.title, 'view')}
                            >
                                <FacilityIcon icon={facility.icon} />
                                <div className={styles.cardContent}>
                                    <h3 className={styles.facilityTitle}>{facility.title}</h3>
                                    <p className={styles.facilityDescription}>{facility.description}</p>
                                </div>
                            </MotionDiv>
                        ))}
                    </MotionDiv>
                </div>
            </MotionSection>

        </div>
    );
}

export default CampusAndFacilities;