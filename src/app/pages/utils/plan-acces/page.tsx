export default function PlanAcces() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Plan d'accès</h1>
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
                <strong>Page en construction</strong> - Les informations d'accès seront bientôt disponibles.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Adresse</h2>
          <div className="text-gray-600 mb-6">
            <p className="mb-2"><strong>SeaTech - École d'ingénieurs</strong></p>
            <p className="mb-2">Université de Toulon</p>
            <p className="mb-2">CS 60584</p>
            <p className="mb-4">83041 TOULON CEDEX 9</p>
            
            <p className="mb-2"><strong>Téléphone :</strong> 04 94 14 26 40</p>
            <p><strong>Email :</strong> contact@seatech.fr</p>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Prochainement disponible</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Plan d'accès détaillé</li>
              <li>• Carte interactive</li>
              <li>• Informations transports en commun</li>
              <li>• Places de parking</li>
              <li>• Accès personnes à mobilité réduite</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
