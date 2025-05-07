import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PreInscriptionPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Pré-inscription au Cours Bastide</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choisissez le niveau scolaire pour accéder au formulaire de pré-inscription correspondant
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Maternelle et Primaire</CardTitle>
              <CardDescription>Pour les enfants de la petite section au CM2</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Accédez au formulaire de pré-inscription pour les classes de maternelle (petite, moyenne et grande
                section) et primaire (du CP au CM2).
              </p>
              <Link href="/pre-inscription/maternelle-primaire">
                <Button className="w-full bg-[#0a1854] hover:bg-[#0a1854]/90">
                  Pré-inscription Maternelle et Primaire
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle>Collège et Lycée</CardTitle>
              <CardDescription>Pour les élèves de la 6ème à la Terminale</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Accédez au formulaire de pré-inscription pour les classes de collège (de la 6ème à la 3ème) et lycée (de
                la 2nde à la Terminale).
              </p>
              <Link href="/pre-inscription/college-lycee">
                <Button className="w-full bg-[#0a1854] hover:bg-[#0a1854]/90">Pré-inscription Collège et Lycée</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
