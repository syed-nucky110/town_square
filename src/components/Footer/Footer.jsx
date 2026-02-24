import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { ExternalLink, Facebook, Instagram, Linkedin, ShieldCheck } from 'lucide-react';
import logo from '../../assets/images/logo/town-square-logo-2.png';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (link, e) => {
        e.preventDefault();

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

    return (
        <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-8">

                {/* Main Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Column 1: Brand Info */}
                    <div className="space-y-6">
                        <img
                            src={logo}
                            alt="Town Square"
                            className="h-10 w-auto opacity-90 cursor-pointer hover:opacity-100 transition-opacity"
                            onClick={(e) => handleNavigation('Home', e)}
                        />
                        <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                            A premier destination on the Chandigarh-Ludhiana Highway. Where modern commerce meets community in a thoughtfully designed ecosystem.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4 pt-2">
                            {[
                                { icon: Facebook, link: '#' },
                                { icon: Instagram, link: 'https://www.instagram.com/townsquaremorinda/' },
                                { icon: Linkedin, link: '#' }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.link}
                                    target={item.link !== '#' ? '_blank' : '_self'}
                                    rel={item.link !== '#' ? 'noopener noreferrer' : ''}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary-gold hover:text-black transition-all duration-300 group"
                                >
                                    <item.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {['Home', 'Vision', 'Amenities', 'Gallery', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()} `}
                                        onClick={(e) => handleNavigation(item, e)}
                                        className="text-white/60 hover:text-primary-gold text-sm transition-colors cursor-pointer"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-6">Connect</h4>
                        <ul className="space-y-4">
                            <li className="text-white/60 text-sm leading-relaxed">
                                <span className="block text-white mb-1">Sales Office:</span>
                                Chandigarh-Ludhiana Highway,<br />near Morinda
                            </li>
                            <li>
                                <a href="tel:+919876543210" className="text-white/60 hover:text-primary-gold text-sm transition-colors block">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@townsquare.com" className="text-white/60 hover:text-primary-gold text-sm transition-colors block">
                                    hello@townsquare.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Regulatory / RERA */}
                    <div>
                        <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-6">Regulatory Info</h4>
                        <div className="space-y-4">
                            <div className="p-6 bg-white/5 rounded border border-white/10 hover:border-primary-gold/30 transition-colors">
                                <div className="flex items-center gap-2 mb-3 text-primary-gold">
                                    <ShieldCheck className="w-5 h-5" />
                                    <span className="text-xs font-bold uppercase tracking-wider">RERA Registered</span>
                                </div>
                                <p className="text-white font-mono text-lg tracking-wide">
                                    PBRERA-RPR70-PC0341
                                </p>
                            </div>
                            <p className="text-white/40 text-xs text-justify leading-relaxed">
                                This project is registered with the Punjab Real Estate Regulatory Authority.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-xs order-2 md:order-1">
                        &copy; 2026 Town Square. All Rights Reserved.
                    </p>

                    {/* Fovea Credit */}
                    <div className="text-white/50 text-xs flex items-center gap-1 order-1 md:order-2">
                        <span className="opacity-75">Designed &amp; Maintained by</span>
                        <a
                            href="https://foveainfotech.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-white hover:text-primary-gold transition-colors flex items-center gap-2 group"
                        >
                            Fovea Infotech
                            <ExternalLink className="w-3 h-3 transform group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
