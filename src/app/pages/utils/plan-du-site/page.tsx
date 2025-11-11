import Link from "next/link";

export default function PlanDuSite() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Plan du site</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Plan du site</strong> - Navigation complète du site SeaTech.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Pages principales</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">🏠 Accueil</Link></li>
              <li><Link href="/ecole" className="text-gray-700 hover:text-blue-600 transition-colors">🏫 L'École</Link></li>
              <li><Link href="/formation" className="text-gray-700 hover:text-blue-600 transition-colors">🎓 Devenir Ingénieur</Link></li>
              <li><Link href="/international" className="text-gray-700 hover:text-blue-600 transition-colors">🌍 International</Link></li>
              <li><Link href="/entreprises" className="text-gray-700 hover:text-blue-600 transition-colors">🏢 Entreprises</Link></li>
              <li><Link href="/recherche" className="text-gray-700 hover:text-blue-600 transition-colors">🔬 Recherche</Link></li>
              <li><Link href="/actualites" className="text-gray-700 hover:text-blue-600 transition-colors">📰 Actualités</Link></li>
              <li><Link href="/seminaires" className="text-gray-700 hover:text-blue-600 transition-colors">📅 Séminaires</Link></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Services & Outils</h2>
            <ul className="space-y-2">
              <li><Link href="/depot-stage-emploi" className="text-gray-700 hover:text-blue-600 transition-colors">💼 Dépôt Stage/Emploi</Link></li>
              <li><a href="https://cas.univ-tln.fr/cas/login?service=https%3A%2F%2Fidp.univ-tln.fr%2Fidp%2FAuthn%2FExtCas%3Fconversation%3De2s1&entityId=https%3A%2F%2Fsp.partage.renater.fr%2Fseatech" target="_blank" className="text-gray-700 hover:text-blue-600 transition-colors">📧 Webmail</a></li>
              <li><a href="https://ent.univ-tln.fr" target="_blank" className="text-gray-700 hover:text-blue-600 transition-colors">🏛️ ENT</a></li>
              <li><a href="https://cas.univ-tln.fr/cas/login?service=https%3A%2F%2Fged.univ-tln.fr%2Fnuxeo%2Fui%2F" target="_blank" className="text-gray-700 hover:text-blue-600 transition-colors">📁 Intranet</a></li>
              <li><a href="https://seatech.univ-tln.fr/output/" target="_blank" className="text-gray-700 hover:text-blue-600 transition-colors">🏛️ Visite Virtuelle</a></li>
              <li><a href="https://annuaire.univ-tln.fr/home" target="_blank" className="text-gray-700 hover:text-blue-600 transition-colors">📋 Annuaire</a></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Informations pratiques</h2>
            <ul className="space-y-2">
              <li><Link href="/plan-acces" className="text-gray-700 hover:text-blue-600 transition-colors">📍 Plan d'accès</Link></li>
              <li><Link href="/nous-contacter" className="text-gray-700 hover:text-blue-600 transition-colors">📞 Nous contacter</Link></li>
              <li><Link href="/plan-du-site" className="text-gray-700 hover:text-blue-600 transition-colors">🗺️ Plan du site</Link></li>
              <li><Link href="/flux-rss" className="text-gray-700 hover:text-blue-600 transition-colors">📡 Flux RSS</Link></li>
              <li><Link href="/mentions-legales" className="text-gray-700 hover:text-blue-600 transition-colors">⚖️ Mentions légales</Link></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Partenaires</h2>
            <ul className="space-y-2 text-gray-600">
              <li><a href="http://www.cti-commission.fr/" target="_blank" className="hover:text-blue-600 transition-colors">CTI - Commission des Titres d'Ingénieur</a></li>
              <li><a href="http://eurace.enaee.eu/" target="_blank" className="hover:text-blue-600 transition-colors">ENAEE - European Network for Accreditation</a></li>
              <li><a href="http://www.cdefi.fr/" target="_blank" className="hover:text-blue-600 transition-colors">CDEFI - Conférence des Directeurs</a></li>
              <li><a href="http://www.polymeca.org/" target="_blank" className="hover:text-blue-600 transition-colors">Polymeca</a></li>
              <li><a href="http://www.campusfrance.org/fr/" target="_blank" className="hover:text-blue-600 transition-colors">Campus France</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
