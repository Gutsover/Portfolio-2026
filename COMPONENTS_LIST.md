# Liste Complète des Composants

## 📦 Vue d'Ensemble

**Total : 18 composants + 1 fichier de tokens**

## 🎨 Design Tokens

### `src/styles/theme.css`
Tous les tokens de design (couleurs, espacements, typographies, etc.)

### `src/styles/fonts.css`
Import des polices Satoshi et Urbanist

## 📝 Composants de Typographie (8)

| Composant | Fichier | Description | Taille | Police | Poids |
|-----------|---------|-------------|--------|--------|-------|
| `DisplayHeading` | Typography.tsx | Titre principal de page | 64px | Satoshi | 500 |
| `SectionHeading` | Typography.tsx | Titre de projet/section | 48px | Urbanist | 700 |
| `SectionLabel` | Typography.tsx | Label de section (uppercase) | 16px | Urbanist | 500 |
| `BodyText` | Typography.tsx | Texte de contenu | 16px | Satoshi | 400 |
| `BodyTextMedium` | Typography.tsx | Texte emphase | 16px | Satoshi | 500 |
| `CaptionText` | Typography.tsx | Métadonnées (capitalize) | 16px | Urbanist | 400 |
| `ButtonText` | Typography.tsx | Texte de bouton (uppercase) | 16px | Urbanist | 500 |
| `LogoText` | Typography.tsx | Texte logo (uppercase) | 16px | Satoshi | 700 |

### Import
```tsx
import {
  DisplayHeading,
  SectionHeading,
  SectionLabel,
  BodyText,
  BodyTextMedium,
  CaptionText,
  ButtonText,
  LogoText
} from './components';
```

## 🧩 Composants de Base (4)

### 1. `Button`
**Fichier** : `Button.tsx`

**Props**
- `children` : Contenu du bouton
- `onClick` : Fonction callback
- `disabled` : Désactiver le bouton (default: false)
- `className` : Classes CSS

**États (fidèles à la maquette Figma)**
1. **Défaut** : Fond blanc, bordure noire (#241623), texte noir
2. **Hover** : Fond rouge (#9b2909), texte blanc
3. **Cliqué/Active** : Fond rouge (#9b2909) + ombre portée, texte blanc
4. **Désactivé** : Fond blanc, bordure grise (#e0e0e0), texte gris (#c4c4c4)

**Exemple**
```tsx
<Button onClick={handleClick}>Me contacter</Button>
<Button disabled={true}>Désactivé</Button>
```

**Caractéristiques**
- Padding : 40px horizontal, 16px vertical
- Border radius : 8px
- Gestion automatique des états (useState)

---

### 2. `Divider`
**Fichier** : `Divider.tsx`

**Props**
- `orientation` : 'horizontal' | 'vertical' (default: 'horizontal')
- `className` : Classes CSS

**Exemple**
```tsx
<Divider />
<Divider orientation="vertical" />
```

---

### 3. `Tag`
**Fichier** : `Tag.tsx`

**Props**
- `children` : Texte du tag
- `className` : Classes CSS

**Description** : Étiquette avec divider intégré sur la gauche

**Exemple**
```tsx
<Tag>Build</Tag>
<Tag>UX/UI Design</Tag>
```

---

### 4. `Logo` & `LogoIcon`
**Fichiers** : `Logo.tsx`, `LogoIcon.tsx`

**Logo (complet)**
```tsx
<Logo />
```
Logo complet avec icône SVG + texte "mylene.B"

**LogoIcon (icône seul)**
```tsx
<LogoIcon size={24} />
<LogoIcon size={48} />
```

**Props (LogoIcon)**
- `size` : Hauteur en pixels (default: 24)
- `className` : Classes CSS

**Détails** : Voir [LOGO_GUIDE.md](./LOGO_GUIDE.md)

## 🏗️ Composants de Layout (1)

### 5. `Header`
**Fichier** : `Header.tsx`

**Props**
- `className` : Classes CSS

**Caractéristiques**
- Position sticky (top: 0)
- Ombre personnalisée
- Navigation avec 3 liens : "à propos", "Projets", "Contact"
- Logo à gauche, navigation à droite
- Padding horizontal : 120px
- Hauteur : 54px

**Exemple**
```tsx
<Header />
```

## 📄 Composants de Contenu (2)

### 6. `SectionTitle`
**Fichier** : `SectionTitle.tsx`

**Props**
- `label` : Label en uppercase (ex: "01 - Projets")
- `title` : Titre principal
- `highlightedWord` : Mot à mettre en couleur primaire (optionnel)
- `icon` : Icône React node (optionnel)
- `className` : Classes CSS

**Exemple**
```tsx
<SectionTitle
  label="02 - Projets"
  title="Projets sélectionnés"
  highlightedWord="Projets"
/>
```

---

### 7. `ProjectCard`
**Fichier** : `ProjectCard.tsx`

**Props**
- `title` : Titre du projet
- `client` : Nom du client
- `year` : Année
- `category` : Catégorie (ex: "Refonte du site", "UX/UI Design")
- `description` : Contenu React (utiliser ProjectDescription)
- `image` : URL de l'image
- `imageAlt` : Texte alternatif (optionnel)
- `layout` : 'image-left' | 'image-right' (default: 'image-left')
- `className` : Classes CSS

**Sous-composants**
- `ProjectDescription` : Wrapper pour un paragraphe (mb-[5px])
- `ProjectHighlight` : Span pour mettre en emphase (font-weight 500)

**Design fidèle à la maquette Figma**
- Fond : rgba(239, 233, 244, 0.45)
- Bordure orange : #f4633a
- Border radius : 12px
- Padding : 40px
- Gap : 40px entre image et description
- Image : 540px × 405px, arrondie à 12px
- Description : largeur fixe 540px

**Exemple**
```tsx
<ProjectCard
  title="Végétal Local"
  client="Office Français de la Biodiversité"
  year="2025-2026"
  category="Refonte du site"
  layout="image-left"
  image="/image.jpg"
  description={
    <>
      <ProjectDescription>
        <span className="leading-[1.4]">Texte avec </span>
        <ProjectHighlight>mots importants</ProjectHighlight>
      </ProjectDescription>
    </>
  }
/>
```

## 📊 Récapitulatif par Type

| Type | Nombre | Composants |
|------|--------|------------|
| Typographie | 8 | DisplayHeading, SectionHeading, SectionLabel, BodyText, BodyTextMedium, CaptionText, ButtonText, LogoText |
| Base | 4 | Button, Divider, Tag, Logo/LogoIcon |
| Layout | 1 | Header |
| Contenu | 2 | SectionTitle, ProjectCard |
| **Total** | **15** | + 3 sous-composants (ProjectDescription, ProjectHighlight, LogoIcon) |

## 🎯 Import Global

```tsx
// Import depuis index.ts (recommandé)
import {
  // Typography
  DisplayHeading,
  SectionHeading,
  SectionLabel,
  BodyText,
  BodyTextMedium,
  CaptionText,
  ButtonText,
  LogoText,
  
  // Base
  Button,
  Divider,
  Tag,
  
  // Layout
  Logo,
  LogoIcon,
  Header,
  
  // Content
  ProjectCard,
  ProjectDescription,
  ProjectHighlight,
  SectionTitle
} from './components';
```

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | Documentation technique complète |
| [EXEMPLES.md](./EXEMPLES.md) | 7+ exemples d'utilisation |
| [README_DESIGN_SYSTEM.md](./README_DESIGN_SYSTEM.md) | Guide complet |
| [LOGO_GUIDE.md](./LOGO_GUIDE.md) | Guide spécifique au logo |
| [COMPONENTS_LIST.md](./COMPONENTS_LIST.md) | Ce fichier |

## 🎨 Design Tokens Disponibles

### Couleurs
```css
--foreground: #241623
--primary: #9b2909
--secondary: #F4633A
--background: #ffffff
--accent: rgba(239, 233, 244, 0.85)
```

### Espacements
```css
--spacing-xs: 8px
--spacing-sm: 10px
--spacing-md: 16px
--spacing-lg: 20px
--spacing-xl: 24px
--spacing-2xl: 32px
--spacing-3xl: 40px
--spacing-4xl: 120px
```

### Border Radius
```css
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
```

### Tailles de Police
```css
--text-xs: 12px
--text-sm: 14px
--text-base: 16px
--text-lg: 18px
--text-xl: 24px
--text-2xl: 32px
--text-3xl: 48px
--text-4xl: 64px
```

## 🔧 Fichier d'Export

Tous les composants sont exportés depuis `/src/app/components/index.ts`

## ✅ Checklist de Développement

- [x] Tokens de design créés
- [x] 8 composants typographiques
- [x] 4 composants de base
- [x] Logo original de Figma intégré
- [x] Composant Header sticky
- [x] Composant ProjectCard complexe
- [x] Composant SectionTitle
- [x] Documentation complète
- [x] Exemples d'utilisation
- [x] Page de démo interactive
- [x] Export JSON des tokens

## 🚀 Prochaines Étapes

1. **Responsive** : Adapter les composants pour mobile/tablette
2. **Animations** : Ajouter des transitions avec Motion
3. **Dark Mode** : Créer une variante sombre
4. **Accessibilité** : Ajouter les attributs ARIA
5. **Tests** : Créer des tests unitaires
6. **Storybook** : Documenter visuellement les composants
7. **NPM Package** : Publier le design system

## 📦 Fichiers Générés

```
src/
├── app/
│   ├── components/
│   │   ├── Typography.tsx
│   │   ├── Button.tsx
│   │   ├── Divider.tsx
│   │   ├── Tag.tsx
│   │   ├── Logo.tsx
│   │   ├── LogoIcon.tsx
│   │   ├── Header.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SectionTitle.tsx
│   │   └── index.ts
│   └── App.tsx (Démo)
└── styles/
    ├── theme.css
    └── fonts.css

Documentation/
├── DESIGN_SYSTEM.md
├── EXEMPLES.md
├── README_DESIGN_SYSTEM.md
├── LOGO_GUIDE.md
├── COMPONENTS_LIST.md
└── design-tokens.json
```
