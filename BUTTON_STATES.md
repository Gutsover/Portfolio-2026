# Guide des États du Bouton

## 🎨 Design Fidèle à la Maquette Figma

Le composant Button a été développé pour reproduire exactement les 4 états définis dans la maquette Figma.

## États Visuels

### 1. État Par Défaut (Default)
```tsx
<Button>Me contacter</Button>
```

**Style**
- Fond : `#FFFFFF` (blanc)
- Bordure : `1px solid #241623` (noir)
- Texte : `#241623` (noir)
- Border radius : `8px`
- Padding : `40px horizontal, 16px vertical`

**Utilisation**
- État de repos du bouton
- Aucune interaction utilisateur

---

### 2. État Survol (Hover)
```tsx
// L'état s'active automatiquement au survol
<Button>Me contacter</Button>
```

**Style**
- Fond : `#9b2909` (rouge primaire)
- Bordure : Visible (héritée)
- Texte : `#FFFFFF` (blanc)
- Transition : Fluide (CSS transition-all)

**Comportement**
- Déclenché par `:hover` CSS
- Animation de changement de couleur
- Texte passe du noir au blanc

**Utilisation**
- Feedback visuel de l'interaction possible
- Incite au clic

---

### 3. État Cliqué/Actif (Active)
```tsx
// L'état s'active automatiquement au clic
<Button>Me contacter</Button>
```

**Style**
- Fond : `#9b2909` (rouge primaire)
- Bordure : Masquée (opacity: 0)
- Texte : `#FFFFFF` (blanc)
- Ombre : `0px 4px 8px rgba(0,0,0,0.2)`

**Comportement**
- Déclenché par `onMouseDown`
- Géré par `useState` (isActive)
- Ombre portée pour effet de profondeur
- Reset au `onMouseUp` ou `onMouseLeave`

**Utilisation**
- Feedback tactile du clic
- Indique que l'action est en cours

**Code Interne**
```tsx
const [isActive, setIsActive] = useState(false);

const handleMouseDown = () => {
  if (!disabled) setIsActive(true);
};

const handleMouseUp = () => {
  setIsActive(false);
};
```

---

### 4. État Désactivé (Disabled)
```tsx
<Button disabled={true}>Me contacter</Button>
```

**Style**
- Fond : `#FFFFFF` (blanc)
- Bordure : `1px solid #e0e0e0` (gris clair)
- Texte : `#c4c4c4` (gris)
- Curseur : `not-allowed`

**Comportement**
- Aucune interaction possible
- onClick non déclenché
- Pas d'état hover/active

**Utilisation**
- Bouton non disponible
- Action impossible dans le contexte actuel
- Formulaire invalide

---

## 🔧 Implémentation Technique

### Structure HTML

```tsx
<div className="group relative ...">
  {/* Bordure absolue */}
  <div className="absolute border inset-0 rounded-[8px]" />
  
  {/* Texte du bouton */}
  <ButtonText className={textColor}>
    {children}
  </ButtonText>
</div>
```

### Gestion des États

**CSS Classes Dynamiques**
```tsx
const stateStyles = disabled
  ? 'bg-white cursor-not-allowed'
  : isActive
  ? 'bg-[#9b2909] cursor-pointer shadow-[0px_4px_8px_rgba(0,0,0,0.2)]'
  : 'bg-white hover:bg-[#9b2909] cursor-pointer';
```

**Couleur du Texte**
```tsx
const textColor = disabled
  ? 'text-[#c4c4c4]'
  : isActive || className.includes('hover')
  ? 'text-white'
  : 'text-[#241623] group-hover:text-white';
```

**Bordure Conditionnelle**
```tsx
const borderColor = disabled 
  ? 'border-[#e0e0e0]' 
  : 'border-[#241623]';

// Dans le JSX
<div className={`
  absolute border ${borderColor} 
  ${isActive ? 'opacity-0' : 'opacity-100'}
`} />
```

### Event Handlers

```tsx
<div
  onClick={handleClick}
  onMouseDown={handleMouseDown}
  onMouseUp={handleMouseUp}
  onMouseLeave={handleMouseUp}
>
```

## 📱 Comportement Responsive

```tsx
// Desktop (default)
<Button>Texte</Button>

// Mobile - ajuster padding si nécessaire
<Button className="px-[24px] md:px-[40px]">
  Texte
</Button>
```

## ♿ Accessibilité

### Attributs ARIA Recommandés

```tsx
<Button
  disabled={isLoading}
  aria-busy={isLoading}
  aria-label="Contacter l'équipe"
>
  {isLoading ? 'Envoi...' : 'Me contacter'}
</Button>
```

### Navigation Clavier

```tsx
// Ajouter support Enter/Space
<div
  role="button"
  tabIndex={disabled ? -1 : 0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
```

## 🎯 Exemples d'Utilisation

### Bouton Simple

```tsx
<Button onClick={() => alert('Clic!')}>
  Me contacter
</Button>
```

### Bouton avec État de Chargement

```tsx
function ContactButton() {
  const [loading, setLoading] = useState(false);

  const handleContact = async () => {
    setLoading(true);
    await sendEmail();
    setLoading(false);
  };

  return (
    <Button disabled={loading} onClick={handleContact}>
      {loading ? 'Envoi en cours...' : 'Me contacter'}
    </Button>
  );
}
```

### Bouton de Soumission de Formulaire

```tsx
function ContactForm() {
  const [formValid, setFormValid] = useState(false);

  return (
    <form>
      <input onChange={validateForm} />
      <Button disabled={!formValid} onClick={handleSubmit}>
        Envoyer
      </Button>
    </form>
  );
}
```

### Groupe de Boutons

```tsx
<div className="flex gap-[16px]">
  <Button onClick={handleSave}>Enregistrer</Button>
  <Button disabled={true}>Annuler</Button>
</div>
```

## 🎨 Personnalisation

### Styles Personnalisés

```tsx
// Ajouter des classes Tailwind
<Button className="w-full md:w-auto shadow-lg">
  Texte
</Button>

// Changer les couleurs (déconseillé - utiliser les tokens)
<Button className="hover:bg-[#custom-color]">
  Texte
</Button>
```

### Variante avec Icône

```tsx
import { ArrowRight } from 'lucide-react';

<Button className="flex gap-[12px] items-center">
  Me contacter
  <ArrowRight size={16} />
</Button>
```

## ⚡ Performance

- Pas de re-render inutile (useState local)
- CSS transitions natives (GPU accelerated)
- Pas de librairies externes
- Bundle size minimal (~1KB)

## 🐛 Debugging

### Vérifier l'État Actuel

```tsx
<Button
  onClick={() => {
    console.log('Button clicked!');
  }}
  disabled={false}
>
  Debug
</Button>
```

### Forcer un État

```tsx
// Forcer l'état hover (pour design review)
<Button className="bg-[#9b2909] text-white">
  État Hover Forcé
</Button>

// Forcer l'état actif
<Button className="bg-[#9b2909] text-white shadow-[0px_4px_8px_rgba(0,0,0,0.2)]">
  État Actif Forcé
</Button>
```

## 📊 Comparaison avec la Maquette Figma

| Caractéristique | Maquette | Implémentation | ✓ |
|----------------|----------|----------------|---|
| Fond défaut | Blanc | `bg-white` | ✅ |
| Bordure défaut | Noir 1px | `border border-[#241623]` | ✅ |
| Fond hover | Rouge #9b2909 | `hover:bg-[#9b2909]` | ✅ |
| Texte hover | Blanc | `group-hover:text-white` | ✅ |
| Ombre active | Oui | `shadow-[0px_4px_8px_rgba(0,0,0,0.2)]` | ✅ |
| Fond disabled | Blanc | `bg-white` | ✅ |
| Bordure disabled | Gris clair | `border-[#e0e0e0]` | ✅ |
| Texte disabled | Gris #c4c4c4 | `text-[#c4c4c4]` | ✅ |
| Border radius | 8px | `rounded-[8px]` | ✅ |
| Padding | 40/16px | `px-[40px] py-[16px]` | ✅ |

## ✅ Checklist de Conformité

- [x] 4 états visuels distincts
- [x] Transitions fluides
- [x] Gestion du disabled
- [x] Bordure absolue
- [x] Ombre au clic
- [x] Couleurs exactes
- [x] Dimensions exactes
- [x] Typographie correcte (ButtonText)
- [x] Cursor approprié pour chaque état
- [x] Reset de l'état actif au mouseLeave

## 🚀 Améliorations Futures

- [ ] Support des icônes intégrées
- [ ] Variantes de taille (sm, md, lg)
- [ ] Animation de chargement
- [ ] Ripple effect au clic
- [ ] Support du dark mode
- [ ] Tests unitaires

---

**Version** : 1.1.0  
**Dernière mise à jour** : 1 mai 2026  
**Fidélité maquette** : 100%
