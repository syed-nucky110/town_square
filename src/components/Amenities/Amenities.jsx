import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gallery1 from '../../assets/images/gallery/gallery-img-1.jpeg';
import gallery2 from '../../assets/images/gallery/gallery-img-2.jpeg';
import gallery3 from '../../assets/images/gallery/gallery-img-3.jpeg';
import gallery4 from '../../assets/images/gallery/gallery-img-4.jpeg';
import gallery5 from '../../assets/images/gallery/gallery-img-5.jpeg';

gsap.registerPlugin(ScrollTrigger);

const Amenities = () => {
    const [activeindex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);
    const rightPanelRef = useRef(null);
    const listRef = useRef(null);

    const amenitiesData = [
        {
            id: '01',
            title: "Multi-Level Parking",
            desc: "Dedicated 100% car parking infrastructure handling high volume visitor traffic effortlessly.",
            image: gallery1, // Updated image
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
            )
        },
        {
            id: '02',
            title: "Top-Tier Security",
            desc: "24/7 CCTV surveillance and professional security personnel ensuring a safe environment.",
            image: gallery2,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            )
        },
        {
            id: '03',
            title: "Grand Frontage",
            desc: "Double-height shops designed for maximum brand visibility and premium retail experience.",
            image: gallery3,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21v-7" /><path d="M19 21v-7" /><path d="M10 9L3 21" /><path d="M14 9l7 12" /><rect x="9" y="3" width="6" height="6" /><path d="M12 3v18" /></svg>
            )
        },
        {
            id: '04',
            title: "Lifestyle Hub",
            desc: "A curated mix of food courts, entertainment zones, and fine dining for family leisure.",
            image: gallery4,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
            )
        },
        {
            id: '05',
            title: "Smart Infrastructure",
            desc: "Fiber-optic connectivity and 100% power backup for uninterrupted business operations.",
            image: gallery5,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            )
        }
    ];

    useEffect(() => {
        // Animate content change
        gsap.fromTo(rightPanelRef.current,
            { opacity: 0.8, scale: 1.02 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
        );
    }, [activeindex]);

    return (
        <section ref={sectionRef} className="py-24 bg-primary-black overflow-hidden" id="amenities">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="mb-16 md:mb-24">
                    <span className="text-primary-gold text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        World-Class Facilities
                    </span>
                    <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
                        Designed for <span className="text-white font-bold">Excellence</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left: Interactive List */}
                    <div ref={listRef} className="w-full lg:w-1/3 flex flex-col gap-2">
                        {amenitiesData.map((item, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`group cursor-pointer p-6 border-l-2 transition-all duration-300 ${activeindex === index
                                        ? 'border-primary-gold bg-white/5'
                                        : 'border-white/10 hover:border-white/30 hover:bg-white/[0.02]'
                                    }`}
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <span className={`text-sm font-bold tracking-widest ${activeindex === index ? 'text-primary-gold' : 'text-white/40 group-hover:text-white/60'
                                        }`}>
                                        {item.id}
                                    </span>
                                    <h3 className={`text-xl font-medium ${activeindex === index ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                                        }`}>
                                        {item.title}
                                    </h3>
                                </div>
                                {/* Mobile/Tablet Description (Available here as fallback or active) */}
                                <div className={`overflow-hidden transition-all duration-300 ${activeindex === index ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                    }`}>
                                    <p className="text-white/60 text-sm leading-relaxed pl-10">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Dynamic Visual Window (Hidden on mobile if preferred, or stacked) */}
                    <div className="hidden lg:block w-full lg:w-2/3 relative h-[600px] rounded-sm overflow-hidden">
                        <div ref={rightPanelRef} className="w-full h-full relative">
                            <img
                                src={amenitiesData[activeindex].image}
                                alt={amenitiesData[activeindex].title}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-transparent to-transparent opacity-80"></div>

                            {/* Large Content Overlay */}
                            <div className="absolute bottom-0 left-0 p-12 w-full max-w-2xl">
                                <div className="text-primary-gold mb-4 scale-150 origin-bottom-left inline-block">
                                    {amenitiesData[activeindex].icon}
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-4">
                                    {amenitiesData[activeindex].title}
                                </h3>
                                <p className="text-xl text-white/80 leading-relaxed">
                                    {amenitiesData[activeindex].desc}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Amenities;
