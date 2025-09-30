"use client"

import { useEffect, useRef, useState } from "react"

export function MissionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Top Curved Divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rotate-180">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F8F5E3"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-16">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2
              className={`font-serif text-4xl md:text-6xl font-bold text-[#4B7142] mb-6 transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
            >
              One <span className="text-[#B47A4E]">World</span>, One <span className="text-[#C8E1B3]">Mission</span>
            </h2>
            <p
              className={`text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
            >
              We believe in the power of collective action to create lasting change. Through sustainable practices,
              community engagement, and educational initiatives, we're building a better tomorrow for generations to
              come.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Image */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? "animate-slide-in-left opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-[#4B7142] rounded-[3rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                <img
                  src="/people-planting-young-tree-saplings-in-soil.jpg"
                  alt="Tree planting initiative"
                  className="relative rounded-[3rem] w-full h-[400px] md:h-[500px] object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Content */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-600 ${
                isVisible ? "animate-slide-in-right opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-[#F8F5E3] p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#4B7142] mb-4">
                  Environmental Stewardship
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  From reforestation projects to sustainable agriculture, we're committed to protecting and restoring
                  our planet's natural resources for future generations.
                </p>
              </div>

              <div className="bg-[#C8E1B3] p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#4B7142] mb-4">Community Empowerment</h3>
                <p className="text-[#4B7142] leading-relaxed">
                  We work hand-in-hand with local communities to develop sustainable solutions that address their unique
                  needs and challenges.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-[#B47A4E] rounded-[2rem] transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500" />
                <img
                  src="/community-project-collaboration.png"
                  alt="Community collaboration"
                  className="relative rounded-[2rem] w-full h-[250px] object-cover shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curved Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F8F5E3"
          />
        </svg>
      </div>
    </section>
  )
}
