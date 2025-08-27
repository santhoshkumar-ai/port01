"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      setIsVisible(false); // Hide cursor completely when hovering interactive elements
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsVisible(true); // Show cursor when leaving interactive elements
    };

    const handleMouseDown = () => {
      setIsVisible(false);
    };

    const handleMouseUp = () => {
      setIsVisible(true);
    };

    // Add event listeners
    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Target interactive elements
    const targets = document.querySelectorAll("a, button, .cursor-hover, [role='button']");
    
    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Hide cursor when leaving the window
    const handleMouseLeave2 = () => setIsVisible(false);
    const handleMouseEnter2 = () => setIsVisible(true);
    
    document.addEventListener("mouseleave", handleMouseLeave2);
    document.addEventListener("mouseenter", handleMouseEnter2);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave2);
      document.removeEventListener("mouseenter", handleMouseEnter2);
      
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: position.x - 2,
          y: position.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 28,
          mass: 0.1,
        }}
        style={{ willChange: "transform" }}
      >
        <div className="w-1 h-1 bg-black rounded-full" />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none border border-black/20 rounded-full"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 0.8 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 0.2,
        }}
        style={{ 
          width: "32px", 
          height: "32px",
          willChange: "transform" 
        }}
      />
    </>
  );
}