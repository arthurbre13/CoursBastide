import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ce que disent nos familles</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez les témoignages de parents et d'élèves qui ont choisi Cours Bastide pour leur éducation.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <Card key={i} className="h-full">
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-muted-foreground/40 mb-4" />
              <p className="italic">{testimonial.quote}</p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${testimonial.name.charAt(0)}`} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote:
      "Cours Bastide a offert à mes enfants un environnement d'apprentissage exceptionnel. Les enseignants sont attentifs et l'approche pédagogique est parfaitement adaptée à leurs besoins.",
    name: "Marie Dupont",
    role: "Parent d'élèves",
  },
  {
    quote:
      "Je suis reconnaissante pour l'attention personnalisée que mon fils reçoit à Cours Bastide. Il a fait d'énormes progrès académiques et a développé une véritable passion pour l'apprentissage.",
    name: "Sophie Martin",
    role: "Parent d'élève",
  },
  {
    quote:
      "Les activités extra-scolaires proposées par Cours Bastide sont variées et enrichissantes. Ma fille a découvert sa passion pour le théâtre grâce à ces ateliers.",
    name: "Thomas Leroy",
    role: "Parent d'élève",
  },
]
