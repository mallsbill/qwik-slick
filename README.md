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
  slidesToScroll={1}
  infinite={true}
  speed={800}
  cssEase="ease-in-out"
  autoplay={true}
  autoplaySpeed={2000}
  pauseOnHover={true}
  dots={true}
  arrows={true}
  responsive={[
    {breakpoint: 768, settings: {slidesToShow: 2, slidesToScroll: 1}},
    {breakpoint: 480, settings: {slidesToShow: 1, slidesToScroll: 1}}
  ]}
  beforeChange={(current, next) => console.log(`Slide ${current} -> ${next}`)}
  afterChange={(current) => console.log(`Now on slide ${current}`)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `any[]` | - | **Obligatoire** - Liste des éléments à afficher |
| `slidesToShow` | `number` | `1` | Nombre de slides visibles |
| `slidesToScroll` | `number` | `1` | Nombre de slides à faire défiler |
| `infinite` | `boolean` | `false` | Défilement infini |
| `speed` | `number` | `500` | Vitesse de transition (ms) |
| `cssEase` | `string` | `'ease'` | Fonction d'easing CSS |
| `autoplay` | `boolean` | `false` | Active la lecture automatique |
| `autoplaySpeed` | `number` | `3000` | Vitesse de l'autoplay (ms) |
| `pauseOnHover` | `boolean` | `false` | Pause l'autoplay au survol |
| `dots` | `boolean` | `false` | Affiche les points de pagination |
| `arrows` | `boolean` | `true` | Affiche les flèches de navigation |
| `fade` | `boolean` | `false` | Effet de fondu entre slides |
| `vertical` | `boolean` | `false` | Orientation verticale |
| `centerMode` | `boolean` | `false` | Mode centré |
| `variableWidth` | `boolean` | `false` | Largeur variable des slides |
| `adaptiveHeight` | `boolean` | `false` | Hauteur adaptative |
| `responsive` | `Array` | `[]` | Configuration responsive |
| `class` | `string` | - | Classe CSS personnalisée |
| `beforeChange` | `function` | - | Callback avant changement |
| `afterChange` | `function` | - | Callback après changement |

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
