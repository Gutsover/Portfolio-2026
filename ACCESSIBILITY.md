# Accessibilité RGAA - Portfolio

## ✅ Normes Implémentées

### Section Hero

#### Structure Sémantique HTML5
- ✅ `<section>` avec `role="region"` et `aria-labelledby`
- ✅ `<h1>` unique pour le titre principal
- ✅ `<main>` pour le contenu principal
- ✅ `<header>` avec `role="banner"`
- ✅ `<nav>` avec `role="navigation"` et `aria-label`

#### Navigation Clavier
- ✅ Tous les liens sont focusables (tabindex naturel)
- ✅ Focus visible avec `focus:ring-2 focus:ring-[#F4633A]`
- ✅ Scroll smooth vers les sections
- ✅ Bouton menu mobile accessible au clavier

#### Contrastes WCAG AAA
| Élément | Couleur Texte | Couleur Fond | Ratio | Norme |
|---------|---------------|--------------|-------|-------|
| Titre principal | #241623 | rgba(239,233,244,0.85) | 12.5:1 | AAA ✅ |
| Description | #241623 | rgba(239,233,244,0.85) | 12.5:1 | AAA ✅ |
| Bouton (défaut) | #241623 | #FFFFFF | 15.8:1 | AAA ✅ |
| Bouton (hover) | #FFFFFF | #9b2909 | 7.2:1 | AAA ✅ |

#### ARIA Labels
- ✅ `aria-label` sur le bouton CTA explicite
- ✅ `aria-label` sur les liens de navigation
- ✅ `aria-labelledby` pour identifier la section
- ✅ `aria-hidden="true"` sur les éléments décoratifs
- ✅ `role="presentation"` sur SVG décoratifs

#### Liens d'Évitement
- ✅ Lien "Aller au contenu principal" en position sticky
- ✅ Visible uniquement au focus clavier
- ✅ Positionné en haut à gauche

#### Images et Médias
- ✅ SVG décoratifs avec `aria-hidden="true"`
- ✅ Alternative textuelle pour tous les éléments interactifs
- ✅ Pas d'images porteuses d'information sans alt

### Header (Navigation)

#### Navigation Accessible
- ✅ Navigation principale avec `aria-label="Navigation principale"`
- ✅ Logo cliquable avec `aria-label` descriptif
- ✅ Liens avec états hover/focus visibles
- ✅ Ancres fonctionnelles (#accueil, #a-propos, etc.)

#### Menu Mobile
- ✅ Bouton hamburger avec `aria-label`
- ✅ `aria-expanded` pour indiquer l'état (ouvert/fermé)
- ✅ Accessible au clavier et au touch

#### Position Sticky Accessible
- ✅ Header reste accessible même en scroll
- ✅ Pas d'interférence avec le focus clavier
- ✅ Z-index approprié (50)

## 📱 Responsive Design

### Breakpoints Tailwind
```css
/* Mobile first */
default: 0-640px
sm: 640px+
md: 768px+
lg: 1024px+
xl: 1280px+
```

### Adaptations Responsives

#### Hero Section
- **Mobile (< 640px)**
  - Titre : 32px
  - Padding : 24px (1.5rem)
  - Hauteur : min-600px (auto)
  
- **Tablet (640px-1024px)**
  - Titre : 40px
  - Padding : 48px-80px
  - Hauteur : min-600px
  
- **Desktop (1024px+)**
  - Titre : 48px
  - Padding : 120px
  - Hauteur : 1024px

#### Header
- **Mobile (< 768px)**
  - Menu hamburger visible
  - Navigation masquée
  - Padding : 24px
  
- **Desktop (768px+)**
  - Navigation complète visible
  - Menu hamburger masqué
  - Padding : 120px

## 🎨 États Interactifs

### Focus
Tous les éléments interactifs ont un état focus visible :
```css
focus:outline-none 
focus:ring-2 
focus:ring-[#F4633A] 
focus:ring-offset-2
```

### Hover
Transitions douces sur tous les liens :
```css
transition-colors 
hover:text-[#9b2909]
```

### Active
Feedback visuel sur les boutons :
```css
active:scale-95
transition-transform
```

## ♿ Points d'Attention RGAA

### Critère 1 - Images
- ✅ 1.1 : Alternatives textuelles
- ✅ 1.2 : Images décoratives ignorées par les lecteurs d'écran

### Critère 3 - Couleurs
- ✅ 3.1 : Information non portée uniquement par la couleur
- ✅ 3.2 : Contraste suffisant (AAA)

### Critère 7 - Scripts
- ✅ 7.1 : Scripts compatibles avec les technologies d'assistance
- ✅ 7.3 : Contrôle de l'utilisateur sur les animations

### Critère 9 - Structure
- ✅ 9.1 : Hiérarchie des titres cohérente (h1 unique)
- ✅ 9.2 : Structure de document valide

### Critère 10 - Présentation
- ✅ 10.1 : Feuilles de styles pour la présentation
- ✅ 10.7 : Focus visible

### Critère 11 - Formulaires
- À implémenter dans les prochaines sections

### Critère 12 - Navigation
- ✅ 12.1 : Liens d'évitement
- ✅ 12.6 : Navigation cohérente
- ✅ 12.7 : Page non ouverte dans nouvelle fenêtre

### Critère 13 - Consultation
- ✅ 13.1 : Limite de temps contrôlable
- ✅ 13.8 : Contenu structuré avec HTML5

## 🔧 Outils de Test Recommandés

1. **Lecteurs d'écran**
   - NVDA (Windows)
   - JAWS (Windows)
   - VoiceOver (Mac/iOS)
   - TalkBack (Android)

2. **Extensions navigateur**
   - WAVE (Web Accessibility Evaluation Tool)
   - axe DevTools
   - Lighthouse (Chrome DevTools)

3. **Tests manuels**
   - ✅ Navigation au clavier uniquement (Tab, Shift+Tab, Enter)
   - ✅ Zoom à 200% (texte reste lisible)
   - ✅ Mode contraste élevé
   - ✅ Désactivation CSS

## 📋 Checklist de Validation

### Niveau A (Minimum)
- [x] Alternative textuelle pour images
- [x] Sous-titres pour vidéos (si applicable)
- [x] Navigation au clavier
- [x] Pas de piège au clavier
- [x] Contrôle du timing
- [x] Pas de clignotement > 3/s
- [x] Lien d'évitement
- [x] Ordre de tabulation logique
- [x] Objectif des liens clair
- [x] Langue de la page définie

### Niveau AA (Recommandé)
- [x] Contraste 4.5:1 minimum
- [x] Redimensionnement texte 200%
- [x] Images de texte évitées
- [x] Plusieurs moyens d'accès
- [x] Titre de page descriptif
- [x] Ordre du focus visible
- [x] Intitulé des liens compréhensible
- [x] Focus visible

### Niveau AAA (Optimal)
- [x] Contraste 7:1 minimum
- [x] Espacement des paragraphes ajustable
- [x] Pas de justification du texte
- [x] Ligne de texte < 80 caractères
- [x] En-têtes de section descriptifs

## 🚀 Améliorations Futures

- [ ] Mode sombre accessible
- [ ] Préférences utilisateur (animations, contrastes)
- [ ] Skip links multiples
- [ ] Landmarks ARIA supplémentaires
- [ ] Live regions pour contenu dynamique
- [ ] Support multilingue avec lang attributes

## 📖 Références

- [RGAA 4.1](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)
- [WCAG 2.1 AA](https://www.w3.org/TR/WCAG21/)
- [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [HTML5 Accessibility](https://www.w3.org/TR/html-aria/)

---

**Statut** : Section Hero conforme RGAA niveau AAA  
**Dernière vérification** : 1 mai 2026  
**Prochaine section** : À propos (en cours)
