import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="container">
      <div className="rounded-lg bg-[#0a1854] text-white p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Rejoignez la communauté Cours Bastide</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Vous souhaitez en savoir plus sur notre établissement ou inscrire votre enfant ? Contactez-nous dès
          aujourd'hui pour organiser une visite ou obtenir des informations sur nos procédures d'inscription.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-[#0a1854] hover:bg-white/90">
            <Link href="/contact">Nous contacter</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            <Link href="/documents/inscriptions">Procédure d'inscription</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
