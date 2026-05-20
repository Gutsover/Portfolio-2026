# Design System - Portfolio

Design system complet extrait de la frame Figma du portfolio one-page.

## 📐 Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Typography.tsx        # Composants de typographie
│   │   ├── Button.tsx            # Boutons
│   │   ├── Divider.tsx           # Séparateurs
│   │   ├── Tag.tsx               # Étiquettes
│   │   ├── Logo.tsx              # Logo
│   │   ├── Header.tsx            # En-tête
│   │   ├── ProjectCard.tsx       # Carte de projet
│   │   ├── SectionTitle.tsx      # Titre de section
│   │   └── index.ts              # Exports centralisés
│   └── App.tsx                   # Démo du design system
└── styles/
    ├── theme.css                 # Tokens de design
    └── fonts.css                 # Polices personnalisées

```

## 🎨 Charte Graphique

### Palette de Couleurs

| Nom | Hex | Usage |
|-----|-----|-------|
| Primary Dark | `#241623` | Texte principal, bordures |
| Primary Red | `#9b2909` | Accents, titres importants |
| Secondary Orange | `#F4633A` | Accents secondaires, icônes |
| Background | `#FFFFFF` | Fond principal |
| Accent | `rgba(239, 233, 244, 0.85)` | Fond de section |

### Typographie

**Polices**
- **Satoshi** : Titres principaux, texte courant
- **Urbanist** : Labels, navigation, boutons

**Hiérarchie**

| Composant | Police | Taille | Poids | Usage |
|-----------|--------|--------|-------|-------|
| DisplayHeading | Satoshi | 64px | 500 | Titres de page |
| SectionHeading | Urbanist | 48px | 700 | Titres de projet |
| SectionLabel | Urbanist | 16px | 500 | Labels de section |
| BodyText | Satoshi | 16px | 400 | Texte courant |
| BodyTextMedium | Satoshi | 16px | 500 | Emphase |
| CaptionText | Urbanist | 16px | 400 | Métadonnées |
| ButtonText | Urbanist | 16px | 500 | Boutons |
| LogoText | Satoshi | 16px | 700 | Logo |

### Espacements

| Token | Valeur | Usage |
|-------|--------|-------|
| `--spacing-xs` | 8px | Espacement minimal |
| `--spacing-sm` | 10px | Petit espacement |
| `--spacing-md` | 16px | Espacement moyen |
| `--spacing-lg` | 20px | Grand espacement |
| `--spacing-xl` | 24px | Très grand espacement |
| `--spacing-2xl` | 32px | Espacement section |
| `--spacing-3xl` | 40px | Espacement large |
| `--spacing-4xl` | 120px | Espacement page |

### Border Radius

| Token | Valeur |
|-------|--------|
| `--radius-sm` | 4px |
| `--radius-md` | 8px |
| `--radius-lg` | 12px |
| `--radius-xl` | 16px |

## 🧩 Composants

### Typographie

```tsx
import { DisplayHeading, SectionHeading, BodyText } from './components';

<DisplayHeading>
  <span className="text-[#9b2909]">Design</span> System
</DisplayHeading>

<SectionHeading className="text-[#9b2909]">
  Titre de projet
</SectionHeading>

<BodyText>Texte courant avec <BodyTextMedium>emphase</BodyTextMedium></BodyText>
```

### Button

```tsx
import { Button } from './components';

<Button>Me contacter</Button>
<Button disabled={true}>Désactivé</Button>
```

**États**
- **Défaut** : Fond blanc, bordure noire, texte noir
- **Hover** : Fond #9b2909 (rouge primaire), texte blanc
- **Cliqué** : Fond #9b2909 avec ombre portée
- **Désactivé** : Fond blanc, bordure grise, texte gris (#c4c4c4)

**Props**
- `children` : Contenu du bouton
- `onClick` : Fonction callback
- `disabled` : Désactiver le bouton (default: false)
- `className` : Classes CSS additionnelles

**Caractéristiques**
- Gestion automatique des états hover/active
- Bordure absolue qui disparaît au clic
- Transition fluide entre les états

### Divider

```tsx
import { Divider } from './components';

<Divider orientation="horizontal" />
<Divider orientation="vertical" />
```

### Tag

```tsx
import { Tag } from './components';

<Tag>Build</Tag>
<Tag>Design</Tag>
```

### Logo

```tsx
import { Logo, LogoIcon } from './components';

// Logo complet avec texte
<Logo />

// Logo icône seul (taille personnalisable)
<LogoIcon size={24} />
<LogoIcon size={48} />
```

**Caractéristiques du logo**
- Logo original importé de Figma
- Couleurs : #241623 (noir) et #F4633A (orange)
- Ratio : 1.666:1 (39.977px × 24px)
- `LogoIcon` accepte une prop `size` pour ajuster la hauteur

Pour plus de détails, voir [LOGO_GUIDE.md](./LOGO_GUIDE.md)

### Header

```tsx
import { Header } from './components';

<Header />
```

**Caractéristiques**
- Position sticky
- Ombre personnalisée
- Navigation responsive

### ProjectCard

```tsx
import { ProjectCard, ProjectDescription, ProjectHighlight } from './components';

<ProjectCard
  title="Végétal Local"
  client="Office Français de la Biodiversité"
  year="2025-2026"
  category="Refonte du site"
  layout="image-left"
  image="/path/to/image.jpg"
  description={
    <>
      <ProjectDescription>
        <span className="leading-[1.4]">Texte avec </span>
        <ProjectHighlight>emphase</ProjectHighlight>
      </ProjectDescription>
    </>
  }
/>
```

**Props**
- `title` : Titre du projet
- `client` : Nom du client
- `year` : Année
- `category` : Catégorie (affiché en tag)
- `description` : Contenu React (utiliser ProjectDescription)
- `image` : URL de l'image
- `imageAlt` : Texte alternatif (optionnel)
- `layout` : 'image-left' | 'image-right' (default: 'image-left')
- `className` : Classes CSS

**Caractéristiques fidèles à la maquette**
- Fond : rgba(239, 233, 244, 0.45)
- Bordure orange (#f4633a)
- Border radius : 12px
- Padding : 40px
- Gap entre image et description : 40px
- Image : 540px × 405px, arrondie
- Description : largeur fixe de 540px

### SectionTitle

```tsx
import { SectionTitle } from './components';

<SectionTitle
  label="01 - Introduction"
  title="Projets sélectionnés"
  highlightedWord="Projets"
/>
```

## 🎯 Design Tokens

Tous les tokens sont définis dans `/src/styles/theme.css` et utilisent des variables CSS :

```css
/* Couleurs */
--foreground: #241623
--primary: #9b2909
--secondary: #F4633A

/* Typographie */
--text-base: 16px
--text-3xl: 48px
--text-4xl: 64px

/* Espacements */
--spacing-md: 16px
--spacing-xl: 24px

/* Border Radius */
--radius-md: 8px
```

## 📦 Utilisation

### Import des composants

```tsx
// Import individuel
import { Button } from './components/Button';

// Import groupé (recommandé)
import { Button, Header, ProjectCard } from './components';
```

### Personnalisation

Tous les composants acceptent une prop `className` pour personnalisation :

```tsx
<Button className="shadow-lg hover:scale-105">
  Mon bouton
</Button>
```

## 🔧 Extensions

Pour ajouter un nouveau composant :

1. Créer le fichier dans `/src/app/components/`
2. Respecter les tokens de design
3. Exporter dans `/src/app/components/index.ts`
4. Documenter l'usage

## 📱 Responsive

Les composants sont conçus pour desktop (1440px). Pour une version responsive :

1. Ajuster les espacements avec breakpoints Tailwind
2. Adapter les tailles de police
3. Revoir la disposition des grilles

## ✨ Bonnes Pratiques

1. **Utiliser les tokens** plutôt que des valeurs en dur
2. **Composer les composants** plutôt que de les dupliquer
3. **Respecter la hiérarchie typographique**
4. **Maintenir la cohérence des espacements**
5. **Tester l'accessibilité** des nouveaux composants

## 📄 License

Design system extrait de la frame Figma du portfolio.
