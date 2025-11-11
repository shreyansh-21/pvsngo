"use client"

import { Heart, Copy, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"

export default function DonatePage() {
  const [copied, setCopied] = useState(false)

  const bankDetails = {
    accountName: "Green Earth Foundation",
    accountNumber: "1234567890123456",
    ifsc: "GRNB0001234",
    branch: "New Delhi Main Branch",
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F5E3] via-white to-[#F8F5E3]">
      <Navbar/>
      {/* Header */}
      <div className="flex flex-col items-center justify-center pt-12 px-4 sm:pt-16 md:pt-20">
        <div className="animate-fade-in">
          <Heart className="w-12 h-12 sm:w-14 sm:h-14 text-[#4B7142] mb-4 sm:mb-6 mx-auto" fill="currentColor" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4B7142] text-center font-sans mb-2 sm:mb-3 animate-fade-in-delay-100">
          Thank You for Supporting Our Mission
        </h1>
        <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl font-serif leading-relaxed animate-fade-in-delay-200 px-2">
          Your generosity fuels our reforestation projects, community sustainability programs, and the development of
          our mission-driven organic herbal product line. Together, we're healing the planet and empowering communities.
        </p>
      </div>

      {/* QR Code Section */}
      <div className="flex flex-col items-center mt-12 sm:mt-16 md:mt-20 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#4B7142] mb-6 sm:mb-8 font-sans animate-fade-in-delay-400">
          Scan to Donate
        </h2>
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-500 animate-fade-in-delay-500">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
            <Image
              src="/bank-qr-code.jpg"
              alt="Bank QR Code for donations"
              width={299}
              height={299}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bank Details Section */}
      <div className="flex flex-col items-center mt-12 sm:mt-16 md:mt-20 px-4 pb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#4B7142] mb-6 sm:mb-8 font-sans animate-fade-in-delay-600">
          Bank Transfer Details
        </h2>
        <div className="w-full max-w-2xl bg-white border-2 border-[#C8E1B3] rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-500 animate-fade-in-delay-700">
          <div className="space-y-4 sm:space-y-6">
            {/* Account Name */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 pb-4 border-b border-gray-200">
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Account Name</p>
                <p className="text-lg sm:text-xl font-semibold text-gray-800">{bankDetails.accountName}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.accountName)}
                className="flex items-center gap-2 px-3 py-2 bg-[#C8E1B3] hover:bg-[#B5D6A0] text-[#4B7142] rounded-lg transition-colors duration-300 font-medium text-sm"
              >
                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            {/* Account Number */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 pb-4 border-b border-gray-200">
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Account Number</p>
                <p className="text-lg sm:text-xl font-semibold text-gray-800 font-mono">{bankDetails.accountNumber}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.accountNumber)}
                className="flex items-center gap-2 px-3 py-2 bg-[#C8E1B3] hover:bg-[#B5D6A0] text-[#4B7142] rounded-lg transition-colors duration-300 font-medium text-sm"
              >
                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            {/* IFSC Code */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 pb-4 border-b border-gray-200">
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">IFSC Code</p>
                <p className="text-lg sm:text-xl font-semibold text-gray-800 font-mono">{bankDetails.ifsc}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.ifsc)}
                className="flex items-center gap-2 px-3 py-2 bg-[#C8E1B3] hover:bg-[#B5D6A0] text-[#4B7142] rounded-lg transition-colors duration-300 font-medium text-sm"
              >
                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            {/* Branch */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Branch</p>
                <p className="text-lg sm:text-xl font-semibold text-gray-800">{bankDetails.branch}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.branch)}
                className="flex items-center gap-2 px-3 py-2 bg-[#C8E1B3] hover:bg-[#B5D6A0] text-[#4B7142] rounded-lg transition-colors duration-300 font-medium text-sm"
              >
                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="w-full max-w-2xl mt-8 sm:mt-10 p-4 sm:p-6 bg-[#C8E1B3]/20 border-l-4 border-[#4B7142] rounded-lg animate-fade-in-delay-800">
          <p className="text-sm sm:text-base text-gray-700 font-serif leading-relaxed">
            <span className="font-semibold text-[#4B7142]">
              📝 Please include your name in the transaction description
            </span>{" "}
            so we can thank you personally and keep you updated on the impact of your donation!
          </p>
        </div>

        {/* Impact Message */}
        <div className="w-full max-w-2xl mt-10 sm:mt-12 text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#C8E1B3]/30 to-[#F8F5E3] animate-fade-in-delay-900">
          <h3 className="text-xl sm:text-2xl font-bold text-[#4B7142] mb-3 font-sans">Your Impact</h3>
          <p className="text-gray-700 font-serif leading-relaxed">
            Every donation directly supports our reforestation initiatives, empowers local communities, and funds the
            development of our sustainable organic herbal product line. Together, we're creating lasting change for our
            planet.
          </p>
        </div>
      </div>
    </div>
  )
}
