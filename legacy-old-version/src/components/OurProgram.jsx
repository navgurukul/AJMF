import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Briefcase, GraduationCap, RefreshCw, 
  BookOpen, Coffee, Sun, Moon, CheckCircle2, Clock, 
  ArrowRight, Star
} from 'lucide-react';
import styles from './OurPrograms.module.css';
import { usePageAnalytics, useScrollAnalytics } from '../utils/analyticsHooks';

// Images
import imgCode from '../assets/sopImg.jpeg'; 
import imgBusiness from '../assets/p.jpg';
import imgSecondChance from '../assets/WhatsApp Image 2025-11-24 at 8.28.28 PM.jpeg';
import imgCareer from '../assets/campus2.jpg'; 

// --- UPDATED: Compact Schedule Card ---
const ScheduleCard = ({ time, activity, icon: Icon, index }) => {
  return (
    <motion.div 
      className={styles.scheduleCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <div className={styles.timeBadge}>{time}</div>
      <div className={styles.scheduleContent}>
        <Icon size={18} className={styles.scheduleIcon} />
        <span className={styles.activityName}>{activity}</span>
      </div>
    </motion.div>
  );
};

// --- Program Row (Same as before) ---
const ProgramRow = ({ program, index }) => {
  const Icon = program.icon;
  const isEven = index % 2 === 0;

  return (
    <div className={styles.programSectionWrapper}>
      <div className={styles.container}>
        <div className={`${styles.programRow} ${!isEven ? styles.reversed : ''}`}>
          
          {/* IMAGE SIDE */}
          <motion.div 
            className={styles.imageSide}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.imageContainer}>
              <img src={program.image} alt={program.title} className={styles.programImage} />
              <div className={styles.floatingBadge}>
                <Icon size={20} />
                <span>{program.category}</span>
              </div>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div 
            className={styles.contentSide}
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className={styles.programTitle}>{program.title}</h2>
            <p className={styles.programDesc}>{program.description}</p>
            
            <div className={styles.curriculumBox}>
              <h4 className={styles.listHeading}>Curriculum Highlights</h4>
              <ul className={styles.curriculumList}>
                {program.curriculum.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 className={styles.checkIcon} size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.outcomeBox}>
               <strong>Career Paths:</strong> {program.outcomes.join(" • ")}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const OurPrograms = () => {
  usePageAnalytics('Our Programs');
  useScrollAnalytics();

  // --- DATA ---
  const PROGRAMS_DATA = [
    {
      icon: Code,
      title: "School of Programming",
      category: "Technology",
      description: "Build the digital future. A rigorous, project-based curriculum designed to turn beginners into full-stack developers capable of building scalable applications.",
      image: imgCode,
      curriculum: [
        "18-months self-paced programming course",
        "Front-end: JavaScript, React.js, Mobile Dev",
        "Back-end: Python, Node.js, Databases",
        "Soft skills: Leadership, English, Teamwork",
        "Real-world projects (WhatsApp/Facebook clones)"
      ],
      outcomes: ["Software Developer", "Front-End Developer", "Back-End Developer", "QA Engineer"]
    },
    {
      icon: Briefcase,
      title: "School of Business",
      category: "Management",
      description: "Master the tools of the modern trade. We prepare you for the corporate world with high-demand skills in data, operations, and digital strategy.",
      image: imgBusiness,
      curriculum: [
        "Advanced Google Suite (Sheets, Slides, Forms)",
        "CRM & Salesforce Administration",
        "Digital Marketing: Social Media & SEO",
        "Data Analytics: SQL, Tableau, Statistics"
      ],
      outcomes: ["CRM Associate", "Salesforce Admin", "Operations Associate", "Marketing Exec"]
    },
    {
      icon: RefreshCw,
      title: "School of Second Chance",
      category: "Empowerment",
      description: "A sanctuary for rebuilding lives. This residential program provides trauma survivors with the culinary and life skills needed for financial independence and dignity.",
      image: imgSecondChance,
      curriculum: [
        "Culinary Skills: Baking, Hygiene, Food Presentation",
        "Life Skills: Confidence & Decision Making",
        "Professional Skills: Workplace Readiness",
        "Entrepreneurship: Starting a small business"
      ],
      outcomes: ["Professional Chef", "Entrepreneur", "Catering Manager"]
    },
    {
      icon: GraduationCap,
      title: "School of Education",
      category: "Teaching",
      description: "Shaping the teachers of tomorrow. Through fieldwork and modern pedagogy, we train educators who can transform classrooms and inspire students.",
      image: imgCareer,
      curriculum: [
        "Modern Pedagogical Strategies",
        "Child Psychology & Development",
        "Classroom Management",
        "Curriculum Design & Assessment"
      ],
      outcomes: ["Educator", "Curriculum Designer", "School Leader"]
    }
  ];

  const DAILY_SCHEDULE = [
    { time: '06:30 AM', activity: 'Morning Exercise', icon: Sun },
    { time: '08:00 AM', activity: 'Breakfast', icon: Coffee },
    { time: '09:00 AM', activity: 'Academic Session 1', icon: BookOpen },
    { time: '01:00 PM', activity: 'Lunch Break', icon: Coffee },
    { time: '02:00 PM', activity: 'Academic Session 2', icon: Code },
    { time: '04:00 PM', activity: 'English Activity', icon: GraduationCap },
    { time: '05:00 PM', activity: 'Snacks', icon: Coffee },
    { time: '05:30 PM', activity: 'Recreation', icon: Sun },
    { time: '06:30 PM', activity: 'Self Study', icon: BookOpen },
    { time: '08:30 PM', activity: 'Dinner', icon: Coffee },
    { time: '09:30 PM', activity: 'Lights Out', icon: Moon },
  ];

  return (
    <div className={styles.pageContainer}>
      
      {/* Hero Title */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.h1 
            className={styles.pageTitle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Academic <span className={styles.goldText}>Excellence</span>
          </motion.h1>
          <motion.p 
            className={styles.pageSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore our specialized schools designed to bridge the gap between education and employment.
          </motion.p>
        </div>
      </section>

      {/* Programs List */}
      <div className={styles.programsListWrapper}>
        {PROGRAMS_DATA.map((program, index) => (
          <ProgramRow key={index} program={program} index={index} />
        ))}
      </div>

      {/* Finance Coming Soon */}
      <section className={styles.comingSoonSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.comingSoonCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className={styles.csContent}>
              <div className={styles.csIconWrapper}>
                <Briefcase size={28} />
              </div>
              <div className={styles.csTextWrapper}>
                <h3>School of Finance</h3>
                <span className={styles.csBadge}>Coming Soon</span>
              </div>
            </div>
            <div className={styles.csDecoration}>
              <Star size={100} className={styles.csStar} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* UPDATED: Compact Daily Schedule */}
      <section className={styles.scheduleSection}>
        <div className={styles.container}>
          <div className={styles.scheduleWrapper}>
            <div className={styles.scheduleHeader}>
              <h2 className={styles.scheduleTitle}>A Day at Campus</h2>
              <p className={styles.scheduleSubtitle}>A structured timeline for success.</p>
            </div>
            
            {/* GRID LAYOUT INSTEAD OF TIMELINE */}
            <div className={styles.scheduleGrid}>
              {DAILY_SCHEDULE.map((item, index) => (
                <ScheduleCard key={index} {...item} index={index} />
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default OurPrograms;