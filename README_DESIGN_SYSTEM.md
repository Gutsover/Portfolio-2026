# Design System Portfolio - Documentation Complète

## 📦 Contenu Livré

Ce design system complet a été créé à partir de la frame Figma du portfolio one-page. Il comprend tous les éléments fondamentaux pour créer une charte graphique cohérente.

## 📂 Structure des Fichiers

### Design Tokens
```
src/styles/
├── theme.css          # Tokens de design (couleurs, espacements, typographies)
└── fonts.css          # Import des polices Satoshi & Urbanist
```

### Composants
```
src/app/components/
├── Typography.tsx     # 8 composants de typographie
├── Button.tsx         # Composant bouton avec 2 variantes
├── Divider.tsx        # Séparateur horizontal/vertical
├── Tag.tsx            # Étiquette avec divider
├── Logo.tsx           # Logo du portfolio
├── Header.tsx         # En-tête sticky avec navigation
├── ProjectCard.tsx    # Carte de projet complexe
├── SectionTitle.tsx   # Titre de section avec highlight
└── index.ts           # Exports centralisés
```

### Documentation
```
/
├── DESIGN_SYSTEM.md   # Documentation technique complète
├── EXEMPLES.md        # Exemples d'utilisation
└── README_DESIGN_SYSTEM.md  # Ce fichier
```

### Démo
```
src/app/
└── App.tsx            # Page de démo interactive
```

## 🎨 Éléments du Design System

### 1. Palette de Couleurs

| Couleur | Hex | Variable CSS | Usage |
|---------|-----|--------------|-------|
| Primary Dark | `#241623` | `--foreground` | Texte, bordures |
| Primary Red | `#9b2909` | `--primary` | Accents, CTA |
| Secondary Orange | `#F4633A` | `--secondary` | Icônes, accents |
| Background | `#FFFFFF` | `--background` | Fond |
| Accent | `rgba(239,233,244,0.85)` | `--accent` | Sections |

### 2. Typographies

**Polices**
- Satoshi (Regular 400, Medium 500, Bold 700)
- Urbanist (Regular 400, Medium 500, Bold 700)

**Composants typographiques**
1. `DisplayHeading` - 64px, Satoshi Medium
2. `SectionHeading` - 48px, Urbanist Bold
3. `SectionLabel` - 16px, Urbanist Medium, UPPERCASE
4. `BodyText` - 16px, Satoshi Regular
5. `BodyTextMedium` - 16px, Satoshi Medium
6. `CaptionText` - 16px, Urbanist Regular
7. `ButtonText` - 16px, Urbanist Medium, UPPERCASE
8. `LogoText` - 16px, Satoshi Bold, UPPERCASE

### 3. Espacements

| Token | Valeur | CSS Variable |
|-------|--------|--------------|
| XS | 8px | `--spacing-xs` |
| SM | 10px | `--spacing-sm` |
| MD | 16px | `--spacing-md` |
| LG | 20px | `--spacing-lg` |
| XL | 24px | `--spacing-xl` |
| 2XL | 32px | `--spacing-2xl` |
| 3XL | 40px | `--spacing-3xl` |
| 4XL | 120px | `--spacing-4xl` |

### 4. Border Radius

| Token | Valeur |
|-------|--------|
| SM | 4px |
| MD | 8px |
| LG | 12px |
| XL | 16px |

### 5. Ombres

**Header Shadow**
```css
box-shadow: 
  0px 225px 31.5px rgba(0,0,0,0),
  0px 144px 29px rgba(0,0,0,0.01),
  0px 81px 24.5px rgba(0,0,0,0.05),
  0px 36px 18px rgba(0,0,0,0.09),
  0px 9px 10px rgba(0,0,0,0.1);
```

## 🧩 Composants Disponibles

### Composants de Base

1. **Button**
   - Variantes: `primary`, `secondary`
   - Props: `variant`, `onClick`, `className`

2. **Divider**
   - Orientations: `horizontal`, `vertical`
   - Props: `orientation`, `className`

3. **Tag**
   - Étiquette avec divider intégré
   - Props: `children`, `className`

### Composants de Layout

4. **Logo**
   - Logo avec SVG personnalisé
   - Texte "mylene.B"

5. **Header**
   - Navigation sticky
   - Ombre personnalisée
   - Responsive

### Composants de Contenu

6. **ProjectCard**
   - Carte de projet complexe
   - Props: `title`, `client`, `year`, `category`, `description`, `image`, `imageAlt`
   - Sous-composants: `ProjectDescription`, `ProjectHighlight`

7. **SectionTitle**
   - Titre de section avec label
   - Props: `label`, `title`, `highlightedWord`, `icon`

## 📖 Guide d'Utilisation

### Installation

Tous les fichiers sont déjà en place. Les polices sont chargées via Google Fonts.

### Import

```tsx
// Import global
import {
  Header,
  Button,
  ProjectCard,
  DisplayHeading
} from './components';

// Import individuel
import { Button } from './components/Button';
```

### Exemple Minimal

```tsx
import { Header, SectionTitle, Button } from './components';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-[120px] py-[80px]">
        <SectionTitle
          label="01 - Portfolio"
          title="Mes projets"
          highlightedWord="projets"
        />
        <Button variant="primary">Contactez-moi</Button>
      </main>
    </div>
  );
}
```

## 🎯 Cas d'Usage

1. **Portfolio Personnel** - Présenter vos projets avec style
2. **Site Vitrine** - Créer une landing page professionnelle
3. **Case Studies** - Documenter vos études de cas
4. **Blog Design** - Créer un blog avec une identité forte
5. **Documentation** - Présenter de la documentation technique

## 🔧 Personnalisation

### Modifier les Couleurs

Éditer `/src/styles/theme.css` :

```css
:root {
  --foreground: #241623;  /* Votre couleur */
  --primary: #9b2909;     /* Votre couleur */
  --secondary: #F4633A;   /* Votre couleur */
}
```

### Modifier les Polices

Éditer `/src/styles/fonts.css` :

```css
@import url('https://fonts.google.com/...');
```

Puis mettre à jour les composants dans `Typography.tsx`.

### Ajouter un Composant

1. Créer `/src/app/components/MonComposant.tsx`
2. Utiliser les tokens existants
3. Exporter dans `index.ts`

## 📱 Responsive

Le design system est optimisé pour desktop (1440px). Pour le rendre responsive :

```tsx
// Utiliser les breakpoints Tailwind
<div className="px-[120px] lg:px-[60px] md:px-[30px]">
  {/* Contenu */}
</div>
```

## ✅ Checklist de Production

- [ ] Optimiser les images
- [ ] Tester l'accessibilité (contraste, ARIA)
- [ ] Vérifier la performance (Lighthouse)
- [ ] Tester sur différents navigateurs
- [ ] Adapter pour mobile
- [ ] Ajouter les métadonnées SEO
- [ ] Configurer les analytics

## 📚 Ressources

- [Design System Documentation](./DESIGN_SYSTEM.md) - Documentation technique
- [Exemples d'Utilisation](./EXEMPLES.md) - Code snippets et templates
- [Démo Interactive](./src/app/App.tsx) - Page de démo complète

## 🎨 Charte Graphique Complète

### Principes de Design

1. **Minimalisme** - Design épuré et fonctionnel
2. **Hiérarchie Claire** - Organisation visuelle évidente
3. **Contraste Fort** - Couleurs primaires qui ressortent
4. **Typographie Expressive** - Polices personnalisées
5. **Espaces Généreux** - Respiration entre les éléments

### Do's & Don'ts

✅ **À FAIRE**
- Utiliser les composants fournis
- Respecter les espacements (multiples de 8px)
- Maintenir la cohérence typographique
- Utiliser les tokens CSS
- Composer les composants

❌ **À ÉVITER**
- Créer de nouvelles couleurs
- Mélanger les polices
- Ignorer la grille d'espacement
- Utiliser des valeurs en dur
- Dupliquer le code

## 🚀 Démarrage Rapide

1. Voir la démo : ouvrir l'application
2. Explorer le code : `src/app/App.tsx`
3. Lire les exemples : `EXEMPLES.md`
4. Consulter la doc : `DESIGN_SYSTEM.md`
5. Créer votre page !

## 📦 Exports Disponibles

```tsx
// Typographie
DisplayHeading, SectionHeading, SectionLabel,
BodyText, BodyTextMedium, CaptionText,
ButtonText, LogoText

// Base
Button, Divider, Tag

// Layout
Logo, Header

// Contenu
ProjectCard, ProjectDescription, ProjectHighlight,
SectionTitle
```

## 🎉 Prêt à l'Emploi

Tous les composants sont fonctionnels et testés. Commencez à créer votre portfolio dès maintenant !

---

**Design System créé le 1 mai 2026**
**Basé sur la frame Figma du portfolio one-page**
