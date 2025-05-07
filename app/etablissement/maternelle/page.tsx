"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function MaternellePage() {
  const router = useRouter()

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">École Maternelle à Marseille</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Le Cours Bastide accueille les enfants de maternelle dans un cadre éducatif de qualité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Maternelle+Cours+Bastide"
              alt="École maternelle à Marseille - Cours Bastide"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Organisation des classes</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>4 classes de petite et moyenne section</li>
              <li>2 classes de grande section</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Projets pédagogiques du premier degré</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Les élèves sont sensibilisés au développement durable.</li>
              <li>L'apprentissage de l'anglais et de l'informatique.</li>
              <li>Des sorties sportives et culturelles.</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#0a1854] text-white p-8 rounded-lg mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Vous souhaitez inscrire votre enfant ?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Pour toute demande d'inscription en maternelle au Cours Bastide, nous vous invitons à remplir notre
            formulaire de pré-inscription.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#0a1854] hover:bg-white/90"
            onClick={() => router.push("/pre-inscription/maternelle-primaire")}
          >
            Pré-inscription
          </Button>
        </div>
      </div>
    </div>
  )
}
