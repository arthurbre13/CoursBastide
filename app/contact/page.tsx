import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-muted-foreground mb-8">
            Vous avez des questions sur notre établissement, nos activités ou nos procédures d'inscription ? N'hésitez
            pas à nous contacter. Notre équipe est à votre disposition pour vous répondre.
          </p>

          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0a1854]/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-[#0a1854]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Téléphone</h3>
                  <p className="text-muted-foreground">04 91 48 67 96</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0a1854]/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-[#0a1854]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">secretariat@coursbastide.fr</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0a1854]/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-[#0a1854]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Adresse</h3>
                  <p className="text-muted-foreground">43 Rue Sainte-Cécile, 13005 Marseille</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0a1854]/10 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-[#0a1854]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Horaires d'ouverture</h3>
                  <p className="text-muted-foreground">Lundi au vendredi : 8h00 - 18h00</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Envoyez-nous un message</CardTitle>
              <CardDescription>
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input id="name" placeholder="Votre nom" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Votre email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input id="subject" placeholder="Sujet de votre message" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Votre message" rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Envoyer
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <div className="rounded-lg overflow-hidden h-[400px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.065139971292!2d5.3920!3d43.2940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE3JzM4LjQiTiA1wrAyMyczNS4yIkU!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
