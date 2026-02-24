import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LeadForm = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current.children, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
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
        <section ref={sectionRef} className="bg-primary-black py-24 md:py-32 relative overflow-hidden" id="contact">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-dark/30 skew-x-12 transform origin-top pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div ref={contentRef} className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden border border-white/5">

                    {/* Left Side: Contact Info */}
                    <div className="w-full lg:w-5/12 bg-primary-dark p-12 flex flex-col justify-between relative overflow-hidden">
                        {/* Decorative Circle */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-gold/5 rounded-full blur-3xl"></div>

                        <div>
                            <span className="text-primary-gold text-xs font-bold tracking-[0.3em] uppercase block mb-6">
                                Contact Us
                            </span>
                            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
                                Let's Discuss <br />
                                <span className="font-bold">Your Investment</span>
                            </h2>
                            <p className="text-white/60 leading-relaxed mb-12">
                                Connect with our expert advisors to explore site plans, pricing details, and available inventory.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded bg-white/5 text-primary-gold group-hover:bg-primary-gold group-hover:text-black transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 10-8 10s-8-4-8-10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Site Office</h4>
                                    <p className="text-white/60 text-sm">Chandigarh-Ludhiana Highway,<br />near Morinda</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded bg-white/5 text-primary-gold group-hover:bg-primary-gold group-hover:text-black transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Call Us</h4>
                                    <p className="text-white/60 text-sm hover:text-primary-gold cursor-pointer transition-colors">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded bg-white/5 text-primary-gold group-hover:bg-primary-gold group-hover:text-black transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Email</h4>
                                    <p className="text-white/60 text-sm hover:text-primary-gold cursor-pointer transition-colors">invest@townsquare.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-7/12 bg-[#0a0a0a] p-12 flex flex-col justify-center">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="text-xs text-primary-gold/50 uppercase tracking-widest mb-2 block group-focus-within:text-primary-gold transition-colors">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary-gold transition-colors"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="group">
                                    <label className="text-xs text-primary-gold/50 uppercase tracking-widest mb-2 block group-focus-within:text-primary-gold transition-colors">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary-gold transition-colors"
                                        placeholder="+91 90000..."
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="text-xs text-primary-gold/50 uppercase tracking-widest mb-2 block group-focus-within:text-primary-gold transition-colors">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary-gold transition-colors"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div className="group">
                                <label className="text-xs text-primary-gold/50 uppercase tracking-widest mb-2 block group-focus-within:text-primary-gold transition-colors">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/20 focus:outline-none focus:border-primary-gold transition-colors resize-none"
                                    placeholder="I am interested in..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-4 px-10 py-4 bg-primary-gold text-black text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-fit self-start"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LeadForm;
