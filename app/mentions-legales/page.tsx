import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales - Cours Bastide",
  description: "Les mentions légales du Cours Bastide",
}

export default function MentionsLegales() {
  // HTML content embedded directly in the component
  const htmlContent = `
    <div class="legal-content">
      <h2>Informations légales</h2>
      <p>Cours Bastide<br>
      43 Rue Sainte-Cécile<br>
      13005 Marseille<br>
      France</p>
      
      <p>Téléphone : 04 91 48 67 96<br>
      Email : secretariat@coursbastide.fr</p>
      
      <h2>Directeur de la publication</h2>
      <p>Le directeur de la publication du site www.coursbastide.fr est le directeur de l'établissement Cours Bastide.</p>
      
      <h2>Hébergement</h2>
      <p>Le site www.coursbastide.fr est hébergé par [Nom de l'hébergeur], [Adresse de l'hébergeur].</p>
      
      <h2>Propriété intellectuelle</h2>
      <p>L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété exclusive de Cours Bastide ou de ses partenaires. Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation écrite préalable de Cours Bastide.</p>
      
      <h2>Protection des données personnelles</h2>
      <p>Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Vous pouvez exercer ce droit en nous contactant à l'adresse : secretariat@coursbastide.fr.</p>
      
      <h2>Cookies</h2>
      <p>Le site www.coursbastide.fr utilise des cookies pour améliorer l'expérience utilisateur. Pour plus d'informations, veuillez consulter notre <a href="/politique-confidentialite">politique de confidentialité</a>.</p>
      
      <h2>Limitation de responsabilité</h2>
      <p>Cours Bastide ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site www.coursbastide.fr, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.</p>
    </div>
  `

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Mentions Légales</h1>
      <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  )
}
