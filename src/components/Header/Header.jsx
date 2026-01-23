import React, { useEffect, useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
                    <span className="text-[10px] text-primary-gold uppercase tracking-[0.3em] block mb-1 opacity-80 group-hover:opacity-100 transition-opacity">
                        The Landmark
                    </span>
                    <h3 className="text-2xl font-light text-white m-0 uppercase tracking-widest group-hover:text-primary-gold transition-colors duration-300">
                        Town <span className="font-bold">Square</span>
                    </h3>
                </div>

                {/* DESKTOP Navigation */}
                <nav className="flex items-center gap-10 max-lg:hidden">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
                            className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/70 transition-all duration-300 relative
                                       hover:text-primary-gold"
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

                {/* MOBILE Fullscreen Menu Overlay */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-black z-[1001] flex flex-col items-center justify-start pt-32 gap-6 transition-all duration-500 overflow-y-auto ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
                            className="text-xl font-bold uppercase tracking-[0.2em] text-white/80 hover:text-primary-gold transition-colors"
                            onClick={() => setIsMenuOpen(false)}
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
