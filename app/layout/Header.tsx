'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Menu, X } from 'lucide-react'
import logo from '../../public/logo.png'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className=" font-concert-one relative bg-white/40  z-50">
      <div className="container  mx-auto px-4 flex items-center flex flex-row items-cente justify-between w-full">
         
        <Link href={'/'} className="w-[200px] h-[58px] lg:w-[300px] lg:h-[86px]">
          <Image src={logo} alt="Happy Kids Logo" width={300} height={86} />
        </Link>

        <div className="hidden lg:flex">
          <NavLink handleLinkClick={() => {}} isOpen={false} />
            <Button className='rounded-full text-white hover:bg-white border-2 transition ease-in-out duration-300 border-dotted border-primary hover:text-primary'> Kids Store</Button>
        </div>

        <button onClick={toggleMenu} className="lg:hidden p-2 bg-primary text-secondary rounded">
          {isOpen ? <X /> : <Menu />}
        </button>
 
        {isOpen && (
          <div className="h-screen w-full lg:hidden absolute top-0 left-0">
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
