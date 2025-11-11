"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "Reforestation & Tree Planting",
      description:
        "We plant native trees across diverse ecosystems, restoring habitats and combating climate change. Our community-led initiatives have already transformed degraded lands into thriving green spaces.",
      icon: "🌱",
      image: "/reforestation-tree-planting-initiative.jpg",
      color: "from-[#4B7142] to-[#C8E1B3]",
    },
    {
      id: 2,
      title: "Community Green Spaces",
      description:
        "Building sustainable urban and rural gardens that reconnect communities with nature. These spaces serve as gathering points for education, wellness, and environmental stewardship.",
      icon: "🌿",
      image: "/community-green-spaces-sustainable.jpg",
      color: "from-[#C8E1B3] to-[#B47A4E]",
    },
    {
      id: 3,
      title: "Sustainable Living Workshops",
      description:
        "Empowering communities through education on sustainable practices, organic farming, and eco-friendly lifestyles. We believe knowledge is the foundation of lasting environmental change.",
      icon: "📚",
      image: "/sustainable-living-workshop-education.jpg",
      color: "from-[#B47A4E] to-[#4B7142]",
    },
    {
      id: 4,
      title: "Organic Herbal Product Line",
      description:
        "Coming Soon: We're developing a mission-driven line of organic herbal oils and natural wellness products. Every purchase will directly fund our reforestation and community education projects.",
      icon: "🌾",
      image: "/organic-herbal-products-wellness-development.jpg",
      color: "from-[#F8F5E3] to-[#C8E1B3]",
      comingSoon: true,
    },
  ]

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 md:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Animated background elements */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-pastel-green opacity-20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-forest-green opacity-10 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-josefin font-bold text-forest-green mb-6 animate-fade-in">
              About Our <span className="text-pastel-green">Mission</span>
            </h1>
            <p className="text-xl md:text-2xl text-clay-brown font-montserrat mb-8 leading-relaxed animate-fade-in-delay-1 max-w-3xl">
              We're dedicated to planting trees, promoting sustainable living, and creating a healthier planet for
              future generations.
            </p>
          </div>
        </div>
      </section>
      {/* Curved Divider */}
      <div className="relative h-24 md:h-32 bg-background overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none">
          <path d="M 0 60 Q 300 0 600 60 T 1200 60 L 1200 120 L 0 120 Z" fill="#C8E1B3" opacity="0.3" />
        </svg>
      </div>

      {/* Projects Grid */}
      <section ref={sectionRef} className="py-20 px-4 bg-[#F8F5E3]/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Image Background */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-40 group-hover:opacity-50 transition-opacity duration-500`}
                  ></div>

                  {/* Coming Soon Badge */}
                  {project.comingSoon && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-[#4B7142] font-josefin font-bold">Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 bg-white relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{project.icon}</span>
                    <div>
                      <h3 className="font-josefin text-2xl md:text-3xl font-bold text-[#4B7142] mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="font-montserrat text-foreground/70 leading-relaxed mb-6">{project.description}</p>

                  {!project.comingSoon && (
                    <button className="inline-flex items-center gap-2 text-[#4B7142] font-montserrat font-semibold hover:gap-3 transition-all duration-300">
                      Learn More
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}

                  {project.comingSoon && (
                    <div className="inline-flex items-center gap-2 text-[#B47A4E] font-montserrat font-semibold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Mission-Driven Initiative
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curved Divider */}
      <div className="relative h-24 md:h-32 bg-[#F8F5E3]/30 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none">
          <path d="M 0 60 Q 300 120 600 60 T 1200 60 L 1200 0 L 0 0 Z" fill="#F8F5E3" opacity="0.5" />
        </svg>
      </div>

      {/* Unifying Message Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#4B7142] to-[#2d4a29] rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <h2 className="font-josefin text-3xl md:text-4xl font-bold mb-6 text-balance">One Planet, One Vision</h2>
            <p className="font-montserrat text-lg leading-relaxed text-white/90 mb-6">
              Each of our projects is a thread in a larger tapestry of environmental restoration and community
              empowerment. From planting trees to empowering communities through education, to creating sustainable
              products that fund future initiatives — every action compounds into lasting impact.
            </p>
            <p className="font-montserrat text-lg leading-relaxed text-white/90 text-balance">
              We believe that <span className="font-bold">healing our planet is a collective journey</span>. Together,
              we're not just restoring ecosystems—we're restoring hope. We're not just changing communities—we're
              transforming futures.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <button className="bg-white text-[#4B7142] hover:bg-[#F8F5E3] px-8 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 transform hover:scale-105">
                Support Our Work
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-montserrat font-semibold transition-all duration-300">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Highlight */}
      <section className="py-20 px-4 bg-[#C8E1B3]/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-josefin text-3xl md:text-4xl font-bold text-center mb-12 text-[#4B7142]">
            Our Impact Through Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-[#4B7142] mb-2">50K+</div>
              <p className="font-montserrat text-foreground/70">Trees Planted Across Our Region</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-[#C8E1B3]/80 mb-2">200+</div>
              <p className="font-montserrat text-foreground/70">Community Members Trained</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-[#B47A4E] mb-2">15</div>
              <p className="font-montserrat text-foreground/70">Active Community Green Spaces</p>
            </div>
          </div>
        </div>
      </section>

       {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&family=Montserrat:wght@400;500;600;700&display=swap');

        :root {
          --forest-green: #4B7142;
          --pastel-green: #C8E1B3;
          --cream: #F8F5E3;
          --clay-brown: #B47A4E;
          --white: #FFFFFF;
        }

        .bg-cream {
          background-color: var(--cream);
        }

        .bg-forest-green {
          background-color: var(--forest-green);
        }

        .text-forest-green {
          color: var(--forest-green);
        }

        .text-pastel-green {
          color: var(--pastel-green);
        }

        .text-clay-brown {
          color: var(--clay-brown);
        }

        .bg-pastel-green {
          background-color: var(--pastel-green);
        }

        .border-pastel-green {
          border-color: var(--pastel-green);
        }

        .border-forest-green {
          border-color: var(--forest-green);
        }

        .font-josefin {
          font-family: 'Josefin Sans', sans-serif;
        }

        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        @media (max-width: 768px) {
          .order-1 {
            order: 1;
          }
          .order-2 {
            order: 2;
          }
        }
      `}</style>
    </main>
  )
}
