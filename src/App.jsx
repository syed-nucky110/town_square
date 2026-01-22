import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

// Import components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProjectOverview from './components/ProjectOverview/ProjectOverview';
import Highlights from './components/Highlights/Highlights';
import Brands from './components/Brands/Brands';
import LocationAdvantage from './components/LocationAdvantage/LocationAdvantage';
import InvestmentBenefits from './components/InvestmentBenefits/InvestmentBenefits';
import FeaturedPanels from './components/FeaturedPanels/FeaturedPanels';
import Amenities from './components/Amenities/Amenities';
import Lifestyle from './components/Lifestyle/Lifestyle';
import VisualJourney from './components/VisualJourney/VisualJourney';
import GalleryPreview from './components/GalleryPreview/GalleryPreview';
import LeadForm from './components/LeadForm/LeadForm';
import Footer from './components/Footer/Footer';

// Import styles
import './styles/global.css';
import styles from './App.module.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
    useEffect(() => {
        // Global GSAP configuration for smooth scrolling
        gsap.config({
            nullTargetWarn: false
        });

        // Configure ScrollTrigger defaults
        ScrollTrigger.defaults({
            toggleActions: 'play none none reverse',
            markers: false // Set to true for debugging
        });

        // Optional: Add smooth scrolling behavior
        const smoothScroll = () => {
            const links = document.querySelectorAll('a[href^="#"]');

            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        const offsetTop = targetElement.offsetTop - 100;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        };

        smoothScroll();

        // Refresh ScrollTrigger on window resize
        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.main}>
                <Hero />
                <ProjectOverview />
                <Highlights />
                <Brands />
                <LocationAdvantage />
                <InvestmentBenefits />
                <FeaturedPanels />
                <Amenities />
                <Lifestyle />
                <VisualJourney />
                <GalleryPreview />
                <LeadForm />
            </main>
            <Footer />
        </div>
    );
}

export default App;
