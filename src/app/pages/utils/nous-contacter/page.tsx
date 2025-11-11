export default function NousContacter() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Nous contacter</h1>
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
                <strong>Page en construction</strong> - Le formulaire de contact sera bientôt disponible.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Informations générales</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-medium text-gray-800">Adresse</h3>
                <p>SeaTech - École d'ingénieurs<br />
                Université de Toulon<br />
                CS 60584<br />
                83041 TOULON CEDEX 9</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800">Téléphone</h3>
                <p>04 94 14 26 40</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800">Email général</h3>
                <p>contact@seatech.fr</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Services spécialisés</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-medium text-gray-800">Admissions</h3>
                <p>admissions@seatech.fr</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800">Relations entreprises</h3>
                <p>entreprises@seatech.fr</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800">Relations internationales</h3>
                <p>international@seatech.fr</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800">Recherche</h3>
                <p>recherche@seatech.fr</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Prochainement disponible</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Formulaire de contact en ligne</li>
            <li>• Chat en direct</li>
            <li>• Horaires d'ouverture détaillés</li>
            <li>• Annuaire complet du personnel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
