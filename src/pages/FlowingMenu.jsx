import React, { useEffect, useRef } from 'react';

// Mock GSAP for demonstration - replace with actual GSAP import
const gsap = {
  timeline: (options = {}) => ({
    set: (element, props) => {
      if (element && element.style) {
        Object.assign(element.style, {
          transform: props.y ? `translateY(${props.y})` : element.style.transform || ''
        });
      }
      return gsap.timeline(options);
    },
    to: (elements, props) => {
      const elementArray = Array.isArray(elements) ? elements : [elements];
      elementArray.forEach(element => {
        if (element && element.style) {
          Object.assign(element.style, {
            transform: props.y ? `translateY(${props.y})` : element.style.transform || '',
            transition: 'transform 0.6s ease-out'
          });
        }
      });
      return gsap.timeline(options);
    }
  })
};

function FlowingMenu({ items = [] }) {
  // Sample data if no items provided
  const defaultItems = [
    { link: '#', text: 'React', image: 'https://picsum.photos/200/100?random=1' },
    { link: '#', text: 'Next.js', image: 'https://picsum.photos/200/100?random=2' },
    { link: '#', text: 'Vue.js', image: 'https://picsum.photos/200/100?random=3' },
    { link: '#', text: 'TypeScript', image: 'https://picsum.photos/200/100?random=4' },
    { link: '#', text: 'Node.js', image: 'https://picsum.photos/200/100?random=5' },
    { link: '#', text: 'MongoDB', image: 'https://picsum.photos/200/100?random=6' }
  ];

  const menuItems = items.length > 0 ? items : defaultItems;


  return (
    <div className="w-full h-full overflow-hidden bg-black">
      <nav className="flex flex-col h-full">
        {menuItems.map((item, idx) => (
          <MenuItem key={idx} {...item} index={idx} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, icon, index }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  useEffect(() => {
    // Auto-start animation with staggered delay
    const startAnimation = () => {
      if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

      // Stagger the animation start for each item
      const delay = index * 200;

      setTimeout(() => {
        gsap.timeline({ defaults: animationDefaults })
          .set(marqueeRef.current, { y: '-100%' })
          .set(marqueeInnerRef.current, { y: '100%' })
          .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
      }, delay);
    };

    // Start animation immediately
    startAnimation();



    // Optional: Restart animation periodically
    const interval = setInterval(() => {
      if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

      // Reset and restart
      gsap.timeline({ defaults: animationDefaults })
        .to(marqueeRef.current, { y: '-100%' })
        .to(marqueeInnerRef.current, { y: '100%' })
        .set(marqueeRef.current, { y: '-100%' })
        .set(marqueeInnerRef.current, { y: '100%' })
        .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
    }, 6000 + (index * 1000)); // Stagger restart times

    return () => clearInterval(interval);
  }, [index]);

  const colorClasses = [
    'text-red-500', 'text-green-500', 'text-blue-500',
    'text-yellow-500', 'text-purple-500', 'text-pink-500',
    'text-orange-500', 'text-emerald-500', 'text-cyan-500'
  ];

  const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];


  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-100%' : '100%' })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '100%' : '-100%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-100%' : '100%' })
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '100%' : '-100%' });
  };

  return (
    <div
      className="flex-1 relative overflow-hidden text-center border-b border-white/20 min-h-[80px]"
      ref={itemRef}
    >
      <a
        className="flex items-center justify-center gap-3 h-full relative cursor-pointer no-underline font-semibold text-white text-xl md:text-2xl lg:text-3xl hover:text-gray-900 transition-colors duration-300"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {typeof icon === 'function' && React.createElement(icon, { className: "w-6 h-6" })}
        {text}
      </a>


      {/* Marquee overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-black"
        style={{ transform: 'translateY(100%)' }}
        ref={marqueeRef}
      >
        <div
          className="h-full flex items-center"
          style={{ transform: 'translateY(100%)' }}
          ref={marqueeInnerRef}
        >
          <div className="flex items-center h-full w-full">
            {/* Marquee content */}
            <div className="flex items-center animate-marquee whitespace-nowrap">
              {Array.from({ length: 8 }).map((_, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-3 bg-blue-100 px-4 py-2 rounded-xl shadow-md mx-4">
                    {typeof icon === 'function' && (
                      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm">
                        {React.createElement(icon, { className: `w-8 h-8 ${randomColorClass}` })}
                      </div>
                    )}
                    <span className="text-black font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide">
                      {text}
                    </span>
                  </div>





                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add the CSS for marquee animation
const style = document.createElement('style');
style.textContent = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  .animate-marquee {
    animation: marquee 15s linear infinite;
  }
`;
document.head.appendChild(style);

export default FlowingMenu;