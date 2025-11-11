// Configuration ultra-simple du carrousel d'images
// Déposez simplement vos images dans le dossier: public/images/carousel/
// Le système détecte automatiquement toutes les images !

// Images par défaut pour les tests (utilisées si aucune image n'est trouvée)
export const defaultCarouselImages = [
  {
    id: 1,
    src: '/images/carousel/placeholder1.jpg',
    alt: 'Image 1 du carrousel'
  },
  {
    id: 2,
    src: '/images/carousel/placeholder2.jpg', 
    alt: 'Image 2 du carrousel'
  },
  {
    id: 3,
    src: '/images/carousel/placeholder3.jpg',
    alt: 'Image 3 du carrousel'
  }
];

// Fonction pour récupérer les images depuis l'API
export async function fetchCarouselImages() {
  try {
    const response = await fetch('/api/carousel-images');
    const images = await response.json();
    return images.length > 0 ? images : defaultCarouselImages;
  } catch (error) {
    console.log('Utilisation des images par défaut');
    return defaultCarouselImages;
  }
}
