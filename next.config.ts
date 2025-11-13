import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Configuration Turbopack pour Next.js 16
  turbopack: {
    // Configuration vide pour éviter les conflits
  },
  // Configuration pour les images
  images: {
    // Permettre le rechargement des images locales en développement
    unoptimized: process.env.NODE_ENV === 'development',
    // Domaines autorisés si vous utilisez des images externes
    domains: [],
  },
};

export default nextConfig;
