import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gallery1 from '../../assets/images/gallery/gallery-img-1.jpeg';
import gallery2 from '../../assets/images/gallery/gallery-img-2.jpeg';
import gallery3 from '../../assets/images/gallery/gallery-img-3.jpeg';
import gallery4 from '../../assets/images/gallery/gallery-img-4.jpeg';
import gallery5 from '../../assets/images/gallery/gallery-img-5.jpeg';

gsap.registerPlugin(ScrollTrigger);

const GalleryPreview = () => {
    const sectionRef = useRef(null);
    const galleryRef = useRef(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const navigate = useNavigate();

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
        // Row 1: Two Wide Images
        { type: 'wide', label: 'Grand Facade', image: gallery1 },
        { type: 'wide', label: 'Night Ambiance', image: gallery4 },

        // Row 2: Regular - Wide - Regular
        { type: 'regular', label: 'Street View', image: gallery2 },
        { type: 'wide', label: 'Retail Zoning', image: gallery3 },
        { type: 'regular', label: 'Premium Brands', image: gallery5 }
    ];

    // Lightbox Logic
    const openLightbox = (index) => setSelectedImageIndex(index);
    const closeLightbox = () => setSelectedImageIndex(null);

    const showNext = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev + 1) % images.length);
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Keyboard Navigation & Body Scroll Lock
    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.style.overflow = 'hidden'; // Lock scroll
        } else {
            document.body.style.overflow = ''; // Unlock scroll
        }

        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext(e);
            if (e.key === 'ArrowLeft') showPrev(e);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = ''; // Cleanup scroll lock
        };
    }, [selectedImageIndex]);

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

                <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-12">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => openLightbox(index)}
                            className={`group relative overflow-hidden rounded-lg cursor-pointer h-[300px]
                                       ${index < 2 ? 'md:col-span-3' : 'md:col-span-2'}
                                       transition-transform duration-300 hover:scale-[1.02]`}
                        >
                            <img
                                src={image.image}
                                alt={image.label}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                    <button
                        onClick={() => {
                            navigate('/gallery');
                            window.scrollTo(0, 0);
                        }}
                        className="px-10 py-4 bg-primary-gold text-white text-base font-medium rounded border-none
                                     cursor-pointer transition-all duration-300
                                     hover:bg-[#b89850] hover:-translate-y-0.5"
                    >
                        View Full Gallery
                    </button>
                </div>
            </div>

            {/* LIGHTBOX OVERLAY via PORTAL */}
            {selectedImageIndex !== null && ReactDOM.createPortal(
                <div
                    className="fixed inset-0 z-[2000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[2002]"
                        onClick={closeLightbox}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-4 md:left-8 text-white/30 hover:text-primary-gold transition-colors z-[2002] p-4 hover:bg-white/5 rounded-full"
                        onClick={showPrev}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>

                    <button
                        className="absolute right-4 md:right-8 text-white/30 hover:text-primary-gold transition-colors z-[2002] p-4 hover:bg-white/5 rounded-full"
                        onClick={showNext}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>

                    {/* Main Image Container (Carousel Window) */}
                    <div
                        className="relative w-[95vw] md:w-[85vw] h-[70vh] md:h-[85vh] bg-black rounded shadow-2xl border border-white/10 overflow-hidden"
                        onClick={(e) => e.stopPropagation()} // Prevent close on click inside
                    >
                        {/* Sliding Track */}
                        <div
                            className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                            style={{ transform: `translateX(-${selectedImageIndex * 100}%)` }}
                        >
                            {images.map((img, i) => (
                                <div key={i} className="min-w-full h-full relative flex items-center justify-center bg-black">
                                    <img
                                        src={img.image}
                                        alt={img.label}
                                        className="max-h-full max-w-full object-contain block"
                                    />
                                    {/* Caption Per Slide */}
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-16 text-center md:text-left">
                                        <h3 className="text-white text-2xl font-light tracking-wide">{img.label}</h3>
                                        <span className="text-primary-gold text-xs font-bold tracking-[0.2em] uppercase">
                                            Image {i + 1} of {images.length}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default GalleryPreview;
