import Hero from "@/components/hero"
import Features from "@/components/features"
import NewsSection from "@/components/news-section"
import CallToAction from "@/components/call-to-action"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <Features />
      <NewsSection />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
