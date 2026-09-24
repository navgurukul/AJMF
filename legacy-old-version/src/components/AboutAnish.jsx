import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutAnish.module.css';

const MotionDiv = motion.div;
const MotionSection = motion.section;

import AnishImage from '../assets/Anish2.png';
import FoundationImage from '../assets/ Anish8.png';
import { Heart, Star } from 'lucide-react';

import campusImg1 from '../assets/6.JPG.jpeg';
import campusImg2 from '../assets/Anish4.jpeg';

const containerVariants = {
    visible: { transition: { staggerChildren: 0.1 } }
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80, damping: 12, delay: 0.3 } }
};
const heartBeat = {
    beat: {
        scale: [1, 1.2, 1, 1.1, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.7, 1]
        }
    }
};

const BubbleBackground = () => (
    <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-50">
        <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes float {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
            }
            .bubble {
                position: absolute;
                bottom: -150px;
                width: 40px;
                height: 40px;
                background-color: rgba(209, 163, 58, 0.3); 
                border-radius: 50%;
                animation: float 25s infinite linear;
            }
            .bubble:nth-child(1) { left: 10%; animation-duration: 25s; width: 60px; height: 60px; opacity: 0.4; }
            .bubble:nth-child(2) { left: 40%; animation-duration: 35s; width: 80px; height: 80px; opacity: 0.3; }
            .bubble:nth-child(3) { left: 70%; animation-duration: 30s; opacity: 0.5; }
            .bubble:nth-child(4) { left: 20%; animation-duration: 40s; width: 50px; height: 50px; opacity: 0.2; }
            .bubble:nth-child(5) { left: 85%; animation-duration: 20s; opacity: 0.35; }
        `}} />
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
    </div>
);

const VisionAndLegacySection = () => {
    const backgroundShapeAnimate = {
        hidden: { x: "-100%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 2.5, ease: "easeOut", delay: 0.1 } }
    };

    const boxAnimate = {
        hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 40,
                damping: 18,
                delay: 0.5
            }
        }
    };

    return (
        <MotionSection
            className={styles.visionLegacySection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <MotionDiv
                className={styles.visionBackgroundShape}
                variants={backgroundShapeAnimate}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            />

            <BubbleBackground />

            <div className={styles.visionLegacyGrid}>

                <MotionDiv variants={itemVariants} className={styles.visionContentContainer}>
                    <h2 className={styles.visionHeading}>
                        About Anish Jadhav
                    </h2>

                    <p className={styles.visionParagraph}>
                        Anish
                        was a bright, compassionate, and multitalented young man whose life, though brief,
                        continues to inspire many.
                        Anish studied BBA in Marketing, where he distinguished himself through his
                        creativity and dedication.. For his final-year project, he authored an in-depth study
                        titled “Marketing Strategies of Nikon vs Canon”, which was recognized as the
                        Best Project of the College—a testament to his analytical ability and commitment
                        to excellence.
                        Driven by passion and disciplined self-learning, Anish developed professional-level
                        expertise in photography, mastering both technical and creative aspects of the
                        craft. His strong communication skills, humility, and eagerness to help others made
                        him stand out among his peers.
                        Recognizing his talent, Nikon India Ltd. selected Anish to join their Core Technical
                        Team—a prestigious position typically reserved for Film Institute and Television
                        graduates with advanced training in cinematography, editing, and professional
                        software. In this role, Anish contributed to:
                         Conducting workshops for amateur photographers across India
                         Demonstrating and training users on Nikon’s latest camera technologies
                         Supporting marketing promotions and product outreach initiatives
                        His selection reflected not only his technical competence but also his interpersonal
                        warmth, professionalism, and ability to connect with people from all walks of life.
                        Beyond photography, Anish had a deep love for music and enjoyed playing the
                        guitar. His friendly, outgoing nature and genuine care for others earned him a wide
                        circle of friends who cherished his presence, humour, and kindness.
                        We remember the dreams he carried, the kindness he shared, and the light he
                        brought into our lives. Losing him at just twentyfive left a void that words can never
                        fully express. Yet even in his absence, his spirit guides us every day.
                    </p>

                    <div className={styles.visionPartnershipCTA}>
                        <Star className={styles.partnershipIcon} />
                        <p>Join us in carrying forward Anish's dreams and empowering the next generation of leaders.</p>
                    </div>
                </MotionDiv>

                <MotionDiv variants={itemVariants} className={styles.visionImageContainerRight}>

                    <div className={styles.visionImageWrapper}>
                        <img src={FoundationImage} alt="Foundation Vision" className={styles.visionImage} />
                    </div>

                    <MotionDiv className={styles.visionLegacyBox} variants={boxAnimate}>
                        <motion.div variants={heartBeat} animate="beat">
                            <Heart className={styles.legacyHeartIcon} />
                        </motion.div>
                        <h3 className={styles.legacyBoxTitle}>His Legacy Lives On</h3>
                        <p className={styles.legacyBoxText}>
                            Through the Anish Jadhav Memorial Foundation, we honour his memory by carrying
                            forward the values he lived by—compassion, creativity, dedication, and the belief
                            that every young person deserves a chance to grow.
                            We remember Anish.
                            We cherish him.
                            And through our work, we keep his light alive.
                        </p>
                    </MotionDiv>

                </MotionDiv>

            </div>
        </MotionSection>
    );
};

const AboutAnish = () => {
    return (
        <div className={styles.pageContainer}>

            <section className={styles.heroSection}>
                <MotionDiv
                    className={styles.heroBackgroundShape}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2.10, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
                />

                <div className={`${styles.container} ${styles.heroContentWrapper}`}>
                    <div className={styles.heroGrid}>
                        <MotionDiv
                            className={styles.heroTextContainer}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <MotionDiv variants={itemVariants}>
                                <h1 className={styles.heroHeading}>
                                    In Loving Memory of <span className={styles.heroHeadingSpan}>Anish Jadhav</span>
                                </h1>
                            </MotionDiv>

                            <MotionDiv variants={itemVariants}>
                                <p className={styles.heroSubtitle}>
                                    The Anish Jadhav Memorial Foundation (AJMF) was established in loving
                                    memory of Anish, the beloved son of Brigadier Kishor and Mrs. Neeta Jadhav
                                </p>
                            </MotionDiv>
                        </MotionDiv>

                        <MotionDiv
                            className={styles.heroImageCollage}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <MotionDiv className={styles.imageWrapper1} variants={cardVariants}>
                                <img src={AnishImage} alt="Anish Jadhav" />
                            </MotionDiv>
                            <MotionDiv className={styles.imageWrapper2} variants={cardVariants}>
                                <img src={campusImg1} alt="Foundation Work 1" />
                            </MotionDiv>
                            <MotionDiv className={styles.imageWrapper3} variants={cardVariants}>
                                <img src={campusImg2} alt="Foundation Work 2" />
                            </MotionDiv>
                        </MotionDiv>

                    </div>
                </div>
            </section>

            <div className={styles.container}>
                <VisionAndLegacySection />
            </div>
        </div>
    );
};

export default AboutAnish;