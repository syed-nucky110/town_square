import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
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
            const element = document.getElementById(targetId);
            if (element) {
                // GSAP ScrollSmoother handling if available globally or manual scroll
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
                <div className="group cursor-pointer relative z-[1002]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img
                        src={logo}
                        alt="Town Square Logo"
                        className="h-12 w-auto object-contain"
                    />
                </div>

                {/* DESKTOP Navigation */}
                <nav className="flex items-center gap-10 max-lg:hidden">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={`#${link}`}
                            onClick={(e) => handleNavigation(link, e)}
                            className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 relative
                                       hover:text-primary-gold text-white/70`}
                        >
                            {link}
                        </a>
                    ))}

                    {/* Desktop CTA */}
                    <button
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

                {/* MOBILE Fullscreen Menu Overlay - Outside Header to escape backdrop-filter trip */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-black z-[1001] flex flex-col items-center justify-start pt-32 gap-6 transition-all duration-500 overflow-y-auto ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={`#${link}`}
                            className="text-xl font-bold uppercase tracking-[0.2em] text-white/80 hover:text-primary-gold transition-colors"
                            onClick={(e) => handleNavigation(link, e)}
                        >
                            {link}
                        </a>
                    ))}
                    <button
                        className="mt-4 mb-10 px-10 py-4 bg-primary-gold text-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-white transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Enquire Now
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
