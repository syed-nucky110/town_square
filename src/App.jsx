import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

// Import components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BrandTicker from './components/BrandTicker/BrandTicker';
import PropertyGrid from './components/PropertyGrid/PropertyGrid';
import VisionSection from './components/VisionSection/VisionSection';
import StackedPanels from './components/StackedPanels/StackedPanels';
import Highlights from './components/Highlights/Highlights';
import ProjectOverview from './components/ProjectOverview/ProjectOverview';
import LocationAdvantage from './components/LocationAdvantage/LocationAdvantage';
import Amenities from './components/Amenities/Amenities';
import GalleryPreview from './components/GalleryPreview/GalleryPreview';
import LeadForm from './components/LeadForm/LeadForm';
import Footer from './components/Footer/Footer';

// Import styles
import './styles/global.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
    useEffect(() => {
        // Global GSAP configuration
        gsap.config({
            nullTargetWarn: false
        });

        // Configure ScrollTrigger defaults
        ScrollTrigger.defaults({
            toggleActions: 'play none none reverse',
            markers: false
        });

        // Initialize ScrollSmoother for buttery-smooth scrolling
        let smoother;
        try {
            smoother = ScrollSmoother.create({
                smooth: 1.5, // Smoothness level (higher = smoother but slower)
                effects: true,
                smoothTouch: 0.1, // Smooth scrolling on touch devices
            });
        } catch (e) {
            console.log('ScrollSmoother not available, using default scrolling');
        }

        // Smooth scrolling for anchor links
        const smoothScroll = () => {
            const links = document.querySelectorAll('a[href^="#"]');

            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        if (smoother) {
                            smoother.scrollTo(targetElement, true, 'top 100px');
                        } else {
                            const offsetTop = targetElement.offsetTop - 100;
                            window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });
        };

        smoothScroll();

        // Refresh ScrollTrigger on resize
        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            if (smoother) smoother.kill();
        };
    }, []);

    return (
        <>
            {/* Fixed Navigation Header - Completely outside ScrollSmoother wrapper to ensure fixed positioning on mobile */}
            <Header />

            <div id="smooth-wrapper" className="min-h-screen bg-primary-black">
                <div id="smooth-content">
                    <main>
                        {/* Section 1: Hero - Full-screen intro with headline and stats */}
                        <Hero />

                        {/* Brand Ticker - Social Proof */}
                        <BrandTicker />

                        {/* Section 2: Property Grid - 2x2 grid of property types */}
                        <PropertyGrid />

                        {/* Section 3: Vision - Our mission and vision statement */}
                        <VisionSection />

                        {/* Section 4: Stacked Panels - Scroll-pinned feature showcase */}
                        <StackedPanels />

                        {/* Section 5: Investment Highlights - 6 key benefits (id="investment") */}
                        <Highlights />

                        {/* Section 6: Project Overview - About the project (id="about") */}
                        <ProjectOverview />

                        {/* Section 7: Location Advantage - Connectivity and location benefits */}
                        <LocationAdvantage />

                        {/* Section 8: Amenities - 9 premium facilities (id="amenities") */}
                        <Amenities />

                        {/* Section 9: Gallery Preview - Image showcase (id="gallery") */}
                        <GalleryPreview />

                        {/* Section 10: Contact Form - Lead capture form (id="contact") */}
                        <LeadForm />
                    </main>

                    {/* Footer - Links, contact info, and legal */}
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
