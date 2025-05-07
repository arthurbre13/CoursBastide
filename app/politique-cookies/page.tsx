import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de Cookies - Cours Bastide",
  description: "La politique de cookies du Cours Bastide",
}

export default function PolitiqueCookies() {
  // HTML content embedded directly in the component
  const htmlContent = `
    <div class="cookies-content">
      <h2>Qu'est-ce qu'un cookie ?</h2>
      <p>Un cookie est un petit fichier texte qui est stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies sont largement utilisés par les propriétaires de sites web pour faire fonctionner leurs sites, ou pour les faire fonctionner plus efficacement, ainsi que pour fournir des informations de rapport.</p>
      
      <h2>Comment utilisons-nous les cookies ?</h2>
      <p>Nous utilisons des cookies pour plusieurs raisons, détaillées ci-dessous. Malheureusement, dans la plupart des cas, il n'existe pas d'options standard de l'industrie pour désactiver les cookies sans désactiver complètement les fonctionnalités et caractéristiques qu'ils ajoutent à ce site. Il est recommandé de laisser tous les cookies si vous n'êtes pas sûr de savoir si vous en avez besoin ou non dans le cas où ils sont utilisés pour fournir un service que vous utilisez.</p>
      
      <h2>Les cookies que nous utilisons</h2>
      <h3>Cookies liés aux formulaires</h3>
      <p>Lorsque vous soumettez des données via un formulaire tel que ceux que l'on trouve sur les pages de contact ou les formulaires de commentaires, les cookies peuvent être configurés pour se souvenir de vos informations d'utilisateur pour une référence future.</p>
      
      <h3>Cookies de préférences du site</h3>
      <p>Afin de vous offrir une grande expérience sur ce site, nous fournissons la fonctionnalité pour définir vos préférences pour la façon dont ce site fonctionne lorsque vous l'utilisez. Afin de mémoriser vos préférences, nous devons définir des cookies afin que ces informations puissent être appelées chaque fois que vous interagissez avec une page qui est affectée par vos préférences.</p>
      
      <h3>Cookies tiers</h3>
      <p>Dans certains cas particuliers, nous utilisons également des cookies fournis par des tiers de confiance. La section suivante détaille quels cookies tiers vous pourriez rencontrer via ce site.</p>
      <ul>
        <li>Ce site utilise Google Analytics qui est l'une des solutions d'analyse les plus répandues et les plus fiables sur le web pour nous aider à comprendre comment vous utilisez le site et comment nous pouvons améliorer votre expérience. Ces cookies peuvent suivre des éléments tels que le temps que vous passez sur le site et les pages que vous visitez afin que nous puissions continuer à produire du contenu attrayant.</li>
      </ul>
      
      <h2>Comment contrôler les cookies</h2>
      <p>Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez – pour plus d'informations, consultez aboutcookies.org. Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et vous pouvez configurer la plupart des navigateurs pour les empêcher d'être placés. Si vous le faites, toutefois, vous devrez peut-être ajuster manuellement certaines préférences chaque fois que vous visitez un site et certains services et fonctionnalités peuvent ne pas fonctionner.</p>
    </div>
  `

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Politique de Cookies</h1>
      <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  )
}
