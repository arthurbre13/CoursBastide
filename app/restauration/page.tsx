import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restauration - Cours Bastide",
  description: "Informations sur la restauration au Cours Bastide",
}

export default function Restauration() {
  // HTML content embedded directly in the component
  const htmlContent = `
    <div class="restauration-content">
      <h2>Service de restauration</h2>
      <p>Le Cours Bastide propose un service de restauration de qualité pour tous les élèves de l'établissement, de la maternelle au lycée.</p>
      
      <h2>Notre approche</h2>
      <p>Nous accordons une importance particulière à la qualité nutritionnelle des repas servis à nos élèves. Nos menus sont élaborés par une diététicienne professionnelle afin de garantir l'équilibre alimentaire nécessaire à la croissance et au développement des enfants et adolescents.</p>
      
      <h2>Nos engagements</h2>
      <ul>
        <li>Des produits frais et de saison</li>
        <li>Des fournisseurs locaux privilégiés</li>
        <li>Des menus variés et équilibrés</li>
        <li>Une attention particulière aux allergies et régimes spécifiques</li>
        <li>Une sensibilisation au gaspillage alimentaire</li>
      </ul>
      
      <h2>Organisation</h2>
      <p>Le service de restauration fonctionne les lundis, mardis, jeudis et vendredis pour tous les élèves, et le mercredi pour les élèves inscrits aux activités de l'après-midi ou au centre de loisirs.</p>
      
      <p>Les horaires de service sont organisés par niveau :</p>
      <ul>
        <li>Maternelle : 11h30 - 12h15</li>
        <li>Primaire : 12h00 - 12h45</li>
        <li>Collège : 12h30 - 13h15</li>
        <li>Lycée : 13h00 - 13h45</li>
      </ul>
      
      <h2>Menus</h2>
      <p>Les menus sont affichés à l'entrée de l'établissement et disponibles sur l'espace numérique de travail. Ils sont établis pour une période de 4 semaines et communiqués aux familles à l'avance.</p>
      
      <h2>Tarifs</h2>
      <p>Les tarifs de la restauration scolaire sont inclus dans les frais de scolarité pour les élèves demi-pensionnaires. Pour les élèves externes souhaitant déjeuner occasionnellement à la cantine, des tickets repas sont disponibles au secrétariat.</p>
      
      <h2>Allergies et régimes spécifiques</h2>
      <p>Pour les élèves souffrant d'allergies alimentaires ou suivant un régime spécifique pour raisons médicales, un Projet d'Accueil Individualisé (PAI) doit être mis en place. Merci de contacter le secrétariat pour plus d'informations.</p>
    </div>
  `

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Restauration</h1>
      <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  )
}
