import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './Lifestyle.module.css';
import foodImage from '../../assets/images/lifestyle-food.png';

gsap.registerPlugin(ScrollTrigger);

const Lifestyle = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger animation for lifestyle cards
            gsap.from(cardsRef.current.children, {
                y: 50,
                duration: 1,
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

    const categories = [
        {
            title: 'Food & Beverage',
            description: 'Gourmet restaurants, cafés, and quick-service options',
            image: foodImage
        },
        {
            title: 'Fitness & Wellness',
            description: 'Premium gyms, yoga studios, and wellness centers',
            gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)'
        },
        {
            title: 'Retail & Fashion',
            description: 'Leading fashion brands and lifestyle stores',
            gradient: 'linear-gradient(135deg, #9D50BB 0%, #6E48AA 100%)'
        },
        {
            title: 'Social & Entertainment',
            description: 'Multiplex, gaming zones, and social hubs',
            gradient: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)'
        }
    ];

    return (
        <section ref={sectionRef} className={styles.lifestyle}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Lifestyle Experience</span>
                    <h2 className={styles.title}>More Than Just Shopping</h2>
                    <p className={styles.subtitle}>
                        A vibrant ecosystem where dining, fitness, retail, and entertainment converge
                    </p>
                </div>

                <div ref={cardsRef} className={styles.grid}>
                    {categories.map((category, index) => (
                        <div key={index} className={styles.card}>
                            <div
                                className={styles.cardImage}
                                style={{
                                    background: category.image ? 'none' : category.gradient,
                                    backgroundImage: category.image ? `url(${category.image})` : 'none',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className={styles.overlay}></div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{category.title}</h3>
                                <p className={styles.cardDescription}>{category.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Lifestyle;
