# Images pour le Portfolio

Ce dossier contient toutes les images utilisées dans le portfolio. Voici quelques consignes pour organiser les images :

## Images importantes à ajouter

1. **cam.jpg** - Cette image est utilisée comme fallback (remplacement) pour toutes les images manquantes. Vous devez ajouter une image nommée `cam.jpg` dans ce dossier pour éviter les problèmes d'affichage. Idéalement, utilisez une image générique de taille modérée (300x300 pixels).

2. **profile.png** - Votre photo de profil utilisée dans les sections Hero et About.

## Images des projets

Chaque projet référencé dans le fichier `src/utils/user.tsx` doit avoir ses images correspondantes dans ce dossier. Par exemple, pour un projet avec les images suivantes :

```javascript
{
    title: "Projet Example",
    image: "exemple.png",
    images: ["exemple.png", "exemple1.png", "exemple2.png"],
    // autres propriétés...
}
```

Vous devez ajouter les fichiers suivants dans ce dossier :
- `exemple.png` (image principale)
- `exemple1.png` (image de galerie)
- `exemple2.png` (image de galerie)

## Optimisation des images

Pour assurer les meilleures performances de votre portfolio :
- Optimisez les images avant de les ajouter (utilisez des outils comme TinyPNG, ImageOptim, etc.)
- Utilisez des formats modernes comme WebP si possible
- Gardez les dimensions raisonnables (max 1200px de large pour les images de projet)
- Gardez les fichiers légers (moins de 200ko par image si possible)

## Si une image est manquante

Le portfolio inclut maintenant un système de secours avec `ImageWithFallback` qui affichera automatiquement l'image `cam.jpg` si une image référencée n'existe pas dans ce dossier. 