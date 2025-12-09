'use client'

import Image from 'next/image'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import slidebackground from '@/app/assets/images/slider-1.jpg'
import Header from '@/app/layout/Header'

const Slide_1 = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delayChildren: 0.3,
        staggerChildren: 0.15,
      }
    }
  }

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const subheadingVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const imageVariants: Variants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  }

  const heading = "Every Child Has the Right to be Happy"
  const words = heading.split(" ")

  return (
    <section className="w-full relative h-[70vh] lg:h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={slidebackground}
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="absolute top-0 left-0 right-0 z-800">
        <Header variant="absolute"  />
      </div>

      <div className="relative z-10 h-full container mx-auto px-4 flex items-start py-30 md:items-center">
        <motion.div
          className="max-w-[300px] w-[200px]  md:max-w-2xl lg:w-md"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* STAGGERED HEADING */}
          <h1 className="text-primary font-bold text-[22px] md:text-[30px] lg:text-[50px] leading-tight mb-4 flex flex-wrap">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* SUBHEADING */}
          <motion.h3
            className="text-black text-[14px] md:text-[20px] lg:text-[24px] font-medium"
            variants={subheadingVariants}
          >
            Children's World is a World of Happiness
          </motion.h3>

          {/* LINE ANIMATION */}
          <motion.div
            className="mt-6 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Slide_1