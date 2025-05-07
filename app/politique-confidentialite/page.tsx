import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Cours Bastide",
  description: "La politique de confidentialité du Cours Bastide",
}

export default function PolitiqueConfidentialite() {
  // HTML content embedded directly in the component
  const htmlContent = `
    <div class="privacy-content">
      <h2>Introduction</h2>
      <p>La présente politique de confidentialité a pour but d'informer les utilisateurs du site www.coursbastide.fr de la manière dont leurs informations personnelles sont collectées et traitées.</p>
      
      <h2>Collecte des informations</h2>
      <p>Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte, faites un achat, participez à un concours, et/ou lorsque vous vous déconnectez. Les informations recueillies incluent votre nom, votre adresse e-mail, numéro de téléphone, et éventuellement des informations démographiques.</p>
      
      <h2>Utilisation des informations</h2>
      <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
      <ul>
        <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
        <li>Fournir un contenu publicitaire personnalisé</li>
        <li>Améliorer notre site Web</li>
        <li>Améliorer le service client et vos besoins de prise en charge</li>
        <li>Vous contacter par e-mail</li>
        <li>Administrer un concours, une promotion, ou une enquête</li>
      </ul>
      
      <h2>Confidentialité du commerce en ligne</h2>
      <p>Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement.</p>
      
      <h2>Divulgation à des tiers</h2>
      <p>Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.</p>
      
      <h2>Protection des informations</h2>
      <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Nous protégeons également vos informations hors ligne.</p>
      
      <h2>Cookies</h2>
      <p>Nous utilisons des cookies pour comprendre et enregistrer vos préférences pour vos futures visites, tenir des statistiques sur le trafic du site, et pour personnaliser le contenu du site. Pour plus d'informations sur les cookies, veuillez consulter notre <a href="/politique-cookies">politique de cookies</a>.</p>
      
      <h2>Se désabonner</h2>
      <p>Nous utilisons l'adresse e-mail que vous fournissez pour vous envoyer des informations et mises à jour relatives à votre commande, des nouvelles de l'école, des informations sur des produits liés, etc. Si à n'importe quel moment vous souhaitez vous désinscrire et ne plus recevoir d'e-mails, des instructions de désabonnement détaillées sont incluses en bas de chaque e-mail.</p>
      
      <h2>Consentement</h2>
      <p>En utilisant notre site, vous consentez à notre politique de confidentialité.</p>
    </div>
  `

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Politique de Confidentialité</h1>
      <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  )
}
