"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Users, Briefcase, TreePine, GraduationCap } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 2500,
    label: "Active Volunteers",
    color: "bg-[#4B7142]",
    delay: "0s",
  },
  {
    icon: Briefcase,
    value: 150,
    label: "Community Projects",
    color: "bg-[#B47A4E]",
    delay: "0.2s",
  },
  {
    icon: TreePine,
    value: 50000,
    label: "Trees Planted",
    color: "bg-[#C8E1B3]",
    textColor: "text-[#4B7142]",
    delay: "0.4s",
  },
  {
    icon: GraduationCap,
    value: 1200,
    label: "Educational Programs",
    color: "bg-[#4B7142]",
    delay: "0.6s",
  },
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count.toLocaleString()}+
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-[#F8F5E3] relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`${stat.color} ${stat.textColor || "text-white"} p-8 rounded-3xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in opacity-0`}
              style={{ animationDelay: stat.delay }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                  <stat.icon className="h-8 w-8" />
                </div>
                <CountUp end={stat.value} />
                <p className="text-lg font-medium leading-relaxed">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
