import { BookOpen, Users, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Features() {
  return (
    <section className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nos services éducatifs</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Cours Bastide propose une offre éducative complète pour accompagner les enfants dans leur développement.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <Link href="/etablissement" className="group">
          <Card className="h-full transition-all group-hover:shadow-lg">
            <CardHeader className="text-center pb-2">
              <div className="w-12 h-12 rounded-full bg-[#0a1854]/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-[#0a1854]" />
              </div>
              <CardTitle className="text-[#0a1854] group-hover:text-[#0a1854]/80 transition-colors">
                Établissement scolaire
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base">
                De la maternelle au lycée, nous offrons un enseignement de qualité dans un cadre bienveillant.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
        <Link href="/activites" className="group">
          <Card className="h-full transition-all group-hover:shadow-lg">
            <CardHeader className="text-center pb-2">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                <Palette className="h-6 w-6 text-amber-500" />
              </div>
              <CardTitle className="text-amber-500 group-hover:text-amber-500/80 transition-colors">
                Activités Extra-scolaires
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base">
                Enfants & Adultes (externes au Cours Bastide) Sports, chant, théâtre et bien plus encore.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
        <Link href="/loisirs" className="group">
          <Card className="h-full transition-all group-hover:shadow-lg">
            <CardHeader className="text-center pb-2">
              <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-rose-500" />
              </div>
              <CardTitle className="text-rose-500 group-hover:text-rose-500/80 transition-colors">
                Centre de Loisirs
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base">
                Des loisirs pour mercredis et les vacances scolaires, avec des activités variées et enrichissantes.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>
    </section>
  )
}
