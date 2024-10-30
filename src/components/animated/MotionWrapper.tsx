// MotionWrapper.tsx
"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

// Function to define fadeIn from left animation
const fadeInFromLeft = () => ({
  hidden: {
    opacity: 0,
    x: -50, // Start from the left
  },
  show: {
    opacity: 1,
    x: 0, // Move to original position
    transition: {
      duration: 0.5, // Duration for the showing transition
    },
  },
});

interface MotionWrapperProps {
  children: ReactNode;
  className?: string; // Optional for additional styling
}

// MotionWrapper component
const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      variants={fadeInFromLeft()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} // Set to false for reanimation
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
