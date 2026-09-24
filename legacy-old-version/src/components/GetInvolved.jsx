import React from 'react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom'; // <--- 1. IMPORT THIS
import { DollarSign, Users, Briefcase, HeartHandshake, Zap } from 'lucide-react'; 

import styles from './GetInvolved.module.css'; 

const MotionDiv = motion.div;
const MotionSection = motion.section;

import FoundationImage from '../assets/campus6.jpg'; 

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

// --- UPDATED ACTION CARD (Used Link instead of a tag) ---
const ActionCard = ({ title, description, buttonText, link }) => (
    <MotionDiv 
        className={styles.actionCard} 
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{ 
            scale: 1.02, 
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' 
        }} 
        viewport={{ once: true, amount: 0.3 }}
    >
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        
        {/* CHANGE: Use Link here */}
        <Link to={link} className={styles.cardButton}>
            {buttonText}
        </Link>
    </MotionDiv>
);

const TimelineItem = ({ title, content, tag, tagColorClass }) => (
    <MotionDiv 
      className={styles.timelineItem} 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} 
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.timelineTagWrapper}>
        <div className={`${styles.timelineTag} ${tagColorClass}`}>{tag}</div>
      </div>
      <div className={styles.timelineContent}> 
        <h3 className={styles.timelineTitle}>{title}</h3> 
        <p className={styles.timelineText}>{content}</p> 
      </div>
    </MotionDiv>
);

const BubbleBackground = () => (
    <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-50">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
        }
        .bubble {
          position: absolute;
          bottom: -150px;
          width: 40px;
          height: 40px;
          background-color: rgba(82, 177, 68, 0.3); 
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


const GetInvolved = () => {
  return (
    <div className={styles.pageContainer}> 
      
      {/* Section 1: Hero */}
      <section 
        className={styles.heroSection} 
        style={{ 
          backgroundImage: `url(${FoundationImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)'
        }}
      >
        <div 
          className={styles.heroOverlay}
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(30, 0, 60, 0.8) 0%, rgba(51, 18, 75, 0.7) 40%, rgba(51, 18, 75, 0.4) 100%)',
            mixBlendMode: 'multiply' 
          }}
        ></div>
        
        <div className={`${styles.container} ${styles.heroContentWrapper}`}>
          <div className={styles.heroGrid} style={{ gridColumn: '1 / -1' }}>
            <MotionDiv 
              className={styles.heroTextContainer}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ gridColumn: '1 / -1' }} 
            >
              <MotionDiv variants={itemVariants} className={styles.heroAccentLine}></MotionDiv>

              <MotionDiv variants={itemVariants}>
                <h1 className={styles.heroHeading}>
                  Be the Change. <span className={styles.heroHeadingSpan}>Get Involved</span> 🤝
                </h1>
              </MotionDiv>
              
              <MotionDiv variants={itemVariants}>
                <p className={styles.heroSubtitle}>
                  Your commitment, whether through time, resources, or expertise, is the driving force behind Anish's legacy.
                </p>
              </MotionDiv>

              <MotionDiv variants={itemVariants} className={styles.heroButtonContainer}> 
                
                {/* CHANGE: Updated href="#donate" to Link to="/donate" */}
                <Link to="/donate" className={`${styles.heroButton} ${styles.heroButtonPrimary}`}>
                  Donate Today
                </Link>
                
                {/* CHANGE: Updated to Link */}
                <Link to="/volunteer" className={`${styles.heroButton} ${styles.heroButtonSecondary}`}>
                  Become a Volunteer
                </Link>

              </MotionDiv>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Content Container */}
      <div className={styles.container}>
      
        <MotionSection 
            className={styles.storySection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <MotionDiv variants={itemVariants} className={styles.textCenter} id="donate-info">
                <h2 className={styles.storyHeading}>Ways You Can Make an Impact</h2>
                <p className={styles.sectionSubtitle}>Every action fuels a dream. Choose the path that speaks to you.</p>
            </MotionDiv>

            <MotionDiv 
                className={styles.actionCardGrid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Ensure link prop starts with / */}
                <ActionCard
                    title="Financial Donation"
                    description="Provide scholarships, fund residential facilities, and cover operational costs."
                    buttonText="Donate Now"
                    link="/donate" 
                />
                <ActionCard
                    title="Volunteer Your Time"
                    description="Mentor students, teach a workshop, or assist with campus logistics."
                    buttonText="Join US"
                    link="/volunteer"
                />
                <ActionCard
                    title="Corporate Partnership"
                    description="Partner with us for CSR activities, placement opportunities, or sponsored programs."
                    buttonText="Partner"
                    link="/contact"
                />
            </MotionDiv>

        </MotionSection>

        {/* Other sections remain exactly the same */}
        <MotionSection className={styles.timelineSection} id="volunteer"  initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className={styles.timelineHeading}>Volunteer Roles: Lend Your Expertise</h2>
            <div className={styles.timelineContainer}>
                <TimelineItem title="Subject Mentor" content="Provide one-on-one or group mentoring..." tag="Education" tagColorClass={styles.tagBlue} />
                <TimelineItem title="Residential Assistant" content="Help manage residential life..." tag="Support" tagColorClass={styles.tagPurple} />
                <TimelineItem title="Project Consultant" content="Offer professional advice..." tag="Strategy" tagColorClass={styles.tagOrange} />
                <TimelineItem title="Career Coach" content="Conduct mock interviews..." tag="Placement" tagColorClass={styles.tagGreen} />
            </div>
        </MotionSection>
        
        <MotionSection className={styles.partnershipSection} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <BubbleBackground />
            <div className={styles.partnershipContent}> 
                <h2 className={styles.partnershipHeading}>Join Hands in Partnership ❤️</h2>
                <p className={styles.partnershipText}>The Anish Jadhav Memorial Foundation thrives on strong collaborations...</p>
                <p className={styles.partnershipText}>We welcome institutions, corporations, and community groups...</p>
                
                {/* Update bottom button too */}
                <Link to="/contact" className={`${styles.heroButton} ${styles.heroButtonPrimary}`} style={{ marginTop: '20px' }}>
                    Discuss Partnership
                </Link>
            </div>
        </MotionSection>

      </div>
    </div>
  );
};

export default GetInvolved;