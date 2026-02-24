import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Footer Detection to avoid overlap
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            { threshold: 0 } // Trigger as soon as any part of footer is visible
        );

        const footer = document.querySelector('footer');
        if (footer) {
            observer.observe(footer);
        }

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            observer.disconnect();
        };
    }, []);

    const scrollToTop = () => {
        const smoother = ScrollSmoother.get();
        if (smoother) {
            smoother.scrollTo(0, true);
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    // Calculate dynamic bottom position class
    const positionClass = isFooterVisible ? 'bottom-24' : 'bottom-8';

    return (
        <button
            onClick={scrollToTop}
            className={`fixed ${positionClass} right-8 z-50 p-4 bg-primary-gold text-black rounded-full shadow-lg hover:shadow-primary-gold/50 transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    );
};

export default ScrollToTopButton;
