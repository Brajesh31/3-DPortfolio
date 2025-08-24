import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Skill = () => {
  // Set the initial category to the most important one
  const [selectedCategory, setSelectedCategory] = useState('AI & Machine Learning');
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef();

  useEffect(() => {
    // Use requestAnimationFrame for smooth rotation
    const rotateSkills = () => {
      setRotation(prev => prev + 0.005);
      animationRef.current = requestAnimationFrame(rotateSkills);
    };

    animationRef.current = requestAnimationFrame(rotateSkills);

    const rotateCategory = setInterval(() => {
      const categories = Object.keys(skillData);
      setSelectedCategory(prev => {
        const currentIndex = categories.indexOf(prev);
        return categories[(currentIndex + 1) % categories.length];
      });
    }, 5000);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearInterval(rotateCategory);
    };
  }, []);

  // === UPDATED WITH YOUR SKILL DATA ===
  const skillData = {
    'AI & Machine Learning': {
      icon: '🧠',
      color: '#DB2777', // Pink
      skills: [
        { name: 'TensorFlow', level: 92, icon: '🔥' },
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'OpenCV', level: 88, icon: '👁️' },
        { name: 'NLP', level: 90, icon: '📜' },
        { name: 'Deep Learning', level: 89, icon: '🌌' },
        { name: 'GANs', level: 85, icon: '🎭' }
      ]
    },
    Backend: {
      icon: '⚙️',
      color: '#339933',
      skills: [
        { name: 'Node.js', level: 90, icon: '🟢' },
        { name: 'Django', level: 88, icon: '🎸' },
        { name: 'Flask', level: 87, icon: '🧪' },
        { name: 'Express', level: 89, icon: '🚂' },
        { name: 'Go (Golang)', level: 82, icon: '🐹' },
        { name: 'REST API', level: 93, icon: '🔌' }
      ]
    },
    Frontend: {
      icon: '⚛️',
      color: '#61DAFB',
      skills: [
        { name: 'React', level: 94, icon: '⚛️' },
        { name: 'Angular', level: 85, icon: '🅰️' },
        { name: 'Vue.js', level: 83, icon: '🖖' },
        { name: 'Tailwind CSS', level: 91, icon: '🌊' },
        { name: 'GSAP', level: 86, icon: '🚀' },
        { name: 'JavaScript', level: 92, icon: '⚡' }
      ]
    },
    'Cloud & MLOps': {
      icon: '☁️',
      color: '#00BFFF',
      skills: [
        { name: 'AWS', level: 88, icon: '☁️' },
        { name: 'Docker', level: 86, icon: '🐳' },
        { name: 'CI/CD', level: 84, icon: '🔁' },
        { name: 'Jenkins', level: 80, icon: '🛠️' },
        { name: 'Vercel', level: 85, icon: '▲' },
        { name: 'Git', level: 94, icon: '🐙' }
      ]
    },
    Database: {
      icon: '💾',
      color: '#FFD700',
      skills: [
        { name: 'PostgreSQL', level: 85, icon: '🐘' },
        { name: 'MongoDB', level: 88, icon: '🍃' },
        { name: 'MySQL', level: 84, icon: '🐬' },
        { name: 'SQL Server', level: 80, icon: '🗄️' }
      ]
    },
    Tools: {
      icon: '🛠️',
      color: '#8B5CF6',
      skills: [
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Figma', level: 86, icon: '🎨' },
        { name: 'Postman', level: 89, icon: '📮' },
        { name: 'JIRA', level: 87, icon: '📋' },
        { name: 'Agile/Scrum', level: 90, icon: '🔄' },
        { name: 'Webpack', level: 82, icon: '📦' }
      ]
    }
  };

  const categories = Object.keys(skillData);
  const currentData = skillData[selectedCategory];

  return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16 overflow-hidden relative">

        {/* Galaxy Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Nebula Effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold mb-2 text-cyan-400 drop-shadow-2xl relative z-10">
          Tech Stack & Skills
        </h1>
        {/* UPDATED WITH YOUR DATA */}
        <p className="text-center text-gray-300 mb-5 max-w-2xl relative z-10">
          My expertise in building end-to-end intelligent systems, combining robust backend logic with intuitive frontend experiences and scalable cloud infrastructure.
        </p>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-4 relative z-10">
          {categories.map((category) => (
              <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm ${selectedCategory === category
                      ? 'bg-white/20 text-white border-white/40 shadow-lg'
                      : 'bg-black/40 text-gray-300 border-gray-600 hover:border-gray-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                {skillData[category].icon} {category}
              </button>
          ))}
        </div>

        {/* Current Category */}
        <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center relative z-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {currentData.icon} {selectedCategory}
          </h2>
        </motion.div>

        {/* Rotating Skills Circle */}
        <AnimatePresence mode="wait">
          <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-5xl h-[500px] sm:h-[600px] flex items-center justify-center z-10"
          >
            {/* Central Icon */}
            <div className="absolute rounded-full border border-white/20 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] flex items-center justify-center text-4xl sm:text-5xl text-white shadow-2xl bg-black/60 backdrop-blur-sm">
              {currentData.icon}
            </div>

            {/* Rotating Skills */}
            {currentData.skills.map((skill, index) => {
              const angle = (index / currentData.skills.length) * 2 * Math.PI;
              const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 180 : 220;
              const x = radius * Math.cos(angle + rotation);
              const y = radius * Math.sin(angle + rotation);

              return (
                  <motion.div
                      key={skill.name}
                      className="absolute w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] bg-black/60 backdrop-blur-sm rounded-full text-center flex items-center justify-center flex-col border border-white/20 hover:border-white/40 transition-all duration-300"
                      style={{
                        left: `calc(50% + ${x}px - 60px)`,
                        top: `calc(50% + ${y}px - 60px)`,
                        transform: 'translate3d(0, 0, 0)', // Force hardware acceleration
                      }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        boxShadow: '0 20px 40px rgba(255,255,255,0.1)'
                      }}
                  >
                    {/* Skill Icon */}
                    <div className="text-2xl sm:text-3xl mb-1">{skill.icon}</div>

                    {/* Skill Name */}
                    <div className="text-xs sm:text-sm font-semibold text-white mb-1">{skill.name}</div>

                    {/* Skill Level */}
                    <div className="text-xs text-gray-300 mb-2">{skill.level}%</div>

                    {/* Circular Progress Ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                          cx="50"
                          cy="50"
                          r="47"
                          fill="none"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="1"
                      />
                      <motion.circle
                          cx="50"
                          cy="50"
                          r="47"
                          fill="none"
                          stroke={currentData.color}
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: skill.level / 100 }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1.5 }}
                          style={{
                            strokeDasharray: "295",
                            strokeDashoffset: 295 - (295 * skill.level) / 100,
                            filter: `drop-shadow(0 0 6px ${currentData.color})`
                          }}
                      />
                    </svg>
                  </motion.div>
              );
            })}


          </motion.div>
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-1 space-x-3 relative z-10">
          {categories.map((category) => (
              <div
                  key={category}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${selectedCategory === category ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
              />
          ))}
        </div>
      </div>
  );
};

export default Skill;