import { Mail } from "lucide-react"

export default function LatestNewsSection () {
  const news = [
    {
      id: 1,
      title: 'How to Be Ahead of Stock Changes',
      date: '1 June 2024',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Online Reputation And Management',
      date: '1 June 2024',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop',
      icon: true,
    },
    {
      id: 3,
      title: 'Tips To Move Your Project More Forward',
      date: '1 June 2024',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="inline-block">
        <h3 className="text-lg sm:text-xl font-bold text-[#FFE500] bg-white px-6 py-3 rounded-full">
          Latest News
        </h3>
      </div>

      <div className="space-y-4">
        {news.map((item) => (
          <a
            key={item.id}
            href="#"
            className="flex gap-4 group cursor-pointer"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {item.icon && (
                <div className="absolute inset-0 bg-[#FFE500]/20 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-sm sm:text-base font-bold mb-2 group-hover:text-[#FFE500] transition-colors duration-200 line-clamp-2">
                {item.title}
              </h4>
              <p className="text-white/70 text-xs sm:text-sm">{item.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
