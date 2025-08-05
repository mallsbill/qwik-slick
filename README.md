# Qwik Slick

Un composant slider moderne pour Qwik, inspiré de React Slick avec toutes les fonctionnalités essentielles.

## Fonctionnalités

- 🎯 **Slider horizontal** : Navigation fluide entre les slides
- 🎮 **Navigation** : Boutons précédent/suivant avec accessibilité
- 🔵 **Dots** : Indicateurs de pagination cliquables
- ⏯️ **Autoplay** : Lecture automatique avec vitesse configurable
- 📱 **Responsive** : Adaptation automatique selon la taille d'écran
- 👆 **Support touch** : Navigation tactile sur mobile/tablette
- ♿ **Accessibilité** : Labels ARIA et navigation clavier

## Installation

```bash
npm install
```

## Usage

```tsx
import { QwikSlick } from './lib/QwikSlick';

const sliderItems = [
  <div>Slide 1</div>,
  <div>Slide 2</div>,
  <div>Slide 3</div>,
];

<QwikSlick 
  items={sliderItems}
  slidesToShow={3}
  autoplay={true}
  autoplaySpeed={2000}
  dots={true}
  arrows={true}
  responsive={[
    {breakpoint: 768, slidesToShow: 2},
    {breakpoint: 480, slidesToShow: 1}
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `any[]` | - | **Obligatoire** - Liste des éléments à afficher |
| `slidesToShow` | `number` | `1` | Nombre de slides visibles |
| `autoplay` | `boolean` | `false` | Active la lecture automatique |
| `autoplaySpeed` | `number` | `3000` | Vitesse de l'autoplay (ms) |
| `dots` | `boolean` | `false` | Affiche les points de pagination |
| `arrows` | `boolean` | `true` | Affiche les flèches de navigation |
| `responsive` | `Array` | `[]` | Configuration responsive |
| `class` | `string` | - | Classe CSS personnalisée |

## Scripts disponibles

### `npm run dev`

Lance l'application en mode développement.
Ouvre [http://localhost:5173](http://localhost:5173) pour voir l'exemple.

### `npm run build`

Compile l'application pour la production dans le dossier `dist/`.

### `npm run preview`

Prévisualise la version de production localement.

## En savoir plus

- [Documentation Qwik](https://qwik.dev)
- [Communauté Qwik Discord](https://qwik.dev/chat)
- [React Slick](https://react-slick.neostack.com/) (inspiration originale)
