'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ClassItem } from '@/app/data/classes'

interface ClassCardProps {
  classItem: ClassItem
}

const ClassCard = ({ classItem }: ClassCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  // Background color mapping
  const bgColors = {
    yellow: 'bg-[#FFF4CC]',
    pink: 'bg-[#FFE5E5]',
    white: 'bg-white',
    purple: 'bg-[#E8E5FF]'
  }

  // Hover background colors
  const hoverBgColors = {
    yellow: 'hover:bg-white',
    pink: 'hover:bg-white',
    white: 'hover:bg-[#FFF4CC]',
    purple: 'hover:bg-white'
  }

  return (
    <motion.div
      className={`
        ${bgColors[classItem.bgColor]} 
        ${hoverBgColors[classItem.bgColor]}
        max-w-[340px] w-full h-[289px] 
        lg:max-w-[290px] lg:h-[305px]
        p-6 rounded-[30px] 
        flex flex-col gap-4
        cursor-pointer
        transition-colors duration-300
        shadow-md hover:shadow-xl
        border-2 border-transparent hover:border-primary/20
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsHovered(true)}
      onTap={() => setTimeout(() => setIsHovered(false), 300)}
    >
      {/* Icon */}
      <motion.div 
        className='w-16 h-16'
        animate={{
          rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ 
          duration: 0.5,
          ease: 'easeInOut'
        }}
      >
        <Image 
          src={classItem.icon} 
          alt={`${classItem.title} ${classItem.highlightText} icon`} 
          width={64} 
          height={64}
          className='object-contain'
        />
      </motion.div>

      {/* Content */}
      <div className='flex flex-col gap-3 mt-2'>
        {/* Title */}
        <motion.h3 
          className='text-[26px] lg:text-[30px] font-bold font-concert-one leading-tight'
          animate={{
            x: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {classItem.title}{' '}
          <span className='text-primary'>{classItem.highlightText}</span>
        </motion.h3>

        {/* Description */}
        <motion.p 
          className='text-[14px] lg:text-[16px] text-[#666666] leading-relaxed'
          animate={{
            opacity: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
        >
          {classItem.description}
        </motion.p>
      </div>

      {/* Animated border on hover */}
      <motion.div
        className='absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary to-secondary rounded-b-[30px]'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  )
}

export default ClassCard
