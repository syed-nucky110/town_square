import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './ProjectOverview.module.css';
import projectImage from '../../assets/images/project-overview.png';

gsap.registerPlugin(ScrollTrigger);

const ProjectOverview = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade-up animation on scroll
            gsap.from(textRef.current, {
                y: 50,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });

            gsap.from(imageRef.current, {
                x: 60,
                duration: 1.2,
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

    return (
        <section ref={sectionRef} className={styles.overview} id="about">
            <div className={styles.container}>
                <div ref={textRef} className={styles.textContent}>
                    <span className={styles.label}>About the Project</span>
                    <h2 className={styles.title}>
                        Where Commerce Meets <span className={styles.highlight}>Opportunity</span>
                    </h2>
                    <p className={styles.description}>
                        Town Square represents the pinnacle of commercial real estate investment.
                        Strategically positioned in the heart of Noida's fastest-growing business district,
                        this RERA-approved development offers premium retail and office spaces designed
                        for high-growth businesses and savvy investors.
                    </p>
                    <p className={styles.description}>
                        With world-class infrastructure, exceptional connectivity, and a vibrant ecosystem
                        of leading brands, Town Square delivers unmatched value through consistent rental
                        yields and robust capital appreciation.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <h3>500K+</h3>
                            <p>Sq. Ft. Development</p>
                        </div>
                        <div className={styles.stat}>
                            <h3>12-15%</h3>
                            <p>Expected ROI</p>
                        </div>
                        <div className={styles.stat}>
                            <h3>50+</h3>
                            <p>Premium Brands</p>
                        </div>
                    </div>
                </div>

                <div ref={imageRef} className={styles.imageContent}>
                    <img src={projectImage} alt="Town Square Interior" className={styles.projectImage} />
                </div>
            </div>
        </section>
    );
};

export default ProjectOverview;
