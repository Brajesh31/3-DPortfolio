import { useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Vector3 } from 'three';
import ButtonContainer from "./Components/ButtonContainer";
import ClientOnly from "./Components/ClientOnly";
import ContactUs from "./Components/Contact-us";
import MainScene from "./Components/MainScene";
import Navbar from "./Components/navbar";
import About from "./pages/About";
import HireMe from "./pages/Hire_Me";
import Home from "./pages/home";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";
import Talk from "./pages/Talk";
import { SafeSpringProvider } from "./utils/SafeSpringProvider";

// Loading animation component
const LoadingAnimation = () => {
    return (
        <div style={{
            position: "fixed",
            top: "65%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px"
        }}>
            {/* Loading Text */}
            <div style={{
                color: "#fff",
                fontSize: "1.5rem",
                fontWeight: "300",
                letterSpacing: "2px",
                opacity: "0.8"
            }}>
                LOADING
            </div>

            {/* Loading Bar Container */}
            <div style={{
                width: "300px",
                height: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
            }}>
                <div style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, #00f5ff, #0080ff, #00f5ff)",
                    borderRadius: "4px",
                    animation: "loadingBar 5s ease-out forwards",
                    boxShadow: "0 0 15px rgba(0, 245, 255, 0.5)"
                }} />
            </div>

            {/* Animated Dots */}
            <div style={{
                display: "flex",
                gap: "8px",
                alignItems: "center"
            }}>
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#00f5ff",
                            borderRadius: "50%",
                            animation: `pulse 1.5s ease-in-out infinite ${i * 0.2}s`,
                            boxShadow: "0 0 10px rgba(0, 245, 255, 0.5)"
                        }}
                    />
                ))}
            </div>

            <style>{`
                @keyframes loadingBar {
                    from {
                        transform: translateX(-100%);
                        opacity: 0.8;
                    }
                    to {
                        transform: translateX(0%);
                        opacity: 1;
                    }
                }
                
                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.5;
                    }
                    50% {
                        transform: scale(1.5);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

function MainContent() {
    const navigate = useNavigate();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);
    const [backgroundOpacity, setBackgroundOpacity] = useState(1);
    const [showText, setShowText] = useState(true);
    const [activeSection, setActiveSection] = useState("home");
    const [modelPosition, setModelPosition] = useState([0, 1, 0]);
    const [modelScale, setModelScale] = useState(3);
    const [modelRotation, setModelRotation] = useState([0, 0, 0]);
    const targetModelPosition = useRef(new Vector3(0, 1, 0));
    const debounceTimeout = useRef(null);
    const [showLoading, setShowLoading] = useState(true);
    const [fadeOpacity, setFadeOpacity] = useState(1);
    const [previousSection, setPreviousSection] = useState("home");
    const [transitionProgress, setTransitionProgress] = useState(0);
    const [zIndex, setZIndex] = useState(100);

    const shouldRenderModel = () => !startAnimation || activeSection === "home";

    useEffect(() => {
        document.body.style.overflow = "hidden";
        setFadeOpacity(1);
        document.documentElement.style.scrollBehavior = "smooth";

        const timeouts = [
            setTimeout(() => {
                setStartAnimation(true);
                document.body.style.overflow = "auto";
                setShowText(false);
                setShowLoading(false);
            }, 7000),
            setTimeout(() => setBackgroundOpacity(0.7), 4000),
            setTimeout(() => setBackgroundOpacity(0), 7000),
            setTimeout(() => setFadeOpacity(0), 3000),
            setTimeout(() => setShowLoading(false), 5000),
            setTimeout(() => setZIndex(4000), 7000)
        ];

        return () => {
            timeouts.forEach(clearTimeout);
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollTop / pageHeight, 1);
            setScrollProgress(progress);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                let maxRatio = 0;
                let visibleSection = activeSection;

                entries.forEach((entry) => {
                    if (entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        visibleSection = entry.target.id;
                    }
                });

                if (visibleSection !== activeSection) {
                    setPreviousSection(activeSection);
                    setActiveSection(visibleSection);
                    setTransitionProgress(0);
                }
            },
            {
                threshold: Array.from({ length: 100 }, (_, i) => i / 100),
                rootMargin: "0px 0px -30% 0px",
            }
        );

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));
        window.addEventListener("scroll", handleScroll);

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeSection]);

    useEffect(() => {
        if (previousSection !== activeSection) {
            const transitionInterval = setInterval(() => {
                setTransitionProgress(prev => {
                    const newProgress = prev + 0.05;
                    if (newProgress >= 1) {
                        clearInterval(transitionInterval);
                        return 1;
                    }
                    return newProgress;
                });
            }, 20);

            return () => clearInterval(transitionInterval);
        }
    }, [previousSection, activeSection]);

    useEffect(() => {
        if (!shouldRenderModel()) return;

        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

        debounceTimeout.current = setTimeout(() => {
            let targetPosition;

            if (!startAnimation) {
                targetPosition = new Vector3(0, 3, 0);
                setModelScale(3);
                setModelRotation([0, 0, 0]);
            } else {
                const width = window.innerWidth;

                if (width <= 640) {
                    targetPosition = new Vector3(-5.5, -8.25, -20.5);
                    setModelScale(2.5);
                    setModelRotation([0, 0, 0]);
                } else if (width <= 1024) {
                    targetPosition = new Vector3(-3.5, 0.5, -8);
                    setModelScale(2.8);
                    setModelRotation([0, 0, 0]);
                } else {
                    targetPosition = new Vector3(-2.5, 2.25, 0);
                    setModelScale(3);
                    setModelRotation([0, 0, 0]);
                }
            }

            targetModelPosition.current.copy(targetPosition);
        }, 100);
    }, [startAnimation, activeSection]);

    return (
        <>
            <div style={{ position: "relative", zIndex }}>
                <Navbar />
            </div>

            {["home", "about", "projects", "Skill", "contact"].map((sectionId) => (
                <section
                    key={sectionId}
                    id={sectionId}
                    style={{
                        position: "relative",
                        width: "100vw",
                        minHeight: "100vh",
                        backgroundColor: sectionId === "home" ? "transparent" : "#000",
                        zIndex: 10,
                        overflow: "hidden"
                    }}
                >
                    <div style={{ position: 'relative', zIndex: 2, paddingTop: sectionId === 'home' ? "80px" : "0" }}>
                        {sectionId === "home" && <Home />}
                        {sectionId === "about" && <About />}
                        {sectionId === "projects" && <Projects />}
                        {sectionId === "Skill" && <Skill />}
                        {sectionId === "contact" && <ContactUs />}
                    </div>
                </section>
            ))}

            {showText && (
                <>
                    <div style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "3rem",
                        color: "white",
                        zIndex: 9999,
                        textAlign: "center",
                        opacity: showText ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                        pointerEvents: "none"
                    }}>
                        <b>Welcome to the 3D Experience</b>
                    </div>
                    {showLoading && <LoadingAnimation />}
                </>
            )}

            {activeSection === "home" && !showText && (
                <>
                    {/* Hire Me Button */}
                    <ButtonContainer
                        onClick={() => navigate('/hire-me')}
                        className="
    fixed 
    z-[3000]
    left-[2rem] bottom-[15rem]      /* Default: Mobile */
    sm:left-[8rem] sm:bottom-[15rem]
    md:left-[4rem] md:bottom-[2rem]
    lg:left-[4rem] lg:bottom-[1rem]
    xl:left-[6rem] xl:bottom-[0rem]
  "
                        text="Hire Me"
                    />

                    {/* Talk To Me Button */}
                    <ButtonContainer
                        onClick={() => navigate('/talk')}
                        className="
    fixed 
    z-[3000]
    left-[10rem] bottom-[15rem]     /* Default: Mobile */
    sm:left-[19rem] sm:bottom-[15rem]
    md:left-[15rem] md:bottom-[2rem]
    lg:left-[16rem] lg:bottom-[1rem]
    xl:left-[18rem] xl:bottom-[0rem]
  "
                        text="Contact Me"
                    />


                </>
            )}

            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
                transition: "background-color 3s ease-in-out",
                zIndex: 2000,
                pointerEvents: "none"
            }} />

            {shouldRenderModel() && (
                <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 2001, pointerEvents: "none" }}>
                    <MainScene
                        scrollProgress={scrollProgress}
                        startAnimation={startAnimation}
                        activeSection={activeSection}
                        modelPosition={modelPosition}
                        modelScale={modelScale}
                        modelRotation={modelRotation}
                        setModelPosition={setModelPosition}
                        targetModelPosition={targetModelPosition}
                        modelZIndex={2001}
                    />
                </div>
            )}


        </>
    );
}

const App = () => (
    <ClientOnly>
        <SafeSpringProvider value={{ tension: 170, friction: 26, mass: 1, immediate: false }}>
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/hire-me" element={<HireMe />} />
                <Route path="/talk" element={<Talk />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </SafeSpringProvider>
    </ClientOnly>
);

export default App;