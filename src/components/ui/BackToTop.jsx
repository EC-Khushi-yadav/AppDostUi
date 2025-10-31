import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './AppIcon';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Simple throttle function - moved inside useEffect to be defined before use
    const throttle = (func, limit) => {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func?.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    };

    const toggleVisibility = () => {
      const scrolled = document.documentElement?.scrollTop;
      const maxHeight = document.documentElement?.scrollHeight - document.documentElement?.clientHeight;
      const progress = (scrolled / maxHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    const throttledToggleVisibility = throttle(toggleVisibility, 100);
    window.addEventListener('scroll', throttledToggleVisibility);

    return () => window.removeEventListener('scroll', throttledToggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20 
          }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            className="relative group w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              y: -2
            }}
            whileTap={{ 
              scale: 0.9,
              rotate: -5
            }}
            aria-label="Scroll to top"
            title="Back to Top"
          >
            {/* Progress Ring */}
            <svg 
              className="absolute inset-0 w-full h-full transform -rotate-90" 
              viewBox="0 0 56 56"
            >
              <circle
                cx="28"
                cy="28"
                r="26"
                fill="none"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="2"
              />
              <circle
                cx="28"
                cy="28"
                r="26"
                fill="none"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="2"
                strokeDasharray={`${2 * Math.PI * 26}`}
                strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
                className="transition-all duration-300 ease-out"
                strokeLinecap="round"
              />
            </svg>

            {/* Arrow Icon */}
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Icon 
                name="ArrowUp" 
                size={24} 
                className="relative z-10 group-hover:scale-110 transition-transform duration-200" 
              />
            </motion.div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md"></div>
            
            {/* Ripple Effect on Click */}
            <motion.div
              className="absolute inset-0 bg-white rounded-full opacity-20"
              initial={{ scale: 0, opacity: 0 }}
              whileTap={{ 
                scale: [0, 1.2, 0], 
                opacity: [0, 0.3, 0] 
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>

          {/* Floating Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
          >
            Back to Top
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent border-l-gray-900 dark:border-l-gray-700"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;