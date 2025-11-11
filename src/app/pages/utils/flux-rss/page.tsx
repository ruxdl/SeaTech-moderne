export default function FluxRSS() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Flux RSS</h1>
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
                <strong>Page en construction</strong> - Les flux RSS seront bientôt disponibles.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <svg className="h-8 w-8 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.5 7.5A4.5 4.5 0 017.5 3h5A4.5 4.5 0 0117 7.5v5a4.5 4.5 0 01-4.5 4.5h-5A4.5 4.5 0 013 12.5v-5zM7.5 5A2.5 2.5 0 005 7.5v5A2.5 2.5 0 007.5 15h5a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0012.5 5h-5zM8 7a1 1 0 011 1v4a1 1 0 11-2 0V8a1 1 0 011-1zm4 0a1 1 0 011 1v4a1 1 0 11-2 0V8a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-800">Qu'est-ce qu'un flux RSS ?</h2>
          </div>
          <p className="text-gray-600 mb-4">
            RSS (Really Simple Syndication) vous permet de suivre automatiquement les dernières actualités et 
            publications de SeaTech dans votre lecteur de flux préféré, sans avoir à visiter le site régulièrement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Flux RSS prochainement disponibles</h2>
            <div className="space-y-4">
              <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                <svg className="h-5 w-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.5 7.5A4.5 4.5 0 017.5 3h5A4.5 4.5 0 0117 7.5v5a4.5 4.5 0 01-4.5 4.5h-5A4.5 4.5 0 013 12.5v-5z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-800">Actualités générales</h3>
                  <p className="text-sm text-gray-600">Toutes les actualités de l'école</p>
                </div>
              </div>

              <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                <svg className="h-5 w-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.5 7.5A4.5 4.5 0 017.5 3h5A4.5 4.5 0 0117 7.5v5a4.5 4.5 0 01-4.5 4.5h-5A4.5 4.5 0 013 12.5v-5z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-800">Événements et séminaires</h3>
                  <p className="text-sm text-gray-600">Conférences, séminaires et événements</p>
                </div>
              </div>

              <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                <svg className="h-5 w-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.5 7.5A4.5 4.5 0 017.5 3h5A4.5 4.5 0 0117 7.5v5a4.5 4.5 0 01-4.5 4.5h-5A4.5 4.5 0 013 12.5v-5z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-800">Recherche et publications</h3>
                  <p className="text-sm text-gray-600">Dernières publications scientifiques</p>
                </div>
              </div>

              <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                <svg className="h-5 w-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.5 7.5A4.5 4.5 0 017.5 3h5A4.5 4.5 0 0117 7.5v5a4.5 4.5 0 01-4.5 4.5h-5A4.5 4.5 0 013 12.5v-5z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-800">Offres de stage et emploi</h3>
                  <p className="text-sm text-gray-600">Nouvelles opportunités pour les étudiants</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Comment utiliser les flux RSS ?</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">1. Choisir un lecteur RSS</h3>
                <p className="text-sm">Utilisez un lecteur comme Feedly, Inoreader, ou l'extension de votre navigateur.</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">2. Copier l'URL du flux</h3>
                <p className="text-sm">Une fois disponibles, copiez l'URL du flux RSS qui vous intéresse.</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">3. Ajouter à votre lecteur</h3>
                <p className="text-sm">Collez l'URL dans votre lecteur RSS pour commencer à recevoir les actualités.</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">4. Restez informé</h3>
                <p className="text-sm">Recevez automatiquement les dernières nouvelles de SeaTech !</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>Info :</strong> Les flux RSS seront disponibles prochainement. 
                En attendant, suivez-nous sur nos réseaux sociaux pour rester informé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
