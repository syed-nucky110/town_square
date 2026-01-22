import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';
import heroImage from '../../assets/images/hero-bg.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const headlineRef = useRef(null);
    const subheadingRef = useRef(null);
    const locationRef = useRef(null);
    const ctaGroupRef = useRef(null);
    const backgroundRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background subtle scale and parallax
            gsap.to(backgroundRef.current, {
                scale: 1.1,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5
                }
            });

            // Text reveal animations - staggered entrance
            const tl = gsap.timeline({
                defaults: { ease: 'power2.out' }
            });

            tl.from(headlineRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.4,
                delay: 0.3
            })
                .from(subheadingRef.current, {
                    y: 60,
                    opacity: 0,
                    duration: 1.2
                }, '-=0.8')
                .from(locationRef.current, {
                    y: 40,
                    opacity: 0,
                    duration: 1
                }, '-=0.6')
                .from(ctaGroupRef.current.children, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2
                }, '-=0.5');

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className={styles.hero} id="home">
            <div
                ref={backgroundRef}
                className={styles.heroBackground}
                style={{ backgroundImage: `url(${heroImage})` }}
            ></div>
            <div className={styles.heroOverlay}></div>

            <div className={styles.heroContent}>
                <h1 ref={headlineRef} className={styles.headline}>
                    TOWN SQUARE
                </h1>

                <p ref={subheadingRef} className={styles.subheading}>
                    Premium Commercial Spaces Designed for Success
                </p>

                <div ref={locationRef} className={styles.location}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Prime Location, Sector 18, Noida</span>
                </div>

                <div ref={ctaGroupRef} className={styles.ctaGroup}>
                    <button className={styles.primaryCta}>Schedule Site Visit</button>
                    <button className={styles.secondaryCta}>View Investment Options</button>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>Scroll to explore</span>
                <div className={styles.scrollLine}></div>
            </div>
        </section>
    );
};

export default Hero;
