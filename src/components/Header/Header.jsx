import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Header.module.css';

const Header = () => {
    const headerRef = useRef(null);
    const navRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial fade/slide animation on mount
            gsap.from(headerRef.current, {
                y: -100,
                opacity: 0,
                duration: 1.2,
                ease: 'power2.out'
            });

            gsap.from(navRef.current.children, {
                y: -20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                delay: 0.3,
                ease: 'power2.out'
            });

            gsap.from(ctaRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
                ease: 'power2.out'
            });

            // Scroll-based background change
            let lastScroll = 0;
            const handleScroll = () => {
                const currentScroll = window.pageYOffset;

                if (currentScroll > 100) {
                    headerRef.current.classList.add(styles.scrolled);
                } else {
                    headerRef.current.classList.remove(styles.scrolled);
                }

                lastScroll = currentScroll;
            };

            window.addEventListener('scroll', handleScroll);

            return () => window.removeEventListener('scroll', handleScroll);
        }, headerRef);

        return () => ctx.revert();
    }, []);

    const navLinks = [
        'Home',
        'About',
        'Brands',
        'Investment',
        'Amenities',
        'Gallery',
        'Contact'
    ];

    return (
        <header ref={headerRef} className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h3>TOWN SQUARE</h3>
                </div>

                <nav ref={navRef} className={styles.nav}>
                    {navLinks.map((link, index) => (
                        <a key={index} href={`#${link.toLowerCase()}`} className={styles.navLink}>
                            {link}
                        </a>
                    ))}
                </nav>

                <button ref={ctaRef} className={styles.ctaButton}>
                    Enquire Now
                </button>
            </div>
        </header>
    );
};

export default Header;
