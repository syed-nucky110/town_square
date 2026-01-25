import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import GalleryPage from './pages/GalleryPage';

// Import styles
import './styles/global.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ScrollToTop Component to handle route changes
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

// Home Component (The original single-page layout)
const Home = () => {
    return (
        <main>
            <Hero />
            <BrandTicker />
            <PropertyGrid />
            <VisionSection />
            <StackedPanels />
            <Highlights />
            <ProjectOverview />
            <LocationAdvantage />
            <Amenities />
            <GalleryPreview />
            <LeadForm />
        </main>
    );
};

function App() {
    useEffect(() => {
        // Global GSAP configuration
        gsap.config({ nullTargetWarn: false });
        ScrollTrigger.defaults({ toggleActions: 'play none none reverse', markers: false });

        // Initialize ScrollSmoother
        let smoother;
        try {
            smoother = ScrollSmoother.create({
                smooth: 1.5,
                effects: true,
                smoothTouch: 0.1,
            });
        } catch (e) {
            console.log('ScrollSmoother not available');
        }

        const handleResize = () => ScrollTrigger.refresh();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            if (smoother) smoother.kill();
        };
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <div id="smooth-wrapper" className="min-h-screen bg-primary-black">
                <Header />
                <div id="smooth-content">
                    <div className="relative z-10 bg-primary-black shadow-2xl">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/gallery" element={<GalleryPage />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
