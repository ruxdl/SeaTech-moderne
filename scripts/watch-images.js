#!/usr/bin/env node

const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');

console.log('🖼️  Surveillance des images activée...');
console.log('📁 Dossier surveillé:', path.join(__dirname, '../public'));

// Surveiller les changements dans le dossier public
const watcher = chokidar.watch(path.join(__dirname, '../public/**/*.{jpg,jpeg,png,gif,svg,webp}'), {
  persistent: true,
  ignoreInitial: true
});

watcher
  .on('change', (filePath) => {
    const relativePath = path.relative(path.join(__dirname, '../public'), filePath);
    console.log(`🔄 Image modifiée: ${relativePath}`);
    
    // Forcer le rechargement en touchant un fichier surveillé par Next.js
    const touchFile = path.join(__dirname, '../src/app/layout.tsx');
    const now = new Date();
    fs.utimes(touchFile, now, now, (err) => {
      if (err) {
        console.error('Erreur lors du rechargement:', err);
      } else {
        console.log('✅ Page rechargée automatiquement');
      }
    });
  })
  .on('add', (filePath) => {
    const relativePath = path.relative(path.join(__dirname, '../public'), filePath);
    console.log(`➕ Nouvelle image ajoutée: ${relativePath}`);
  })
  .on('unlink', (filePath) => {
    const relativePath = path.relative(path.join(__dirname, '../public'), filePath);
    console.log(`🗑️  Image supprimée: ${relativePath}`);
  })
  .on('error', (error) => {
    console.error('❌ Erreur de surveillance:', error);
  });

console.log('👀 En attente de modifications d\'images...');
console.log('💡 Tip: Modifiez une image dans /public pour voir le rechargement automatique');

// Empêcher le script de se fermer
process.on('SIGINT', () => {
  console.log('\n📴 Arrêt de la surveillance des images');
  watcher.close();
  process.exit(0);
});
