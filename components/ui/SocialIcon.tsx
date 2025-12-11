'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaPinterestP, 
  FaYoutube 
} from 'react-icons/fa'
import { SocialPlatform } from '@/app/data/membersData'

interface SocialIconProps {
  platform: SocialPlatform
  url: string
}

// Official brand colors
const socialConfig = {
  facebook: {
    icon: FaFacebookF,
    color: '#1877F2',
    hoverColor: '#1565D8',
    label: 'Facebook'
  },
  twitter: {
    icon: FaTwitter,
    color: '#1DA1F2',
    hoverColor: '#1A8CD8',
    label: 'Twitter'
  },
  linkedin: {
    icon: FaLinkedinIn,
    color: '#0A66C2',
    hoverColor: '#004182',
    label: 'LinkedIn'
  },
  instagram: {
    icon: FaInstagram,
    color: '#E4405F',
    hoverColor: '#D62976',
    label: 'Instagram'
  },
  pinterest: {
    icon: FaPinterestP,
    color: '#E60023',
    hoverColor: '#BD081C',
    label: 'Pinterest'
  },
  youtube: {
    icon: FaYoutube,
    color: '#FF0000',
    hoverColor: '#CC0000',
    label: 'YouTube'
  }
}

const SocialIcon = ({ platform, url }: SocialIconProps) => {
  const config = socialConfig[platform]
  const Icon = config.icon

  return (
    <motion.div
      whileHover={{ scale: 1.15, y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Link 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className='group relative w-10 h-10 flex items-center justify-center rounded-full bg-white hover:shadow-lg transition-all duration-300'
        aria-label={`Visit ${config.label}`}
      >
        <Icon 
          className="w-4 h-4 transition-colors duration-300" 
          style={{ color: config.color }}
        />
        
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{ backgroundColor: config.color }}
        />
      </Link>
    </motion.div>
  )
}

export default SocialIcon
