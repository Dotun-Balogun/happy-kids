"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import ButtonImage1 from "@/app/assets/images/slide2-100x50.jpg";
import ButtonImage2 from "@/app/assets/images/slider-31-100x50.jpg";
import Slide_1 from "./Slide_1";
import Slide_2 from "./Slide_2";
import Image from "next/image";
import WaveDivider from "@/components/WaveDivider";

const slides = [Slide_1, Slide_2];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); 
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      next();
    }, 5000); 

    return () => clearInterval(interval);
  }, [index, isPlaying]);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % slides.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  const goToSlide = (slideIndex: number) => {
    setDirection(slideIndex > index ? 1 : -1);
    setIndex(slideIndex);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const CurrentSlide = slides[index];

  // Slide animation variants
  const slideVariants:Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
      scale: 1
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1]
      }
    })
  };

  return (
    <div className="relative w-full h-[70vh] lg:h-screen  overflow-hidde ">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} >
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <CurrentSlide />

        </motion.div>

      </AnimatePresence>
       <WaveDivider 
        position="bottom" 
        color="#ffffff" 
        className="h-[60px] md:h-[100px] lg:h-[120px] absolute bottom-0 left-0 w-full" 
      />

      {/* Navigation Buttons */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Previous Button */}
        <motion.button
          onClick={prev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 
                     bg-white/80 hover:bg-white text-primary 
                     w-12 h-12 md:w-14 md:h-14 rounded-full 
                      items-center justify-center hidden
                     lg:flex
                     shadow-lg hover:shadow-xl
                     transition-all duration-300
                     pointer-events-auto
                     backdrop-blur-sm
                     group overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Default Icon */}
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 absolute transition-all duration-300 group-hover:opacity-0 group-hover:scale-50" />
          
          {/* Image on Hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center"
            initial={{ scale: 0.5, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={ButtonImage1} 
              alt="Previous slide preview" 
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </motion.button>

        {/* Next Button */}
        <motion.button
          onClick={next}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 
                     bg-white/80 hover:bg-white text-primary 
                     w-12 h-12 md:w-14 md:h-14 rounded-full hidden
                     lg:flex items-center justify-center
                     shadow-lg hover:shadow-xl
                     transition-all duration-300
                     pointer-events-auto
                     backdrop-blur-sm
                     group overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ChevronRight className=" w-6 h-6 md:w-7 md:h-7 absolute transition-all duration-300 group-hover:opacity-0 group-hover:scale-50" />
          
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center"
            initial={{ scale: 0.5, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={ButtonImage2} 
              alt="Next slide preview" 
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </motion.button>
      </div>

      {/* Pagination Dots */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {slides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => goToSlide(i)}
            className={`relative h-2 rounded-full transition-all duration-300 
                       ${i === index 
                         ? 'w-12 bg-primary' 
                         : 'w-8 bg-white/50 hover:bg-white/80'
                       }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Active indicator animation */}
            {i === index && (
              <motion.div
                className="absolute inset-0 bg-secondary rounded-full"
                layoutId="activeSlide"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Play/Pause Button */}
      <motion.button
        onClick={togglePlayPause}
        className="absolute bottom-8 right-8 
                   bg-white/80 hover:bg-white text-primary 
                   w-10 h-10 md:w-12 md:h-12 rounded-full hidden
                   lg:flex items-center justify-center
                   shadow-lg hover:shadow-xl
                   transition-all duration-300
                   z-30
                   backdrop-blur-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <Play className="w-5 h-5 md:w-6 md:h-6 ml-0.5" />
        )}
      </motion.button>

      {/* Progress Bar (Auto-play indicator) */}
      {isPlaying && (
        <motion.div 
          className="absolute top-0 left-0 h-1 bg-primary/50 z-30"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity
          }}
          key={index} 
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
        </motion.div>
      )}

      <motion.div
        className="absolute bottom-8 left-8 text-white/60 text-sm hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Use arrow keys to navigate
      </motion.div>

    </div>
  );
};

export default Hero;