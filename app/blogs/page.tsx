"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"

const categories = ["All", "Reforestation", "Sustainability", "Community", "Product Updates", "Education"]

const blogPosts = [
  {
    id: 1,
    title: "How to Start Your Own Garden This Spring",
    excerpt: "Learn the basics of creating a sustainable garden and contribute to your local green spaces.",
    category: "Sustainability",
    date: "March 15, 2024",
    author: "Sarah Green",
    image: "/blog-gardening-tips.jpg",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Our Tree Planting Journey: 10,000 Trees Milestone",
    excerpt: "Celebrating our incredible community as we reach a major milestone in reforestation efforts.",
    category: "Reforestation",
    date: "March 12, 2024",
    author: "James Forest",
    image: "/blog-tree-planting.jpg",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Behind the Scenes: Developing Our Organic Herbal Line",
    excerpt: "Discover how we're creating natural wellness products to fund our environmental mission.",
    category: "Product Updates",
    date: "March 10, 2024",
    author: "Emma Wellness",
    image: "/blog-herbal-products.jpg",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Sustainable Living 101: Easy Tips for Everyday Life",
    excerpt: "Small changes that make a big impact. Start your sustainability journey today.",
    category: "Education",
    date: "March 5, 2024",
    author: "Lisa Eco",
    image: "/blog-sustainable-living.jpg",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Green Spaces: Transforming Urban Areas",
    excerpt: "How community gardens are transforming concrete jungles into thriving ecosystems.",
    category: "Community",
    date: "March 1, 2024",
    author: "David Park",
    image: "/blog-green-spaces.jpg",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts[0]

  return (
    <main className="min-h-screen bg-background">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#4B7142] to-[#2D5A2D] text-white pt-20 pb-16 ">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Stories of <span className="text-5xl md:text-6xl font-bold text-white">Change</span>
            </h1>
            <p className="text-lg text-[#C8E1B3] max-w-2xl mx-auto">
              Discover inspiring stories, expert insights, and updates from our mission to heal the planet and empower
              communities.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Featured Article</h2>
          <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-500 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-auto overflow-hidden">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{featuredPost.author}</p>
                    <p className="text-sm text-muted-foreground">{featuredPost.date}</p>
                  </div>
                  <Link href="#" className="inline-flex items-center gap-2 text-primary font-semibold group/link">
                    Read More
                    <svg
                      className="w-5 h-5 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 md:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Explore Topics</h2>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl hover:border-primary transition-all duration-500 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground">
                      <p className="font-medium text-foreground">{post.author}</p>
                      <p>{post.date}</p>
                    </div>
                    <Link
                      href="#"
                      className="text-primary font-semibold group/arrow hover:translate-x-1 transition-transform"
                    >
                      →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No articles found. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 md:px-8 bg-primary/5 border-t border-border">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay Updated on Our <span className="text-primary">Mission</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for inspiring stories, sustainability tips, and updates on our reforestation
            efforts.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Pagination/Load More */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <button className="px-8 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
            Load More Articles
          </button>
        </div>
      </section>
    </main>
  )
}
