import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './FeaturedPanels.module.css';
import heroImage from '../../assets/images/hero-bg.png';
import projectImage from '../../assets/images/project-overview.png';
import lifestyleImage from '../../assets/images/lifestyle-food.png';
import galleryImage from '../../assets/images/gallery-brands.png';

gsap.registerPlugin(ScrollTrigger);

const FeaturedPanels = () => {
    const sectionRef = useRef(null);
    const panelsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const panels = panelsRef.current;

            panels.forEach((panel, index) => {
                if (!panel) return;

                // Pin each panel at the top
                ScrollTrigger.create({
                    trigger: panel,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false,
                });

                // Animate heading
                gsap.from(panel.querySelector('h2'), {
                    y: 50,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: panel,
                        start: 'top 60%',
                    },
                });

                // Animate paragraph with delay
                gsap.from(panel.querySelector('p'), {
                    y: 40,
                    delay: 0.15,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: panel,
                        start: 'top 60%',
                    },
                });


            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const panels = [
        {
            title: 'Strategic Investment',
            description: 'Located in the heart of Noida\'s prime commercial corridor, Town Square offers unmatched visibility and accessibility for your business.',
            image: heroImage,
        },
        {
            title: 'Premium Returns',
            description: 'Designed for investors seeking consistent rental income and strong capital appreciation in a thriving commercial ecosystem.',
            image: projectImage,
        },
        {
            title: 'World-Class Infrastructure',
            description: 'State-of-the-art facilities and premium finishes ensure your investment stands the test of time while attracting top-tier tenants.',
            image: lifestyleImage,
        },
        {
            title: 'Brand Ecosystem',
            description: 'Join an elite community of 50+ premium national and international brands, ensuring sustained footfall and business growth.',
            image: galleryImage,
        },
    ];

    return (
        <section ref={sectionRef} className={styles.featuredPanels}>
            {panels.map((panel, index) => (
                <div
                    key={index}
                    className={`${styles.panel} panel`}
                    ref={el => panelsRef.current[index] = el}
                >
                    <div
                        className={styles.panelBackground}
                        style={{ backgroundImage: `url(${panel.image})` }}
                    ></div>
                    <div className={styles.panelOverlay}></div>
                    <div className={styles.panelContent}>
                        <h2 className={styles.panelTitle}>{panel.title}</h2>
                        <p className={styles.panelDescription}>{panel.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default FeaturedPanels;
