import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gallery1 from '../../assets/images/gallery/gallery-img-1.jpeg';
import gallery2 from '../../assets/images/gallery/gallery-img-2.jpeg';
import gallery3 from '../../assets/images/gallery/gallery-img-3.jpeg';
import gallery4 from '../../assets/images/gallery/gallery-img-4.jpeg';

gsap.registerPlugin(ScrollTrigger);

const PropertyGrid = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                gsap.from(card, {
                    y: 60,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const properties = [
        {
            image: gallery1,
            title: 'High-Street Retail',
            subtitle: 'Feat. Snekars, Basant & Brand Loot'
        },
        {
            image: gallery2,
            title: 'Global Dining',
            subtitle: 'Anchored by Carl\'s Jr. & Barista'
        },
        {
            image: gallery3,
            title: 'Wellness & Fitness',
            subtitle: 'Powered by Anytime Fitness'
        },
        {
            image: gallery4,
            title: 'Social Hub',
            subtitle: "The Highway's Natural Halt"
        }
    ];

    return (
        <section ref={sectionRef} className="py-section bg-primary-black" id="offerings">
            <div className="max-w-[1400px] mx-auto px-8">

                {/* Standard Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-primary-gold text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        Project Offerings
                    </span>
                    <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
                        Premium Commercial <span className="font-bold">Spaces</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                    {properties.map((property, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg bg-primary-dark cursor-pointer transition-all duration-500
                                       hover:scale-[1.02] hover:shadow-glow"
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <h3 className="text-2xl font-semibold text-white mb-2 m-0">{property.title}</h3>
                                <p className="text-base text-text-muted m-0">{property.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PropertyGrid;
