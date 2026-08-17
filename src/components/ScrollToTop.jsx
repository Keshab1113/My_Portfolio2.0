import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past 400px, hide otherwise
      setVisible(window.scrollY > 400);
    };

    handleScroll(); // initialize on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full grid place-items-center
                  bg-gradient-to-br from-cyan-400 to-violet-500 text-ink-950
                  shadow-glow-cyan ring-1 ring-white/10
                  transition-all duration-300 ease-out
                  hover:scale-110 hover:shadow-lg active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-cyan-400/60
                  ${visible
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <FiArrowUp size={20} strokeWidth={2.5} />
      <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-100 transition-opacity"></span>
    </button>
  );
};

export default ScrollToTop;
