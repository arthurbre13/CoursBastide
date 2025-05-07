import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

export default function NewsSection() {
  return (
    <section className="container">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Actualités</h2>
          <p className="text-muted-foreground">Les dernières nouvelles de Cours Bastide</p>
        </div>
        <Button asChild variant="outline" className="mt-4 md:mt-0">
          <Link href="/actualites">Toutes les actualités</Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={`/placeholder.svg?height=200&width=400&text=Actualité+${i}`}
                alt={`Actualité ${i}`}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <CalendarDays className="h-4 w-4" />
                <span>12 Mai 2023</span>
              </div>
              <CardTitle className="line-clamp-2">Journée portes ouvertes à Cours Bastide</CardTitle>
              <CardDescription>
                Venez découvrir notre établissement et rencontrer notre équipe pédagogique.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="link" className="px-0">
                <Link href="/actualites/portes-ouvertes">Lire la suite</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
