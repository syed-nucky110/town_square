import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './InvestmentBenefits.module.css';

gsap.registerPlugin(ScrollTrigger);

const InvestmentBenefits = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade-in animation on scroll
            gsap.from(cardsRef.current.children, {
                y: 40,
                duration: 0.8,
                stagger: 0.15,
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

    const benefits = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
            ),
            title: 'Rental Income',
            percentage: '12-15%',
            description: 'Expected annual rental yield with long-term lease agreements from premium brands'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
            ),
            title: 'Capital Appreciation',
            percentage: '20-25%',
            description: 'Projected property value growth over the next 3-5 years in this high-demand corridor'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
            ),
            title: 'Tax Benefits',
            percentage: 'Multiple',
            description: 'Depreciation, interest deduction, and other commercial property tax advantages'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
            ),
            title: 'Quick Returns',
            percentage: '6-9 mo',
            description: 'Possession timeline with immediate rental opportunities from day one'
        }
    ];

    return (
        <section ref={sectionRef} className={styles.investment}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Investment Benefits</span>
                    <h2 className={styles.title}>Engineered for Maximum Returns</h2>
                    <p className={styles.subtitle}>
                        A commercially structured investment designed to deliver consistent cash flow and long-term wealth creation
                    </p>
                </div>

                <div ref={cardsRef} className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {benefit.icon}
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{benefit.title}</h3>
                                <div className={styles.percentage}>{benefit.percentage}</div>
                                <p className={styles.cardDescription}>{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.disclaimer}>
                    <p>* Returns are indicative and subject to market conditions. Past performance does not guarantee future results.</p>
                </div>
            </div>
        </section>
    );
};

export default InvestmentBenefits;
