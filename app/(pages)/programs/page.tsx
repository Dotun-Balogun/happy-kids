import { servicesData } from '@/app/data/Service'
import HeadingWithFaintText from '@/components/HeadingWithFaintText'
import ServiceCard from '@/components/ui/cards/ServiceCard'

const page = () => {
  return (
    <div className='container mx-auto px-4 py-20 '>
         <HeadingWithFaintText
                    faintText='Programs'
                    faintTextClassName='top-2 left-1/2 -translate-x-1/2  text-primary text-[48px] font-bold opacity-10 lg:opacity-20'
                  >
                    <h2 className='text-[32px] md:text-4xl lg:text-[50px] font-concert-one font-bold text-center'>
                      Happy  Kids{" "} <span className='text-primary'>Programmes</span>{" "} Classes
                    </h2>
                  <p className="text-[20px] text-[#666666] text-center mt-5 px-4">Let's be happy and smiling together</p>

                  </HeadingWithFaintText>

                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center
                                        gap-8 md:gap-10 lg:gap-12 '>
                              {servicesData.map((service) => (
                                <ServiceCard key={service.id} service={service} />
                              ))}
                          </div>
    </div>
  )
}

export default page