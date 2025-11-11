// Utilitaire pour gérer les chemins d'images avec basePath
export function getImagePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
}
