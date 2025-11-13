'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface AutoReloadImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

export default function AutoReloadImage({ 
  src, 
  alt, 
  className,
  width,
  height,
  fill,
  sizes,
  priority
}: AutoReloadImageProps) {
  const [imageKey, setImageKey] = useState(0);
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    // En développement, ajouter un timestamp pour forcer le rechargement
    if (process.env.NODE_ENV === 'development') {
      const timestamp = Date.now();
      setImageSrc(`${src}?v=${timestamp}`);
    } else {
      setImageSrc(src);
    }
  }, [src, imageKey]);

  useEffect(() => {
    // Surveiller les changements de layout (déclenché par notre script)
    let lastModified = 0;
    
    const checkForUpdates = async () => {
      try {
        // Vérifier si le fichier a été modifié
        const response = await fetch('/api/image-check', {
          method: 'HEAD',
          cache: 'no-cache'
        });
        
        const modified = response.headers.get('last-modified');
        const currentModified = new Date(modified || '').getTime();
        
        if (lastModified && currentModified > lastModified) {
          // Recharger l'image
          setImageKey(prev => prev + 1);
        }
        
        lastModified = currentModified;
      } catch (error) {
        // Silencieux en cas d'erreur
      }
    };

    // Vérifier toutes les 3 secondes en développement
    let interval: NodeJS.Timeout;
    if (process.env.NODE_ENV === 'development') {
      interval = setInterval(checkForUpdates, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  // Props communes
  const commonProps = {
    src: imageSrc,
    alt,
    className,
    priority,
  };

  // Si fill est utilisé
  if (fill) {
    return (
      <Image
        {...commonProps}
        fill
        sizes={sizes}
      />
    );
  }

  // Si width et height sont spécifiés
  if (width && height) {
    return (
      <Image
        {...commonProps}
        width={width}
        height={height}
        sizes={sizes}
      />
    );
  }

  // Fallback avec img standard
  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
    />
  );
}
