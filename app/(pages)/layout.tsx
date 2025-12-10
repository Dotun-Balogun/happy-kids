'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../layout/Header'

interface OtherLayoutProps {
  children: React.ReactNode
  containerClass?: string
}

const OtherLayout = ({ 
  children, 
  containerClass = '' 
}: OtherLayoutProps) => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (scrollTop / scrollHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col bg-linear-to-b from-white via-blue-50/30 to-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-linear-to-r from-primary via-secondary to-primary z-100"
        style={{ 
          scaleX: scrollProgress / 100,
          transformOrigin: 'left'
        }}
      />

      {/* Kid-Friendly Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating Flowers */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 opacity-40"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative w-full h-full">
            {/* Flower petals */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-6 h-6 bg-pink-400 rounded-full"
                  style={{
                    transform: `rotate(${i * 72}deg) translateY(-10px)`
                  }}
                />
              ))}
              <div className="absolute w-4 h-4 bg-yellow-400 rounded-full" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-32 right-20 w-12 h-12 opacity-40"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <div className="relative w-full h-full">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-5 h-5 bg-purple-400 rounded-full"
                style={{
                  transform: `rotate(${i * 72}deg) translateY(-8px)`
                }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-400 rounded-full" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20 w-14 h-14 opacity-40"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="relative w-full h-full">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-5 h-5 bg-blue-400 rounded-full"
                style={{
                  transform: `rotate(${i * 60}deg) translateY(-9px)`
                }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-yellow-300 rounded-full" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-32 w-10 h-10 opacity-40"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <div className="relative w-full h-full">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-red-400 rounded-full"
                style={{
                  transform: `rotate(${i * 72}deg) translateY(-7px)`
                }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Colorful Circles */}
        <motion.div
          className="absolute top-1/4 right-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-16 w-24 h-24 bg-pink-300/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Stars */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </motion.div>
        ))}

        {/* Rainbow Arc */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full rounded-bl-full border-8 border-red-400" />
          <div className="absolute top-2 right-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-bl-full border-8 border-orange-400" />
          <div className="absolute top-4 right-4 w-[calc(100%-32px)] h-[calc(100%-32px)] rounded-bl-full border-8 border-yellow-400" />
          <div className="absolute top-6 right-6 w-[calc(100%-48px)] h-[calc(100%-48px)] rounded-bl-full border-8 border-green-400" />
          <div className="absolute top-8 right-8 w-[calc(100%-64px)] h-[calc(100%-64px)] rounded-bl-full border-8 border-blue-400" />
          <div className="absolute top-10 right-10 w-[calc(100%-80px)] h-[calc(100%-80px)] rounded-bl-full border-8 border-purple-400" />
        </div>
      </div>

      {/* Header */}
      <Header variant="sticky" />

      {/* Main Content */}
      <motion.main
        className={`flex-1 relative z-10 ${containerClass}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.main>
    </div>
  )
}

export default OtherLayout
