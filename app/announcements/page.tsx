"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"

interface Announcement {
  id: string
  date: string
  title: string
  description: string
  category: "milestone" | "event" | "update" | "impact"
  image: string
  featured?: boolean
}

const announcements: Announcement[] = [
  {
    id: "1",
    date: "NOV 15 2025",
    title: "10,000 Trees Planted This Year – We Did It!",
    description:
      "Our community has successfully planted over 10,000 trees in 2025. A massive thank you to every volunteer who made this possible.",
    category: "milestone",
    image: "/tree-planting-milestone.jpg",
    featured: true,
  },

  {
    id: "2",
    date: "NOV 5 2025",
    title: "Organic Herbal Product Line – Development Update",
    description:
      "Exciting news! Our organic herbal product line is now 60% complete. Every purchase will directly fund our reforestation efforts.",
    category: "update",
    image: "/herbal-products-update.jpg",
  },

]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "milestone":
      return "text-[#4B7142] bg-[#E8F0E4]"
    case "event":
      return "text-[#B47A4E] bg-[#F5EBE0]"
    case "update":
      return "text-[#2D5A2D] bg-[#C8E1B3]"
    case "impact":
      return "text-[#4B7142] bg-[#F8F5E3]"
    default:
      return "text-gray-600 bg-gray-100"
  }
}

const getCategoryLabel = (category: string) => {
  switch (category) {
    case "milestone":
      return "🎯 Milestone"
    case "event":
      return "📅 Event"
    case "update":
      return "📢 Update"
    case "impact":
      return "🌱 Impact"
    default:
      return category
  }
}

export default function AnnouncementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const filteredAnnouncements = selectedCategory
    ? announcements.filter((a) => a.category === selectedCategory)
    : announcements

  const featured = announcements.find((a) => a.featured)
  const regular = filteredAnnouncements.filter((a) => !a.featured)

  return (
    <main className="bg-[#F8F5E3] min-h-screen">
      <Navbar/>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#4B7142] to-[#2D5A2D] text-white pt-20 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4 text-pretty">Our Latest Updates</h1>
          <p className="font-mono text-[#C8E1B3] text-lg md:text-xl mb-8">
            Stay informed about our mission to restore nature and build a sustainable future
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === null ? "bg-[#C8E1B3] text-[#2D5A2D]" : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              All Updates
            </button>
            {["milestone", "event", "update", "impact"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                  selectedCategory === cat ? "bg-[#C8E1B3] text-[#2D5A2D]" : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {getCategoryLabel(cat).split(" ")[1]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Announcement */}
      {featured && !selectedCategory && (
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 animate-fade-in">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full overflow-hidden rounded-2xl">
                <Image
                  src={featured.image || "/placeholder.svg"}
                  alt={featured.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-between bg-[#F8F5E3]">
                <div>
                  <div
                    className={`inline-block px-4 py-2 rounded-full font-medium mb-6 ${getCategoryColor(featured.category)}`}
                  >
                    {getCategoryLabel(featured.category)}
                  </div>
                  <p className="text-sm font-mono text-[#4B7142] mb-3 tracking-widest">{featured.date}</p>
                  <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#2D5A2D] mb-4 text-pretty">
                    {featured.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{featured.description}</p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-[#4B7142] font-semibold hover:text-[#2D5A2D] transition-colors duration-300 group"
                >
                  Read Full Story
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Announcements Grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="space-y-8">
          {regular.length > 0 ? (
            regular.map((announcement, index) => (
              <div
                key={announcement.id}
                onMouseEnter={() => setHoveredId(announcement.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-[#4B7142] animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 relative h-40 md:h-auto rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={announcement.image || "/placeholder.svg"}
                      alt={announcement.title}
                      fill
                      className={`object-cover rounded-lg transition-transform duration-500 ${
                        hoveredId === announcement.id ? "scale-110" : "scale-100"
                      }`}
                    />
                  </div>
                  <div className="md:w-3/4 flex flex-col justify-between">
                    <div>
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getCategoryColor(announcement.category)}`}
                      >
                        {getCategoryLabel(announcement.category)}
                      </div>
                      <p className="text-xs font-mono text-[#B47A4E] tracking-widest mb-2">{announcement.date}</p>
                      <h3 className="font-sans text-xl md:text-2xl font-bold text-[#2D5A2D] mb-3 group-hover:text-[#4B7142] transition-colors duration-300 text-pretty">
                        {announcement.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">{announcement.description}</p>
                    </div>
                    <Link
                      href="#"
                      className="inline-flex items-center text-[#4B7142] font-semibold hover:text-[#2D5A2D] transition-colors duration-300 group/link"
                    >
                      Learn More
                      <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg font-mono">No announcements in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-[#4B7142] to-[#2D5A2D] text-white py-16 px-4 md:px-8 mt-16 animate-fade-in">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-[#C8E1B3] mb-8 text-lg">
            Subscribe to our newsletter to get the latest updates, events, and impact stories directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full font-bold bg-[#C8E1B3] text-[#2D5A2D] flex-1 max-w-xs focus:outline-none focus:ring-2 focus:ring-[#F8F5E3]"
            />
            <button className="px-8 py-3 bg-[#C8E1B3] text-[#2D5A2D] font-bold rounded-full hover:bg-white transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
