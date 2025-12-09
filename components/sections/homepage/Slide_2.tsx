'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import slideImage from '@/app/assets/images/slide2.jpg'
import { fadeIn, slideTop, staggerContainer } from '@/app/styles/animation'
import Header from '@/app/layout/Header'

const Slide_2 = () => {
  return (
    <section className="relative w-full h-[70vh] lg:h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={slideImage}
          alt="Slide 2"
          fill
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute top-0 left-0 right-0 z-900">
        <Header variant="absolute"  />
      </div>

      <div className="relative z-10 h-full flex  mt-30 lg:items-center justify-center px-4">
        <motion.div
          className="max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={slideTop}
            className="text-secondary text-[24px] md:text-[32px] lg:text-[48px] font-bold drop-shadow-lg"
          >
            A Safe & Nurturing Place for Every Child
          </motion.h1>

          <motion.p
            variants={slideTop}
            className="text-secondary mt-4 text-[14px] md:text-[18px] lg:text-[20px] font-medium drop-shadow"
          >
            We inspire confidence, creativity, and happiness in children through
            play-centered learning and compassion.
          </motion.p>

          <motion.div
            variants={slideTop}
            className="mx-auto mt-6 w-32 h-1 bg-secondary rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Slide_2