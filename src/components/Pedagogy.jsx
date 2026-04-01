import React from 'react';
import { motion } from 'framer-motion';
import styles from './Pedagogy.module.css'; // Nayi CSS file use karein

const Pedagogy = () => {
    const listVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1, 
            x: 0, 
            transition: { delay: i * 0.2, duration: 0.5 }
        })
    };

    const points = [
        "We emphasize Self-Learning, guided by a structured system of peer mentorship and industry mentors.",
        "Facilitators act as learning coaches to support and enhance the process, rather than traditional full-time teachers.",
        "The curriculum focuses on developing the essential ability of 'Learning How to Learn' in a world driven by AI.",
        "Our student-driven campus provides real-world leadership and collaboration opportunities through the Student Council System.",
        "The program develops essential life skills (communication, negotiation, problem-solving, and teamwork)."
    ];

    return (
        <div className={styles.pedagogyPage}>
            <div className={styles.container}>
                {/* Header Section */}
                <motion.div 
                    className={styles.header}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className={styles.mainTitle}>Residential Courses Pedagogy</h1>
                    <div className={styles.underline}></div>
                    <p className={styles.subtitle}>Beyond Traditional Education: Our Innovative Learning Approach</p>
                </motion.div>

                {/* Content Card */}
                <motion.div 
                    className={styles.contentCard}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.cardHeader}>
                        <h2>RESIDENTIAL COURSES - PEDAGOGY</h2>
                    </div>
                    
                    <div className={styles.cardBody}>
                        <p className={styles.introText}>
                            At our campus, we follow a unique and effective learning approach designed for the modern world:
                        </p>
                        
                        <ul className={styles.pointsList}>
                            {points.map((point, i) => (
                                <motion.li 
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    animate="visible"
                                    variants={listVariants}
                                >
                                    <span className={styles.bulletIcon}>✦</span>
                                    {point}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Pedagogy;