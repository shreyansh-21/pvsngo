"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Leaf, Users, Sprout, BookOpen } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    
    <main className="bg-cream min-h-screen">
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

      {/* Who We Are Section */}
      <section className="px-4 md:px-8 lg:px-12 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-josefin font-bold text-forest-green mb-6">Who We Are</h2>
              <p className="text-lg text-clay-brown font-montserrat mb-6 leading-relaxed">
                We are a passionate community of environmental advocates, scientists, and volunteers united by a single
                vision: to heal our planet through reforestation and sustainable practices.
              </p>
              <p className="text-lg text-clay-brown font-montserrat mb-8 leading-relaxed">
                For over a decade, we've been working with communities to plant millions of trees, restore ecosystems,
                and inspire a generation of environmental stewards. We believe that every action counts, and collective
                effort creates lasting change.
              </p>
              <div className="flex items-center gap-2 text-forest-green font-montserrat font-semibold hover:gap-4 transition-all">
                <span>Learn more about our impact</span>
                <ChevronRight size={20} />
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <img
                  src="/diverse-volunteers-working-together-environmental-.jpg"
                  alt="Our team working together"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/20 via-transparent to-pastel-green/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="px-4 md:px-8 lg:px-12 py-24 bg-cream relative overflow-hidden">
        {/* Curved divider */}
        <div
          className="absolute top-0 left-0 right-0 h-32 bg-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto mt-16 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-josefin font-bold text-forest-green mb-4">
              Our <span className="text-pastel-green">Mission</span>
            </h2>
            <div className="w-24 h-1 bg-pastel-green mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500 border-l-4 border-pastel-green">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-pastel-green rounded-full flex items-center justify-center">
                    <Leaf className="text-forest-green" size={24} />
                  </div>
                  <h3 className="text-2xl font-josefin font-bold text-forest-green">Reforestation</h3>
                </div>
                <p className="text-lg text-clay-brown font-montserrat leading-relaxed">
                  We've planted over 5 million trees across vulnerable ecosystems, restoring habitats and combating
                  climate change one seedling at a time.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500 border-l-4 border-forest-green">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-forest-green rounded-full flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-josefin font-bold text-forest-green">Community Education</h3>
                </div>
                <p className="text-lg text-clay-brown font-montserrat leading-relaxed">
                  We empower local communities with sustainable living practices, environmental literacy, and the tools
                  they need to become conservation leaders.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/people-planting-trees-in-forest-sustainable-enviro.jpg"
                  alt="Mission in action"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-forest-green/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="px-4 md:px-8 lg:px-12 py-24 bg-white relative overflow-hidden">
        {/* Curved divider */}
        <div
          className="absolute top-0 left-0 right-0 h-32 bg-cream"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left order-2 md:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/organic-herbal-products-natural-wellness-oils-bott.jpg"
                  alt="Our future vision"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pastel-green/20 via-transparent to-clay-brown/10" />
              </div>
            </div>

            <div className="animate-slide-in-right order-1 md:order-2">
              <h2 className="text-5xl md:text-6xl font-josefin font-bold text-forest-green mb-6">
                Our <span className="text-clay-brown">Vision</span>
              </h2>
              <p className="text-lg text-clay-brown font-montserrat mb-6 leading-relaxed">
                We're excited to announce that we're developing a future line of{" "}
                <span className="font-bold text-pastel-green">organic herbal products</span> — premium, natural wellness
                items including botanical oils, herbal remedies, and sustainable skincare.
              </p>
              <p className="text-lg text-clay-brown font-montserrat mb-6 leading-relaxed">
                These products aren't available yet, but when launched, all proceeds will directly fund our
                environmental projects and community initiatives. This means every purchase will plant more trees and
                support sustainable living programs.
              </p>
              <div className="bg-pastel-green/20 border-2 border-pastel-green rounded-2xl p-6">
                <p className="text-lg font-montserrat text-forest-green">
                  <span className="font-bold">Coming Soon:</span> Be among the first to support our mission through
                  ethically sourced, eco-conscious products that make a real difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 md:px-8 lg:px-12 py-24 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-josefin font-bold text-forest-green mb-4">
              Our <span className="text-pastel-green">Values</span>
            </h2>
            <p className="text-xl text-clay-brown font-montserrat">What drives everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sprout,
                title: "Sustainability",
                description:
                  "Every action we take considers the long-term health of our planet and future generations.",
              },
              {
                icon: Users,
                title: "Community",
                description: "We believe in empowering local communities to be stewards of their own environments.",
              },
              {
                icon: BookOpen,
                title: "Education",
                description:
                  "Knowledge is power. We invest in educating and inspiring the next generation of environmentalists.",
              },
            ].map((value, index) => (
              <div key={index} className="animate-fade-in group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className="w-14 h-14 bg-pastel-green rounded-full flex items-center justify-center mb-6 group-hover:bg-forest-green transition-colors duration-300">
                    <value.icon
                      className="text-forest-green group-hover:text-white transition-colors duration-300"
                      size={28}
                    />
                  </div>
                  <h3 className="text-2xl font-josefin font-bold text-forest-green mb-4">{value.title}</h3>
                  <p className="text-lg text-clay-brown font-montserrat leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA Section */}
      <section className="px-4 md:px-8 lg:px-12 py-24 bg-forest-green relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-pastel-green opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-4xl mx-auto relative z-10 text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-josefin font-bold text-white mb-6">
            Ready to Make a <span className="text-pastel-green">Difference?</span>
          </h2>
          <p className="text-xl font-montserrat text-pastel-green mb-10 leading-relaxed">
            Join our global community of changemakers and help us create a more sustainable future. Whether you
            volunteer, donate, or spread the word, every action matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-pastel-green text-forest-green font-josefin font-bold text-lg rounded-full hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              Join Us Now
            </button>
            <button className="px-10 py-4 border-2 border-pastel-green text-pastel-green font-josefin font-bold text-lg rounded-full hover:bg-pastel-green hover:text-forest-green hover:scale-105 transition-all duration-300 cursor-pointer">
              Learn More
            </button>
          </div>

          <div className="mt-16 pt-12 border-t border-white/20">
            <p className="text-white/70 font-montserrat">
              Have questions? Reach out to us at{" "}
              <span className="text-pastel-green font-semibold">hello@ourmission.org</span>
            </p>
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
