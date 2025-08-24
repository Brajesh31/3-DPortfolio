import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import {
  SiAdobephotoshop,
  SiBit,
  SiBlender,
  SiCircleci, SiCloudinary,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFramer,
  SiGit,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSketchfab,
  SiSocketdotio,
  SiTailwindcss,
  SiVercel,
  SiVite,
  SiWebgl,
  SiWebpack,
  SiPython,
  SiDjango,
  SiFlask,
  SiAngular,
  SiVuedotjs,
  SiGo,
} from 'react-icons/si';

import { DiAws, DiVisualstudio } from 'react-icons/di';
import { FaCube, FaServer, FaWaveSquare, FaBrain, FaDatabase } from 'react-icons/fa';

import CardSwap, { Card } from './CardSwap';
import FlowingMenu from './FlowingMenu';
import RotatingText from './RotatingText';

const About = () => {
  const textRef = useRef(null);
  const desRef = useRef(null);
  const imageRef2 = useRef(null);
  const stackRef = useRef(null);
  const servicesRef = useRef(null);

  // Stack data REORDERED AND UPDATED for AI Engineer profile
  const stackCategories = [
    {
      name: 'AI & Machine Learning',
      items: [
        { text: 'TensorFlow', icon: FaBrain },
        { text: 'OpenCV', icon: FaBrain },
        { text: 'NLP', icon: FaBrain },
        { text: 'Deep Learning', icon: FaBrain },
        { text: 'GANs', icon: FaBrain },
        { text: 'Scikit-learn', icon: SiPython },
        { text: 'Pandas', icon: SiPython },
      ]
    },
    {
      name: 'Backend',
      items: [
        { text: 'Python', icon: SiPython },
        { text: 'Django', icon: SiDjango },
        { text: 'Flask', icon: SiFlask },
        { text: 'Node.js', icon: SiNodedotjs },
        { text: 'Go (Golang)', icon: SiGo },
        { text: 'Express', icon: SiExpress },
        { text: 'RESTful APIs', icon: FaServer }
      ]
    },
    {
      name: 'Frontend',
      items: [
        { text: 'React', icon: SiReact },
        { text: 'Angular', icon: SiAngular },
        { text: 'Vue.js', icon: SiVuedotjs },
        { text: 'Tailwind CSS', icon: SiTailwindcss },
        { text: 'HTML5', icon: SiHtml5 },
        { text: 'CSS3', icon: SiCss3 }
      ]
    },
    {
      name: 'Database',
      items: [
        { text: 'PostgreSQL', icon: SiPostgresql },
        { text: 'MongoDB', icon: SiMongodb },
        { text: 'MySQL', icon: SiMysql },
        { text: 'SQL Server', icon: FaDatabase }
      ]
    },
    {
      name: 'Cloud & MLOps',
      items: [
        { text: 'AWS', icon: DiAws },
        { text: 'Docker', icon: SiDocker },
        { text: 'CI/CD', icon: SiCircleci },
        { text: 'Jenkins', icon: FaServer },
        { text: 'Vercel', icon: SiVercel }
      ]
    },
    {
      name: 'Tools & Others',
      items: [
        { text: 'Git', icon: SiGit },
        { text: 'VS Code', icon: DiVisualstudio },
        { text: 'Figma', icon: SiFigma },
        { text: 'Postman', icon: SiPostman },
        { text: 'JIRA', icon: FaServer },
        { text: 'Agile', icon: FaServer }
      ]
    }
  ];

  const [activeStack, setActiveStack] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 20%",
        toggleActions: "play",
      }
    });

    // Animate About heading
    tl.fromTo(textRef.current, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: 'power2.out',
    });

    // Animate Description Block
    tl.fromTo(desRef.current, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    });

    // Animate Stack Section
    tl.fromTo(stackRef.current, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    }, "-=0.5");

    // Animate Services Section
    tl.fromTo(servicesRef.current, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    }, "-=0.5");

    // Animate floating image
    tl.fromTo(imageRef2.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: 'power2.out',
        },
        "<"
    );

    // Continuous floating animation
    gsap.to(imageRef2.current, {
      y: '-=15',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Auto-rotate stack categories
    const stackInterval = setInterval(() => {
      setActiveStack((prev) => (prev + 1) % stackCategories.length);
    }, 4000);

    return () => {
      clearInterval(stackInterval);
    };
  }, []);

  return (
      <div
          id="about"
          className="relative bg-black w-full min-h-screen overflow-hidden px-4 pt-24 scroll-mt-24"
      >
        {/* Heading Section - UPDATED WITH YOUR DATA */}
        <div className="flex flex-row justify-center items-center mb-10 space-y-4">
          <p ref={textRef} className="text-white text-4xl sm:text-5xl md:text-7xl font-bold">
            <pre>About </pre>
          </p>
          <RotatingText
              texts={['Me', 'AI Engineer', 'ML Developer', 'Python Developer', 'Data Scientist']}
              mainClassName="px-2 sm:px-4 md:px-6 bg-cyan-300 text-black overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-lg text-3xl sm:text-4xl md:text-6xl font-bold"
              staggerFrom="end"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
          />
        </div>

        {/* Description Box - UPDATED WITH YOUR DATA */}
        <div className="flex justify-center items-center">
          <div
              ref={desRef}
              className="relative text-white text-center text-base sm:text-xl md:text-2xl lg:text-3xl px-4 py-14 sm:py-20 w-full max-w-5xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-md mt-10"
          >
            <p className="mb-4">I am an AI Engineer passionate about developing end-to-end intelligent applications that solve complex problems.</p>
            <p className="mb-4">My expertise lies in implementing machine learning models, from NLP-driven chatbots to computer vision systems, and integrating them into robust full-stack platforms.</p>
            <p>I am driven by a desire to innovate and contribute to the tech community, transforming ideas into scalable, data-driven solutions.</p>
          </div>
        </div>

        {/* Flowing Tech Stack Section */}
        <div ref={stackRef} className="mt-20 mb-20">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="text-cyan-300">Tech Stack</span>
          </h2>

          {/* Stack Categories Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {stackCategories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => setActiveStack(index)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeStack === index
                        ? 'bg-cyan-300 text-black shadow-lg shadow-cyan-300/50'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                >
                  {category.name}
                </button>
            ))}
          </div>

          {/* FlowingMenu for Stack Items */}
          <div className="max-w-6xl mx-auto">
            <div style={{ height: '600px', position: 'relative' }}>
              <FlowingMenu items={stackCategories[activeStack].items} />
            </div>
          </div>
        </div>

        {/* Services Section with CardSwap - UPDATED WITH YOUR DATA */}
        <div ref={servicesRef} className="mt-20 pb-20">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="text-cyan-300">Services</span>
          </h2>

          <div className="max-w-4xl mx-auto">

            <div className="relative min-h-[400px] sm:min-h-[600px]">

              <CardSwap
                  cardDistance={60}
                  verticalDistance={70}
                  delay={500}
                  pauseOnHover={false}
              >
                {/* AI & Machine Learning Development */}
                <Card>
                  <div className="p-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl h-full">
                    <div className="text-4xl mb-4"><img src='ai-dev-logo.png' className="w-60 h-26" alt="AI Development Logo" /></div>
                    <h3 className="text-white text-3xl font-bold mb-4 text-cyan-300">
                      AI & Machine Learning
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      I build and implement intelligent systems, from custom AI assistants and NLP chatbots to advanced computer vision and deep learning models.
                    </p>
                    <div className="space-y-2">
                      {[
                        'Natural Language Processing (NLP) solutions',
                        'Real-time computer vision (e.g., Face Recognition)',
                        'Deep Learning models (GANs, Diffusion Models)',
                        'End-to-end ML model integration'
                      ].map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-400">
                            <div className="w-1 h-1 bg-cyan-300 rounded-full mr-2"></div>
                            {feature}
                          </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Full-Stack AI Integration */}
                <Card>
                  <div className="p-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl h-full">
                    <div className="text-6xl mb-4">⚙️</div>
                    <h3 className="text-white text-3xl font-bold mb-4 text-cyan-300">
                      Full-Stack AI Integration
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      I develop the full application stack to support AI models, creating intuitive user interfaces and scalable backend APIs to serve predictions.
                    </p>
                    <div className="space-y-2">
                      {[
                        'React frontends for model interaction',
                        'Python (Django/Flask) APIs for ML services',
                        'Real-time data handling with WebSockets',
                        'Secure authentication with JWT'
                      ].map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-400">
                            <div className="w-1 h-1 bg-cyan-300 rounded-full mr-2"></div>
                            {feature}
                          </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Cloud & MLOps */}
                <Card>
                  <div className="p-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl h-full">
                    <div className="text-5xl mb-4">☁️</div>
                    <h3 className="text-white text-3xl font-bold mb-4 text-cyan-300">
                      Cloud & MLOps
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      I deploy, manage, and scale machine learning models in the cloud using modern DevOps and MLOps practices for reliability and efficiency.
                    </p>
                    <div className="space-y-2">
                      {[
                        'Model deployment on AWS services',
                        'Containerization with Docker',
                        'Automated CI/CD pipelines for ML workflows',
                        'IoT integration for data collection'
                      ].map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-400">
                            <div className="w-1 h-1 bg-cyan-300 rounded-full mr-2"></div>
                            {feature}
                          </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Data Engineering & Processing */}
                <Card>
                  <div className="p-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl h-full">
                    <div className="text-5xl mb-4">📊</div>
                    <h3 className="text-white text-3xl font-bold mb-4 text-cyan-300">
                      Data Engineering
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      I design and build data pipelines, manage databases, and process large datasets to prepare them for machine learning models and analytics.
                    </p>
                    <div className="space-y-2">
                      {[
                        'Data processing with Python (Pandas)',
                        'Database management (PostgreSQL, MongoDB)',
                        'Data collection from APIs and IoT sensors',
                        'CRUD operations and ORM implementation'
                      ].map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-400">
                            <div className="w-1 h-1 bg-cyan-300 rounded-full mr-2"></div>
                            {feature}
                          </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </CardSwap>

            </div>
          </div>
        </div>

        {/* Floating Image */}
        <img
            ref={imageRef2}
            src="brajesh-about-graphic.webp"
            alt="Brajesh Kumar Graphic"
            className="absolute w-20 sm:w-38 md:w-52 lg:w-76 object-contain rounded-xl drop-shadow-[0_0_5px_#00ffff] top-[25%] left-[4%] md:left-[6%] lg:left-[0%]"
        />
      </div>
  );
};

export default About;