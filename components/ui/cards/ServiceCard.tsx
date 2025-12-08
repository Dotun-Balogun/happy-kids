'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Service } from '@/app/data/Service'

interface ServiceCardProps {
  service: Service
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className='w-full max-w-[350px] sm:max-w-[380px] md:max-w-[400px] lg:max-w-[420px] 
                 min-h-[500px] sm:min-h-[550px] md:min-h-[600px] 
                 flex flex-col justify-center gap-4 px-4 mx-auto'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Image Circle Container */}
      <motion.div 
        className='relative w-[280px] h-[280px] 
                   sm:w-[320px] sm:h-[320px] 
                   md:w-[332px] md:h-[332px] 
                   lg:w-[395px] lg:h-[395px] 
                   rounded-full p-2 border-2 border-dotted border-primary
                   mx-auto overflow-hidde cursor-pointer'
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTapStart={() => setIsHovered(true)}
        onTap={() => setTimeout(() => setIsHovered(false), 2000)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image with zoom effect */}
        <motion.div
          className='relative w-full h-full rounded-full overflow-hidden'
          animate={{ 
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image 
            src={service.image} 
            alt={`${service.title}${service.highlightText} service`} 
            fill
            className='object-cover rounded-full'
            sizes='(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 332px, 395px'
          />
        </motion.div>

        {/* Floating Tag */}
        <motion.div 
          className='absolute left-1/2 bg-white bg-opacity-90 backdrop-blur-sm 
                     px-4 py-2 sm:px-6 sm:py-3 rounded-[30px] text-center 
                     w-[80%] shadow-lg'
          initial={{ bottom: -4, x: '-50%' }}
          animate={{ 
            bottom: isHovered ? '50%' : -4,
            y: isHovered ? '50%' : 0,
            x: '-50%',
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ 
            duration: 0.5, 
            ease: [0.34, 1.56, 0.64, 1] 
          }}
        >
          <h2 className='text-xl sm:text-2xl md:text-3xl font-bold font-concert-one'>
            {service.title}
            <span className='text-primary'>{service.highlightText}</span>
          </h2>
        </motion.div>
      </motion.div>

      {/* Description */}
      <motion.div 
        className='p-4 sm:p-6 md:p-[30px]'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p className='text-center text-sm sm:text-base md:text-[18px] leading-relaxed text-gray-700'>
          {service.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default ServiceCard
