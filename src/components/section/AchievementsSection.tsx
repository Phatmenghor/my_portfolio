"use client";
import React from "react";
import { motion } from "framer-motion";

// Define variants for staggered entrance of items
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Updated Achievements data
const achievementsList = [
  { metric: "Years of Experience", value: "3+" },
  { metric: "Projects Completed", value: "8+" },
  { metric: "Open Source Library", value: "12" },
  { metric: "Happy Customers", value: "10+" },
];

const AchievementsSection = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-[4%] " 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} // Allows reanimation
    >
      {achievementsList.map((achievement, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center justify-center" // Hover effect
          variants={itemVariants} // Individual item animation
          aria-label={`Achievement: ${achievement.metric} - ${achievement.value}`} // Accessibility
        >
          <h2 className="text-white text-4xl font-bold flex flex-row">
            {achievement.value}
          </h2>
          <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AchievementsSection;
