import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SeaTech - École d'ingénieurs Université de Toulon",
  description: "École d'ingénieurs SeaTech - 3 diplômes, 6 parcours de formation. Université de Toulon.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-50 to-green-50 shadow-md border-b-2 border-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Header */}
            <div className="md:hidden">
              {/* Logos principaux */}
              <div className="flex justify-between items-center py-3">
                <div className="flex flex-col items-center">
                  <Link href="/">
                    <img 
                      src="/images/logos/logoseatech\.png" 
                      alt="SeaTech" 
                      className="h-8 w-auto mb-2"
                    />
                  </Link>
                  {/* Logos partenaires en mobile */}
                  <div className="flex space-x-2">
                    <Link href="https://www.grenoble-inp.fr" target="_blank" rel="noopener noreferrer">
                      <img 
                        src="/images/logos/grenobleinp\.png" 
                        alt="Grenoble INP" 
                        className="h-6 w-auto hover:opacity-80 transition-opacity"
                      />
                    </Link>
                    <Link href="https://www.groupe-inp.fr" target="_blank" rel="noopener noreferrer">
                      <img 
                        src="/images/logos/groupeinp\.png" 
                        alt="Groupe INP" 
                        className="h-6 w-auto hover:opacity-80 transition-opacity"
                      />
                    </Link>
                  </div>
                </div>
                <Link href="https://www.univ-tln.fr" target="_blank">
                  <img 
                    src="/images/logos/logoutln\.png" 
                    alt="Université de Toulon" 
                    className="h-10 w-auto"
                  />
                </Link>
              </div>

              {/* Navigation rapide mobile */}
              <div className="pb-2 overflow-x-auto">
                <div className="flex space-x-3 min-w-max px-1">
                  <Link href="/pages/special/depot-stage-emploi" className="text-blue-700 hover:text-green-600 transition-colors font-medium text-xs whitespace-nowrap py-1 px-2 bg-blue-100 hover:bg-green-100 rounded">
                    DÉPÔT STAGE/EMPLOI
                  </Link>
                  <Link href="https://cas.univ-tln.fr/cas/login?service=https%3A%2F%2Fidp.univ-tln.fr%2Fidp%2FAuthn%2FExtCas%3Fconversation%3De2s1&entityId=https%3A%2F%2Fsp.partage.renater.fr%2Fseatech" target="_blank" className="text-green-700 hover:text-blue-600 transition-colors font-medium text-xs whitespace-nowrap py-1 px-2 bg-green-100 hover:bg-blue-100 rounded">
                    WEBMAIL
                  </Link>
                  <Link href="https://annuaire.univ-tln.fr/home" target="_blank" className="text-blue-700 hover:text-green-600 transition-colors font-medium text-xs whitespace-nowrap py-1 px-2 bg-blue-100 hover:bg-green-100 rounded">
                    ANNUAIRE
                  </Link>
                  <Link href="https://ent.univ-tln.fr" target="_blank" className="text-green-700 hover:text-blue-600 transition-colors font-medium text-xs whitespace-nowrap py-1 px-2 bg-green-100 hover:bg-blue-100 rounded">
                    ENT
                  </Link>
                  <Link href="https://cas.univ-tln.fr/cas/login?service=https%3A%2F%2Fged.univ-tln.fr%2Fnuxeo%2Fui%2F" target="_blank" className="text-blue-700 hover:text-green-600 transition-colors font-medium text-xs whitespace-nowrap py-1 px-2 bg-blue-100 hover:bg-green-100 rounded">
                    INTRANET
                  </Link>
                  <Link href="https://seatech.univ-tln.fr/output/" target="_blank" className="text-green-700 hover:text-blue-600 transition-colors font-medium text-xs whitespace-nowrap py-1 px-2 bg-green-100 hover:bg-blue-100 rounded">
                    VISITE VIRTUELLE
                  </Link>
                </div>
              </div>

              {/* Mobile Search */}
              <div className="pb-3">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Rechercher..."
                    className="w-full px-3 py-2 pl-8 pr-4 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:flex justify-between items-center py-4">
              {/* Logo principal et logos partenaires */}
              <div className="flex-shrink-0">
                <div className="flex flex-col items-center">
                  {/* Logo principal horizontal */}
                  <div className="mb-3">
                    <Link href="/">
                      <img 
                        src="/images/logos/logoseatech\.png" 
                        alt="SeaTech" 
                        className="h-12 w-auto"
                      />
                    </Link>
                  </div>
                  
                  {/* Logos carrés partenaires */}
                  <div className="flex space-x-3">
                    <Link href="https://www.grenoble-inp.fr" target="_blank" rel="noopener noreferrer">
                      <img 
                        src="/images/logos/grenobleinp\.png" 
                        alt="Grenoble INP" 
                        className="h-10 w-auto hover:opacity-80 transition-opacity"
                      />
                    </Link>
                    <Link href="https://www.groupe-inp.fr" target="_blank" rel="noopener noreferrer">
                      <img 
                        src="/images/logos/groupeinp\.png" 
                        alt="Groupe INP" 
                        className="h-10 w-auto hover:opacity-80 transition-opacity"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Section centrale : Navigation + Recherche */}
              <div className="flex-1 max-w-4xl mx-8">
                {/* Navigation rapide */}
                <nav className="flex justify-center space-x-4 mb-3 flex-wrap">
                  <Link href="/pages/special/depot-stage-emploi" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm whitespace-nowrap">
                    DÉPÔT STAGE/EMPLOI
                  </Link>
                  <Link href="https://cas.univ-tln.fr/cas/login?service=https%3A%2F%2Fidp.univ-tln.fr%2Fidp%2FAuthn%2FExtCas%3Fconversation%3De2s1&entityId=https%3A%2F%2Fsp.partage.renater.fr%2Fseatech" target="_blank" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm whitespace-nowrap">
                    WEBMAIL
                  </Link>
                  <Link href="https://annuaire.univ-tln.fr/home" target="_blank" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm whitespace-nowrap">
                    ANNUAIRE
                  </Link>
                  <Link href="https://ent.univ-tln.fr" target="_blank" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm whitespace-nowrap">
                    ENT
                  </Link>
                  <Link href="https://cas.univ-tln.fr/cas/login?service=https%3A%2F%2Fged.univ-tln.fr%2Fnuxeo%2Fui%2F" target="_blank" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm whitespace-nowrap">
                    INTRANET
                  </Link>
                  <Link href="https://seatech.univ-tln.fr/output/" target="_blank" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm whitespace-nowrap">
                    VISITE VIRTUELLE
                  </Link>
                </nav>
                
                {/* Barre de recherche */}
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Rechercher sur le site..."
                    className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Logo droite */}
              <div className="flex-shrink-0">
                <Link href="https://www.univ-tln.fr" target="_blank" className="flex items-center">
                  <img 
                    src="/images/logos/logoutln\.png" 
                    alt="Université de Toulon" 
                    className="h-16 w-auto hover:opacity-80 transition-opacity"
                  />
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Bandeau de navigation principal */}
        <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-green-700 text-white py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Navigation - Horizontal Scroll */}
            <nav className="md:hidden overflow-x-auto">
              <div className="flex space-x-6 min-w-max px-2">
                <Link href="/pages/ecole" className="text-sm text-white hover:text-green-200 transition-colors font-medium whitespace-nowrap py-1">
                  L'ÉCOLE
                </Link>
                <Link href="/pages/formation" className="text-sm text-white hover:text-blue-200 transition-colors font-medium whitespace-nowrap py-1">
                  DEVENIR INGÉNIEUR
                </Link>
                <Link href="/pages/international" className="text-sm text-white hover:text-green-200 transition-colors font-medium whitespace-nowrap py-1">
                  INTERNATIONAL
                </Link>
                <Link href="/pages/entreprises" className="text-sm text-white hover:text-blue-200 transition-colors font-medium whitespace-nowrap py-1">
                  ENTREPRISES
                </Link>
                <Link href="/pages/recherche" className="text-sm text-white hover:text-green-200 transition-colors font-medium whitespace-nowrap py-1">
                  RECHERCHE
                </Link>
                <Link href="/pages/actualites" className="text-sm text-white hover:text-blue-200 transition-colors font-medium whitespace-nowrap py-1">
                  ACTUALITÉS
                </Link>
                <Link href="/pages/seminaires" className="text-sm text-white hover:text-green-200 transition-colors font-medium whitespace-nowrap py-1">
                  SÉMINAIRES
                </Link>
              </div>
            </nav>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex justify-center space-x-8 flex-wrap">
              <Link href="/pages/ecole" className="text-base text-white hover:text-green-200 transition-colors font-medium px-2 py-1">
                L'ÉCOLE
              </Link>
              <Link href="/pages/formation" className="text-base text-white hover:text-blue-200 transition-colors font-medium px-2 py-1">
                DEVENIR INGÉNIEUR
              </Link>
              <Link href="/pages/international" className="text-base text-white hover:text-green-200 transition-colors font-medium px-2 py-1">
                INTERNATIONAL
              </Link>
              <Link href="/pages/entreprises" className="text-base text-white hover:text-blue-200 transition-colors font-medium px-2 py-1">
                ENTREPRISES
              </Link>
              <Link href="/pages/recherche" className="text-base text-white hover:text-green-200 transition-colors font-medium px-2 py-1">
                RECHERCHE
              </Link>
              <Link href="/pages/actualites" className="text-base text-white hover:text-blue-200 transition-colors font-medium px-2 py-1">
                ACTUALITÉS
              </Link>
              <Link href="/pages/seminaires" className="text-base text-white hover:text-green-200 transition-colors font-medium px-2 py-1">
                SÉMINAIRES
              </Link>
            </nav>
          </div>
        </div>

        {/* Contenu principal */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer fixe */}
        <footer className="bg-gray-900 text-white">
          {/* Bandeau des partenaires */}
          <div className="bg-gradient-to-r from-gray-800 via-blue-900 to-green-900 py-6 overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 min-w-max">
                <Link href="http://www.cti-commission.fr/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/cti\.png" alt="CTI" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full" />
                </Link>
                <Link href="http://eurace.enaee.eu/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/enaee\.png" alt="EURACE" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full" />
                </Link>
                <Link href="http://ccp.scei-concours.fr/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/ccinp\.png" alt="CCINP" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full" />
                </Link>
                <Link href="http://www.polymeca.org/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/polymeca\.png" alt="POLYMECA" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full" />
                </Link>
                <Link href="http://www.cdefi.fr/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/cdefi\.png" alt="CDEFI" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full" />
                </Link>
                <Link href="http://www.cfa-epure.com/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/formasup\.png" alt="CFA EPURE" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full" />
                </Link>
                <Link href="http://www.enseignementsup-recherche.gouv.fr/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/mesr\.png" alt="MESR" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full bg-white p-1 sm:p-2 rounded" />
                </Link>
                <Link href="http://www.campusfrance.org/fr/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/campus-france\.png" alt="Campus France" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full bg-white p-1 sm:p-2 rounded" />
                </Link>
                <div className="opacity-70 flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/labellisation-ecole-ingenieurs\.png" alt="Labellisation École Ingénieurs" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Informations de l'école et liens */}
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Informations de l'école */}
                <div className="md:col-span-1">
                  <h3 className="text-lg font-bold mb-4">SeaTech</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    École d'ingénieurs<br />
                    Université de Toulon
                  </p>
                  <p className="text-gray-300 text-sm mb-2">
                    CS 60584<br />
                    83041 TOULON CEDEX 9
                  </p>
                  <p className="text-gray-300 text-sm">
                    Tél. : 04 94 14 26 40<br />
                    Email : contact@seatech.fr
                  </p>
                </div>
                
                {/* Liens de navigation */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-bold mb-4">Liens utiles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Premier bloc - 3 liens */}
                    <div className="flex flex-col space-y-2 text-sm text-gray-300">
                      <Link href="/pages/utils/plan-acces" className="hover:text-blue-300 transition-colors">📍 Plan d'accès</Link>
                      <Link href="/pages/utils/nous-contacter" className="hover:text-green-300 transition-colors">📞 Nous contacter</Link>
                      <Link href="/pages/utils/plan-du-site" className="hover:text-blue-300 transition-colors">🗺️ Plan du site</Link>
                    </div>
                    
                    {/* Deuxième bloc - 2 liens */}
                    <div className="flex flex-col space-y-2 text-sm text-gray-300">
                      <Link href="/pages/utils/flux-rss" className="hover:text-green-300 transition-colors">📡 Flux RSS</Link>
                      <Link href="/mentions-legales" className="hover:text-blue-300 transition-colors">⚖️ Mentions légales</Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                <p>&copy; 2024 SeaTech - École d'ingénieurs, Université de Toulon. Tous droits réservés.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
