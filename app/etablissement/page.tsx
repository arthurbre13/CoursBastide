import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EtablissementPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Présentation du Cours Bastide</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Le Cours Bastide est un établissement scolaire à Marseille qui accueille des enfants de maternelle,
            primaire, collège et lycée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              La première mission du Cours Bastide réside dans l'enseignement et dans la réussite du parcours scolaire
              de chaque élève, quel qu'il soit.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=École+à+Marseille"
              alt="Établissement scolaire à Marseille - Cours Bastide"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Établissement du premier degré</CardTitle>
              <CardDescription>Maternelle et primaire</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">École maternelle à Marseille</h3>
                <p>Organisation des classes de maternelle :</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>4 classes de petite et moyenne section</li>
                  <li>2 classes de grande section</li>
                </ul>
                <div className="mt-4">
                  <Link href="/etablissement/maternelle">
                    <Button variant="outline">En savoir plus</Button>
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">École primaire à Marseille</h3>
                <p>Organisation des classes de primaire :</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>2 classes de CP</li>
                  <li>2 classes de CE1</li>
                  <li>2 classes de CE2</li>
                  <li>2 classes de CM1</li>
                  <li>2 classes de CM2</li>
                </ul>
                <div className="mt-4">
                  <Link href="/etablissement/primaire">
                    <Button variant="outline">En savoir plus</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle>Établissement du second degré</CardTitle>
              <CardDescription>Collège et lycée</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Collège à Marseille</h3>
                <p>Organisation des classes de collège :</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>3 classes de 6ième</li>
                  <li>3 classes de 5ième</li>
                  <li>3 classes de 4ième</li>
                  <li>3 classes de 3ième</li>
                </ul>
                <div className="mt-4">
                  <Link href="/etablissement/college">
                    <Button variant="outline">En savoir plus</Button>
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Lycée à Marseille</h3>
                <p>Organisation des classes de lycée :</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>3 classes de 2nde</li>
                  <li>2 classes de 1ière</li>
                  <li>2 classes de terminale</li>
                </ul>
                <div className="mt-4">
                  <Link href="/etablissement/lycee">
                    <Button variant="outline">En savoir plus</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#0a1854] text-white p-8 rounded-lg mt-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">La vie de l'école</h2>
            <p className="mt-2">
              Tous les outils et actualités pour la belle vie à l'école : Ecole Directe, les circulaires & documents,
              les actus restauration, la gestion des ressources, ESIDOC, l'assurance scolaire.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <Link
              href="/vie-ecole/ecole-directe"
              className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              Ecole Directe
            </Link>
            <Link
              href="/documents/circulaires"
              className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              Circulaires
            </Link>
            <Link
              href="/documents/reglement"
              className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              Règlement
            </Link>
            <Link href="/restauration" className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
              Restauration
            </Link>
            <Link
              href="/vie-ecole/ressources"
              className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              Ressources
            </Link>
            <Link
              href="/vie-ecole/assurance"
              className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              Assurance
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Visite virtuelle</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500&text=Visite+Virtuelle"
                alt="Visite Virtuelle du Cours Bastide"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Visitez le Cours Bastide à 360°</h3>
              <p className="mb-4">
                En passant par le jardin, le CDI, la salle de musique, les laboratoires, la salle informatique et la
                cour du Puits, on vous présente en vidéo le Cours Bastide.
              </p>
              <Button>Voir les vidéos</Button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mt-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Contacter le Cours Bastide</h2>
            <p className="mt-2">Le secrétariat du Cours Bastide est ouvert du lundi au vendredi de 9h00 à 17h00</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/contact">
              <Button size="lg">Envoyer un message</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
