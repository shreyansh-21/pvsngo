"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/diverse-group-of-volunteers-planting-trees-togethe.jpg" alt="Community volunteers" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Curved Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F8F5E3"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in-up opacity-0">
            Empowering <span className="text-[#C8E1B3]">Change</span>,
            <br />
            Inspiring <span className="text-[#C8E1B3]">Hope</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0 animation-delay-200">
            Join us in creating sustainable communities and fostering positive change through education, environmental
            action, and community empowerment.
          </p>

          <div className="animate-fade-in-up opacity-0 animation-delay-400">
            <Button
              size="lg"
              className="bg-[#4B7142] hover:bg-[#3d5c36] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              Send Request
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
