import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './GalleryPreview.module.css';
import galleryBrands from '../../assets/images/gallery-brands.png';
import galleryAerial from '../../assets/images/gallery-aerial.png';
import projectOverview from '../../assets/images/project-overview.png';
import lifestyleFood from '../../assets/images/lifestyle-food.png';

gsap.registerPlugin(ScrollTrigger);

const GalleryPreview = () => {
    const sectionRef = useRef(null);
    const galleryRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade and scale animation on scroll
            gsap.from(galleryRef.current.children, {
                scale: 0.92,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const images = [
        { type: 'wide', label: 'Grand Entrance', image: galleryAerial },
        { type: 'tall', label: 'Modern Interiors', image: projectOverview },
        { type: 'regular', label: 'Retail Spaces', image: galleryBrands },
        { type: 'regular', label: 'Food Court', image: lifestyleFood },
        { type: 'wide', label: 'Premium Brands', image: galleryBrands },
        { type: 'regular', label: 'Aerial View', image: galleryAerial }
    ];

    return (
        <section ref={sectionRef} className={styles.gallery} id="gallery">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Gallery</span>
                    <h2 className={styles.title}>Visualize Your Investment</h2>
                    <p className={styles.subtitle}>
                        Explore the architecture, spaces, and lifestyle that define Town Square
                    </p>
                </div>

                <div ref={galleryRef} className={styles.masonryGrid}>
                    {images.map((image, index) => (
                        <div key={index} className={`${styles.galleryItem} ${styles[image.type]}`}>
                            <img src={image.image} alt={image.label} className={styles.galleryImage} />
                            <div className={styles.imageOverlay}>
                                <span className={styles.imageLabel}>{image.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaWrapper}>
                    <button className={styles.viewMoreBtn}>View Full Gallery</button>
                </div>
            </div>
        </section>
    );
};

export default GalleryPreview;
