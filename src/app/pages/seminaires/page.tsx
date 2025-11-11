import Link from 'next/link';

export default function Seminaires() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
      {/* Header de la page */}
      <div className="bg-gradient-to-r from-blue-600 via-green-500 to-blue-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              📅 Séminaires & Conférences
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Événements scientifiques, conférences et séminaires de recherche
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Message de construction */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-10 text-center mb-12 shadow-lg">
          <div className="text-7xl mb-6">🚧</div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Page en construction
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Cette section présentera prochainement le calendrier des séminaires, des conférences et des événements scientifiques de l'école.
          </p>
        </div>

        {/* Informations temporaires */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">📅 Événements</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Séminaires de recherche
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Conférences scientifiques
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Événements académiques
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">📧 Contact</h3>
            <p className="text-gray-700 mb-6">
              Pour organiser un séminaire :
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-blue-600 font-medium">
                <span className="mr-2">✉️</span>
                seminaires@seatech.fr
              </p>
              <p className="flex items-center text-green-600 font-medium">
                <span className="mr-2">📞</span>
                04 94 14 26 40
              </p>
            </div>
          </div>
        </div>

        {/* Navigation de retour */}
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
