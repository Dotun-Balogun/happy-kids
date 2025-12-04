'use client'

import React, { ComponentType } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon } from 'lucide-react'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

type NavLinkProps = {
  id: number
  title?: string
  icon?: ComponentType<{ size?: number }>
  href: string
}

type NavItemsProps = {
  handleLinkClick: () => void
  isOpen: boolean
}

const NavLink = ({ handleLinkClick, isOpen }: NavItemsProps) => {
  const pathname = usePathname()

  const navLinks: NavLinkProps[] = [
    { id: 1, title: '', icon: HomeIcon, href: '/' },
    { id: 2, title: 'About', href: '/about' },
    { id: 3, title: 'Gallery', href: '/gallery' },
    { id: 4, title: 'Programs', href: '/programs' },
    { id: 5, title: 'Event', href: '/events' },
    { id: 6, title: 'Blog', href: '/blog' },
    { id: 7, title: 'Faqs', href: '/faqs' },
    { id: 8, title: 'Contact', href: '/contact' }
  ]

  return (
    <div className="flex flex-col font-concert-one lg:flex-row lg:items-center px-4 space-y-4 md:space-y-0 md:space-x-4">
      <div className="lg:hidden w-[200px] h-[58px] lg:w-[300px] lg:h-[86px]">
        <Image src={logo} alt="Happy Kids Logo" width={300} height={86} />
      </div>

      {navLinks.map((link) => {
        const Icon = link.icon
        const isActive = pathname === link.href || 
          (pathname.startsWith(link.href) && link.href !== '/')

        return (
          <Link
            key={link.id}
            href={link.href}
            onClick={handleLinkClick}
            className="group relative font-concert-one font-bold flex items-center transition-all duration-300"
          >
            {/* Mobile Styles */}
            <div className="lg:hidden relative w-full">
              <motion.div
                className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'bg-secondary text-primary' 
                    : 'text-white hover:bg-secondary/20 hover:text-primary'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {Icon && (
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isActive ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={18} />
                  </motion.div>
                )}
                <span className="text-base">{link.title}</span>
              </motion.div>

              {/* Mobile active indicator - Left border */}
              {isActive && (
                <motion.div
                  layoutId="mobile-active-indicator"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                />
              )}
            </div>

            {/* Desktop Styles */}
            <div className="hidden lg:flex relative items-center space-x-2 px-3 py-2">
              {Icon && (
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon 
                    size={18} 
                   
                  />
                </motion.div>
              )}
              <span 
                className={`text-base ${
                  isActive 
                    ? 'text-primary' 
                    : 'text-[#0000009E] group-hover:text-primary'
                } transition-colors duration-300`}
              >
                {link.title}
              </span>

              {/* Desktop Underline Animation - Sliding from left to right */}
              <motion.div
                className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ 
                  width: isActive ? '100%' : 0,
                  opacity: isActive ? 1 : 0
                }}
                whileHover={{ 
                  width: '100%',
                  opacity: 1,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* Desktop Background Highlight on Active */}
              {isActive && (
                <motion.div
                  layoutId="desktop-active-bg"
                  className="absolute inset-0 bg-secondary/30 rounded-lg -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                />
              )}

              {/* Desktop Hover Background */}
              <div className="absolute inset-0 bg-secondary/20 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Desktop Floating Dot Indicator (Optional Cool Effect) */}
            {isActive && (
              <motion.div
                className="hidden lg:block absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
            )}
          </Link>
        )
      })}
    </div>
  )
}

export default NavLink