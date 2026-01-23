import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Parallax effect
            gsap.fromTo(titleRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 0.1, // Subtle, barely there
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: 1
                    }
                }
            );

            // Staggered Fade Up for columns
            gsap.from('.footer-col', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 85%"
                }
            });

        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="bg-primary-black relative pt-24 pb-12 overflow-hidden border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-8 relative z-10">

                {/* Top Row: Brand & Links */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">

                    {/* Brand Column */}
                    <div className="md:col-span-4 footer-col">
                        <span className="text-primary-gold text-xs font-bold tracking-[0.3em] uppercase block mb-6">
                            The Landmark
                        </span>
                        <h2 className="text-3xl font-light text-white mb-6">Town Square</h2>
                        <p className="text-white/60 leading-relaxed max-w-sm">
                            A one-of-a-kind commercial destination on the Ludhiana–Chandigarh Highway. Where commerce meets culture in a powerful ecosystem.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div className="md:col-span-2 md:col-start-7 footer-col">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Explore</h4>
                        <ul className="flex flex-col gap-4">
                            {['Home', 'Vision', 'Amenities', 'Gallery'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-primary-gold transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="md:col-span-2 footer-col">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Legal</h4>
                        <ul className="flex flex-col gap-4">
                            {['RERA Info', 'Disclaimer', 'Privacy Policy', 'Terms'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-white/60 hover:text-primary-gold transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="md:col-span-2 footer-col">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Visit Us</h4>
                        <address className="not-italic text-white/60 text-sm leading-relaxed flex flex-col gap-4">
                            <p>Ludhiana–Chandigarh Highway,<br />Near Chandigarh University</p>
                            <a href="mailto:sales@townsquare.com" className="hover:text-primary-gold transition-colors">sales@townsquare.com</a>
                            <a href="tel:+919876543210" className="hover:text-primary-gold transition-colors">+91 98765 43210</a>
                        </address>
                    </div>
                </div>

                {/* Bottom Row: Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/5 footer-col">
                    <p className="text-white/40 text-xs uppercase tracking-widest">
                        &copy; 2026 Town Square. All Rights Reserved.
                    </p>
                    <p className="text-white/40 text-xs uppercase tracking-widest mt-4 md:mt-0">
                        Designed for Excellence
                    </p>
                </div>

            </div>

            {/* Massive Background Title */}
            <div className="absolute -bottom-4 left-0 w-full pointer-events-none overflow-hidden select-none flex justify-center">
                <h1 ref={titleRef} className="text-[15vw] leading-none font-bold text-white whitespace-nowrap opacity-[0.03]">
                    TOWN SQUARE
                </h1>
            </div>
        </footer>
    );
};

export default Footer;
