// src/components/FadeInSection.js
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FadeInSection = ({ children, delay = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // allow repeated animation
    margin: "-100px 0px", // triggers just before section enters view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
