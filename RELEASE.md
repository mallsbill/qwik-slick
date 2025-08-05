# Guide de Release GitHub pour Qwik Slick

## Étapes pour créer une release

### 1. Préparer la release

```bash
# 1. Vérifier que tout est committé
git status

# 2. Tester le build
npm run build:lib

# 3. Mettre à jour la version dans package.json
# Remplacer "1.0.0" par la nouvelle version (ex: "1.0.1", "1.1.0", etc.)
```

### 2. Créer un tag Git

```bash
# Créer un tag avec la version (doit commencer par "v")
git tag v1.0.0

# Pousser le tag vers GitHub
git push origin v1.0.0
```

### 3. Créer la release sur GitHub

1. Aller sur : https://github.com/mallsbill/qwik-slick/releases
2. Cliquer sur "Create a new release"
3. Choisir le tag créé (ex: v1.0.0)
4. Donner un titre : "Qwik Slick v1.0.0"
5. Ajouter une description des changements
6. Cliquer sur "Publish release"

### 4. Publication NPM (optionnel)

Pour publier sur NPM :

```bash
# Se connecter à NPM
npm login

# Publier le package
npm publish
```

## Automatisation avec GitHub Actions

Le fichier `.github/workflows/release.yml` automatise le processus :
- Se déclenche automatiquement quand un tag `v*` est poussé
- Build le projet
- Crée la release GitHub
- Publie sur NPM (si configuré)

## Configuration des secrets GitHub

Pour l'automatisation, ajouter ces secrets dans les paramètres GitHub :

1. `NPM_TOKEN` : Token NPM pour la publication automatique
2. `GITHUB_TOKEN` : Automatiquement disponible

## Structure des fichiers buildés

```
dist/
├── index.js        # Module ES
├── index.cjs       # Module CommonJS  
├── index.d.ts      # Types TypeScript
├── index.css       # Styles CSS
└── lib/            # Fichiers internes
```

## Utilisation après release

```bash
npm install qwik-slick
```

```tsx
import { QwikSlick } from 'qwik-slick';
import 'qwik-slick/styles';
```
