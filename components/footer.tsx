import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a1854] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/cours-bastide-logo-vertical.svg"
                alt="Cours Bastide Logo"
                width={120}
                height={120}
                className="h-24 w-auto bg-white/10 rounded-lg p-1"
              />
            </Link>
            <p className="text-white/80 mb-4">
              Établissement scolaire à Marseille offrant une éducation de qualité de la maternelle au lycée.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/etablissement" className="text-white/80 hover:text-white">
                  Établissement scolaire
                </Link>
              </li>
              <li>
                <Link href="/activites" className="text-white/80 hover:text-white">
                  Activités Extra-Scolaires
                </Link>
              </li>
              <li>
                <Link href="/loisirs" className="text-white/80 hover:text-white">
                  Centre de Loisirs
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="text-white/80 hover:text-white">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/pre-inscription" className="text-white/80 hover:text-white">
                  Pré-inscriptions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-white/80 hover:text-white">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-white/80 hover:text-white">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/politique-cookies" className="text-white/80 hover:text-white">
                  Politique de Cookies
                </Link>
              </li>
              <li>
                <Link href="/restauration" className="text-white/80 hover:text-white">
                  Restauration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Documents</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/documents/circulaires" className="text-white/80 hover:text-white">
                  Circulaires
                </Link>
              </li>
              <li>
                <Link href="/documents/calendrier" className="text-white/80 hover:text-white">
                  Calendrier scolaire
                </Link>
              </li>
              <li>
                <Link href="/documents/reglement" className="text-white/80 hover:text-white">
                  Règlement intérieur
                </Link>
              </li>
              <li>
                <Link href="/documents/menus" className="text-white/80 hover:text-white">
                  Menus de la cantine
                </Link>
              </li>
              <li>
                <Link href="/documents/tarifs" className="text-white/80 hover:text-white">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-white/80">43 Rue Sainte-Cécile, 13005 Marseille</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-white/80">04 91 48 67 96</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                <a href="mailto:secretariat@coursbastide.fr" className="text-white/80 hover:text-white">
                  secretariat@coursbastide.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="container py-6 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Cours Bastide. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
