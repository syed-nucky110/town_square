import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Lightbox = ({ images, selectedIndex, onClose, onNext, onPrev, isOpen }) => {

    // Keyboard Navigation & Body Scroll Lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext(e);
            if (e.key === 'ArrowLeft') onPrev(e);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose, onNext, onPrev]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 z-[2000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[2002]"
                onClick={onClose}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>

            {/* Navigation Buttons */}
            <button
                className="absolute left-4 md:left-8 text-white/30 hover:text-primary-gold transition-colors z-[2002] p-4 hover:bg-white/5 rounded-full"
                onClick={onPrev}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>

            <button
                className="absolute right-4 md:right-8 text-white/30 hover:text-primary-gold transition-colors z-[2002] p-4 hover:bg-white/5 rounded-full"
                onClick={onNext}
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
                    style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
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
    );
};

export default Lightbox;
