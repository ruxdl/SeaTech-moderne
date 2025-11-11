// Configuration ultra-simple du carrousel d'images
// Déposez simplement vos images dans le dossier: public/images/carousel/
// Le système détecte automatiquement toutes les images !

// Images du carrousel - directement configurées
export const defaultCarouselImages = [
  {
    id: 1,
    src: '/images/carousel/banniere-seatech-960x350.jpg',
    alt: 'Bannière SeaTech'
  },
  {
    id: 2,
    src: '/images/carousel/photo_21792.webp',
    alt: 'Campus SeaTech'
  }
];

// Fonction pour récupérer les images - version statique
export async function fetchCarouselImages() {
  // Pour l'export statique, on retourne directement les images configurées
  return defaultCarouselImages;
}
