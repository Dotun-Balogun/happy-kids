'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

interface FloatingContactButtonsProps {
  whatsappNumber?: string
  email?: string
}

const FloatingContactButtons = ({ 
  whatsappNumber = '08138662406',
  email = 'info@happykids.com' 
}: FloatingContactButtonsProps) => {
  return (
    <motion.div
      className="fixed bottom-24 right-6 z-70 flex flex-col gap-3"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 bg-green-500 text-white rounded-full 
                   flex items-center justify-center shadow-lg hover:shadow-green-500/50 
                   transition-all duration-300 group"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
        
        {/* Tooltip */}
        <span className="absolute right-14 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg 
                       opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </motion.a>

      {/* Email Button */}
      <motion.a
        href={`mailto:${email}`}
        className="relative w-12 h-12 bg-blue-500 text-white rounded-full 
                   flex items-center justify-center shadow-lg hover:shadow-blue-500/50 
                   transition-all duration-300 group"
        whileHover={{ scale: 1.15, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Send us an email"
      >
        <FaEnvelope className="w-5 h-5" />
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20" />
        
        {/* Tooltip */}
        <span className="absolute right-14 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg 
                       opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Email us
        </span>
      </motion.a>
    </motion.div>
  )
}

export default FloatingContactButtons
