import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './Amenities.module.css';

gsap.registerPlugin(ScrollTrigger);

const Amenities = () => {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger animation for amenity cards
            gsap.from(gridRef.current.children, {
                scale: 0.95,
                duration: 0.6,
                stagger: 0.08,
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

    const amenities = [
        { icon: '🅿️', title: 'Multi-Level Parking', description: 'Ample parking for customers and staff' },
        { icon: '🔒', title: '24/7 Security', description: 'CCTV surveillance and security personnel' },
        { icon: '⚡', title: 'Power Backup', description: '100% power backup for uninterrupted operations' },
        { icon: '🌐', title: 'High-Speed WiFi', description: 'Premium connectivity throughout the complex' },
        { icon: '🏪', title: 'Modern Retail Design', description: 'Contemporary architecture with premium finishes' },
        { icon: '🚻', title: 'Premium Washrooms', description: 'Well-maintained facilities for visitors' },
        { icon: '🍽️', title: 'Food Court', description: 'Diverse dining options for footfall retention' },
        { icon: '🎬', title: 'Entertainment Zone', description: 'Multiplex and gaming zones planned' },
        { icon: '♿', title: 'Universal Access', description: 'Wheelchair-friendly ramps and elevators' }
    ];

    return (
        <section ref={sectionRef} className={styles.amenities} id="amenities">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Amenities & Features</span>
                    <h2 className={styles.title}>World-Class Infrastructure</h2>
                    <p className={styles.subtitle}>
                        Premium facilities designed to enhance customer experience and business performance
                    </p>
                </div>

                <div ref={gridRef} className={styles.grid}>
                    {amenities.map((amenity, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{amenity.icon}</div>
                            <h4 className={styles.cardTitle}>{amenity.title}</h4>
                            <p className={styles.cardDescription}>{amenity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
