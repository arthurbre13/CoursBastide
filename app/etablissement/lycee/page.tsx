"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function LyceePage() {
  const router = useRouter()

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Lycée à Marseille</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Le Cours Bastide accompagne les lycéens de la 2nde à la Terminale vers la réussite au baccalauréat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Organisation des classes</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>3 classes de 2nde</li>
              <li>2 classes de 1ière</li>
              <li>2 classes de terminale</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Projets pédagogiques du second degré</h2>
            <p>À venir</p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Lycée+Cours+Bastide"
              alt="Lycée à Marseille - Cours Bastide"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-[#0a1854] text-white p-8 rounded-lg mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Vous souhaitez inscrire votre enfant ?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Pour toute demande d'inscription au lycée du Cours Bastide, nous vous invitons à remplir notre formulaire de
            pré-inscription.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#0a1854] hover:bg-white/90"
            onClick={() => router.push("/pre-inscription/college-lycee")}
          >
            Pré-inscription
          </Button>
        </div>
      </div>
    </div>
  )
}
