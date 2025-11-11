import Link from 'next/link';

export default function SpecialiteMateriaux() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
      {/* Header de la page */}
      <div className="bg-gradient-to-r from-green-600 via-blue-500 to-green-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              🏭 Spécialité Matériaux
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Formation par apprentissage dans le domaine des matériaux et de leurs applications industrielles
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
            Cette section présentera prochainement le détail de la spécialité Matériaux et ses débouchés industriels.
          </p>
        </div>

        {/* Informations temporaires */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">🔬 Formation par apprentissage</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Alternance entreprise/école
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Sciences des matériaux
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Applications industrielles
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Caractérisation des matériaux
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">🏗️ Secteurs d'application</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Aéronautique
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Automobile
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Énergie
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Biomédical
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100 mb-12">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6 text-center">📧 Contact Spécialité Matériaux</h3>
          <div className="text-center space-y-2">
            <p className="flex items-center justify-center text-green-600 font-medium">
              <span className="mr-2">✉️</span>
              materiaux@seatech.fr
            </p>
            <p className="flex items-center justify-center text-blue-600 font-medium">
              <span className="mr-2">📞</span>
              04 94 14 26 45
            </p>
          </div>
        </div>

        {/* Navigation de retour */}
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
