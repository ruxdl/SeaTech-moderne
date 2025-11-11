# SeaTech - Structure du Projet

## 📁 Structure des Dossiers

### `/public/images/`
Organisation des ressources visuelles :

- **`/photos/`** : Images des blocs principaux
  - `b1.png` - Devenir Ingénieur à SeaTech
  - `b2.png` - Partenaires & Entreprises  
  - `b3.png` - Vie Étudiante

- **`/logos/`** : Tous les logos du site
  - `logoseatech.png` - Logo principal SeaTech
  - `grenobleinp.png` - Logo Grenoble INP
  - `groupeinp.png` - Logo Groupe INP
  - `logoutln.png` - Logo Université de Toulon
  - **`/partenaires/`** : Logos des partenaires institutionnels
    - `cti.png`, `enaee.png`, `ccinp.png`, etc.

- **`/carousel/`** : Images du carrousel d'accueil
  - Déposez vos images ici, elles seront automatiquement détectées

### `/src/app/pages/`
Organisation des pages par catégories :

- **Pages principales (bandeau bleu)** :
  - `/ecole/` - L'ÉCOLE
  - `/formation/` - DEVENIR INGÉNIEUR  
  - `/international/` - INTERNATIONAL
  - `/entreprises/` - ENTREPRISES
  - `/recherche/` - RECHERCHE
  - `/actualites/` - ACTUALITÉS
  - `/seminaires/` - SÉMINAIRES

- **`/special/`** : Pages spécialisées
  - `/devenir-ingenieur/` - Page détaillée formations
  - `/partenaires-entreprises/` - Page partenariats
  - `/vie-etudiante/` - Page vie étudiante
  - `/depot-stage-emploi/` - Page stages/emplois

- **`/utils/`** : Pages utilitaires (footer)
  - `/plan-acces/` - Plan d'accès
  - `/nous-contacter/` - Contact
  - `/plan-du-site/` - Plan du site
  - `/flux-rss/` - Flux RSS

### `/src/utils/`
Utilitaires et données :

- **`/data/`** : Configuration des données
  - `image-carousel.ts` - Configuration du carrousel

### `/src/components/`
Composants réutilisables (à développer)

## 🔧 Liens et Navigation

### Navigation Principale
- Pages principales : `/pages/{nom-page}/`
- Pages spéciales : `/pages/special/{nom-page}/`
- Pages utilitaires : `/pages/utils/{nom-page}/`

### Images
- Photos : `/images/photos/{nom-image}`
- Logos : `/images/logos/{nom-image}`
- Carrousel : `/images/carousel/{nom-image}`

## 📝 Notes de Développement

1. **Carrousel automatique** : Les images sont automatiquement détectées dans `/public/images/carousel/`
2. **Logos partenaires** : Gestion centralisée dans `/public/images/logos/partenaires/`
3. **Structure modulaire** : Chaque section a son propre dossier pour faciliter la maintenance
4. **Liens cohérents** : Tous les liens internes utilisent la nouvelle structure `/pages/`

## 🚀 Ajout de Contenu

### Nouvelles images carrousel
1. Déposer les fichiers dans `/public/images/carousel/`
2. Formats supportés : JPG, PNG, WebP, GIF
3. Détection automatique, pas de configuration nécessaire

### Nouvelles pages
1. Créer dans le dossier approprié `/src/app/pages/`
2. Ajouter le lien dans `/src/app/layout.tsx` si nécessaire
3. Suivre la structure des pages existantes
