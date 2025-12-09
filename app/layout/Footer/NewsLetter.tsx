'use client'
import { ArrowRight, Check } from "lucide-react"
import { useState } from "react"

export default function  NewsletterSection  (){
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = () => {
    if (email && email.includes('@')) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="space-y-6">
      <div className="inline-block">
        <h3 className="text-lg sm:text-xl font-bold text-[#FFE500] bg-white px-6 py-3 rounded-full">
          Subscribe to RSS Feeds
        </h3>
      </div>

      <p className="text-white text-sm sm:text-base leading-relaxed">
        Get all latest content delivered to your email a few times a month.
      </p>

      <p className="text-white text-sm sm:text-base leading-relaxed">
        Happy Kids is a Kindergarten designed for preschool children with engaging learning activities and caring educators.
      </p>

      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Your Email"
          className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFE500] text-sm sm:text-base pr-12"
        />
        <button
          onClick={handleSubmit}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FFE500] text-gray-800 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-[#ffd000] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Subscribe"
        >
          {isSubmitted ? (
            <Check className="w-5 h-5" />
          ) : (
            <ArrowRight className="w-5 h-5" />
          )}
        </button>
      </div>

      {isSubmitted && (
        <p className="text-[#FFE500] text-sm opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
          Thank you for subscribing!
        </p>
      )}
    </div>
  )
}
