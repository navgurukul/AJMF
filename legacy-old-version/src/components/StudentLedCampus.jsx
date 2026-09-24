 


import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, FaHeart, FaBook, FaUtensils, 
  FaShieldAlt, FaHandshake, FaLightbulb,
  FaDumbbell, FaBuilding, FaGlobe,
  FaLaptop, FaUserPlus, FaLanguage, FaBriefcase,
  FaCheckCircle, FaBullhorn 
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './StudentLedCampus.module.css';
import { usePageAnalytics, useScrollAnalytics } from '../utils/analyticsHooks';

// Import images
import discoImg from '../assets/DISCO.jpeg';
import academicImg from '../assets/T&P.jpeg';
import kitchenImg from '../assets/FC.jpg';
import healthImg from '../assets/HealthC.jpeg';
import workoutImg from '../assets/WorkoutC.jpeg';
import facilityImg from '../assets/FM.jpeg';
import outreachImg from '../assets/Outreach.jpeg';
import itImg from '../assets/IT copy.jpeg';
import onboardingImg from '../assets/Onboarding copy.jpeg';
import englishImg from '../assets/EnglishC.jpeg';
import placementImg from '../assets/PlacementC.jpeg';
import culturalImg from '../assets/CultureC.jpeg';

const MotionSection = motion.section;
const MotionDiv = motion.div;

// --- Animations ---
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

// --- Sub-Component: Individual Council Row (Zig Zag) ---
const CouncilRow = ({ council, index }) => {
  // Calculate number string (01, 02, etc.)
  const numberString = (index + 1).toString().padStart(2, '0');
  
  return (
    <MotionDiv 
      className={styles.councilRow}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      {/* Image Side */}
      <div className={styles.imageSide}>
        <div className={styles.imageBackdrop}></div>
        <img src={council.image} alt={council.name} className={styles.mainImage} />
      </div>

      {/* Content Side */}
      <div className={styles.contentSide}>
        <div className={styles.watermarkNumber}>{numberString}</div>
        <span className={styles.councilSubtitle}>{council.subtitle}</span>
        <h2 className={styles.councilTitle}>{council.name}</h2>
        <p className={styles.overviewText}>{council.overview}</p>

        {/* Responsibilities Box */}
        <div className={styles.respBox}>
          <div className={styles.respTitle}>Key Responsibilities</div>
          <ul className={styles.respList}>
            {council.responsibilities.map((resp, idx) => (
              <li key={idx} className={styles.respItem}>
                <FaCheckCircle className={styles.checkIcon} />
                <span><strong>{resp.title}:</strong> {resp.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MotionDiv>
  );
};

const StudentLedCampus = () => {
  const navigate = useNavigate();
  usePageAnalytics('Student Led Campus');
  useScrollAnalytics();

  const councils = [
    {
      name: "DISCO - Discipline Coordinator",
      subtitle: "Safety & Standards",
      icon: FaShieldAlt,
      image: discoImg,
      overview: "The backbone of campus harmony. The Discipline Coordinator doesn't just enforce rules; they foster a culture of mutual respect, ensuring every student feels safe and valued within the community.",
      responsibilities: [
        { title: "Harmonious Environment", description: "Promote a friendly atmosphere where rules are followed with sincerity." },
        { title: "Conflict Resolution", description: "Act as a bridge between students and coordinators to resolve issues fairly." }
      ]
    },
    {
      name: "Academic Coordinator",
      subtitle: "Excellence in Learning",
      icon: FaBook,
      image: academicImg,
      overview: "Driving the educational mission forward. This council ensures that the learning environment is productive, managing schedules and providing the necessary support for every student to excel.",
      responsibilities: [
        { title: "Study Management", description: "Organize effective timetables and academic calendars." },
        { title: "Peer Support", description: "Facilitate study groups and tutoring for students needing extra help." }
      ]
    },
    {
      name: "Kitchen Coordinator",
      subtitle: "Nutrition & Health",
      icon: FaUtensils,
      image: kitchenImg,
      overview: "More than just food—it's about fueling the mind. The Kitchen Coordinator manages the entire dining experience, ensuring nutritious, hygienic meals that keep the campus energetic.",
      responsibilities: [
        { title: "Menu Planning", description: "Design diverse, nutritious weekly menus catering to preferences." },
        { title: "Quality Control", description: "Maintain high hygiene standards in preparation and service." }
      ]
    },
    {
      name: "Health Coordinator",
      subtitle: "Medical & Wellness",
      icon: FaHeart,
      image: healthImg,
      overview: "Guardians of well-being. The Health Coordinator ensures that physical and mental health resources are always accessible, organizing checkups and providing support during emergencies.",
      responsibilities: [
        { title: "Health Monitoring", description: "Organize regular checkups and maintain health records." },
        { title: "Emergency Response", description: "Coordinate quick access to healthcare facilities when needed." }
      ]
    },
    {
      name: "Workout Coordinator",
      subtitle: "Physical Fitness",
      icon: FaDumbbell,
      image: workoutImg,
      overview: "Promoting a healthy lifestyle through action. From morning yoga to evening sports, this council ensures students stay physically active and energized.",
      responsibilities: [
        { title: "Daily Sessions", description: "Organize workout sessions, yoga classes, and fitness challenges." },
        { title: "Sports Events", description: "Plan tournaments and recreational team games." }
      ]
    },
    {
      name: "Facility Manager",
      subtitle: "Infrastructure",
      icon: FaBuilding,
      image: facilityImg,
      overview: "Ensuring the campus runs like a well-oiled machine. The Facility Manager oversees the maintenance of all infrastructure, creating a comfortable and functional environment.",
      responsibilities: [
        { title: "Maintenance", description: "Oversee repairs and upkeep of buildings and utilities." },
        { title: "Resource Allocation", description: "Manage usage of classrooms and common spaces." }
      ]
    },
    {
      name: "Outreach Coordinator",
      subtitle: "External Relations",
      icon: FaGlobe,
      image: outreachImg,
      overview: "The face of the campus. This council builds bridges with the outside world, connecting students with communities, NGOs, and partners.",
      responsibilities: [
        { title: "Partnerships", description: "Establish connections with organizations for student benefit." },
        { title: "Representation", description: "Represent the campus at external events and conferences." }
      ]
    },
    {
      name: "IT Coordinator",
      subtitle: "Digital Infrastructure",
      icon: FaLaptop,
      image: itImg,
      overview: "Powering the digital learning experience. The IT Coordinator ensures that the technological backbone of the campus—from WiFi to laptops—is always operational.",
      responsibilities: [
        { title: "Tech Support", description: "Assist students with hardware and software issues." },
        { title: "Network Management", description: "Maintain campus internet and digital platforms." }
      ]
    },
    {
      name: "Onboarding Coordinator",
      subtitle: "New Student Success",
      icon: FaUserPlus,
      image: onboardingImg,
      overview: "Making the first impression count. This council ensures new students feel at home immediately, guiding them through their transition into campus life.",
      responsibilities: [
        { title: "Orientation", description: "Conduct comprehensive sessions for new batches." },
        { title: "Mentorship", description: "Pair new students with seniors for guidance." }
      ]
    },
    {
      name: "English Coordinator",
      subtitle: "Communication",
      icon: FaLanguage,
      image: englishImg,
      overview: "Breaking language barriers. This council creates an immersive environment for mastering English, the key to global opportunities.",
      responsibilities: [
        { title: "Skill Building", description: "Organize speaking, writing, and grammar workshops." },
        { title: "Practice Clubs", description: "Run debate sessions and conversation circles." }
      ]
    },
    {
      name: "Placement Coordinator",
      subtitle: "Career Launchpad",
      icon: FaBriefcase,
      image: placementImg,
      overview: "Bridging the gap between education and career. The Placement Coordinator works tirelessly to prepare students for interviews and connect them with top employers.",
      responsibilities: [
        { title: "Recruitment", description: "Organize placement drives and connect with companies." },
        { title: "Prep Sessions", description: "Conduct mock interviews and resume building workshops." }
      ]
    },
    {
      name: "Cultural Coordinator",
      subtitle: "Vibrant Life",
      icon: FaBullhorn,
      image: culturalImg,
      overview: "The heartbeat of campus fun. This council organizes festivals and events that celebrate diversity and build lifelong memories.",
      responsibilities: [
        { title: "Events", description: "Plan festivals, talent shows, and celebrations." },
        { title: "Community", description: "Create activities that bond students together." }
      ]
    }
  ];

  return (
    <div className={styles.pageContainer}>
      
      {/* --- HERO SECTION --- */}
      <MotionSection 
        className={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Leadership in <span>Action</span>
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A campus run entirely by students, for students. <br />
            Developing real-world skills through ownership and responsibility.
          </motion.p>
        </div>
      </MotionSection>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className={styles.philosophySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Philosophy</h2>
          </div>
          <MotionDiv 
            className={styles.philosophyGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MotionDiv variants={fadeIn} className={styles.philosophyCard}>
              <div className={styles.iconWrapper}><FaUsers /></div>
              <h3>Student Ownership</h3>
              <p>We don't just attend classes; we run the show. Every aspect of campus life is managed by student leaders.</p>
            </MotionDiv>
            <MotionDiv variants={fadeIn} className={styles.philosophyCard}>
              <div className={styles.iconWrapper}><FaHandshake /></div>
              <h3>Collaboration</h3>
              <p>Councils work together like a professional organization, solving problems and achieving common goals.</p>
            </MotionDiv>
            <MotionDiv variants={fadeIn} className={styles.philosophyCard}>
              <div className={styles.iconWrapper}><FaLightbulb /></div>
              <h3>Skill Development</h3>
              <p>Learning happens beyond textbooks. We learn management, empathy, and leadership by doing.</p>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* --- COUNCILS STREAM (ZIG ZAG) --- */}
      <section className={styles.councilSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Meet the Councils</h2>
          </div>
          
          <div className={styles.councilStream}>
            {councils.map((council, index) => (
              <CouncilRow key={index} council={council} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className={styles.ctaSection}>
        <MotionDiv 
          className={styles.ctaCard}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.ctaTitle}>Ready to Lead?</h2>
          <p className={styles.ctaText}>
            Join a community where your voice matters and your actions shape the future. 
            Apply now to become part of the Student Led Campus.
          </p>
          <div className={styles.ctaButtonGroup}>
            <button className={styles.primaryBtn} onClick={() => navigate('/admissions')}>
              Apply Now
            </button>
            <button className={styles.secondaryBtn} onClick={() => navigate('/programs')}>
              View Programs
            </button>
          </div>
        </MotionDiv>
      </section>

    </div>
  );
};

export default StudentLedCampus;