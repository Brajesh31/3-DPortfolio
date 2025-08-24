import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CustomButton = ({ text, onClick, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480); // you can adjust breakpoint
    };

    handleResize(); // set initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const buttonStyle = useMemo(() => ({
    marginBottom: isMobile ? '-100px' : '0px',
    padding: isMobile ? '10px 15px' : '14px 28px',
    fontSize: isMobile ? '1rem' : '1.2rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#111',
    border: '2px solid #10cedf',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(16, 206, 223, 0.3)',
    transition: 'all 0.25s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(5px)',
  }), [isMobile]);

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 15px rgba(16, 206, 223, 0.7)'
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={buttonStyle}
      className={className}
      onClick={onClick}
    >
      <span>{text}</span>
      <motion.span
        animate={{ x: isHovered ? 5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowRight />
      </motion.span>
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '3px',
          width: '100%',
          background: 'linear-gradient(90deg, transparent, #10cedf, transparent)',
          zIndex: 1
        }}
        animate={{
          x: isHovered ? ['-100%', '100%'] : '-100%'
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: 'linear'
        }}
      />
    </motion.button>
  );
};

export default CustomButton;
