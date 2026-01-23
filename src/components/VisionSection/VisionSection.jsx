import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import heroImage from '../../assets/images/hero-bg.png';
import projectImage from '../../assets/images/project-overview.png';
import lifestyleFood from '../../assets/images/lifestyle-food.png';
import galleryBrands from '../../assets/images/gallery-brands.png';

gsap.registerPlugin(ScrollTrigger);

const VisionSection = () => {
    const sectionRef = useRef(null);
    const rowsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            rowsRef.current.forEach((row, index) => {
                if (!row) return;

                const image = row.querySelector('.vision-image');
                const text = row.querySelector('.vision-text');
                const line = row.querySelector('.vision-line');

                // Parallax Image Effect (Floating)
                gsap.fromTo(image,
                    { y: 100 },
                    {
                        y: -100,
                        ease: "none",
                        scrollTrigger: {
                            trigger: row,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1.5
                        }
                    }
                );

                // Content Reveal
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row,
                        start: "top 70%",
                    }
                });

                tl.from(text, {
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                })
                    .from(line, {
                        scaleX: 0,
                        duration: 1,
                        ease: "power3.inOut",
                        transformOrigin: "left"
                    }, "-=1");

            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const visionData = [
        {
            subtitle: "The Vision",
            title: "Where Commerce Meets Culture",
            description: "A landmark destination on the Ludhiana-Chandigarh Highway, designed to be the region's ultimate social and business hub. We aren't just building shops; we are curating experiences.",
            image: heroImage,
        },
        {
            subtitle: "The Legacy",
            title: "Built for Generations",
            description: "More than just square footage. A project rooted in trust, quality construction, and timeless appeal. Every detail is engineered for lasting value.",
            image: projectImage,
        },
        {
            subtitle: "The Lifestyle",
            title: "Fitness. Food. Fashion. Fun.",
            description: "The highway's exciting 'Natural Halt'. A curated mix of global dining, 24/7 fitness, and premium retail experiences creating a 24-hour ecosystem.",
            image: lifestyleFood,
        },
        {
            subtitle: "The Future",
            title: "A Smart Investment",
            description: "Future-ready infrastructure ensuring high footfall and exceptional ROI. Positioned in a high-growth corridor, your investment grows with the destination.",
            image: galleryBrands,
        }
    ];

    return (
        <section ref={sectionRef} className="py-32 bg-primary-black overflow-hidden" id="vision">
            <div className="max-w-[1400px] mx-auto px-8 flex flex-col gap-32 md:gap-40">
                {visionData.map((item, index) => (
                    <div
                        key={index}
                        ref={el => rowsRef.current[index] = el}
                        className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="vision-image relative overflow-hidden rounded-sm aspect-[4/3] md:aspect-[16/10]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                {/* Luxury Frame */}
                                <div className="absolute inset-4 border border-white/20 pointer-events-none z-10"></div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="vision-text w-full md:w-1/2 text-center md:text-left">
                            <div className="vision-line w-12 h-1 bg-primary-gold mb-8 mx-auto md:mx-0"></div>

                            <span className="block text-primary-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
                                {item.subtitle}
                            </span>

                            <h2 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
                                {item.title}
                            </h2>

                            <p className="text-lg text-text-light font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VisionSection;
