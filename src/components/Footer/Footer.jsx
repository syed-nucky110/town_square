import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './Footer.module.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Subtle fade-in animation
            gsap.from(footerRef.current, {
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            });

        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerTop}>
                    <div className={styles.column}>
                        <h3 className={styles.logo}>TOWN SQUARE</h3>
                        <p className={styles.description}>
                            Premium commercial real estate development offering exceptional investment
                            opportunities in the heart of Noida's thriving business district.
                        </p>
                        <div className={styles.address}>
                            <p><strong>Project Location:</strong></p>
                            <p>Sector 18, Noida Expressway</p>
                            <p>Noida, Uttar Pradesh 201301</p>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Quick Links</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Project</a></li>
                            <li><a href="#brands">Brands & Tenants</a></li>
                            <li><a href="#investment">Investment</a></li>
                            <li><a href="#amenities">Amenities</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Contact Details</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <span className={styles.contactIcon}>📞</span>
                                <div>
                                    <strong>Phone</strong>
                                    <p>+91 98765 43210</p>
                                    <p>+91 98765 43211</p>
                                </div>
                            </li>
                            <li>
                                <span className={styles.contactIcon}>✉️</span>
                                <div>
                                    <strong>Email</strong>
                                    <p>invest@townsquare.com</p>
                                    <p>info@townsquare.com</p>
                                </div>
                            </li>
                            <li>
                                <span className={styles.contactIcon}>🕒</span>
                                <div>
                                    <strong>Office Hours</strong>
                                    <p>Mon - Sat: 10AM - 7PM</p>
                                    <p>Sunday: By Appointment</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerMiddle}>
                    <div className={styles.disclaimer}>
                        <h5>Disclaimer</h5>
                        <p>
                            This website is for informational purposes only and does not constitute an offer or
                            solicitation to sell or buy any property. All details are subject to change without
                            prior notice. Visuals and images are artist's impressions. Please verify all details
                            with our sales team before making any investment decision. RERA Registration: UPRERAPRJ123456.
                        </p>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; 2026 Town Square. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <a href="#privacy">Privacy Policy</a>
                        <span>|</span>
                        <a href="#terms">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
