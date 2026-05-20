# Changelog - Design System Portfolio

## [1.1.0] - 2026-05-01

### 🎨 Mises à jour - Fidélité à la maquette Figma

#### Button Component
**Avant** : 2 variantes simples (primary/secondary)

**Maintenant** : 4 états fidèles à la maquette
- ✅ État par défaut : Fond blanc, bordure noire, texte noir
- ✅ État hover : Fond #9b2909, texte blanc
- ✅ État cliqué : Fond #9b2909 + ombre portée
- ✅ État désactivé : Fond blanc, bordure grise, texte gris

**Améliorations techniques**
- Gestion d'état avec `useState` pour l'état actif
- Bordure absolue qui disparaît au clic
- Transitions CSS fluides
- Support de la prop `disabled`

**Breaking Changes**
- ❌ Suppression de la prop `variant`
- ✅ Nouveau : prop `disabled` (boolean)

#### ProjectCard Component
**Avant** : Layout basique en deux colonnes

**Maintenant** : Fidèle à la maquette Figma
- ✅ Fond : rgba(239, 233, 244, 0.45) avec bordure orange
- ✅ Border radius : 12px (au lieu de 8px)
- ✅ Padding : 40px uniforme
- ✅ Gap : 40px entre image et description
- ✅ Image : dimensions fixes 540px × 405px, arrondie
- ✅ Description : largeur fixe 540px
- ✅ Nouvelle prop `layout` : 'image-left' | 'image-right'

**Améliorations**
- Structure HTML exacte de la maquette
- Support des deux layouts (image gauche/droite)
- Meilleure gestion de l'overflow
- Bordure orange positionnée en absolu

**Breaking Changes**
- ⚠️ `ProjectDescription` génère maintenant un `<p>` avec mb-[5px]
- ⚠️ `ProjectHighlight` utilise des styles inline pour font-weight
- ✅ Nouveau : prop `layout` pour inverser image/description

#### Logo Component
**Avant** : SVG simplifié

**Maintenant** : Logo original de Figma
- ✅ Utilisation des chemins SVG exacts de Figma
- ✅ Couleurs exactes : #241623 et #F4633A
- ✅ Nouveau composant `LogoIcon` pour taille personnalisable

### 📦 Nouveaux Composants

#### LogoIcon
- Logo seul sans texte
- Prop `size` pour ajuster la hauteur
- Ratio préservé automatiquement
- Parfait pour favicons, avatars, etc.

### 📚 Documentation

Nouveaux fichiers :
- `LOGO_GUIDE.md` - Guide complet du logo
- `COMPONENTS_LIST.md` - Liste exhaustive des composants
- `CHANGELOG.md` - Ce fichier

Mis à jour :
- `DESIGN_SYSTEM.md` - Props et exemples actualisés
- `EXEMPLES.md` - Nouveaux exemples avec layouts
- `README_DESIGN_SYSTEM.md` - Informations complètes

### 🐛 Corrections

- ✅ Espacement entre paragraphes dans ProjectDescription
- ✅ Line-height correct dans les descriptions
- ✅ Bordures exactes selon la maquette
- ✅ Couleurs de fond précises

### 🔄 Migration Guide

#### Button

**Avant**
```tsx
<Button variant="primary">Texte</Button>
<Button variant="secondary">Texte</Button>
```

**Maintenant**
```tsx
<Button>Texte</Button>
<Button disabled={true}>Texte</Button>
```

#### ProjectCard

**Avant**
```tsx
<ProjectCard
  title="Titre"
  client="Client"
  year="2026"
  category="Category"
  image="/image.jpg"
  description={
    <>
      <ProjectDescription>
        Texte simple
      </ProjectDescription>
    </>
  }
/>
```

**Maintenant**
```tsx
<ProjectCard
  title="Titre"
  client="Client"
  year="2026"
  category="Category"
  layout="image-left"  // Nouveau !
  image="/image.jpg"
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

### ⚡ Performance

- Aucun impact sur le bundle size
- Utilisation de `useState` pour gestion d'état optimale
- Images avec dimensions fixes pour éviter les reflows

### 🎯 Prochaines Étapes (v1.2.0)

- [ ] Animations de transition au hover
- [ ] Variantes de couleur pour ProjectCard
- [ ] Mode dark pour tous les composants
- [ ] Composant ContactForm
- [ ] Composant Footer
- [ ] Tests unitaires

---

## [1.0.0] - 2026-05-01

### 🎉 Version Initiale

**Design Tokens**
- Palette de couleurs complète
- 8 niveaux d'espacement
- Typographies Satoshi & Urbanist
- Border radius, shadows

**Composants**
- 8 composants typographiques
- 5 composants de base
- 1 composant layout (Header)
- 2 composants contenu

**Documentation**
- DESIGN_SYSTEM.md
- EXEMPLES.md
- README_DESIGN_SYSTEM.md
- design-tokens.json

**Démo**
- Page App.tsx interactive
- Tous les composants présentés
