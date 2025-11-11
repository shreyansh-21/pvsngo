"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname() || "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Join Us", href: "/join" },
    { name: "Announcements", href: "/announcements" },
    { name: "Blogs", href: "/blogs" },
  ]

  const isActive = (href: string) => {
    // exact match for root, prefix match for others (adjust as needed)
    return href === "/"
      ? pathname === "/"
      : pathname.startsWith(href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="PVS Foundation Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-heading text-xl font-bold text-forest-green">
                PVS<span className="text-green-300"> Foundation</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors duration-200 relative group ${
                  isActive(link.href)
                    ? "text-forest-green"
                    : "text-[#C8E1B3] hover:text-forest-green"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-forest-green transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            <Link href="/donate" passHref>
              <Button className="bg-forest-green hover:bg-forest-green/90 text-white font-body font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                Donate Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-forest-green" /> : <Menu className="w-6 h-6 text-forest-green" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block font-body text-base font-medium px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-forest-green bg-pastel-green/20"
                    : "text-gray-700 hover:text-forest-green hover:bg-pastel-green/20"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}

            <Link href="/donate" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-forest-green hover:bg-forest-green/90 text-white font-body font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                Donate Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
