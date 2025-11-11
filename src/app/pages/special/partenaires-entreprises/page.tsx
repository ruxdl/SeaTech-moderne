import Link from 'next/link';

export default function PartenairesEntreprises() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de la page */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🤝 Partenaires & Entreprises
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un réseau industriel au service de l'innovation et de la formation
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Message de construction */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center mb-12">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold text-green-900 mb-2">Page en construction</h2>
          <p className="text-green-700">
            Cette page est actuellement en cours de développement. Le contenu détaillé sur nos partenariats et collaborations avec les entreprises sera bientôt disponible.
          </p>
        </div>

        {/* Informations temporaires */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🏭 Nos Partenariats</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Réseau industriel régional</li>
              <li>• Collaborations internationales</li>
              <li>• Projets de recherche appliquée</li>
              <li>• Stages et emplois étudiants</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📧 Contact Entreprises</h3>
            <p className="text-gray-600 mb-4">
              Vous souhaitez collaborer avec SeaTech ?
            </p>
            <p className="text-green-600">
              Email : contact@seatech.fr<br />
              Tél : 04 94 14 26 40
            </p>
          </div>
        </div>

        {/* Navigation de retour */}
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
