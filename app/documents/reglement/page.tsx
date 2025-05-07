import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReglementPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Règlement intérieur</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Vivre ensemble au Cours Bastide</p>
        </div>

        <div className="prose prose-blue max-w-none">
          <p className="lead">
            Une communication optimale, le respect, la sécurité, l'épanouissement de la personne, la vie scolaire sont
            les piliers de notre règlement.
          </p>
        </div>

        <Tabs defaultValue="communication" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="respect">Respect</TabsTrigger>
            <TabsTrigger value="securite">Sécurité</TabsTrigger>
            <TabsTrigger value="epanouissement">Épanouissement</TabsTrigger>
            <TabsTrigger value="vie-scolaire">Vie scolaire</TabsTrigger>
          </TabsList>
          <TabsContent value="communication" className="mt-6">
            <div className="prose prose-blue max-w-none">
              <h2>Une communication optimale</h2>

              <h3>Les parents et les élèves doivent s'astreindre au suivi de l'organisation de la vie scolaire</h3>
              <ul>
                <li>
                  Toute absence doit être signalée par les parents uniquement par mail à la vie scolaire dès le premier
                  jour d'absence (scolarite-college@coursbastide.fr ou scolarite-lycée@coursbastide.fr), ou par
                  téléphone à partir de 08h30.
                </li>
                <li>
                  Les informations doivent être transmises aux familles (circulaires) et rapportées (coupons) aux dates
                  précisées (sorties, voyages, bourses…)
                </li>
                <li>Les parents et les élèves doivent consulter régulièrement ECOLEDIRECTE.</li>
                <li>
                  Les parents doivent participer aux rencontres avec les enseignants lorsqu'ils sont invités. Le
                  professeur principal est le premier interlocuteur à privilégier.
                </li>
              </ul>

              <h3>Le carnet de correspondance est un outil de communication entre la famille et l'établissement</h3>
              <ul>
                <li>L'élève doit être muni en permanence de son carnet de correspondance.</li>
                <li>Le carnet doit être quotidiennement visé et signé par les parents.</li>
                <li>Les absences et retards doivent être dûment justifiés et détaillés sur le coupon prévu.</li>
                <li>Le signalement par mail ou par téléphone de l'absence ne suffit pas.</li>
                <li>Les demandes de rencontre doivent se faire via le carnet de correspondance.</li>
              </ul>

              <h3>ECOLEDIRECTE est un moyen de communication entre l'établissement et la famille</h3>
              <ul>
                <li>Il permet aux parents un suivi de l'enfant (note, cahier de textes, absences, sanctions… ).</li>
                <li>Les élèves et les parents doivent le consulter régulièrement.</li>
              </ul>

              <h3>Les délégués sont des médiateurs et des relais indispensables entre la classe et les enseignants</h3>
              <ul>
                <li>Ils doivent avoir un comportement exemplaire.</li>
                <li>
                  Ils suivent une formation (responsable scolarit�� pour les élèves, association des parents d'élèves
                  pour les parents) et signent un engagement particulier.
                </li>
                <li>
                  Ils sont tenus au devoir de réserve notamment pour les informations confidentielles portées à leur
                  connaissance.
                </li>
                <li>
                  Ils sont présents aux conseils de classe (1er et 2nd trimestre), aux conseils de discipline et
                  certains d'entre eux aux conseils d'établissement.
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="respect" className="mt-6">
            <div className="prose prose-blue max-w-none">
              <h2>Le respect</h2>

              <h3>Politesse et éducation</h3>
              <ul>
                <li>Se saluer, se lever lorsqu'un adulte entre en classe et sort de classe.</li>
                <li>Savoir écouter et respecter la parole de l'autre.</li>
                <li>Adopter un langage correct sans propos injurieux.</li>
                <li>
                  Etre ponctuel, assidu, courtois envers tous les membres de l'équipe éducative. Les élèves en retard ne
                  seront pas admis en classe sans billet de retard. Le billet de retard prévu dans le carnet de
                  correspondance est rempli par un représentant de la vie scolaire. Cinq retards trimestriels engendrent
                  une observation écrite (cf. vie scolaire).
                </li>
                <li>Il ne saurait être toléré toute émission de crachat.</li>
                <li>Faire preuve de fraternité, de bienveillance.</li>
              </ul>

              <h3>Tenue</h3>
              <ul>
                <li>Avoir une bonne hygiène corporelle.</li>
                <li>Les gestes qui manifestent une relation affective entre élèves ne sont pas autorisés.</li>
                <li>
                  Avoir une tenue vestimentaire propre. Les collégiens et les lycéens devront appliquer le « dress code
                  » suivant :
                  <ul>
                    <li>
                      Bas : jean, pantalon, bermuda, jupe ou robe chasuble juste au-dessus des genoux (filles seulement)
                      UNIS.
                    </li>
                    <li>
                      Haut : t-shirt, chemise, polo ou chemisier (filles seulement) unis quelle que soit la couleur –
                      Pull uni.
                    </li>
                    <li>Le haut et le bas ne sont pas forcément assortis.</li>
                    <li>
                      Tous les lundis et lors de cérémonies ou de journées officielles, il faudra porter une chemise
                      blanche avec la cravate de l'établissement ou le foulard que vous devrez acquérir en début d'année
                      scolaire. Des blazers floqués du blason de l'établissement seront proposés aux lycéens (achat non
                      imposé).
                    </li>
                  </ul>
                </li>
                <li>
                  Les tenues de sport ne sont tolérées que le jour du cours d'E.P.S. (la tenue de rechange reste à
                  privilégier).
                </li>
                <li>
                  Les crânes rasés, les cheveux trop longs, les dessins sur le crâne, les sourcils rasés, les pantalons
                  troués… ne sont pas acceptés.
                </li>
                <li>
                  La promotion d'autres religions notamment par des objets, vêtements ou accessoires est formellement
                  interdite dans l'établissement (élèves et toute personne entrant dans l'établissement).
                </li>
              </ul>

              <h3>Environnement</h3>
              <ul>
                <li>
                  Le matériel pédagogique est la propriété de l'établissement et mérite le plus grand soin dans son
                  usage. Détériorer une installation c'est léser les autres et se priver soi-même.
                </li>
                <li>
                  Les déchets sont placés dans les poubelles et ne doivent pas être jetés ni dans la cour ou les abords
                  de l'établissement ni dans les locaux.
                </li>
                <li>
                  Les élèves pourront être sollicités pour aider au nettoyage de classes ou de locaux sur le principe de
                  la vie en communauté. De même des travaux d'intérêt général pourront être demandés en tant que
                  sanction.
                </li>
              </ul>

              <h3>Attitude dans sa scolarité et face au travail</h3>
              <ul>
                <li>Respecter le bon fonctionnement du cours (écoute et silence sont exigés).</li>
                <li>
                  Conserver une attitude propice à la réussite y compris dans sa tenue vestimentaire (enlever son
                  manteau, son écharpe…).
                </li>
                <li>Prendre en compte les spécificités et individualités de chacun. Faire preuve de tolérance.</li>
                <li>Privilégier l'autonomie.</li>
                <li>Travailler dans un esprit de collaboration, de confiance, de bienveillance et de fraternité.</li>
                <li>
                  La présence dans les couloirs de l'établissement entre les cours est interdite (sauf en cas de
                  changement de classe).
                </li>
                <li>
                  Avoir le matériel demandé pour travailler en classe. Tous les livres et cahiers doivent être couverts
                  et soignés. Les cartables ne doivent pas traîner dans les travées et tout lieu de circulation.
                </li>
                <li>Ne pas mâcher de chewing-gum, manger ou boire en classe.</li>
                <li>
                  Toute tentative de tricherie pendant un devoir surveillé sera sévèrement sanctionnée et pourra aller
                  jusqu'à l'exclusion temporaire ou définitive de l'établissement.
                </li>
                <li>
                  Les sorties des D.S. pour aller aux toilettes ne sont autorisées qu'à partir de deux heures de
                  composition sauf cas d'extrême urgence.
                </li>
                <li>En D.S., seule une petite bouteille d'eau est autorisée (pas d'encas, pas de canettes).</li>
              </ul>

              <h3>Restauration</h3>
              <ul>
                <li>Manger proprement, se servir de ses couverts, ne pas gaspiller (pain, eau…).</li>
                <li>Dans la file d'attente, ne pas doubler, se tenir calme et silencieux.</li>
                <li>Il est formellement interdit de sortir de la nourriture du réfectoire (pain, fruits…).</li>
                <li>
                  Le badge est obligatoire pour pouvoir accéder au self. Quatre oublis de badges entraîneront une
                  observation écrite.
                </li>
                <li>
                  Toute carte perdue ou détériorée devra être remplacée dans les plus brefs délais moyennant la somme de
                  dix euros.
                </li>
                <li>L'annulation des cours de l'après-midi ne vaut pas la dispense de cantine.</li>
                <li>
                  Pour le foyer, les boissons chaudes, canettes et nourritures ne doivent pas quitter la cafétéria ou sa
                  terrasse. L'élève prendra soin d'approvisionner son compte avant consommation (les crédits
                  non-utilisés seront remboursés).
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="securite" className="mt-6">
            <div className="prose prose-blue max-w-none">
              <h2>La sécurité</h2>

              <h3>Physique</h3>
              <p>
                Le préambule du règlement rappelle les articles de loi qui régissent les établissements scolaires.
                Certains points ci-dessous sont donc des rappels.
              </p>
              <ul>
                <li>
                  L'accès au Cours n'est autorisé qu'aux élèves et membres du personnel. Toute autre personne doit se
                  présenter à l'accueil de l'établissement.
                </li>
                <li>Les usagers de deux roues doivent mettre pied à terre aux abords de l'établissement.</li>
                <li>
                  Les élèves ayant un deux roues doivent garer leur véhicule au parking réservé à cet effet et y adapter
                  un antivol. L'établissement décline toute responsabilité en cas de vol.
                </li>
                <li>Il est interdit de pénétrer dans les locaux de l'établissement avant 08h00 et avant 13h30.</li>
                <li>
                  Aucune sortie hors de l'établissement en dehors des autorisations définies au début de l'année sur le
                  carnet de correspondance ne se fera sans justification écrite des parents, datée et signée.
                </li>
                <li>Les déplacements dans les couloirs doivent s'effectuer dans le calme.</li>
                <li>Interdiction d'être dans les laboratoires en l'absence de l'enseignant.</li>
                <li>Les jeux dangereux sont formellement interdits.</li>
                <li>Aucun objet ou produit illicite et dangereux ne doit être introduit dans l'établissement.</li>
                <li>
                  Il n'y a pas d'infirmerie. Les membres de l'équipe éducative ne sont pas habilités à délivrer des
                  médicaments. Dans les cas graves, la famille est avisée et les mesures nécessaires sont prises.
                </li>
                <li>Il est interdit de fumer.</li>
                <li>
                  L'usage, l'introduction, l'incitation à la consommation, la publicité par affichage, parlés ou écrits,
                  le port de symboles et de logos, et la détention de boissons alcoolisés ou de drogues sont strictement
                  interdits. Les infractions à cette règle pourront entraîner un signalement au Procureur de la
                  République et l'exclusion immédiate en attendant la convocation du Conseil de Discipline et des
                  sanctions allant de l'exclusion temporaire jusqu'à l'exclusion définitive.
                </li>
              </ul>

              <h3>Morale</h3>
              <p>
                Le préambule du règlement rappelle les articles de loi qui régissent les établissements scolaires.
                Certains points ci-dessous sont donc des rappels.
              </p>
              <ul>
                <li>
                  Interdiction de filmer de photographier ou d'enregistrer vocalement un membre de la communauté
                  éducative sans son accord.
                </li>
                <li>
                  Les menaces, brimades, gestes ou paroles de harcèlement ou actes initiatiques de type bizutage sont
                  formellement interdits par la Loi Française. En cas de non-respect de la Loi, le Chef d'établissement
                  doit procéder à un signalement au Procureur de la république.
                </li>
                <li>
                  Tout ce qui serait de nature à perturber le climat de travail ou l'ordre public sera sanctionné par
                  une exclusion temporaire voire définitive selon la gravité des gestes.
                </li>
              </ul>

              <h3>Des biens</h3>
              <ul>
                <li>
                  L'usage des téléphones portables, des appareils de musique et de vidéo est interdit dans l'enceinte de
                  l'établissement. Ils doivent être éteints et dans le sac. Un appareil visible sera confisqué 24
                  heures, une semaine puis jusqu'à la fin de l'année.
                </li>
                <li>Les lycéens peuvent utiliser leur portable dans l'enceinte de la cafétéria (l'intérieur).</li>
                <li>
                  L'établissement décline toute responsabilité en cas de perte, de vol ou de détérioration des objets de
                  valeurs apportés par les élèves.
                </li>
                <li>
                  La consultation de blogs personnels, les jeux en ligne, les conversations via réseaux sociaux,
                  l'installation de logiciels, d'applications ou de programmes malveillants, l'utilisation de disques
                  externes le changement de destination des outils informatiques (débranchement des câbles…) sont
                  formellement interdits.
                </li>
                <li>Toute dégradation provoquée par un élève sera facturée à sa famille.</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="epanouissement" className="mt-6">
            <div className="prose prose-blue max-w-none">
              <h2>L'épanouissement de la personne</h2>
              <p>
                <em>«Orandum est, ut sit mens sana in corpore sano»</em>
              </p>

              <ul>
                <li>Chacun peut être écouté par un membre de l'équipe éducative en cas de difficultés personnelles.</li>
                <li>
                  L'élève peut bénéficier d'information et d'aide pour construire son projet d'orientation (conseillère
                  d'orientation, C.D.I., accompagnement éducatif, adjointe de direction…). Les parents doivent
                  impérativement s'impliquer dans le projet et ont la responsabilité de l'orientation de leur enfant.
                </li>
                <li>Les élèves peuvent compter sur l'exemplarité morale des membres de la communauté éducative.</li>
              </ul>

              <h3>L'exigence du vivre ensemble</h3>
              <ul>
                <li>Savoir être à l'écoute de l'autre et accepter avec bienveillance les idées différentes.</li>
                <li>
                  L'élève s'engage à participer positivement à la vie du groupe, de la classe, de l'établissement, de la
                  communauté : projets, sorties, stages, voyages… Les parents mettront tout en oeuvre pour faciliter la
                  participation de leur enfant. En cas de souci financier, toutes les possibilités d'aide seront
                  envisagées avec l'établissement via l'association des parents d'élève.
                </li>
                <li>
                  Favoriser la participation aux messes des familles mensuelles sur la paroisse Notre Dame du Mont.
                </li>
              </ul>

              <h3>L'ouverture de l'esprit</h3>
              <ul>
                <li>Chacun doit participer activement à la culture religieuse.</li>
                <li>
                  La présence aux célébrations est obligatoire pour tous les élèves quel que soit sa confession
                  religieuse.
                </li>
                <li>Toutes les confessions sont respectées.</li>
                <li>
                  Les élèves Catholiques sont invités à participer aux préparations des sacrements et rituels proposés
                  par l'établissement.
                </li>
                <li>
                  Chacun sera pris dans l'élan, le désir de participer aux multiples manifestations de charité, aux
                  propositions pastorales, aux pèlerinages.
                </li>
                <li>
                  Les voyages font partie intégrante du projet éducatif de l'établissement. Chacun fera son maximum pour
                  y participer. Pendant les voyages, le règlement intérieur s'applique strictement.
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="vie-scolaire" className="mt-6">
            <div className="prose prose-blue max-w-none">
              <h2>La vie scolaire</h2>

              <h3>Education Physique et Sportive</h3>
              <ul>
                <li>
                  Les élèves dispensés à l'année ou au-delà de deux cours consécutifs doivent remettre au Préfet des
                  Etudes ou à la responsable scolarité un certificat médical.
                </li>
                <li>
                  Pour les dispenses ponctuelles anticipées, les élèves doivent remettre au préfet des études ou à la
                  responsable de scolarité une demande de dispense justifiée et signée par les parents (cf carnet de
                  correspondance).
                </li>
                <li>
                  Les Lycéens se rendront par leurs propres moyens sur les sites des installations sportives. Le cours
                  Bastide est dégagé de toute responsabilité sur les temps de trajet aller-retour. Les collégiens
                  prendront des cars ou seront encadrés sur les trajets.
                </li>
                <li>
                  Par décision ministérielle, les élèves de terminale dispensés sont tenus d'assister à tous les cours.
                </li>
              </ul>

              <h3>Travaux Personnels Encadrés</h3>
              <ul>
                <li>
                  Les sorties d'élèves hors de l'établissement, pendant le temps scolaire, individuellement ou par
                  petits groupes, pour les besoins d'une activité liée à l'enseignement, telles qu'enquêtes, recherches
                  personnelles, doivent être approuvées par le Chef d'établissement.
                </li>
              </ul>

              <h3>Centre de Documentation et d'Information</h3>
              <ul>
                <li>
                  Le C.D.I est réservé aux élèves ayant un besoin de travailler sur documents. Ce n'est pas une salle de
                  permanence.
                </li>
                <li>
                  Lorsque le C.D.I. est occupé par un cours, les autres élèves doivent aller en permanence sauf
                  autorisation exceptionnelle de la documentaliste.
                </li>
                <li>
                  Pendant les heures de permanence les élèves qui ont des recherches documentaires ou des besoins liés à
                  l'utilisation du C.D.I., doivent justifier leur demande auprès de la documentaliste et venir avec leur
                  carnet de correspondance.
                </li>
                <li>Les élèves ne doivent pas arriver au C.D.I. en cours d'heure ni le quitter avant la sonnerie.</li>
                <li>Un élève exclu d'un cours ne pourra être accueilli au C.D.I.</li>
                <li>
                  Prêt de livres et de revues : Deux à la fois pour une durée de quinze jours. Tout livre emprunté doit
                  être enregistré sur l'ordinateur de la documentaliste. Les retards seront sanctionnés.
                </li>
                <li>
                  Les manuels scolaires de l'établissement ne sont prêtés exceptionnellement que pour une heure et
                  doivent être demandés à la documentaliste.
                </li>
                <li>Le silence doit être particulièrement de mise au C.D.I.</li>
              </ul>

              <h3>Evaluation</h3>
              <ul>
                <li>
                  A l'occasion des conseils de classe, le chef d'établissement, après concertation avec l'équipe
                  pédagogique, a la possibilité d'attribuer à l'élève : les félicitations mention excellence, les
                  félicitations, le tableau d'honneur, les encouragements (ou compliments au troisième trimestre), un
                  avertissement.
                </li>
                <li>
                  Deux avertissements identiques et consécutifs entraînent une exclusion de trois jours et/ou un conseil
                  éducatif.
                </li>
                <li>Les modalités d'attribution sont revues chaque année par l'équipe pédagogique.</li>
                <li>
                  Lors du premier conseil de période, les élèves en difficulté reçoivent un bulletin d'alerte
                  déclenchant un échange entre le professeur principal et les parents.
                </li>
              </ul>

              <h3>Les sanctions</h3>
              <p>
                En cas de non-respect de ce règlement ou d'absence de travail, les sanctions suivantes seront
                immédiatement prises :
              </p>
              <ul>
                <li>
                  Observation orale : faite par les professeurs, les surveillantes, le Préfet des études, lors des cours
                  ou dans toute activité (permanence, couloirs, C.D.I., restaurant…)
                </li>
                <li>
                  Observation écrite : mentionnée sur le carnet de correspondance et signée par les parents pouvant être
                  accompagnée d'un travail à effectuer en retenue. Quatre observations écrites entraînent une
                  réprimande.
                </li>
              </ul>
              <p>
                Les cadres éducatifs ou la direction se réservent le droit d'user des réprimandes sans observation
                écrite préalable dans des cas graves tels que l'exclusion des cours, la sortie de l'établissement sans
                permission, l'insolence…
              </p>
              <p>
                Le chef d'établissement peut décider du renvoi d'un élève jusqu'à huit jours sans convocation du conseil
                de discipline.
              </p>
              <p>
                La multiplication des réprimandes et/ou des avertissements compromet grandement le maintien de l'élève
                dans l'établissement pour l'année suivante et peut déclencher un conseil de discipline.
              </p>

              <h3>Le conseil de discipline</h3>
              <ul>
                <li>
                  Il se réunit sur convocation du Chef d'établissement, à sa seule initiative. L'élève et les parents de
                  l'élève sont convoqués par courrier.
                </li>
                <li>
                  Il est présidé par le Chef d'établissement ou une personne désignée par lui, qui prononce la sanction,
                  après avoir entendu l'avis des membres du conseil qui sont : le responsable scolaire ou le préfet des
                  études, le professeur principal, un enseignant au moins, la Présidente de l'A.P.E.L. ou par délégation
                  un autre membre du bureau de l'association, les délégués de classe (au moins un).
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
