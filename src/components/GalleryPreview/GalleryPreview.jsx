import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import galleryBrands from '../../assets/images/gallery-brands.png';
import galleryAerial from '../../assets/images/gallery-aerial.png';
import projectOverview from '../../assets/images/project-overview.png';
import lifestyleFood from '../../assets/images/lifestyle-food.png';
import heroImage from '../../assets/images/hero-bg.png';

gsap.registerPlugin(ScrollTrigger);

const GalleryPreview = () => {
    const sectionRef = useRef(null);
    const galleryRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade and scale animation on scroll
            gsap.from(galleryRef.current.children, {
                scale: 0.92,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const images = [
        { type: 'wide', label: 'Grand Entrance', image: galleryAerial },
        { type: 'tall', label: 'Modern Interiors', image: projectOverview },
        { type: 'regular', label: 'Retail High Street', image: galleryBrands },
        { type: 'regular', label: 'Gourmet Dining', image: lifestyleFood },
        { type: 'wide', label: 'Premium Brands', image: galleryBrands },
        { type: 'tall', label: 'Night View', image: galleryAerial },
        // New Images to fill space
        { type: 'regular', label: 'Kids Zone', image: lifestyleFood },
        { type: 'regular', label: 'Ample Parking', image: projectOverview },
        { type: 'wide', label: 'Social Hub', image: heroImage },
        { type: 'regular', label: 'Lobby Area', image: galleryBrands }
    ];

    return (
        <section ref={sectionRef} className="py-section bg-primary-black" id="gallery">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary-gold mb-4">
                        Gallery
                    </span>
                    <h2 className="text-h2 font-semibold text-white leading-[1.2] mb-4 m-0">
                        Visualize Your Investment
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto m-0">
                        Explore the architecture, spaces, and lifestyle that define Aurum Estate
                    </p>
                </div>

                <div ref={galleryRef} className="grid grid-cols-4 gap-4 auto-rows-[250px] mb-12 max-lg:grid-cols-3 max-md:grid-cols-2 grid-flow-dense">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-lg cursor-pointer
                                       ${image.type === 'wide' ? 'col-span-2' : ''}
                                       ${image.type === 'tall' ? 'row-span-2' : ''}
                                       transition-transform duration-300 hover:scale-105 hover:z-10`}
                        >
                            <img
                                src={image.image}
                                alt={image.label}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                                          opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                                <span className="absolute bottom-4 left-4 text-white font-medium text-lg">
                                    {image.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="px-10 py-4 bg-primary-gold text-white text-base font-medium rounded border-none
                                     cursor-pointer transition-all duration-300
                                     hover:bg-[#b89850] hover:-translate-y-0.5">
                        View Full Gallery
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GalleryPreview;
