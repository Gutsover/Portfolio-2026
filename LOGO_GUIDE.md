# Guide du Logo

## 📐 Description

Le logo original importé depuis Figma se compose de :
- **3 vecteurs noirs** (#241623) formant le motif "M"
- **1 vecteur orange** (#F4633A) pour l'accent central
- **1 lettre "B"** stylisée (#241623)

## 🎨 Composants Disponibles

### 1. Logo Complet (`<Logo />`)

Le logo avec le texte "mylene.B"

```tsx
import { Logo } from './components';

<Logo />
```

**Dimensions**
- Hauteur : 24px
- Largeur totale : ~100px (logo 39.977px + gap 20px + texte)

**Utilisation**
- Header
- Footer
- Page d'accueil
- Signature

### 2. Logo Icône Seul (`<LogoIcon />`)

Le symbole sans texte, avec taille personnalisable

```tsx
import { LogoIcon } from './components';

// Taille par défaut (24px)
<LogoIcon />

// Taille personnalisée (48px)
<LogoIcon size={48} />

// Avec className
<LogoIcon size={32} className="opacity-50" />
```

**Props**
- `size` : Hauteur en pixels (default: 24)
- `className` : Classes CSS additionnelles

**Utilisation**
- Favicon
- Avatar
- Icône d'application
- Watermark

## 🎨 Couleurs du Logo

| Élément | Couleur | Hex |
|---------|---------|-----|
| Vecteurs M | Primary Dark | #241623 |
| Accent central | Secondary Orange | #F4633A |
| Lettre B | Primary Dark | #241623 |

## 📏 Proportions

**Ratio d'aspect**
- Width / Height = 39.9769 / 24.0001 ≈ 1.666:1

**Espacement avec texte**
- Gap entre icône et texte : 20px

## ✅ Bonnes Pratiques

### À FAIRE ✓

```tsx
// Logo complet dans le header
<Header />

// Logo icône en petit format
<LogoIcon size={16} />

// Logo avec padding
<div className="p-[24px]">
  <Logo />
</div>
```

### À ÉVITER ✗

```tsx
// Ne pas déformer le ratio
<div style={{ width: '100px', height: '100px' }}>
  <LogoIcon /> {/* ✗ */}
</div>

// Ne pas changer les couleurs
<svg fill="red"> {/* ✗ */}

// Ne pas ajouter d'effets lourds
<LogoIcon className="blur-lg" /> {/* ✗ */}
```

## 🎯 Exemples d'Utilisation

### Header Sticky

```tsx
function Header() {
  return (
    <header className="sticky top-0 bg-white px-[120px] py-[16px]">
      <Logo />
    </header>
  );
}
```

### Footer

```tsx
function Footer() {
  return (
    <footer className="bg-[#241623] p-[80px]">
      <Logo />
      <p className="text-white mt-[16px]">
        © 2026 Mylene.B
      </p>
    </footer>
  );
}
```

### Card Avatar

```tsx
function ProfileCard() {
  return (
    <div className="flex gap-[16px] items-center">
      <LogoIcon size={48} />
      <div>
        <h3>Mylene.B</h3>
        <p>Designer UX/UI</p>
      </div>
    </div>
  );
}
```

### Favicon

```tsx
// Dans index.html ou App.tsx
<link rel="icon" href="/logo-icon.svg" />

// Ou exporter le LogoIcon comme SVG statique
```

### Loading Spinner

```tsx
function LoadingLogo() {
  return (
    <div className="animate-pulse">
      <LogoIcon size={64} />
    </div>
  );
}
```

## 📱 Responsive

```tsx
// Petits écrans
<LogoIcon size={20} className="md:hidden" />

// Grands écrans
<Logo className="hidden md:flex" />
```

## 🎨 Variantes de Couleur

Si vous devez créer une variante (sur fond sombre par exemple), créez un nouveau composant :

```tsx
// LogoLight.tsx
export function LogoLight() {
  return (
    <div className="flex gap-[20px] items-end">
      <div className="h-[24px] w-[39.977px] relative">
        <svg viewBox="0 0 39.9769 24.0001">
          <path d={svgPaths.p348a8300} fill="#FFFFFF" />
          <path d={svgPaths.p73caa00} fill="#FFFFFF" />
          <path d={svgPaths.p17ef70c0} fill="#F4633A" />
          <path d={svgPaths.p3511df00} fill="#FFFFFF" />
        </svg>
      </div>
      <LogoText className="text-white">mylene.B</LogoText>
    </div>
  );
}
```

## 🔧 Fichiers Source

- **SVG Paths** : `/src/imports/Group26948/svg-g17htdlqwg.ts`
- **Composant Figma** : `/src/imports/Group26948/Group26948.tsx`
- **Composant Logo** : `/src/app/components/Logo.tsx`
- **Composant Icône** : `/src/app/components/LogoIcon.tsx`

## 📦 Export

Le logo original de Figma est déjà optimisé et prêt à l'emploi. Les chemins SVG sont extraits dans un fichier TypeScript séparé pour faciliter la réutilisation.

## ⚡ Performance

- Utilise des chemins SVG natifs (pas d'image bitmap)
- Pas de dépendances externes
- Scalable à l'infini sans perte de qualité
- Taille minimale du bundle

## 🎯 Accessibilité

Ajouter un titre pour l'accessibilité :

```tsx
<div role="img" aria-label="Logo Mylene.B">
  <Logo />
</div>
```

## 📄 License

Logo original importé depuis Figma, appartenant au portfolio.
