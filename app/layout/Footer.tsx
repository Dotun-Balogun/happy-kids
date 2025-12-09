import WaveDivider from "@/components/WaveDivider"
import FooterAbout from "./Footer/FooterAbout"
import LatestNewsSection from "./Footer/LatestNewSection"
import NewsletterSection from "./Footer/NewsLetter"
import UsefulLinksSection from "./Footer/UsefulLinkSection"

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-[#FF6B7A] to-[#FF8A95] text-white">
      <WaveDivider position="top" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <FooterAbout/>
          <UsefulLinksSection />
          <LatestNewsSection/>
          <NewsletterSection/>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p className="text-center sm:text-left">
              © 2024 Happy Kids Kindergarten balogun olamidotun. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#FFE500] transition-colors duration-200">
                Terms
              </a>
              <a href="#" className="hover:text-[#FFE500] transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="hover:text-[#FFE500] transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
