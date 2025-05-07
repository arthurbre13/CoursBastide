"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const ListItem = ({
  className,
  title,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & {
  title: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-[#0a1854] text-white py-2">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span className="text-sm">04 91 48 67 96</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <a href="mailto:secretariat@coursbastide.fr" className="text-sm hover:underline">
                secretariat@coursbastide.fr
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-primary">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white py-2 border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/cours-bastide-blason.svg"
              alt="Cours Bastide Logo"
              width={60}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#0a1854]">Établissement scolaire</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="/etablissement/maternelle" title="Maternelle">
                        Accueil des enfants de 3 à 6 ans
                      </ListItem>
                      <ListItem href="/etablissement/primaire" title="Primaire">
                        Enseignement fondamental du CP au CM2
                      </ListItem>
                      <ListItem href="/etablissement/college" title="Collège">
                        De la 6ème à la 3ème
                      </ListItem>
                      <ListItem href="/etablissement/lycee" title="Lycée">
                        Préparation au baccalauréat
                      </ListItem>
                      <ListItem href="/etablissement/projet" title="Projet pédagogique">
                        Notre approche éducative
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#0a1854]">Documents</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <ListItem href="/documents/circulaires" title="Circulaires">
                        Informations importantes pour les parents
                      </ListItem>
                      <ListItem href="/documents/calendrier" title="Calendrier scolaire">
                        Dates des vacances et événements
                      </ListItem>
                      <ListItem href="/documents/reglement" title="Règlement intérieur">
                        Règlement de l'établissement
                      </ListItem>
                      <ListItem href="/pre-inscription" title="Pré-inscription">
                        Procédure et documents d'inscription
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/activites" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-[#0a1854]">
                      Activités Extra-Scolaires
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/loisirs" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-[#0a1854]">
                      Centre de Loisirs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/actualites" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-[#0a1854]">
                      Actualités
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-[#0a1854]">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-2 mt-4">
                <div className="font-medium text-lg">Établissement scolaire</div>
                <Link href="/etablissement/maternelle" className="pl-4 py-1 hover:text-primary">
                  Maternelle
                </Link>
                <Link href="/etablissement/primaire" className="pl-4 py-1 hover:text-primary">
                  Primaire
                </Link>
                <Link href="/etablissement/college" className="pl-4 py-1 hover:text-primary">
                  Collège
                </Link>
                <Link href="/etablissement/lycee" className="pl-4 py-1 hover:text-primary">
                  Lycée
                </Link>
                <Link href="/etablissement/projet" className="pl-4 py-1 hover:text-primary">
                  Projet pédagogique
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium text-lg">Documents</div>
                <Link href="/documents/circulaires" className="pl-4 py-1 hover:text-primary">
                  Circulaires
                </Link>
                <Link href="/documents/calendrier" className="pl-4 py-1 hover:text-primary">
                  Calendrier scolaire
                </Link>
                <Link href="/documents/reglement" className="pl-4 py-1 hover:text-primary">
                  Règlement intérieur
                </Link>
                <Link href="/pre-inscription" className="pl-4 py-1 hover:text-primary">
                  Pré-inscription
                </Link>
              </div>
              <Link href="/activites" className="font-medium text-lg py-1 hover:text-primary">
                Activités Extra-Scolaires
              </Link>
              <Link href="/loisirs" className="font-medium text-lg py-1 hover:text-primary">
                Centre de Loisirs
              </Link>
              <Link href="/actualites" className="font-medium text-lg py-1 hover:text-primary">
                Actualités
              </Link>
              <Link href="/contact" className="font-medium text-lg py-1 hover:text-primary">
                Contact
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
