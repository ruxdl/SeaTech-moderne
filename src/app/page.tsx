'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchCarouselImages, defaultCarouselImages } from '@/utils/data/image-carousel';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselImages, setCarouselImages] = useState(defaultCarouselImages);

  // Charger automatiquement les images du dossier
  useEffect(() => {
    fetchCarouselImages().then(images => {
      setCarouselImages(images);
    });
  }, []);

  // Auto-défilement des slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div>
      {/* Carrousel de photos simplifié */}
      <section className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image seule, sans overlay ni texte */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${image.src}')`
              }}
            ></div>
          </div>
        ))}
        
        {/* Indicateurs de slides */}
        <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Flèches de navigation */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Photo précédente"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Photo suivante"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Trois blocs principaux */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            
            {/* Bloc 1 : Devenir Ingénieur */}
            <div className="bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src="/images/photos/b1\.png" 
                  alt="Devenir Ingénieur à SeaTech" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Devenir Ingénieur à SeaTech</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-4">
                  L'école SeaTech propose trois diplômes d'ingénieur : le diplôme d'ingénieur de l'école comprenant six parcours de formation, les diplômes d'ingénieur par spécialité Matériaux et par spécialité Systèmes numériques (uniquement par apprentissage et formation continue). SeaTech offre plusieurs possibilités d'admission en fonction du diplôme envisagé.
                </p>
                <Link 
                  href="/pages/formation" 
                  className="inline-flex items-center text-blue-600 hover:text-green-600 font-semibold text-sm sm:text-base transition-colors"
                >
                  En savoir plus 
                  <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Bloc 2 : Partenaires & Entreprises */}
            <div className="bg-gradient-to-b from-white to-green-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src="/images/photos/b2\.png" 
                  alt="Partenaires & Entreprises" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Partenaires & Entreprises</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-4">
                  En phase avec les industries de son territoire, SeaTech s'inscrit dans une démarche de rayonnement international, répondant aux exigences des entreprises. L'école s'appuie sur un vaste réseau industriel afin de maintenir une offre pédagogique au plus près des besoins des entreprises.
                </p>
                <Link 
                  href="/pages/entreprises" 
                  className="inline-flex items-center text-green-600 hover:text-blue-600 font-semibold text-sm sm:text-base transition-colors"
                >
                  En savoir plus 
                  <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Bloc 3 : Vie Étudiante */}
            <div className="bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src="/images/photos/b3\.png" 
                  alt="Vie Étudiante" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Vie Étudiante</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-4">
                  Campus dynamique, associations étudiantes, événements culturels et sportifs. Une expérience étudiante riche au cœur de la région PACA.
                </p>
                <Link 
                  href="/pages/special/vie-etudiante" 
                  className="inline-flex items-center text-blue-600 hover:text-green-600 font-semibold text-sm sm:text-base transition-colors"
                >
                  En savoir plus 
                  <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Three Diplomas Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Trois Diplômes d'Ingénieur</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Des formations d'excellence reconnues par la CTI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-200 rounded-xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-200">
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-600 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">🎓</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Diplôme SeaTech</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Formation généraliste avec 6 parcours spécialisés pour répondre aux défis technologiques actuels.
              </p>
              <Link href="/formation" className="text-blue-600 hover:text-green-600 font-semibold text-sm sm:text-base transition-colors">
                En savoir plus →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-200 rounded-xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-green-200">
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-green-600 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">🏭</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Spécialité Matériaux</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Formation par apprentissage dans le domaine des matériaux et de leurs applications industrielles.
              </p>
              <Link href="/formation" className="text-green-600 hover:text-blue-600 font-semibold text-sm sm:text-base transition-colors">
                En savoir plus →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-100 rounded-xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-green-200 md:col-span-2 lg:col-span-1">
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">💻</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Spécialité Systèmes Numériques</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Formation par apprentissage dans les systèmes numériques et les nouvelles technologies.
              </p>
              <Link href="/formation" className="text-green-600 hover:text-blue-600 font-semibold text-sm sm:text-base transition-colors">
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Réseaux & Chiffres Clés Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-bl from-green-50 via-blue-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Nos Réseaux - Côté gauche */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Nos Réseaux</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Suivez-nous sur les réseaux sociaux pour rester informé 
                de l'actualité de SeaTech et de l'Université de Toulon.
              </p>
              
              {/* Logos des réseaux sociaux - sans textes */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                {/* Facebook */}
                <a 
                  href="https://fr-fr.facebook.com/pages/Université-de-Toulon/155673624745" 
                  target="_blank" 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-200 hover:scale-110"
                  title="Facebook"
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Twitter */}
                <a 
                  href="https://twitter.com/univtoulon" 
                  target="_blank" 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-200 hover:scale-110"
                  title="Twitter"
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/univtoulon/" 
                  target="_blank" 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-600 transition-all duration-200 hover:scale-110"
                  title="Instagram"
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/user/univtoulon" 
                  target="_blank" 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-200 hover:scale-110"
                  title="YouTube"
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/school/11059049" 
                  target="_blank" 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-200 hover:scale-110"
                  title="LinkedIn"
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Chiffres Clés - Côté droit */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg order-1 lg:order-2 border border-blue-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center lg:text-left">Chiffres Clés</h3>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">95%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Taux d'insertion</div>
                </div>
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">6</div>
                  <div className="text-xs sm:text-sm text-gray-600">Parcours de formation</div>
                </div>
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Entreprises partenaires</div>
                </div>
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">30+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Pays d'échange</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
