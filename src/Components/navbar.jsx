import { useEffect, useRef, useState } from "react";
import { FaAddressBook, FaBars, FaBrain, FaCode, FaLaptopCode, FaRocket, FaTimes } from "react-icons/fa";

const ModernNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [zIndexHigh, setZIndexHigh] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [screenSize, setScreenSize] = useState('desktop');

    const navRef = useRef(null);
    const backgroundRef = useRef(null);
    const itemRefs = useRef([]);
    const logoRef = useRef(null);
    const toggleRef = useRef(null);

    // Navigation items
    const navItems = [
        { id: 'home', label: 'Home', icon: FaCode },
        { id: 'about', label: 'About', icon: FaBrain },
        { id: 'projects', label: 'Projects', icon: FaLaptopCode },
        { id: 'Skill', label: 'Skills', icon: FaRocket },
        { id: 'contact', label: 'Contact', icon: FaAddressBook }
    ];

    // Handle window resize with multiple breakpoints
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 480) {
                setScreenSize('mobile');
            } else if (width <= 768) {
                setScreenSize('tablet');
            } else if (width <= 1024) {
                setScreenSize('laptop');
            } else {
                setScreenSize('desktop');
            }

            // Close mobile menu on resize to larger screens
            if (width > 768) {
                setIsOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle z-index transition after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setZIndexHigh(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    // Initialize animations
    useEffect(() => {
        const initializeAnimations = () => {
            // Navbar entrance animation
            if (navRef.current) {
                navRef.current.style.transform = 'translateY(-100px) translateX(-50%)';
                navRef.current.style.opacity = '0';

                setTimeout(() => {
                    navRef.current.style.transform = 'translateY(0) translateX(-50%)';
                    navRef.current.style.opacity = '1';
                }, 300);
            }

            // Logo animation
            if (logoRef.current) {
                logoRef.current.style.transform = 'translateX(50px)';
                logoRef.current.style.opacity = '0';

                setTimeout(() => {
                    logoRef.current.style.transform = 'translateX(0)';
                    logoRef.current.style.opacity = '1';
                }, 600);
            }

            // Stagger nav items animation
            itemRefs.current.forEach((item, index) => {
                if (item) {
                    item.style.transform = 'translateY(30px)';
                    item.style.opacity = '0';

                    setTimeout(() => {
                        item.style.transform = 'translateY(0)';
                        item.style.opacity = '1';
                    }, 800 + (index * 100));
                }
            });
        };

        initializeAnimations();
    }, []);

    // Handle scroll background animation
    useEffect(() => {
        if (backgroundRef.current) {
            if (scrolled) {
                backgroundRef.current.style.background = 'rgba(255, 255, 255, 0.15)';
                backgroundRef.current.style.backdropFilter = 'blur(25px)';
                backgroundRef.current.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                backgroundRef.current.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
            } else {
                backgroundRef.current.style.background = 'rgba(255, 255, 255, 0.08)';
                backgroundRef.current.style.backdropFilter = 'blur(15px)';
                backgroundRef.current.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                backgroundRef.current.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            }
        }
    }, [scrolled]);

    // Handle mobile menu animation and desktop visibility
    useEffect(() => {
        const isMobile = screenSize === 'mobile' || screenSize === 'tablet';

        itemRefs.current.forEach((item, index) => {
            if (item) {
                if (isMobile) {
                    if (isOpen) {
                        item.style.transform = 'translateY(0) scale(1)';
                        item.style.opacity = '1';
                        item.style.transitionDelay = `${index * 0.1}s`;
                    } else {
                        item.style.transform = 'translateY(-20px) scale(0.9)';
                        item.style.opacity = '0';
                        item.style.transitionDelay = `${(navItems.length - index) * 0.05}s`;
                    }
                } else {
                    // Desktop/laptop - always show items
                    item.style.transform = 'translateY(0) scale(1)';
                    item.style.opacity = '1';
                    item.style.transitionDelay = '0s';
                }
            }
        });
    }, [isOpen, screenSize]);

    const handleClick = (e, sectionId, index) => {
        e.preventDefault();
        setActiveItem(index);

        // Animate active item
        if (itemRefs.current[index]) {
            itemRefs.current[index].style.transform = 'scale(1.1)';
            setTimeout(() => {
                itemRefs.current[index].style.transform = 'scale(1)';
            }, 200);
        }

        // Smooth scroll - you can customize this based on your sections
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = 80;
            const sectionTop = section.offsetTop - navbarHeight;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }

        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);

        // Animate toggle button
        if (toggleRef.current) {
            toggleRef.current.style.transform = 'rotate(180deg) scale(0.8)';
            setTimeout(() => {
                toggleRef.current.style.transform = 'rotate(0deg) scale(1)';
            }, 200);
        }
    };

    const handleItemHover = (index) => {
        const isMobile = screenSize === 'mobile' || screenSize === 'tablet';
        if (itemRefs.current[index] && !isMobile) {
            itemRefs.current[index].style.transform = 'translateY(-3px) scale(1.05)';
            itemRefs.current[index].style.background = 'rgba(255, 255, 255, 0.1)';
        }
    };

    const handleItemLeave = (index) => {
        const isMobile = screenSize === 'mobile' || screenSize === 'tablet';
        if (itemRefs.current[index] && !isMobile && index !== activeItem) {
            itemRefs.current[index].style.transform = 'translateY(0) scale(1)';
            itemRefs.current[index].style.background = 'transparent';
        }
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && navRef.current && !navRef.current.contains(event.target) &&
                toggleRef.current && !toggleRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    // Get responsive values
    const getResponsiveValues = () => {
        switch (screenSize) {
            case 'mobile':
                return {
                    logoSize: 30,
                    logoFontSize: 12,
                    navFontSize: 13,
                    navPadding: '12px 20px',
                    logoMargin: '10px',
                    navTop: '15px',
                    toggleSize: 45,
                    itemWidth: '180px',
                    itemPadding: '12px 20px',
                    iconSize: 14
                };
            case 'tablet':
                return {
                    logoSize: 32,
                    logoFontSize: 14,
                    navFontSize: 14,
                    navPadding: '14px 22px',
                    logoMargin: '15px',
                    navTop: '18px',
                    toggleSize: 48,
                    itemWidth: '200px',
                    itemPadding: '14px 22px',
                    iconSize: 15
                };
            case 'laptop':
                return {
                    logoSize: 35,
                    logoFontSize: 16,
                    navFontSize: 14,
                    navPadding: '12px 18px',
                    logoMargin: '20px',
                    navTop: '20px',
                    toggleSize: 50,
                    itemWidth: 'auto',
                    itemPadding: '12px 18px',
                    iconSize: 16
                };
            default: // desktop
                return {
                    logoSize: 35,
                    logoFontSize: 16,
                    navFontSize: 14,
                    navPadding: '12px 20px',
                    logoMargin: '20px',
                    navTop: '20px',
                    toggleSize: 50,
                    itemWidth: 'auto',
                    itemPadding: '12px 20px',
                    iconSize: 16
                };
        }
    };

    const responsive = getResponsiveValues();
    const isMobile = screenSize === 'mobile' || screenSize === 'tablet';

    return (
        <>
            {/* Logo - Fixed at top left - UPDATED WITH YOUR DATA */}
            <div
                ref={logoRef}
                style={{
                    position: 'fixed',
                    top: responsive.logoMargin,
                    left: responsive.logoMargin,
                    zIndex: zIndexHigh ? 3002 : 10,
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    padding: responsive.navPadding,
                    borderRadius: '50px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    opacity: 0,
                    transform: 'translateX(50px)',
                    cursor: 'pointer'
                }}
                onClick={(e) => handleClick(e, 'home', 0)}
            >
                <div style={{
                    width: `${responsive.logoSize}px`,
                    height: `${responsive.logoSize}px`,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginRight: screenSize === 'mobile' ? '8px' : '12px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    background: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: `${responsive.logoFontSize}px`
                }}>
                    BK
                </div>
                <span style={{
                    color: 'white',
                    fontSize: `${responsive.logoFontSize}px`,
                    fontWeight: 'bold',
                    fontFamily: 'monospace'
                }}>
          {screenSize === 'mobile' ? (
              "BK"
          ) : (
              <>
                  {"<"}
                  <span style={{ color: '#00d4ff' }}>Brajesh</span>
                  <span style={{ color: '#00d4ff' }}>Kumar</span>
                  {"/>"}
              </>
          )}
        </span>
            </div>

            {/* Main Navigation */}
            <nav
                ref={navRef}
                style={{
                    position: 'fixed',
                    top: responsive.navTop,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: zIndexHigh ? 3001 : 9,
                    transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    opacity: 0
                }}
            >
                {/* Mobile Toggle Button */}
                <button
                    ref={toggleRef}
                    onClick={toggleMenu}
                    style={{
                        position: 'fixed',
                        right: responsive.logoMargin,
                        top: responsive.logoMargin,
                        display: isMobile ? 'flex' : 'none',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        width: `${responsive.toggleSize}px`,
                        height: `${responsive.toggleSize}px`,
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'aqua',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                        zIndex: 3003,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    {isOpen ? <FaTimes size={screenSize === 'mobile' ? 16 : 20} /> : <FaBars size={screenSize === 'mobile' ? 16 : 20} />}
                </button>

                {/* Navigation Container */}
                <div
                    style={{
                        position: 'relative',
                        transform: isMobile
                            ? `translateY(${isOpen ? (screenSize === 'mobile' ? '60px' : '70px') : '-100px'}) translateX(-50%)`
                            : 'translateY(0) translateX(0)',
                        left: isMobile ? '50%' : '0',
                        opacity: isMobile ? (isOpen ? 1 : 0) : 1,
                        transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                        pointerEvents: isMobile ? (isOpen ? 'auto' : 'none') : 'auto'
                    }}
                >
                    {/* Background */}
                    <div
                        ref={backgroundRef}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.8)',
                            backdropFilter: 'blur(15px)',
                            borderRadius: isMobile ? '25px' : '50px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                            boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.05),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
                        }}
                    />

                    {/* Navigation Items */}
                    <div
                        style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            padding: responsive.navPadding,
                            gap: screenSize === 'mobile' ? '2px' : '5px',
                            flexDirection: isMobile ? 'column' : 'row'
                        }}
                    >
                        {navItems.map((item, index) => {
                            const IconComponent = item.icon;
                            const isActive = activeItem === index;

                            return (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    ref={(el) => (itemRefs.current[index] = el)}
                                    onClick={(e) => handleClick(e, item.id, index)}
                                    onMouseEnter={() => handleItemHover(index)}
                                    onMouseLeave={() => handleItemLeave(index)}
                                    style={{
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: screenSize === 'mobile' ? '6px' : '8px',
                                        padding: responsive.itemPadding,
                                        borderRadius: '30px',
                                        color: 'white',
                                        textDecoration: 'none',
                                        fontSize: `${responsive.navFontSize}px`,
                                        fontWeight: '500',
                                        transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                                        cursor: 'pointer',
                                        background: isActive
                                            ? 'rgba(255, 255, 255, 0.2)'
                                            : 'transparent',
                                        transform: isMobile
                                            ? (isOpen ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.9)')
                                            : (isActive ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)'),
                                        boxShadow: isActive
                                            ? '0 8px 25px rgba(0, 0, 0, 0.2)'
                                            : 'none',
                                        width: isMobile ? responsive.itemWidth : 'auto',
                                        opacity: isMobile ? (isOpen ? 1 : 0) : 1,
                                        minHeight: isMobile ? '44px' : 'auto'
                                    }}

                                >
                                    <IconComponent size={responsive.iconSize} />
                                    <span>{item.label}</span>

                                    {/* Active indicator */}
                                    {isActive && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                bottom: '-2px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                width: '20px',
                                                height: '2px',
                                                background: '#00d4ff',
                                                borderRadius: '2px',
                                                display: !isMobile ? 'block' : 'none'
                                            }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobile && isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 2999,
                        backdropFilter: 'blur(5px)',
                        transition: 'all 0.3s ease'
                    }}
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Global Styles */}
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

                * {
                    font-family: 'Inter', sans-serif;
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    padding: 0;
                    overflow-x: hidden;
                    background: linear-gradient(135deg, #000 0%, #001 100%);
                    min-height: 100vh;
                }

                /* Smooth scroll behavior */
                html {
                    scroll-behavior: smooth;
                }

                /* Responsive padding for different screen sizes */
                @media (max-width: 480px) {
                    body {
                        padding-top: 70px;
                    }
                }

                @media (min-width: 481px) and (max-width: 768px) {
                    body {
                        padding-top: 80px;
                    }
                }

                @media (min-width: 769px) and (max-width: 1024px) {
                    body {
                        padding-top: 90px;
                    }
                }

                @media (min-width: 1025px) {
                    body {
                        padding-top: 100px;
                    }
                }

                /* Demo content to show navbar functionality */
                .demo-content {
                    padding-top: 120px;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: clamp(1.5rem, 4vw, 2rem);
                    font-weight: bold;
                    text-align: center;
                    padding: 0 20px;
                }

                /* Prevent text selection on navigation items */
                nav a {
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }

                /* Improve touch targets on mobile */
                @media (max-width: 768px) {
                    nav a {
                        min-height: 44px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                /* Prevent horizontal scroll on small screens */
                @media (max-width: 480px) {
                    body {
                        overflow-x: hidden;
                    }
                }
            `}</style>


        </>
    );
};

export default ModernNavbar;