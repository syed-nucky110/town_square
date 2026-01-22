import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './VisualJourney.module.css';
import heroImage from '../../assets/images/hero-bg.png';
import projectImage from '../../assets/images/project-overview.png';
import lifestyleImage from '../../assets/images/lifestyle-food.png';
import galleryImage from '../../assets/images/gallery-brands.png';

gsap.registerPlugin(ScrollTrigger);

const VisualJourney = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const imagesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate title
            gsap.from(titleRef.current, {
                y: 50,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });

            // Advanced SCRUB animations for each image
            imagesRef.current.forEach((imageSection, index) => {
                if (!imageSection) return;

                // Timeline for coordinated animations with SCRUB
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: imageSection,
                        start: 'top 90%',
                        end: 'top 20%',
                        scrub: 1.5,
                        // markers: true, // Enable for debugging
                    }
                });

                // Clip path reveal from bottom
                tl.fromTo(imageSection,
                    {
                        clipPath: 'inset(100% 0% 0% 0%)',
                    },
                    {
                        clipPath: 'inset(0% 0% 0% 0%)',
                        ease: 'none'
                    }
                );

                // Zoom effect - image scales down as it reveals
                gsap.fromTo(imageSection.querySelector('img'),
                    { scale: 1.4 },
                    {
                        scale: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: imageSection,
                            start: 'top 90%',
                            end: 'top 20%',
                            scrub: 2
                        }
                    }
                );

                // Parallax - image moves up slower than scroll
                gsap.to(imageSection.querySelector('img'), {
                    y: -100,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: imageSection,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 3
                    }
                });

                // Overlay fade in
                gsap.fromTo(imageSection.querySelector(`.${styles.overlay}`),
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: imageSection,
                            start: 'top 60%',
                            end: 'top 30%',
                            scrub: 1
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const images = [
        {
            src: heroImage,
            title: 'Architectural Excellence',
            description: 'Modern design meets timeless elegance'
        },
        {
            src: projectImage,
            title: 'Premium Interiors',
            description: 'Thoughtfully crafted spaces for success'
        },
        {
            src: lifestyleImage,
            title: 'Lifestyle Amenities',
            description: 'World-class facilities at your doorstep'
        },
        {
            src: galleryImage,
            title: 'Brand Ecosystem',
            description: 'Surrounded by excellence'
        }
    ];

    return (
        <section ref={sectionRef} className={styles.journey}>
            <div className={styles.container}>
                <div ref={titleRef} className={styles.header}>
                    <span className={styles.label}>Visual Journey</span>
                    <h2 className={styles.title}>
                        Experience <span className={styles.highlight}>Town Square</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Scroll through our visual story of luxury, design, and investment excellence
                    </p>
                </div>

                <div className={styles.imagesWrapper}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={styles.imageSection}
                            ref={el => imagesRef.current[index] = el}
                        >
                            <div className={styles.imageContainer}>
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <h3 className={styles.imageTitle}>{image.title}</h3>
                                    <p className={styles.imageDescription}>{image.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisualJourney;
