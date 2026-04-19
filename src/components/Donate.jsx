import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import { 
  Landmark, Copy, Check, 
  ShieldCheck 
} from 'lucide-react';
import styles from './Donate.module.css'; 

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Donate = () => {
  const [activeTab, setActiveTab] = useState('bank'); 
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const donationAmounts = [
    { amount: "₹100", label: "Supporter" },
    { amount: "₹500", label: "Friend" },
    { amount: "₹1,000", label: "Patron" },
    { amount: "₹2,500", label: "Guardian" },
    { amount: "₹5,000", label: "Hero" },
    { amount: "₹10,000", label: "Champion" },
  ];

  return (
    <div className={styles.pageContainer}>
      
      {/* --- NEW HERO SECTION (No Image, Just Gradient & Text) --- */}
      <section className={styles.heroSection}>
        
        {/* Abstract Blurred Text Background */}
        <div className={styles.heroBackgroundText}>
           <span>GIVING</span>
           <span>HOPE</span>
        </div>

        <div className={styles.heroContent}>
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className={styles.heroTitle}
          >
            Empower a Future. <br /><span className={styles.goldText}>Donate Today.</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp}
            className={styles.heroSubtitle}
          >
            Your contribution, no matter the size, directly supports the education and well-being of underprivileged students.
          </motion.p>
        </div>
      </section>

      {/* --- Main Content Grid --- */}
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          {/* LEFT COLUMN: Information */}
          <motion.div 
            className={styles.infoColumn}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.impactBadge}>
              <ShieldCheck size={20} />
              <span>Tax Benefits Available</span>
            </div>
            
            <h2 className={styles.sectionHeading}>Make a Direct Impact</h2>
            <p className={styles.text}>
              We believe in transparency. Since we are a non-profit organization, we utilize direct bank transfers and UPI to ensure 100% of your donation reaches the cause without platform fees.
            </p>

            <div className={styles.taxNoteBox}>
              <h4 className={styles.taxTitle}>80G Tax Exemption</h4>
              <p className={styles.taxText}>
                Any amount donated to NavGurukul / AJMF is eligible for tax exemption under Section 80G of the Income Tax Act. 
                <br/><br/>
                <strong>Note:</strong> After making a donation, please email the transaction details to 
                <span className={styles.emailHighlight}> jadhav_kl@yahoo.co.in</span> to receive your tax receipt.
              </p>
            </div>

            <h3 className={styles.subHeading}>Suggested Contributions</h3>
            <div className={styles.amountGrid}>
              {donationAmounts.map((item, index) => (
                <div key={index} className={styles.amountCard}>
                  <div className={styles.amountValue}>{item.amount}</div>
                  <div className={styles.amountLabel}>{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Payment Card */}
          <motion.div 
            className={styles.paymentColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.donationCard}>
              <div className={styles.cardHeader}>
                <h3>Payment Details</h3>
                <p>Choose your preferred method</p>
              </div>

              {/* Tabs */}
              <div className={styles.tabs}>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'bank' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('bank')}
                >
                  <Landmark size={18} /> Bank Transfer
                </button>
              </div>

              {/* TAB CONTENT: BANK */}
              {activeTab === 'bank' && (
                <div className={styles.tabContent}>
                  <div className={styles.detailRow}>
                    <label>Account Name</label>
                    <div className={styles.copyWrapper}>
                      <span>Anish Jadhav Memorial Foundation</span>
                      <button onClick={() => handleCopy("NavGurukul Foundation for Social Welfare", "name")}>
                        {copiedField === "name" ? <Check size={16} color="green"/> : <Copy size={16}/>}
                      </button>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <label>Account Number</label>
                    <div className={styles.copyWrapper}>
                      <span>02520110052655</span>
                      <button onClick={() => handleCopy("123456789012", "acc")}>
                        {copiedField === "acc" ? <Check size={16} color="green"/> : <Copy size={16}/>}
                      </button>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <label>IFSC Code</label>
                    <div className={styles.copyWrapper}>
                      <span>UCBA0000252</span>
                      <button onClick={() => handleCopy("HDFC0001234", "ifsc")}>
                        {copiedField === "ifsc" ? <Check size={16} color="green"/> : <Copy size={16}/>}
                      </button>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <label>Bank Name</label>
                    <div className={styles.staticValue}>UCO Bank
Branch :Yerwada, Pune, Maharashtra</div>
                  </div>
                </div>
              )}


            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Donate;