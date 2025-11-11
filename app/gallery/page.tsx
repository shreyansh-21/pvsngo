"use client"
import { Navbar } from "@/components/navbar"
import { FocusCards } from "@/components/ui/focus-cards"

export default function GalleryPage() {
  const galleryCards = [
    {
      title: "Reforestation & Tree Planting",
      src: "/volunteers-planting-trees-forest-restoration.jpg",
    },
    {
      title: "Community Green Spaces",
      src: "/community-garden-green-public-space-urban.jpg",
    },
    {
      title: "Sustainable Living Workshops",
      src: "/environmental-education-workshop-community-learnin.jpg",
    },
    {
      title: "Tree Planting Impact",
      src: "/young-trees-growth-forest-saplings.jpg",
    },
    {
      title: "Community Service Day",
      src: "/volunteers-community-service-environmental-work.jpg",
    },
    {
      title: "Nature Conservation Efforts",
      src: "/nature-conservation-environmental-protection-green.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F8F5E3] via-white to-[#F8F5E3]">
    <Navbar />
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-6 text-[#4B7142]">
            Our <span className="text-[#C8E1B3]">Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-serif">
            Witness the transformation and impact of our environmental initiatives. From reforestation projects to
            community education, every moment captures our mission to heal the planet and empower communities.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FocusCards cards={galleryCards} />
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#4B7142] text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6">
            More Than Just <span className="text-[#C8E1B3]">Memories</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed font-serif mb-8 text-gray-100">
            Each image tells a story of dedication, hope, and tangible change. These aren't just moments— they're
            milestones in our journey to create a sustainable future, one community at a time.
          </p>
          <button className="px-8 py-3 bg-[#C8E1B3] text-[#4B7142] font-semibold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 font-sans">
            Join Our Movement
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </main>
  )
}
