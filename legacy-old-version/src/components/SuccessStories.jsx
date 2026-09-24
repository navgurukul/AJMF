import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  FaGraduationCap, FaBriefcase, FaStar, FaTrophy,
  FaHeart, FaRocket, FaUsers, FaBookOpen
} from 'react-icons/fa';
import { ArrowRight, Quote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './SuccessStories.module.css';
import { trackSectionView } from '../utils/analytics';
import { usePageAnalytics, useScrollAnalytics } from '../utils/analyticsHooks';

// Import some images for success stories
import successImg1 from '../assets/Micansee.jpeg';
import successImg2 from '../assets/Shreya.jpeg';
import successImg3 from '../assets/Khushi.jpeg';
import successImg4 from '../assets/Muskan.jpeg';
import successImg5 from '../assets/Shreya1.jpeg';

const MotionDiv = motion.div;
const MotionSection = motion.section;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Bubble Animation Component (same as Campus page)
const BubbleBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-50">
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

// Counting Stats Component
const CountingStats = ({ target, text }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  let numericTarget = 0;
  let suffix = '';

  if (target.includes('+')) {
    const baseNumber = target.replace('+', '');
    if (baseNumber.includes('K')) {
      numericTarget = parseInt(baseNumber.replace('K', '')) * 1000;
      suffix = '+';
    } else {
      numericTarget = parseInt(baseNumber);
      suffix = '+';
    }
  } else if (target.includes('%')) {
    numericTarget = parseInt(target);
    suffix = '%';
  } else {
    numericTarget = parseInt(target) || 0;
    suffix = '';
  }

  useEffect(() => {
    if (isInView && numericTarget > 0) {
      controls.start({
        opacity: 1,
        transition: { duration: 1.5, ease: "easeOut" }
      });

      const duration = 2000;
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentCount = Math.floor(numericTarget * progress);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }, [isInView, numericTarget, controls]);

  return (
    <div ref={ref} className={styles.statBox}>
      <motion.div
        className={styles.statNumber}
        animate={controls}
        initial={{ opacity: 0 }}
      >
        {target.includes('K+') ? `${Math.floor(count / 1000)}K${suffix}` : `${count}${suffix}`}
      </motion.div>
      <div className={styles.statText}>{text}</div>
    </div>
  );
};

// Success Story Card Component
const SuccessStoryCard = ({ story, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <MotionDiv
      className={styles.storyCard}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(18, 75, 51, 0.15)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Story Image Section */}
      <div className={styles.storyImageSection}>
        <img src={story.image} alt={story.name} className={styles.storyImage} />
        <div className={styles.storyImageOverlay}>
          <FaGraduationCap size={28} className={styles.overlayIcon} />
        </div>
        <div className={styles.storyBadge}>
          <span>{story.year}</span>
        </div>
      </div>

      {/* Story Content Section */}
      <div className={styles.storyContentSection}>
        <div className={styles.storyHeader}>
          <div className={styles.categoryBadge}>{story.category}</div>
          <h3 className={styles.storyTitle}>{story.title}</h3>
          <div className={styles.storyMeta}>
            <span className={styles.storyName}>{story.name}</span>
            <span className={styles.storyProgram}>{story.program}</span>
          </div>
        </div>

        <div className={styles.storyContent}>
          <p className={isExpanded ? styles.expandedContent : styles.truncatedContent}>
            {story.content}
          </p>
        </div>

        <div className={styles.storyFooter}>
          <motion.button
            className={styles.learnMoreBtn}
            onClick={toggleExpanded}
            whileHover={{ backgroundColor: "#124b33" }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
            <ArrowRight
              size={16}
              style={{
                transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            />
          </motion.button>
        </div>
      </div>
    </MotionDiv>
  );
};

// Main Component
const SuccessStories = () => {
  const navigate = useNavigate();

  // Use analytics hooks
  usePageAnalytics('Success Stories');
  useScrollAnalytics();

  // Sample success stories data
  const successStories = [
      {
      id: 1,
      name: "Shreya Verma",
      title: "From Shy to Leading 100+ Students",
      category: "Leadership Story",
      program: "School of Programming",
      year: "2022-2024",
      image: successImg5,
      content: "My name is Shreya Verma and I joined NavGurukul in October 2022 after completing my 12th grade at the age of 18. At that time, I had no coding background and wasn't confident speaking with others. Over time, NavGurukul helped me grow both technically and personally. I was selected as the Culture Coordinator, where I had the opportunity to lead and manage a group of 100+ girls. I interacted with everyone, organized cultural activities, and helped create a positive environment on campus. This experience played a major role in building my confidence and strengthening my leadership skills. In September 2024, I secured a job, which was a significant milestone in my journey. I returned home with valuable experience, skills, and confidence that I didn't have when I first started."
    },
    {
      id: 2,
      name: "Shreya Kirola",
      title: "Village Girl to Software Developer",
      category: "Success Story",
      program: "School of Programming",
      year: "2024",
      image: successImg2,
      content: "My name is Shreya Kirola, and I come from Uttarakhand. My journey with Navgurukul began when I heard about it from my cousin, who studied there and built a successful career. Her achievements inspired me deeply, and with the hope of transforming my own future, I decided to join Navgurukul.At Navgurukul, I became a part of the School of Programming, where I got the opportunity to learn different programming languages and build a strong technical foundation. But Navgurukul was not just about coding — it equally focused on personality development, communication, and essential life skills. These experiences helped me grow not only as a learner but also as a confident individual.With continuous support, guidance, and a nurturing environment, I was able to crack my placement interview successfully. Today, I am proud to be working at House of Travellers, starting a new and exciting chapter of my professional journey.I am truly grateful to Navgurukul for empowering me with the skills, confidence, and opportunities that helped change my life."
    },
    {
      id: 3,
      name: "Micansee Thakur",
      title: "Health Coordinator to College Job Success",
      category: "Knowledge Hub",
      program: "School of Programming",
      year: "2022-2025",
      image: successImg1,
      content: "My name is Micansee Thakur, and I come from a middle-class background. I joined NavGurukul at 16 after 10th grade, with no coding knowledge or communication skills. Encouraged by a family acquaintance, I began my journey on 7th October 2022. NavGurukul transformed my life—I gained technical skills, improved my communication, and learned teamwork and responsibility. I served as a Health Coordinator and held four council positions, which boosted my confidence and leadership. The campus was student-driven and supportive, and I made lifelong friends. I took a break for my 12th board exams, during which I lost my father—a deeply painful time. I returned on 30th April 2024 with renewed determination. While many of my peers were placed, I kept striving. On 29th January 2025, I received a job offer from SIRT College, Bhopal, with a salary of ₹20,000–₹25,000/month, and began my career the next day. NavGurukul made me confident, independent, and ready to achieve my dreams. I'm truly grateful for everything it has given me."
    },
    {
      id: 4,
      name: "Khushi Rawat",
      title: "From Job Rejections to Frappe Success",
      category: "Career Growth",
      program: "School of Programming",
      year: "2020-2022",
      image: successImg3,
      content: "In 2022, after completing her graduation, she stood at a difficult crossroads. Pursuing a master’s degree was financially challenging, and despite taking a gap year to find a job, she faced constant rejections. During this tough time, her father introduced her to NavGurukul. Unsure but hopeful, she decided to take a chance and joined on 8th March 2023, the day everyone was celebrating Holi.Her initial days were full of emotions, doubt, and loneliness. Seeing others struggle for years made her question her decision, but she chose to stay focused. She pushed herself, studied late nights, and worked hard to improve—learning one of the most important lessons on the way: patience.Within four months, she reached Module 5 and became job-ready. But when NetWest visited for hiring, she wasn’t allowed to participate because she hadn’t completed the mandatory six months. It was heartbreaking, but she didn’t give up.After completing six months, she finally got an opportunity with Frappe. She worked sincerely on the project, submitted her test, and waited. During that time, she even received another offer, but her heart was set on Frappe.And then, on 4th January, the call came—Frappe wanted to interview her. She travelled to Mumbai for the first time, completed her interview, enjoyed her first chass, and eventually heard the life-changing words: She was selected.Sitting alone afterward, she reflected on her journey—from rejection and uncertainty to hope and achievement. She realized that everything happens at the right time for a reason. Frappe didn’t just give her a job; they gave her confidence and a new beginning.Today, she is grateful—for the opportunities, for the people who believed in her, and for the journey that transformed her life."
    },
    {
      id: 5,
      name: "Muskan Thakur",
      title: "Zero Tech Skills to Dream Career",
      category: "Student Testimonial",
      program: "School of Business",
      year: "2024",
      image: successImg4,
      content: "My name is Muskan Thakur, and I come from a humble middle-class background. I joined NavGurukul after completing my graduation, with very limited exposure to computers or communication skills. With the support of my family and the belief that I could build a better future, I began my journey with determination. NavGurukul completely transformed me — I learned technical skills, improved my communication, and developed confidence, teamwork, and leadership qualities. I took responsibility in various campus activities, which helped me grow personally and professionally. During my learning journey, I faced many challenges, but the campus environment, mentors, and peers always supported me. I learned to stay strong, focused, and hopeful even in tough situations. With consistent practice and guidance, I kept improving every day. Finally, my hard work paid off when I secured a placement opportunity that opened doors to a new life. Today, I am proud to say that I am independent, confident, and ready to achieve bigger dreams. NavGurukul has given me more than an education — it has given me a new identity, lifelong friends, and the courage to build the future I always dreamed of. I am truly grateful for everything it has given me."
    },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Banner Section */}
      <MotionSection
        className={styles.section}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        onViewportEnter={() => trackSectionView('Success Stories Banner', 'Success Stories')}
      >
        <div className={styles.banner}>
          <BubbleBackground />
          <div className={styles.container}>
            <MotionDiv variants={fadeInUp}>
              <h1 className={styles.bannerTitle}>Success Stories</h1>
              <p className={styles.bannerText}>
                Meet our graduates who have transformed their lives through education and determination.
                Their journeys inspire us and show the real impact of our programs.
              </p>
            </MotionDiv>

            <div className={styles.statsGrid}>
              {[
                { count: "200+", text: "Lives Transformed" },
                { count: "85%", text: "Employment Rate" },
                { count: "25K+", text: "Average Salary" }
              ].map((stat, index) => (
                <MotionDiv
                  key={index}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.statBoxContainer}
                >
                  <CountingStats target={stat.count} text={stat.text} />
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Stories Section */}
      <MotionSection
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.container}>
          <MotionDiv variants={fadeInUp} className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Inspiring Journeys</h2>
            <p className={styles.sectionSubtitle}>
              Read about the incredible transformations of our students and graduates
            </p>
          </MotionDiv>

          <div className={styles.storiesContainer}>
            {successStories.map((story, index) => (
              <SuccessStoryCard
                key={story.id}
                story={story}
                index={index}
              />
            ))}
          </div>

          {/* Call to Action */}
          <MotionDiv
            variants={fadeInUp}
            className={styles.ctaSection}
          >
            <h3 className={styles.ctaTitle}>Ready to Start Your Success Story?</h3>
            <p className={styles.ctaText}>
              Join thousands of students who have transformed their lives through our programs.
            </p>
            <div className={styles.ctaButtons}>
              <motion.button
                className={styles.ctaPrimary}
                onClick={() => navigate('/programs')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Programs
              </motion.button>
              <motion.button
                className={styles.ctaSecondary}
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </div>
          </MotionDiv>
        </div>
      </MotionSection>
    </div>
  );
};

export default SuccessStories;