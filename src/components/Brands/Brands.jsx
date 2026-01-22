import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './Brands.module.css';

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation with scrub
            gsap.from(titleRef.current, {
                y: 50,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });

            // Advanced card animations
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                // Slide up and rotate
                gsap.fromTo(card,
                    {
                        y: 100,
                        rotateY: -15,
                        scale: 0.9,
                    },
                    {
                        y: 0,
                        rotateY: 0,
                        scale: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            end: 'top 50%',
                            scrub: 1.5,
                        }
                    }
                );

                // Parallax on scroll
                gsap.to(card, {
                    y: -30,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 2
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const brands = [
        {
            name: 'Starbucks',
            category: 'Food & Beverage',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
            )
        },
        {
            name: 'Lifestyle',
            category: 'Fashion Retail',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
            )
        },
        {
            name: 'Reliance Digital',
            category: 'Electronics',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            )
        },
        {
            name: 'Lenskart',
            category: 'Eyewear',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="6" cy="15" r="4" />
                    <circle cx="18" cy="15" r="4" />
                    <path d="M6 11h4m4 0h4" />
                    <path d="M10 15l2-2 2 2" />
                </svg>
            )
        },
        {
            name: 'PVR Cinemas',
            category: 'Entertainment',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                    <circle cx="12" cy="12" r="10" />
                </svg>
            )
        },
        {
            name: 'Pantaloons',
            category: 'Fashion',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
            )
        },
        {
            name: 'McDonald\'s',
            category: 'Quick Service',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 2c-1.9 0-3.5 1.3-4 3-0.5-1.7-2.1-3-4-3C6.3 2 4 4.3 4 7c0 3.9 6 11 8 13 2-2 8-9.1 8-13C20 4.3 17.7 2 15 2z" />
                </svg>
            )
        },
        {
            name: 'Titan',
            category: 'Accessories',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="7" />
                    <polyline points="12 9 12 12 13.5 13.5" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="M4.93 4.93l1.41 1.41" />
                    <path d="M17.66 17.66l1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                </svg>
            )
        },
    ];

    return (
        <section ref={sectionRef} className={styles.brands} id="brands">
            <div className={styles.container}>
                <div ref={titleRef} className={styles.header}>
                    <span className={styles.label}>Premium Brand Partners</span>
                    <h2 className={styles.title}>Join an Elite Ecosystem</h2>
                    <p className={styles.subtitle}>
                        Partner with 50+ established national and international brands in a thriving commercial hub
                    </p>
                </div>

                <div className={styles.cardsGrid}>
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className={styles.brandCard}
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className={styles.iconWrapper}>
                                {brand.icon}
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.brandName}>{brand.name}</h3>
                                <p className={styles.brandCategory}>{brand.category}</p>
                            </div>
                            <div className={styles.cardShine}></div>
                        </div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <p>And many more prestigious retail, dining, and entertainment brands</p>
                </div>
            </div>
        </section>
    );
};

export default Brands;
