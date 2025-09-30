"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import Image from "next/image"


export function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-[#F8F5E3] relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center relative w-20 h-20 mb-4 animate-scale-in">
            <Image
              src="/logo.png"
              alt="PVS Foundation Logo"
              fill
              className="object-cover rounded-full"
            />
          </div>


          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#4B7142] leading-tight animate-fade-in-up opacity-0">
            Your <span className="text-[#B47A4E]">Voice</span> Matters In Our{" "}
            <span className="text-[#C8E1B3]">Mission</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0 animation-delay-200">
            Every contribution, every volunteer hour, and every voice raised in support brings us closer to our vision
            of a sustainable and equitable world. Join our community today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0 animation-delay-400">
            <Button
              size="lg"
              className="bg-[#4B7142] hover:bg-[#3d5c36] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#4B7142] text-[#4B7142] hover:bg-[#4B7142] hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-12 border-t border-[#C8E1B3] mt-16 animate-fade-in-up opacity-0 animation-delay-600">
            <p className="text-gray-600 mb-4">Ready to make a difference?</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-700">
              <a href="mailto:contact@nonprofit.org" className="hover:text-[#4B7142] transition-colors duration-300">
                contact@nonprofit.org
              </a>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a href="tel:+1234567890" className="hover:text-[#4B7142] transition-colors duration-300">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
