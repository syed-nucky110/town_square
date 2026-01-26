import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import ScrollSmoother from 'gsap/ScrollSmoother';
import logo from '../../assets/images/logo/town-square-logo-2.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (link, e) => {
        e.preventDefault();
        setIsMenuOpen(false); // Close mobile menu

        if (link === 'Home') {
            if (location.pathname !== '/') {
                navigate('/');
                window.scrollTo(0, 0);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return;
        }

        // Handle Anchor Links
        const targetId = link.toLowerCase();
        if (location.pathname !== '/') {
            navigate('/', { state: { targetId } });
        } else {
            // GSAP ScrollSmoother handling
            const smoother = ScrollSmoother.get();
            const element = document.getElementById(targetId);

            if (smoother && element) {
                smoother.scrollTo(element, true, "top top+=100");
            } else if (element) {
                const offsetTop = element.offsetTop - 100;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        }
    };

    // Effect to handle hash scrolling after navigation
    useEffect(() => {
        if (location.state && location.state.targetId) {
            const targetId = location.state.targetId;
            // Delay slightly to allow dom render
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    const offsetTop = element.offsetTop - 100;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }, 500);
            // Clear state
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    // Scroll Detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        'Home',
        'Offerings',
        'Vision',
        'Investment',
        'Location',
        'Amenities',
        'Gallery',
        'Contact'
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 border-b ${isScrolled || isMenuOpen
                ? 'bg-black/90 backdrop-blur-md border-white/10 py-4'
                : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
                {/* Logo Section */}
                <div className="group cursor-pointer relative z-[1002]" onClick={(e) => handleNavigation('Home', e)}>
                    <img
                        src={logo}
                        alt="Town Square Logo"
                        className="h-12 w-auto object-contain"
                    />
                </div>

                {/* DESKTOP Navigation */}
                <nav className="flex items-center gap-8 lg:gap-10 max-lg:hidden">
                    {/* Main Links */}
                    {['Home', 'Offerings', 'Vision', 'Gallery', 'Contact'].map((link, index) => (
                        <a
                            key={index}
                            href={`#${link.toLowerCase()}`}
                            onClick={(e) => handleNavigation(link, e)}
                            className="text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 relative hover:text-primary-gold text-white/70"
                        >
                            {link}
                        </a>
                    ))}

                    {/* "More" Dropdown */}
                    <div className="relative group">
                        <button className="text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 relative hover:text-primary-gold text-white/70 flex items-center gap-1">
                            More <span className="text-[8px] transition-transform group-hover:rotate-180">▼</span>
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="bg-[#0a0a0a] border border-white/10 backdrop-blur-md p-4 min-w-[180px] flex flex-col gap-2 rounded-sm shadow-xl">
                                {['Investment', 'Location', 'Amenities'].map((link, index) => (
                                    <a
                                        key={index}
                                        href={`#${link.toLowerCase()}`}
                                        onClick={(e) => handleNavigation(link, e)}
                                        className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60 hover:text-primary-gold hover:pl-2 transition-all duration-300 block py-2 border-b border-white/5 last:border-none"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop CTA */}
                    <button
                        onClick={(e) => handleNavigation('Contact', e)}
                        className="px-8 py-3 bg-white/5 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] 
                                transition-all duration-300 hover:bg-primary-gold hover:border-primary-gold hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    >
                        Enquire
                    </button>
                </nav>

                {/* MOBILE Hamburger Button */}
                <button
                    className="lg:hidden text-white z-[1002] p-2 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className={`w-8 h-0.5 bg-white mb-2 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5 bg-primary-gold' : ''}`}></div>
                    <div className={`w-8 h-0.5 bg-white mb-2 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5 bg-primary-gold' : ''}`}></div>
                </button>

                {/* MOBILE Fullscreen Menu Overlay - Keeping all links flat for mobile UX */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-black z-[1001] flex flex-col items-center justify-start pt-32 gap-6 transition-all duration-500 overflow-y-auto ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                    {[
                        'Home', 'Offerings', 'Vision', 'Gallery', 'Contact', // Main
                        'Investment', 'Location', 'Amenities' // More
                    ].map((link, index) => (
                        <a
                            key={index}
                            href={`#${link.toLowerCase()}`}
                            className="text-xl font-bold uppercase tracking-[0.2em] text-white/80 hover:text-primary-gold transition-colors"
                            onClick={(e) => handleNavigation(link, e)}
                        >
                            {link}
                        </a>
                    ))}
                    <button
                        className="mt-4 mb-10 px-10 py-4 bg-primary-gold text-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-white transition-colors"
                        onClick={(e) => handleNavigation('Contact', e)}
                    >
                        Enquire Now
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
