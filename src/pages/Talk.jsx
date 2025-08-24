import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import CustomButton from "../Components/CustomButton";

export default function Talk() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    const handleBackToHome = () => {
        window.location.href = "/";
    };

    return (
        <div className="bg-black" style={{
            minHeight: "100vh",
            margin: 0,
            padding: isMobile ? "2rem 1rem" : isTablet ? "3rem 2rem" : "4rem 3rem",
            color: "#fff",
            boxSizing: "border-box",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: -50 }}
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
                    Let's Connect
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{
                        background: "rgba(30, 30, 30, 0.7)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "15px",
                        padding: "2rem",
                        marginBottom: "3rem",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}
                >
                    <h2 style={{ color: "#fff", marginBottom: "1.5rem" }}>Get in Touch</h2>
                    <p style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.8",
                        marginBottom: "2rem",
                        color: "#ccc"
                    }}>
                        Have a question or want to collaborate on an AI project? I'm always open to discussing new opportunities, creative ideas, or how I can contribute to your team's vision.
                    </p>

                    <div style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : isTablet ? "row" : "row",
                        justifyContent: "center",
                        alignItems: "stretch", // Ensures cards have same height on desktop
                        gap: "2rem",
                        marginTop: "3rem",
                        marginBottom: "3rem",
                        flexWrap: "wrap"
                    }}>
                        {/* Email Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(16, 206, 223, 0.3)" }}
                            style={{
                                background: "rgba(20, 20, 20, 0.8)",
                                borderRadius: "12px",
                                padding: "2rem",
                                width: isMobile ? "100%" : "300px",
                                border: "1px solid rgba(16, 206, 223, 0.3)",
                                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                                display: 'flex', flexDirection: 'column'
                            }}
                        >
                            <div style={{ fontSize: "3rem", color: "#10cedf", marginBottom: "1rem" }}>
                                <i className="fas fa-envelope"></i>
                            </div>
                            <h3 style={{ color: "#fff", marginBottom: "1rem" }}>Email</h3>
                            <p style={{ color: "#ccc", marginBottom: "1.5rem", flexGrow: 1 }}>
                                The most direct way to reach me. I typically respond within 24 hours.
                            </p>
                            <CustomButton
                                text="Send Email"
                                onClick={() => window.open("mailto:bk117134@gmail.com")}
                            />
                        </motion.div>

                        {/* Social Media Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(16, 206, 223, 0.3)" }}
                            style={{
                                background: "rgba(20, 20, 20, 0.8)",
                                borderRadius: "12px",
                                padding: "2rem",
                                width: isMobile ? "100%" : "300px",
                                border: "1px solid rgba(16, 206, 223, 0.3)",
                                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                                display: 'flex', flexDirection: 'column'
                            }}
                        >
                            <div style={{ fontSize: "3rem", color: "#10cedf", marginBottom: "1rem" }}>
                                <i className="fas fa-users"></i>
                            </div>
                            <h3 style={{ color: "#fff", marginBottom: "1rem" }}>Professional Profiles</h3>
                            <p style={{ color: "#ccc", marginBottom: "1.5rem", flexGrow: 1 }}>
                                Connect with me on professional networks to see my work and activities.
                            </p>
                            <div style={{ marginTop: "auto" }}>
                                <CustomButton
                                    text="LinkedIn"
                                    onClick={() => window.open("https://www.linkedin.com/in/brajesh-kumar-9b58651a8/")}
                                />
                                <div style={{ marginTop: "1rem" }}>
                                    <CustomButton
                                        text="GitHub"
                                        onClick={() => window.open("https://github.com/Brajesh31")}
                                    />
                                </div>
                                <div style={{ marginTop: "1rem" }}>
                                    <CustomButton
                                        text="X / Twitter"
                                        onClick={() => window.open("https://x.com/lord_Brajesh")}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Open Source & Community */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(16, 206, 223, 0.3)" }}
                            style={{
                                background: "rgba(20, 20, 20, 0.8)",
                                borderRadius: "12px",
                                padding: "2rem",
                                width: isMobile ? "100%" : "300px",
                                border: "1px solid rgba(16, 206, 223, 0.3)",
                                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                                display: 'flex', flexDirection: 'column'
                            }}
                        >
                            <div style={{ fontSize: "3rem", color: "#10cedf", marginBottom: "1rem" }}>
                                <i className="fas fa-code-branch"></i>
                            </div>
                            <h3 style={{ color: "#fff", marginBottom: "1rem" }}>Open Source & Community</h3>
                            <p style={{ color: "#ccc", marginBottom: "1.5rem", flexGrow: 1 }}>
                                I'm passionate about open-source and community building. Check out my work with Tech Dev Club.
                            </p>
                            <CustomButton
                                text="Visit Tech Dev Club"
                                onClick={() => window.open("https://techdevclub.com/")}
                            />
                        </motion.div>
                    </div>

                </motion.div>

                <div style={{ marginTop: "2rem" }}>
                    <CustomButton
                        text="Back to Home"
                        onClick={handleBackToHome}
                    />
                </div>
            </motion.div>
        </div>
    );
}