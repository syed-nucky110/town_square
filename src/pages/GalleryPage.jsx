import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { galleryImages } from '../data/galleryData';
import Lightbox from '../components/Ui/Lightbox';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const GalleryPage = () => {
    const galleryRef = useRef(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // FORCE SCROLL TO TOP ON MOUNT
    useLayoutEffect(() => {
        // 1. Native Reset
        window.scrollTo(0, 0);

        // 2. GSAP Smoother Reset
        // We delay slightly to ensure the smoother check happens after global init
        const t = setTimeout(() => {
            const smoother = ScrollSmoother.get();
            if (smoother) {
                smoother.scrollTop(0);
                // Kill old triggers to prevent jumpiness
                ScrollTrigger.refresh();
            }
        }, 10);

        return () => clearTimeout(t);
    }, []);

    // Lightbox Logic
    const openLightbox = (index) => setSelectedImageIndex(index);
    const closeLightbox = () => setSelectedImageIndex(null);
    const showNext = (e) => {
        if (e) e.stopPropagation();
        setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
    };
    const showPrev = (e) => {
        if (e) e.stopPropagation();
        setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.stacking-card');

            cards.forEach((card, index) => {
                const inner = card.querySelector('.inner-card');

                // Radius & Width Expansion on Entry
                gsap.fromTo(inner,
                    {
                        width: '60vw',
                        height: '60vh',
                        borderRadius: '40px',
                        filter: 'brightness(0.5)'
                    },
                    {
                        width: '100vw',
                        height: '100vh',
                        borderRadius: '0px',
                        filter: 'brightness(1)',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top bottom', // Start when top of card hits bottom of viewport
                            end: 'top top',     // End when top of card hits top of viewport
                            scrub: true,
                        }
                    }
                );
            });

        }, galleryRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-primary-black min-h-screen">
            <div ref={galleryRef} className="w-full">

                {/* Header Overlay (Initial) */}
                <div className="h-[80vh] flex items-center justify-center sticky top-0 bg-primary-black z-0 pointer-events-none">
                    <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-700 px-4">
                        <span className="text-primary-gold text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                            The Collection
                        </span>
                        <h1 className="text-5xl md:text-8xl font-light text-white mb-6">
                            Radius <span className="font-serif italic text-primary-gold">Experience</span>
                        </h1>
                        <p className="text-white/60 max-w-xl mx-auto text-lg font-light leading-relaxed">
                            Where architecture expands to fill your vision.
                        </p>
                    </div>
                </div>

                {/* Stacking Radius Cards */}
                <div className="relative z-10 -mt-[10vh]">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="stacking-card sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
                            onClick={() => openLightbox(index)}
                        >
                            <div className="inner-card relative w-[60vw] h-[60vh] bg-black overflow-hidden shadow-2xl cursor-pointer">
                                <img
                                    src={image.image}
                                    alt={image.label}
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-105"
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                                    <span className="text-primary-gold text-xs font-bold tracking-[0.2em] uppercase mb-2">
                                        {image.category}
                                    </span>
                                    <h2 className="text-5xl font-light text-white mb-2">
                                        {image.label}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <Lightbox
                images={galleryImages}
                selectedIndex={selectedImageIndex}
                isOpen={selectedImageIndex !== null}
                onClose={closeLightbox}
                onNext={showNext}
                onPrev={showPrev}
            />
        </div>
    );
};

export default GalleryPage;
