import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavigationMenu from "../components/NavigationMenu";
import SearchBar from "../components/SearchBar";

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
        <header className="bg-gradient-to-r from-blue-50 to-green-50 shadow-sm border-b border-blue-200">
          {/* Barre utilitaire - tout en haut */}
          <div className="bg-gradient-to-r from-blue-100 to-green-100 relative z-10">
            <div className="max-w-7xl mx-auto px-4 py-2">
              <nav className="flex justify-center space-x-6 text-xs text-gray-700 relative z-10">
                <Link href="/pages/special/depot-stage-emploi" className="hover:text-blue-700 hover:bg-white/50 transition-all duration-200 py-1 px-2 rounded">
                  DÉPÔT STAGE/EMPLOI
                </Link>
                <Link href="https://cas.univ-tln.fr/cas/login?service=https%3A%2F%2Fidp.univ-tln.fr%2Fidp%2FAuthn%2FExtCas%3Fconversation%3De2s1&entityId=https%3A%2F%2Fsp.partage.renater.fr%2Fseatech" target="_blank" className="hover:text-blue-700 hover:bg-white/50 transition-all duration-200 py-1 px-2 rounded">
                  WEBMAIL
                </Link>
                <Link href="https://annuaire.univ-tln.fr/home" target="_blank" className="hover:text-blue-700 hover:bg-white/50 transition-all duration-200 py-1 px-2 rounded">
                  ANNUAIRE
                </Link>
                <Link href="https://ent.univ-tln.fr" target="_blank" className="hover:text-blue-700 hover:bg-white/50 transition-all duration-200 py-1 px-2 rounded">
                  ENT
                </Link>
                <Link href="https://cas.univ-tln.fr/cas/login?service=https%3A%2F%2Fged.univ-tln.fr%2Fnuxeo%2Fui%2F" target="_blank" className="hover:text-blue-700 hover:bg-white/50 transition-all duration-200 py-1 px-2 rounded">
                  INTRANET
                </Link>
                <Link href="https://seatech.univ-tln.fr/output/" target="_blank" className="hover:text-blue-700 hover:bg-white/50 transition-all duration-200 py-1 px-2 rounded">
                  VISITE VIRTUELLE
                </Link>
              </nav>
            </div>
          </div>

          <div className="w-full">
            {/* Mobile Header */}
            <div className="md:hidden">
              <div className="flex items-center justify-between px-4 py-4">
                {/* Logos groupés à gauche */}
                <div className="flex items-center space-x-2">
                  <Link href="/">
                    <img 
                      src="/images/logos/logoseatech.png" 
                      alt="SeaTech" 
                      className="h-8 w-auto"
                    />
                  </Link>
                  <Link href="https://www.univ-tln.fr" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/images/logos/logoutln.png" 
                      alt="Université de Toulon" 
                      className="h-6 w-auto opacity-80"
                    />
                  </Link>
                  <Link href="https://www.groupe-inp.fr" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/images/logos/groupeinp.png" 
                      alt="Groupe INP" 
                      className="h-5 w-auto opacity-70"
                    />
                  </Link>
                  <Link href="https://www.grenoble-inp.fr" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/images/logos/grenobleinp.png" 
                      alt="Grenoble INP" 
                      className="h-5 w-auto opacity-70"
                    />
                  </Link>
                </div>
                <NavigationMenu />
              </div>

              {/* Mobile Search */}
              <div className="px-4 pb-4">
                <SearchBar placeholder="Rechercher..." />
              </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:block">
              <div className="py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex items-start justify-between w-full">
                  {/* Section gauche - Logos (collée au bord gauche) */}
                  <div className="flex flex-col">
                    {/* Logos principaux (grands) */}
                    <div className="flex items-center space-x-4 mb-3">
                      <Link href="/">
                        <img 
                          src="/images/logos/logoseatech.png" 
                          alt="SeaTech" 
                          className="h-16 w-auto hover:opacity-90 transition-opacity"
                        />
                      </Link>
                      <Link href="https://www.univ-tln.fr" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="/images/logos/logoutln.png" 
                          alt="Université de Toulon" 
                          className="h-16 w-auto hover:opacity-90 transition-opacity"
                        />
                      </Link>
                    </div>
                    
                    {/* Logos secondaires (petits) */}
                    <div className="flex items-center space-x-3">
                      <Link href="https://www.groupe-inp.fr" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="/images/logos/groupeinp.png" 
                          alt="Groupe INP" 
                          className="h-8 w-auto hover:opacity-80 transition-opacity"
                        />
                      </Link>
                      <Link href="https://www.grenoble-inp.fr" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="/images/logos/grenobleinp.png" 
                          alt="Grenoble INP" 
                          className="h-8 w-auto hover:opacity-80 transition-opacity"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Section droite - Recherche et Menu (collée à droite) */}
                  <div className="flex flex-col items-end space-y-4">
                    {/* Barre de recherche élargie */}
                    <SearchBar className="w-96" placeholder="Rechercher sur le site..." />
                    
                    {/* Menu déroulant */}
                    <div>
                      <NavigationMenu />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>



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
                  <img src="/images/logos/partenaires/cti.png" alt="CTI" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full" />
                </Link>
                <Link href="http://eurace.enaee.eu/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/enaee.png" alt="EURACE" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full" />
                </Link>
                <Link href="http://ccp.scei-concours.fr/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/ccinp.png" alt="CCINP" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full" />
                </Link>
                <Link href="http://www.polymeca.org/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/polymeca.png" alt="POLYMECA" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full" />
                </Link>
                <Link href="http://www.cdefi.fr/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/cdefi.png" alt="CDEFI" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full" />
                </Link>
                <Link href="http://www.cfa-epure.com/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/formasup.png" alt="CFA EPURE" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full" />
                </Link>
                <Link href="http://www.enseignementsup-recherche.gouv.fr/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/mesr.png" alt="MESR" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full bg-white p-1 sm:p-2 rounded" />
                </Link>
                <Link href="http://www.campusfrance.org/fr/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/campus-france.png" alt="Campus France" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full bg-white p-1 sm:p-2 rounded" />
                </Link>
                <div className="opacity-70 flex-shrink-0 w-12 sm:w-16 lg:w-20 flex justify-center">
                  <img src="/images/logos/partenaires/labellisation-ecole-ingenieurs.png" alt="Labellisation École Ingénieurs" className="h-8 sm:h-10 lg:h-12 object-contain max-w-full" />
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
