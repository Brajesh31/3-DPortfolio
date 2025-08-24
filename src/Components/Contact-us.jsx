import emailjs from '@emailjs/browser';
// UPDATED FONT AWESOME IMPORTS
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";

import CustomButton from "../Components/CustomButton";

export default function ContactUs() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { ref, inView } = useInView({ triggerOnce: true });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        // UPDATED WITH YOUR EMAILJS PUBLIC KEY
        emailjs.init("Udl5iGWEv35i-ZtfU");
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.overflow = "auto";
        document.documentElement.style.height = "100%";
        document.body.style.height = "100%";
        document.body.style.minHeight = "100vh";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // UPDATED WITH YOUR EMAILJS DETAILS
            const serviceID = 'service_1n85l74';
            const templateID = 'template_s2gdt4j';

            // Prepare template parameters
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'bk117134@gmail.com', // Your receiving email
                reply_to: formData.email
            };

            // Send email using EmailJS
            await emailjs.send(
                serviceID,
                templateID,
                templateParams
            );

            setSubmitStatus('success');

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            // UPDATED WITH YOUR NAME FOR AUTOREPLY
            const autoReplyParams = {
                to_name: formData.name,
                to_email: formData.email,
                from_name: 'Brajesh Kumar',
                message: `Dear ${formData.name},\n\nThank you for reaching out! I have received your message regarding "${formData.subject}" and will get back to you as soon as possible.\n\nBest regards,\nBrajesh Kumar`
            };

            // Send auto-reply (ensure your template supports these params)
            await emailjs.send(
                serviceID,
                templateID, // Assumes same template for auto-reply
                autoReplyParams
            );

        } catch (error) {
            console.error("Error sending email:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBackToHome = () => {
        window.location.href = "/";
    };

    return (
        <section ref={ref} id="contact" className="page" style={{
            minHeight: "100vh",
            margin: 0,
            padding: isMobile ? "2rem 1rem" : isTablet ? "3rem 2rem" : "4rem 3rem",
            color: "#fff",
            boxSizing: "border-box",
            width: "100%",
            position: "relative"
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    textAlign: "center"
                }}
            >
                <h1 style={{
                    fontSize: isMobile ? "2.5rem" : isTablet ? "3.5rem" : "4.5rem",
                    color: "#10cedf",
                    marginBottom: "2rem",
                    textShadow: "0 0 10px rgba(16, 206, 223, 0.5)"
                }}>
                    Contact Me
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        gap: "2rem",
                        background: "rgba(30, 30, 30, 0.7)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "15px",
                        padding: "2rem",
                        marginBottom: "3rem",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}
                >
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{
                            flex: "1",
                            textAlign: "left",
                            padding: "1rem"
                        }}
                    >
                        <h2 style={{ color: "#fff", marginBottom: "1.5rem" }}>Send Me a Message</h2>

                        {submitStatus === 'success' && (
                            <div style={{
                                padding: "1rem",
                                backgroundColor: "rgba(0, 200, 83, 0.2)",
                                borderRadius: "8px",
                                marginBottom: "1.5rem",
                                color: "#00c853",
                                border: "1px solid rgba(0, 200, 83, 0.3)"
                            }}>
                                ✅ Thank you for your message! I'll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div style={{
                                padding: "1rem",
                                backgroundColor: "rgba(255, 0, 0, 0.2)",
                                borderRadius: "8px",
                                marginBottom: "1.5rem",
                                color: "#ff5252",
                                border: "1px solid rgba(255, 0, 0, 0.3)"
                            }}>
                                ❌ There was an error sending your message. Please try again later.
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: "1.5rem" }}>
                                <label style={{ display: "block", marginBottom: "0.5rem", color: "#ccc" }}>
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your full name"
                                    style={{
                                        width: "100%",
                                        padding: "0.8rem",
                                        borderRadius: "8px",
                                        background: "rgba(255, 255, 255, 0.1)",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        color: "#fff",
                                        fontSize: "1rem",
                                        boxSizing: "border-box"
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: "1.5rem" }}>
                                <label style={{ display: "block", marginBottom: "0.5rem", color: "#ccc" }}>
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your email address"
                                    style={{
                                        width: "100%",
                                        padding: "0.8rem",
                                        borderRadius: "8px",
                                        background: "rgba(255, 255, 255, 0.1)",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        color: "#fff",
                                        fontSize: "1rem",
                                        boxSizing: "border-box"
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: "1.5rem" }}>
                                <label style={{ display: "block", marginBottom: "0.5rem", color: "#ccc" }}>
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="What is this regarding?"
                                    style={{
                                        width: "100%",
                                        padding: "0.8rem",
                                        borderRadius: "8px",
                                        background: "rgba(255, 255, 255, 0.1)",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        color: "#fff",
                                        fontSize: "1rem",
                                        boxSizing: "border-box"
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: "1.5rem" }}>
                                <label style={{ display: "block", marginBottom: "0.5rem", color: "#ccc" }}>
                                    Your Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="6"
                                    placeholder="Tell me about your project, ideas, or how I can help you..."
                                    style={{
                                        width: "100%",
                                        padding: "0.8rem",
                                        borderRadius: "8px",
                                        background: "rgba(255, 255, 255, 0.1)",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        color: "#fff",
                                        fontSize: "1rem",
                                        resize: "vertical",
                                        boxSizing: "border-box"
                                    }}
                                />
                            </div>

                            <CustomButton
                                text={isSubmitting ? "Sending..." : "Send Message"}
                                type="submit"
                                disabled={isSubmitting}
                            />
                        </form>
                    </motion.div>

                    {/* Contact Information - UPDATED WITH YOUR DATA */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        style={{
                            flex: "1",
                            padding: "1rem"
                        }}
                    >
                        <h2 style={{ color: "#fff", marginBottom: "1.5rem" }}>Contact Information</h2>
                        <p style={{
                            fontSize: "1.1rem",
                            lineHeight: "1.8",
                            marginBottom: "2rem",
                            color: "#ccc"
                        }}>
                            Feel free to reach out through any of the channels below.
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div style={{ marginBottom: "2rem" }}>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1.2rem" }}>
                                <div style={{ fontSize: "1.5rem", color: "#10cedf", marginRight: "1rem", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(16, 206, 223, 0.1)", borderRadius: "50%" }}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div>
                                    <h4 style={{ color: "#fff", margin: "0 0 0.3rem 0" }}>Email</h4>
                                    <p style={{ color: "#ccc", margin: 0 }}>bk117134@gmail.com</p>
                                </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1.2rem" }}>
                                <div style={{ fontSize: "1.5rem", color: "#10cedf", marginRight: "1rem", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(16, 206, 223, 0.1)", borderRadius: "50%" }}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div>
                                    <h4 style={{ color: "#fff", margin: "0 0 0.3rem 0" }}>Phone</h4>
                                    <p style={{ color: "#ccc", margin: 0 }}>+91 7452971645</p>
                                </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", marginBottom: "1.2rem" }}>
                                <div style={{ fontSize: "1.5rem", color: "#10cedf", marginRight: "1rem", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(16, 206, 223, 0.1)", borderRadius: "50%" }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </div>
                                <div>
                                    <h4 style={{ color: "#fff", margin: "0 0 0.3rem 0" }}>Location</h4>
                                    <p style={{ color: "#ccc", margin: 0 }}>NOIDA </p>
                                </div>
                            </div>
                        </div>

                        <h3 style={{ color: "#10cedf", marginBottom: "1rem" }}>Connect With Me</h3>
                        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                            <a href="https://www.linkedin.com/in/brajesh-kumar-9b58651a8/" target="_blank" rel="noopener noreferrer" style={{ width: "45px", height: "45px", borderRadius: "50%", background: "rgba(16, 206, 223, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10cedf", fontSize: "1.2rem", transition: "all 0.3s ease" }}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/Brajesh31" target="_blank" rel="noopener noreferrer" style={{ width: "45px", height: "45px", borderRadius: "50%", background: "rgba(16, 206, 223, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10cedf", fontSize: "1.2rem", transition: "all 0.3s ease" }}>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://x.com/lord_Brajesh" target="_blank" rel="noopener noreferrer" style={{ width: "45px", height: "45px", borderRadius: "50%", background: "rgba(16, 206, 223, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10cedf", fontSize: "1.2rem", transition: "all 0.3s ease" }}>
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                        </div>

                        <div style={{ marginTop: "2rem", padding: "1rem", background: "rgba(16, 206, 223, 0.1)", borderRadius: "8px", border: "1px solid rgba(16, 206, 223, 0.2)" }}>
                            <p style={{ color: "#10cedf", margin: 0, fontSize: "0.9rem" }}>
                                💡 <strong>Quick Response:</strong> I typically respond to emails within 24 hours. For urgent matters, feel free to connect via LinkedIn!
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                <div style={{ marginTop: "2rem" }}>
                    <CustomButton
                        text="Back to Home"
                        onClick={handleBackToHome}
                    />
                </div>
            </motion.div>
        </section>
    );
}