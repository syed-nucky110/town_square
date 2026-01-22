import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './Highlights.module.css';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const titleRef = useRef(null);
    const floatingRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            //Title reveal with split animation
            gsap.from(titleRef.current, {
                y: 60,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                }
            });

            // Floating background elements
            gsap.to(floatingRef.current, {
                y: -50,
                rotation: 5,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5
                }
            });

            // Advanced card animations with SCRUB
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                // Parallax effect - different speeds for each card
                const speed = 1 + (index % 3) * 0.5;
                gsap.to(card, {
                    y: -40 * speed,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 2
                    }
                });

                // Reveal animation with rotation and scale
                gsap.fromTo(card,
                    {
                        scale: 0.8,
                        rotateY: -20,
                        rotateX: 10,
                    },
                    {
                        scale: 1,
                        rotateY: 0,
                        rotateX: 0,
                        duration: 1.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            end: 'top 50%',
                            scrub: 1,
                        }
                    }
                );

                // Magnetic hover effect
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    gsap.to(card, {
                        x: x * 0.1,
                        y: y * 0.1,
                        rotation: (x * 0.02),
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        x: 0,
                        y: 0,
                        rotation: 0,
                        duration: 0.5,
                        ease: 'elastic.out(1, 0.5)'
                    });
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const highlights = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
            ),
            title: 'RERA Approved',
            description: 'Fully compliant and registered project ensuring transparency and investor protection',
            number: '01'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </svg>
            ),
            title: 'Prime Location',
            description: 'Strategic positioning on main highway with excellent connectivity and high visibility',
            number: '02'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: 'High Footfall',
            description: 'Premium catchment area with daily footfall from surrounding residential and commercial zones',
            number: '03'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            ),
            title: 'ROI Focused',
            description: 'Structured for optimal returns with projected 12-15% annual rental yield',
            number: '04'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
            ),
            title: 'Flexible Spaces',
            description: 'Customizable retail and office units ranging from 200 sq.ft. to 5000 sq.ft.',
            number: '05'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
            ),
            title: 'Growth Corridor',
            description: 'Located in one of North India\'s fastest appreciating commercial micro-markets',
            number: '06'
        }
    ];

    return (
        <section ref={sectionRef} className={styles.highlights} id="investment">
            <div ref={floatingRef} className={styles.floatingBackground}></div>

            <div className={styles.container}>
                <div ref={titleRef} className={styles.header}>
                    <span className={styles.label}>Investment Highlights</span>
                    <h2 className={styles.title}>Why Town Square is Your<br /><span className={styles.goldText}>Best Investment</span></h2>
                    <p className={styles.subtitle}>Six compelling reasons to invest in Noida's most premium commercial destination</p>
                </div>

                <div className={styles.grid}>
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${index % 2 === 0 ? styles.cardLarge : ''}`}
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className={styles.cardNumber}>{item.number}</div>
                            <div className={styles.cardGlow}></div>
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDescription}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
