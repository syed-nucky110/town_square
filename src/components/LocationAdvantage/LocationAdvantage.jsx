import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './LocationAdvantage.module.css';

gsap.registerPlugin(ScrollTrigger);

const LocationAdvantage = () => {
    const sectionRef = useRef(null);
    const mapRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Slide-in animations
            gsap.from(mapRef.current, {
                x: -60,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });

            gsap.from(contentRef.current, {
                x: 60,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });

            gsap.from(contentRef.current.querySelectorAll('.feature-item'), {
                y: 20,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const features = [
        { icon: '🛣️', label: 'Direct Highway Access', detail: 'NH-24 connectivity for seamless transit' },
        { icon: '🏫', label: 'Educational Hub', detail: '15+ schools and colleges in 5km radius' },
        { icon: '🏥', label: 'Healthcare Proximity', detail: 'Major hospitals within 3km' },
        { icon: '🏢', label: 'Corporate Zone', detail: 'Surrounded by IT parks and business towers' },
        { icon: '🏘️', label: 'Residential Catchment', detail: '2 lakh+ population in catchment area' },
        { icon: '🚇', label: 'Metro Connectivity', detail: 'Upcoming metro station 1.5km away' }
    ];

    return (
        <section ref={sectionRef} className={styles.location}>
            <div className={styles.container}>
                <div ref={mapRef} className={styles.mapSection}>
                    <div className={styles.mapPlaceholder}>
                        <div className={styles.mapIcon}>
                            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="10" r="3"></circle>
                                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"></path>
                            </svg>
                        </div>
                        <p className={styles.mapLabel}>Interactive Location Map</p>
                    </div>
                </div>

                <div ref={contentRef} className={styles.content}>
                    <span className={styles.label}>Location Advantage</span>
                    <h2 className={styles.title}>
                        At the Heart of <span className={styles.highlight}>Everything</span>
                    </h2>
                    <p className={styles.description}>
                        Strategically positioned at the confluence of residential, commercial, and
                        institutional zones, Town Square offers unmatched accessibility and visibility.
                    </p>

                    <div className={styles.features}>
                        {features.map((feature, index) => (
                            <div key={index} className={`${styles.featureItem} feature-item`}>
                                <div className={styles.featureIcon}>{feature.icon}</div>
                                <div className={styles.featureContent}>
                                    <h4>{feature.label}</h4>
                                    <p>{feature.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationAdvantage;
