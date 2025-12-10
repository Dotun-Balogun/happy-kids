'use client'
import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (scrollTop / docHeight) * 100

      setIsVisible(scrollTop > 100)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className='fixed bottom-6 right-6 w-14 h-14 z-[80] flex items-center justify-center 
                     bg-gradient-to-br from-primary to-secondary text-white rounded-full 
                     shadow-2xl hover:shadow-primary/50 transition-all duration-300 group'
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ 
            type: 'spring', 
            stiffness: 260, 
            damping: 20 
          }}
        >
          <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          
          {/* Circular Progress Ring */}
          <svg
            className="absolute inset-0 -rotate-90 w-full h-full"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 42}`}
              strokeDashoffset={`${2 * Math.PI * 42 * (1 - scrollProgress / 100)}`}
              className="transition-all duration-300"
              opacity="0.4"
            />
          </svg>

          {/* Sparkle effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ 
              scale: [0, 1.5, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
