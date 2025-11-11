import Link from 'next/link';

export default function SpecialiteSystemesNumeriques() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      {/* Header de la page */}
      <div className="bg-gradient-to-r from-blue-600 via-green-500 to-blue-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              💻 Spécialité Systèmes Numériques
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Formation par apprentissage dans les systèmes numériques et les nouvelles technologies
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Message de construction */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl p-10 text-center mb-12 shadow-lg">
          <div className="text-7xl mb-6">🚧</div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Page en construction
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Cette section présentera prochainement le détail de la spécialité Systèmes Numériques et ses technologies de pointe.
          </p>
        </div>

        {/* Informations temporaires */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">⚡ Technologies d'avenir</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Intelligence Artificielle
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Systèmes embarqués
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Internet des Objets (IoT)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Cybersécurité
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">🎯 Compétences développées</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Programmation avancée
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Architecture des systèmes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Traitement du signal
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Réseaux et télécoms
              </li>
            </ul>
          </div>
        </div>

        {/* Secteurs d'application */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 mb-12">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6 text-center">🚀 Secteurs d'application</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
              <div className="text-3xl mb-2">🏢</div>
              <p className="text-sm font-medium text-gray-700">Industrie 4.0</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
              <div className="text-3xl mb-2">🚗</div>
              <p className="text-sm font-medium text-gray-700">Véhicules connectés</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
              <div className="text-3xl mb-2">🏥</div>
              <p className="text-sm font-medium text-gray-700">E-santé</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
              <div className="text-3xl mb-2">🌐</div>
              <p className="text-sm font-medium text-gray-700">Smart Cities</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100 mb-12">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6 text-center">📧 Contact Systèmes Numériques</h3>
          <div className="text-center space-y-2">
            <p className="flex items-center justify-center text-blue-600 font-medium">
              <span className="mr-2">✉️</span>
              numerique@seatech.fr
            </p>
            <p className="flex items-center justify-center text-green-600 font-medium">
              <span className="mr-2">📞</span>
              04 94 14 26 50
            </p>
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
