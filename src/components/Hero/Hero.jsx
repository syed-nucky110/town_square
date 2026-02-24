import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroBackground from '../../assets/images/gallery/gallery-img-1.jpeg';

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // Animate main content stagger (slow, cinematic rise)
            tl.from(contentRef.current.children, {
                y: 80,
                opacity: 0,
                duration: 1.8,
                stagger: 0.3,
                clearProps: "all"
            }, 0.5);

            // Animate scroll indicator (infinite fade)
            gsap.to(".scroll-indicator", {
                y: 10,
                opacity: 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Slow Cinematic Zoom */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 transform scale-110 motion-safe:animate-[subtleZoom_20s_infinite_alternate]"
                style={{ backgroundImage: `url(${heroBackground})` }}
            ></div>

            {/* Deep Atmosphere Overlay */}
            <div className="absolute inset-0 bg-black/40 z-[1]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-[1]"></div>

            <div className="relative z-[2] w-full h-full flex flex-col justify-center items-center px-4">

                {/* Main Content Area - Ultra Minimal */}
                <div ref={contentRef} className="flex flex-col items-center justify-center text-center">

                    {/* Location Badge - Small & Elegant */}
                    <div className="mb-8 opacity-90">
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-primary-gold">
                            Ludhiana - Chandigarh Highway
                        </span>
                    </div>

                    {/* Main Headline - Massive & Dominant */}
                    <h1 className="text-[clamp(4rem,12vw,10rem)] font-light text-white leading-[0.9] tracking-tight mb-6 drop-shadow-2xl mix-blend-overlay opacity-95">
                        TOWN <span className="font-bold">SQUARE</span>
                    </h1>

                    {/* Tagline - The Promise */}
                    <p className="text-lg md:text-2xl text-white/90 font-light tracking-widest uppercase mb-16">
                        Where Commerce Meets Culture
                    </p>

                    {/* Minimal CTA - Single Interaction */}
                    <a
                        href="#location"
                        className="group flex flex-col items-center gap-2 no-underline opacity-80 hover:opacity-100 transition-opacity"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white">Explore</span>
                        <div className="scroll-indicator w-px h-12 bg-gradient-to-b from-primary-gold to-transparent"></div>
                    </a>

                </div>

            </div>
        </section >
    );
};

export default Hero;
