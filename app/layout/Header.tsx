'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Menu, X } from 'lucide-react'
import logo from '../../public/logo.png'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type HeaderProps = {
  variant?: 'absolute' | 'relative' | 'fixed' | 'sticky'
  transparent?: boolean
  className?: string
}

const Header = ({ 
  variant = 'relative', 
  transparent = false,
  className = '' 
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  // Position classes based on variant
  const positionClasses = {
    absolute: 'absolute top-0 left-0 right-0',
    relative: 'relative',
    fixed: 'fixed top-0 left-0 right-0',
    sticky: 'sticky top-0'
  }

  // Background classes based on transparent prop
  const bgClasses = transparent 
    ? 'bg-transparent' 
    : 'bg-white/40 backdrop-blur-sm'

  return (
    <header 
      className={`
        font-concert-one 
        ${positionClasses[variant]} 
        ${bgClasses}
        z-50
        w-full
        ${className}
      `}
    >
      <div className="container mx-auto px-4 flex items-center justify-between w-full py-2 lg:py-4">
         
        <Link href={'/'} className="flex-shrink-0">
          <Image 
            src={logo} 
            alt="Happy Kids Logo" 
            width={300} 
            height={86}
            className="w-[150px] h-auto lg:w-[250px]"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-4">
          <NavLink handleLinkClick={() => {}} isOpen={false} />
          <Button className='rounded-full text-white hover:bg-white border-2 transition ease-in-out duration-300 border-dotted border-primary hover:text-primary'>
            Kids Store
          </Button>
        </div>

        <button 
          onClick={toggleMenu} 
          className="lg:hidden p-2 bg-primary text-secondary rounded"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
 
        {isOpen && (
          <div className="h-screen w-full lg:hidden fixed top-0 left-0 z-[100]">
            <div
              className="absolute inset-0 bg-black opacity-40"
              onClick={toggleMenu}
            ></div>

            <div className="absolute left-0 top-0 w-[80%] h-full bg-primary py-10 z-50">
              <NavLink handleLinkClick={toggleMenu} isOpen={isOpen} />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header