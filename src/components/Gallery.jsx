import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import styles from './Gallery.module.css';

// Images Import (Apni images use karein)
import img1 from '../assets/img1.jpeg'; 
import img2 from '../assets/AJMF_0324.jpg';
import img3 from '../assets/campus.png';
import img4 from '../assets/Anish2.png'; 
import img5 from '../assets/img5.jpg'; 
import img6 from '../assets/img6.jpg'; 
import img7 from '../assets/img7.jpg'; 
import img8 from '../assets/img8.jpg'; 
import img9 from '../assets/img9.jpg'; 
import img10 from '../assets/img10.jpg'; 
import img11 from '../assets/img11.jpg'; 
import img12 from '../assets/img12.jpg'; 
import img13 from '../assets/img13.jpg'; 
import img14 from '../assets/img14.jpg'; 
import img15 from '../assets/img15.jpg'; 
import img16 from '../assets/img16.jpg'; 
import img17 from '../assets/img17.jpg'; 
import img18 from '../assets/img18.jpg'; 
import img19 from '../assets/img19.jpg'; 
import img20 from '../assets/img20.jpg'; 
import img21 from '../assets/img21.jpg'; 
import img22 from '../assets/img22.jpg'; 
import img23 from '../assets/img23.jpg'; 
import img24 from '../assets/img24.jpg'; 
import img25 from '../assets/img25.jpg'; 
import img26 from '../assets/img26.jpg'; 
import img27 from '../assets/img27.jpg'; 
import img28 from '../assets/img28.jpg'; 
import img29 from '../assets/img29.jpg'; 
import img30 from '../assets/img30.jpg'; 



const galleryData = [
    { id: 1, src: img1, category: 'Campus', size: 'large' }, // Bada
    { id: 2, src: img2, category: 'Events',  size: 'tall' },   // Lamba
    { id: 3, src: img3, category: 'Students', size: 'normal' }, // Chota
    { id: 4, src: img4, category: 'Events',  size: 'normal' },
    { id: 5, src: img5, category: 'Campus',  size: 'wide' },      // Chauda
    { id: 6, src: img6, category: 'Students',  size: 'normal' },
    { id: 7, src: img7, category: 'Academics',  size: 'tall' },
    { id: 8, src: img8, category: 'Events',  size: 'large' },
    { id: 8, src: img9, category: 'Events',  size: 'large' },
    { id: 9, src: img10, category: 'Students',  size: 'normal' },
    { id: 1, src: img11, category: 'Campus', size: 'large' }, // Bada
    { id: 2, src: img12, category: 'Events',  size: 'tall' },   // Lamba
    { id: 3, src: img13, category: 'Students', size: 'normal' }, // Chota
    { id: 4, src: img14, category: 'Events',  size: 'normal' },
    { id: 5, src: img15, category: 'Campus',  size: 'wide' },      // Chauda
    { id: 6, src: img16, category: 'Students',  size: 'normal' },
    { id: 7, src: img17, category: 'Academics',  size: 'tall' },
    { id: 8, src: img18, category: 'Events',  size: 'large' },
    { id: 9, src: img19, category: 'Students',  size: 'normal' },
    { id: 1, src: img20, category: 'Campus', size: 'large' }, // Bada
    { id: 2, src: img21, category: 'Events',  size: 'tall' },   // Lamba
    { id: 3, src: img22, category: 'Students', size: 'normal' }, // Chota
    { id: 4, src: img23, category: 'Events',  size: 'normal' },
    { id: 5, src: img24, category: 'Campus',  size: 'tall' },      // Chauda
    { id: 6, src: img25, category: 'Students',  size: 'normal' },
    { id: 7, src: img26, category: 'Academics',  size: 'tall' },
    { id: 8, src: img27, category: 'Events',  size: 'large' },
    { id: 9, src: img28, category: 'Students',  size: 'normal' },
    { id: 6, src: img29, category: 'Students',  size: 'tall' },
    { id: 7, src: img30, category: 'Academics',  size: 'normal' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className={styles.pageContainer}>
            
            {/* Header */}
            <section className={styles.headerSection}>
                <motion.h1 
                    className={styles.pageTitle}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Gallery
                </motion.h1>
                <motion.p className={styles.pageSubtitle}>
                Honoring our Legacy, Empowering the Future.
                </motion.p>
            </section>

            {/* Masonry Grid */}
            <div className={styles.galleryGrid}>
                {galleryData.map((item, index) => (
                    <motion.div 
                        key={`${item.id}-${item.src}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`${styles.imageCard} ${styles[item.size]}`} // Dynamic Class based on size
                        onClick={() => setSelectedImage(item)}
                    >
                        <div className={styles.imageWrapper}>
                            <img src={item.src} alt={item.title} className={styles.gridImage} />
                            <div className={styles.overlay}>
                                <ZoomIn className={styles.zoomIcon} />
                                <span className={styles.overlayTitle}>{item.title}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal (Same as before) */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        className={styles.lightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div 
                            className={styles.lightboxContent}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
                                <X size={32} />
                            </button>
                            <img src={selectedImage.src} alt={selectedImage.title} className={styles.fullImage} />
                            <h3 className={styles.fullImageTitle}>{selectedImage.title}</h3>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Gallery;