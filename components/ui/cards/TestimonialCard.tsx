'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Testimonial } from '@/app/data/testimonial'

type TestimonialCardProps = {
  testimonial: Testimonial
  index?: number
}

const TestimonialCard = ({ testimonial, index = 0 }: TestimonialCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  // Generate stars based on rating
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.span
        key={i}
        className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 200 }}
        whileHover={{ 
          scale: 1.3, 
          rotate: 360,
          transition: { duration: 0.3 }
        }}
      >
        {i < testimonial.rating ? '★' : '☆'}
      </motion.span>
    ))
  }

  return (
    <motion.div
      className='w-[279px] min-w-[279px] h-[378px] flex flex-col items-center'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: 'easeOut' 
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsHovered(true)}
      onTap={() => setTimeout(() => setIsHovered(false), 300)}
    >
      {/* Message Box */}
      <motion.div
        className='relative w-[250px] h-auto min-h-[151px] rounded-[20px] text-center p-4 shadow-lg'
        style={{ backgroundColor: testimonial.bgColor }}
        animate={{
          scale: isHovered ? 1.05 : 1,
          rotate: isHovered ? [0, -2, 2, 0] : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.p
          className='text-white text-[16px] md:text-[18px] font-medium leading-7'
          animate={{
            scale: isHovered ? 1.02 : 1
          }}
        >
          {testimonial.message}
        </motion.p>

        {/* Speech Bubble Arrow */}
        <motion.div
          className='absolute top-full left-1/2 -translate-x-1/2 h-0 w-0'
          style={{
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            borderTop: `20px solid ${testimonial.bgColor}`,
          }}
          animate={{
            y: isHovered ? 2 : 0
          }}
        />
      </motion.div>

      {/* Profile Section */}
      <div className='flex flex-col items-center mt-6 gap-2'>
        {/* Profile Image */}
        <motion.div
          className='w-[72px] h-[72px] rounded-full mt-4 overflow-hidden border-4 border-white shadow-lg'
          animate={{
            scale: isHovered ? 1.15 : 1,
            rotate: isHovered ? 360 : 0
          }}
          transition={{ 
            duration: 0.5,
            type: 'spring',
            stiffness: 100
          }}
        >
          <Image
            src={testimonial.image}
            alt={`${testimonial.name}'s testimonial`}
            width={72}
            height={72}
            className='w-full h-full object-cover'
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className='text-[18px] font-bold text-gray-800'
          animate={{
            color: isHovered ? testimonial.bgColor : '#1f2937'
          }}
          transition={{ duration: 0.3 }}
        >
          {testimonial.name}
        </motion.h1>

        {/* Role */}
        <motion.h3
          className='text-base font-medium text-gray-600'
          animate={{
            y: isHovered ? -2 : 0
          }}
        >
          {testimonial.role}
        </motion.h3>

        {/* Star Rating */}
        <div className='flex items-center gap-1 mt-1'>
          {renderStars()}
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
