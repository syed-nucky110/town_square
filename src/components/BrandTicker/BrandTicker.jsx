import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BrandTicker = () => {
    const sliderRef = useRef(null);
    const triggerRef = useRef(null);

    const brands = [
        "BARISTA",
        "CARL'S JR.",
        "ANYTIME FITNESS",
        "SNEKARS",
        "BASANT",
        "BRAND LOOT",
        "BARISTA",
        "CARL'S JR.",
        "ANYTIME FITNESS",
        "SNEKARS",
        "BASANT",
        "BRAND LOOT"
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const totalWidth = sliderRef.current.scrollWidth;

            // Infinite Scroll Animation
            gsap.to(sliderRef.current, {
                x: "-50%",
                duration: 20,
                ease: "none",
                repeat: -1
            });

            // Fade in on load
            gsap.from(triggerRef.current, {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 1,
                ease: "power2.out"
            });

        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={triggerRef} className="py-12 bg-primary-black border-b border-white/5 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-8 mb-8 text-center">
                <span className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase">
                    Trusted by Iconic Brands
                </span>
            </div>

            {/* Ticker Container */}
            <div className="relative w-full overflow-hidden mask-gradient">
                {/* Gradient Masks for smooth edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-primary-black to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primary-black to-transparent z-10"></div>

                <div ref={sliderRef} className="flex gap-16 md:gap-32 w-max items-center opacity-80 hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
                    {brands.map((brand, index) => (
                        <h3
                            key={index}
                            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/40 font-display uppercase tracking-tighter select-none"
                        >
                            {brand}
                        </h3>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandTicker;
