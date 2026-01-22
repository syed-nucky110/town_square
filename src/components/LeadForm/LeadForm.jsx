import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './LeadForm.module.css';

gsap.registerPlugin(ScrollTrigger);

const LeadForm = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade-up animation on scroll
            gsap.from(formRef.current, {
                y: 50,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your interest! Our team will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section ref={sectionRef} className={styles.leadForm} id="contact">
            <div className={styles.container}>
                <div ref={formRef} className={styles.formWrapper}>
                    <div className={styles.formHeader}>
                        <span className={styles.label}>Get in Touch</span>
                        <h2 className={styles.title}>Schedule Your Site Visit</h2>
                        <p className={styles.subtitle}>
                            Connect with our investment advisors to explore opportunities tailored to your goals
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    required
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message (Optional)"
                                rows="4"
                                className={styles.textarea}
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Schedule Site Visit
                        </button>

                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>📞</span>
                                <span>+91 98765 43210</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.icon}>✉️</span>
                                <span>invest@townsquare.com</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LeadForm;
