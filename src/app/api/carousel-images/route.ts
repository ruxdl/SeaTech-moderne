import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public', 'images', 'carousel');
    
    // Vérifier si le dossier existe
    if (!fs.existsSync(imagesDirectory)) {
      return NextResponse.json([]);
    }

    // Lire tous les fichiers du dossier
    const files = fs.readdirSync(imagesDirectory);
    
    // Filtrer seulement les images (jpg, jpeg, png, webp, gif)
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const imageFiles = files.filter(file => 
      imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
    );
    
    // Générer les données du carrousel
    const carouselImages = imageFiles.map((fileName, index) => ({
      id: index + 1,
      src: `/images/carousel/${fileName}`,
      alt: `Image ${index + 1} - ${fileName.replace(/\.[^/.]+$/, "")}`
    }));
    
    return NextResponse.json(carouselImages);
    
  } catch (error) {
    console.error('Erreur lors de la lecture des images:', error);
    return NextResponse.json([]);
  }
}
