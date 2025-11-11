"use client"

import { useState } from "react"
import { Heart, Users, Leaf, Bell } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function JoinUsPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const opportunities = [
    {
      id: "volunteer",
      icon: Users,
      title: "Volunteer",
      description:
        "Get your hands dirty and make a real difference. Join our tree-planting initiatives, community clean-ups, and environmental education programs. Every hour counts!",
      cta: "Volunteer Now",
      color: "from-green-50 to-emerald-50",
      accentColor: "text-[#4B7142]",
    },
    {
      id: "partner",
      icon: Leaf,
      title: "Partner With Us",
      description:
        "Collaborate with our mission. Whether you're a business, organization, or community leader, let's build a sustainable future together. Partnership brings impact at scale.",
      cta: "Become a Partner",
      color: "from-emerald-50 to-teal-50",
      accentColor: "text-[#B47A4E]",
    },
    {
      id: "product",
      icon: Heart,
      title: "Support Our Future Product Line",
      description:
        "Be part of something special. Join our waitlist for our upcoming organic herbal products—100% of proceeds fund our reforestation and community projects.",
      cta: "Join the Waitlist",
      color: "from-lime-50 to-green-50",
      accentColor: "text-[#C8E1B3]",
    },
    {
      id: "connected",
      icon: Bell,
      title: "Stay Connected",
      description:
        "Never miss an update. Subscribe to our newsletter for stories of impact, event invitations, and exclusive insights into our mission to restore nature.",
      cta: "Subscribe",
      color: "from-green-50 to-lime-50",
      accentColor: "text-[#4B7142]",
    },
  ]

  return (
    <main className="min-h-screen bg-[#F8F5E3]">
      <Navbar/>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="font-josefin text-4xl md:text-5xl lg:text-6xl font-bold text-[#4B7142] mb-6 text-balance">
              Be Part of the <span className="text-[#C8E1B3]">Movement</span>
            </h1>
            <p className="font-montserrat text-lg md:text-xl text-gray-700 leading-relaxed text-balance">
              Whether you want to plant trees, partner with us, support our future vision, or stay informed—there's a
              meaningful way for you to join our mission. Together, we're healing our planet and empowering communities
              to create a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {opportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon
              return (
                <div
                  key={opportunity.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(opportunity.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div
                    className={`bg-gradient-to-br ${opportunity.color} rounded-3xl p-8 md:p-10 h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer border-2 border-transparent hover:border-[#4B7142]`}
                  >
                    {/* Icon */}
                    <div
                      className={`${opportunity.accentColor} mb-6 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent size={48} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <h3 className="font-josefin text-2xl md:text-3xl font-bold text-[#4B7142] mb-4">
                      {opportunity.title}
                    </h3>
                    <p className="font-montserrat text-gray-700 leading-relaxed mb-8 text-base">
                      {opportunity.description}
                    </p>

                    {/* CTA Button */}
                    <button className="w-full bg-[#4B7142] hover:bg-[#3a5531] text-white font-montserrat font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                      {opportunity.cta}
                    </button>

                    {/* Decorative accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C8E1B3] to-transparent rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-gradient-to-r from-[#4B7142] to-[#6a9d61] rounded-3xl p-10 md:p-16 text-center shadow-xl"
            style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
          >
            <h2 className="font-josefin text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Ready to Make an Impact?
            </h2>
            <p className="font-montserrat text-lg text-green-50 mb-8 text-balance">
              Every action, no matter how small, contributes to a healthier planet and stronger communities. The time to
              act is now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#4B7142] hover:bg-[#F8F5E3] font-montserrat font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                Explore All Ways to Help
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#4B7142] font-montserrat font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Unifying Message */}
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center" style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}>
          <h2 className="font-josefin text-3xl md:text-4xl font-bold text-[#4B7142] mb-6 text-balance">
            One Community, <span className="text-[#C8E1B3]">One Purpose</span>
          </h2>
          <p className="font-montserrat text-lg text-gray-700 leading-relaxed text-balance">
            Whether you volunteer your time, partner with us, support our future product line, or stay informed—you're
            contributing to something bigger than ourselves. Together, we're restoring forests, building resilient
            communities, and creating a sustainable legacy for generations to come. Your voice, your action, your
            support matters.
          </p>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </main>
  )
}
