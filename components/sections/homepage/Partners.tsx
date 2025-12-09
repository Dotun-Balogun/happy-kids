import React from 'react'
import logo1 from '@/app/assets/images/l1.jpg'
import logo2 from '@/app/assets/images/l5.jpg'
import logo3 from '@/app/assets/images/l6.jpg'
import logo4 from '@/app/assets/images/l8.jpg'

import Image from 'next/image'

const Partners = () => {
    const partners = [
        { id: 1, src: logo1, alt: 'Partner 1' },
        { id: 2, src: logo2, alt: 'Partner 2' },
        { id: 3, src: logo3, alt: 'Partner 3' },
        { id: 4, src: logo4, alt: 'Partner 4' },
    ]
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 '>
        {partners.map((partner) => (
          <div key={partner.id} className='flex items-center justify-center'>
            <Image
              src={partner.src}
              alt={partner.alt}
              className='max-h-16 object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners