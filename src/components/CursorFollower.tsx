import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-4 h-4 rounded-full border border-foreground pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed w-1 h-1 rounded-full bg-foreground pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
      />
    </>
  );
};

export default CursorFollower;
