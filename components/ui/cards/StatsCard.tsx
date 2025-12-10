'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

interface StatCardProps {
  stat: StatCard
  index?: number
}

interface StatCard {
  id: number
  number: number
  label: string
  borderColor: string
  badgeColor: string
  suffix?: string
}

const StatCard = ({ stat, index = 0 }: StatCardProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative w-full max-w-[274px] h-[183px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onViewportEnter={() => setIsVisible(true)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {/* Card Container */}
      <motion.div
        className={`
          w-full h-full rounded-3xl border-2 border-dashed ${stat.borderColor}
          bg-white shadow-md hover:shadow-xl
          flex flex-col items-center justify-center
          transition-all duration-300
          relative overflow-hidden
        `}
        animate={{
          borderColor: isHovered ? stat.badgeColor.replace('bg-', 'border-') : ''
        }}
      >
        {/* Animated Background */}
        <motion.div
          className={`absolute inset-0 ${stat.badgeColor} opacity-0`}
          animate={{
            opacity: isHovered ? 0.05 : 0
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 px-6">
          {/* Number with CountUp */}
          <motion.div
            className="text-6xl lg:text-7xl font-bold font-concert-one"
            style={{ 
              color: stat.badgeColor.replace('bg-', '#').replace('-500', '').replace('-400', '')
            }}
            animate={{
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            {isVisible ? (
              <CountUp
                start={0}
                end={stat.number}
                duration={2.5}
                separator=","
                suffix={stat.suffix || ''}
                useEasing={true}
                easingFn={(t, b, c, d) => {
                  return c * (-Math.pow(2, -10 * t / d) + 1) + b
                }}
              />
            ) : (
              '0'
            )}
          </motion.div>

          {/* Badge Label */}
          <motion.div
            className={`
              ${stat.badgeColor} text-white
              px-6 py-2 rounded-full
              text-sm font-semibold
              shadow-lg
            `}
            animate={{
              scale: isHovered ? 1.05 : 1,
              y: isHovered ? -2 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {stat.label}
          </motion.div>
        </div>

        {/* Corner Decoration */}
        <motion.div
          className={`absolute top-2 right-2 w-3 h-3 ${stat.badgeColor} rounded-full`}
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [1, 0.5, 1] : 0.6
          }}
          transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
        />

        <motion.div
          className={`absolute bottom-2 left-2 w-3 h-3 ${stat.badgeColor} rounded-full`}
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [1, 0.5, 1] : 0.6
          }}
          transition={{ duration: 0.6, delay: 0.3, repeat: isHovered ? Infinity : 0 }}
        />

        {/* Sparkle Effect on Hover */}
        {isHovered && (
          <>
            <motion.div
              className=" w-4 h-4 bg-white rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 3, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-4 h-4 bg-white rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 3, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 0.8, delay: 0.3, repeat: Infinity, repeatDelay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 3, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 0.8, delay: 0.6, repeat: Infinity, repeatDelay: 0.5 }}
            />
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

export default StatCard
