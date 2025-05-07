import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-[#0a1854] text-white py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 flex justify-center items-center">
            <Image
              src="/cours-bastide-blason.svg"
              alt="Cours Bastide Logo"
              width={600}
              height={600}
              className="w-62% h-auto max-w-[450px] md:max-w-[550px] lg:max-w-[600px]"
              priority
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Cours Bastide</h1>
            <p className="text-2xl md:text-3xl font-light mb-8">
              Aller au bien avec
              <br />
              tout son être
            </p>
            <Button asChild size="lg" className="bg-white text-[#0a1854] hover:bg-white/90">
              <Link href="/etablissement">Découvrir</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
