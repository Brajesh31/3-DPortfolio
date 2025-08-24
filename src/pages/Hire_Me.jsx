import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CustomButton from "../Components/CustomButton";

export default function Hire_Me() {
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

  // Add effect to fix body styling
  useEffect(() => {
    // Reset any body styles that might cause whitespace
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "auto";

    // Apply a style to html and body to prevent whitespace
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.minHeight = "100vh";

    return () => {
      // Cleanup when component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const handleBackToHome = () => {
    window.location.href = "/";
  };

  return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
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
            Hire Me
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
            <h2 style={{ color: "#fff", marginBottom: "1.5rem" }}>Let's Build the Future, Intelligently.</h2>
            {/* UPDATED WITH YOUR DATA */}
            <p style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              marginBottom: "2rem",
              color: "#ccc"
            }}>
              I am currently available for full-time AI Engineer and AI Developer roles.
              If you're looking for a developer who can build and deploy end-to-end intelligent systems, let's connect.
              I specialize in integrating machine learning models into scalable, full-stack applications.
            </p>
            <div className="services-container" style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "2rem",
              flexWrap: "wrap"
            }}>
              {/* AI & Machine Learning Card - NEW */}
              <motion.div
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(16, 206, 223, 0.3)"
                  }}
                  style={{
                    background: "rgba(20, 20, 20, 0.8)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    width: isMobile ? "100%" : "300px",
                    border: "1px solid rgba(16, 206, 223, 0.3)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)"
                  }}
              >
                <div style={{ padding: "1.5rem", textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", color: "#10cedf", marginBottom: "1rem", textShadow: "0 0 10px rgba(16, 206, 223, 0.5)" }}>
                    <i className="fas fa-brain"></i>
                  </div>
                  <h3 style={{ color: "#fff", marginBottom: "1rem" }}>AI & Machine Learning</h3>
                  <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
                    Developing custom models, NLP solutions, and computer vision systems to solve complex problems.
                  </p>
                  <div style={{ padding: "0.8rem", borderRadius: "8px", marginBottom: "1rem" }}>
                    <p style={{ color: "#ccc", margin: 0, fontSize: "0.9rem" }}>TensorFlow, Python, OpenCV, NLP, GANs</p>
                  </div>
                  <CustomButton text="Get Started" onClick={() => window.open("mailto:bk117134@gmail.com?subject=AI/ML Development Inquiry")} />
                </div>
              </motion.div>

              {/* Full-Stack AI Integration Card - NEW */}
              <motion.div
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(16, 206, 223, 0.3)"
                  }}
                  style={{
                    background: "rgba(20, 20, 20, 0.8)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    width: isMobile ? "100%" : "300px",
                    border: "1px solid rgba(16, 206, 223, 0.3)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)"
                  }}
              >
                <div style={{ padding: "1.5rem", textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", color: "#10cedf", marginBottom: "1rem", textShadow: "0 0 10px rgba(16, 206, 223, 0.5)" }}>
                    <i className="fas fa-project-diagram"></i>
                  </div>
                  <h3 style={{ color: "#fff", marginBottom: "1rem" }}>Full-Stack AI Integration</h3>
                  <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
                    Building robust web apps with APIs to serve and interact with machine learning models.
                  </p>
                  <div style={{ padding: "0.8rem", borderRadius: "8px", marginBottom: "1rem" }}>
                    <p style={{ color: "#ccc", margin: 0, fontSize: "0.9rem" }}>React, Node.js, Python, Django, REST APIs</p>
                  </div>
                  <CustomButton text="Get Started" onClick={() => window.open("mailto:bk117134@gmail.com?subject=Full-Stack AI Inquiry")} />
                </div>
              </motion.div>

              {/* Cloud & MLOps Card - NEW */}
              <motion.div
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(16, 206, 223, 0.3)"
                  }}
                  style={{
                    background: "rgba(20, 20, 20, 0.8)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    width: isMobile ? "100%" : "300px",
                    border: "1px solid rgba(16, 206, 223, 0.3)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)"
                  }}
              >
                <div style={{ padding: "1.5rem", textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", color: "#10cedf", marginBottom: "1rem", textShadow: "0 0 10px rgba(16, 206, 223, 0.5)" }}>
                    <i className="fas fa-cloud-upload-alt"></i>
                  </div>
                  <h3 style={{ color: "#fff", marginBottom: "1rem" }}>Cloud & MLOps</h3>
                  <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
                    Deploying, scaling, and managing AI models in the cloud using modern DevOps practices.
                  </p>
                  <div style={{ padding: "0.8rem", borderRadius: "8px", marginBottom: "1rem" }}>
                    <p style={{ color: "#ccc", margin: 0, fontSize: "0.9rem" }}>AWS, Docker, Jenkins, CI/CD, Git</p>
                  </div>
                  <CustomButton text="Get Started" onClick={() => window.open("mailto:bk117134@gmail.com?subject=Cloud & MLOps Inquiry")} />
                </div>
              </motion.div>
            </div>

            <div style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "2rem"
            }}>
              <CustomButton
                  text="Contact Me"
                  onClick={() => window.open("mailto:bk117134@gmail.com")}
              />
              <CustomButton
                  text="View Resume"
                  onClick={() => window.open("/resume.pdf")}
              />
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