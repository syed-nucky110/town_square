import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import projectImage from '../../assets/images/project-overview.png';

gsap.registerPlugin(ScrollTrigger);

const ProjectOverview = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardsRef.current, {
                y: 50,
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const overviewData = {
        title: "One of Its Kind",
        description: "A commercial destination crafted to become the most happening landmark on the highway.",
        features: [
            {
                title: "Fast Construction",
                subtitle: "Faster Possession",
                desc: "Time is money. Our rapid construction schedule ensures early possession and quicker ROI.",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                ),
                colSpan: "col-span-1 md:col-span-2",
                bg: "bg-primary-dark"
            },
            {
                title: "100% Car Parking",
                subtitle: "Ample Space",
                desc: "Dedicated parking infrastructure handling high volume visitor traffic effortlessly.",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                        <circle cx="7" cy="17" r="2" />
                        <path d="M9 17h6" />
                        <circle cx="17" cy="17" r="2" />
                    </svg>
                ),
                colSpan: "col-span-1",
                bg: "bg-primary-black border border-white/10"
            },
            {
                title: "High Footfall",
                subtitle: "Active Zone",
                desc: "Natural halt-point for daily commuters, students, and families.",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                ),
                colSpan: "col-span-1",
                bg: "bg-primary-black border border-white/10"
            },
            {
                title: "Legacy Oriented",
                subtitle: "Trusted Builder",
                desc: "A project built not just for today, but for decades ahead.",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21h18" />
                        <path d="M5 21v-7" />
                        <path d="M19 21v-7" />
                        <path d="M10 9L3 21" />
                        <path d="M14 9l7 12" />
                        <rect x="9" y="3" width="6" height="6" />
                        <path d="M12 3v18" />
                    </svg>
                ),
                colSpan: "col-span-1 md:col-span-2",
                bg: "bg-primary-gold text-primary-black" // Highlight card
            },
            {
                title: "High ROI",
                subtitle: "Smart Choice",
                desc: "Capital appreciation met with steady rental yields in a high-growth zone.",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                    </svg>
                ),
                colSpan: "col-span-1",
                bg: "bg-primary-black border border-white/10"
            },
            {
                title: "Max Visibility",
                subtitle: "Dual Frontage",
                desc: "Strategic positioning ensuring maximum brand exposure and footfall.",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                ),
                colSpan: "col-span-1",
                bg: "bg-primary-black border border-white/10"
            }
        ]
    };

    return (
        <section ref={sectionRef} className="py-24 bg-primary-black relative z-10">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-primary-gold text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        Project Overview
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Town Square <span className="font-bold">At A Glance</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        {overviewData.description}
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">

                    {/* Hero Card - Image */}
                    <div
                        ref={el => cardsRef.current[0] = el}
                        className="col-span-1 md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group"
                    >
                        <img
                            src={projectImage}
                            alt="Town Square Overview"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold text-white mb-2">{overviewData.title}</h3>
                            <p className="text-white/80 text-sm">Where lifestyle, food, fitness, and retail come together.</p>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    {overviewData.features.map((feature, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index + 1] = el}
                            className={`${feature.colSpan} ${feature.bg} p-8 rounded-2xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className={`text-3xl ${feature.bg.includes('primary-gold') ? 'text-black' : 'text-primary-gold'}`}>
                                    {feature.icon}
                                </div>
                                <span className={`text-xs font-bold uppercase tracking-widest ${feature.bg.includes('primary-gold') ? 'text-black/60' : 'text-white/40'}`}>
                                    {feature.subtitle}
                                </span>
                            </div>

                            <div>
                                <h3 className={`text-xl font-bold mb-3 ${feature.bg.includes('primary-gold') ? 'text-black' : 'text-white'}`}>
                                    {feature.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${feature.bg.includes('primary-gold') ? 'text-black/80' : 'text-white/60'}`}>
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ProjectOverview;
