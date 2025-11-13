# 🖼️ Rechargement Automatique des Images

Ce système permet de voir automatiquement les modifications d'images sur le site en temps réel pendant le développement.

## 🚀 Utilisation

### Méthode 1: Surveillance automatique (Recommandée)

1. **Lancer le serveur avec surveillance d'images :**
   ```bash
   npm run dev:watch
   ```

2. **Modifier une image :**
   - Remplacez n'importe quelle image dans le dossier `/public`
   - Le site se rechargera automatiquement
   - Vous verrez les changements immédiatement

### Méthode 2: Surveillance manuelle

1. **Terminal 1 - Serveur Next.js :**
   ```bash
   npm run dev
   ```

2. **Terminal 2 - Surveillance des images :**
   ```bash
   npm run watch:images
   ```

## 📁 Images surveillées

Le système surveille tous les fichiers dans `/public` avec les extensions :
- `.jpg`, `.jpeg`
- `.png`
- `.gif`
- `.svg`
- `.webp`

## 🔧 Comment ça marche

1. **Script de surveillance :** `scripts/watch-images.js` utilise Chokidar pour détecter les changements
2. **Rechargement automatique :** Touche le fichier `layout.tsx` pour déclencher le hot reload de Next.js
3. **Configuration webpack :** Surveille les changements toutes les secondes

## 💡 Conseils d'utilisation

### Remplacement d'images existantes
- Gardez le même nom de fichier
- Le changement sera détecté automatiquement
- Pas besoin de redémarrer le serveur

### Ajout de nouvelles images
- Ajoutez l'image dans `/public/images/`
- Mettez à jour votre code pour utiliser la nouvelle image
- Le hot reload se déclenchera automatiquement

### Optimisation des images
- Les images sont optimisées automatiquement en production
- En développement, l'optimisation est désactivée pour un rechargement plus rapide

## 🛠️ Dépannage

### L'image ne se recharge pas ?

1. **Vérifiez que le script de surveillance fonctionne :**
   ```bash
   npm run watch:images
   ```
   Vous devriez voir : `🖼️ Surveillance des images activée...`

2. **Vérifiez le cache du navigateur :**
   - Appuyez sur `Ctrl+F5` (ou `Cmd+Shift+R` sur Mac)
   - Ouvrez les outils de développement > Network > Disable cache

3. **Redémarrez le serveur de développement :**
   ```bash
   npm run dev:watch
   ```

### Le script plante ?

- Vérifiez que `chokidar` est installé : `npm list chokidar`
- Réinstallez si nécessaire : `npm install --save-dev chokidar`

## 📂 Structure des images

```
public/
├── images/
│   ├── logos/           # Logos des partenaires
│   ├── photos/          # Photos de présentation
│   └── carousel/        # Images du carrousel
├── file.svg
├── globe.svg
└── ...
```

## 🔄 Processus de développement recommandé

1. **Démarrer le développement :**
   ```bash
   npm run dev:watch
   ```

2. **Modifier les images :**
   - Utilisez votre éditeur d'images favori
   - Sauvegardez directement dans `/public/images/`
   - Observez le rechargement automatique

3. **Tester sur différents écrans :**
   - Le site reste responsive
   - Les images s'adaptent automatiquement

## 🚀 Pour la production

En production, cette surveillance n'est pas active. Les images sont :
- Optimisées automatiquement par Next.js
- Mises en cache pour de meilleures performances
- Servies via CDN si configuré
