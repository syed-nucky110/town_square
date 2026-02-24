import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gallery1 from '../../assets/images/gallery/gallery-img-1.jpeg';
import gallery2 from '../../assets/images/gallery/gallery-img-2.jpeg';
import gallery3 from '../../assets/images/gallery/gallery-img-3.jpeg';
import gallery4 from '../../assets/images/gallery/gallery-img-4.jpeg';

gsap.registerPlugin(ScrollTrigger);

const StackedPanels = () => {
    const sectionRef = useRef(null);
    const panelsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const panels = panelsRef.current;

            panels.forEach((panel, index) => {
                if (!panel) return;

                // 1. Pinning Effect (except last panel)
                if (index < panels.length - 1) {
                    ScrollTrigger.create({
                        trigger: panel,
                        start: 'top top',
                        pin: true,
                        pinSpacing: false,
                    });
                }

                // 2. Parallax Background
                const bg = panel.querySelector('.panel-bg');
                if (bg) {
                    gsap.fromTo(bg,
                        { scale: 1, y: 0 },
                        {
                            scale: 1.15,
                            y: 100,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: panel,
                                start: 'top bottom',
                                end: 'bottom top',
                                scrub: true
                            }
                        }
                    );
                }

                // 3. Word-by-Word Text Animation
                // Select all word spans we created in render
                const words = panel.querySelectorAll('.word-span');

                if (words.length > 0) {
                    gsap.from(words, {
                        y: 100,
                        opacity: 0,
                        rotateX: -90,
                        stagger: 0.05,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: panel,
                            start: 'top 60%',
                        }
                    });
                } else {
                    // Fallback for safety
                    gsap.from(panel.querySelector('h2'), {
                        y: 80,
                        opacity: 0,
                        duration: 1.2,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: panel,
                            start: 'top 60%',
                        },
                    });
                }

                // 4. Description Animation
                gsap.from(panel.querySelector('p'), {
                    y: 60,
                    opacity: 0,
                    delay: 0.4, // Increased delay to wait for title
                    duration: 1.2,
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
            title: 'Prime Visibility',
            description: 'Strategically anchored on the Ludhiana-Chandigarh Highway. Maximum visibility and seamless connectivity for high-volume daily traffic.',
            image: gallery1,
            color: 'from-purple-900/20 to-blue-900/20'
        },
        {
            title: 'Student Hub',
            description: 'Just minutes away from Chandigarh University and top institutions. The ultimate hangout spot for students, faculty, and young professionals.',
            image: gallery2,
            color: 'from-blue-900/20 to-cyan-900/20'
        },
        {
            title: 'Curated Lifestyle',
            description: 'Home to global names like Carl\'s Jr, Barista, and Anytime Fitness. A curated ecosystem ensuring consistent demand and premium positioning.',
            image: gallery3,
            color: 'from-cyan-900/20 to-teal-900/20'
        },
        {
            title: 'Investor Ready',
            description: 'RERA Approved with 100% car parking and high ROI potential. A secure asset built not just for today, but for generations ahead.',
            image: gallery4,
            color: 'from-teal-900/20 to-green-900/20'
        }
    ];

    return (
        <section ref={sectionRef} className="relative">
            {panels.map((panel, index) => (
                <div
                    key={index}
                    ref={el => panelsRef.current[index] = el}
                    className="panel relative h-screen flex items-center justify-center overflow-hidden"
                >
                    {/* Background Image with Parallax Class */}
                    <div
                        className="panel-bg absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${panel.image})` }}
                    ></div>

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${panel.color} pointer-events-none`}></div>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
                        <h2 className="text-6xl font-bold text-white mb-6 leading-tight max-lg:text-5xl max-md:text-4xl perspective-1000">
                            {/* Split title into words for animation */}
                            {panel.title.split(' ').map((word, i) => (
                                <span key={i} className="word-span inline-block mr-3 origin-bottom">
                                    {word}
                                </span>
                            ))}
                        </h2>
                        <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto max-md:text-lg">
                            {panel.description}
                        </p>
                    </div>

                    {/* Panel Number Indicator */}
                    <div className="absolute bottom-8 right-8 text-white/30 text-8xl font-bold leading-none max-md:text-6xl">
                        0{index + 1}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default StackedPanels;
