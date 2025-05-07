"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function CollegeLyceePreInscriptionPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Pré-inscription Collège et Lycée</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Procédure de pré-inscription pour les classes de collège et lycée au Cours Bastide
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Formulaire de pré-inscription</CardTitle>
            <CardDescription>
              Pour inscrire votre enfant au collège ou au lycée, veuillez suivre les étapes ci-dessous
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#0a1854] hover:bg-[#0a1854]/90"
                onClick={() => window.open("https://preinscriptions.ecoledirecte.com/?RNE=0131344R", "_blank")}
              >
                Accéder au formulaire de pré-inscription
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Télécharger le document
              </Button>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-4">Documents à fournir</h3>
              <p className="mb-2 font-medium">Documents à télécharger :</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  Une lettre des parents et/ou enfant à l'attention du chef d'établissement de 2e degré, Mme Marchand ;
                </li>
                <li>Les bulletins scolaires N-1.</li>
                <li>Les bulletins scolaires de l'année en cours dès que vous les avez,</li>
                <li>Photo d'identité si possible.</li>
              </ul>
              <p className="text-sm italic">
                La réponse de Mme Marchand à votre demande vous sera communiquée par e-mail, qu'elle soit favorable ou
                défavorable. Une réponse positive à votre dossier ne signifie pas que votre enfant est automatiquement
                inscrit au Cours Bastide. La confirmation définitive sera donnée lors de l'entretien avec la Direction.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-4">
                Tutoriel pour compléter le formulaire "Pré-inscription en ligne"
              </h3>
              <p className="mb-4">
                Merci de respecter les consignes ci-dessous pour la saisie de vos données. Ces dernières seront
                enregistrées et sécurisées dans notre base.
              </p>
              <h4 className="font-medium mb-2">A/ Informations concernant le responsable 1 et l'élève</h4>
              <p className="mb-2 text-sm">
                (Remarque : si vous avez déjà un enfant scolarisé dans l'établissement merci de noter le même Nom et
                Prénom pour le Responsable 1 → cf. votre compte Ecole Directe) , cela évitera de créer des doublons dans
                la base élèves.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm mb-4">
                <li>Saisir Nom en MAJUSCULES</li>
                <li>Première lettre du Prénom en Majuscule et le reste en minuscules</li>
                <li>Remplir la situation familiale</li>
                <li>Merci de remplir tous les champs</li>
                <li>Lien de parenté du(es) responsables avec l'enfant</li>
                <li>Email et téléphone de l'enfant (à partir de la sixième)</li>
              </ul>

              <h4 className="font-medium mb-2">B/ Saisie pour le 2ème responsable :</h4>
              <p className="mb-2 text-sm">Deux possibilités :</p>
              <ol className="list-decimal pl-6 space-y-1 text-sm">
                <li>
                  Vous êtes mariés, pacsés ou en concubinage, pour saisir les informations concernant votre conjoint(e)
                  laissez la case "Habite à la même adresse" cochée (par défaut)
                </li>
                <li>
                  Vous êtes séparés ou divorcés, pour saisir les informations de l'autre responsable vous devez décocher
                  la case "habite à la même adresse"
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
