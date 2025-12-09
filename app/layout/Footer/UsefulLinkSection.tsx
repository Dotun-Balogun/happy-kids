// UsefulLinks Component
import { ArrowRight, Mail, Check } from 'lucide-react'

export default function UsefulLinksSection(){
  const links = [
    { name: 'Purchase', href: '#' },
    { name: 'Support Center', href: '#' },
    { name: 'Online Documentation', href: '#' },
    { name: 'About Kindergarten', href: '#' },
    { name: 'General enquiries', href: '#' },
    { name: 'Kindergarten Services', href: '#' },
    { name: 'Customers Services', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ]

  return (
    <div className="space-y-6">
      <div className="inline-block">
        <h3 className="text-lg sm:text-xl font-bold text-[#FFE500] bg-white px-6 py-3 rounded-full">
          Useful links
        </h3>
      </div>

      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-white text-sm sm:text-base hover:text-[#FFE500] transition-colors duration-200 flex items-center group"
            >
              <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                {link.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
