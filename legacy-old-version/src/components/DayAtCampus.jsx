import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Coffee, BookOpen, Code, GraduationCap, Moon } from 'lucide-react';
import styles from './DayAtCampus.module.css';

// Images (Aap apni images yahan import karein)
// Filhal maine placeholder use kiya hai
import ExcerciseImg from '../assets/Excercise 5.jpg'; 
import campusImg from '../assets/campus8.png';
import academic1Img from '../assets/campus25.jpeg';
import academic2Img from '../assets/campus17.jpeg';
import englishImg from '../assets/English.jpeg';
import breakfastImg from '../assets/4.jpg';
import snacksImg from '../assets/3.jpg';
import cultureImg from '../assets/culture.jpg';
import selfstudyImg from '../assets/selfstudy.jpg';
import dinnerImg from '../assets/dinner.jpeg';


// --- Schedule Data ---
const DAILY_SCHEDULE = [
    { 
        time: '06:30 AM', 
        activity: 'Morning Exercise', 
        desc: 'Starting the day with physical wellness and yoga.',
        icon: Sun, 
        image: ExcerciseImg 
    },
    { 
        time: '08:00 AM', 
        activity: 'Breakfast', 
        desc: 'Nutritious communal breakfast to fuel the day.',
        icon: Coffee, 
        image: breakfastImg 
    },
    { 
        time: '09:00 AM', 
        activity: 'Academic Session 1', 
        desc: 'Deep dive into core technical concepts and coding.',
        icon: BookOpen, 
        image: academic1Img 
    },
    { 
        time: '01:00 PM', 
        activity: 'Lunch Break', 
        desc: 'A healthy break to relax and recharge.',
        icon: Coffee, 
        image:  campusImg 
    },
    { 
        time: '02:00 PM', 
        activity: 'Academic Session 2', 
        desc: 'Practical application, projects, and peer learning.',
        icon: Code, 
        image: academic2Img 
    },
    { 
        time: '04:00 PM', 
        activity: 'English Activity', 
        desc: 'Communication skills and language development workshops.',
        icon: GraduationCap, 
        image: englishImg 
    },
    { 
        time: '05:00 PM', 
        activity: 'Snacks', 
        desc: 'Evening tea and light snacks.',
        icon: Coffee, 
        image: snacksImg 
    },
    { 
        time: '05:30 PM', 
        activity: 'Recreation', 
        desc: 'Sports, games, and team-building activities.',
        icon: Sun, 
        image: cultureImg 
    },
    { 
        time: '06:30 PM', 
        activity: 'Self Study', 
        desc: 'Revision and working on individual assignments.',
        icon: BookOpen, 
        image: selfstudyImg 
    },
    { 
        time: '08:30 PM', 
        activity: 'Dinner', 
        desc: 'Community dinner and winding down.',
        icon: Moon, 
        image: dinnerImg 
    },
];


// --- Animations ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { staggerChildren: 0.15 } 
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const DayAtCampus = () => {
    return (
        <div className={styles.pageContainer}>
            
            {/* Header Section */}
            <section className={styles.headerSection}>
                <motion.h1 
                    className={styles.pageTitle}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    A Day at Campus
                </motion.h1>
                <motion.p 
                    className={styles.pageSubtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Experience the disciplined and enriching lifestyle of our students.
                </motion.p>
            </section>

            {/* Timeline Section */}
            <div className={styles.timelineWrapper}>
                {/* Central Line */}
                <div className={styles.centralLine}></div>

                <motion.div 
                    className={styles.scheduleContainer}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {DAILY_SCHEDULE.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.leftItem : styles.rightItem}`}
                            variants={itemVariants}
                        >
                            {/* Time Badge (Center) */}
                            <div className={styles.timeBadge}>
                                <span>{item.time}</span>
                            </div>

                            {/* Content Card */}
                            <div className={styles.contentCard}>
                                <div className={styles.imageContainer}>
                                    <img src={item.image} alt={item.activity} className={styles.activityImage} />
                                    <div className={styles.iconOverlay}>
                                        <item.icon size={24} color="#fff" />
                                    </div>
                                </div>
                                <div className={styles.textContainer}>
                                    <h3 className={styles.activityTitle}>{item.activity}</h3>
                                    <p className={styles.activityDesc}>{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default DayAtCampus;