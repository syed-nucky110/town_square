import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FileCheck, TrendingUp, MapPin, ShoppingBag, Rocket } from 'lucide-react';
import projectImage from '../../assets/images/project-overview.png';
import galleryBrands from '../../assets/images/gallery-brands.png';
import lifestyleFood from '../../assets/images/lifestyle-food.png';
import galleryAerial from '../../assets/images/gallery-aerial.png';
import heroImage from '../../assets/images/hero-bg.png';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;

            // Get Scroll Amount dynamically
            const getScrollAmount = () => {
                let containerWidth = container.scrollWidth;
                return -(containerWidth - window.innerWidth);
            };

            const tween = gsap.to(container, {
                x: getScrollAmount,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: () => `+=${Math.abs(getScrollAmount())}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1
                }
            });

            // Parallax Images
            const images = document.querySelectorAll('.card-image');
            images.forEach(img => {
                gsap.fromTo(img,
                    { x: -50 },
                    {
                        x: 50,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top top',
                            end: () => `+=${Math.abs(getScrollAmount())}`,
                            scrub: 1,
                            invalidateOnRefresh: true
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const highlights = [
        {
            number: '01',
            title: 'RERA Approved',
            subtitle: '100% Compliant Asset',
            description: 'Fully registered project ensuring complete transparency and investor protection.',
            image: projectImage,
            icon: <FileCheck className="w-6 h-6 text-primary-gold" />
        },
        {
            number: '02',
            title: 'Guaranteed Rentals',
            subtitle: 'Consistent Monthly Income',
            description: 'Secure your future with pre-leased units offering steady and reliable returns.',
            image: galleryBrands,
            icon: <TrendingUp className="w-6 h-6 text-primary-gold" />
        },
        {
            number: '03',
            title: 'Strategic Location',
            subtitle: 'Chandigarh-Ludhiana Hwy',
            description: 'Unmatched visibility on the iconic highway, minutes from Chandigarh University.',
            image: galleryAerial,
            icon: <MapPin className="w-6 h-6 text-primary-gold" />
        },
        {
            number: '04',
            title: 'Iconic Brands',
            subtitle: 'Barista, Carl\'s Jr, Snekars',
            description: 'Anchored by top national and lifestyle brands ensuring constant buzz and demand.',
            image: lifestyleFood,
            icon: <ShoppingBag className="w-6 h-6 text-primary-gold" />
        },
        {
            number: '05',
            title: 'Capital Growth',
            subtitle: 'High Appreciation',
            description: 'Located in a rapidly developing zone, ensuring significant asset value growth over time.',
            image: heroImage,
            icon: <Rocket className="w-6 h-6 text-primary-gold" />
        }
    ];

    return (
        <section ref={sectionRef} className="h-screen bg-primary-black overflow-hidden relative" id="investment">

            {/* Horizontal Container */}
            <div
                ref={containerRef}
                className="flex h-full items-center pl-10 md:pl-20 gap-8 md:gap-16"
            >
                {/* 1. The Title Section (Now inside the flow) */}
                <div className="min-w-[300px] md:min-w-[400px] flex-shrink-0 pr-8 px-6">
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary-gold mb-4">
                        Investment Highlights
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        Why Invest in <br /><span className="text-primary-gold">Town Square?</span>
                    </h2>
                    <p className="text-white/60 mb-8 max-w-sm text-lg">
                        Discover the strategic advantages that make this project the smartest addition to your portfolio.
                    </p>

                </div>

                {/* 2. The Cards */}
                {highlights.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-[80vw] md:w-[30vw] min-w-[300px] h-[55vh] md:h-[65vh] flex-shrink-0 group perspective-500"
                    >
                        {/* The Card */}
                        <div className="w-full h-full relative overflow-hidden rounded-md border border-white/10 bg-primary-dark transition-all duration-500 hover:border-primary-gold hover:-translate-y-4 shadow-2xl">

                            {/* Image Container with Parallax */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div
                                    className="card-image absolute inset-[-20%] w-[140%] h-[140%] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                                <div className="flex justify-between items-start">
                                    <span className="text-5xl md:text-6xl font-black text-white/10 select-none font-display">
                                        {item.number}
                                    </span>
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-gold/20 backdrop-blur-md flex items-center justify-center text-xl md:text-2xl border border-primary-gold/30">
                                        {item.icon}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-primary-gold text-xs md:text-sm font-bold uppercase tracking-widest mb-2">
                                        {item.subtitle}
                                    </p>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed font-light text-sm md:text-base">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

                {/* End spacer */}
                <div className="w-[10vw]"></div>
            </div>

            {/* Progress Bar/Decoration at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                <div className="h-full bg-primary-gold origin-left scale-x-0 w-full scroll-progress-bar"></div>
            </div>
        </section>
    );
};

export default Highlights;
