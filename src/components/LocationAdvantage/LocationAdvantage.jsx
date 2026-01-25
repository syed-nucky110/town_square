import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LocationAdvantage = () => {
    const sectionRef = useRef(null);
    const rightPanelRef = useRef(null);
    const [activeLocation, setActiveLocation] = useState(0);

    const locations = [
        {
            id: 0,
            name: "Ludhiana-Chandigarh Hwy",
            time: "0 Mins",
            desc: "Direct access on the most iconic and active highway connecting major cities.",
            type: "highway",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-gold">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            id: 1,
            name: "Chandigarh University",
            time: "2 Mins",
            desc: "Walking distance from a major educational hub, ensuring daily student footfall.",
            type: "university",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-gold">
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
            )
        },
        {
            id: 2,
            name: "Top Schools & Colleges",
            time: "5 Mins",
            desc: "Surrounded by premier institutions, making it a natural hangout spot for youth.",
            type: "schools",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-gold">
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" />
                    <path d="M8 6h.01" />
                    <path d="M16 6h.01" />
                    <path d="M8 10h.01" />
                    <path d="M16 10h.01" />
                    <path d="M8 14h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 18h.01" />
                    <path d="M16 18h.01" />
                </svg>
            )
        },
        {
            id: 3,
            name: "The 'Natural Halt'",
            time: "On Route",
            desc: "Ideally positioned as the preferred lifestyle stop for highway commuters.",
            type: "commute",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-gold">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                </svg>
            )
        },
        {
            id: 4,
            name: "Residential Catchment",
            time: "10 Mins",
            desc: "Serving a dense network of families and professionals living nearby.",
            type: "residence",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-gold">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            )
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 1. Pin the Right Panel
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: rightPanelRef.current,
                scrub: 1
            });

            // 2. Highlight List Items & Change Right Panel State
            const items = document.querySelectorAll('.location-item');
            items.forEach((item, i) => {
                ScrollTrigger.create({
                    trigger: item,
                    start: "top center",
                    end: "bottom center",
                    onToggle: (self) => {
                        if (self.isActive) setActiveLocation(i);
                    },
                });
            });

            // 3. Dynamic Background Animation (Simulating Speed)
            gsap.to(".speed-line", {
                x: "100%",
                duration: 2,
                ease: "none",
                repeat: -1,
                stagger: {
                    each: 0.1,
                    from: "random"
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-primary-black relative min-h-screen" id="location">

            <div className="flex flex-col md:flex-row">

                {/* LEFT: Scrollable Content List */}
                <div className="w-full md:w-1/2 p-10 md:p-24 z-10 relative bg-primary-black/90 md:bg-primary-black">
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary-gold mb-4">
                        Strategic Connectivity
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight">
                        A Natural Halt <br /><span className="text-primary-gold">On The Highway</span>
                    </h2>

                    <div className="flex flex-col gap-32 pb-40">
                        {locations.map((loc, i) => (
                            <div key={i} className={`location-item transition-all duration-500 ${activeLocation === i ? 'opacity-100 translate-x-4' : 'opacity-30'}`}>
                                <div className="flex items-center gap-4 mb-2">
                                    <span className={`text-4xl font-bold ${activeLocation === i ? 'text-primary-gold' : 'text-white'}`}>
                                        {loc.time}
                                    </span>
                                    <div className={`h-px bg-white/30 transition-all duration-500 ${activeLocation === i ? 'w-20 bg-primary-gold' : 'w-10'}`}></div>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">{loc.name}</h3>
                                <p className="text-white/60 text-lg max-w-md">{loc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Pinned Visual Panel */}
                <div ref={rightPanelRef} className="hidden md:flex w-1/2 h-screen absolute top-0 right-0 items-center justify-center overflow-hidden bg-primary-dark">

                    {/* Dynamic Abstract Background */}
                    <div className="absolute inset-0 bg-primary-darker">
                        {/* Speed Lines Effect */}
                        {activeLocation !== 1 && activeLocation !== 3 && Array.from({ length: 20 }).map((_, i) => (
                            <div
                                key={i}
                                className="speed-line absolute h-px bg-primary-gold/20"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: '-20%',
                                    width: `${Math.random() * 50 + 10}%`,
                                    opacity: Math.random(),
                                }}
                            ></div>
                        ))}

                        {/* Radial Pulse Effect (for Metro/Hub) */}
                        {(activeLocation === 1 || activeLocation === 3) && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-96 h-96 rounded-full border border-primary-gold/10 animate-ping opacity-20"></div>
                                <div className="w-64 h-64 rounded-full border border-primary-gold/20 animate-pulse"></div>
                                <div className="w-32 h-32 rounded-full bg-primary-gold/5 blur-xl"></div>
                            </div>
                        )}
                    </div>

                    {/* Central Visual Card */}
                    <div className="relative z-10 text-center">
                        <div className="relative w-48 h-48 mx-auto mb-8 rounded-full bg-primary-black/80 backdrop-blur-md border border-primary-gold/30 flex items-center justify-center shadow-[0_0_60px_rgba(201,169,97,0.15)] overflow-hidden">

                            {/* Inner rotating ring */}
                            <div className="absolute inset-2 border border-dashed border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>

                            <div className="text-primary-gold transition-all duration-500 transform scale-100 hover:scale-110">
                                {locations[activeLocation].icon}
                            </div>
                        </div>

                        <h4 className="text-3xl text-white font-bold tracking-widest uppercase mb-2">
                            {locations[activeLocation].type}
                        </h4>
                        <p className="text-primary-gold text-sm tracking-[0.4em] uppercase">Mode of Transit</p>
                    </div>

                    {/* Text Mask Visual */}
                    <h1 className="absolute bottom-0 right-0 text-[15rem] font-black text-white/5 leading-none select-none pointer-events-none translate-y-1/4 translate-x-1/4">
                        0{activeLocation + 1}
                    </h1>

                </div>

            </div>
        </section>
    );
};

export default LocationAdvantage;
