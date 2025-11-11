import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { MissionSection } from "@/components/mission-section"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <StatsSection />
        <MissionSection />
        <CtaSection />
        
      </main>
    </>
  )
}
