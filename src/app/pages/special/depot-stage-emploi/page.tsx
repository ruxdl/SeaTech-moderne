export default function DepotStageEmploi() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header de la page */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dépôt Stage & Emploi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plateforme de dépôt des offres de stages et d'emplois pour les étudiants SeaTech
          </p>
        </div>

        {/* Contenu principal */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Page en construction
              </h2>
              
              <p className="text-gray-600 mb-6">
                Cette section permettra bientôt aux entreprises de déposer leurs offres de stages et d'emplois, 
                et aux étudiants de consulter les opportunités disponibles.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-900 mb-2">Fonctionnalités à venir :</h3>
                <ul className="text-left text-blue-800 space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Dépôt d'offres de stages et emplois
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Recherche et filtrage des opportunités
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Candidature en ligne
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Suivi des candidatures
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact temporaire */}
            <div className="border-t pt-6">
              <p className="text-gray-600 mb-4">
                En attendant, pour toute demande concernant les stages et emplois :
              </p>
              <a 
                href="mailto:stages@seatech.fr" 
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
