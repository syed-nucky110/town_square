import React from 'react';
import logo from '../../assets/images/logo/town-square-logo-2.png';

const Footer = () => {
    return (
        <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-8">

                {/* Main Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Column 1: Brand Info */}
                    <div className="space-y-6">
                        <img src={logo} alt="Town Square" className="h-10 w-auto opacity-90" />
                        <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                            A premier destination on the Ludhiana-Chandigarh Highway. Where modern commerce meets community in a thoughtfully designed ecosystem.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {['Home', 'Vision', 'Amenities', 'Gallery', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-primary-gold text-sm transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-6">Resources</h4>
                        <ul className="space-y-4">
                            {['Brochure', 'Floor Plans', 'Investment Guide', 'Press & Media'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-white/60 hover:text-primary-gold text-sm transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-6">Connect</h4>
                        <ul className="space-y-4">
                            <li className="text-white/60 text-sm leading-relaxed">
                                <span className="block text-white mb-1">Sales Office:</span>
                                Ludhiana-Chandigarh Highway,<br />Near Chandigarh University
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
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-xs">
                        &copy; 2026 Town Square. All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/40 hover:text-primary-gold text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white/40 hover:text-primary-gold text-xs transition-colors">Terms of Service</a>
                        <a href="#" className="text-white/40 hover:text-primary-gold text-xs transition-colors">RERA</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
