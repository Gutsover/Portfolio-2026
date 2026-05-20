# Guide d'Import dans Figma via Tokens Studio

## 📦 Fichier Optimisé

Le fichier `design-tokens-figma.json` est maintenant prêt pour l'import dans Figma via Tokens Studio.

## 🎯 Étapes d'Installation

### 1. Installer Tokens Studio for Figma

1. Ouvrir Figma
2. Menu **Plugins** → **Browse plugins in Community**
3. Rechercher **"Tokens Studio for Figma"**
4. Cliquer sur **Install**

### 2. Préparer le Fichier

Le fichier `design-tokens-figma.json` contient :
- ✅ Couleurs (primary, secondary, background, text, border)
- ✅ Typographies complètes (8 styles)
- ✅ Espacements (8 niveaux)
- ✅ Border radius (4 tailles)
- ✅ Ombres (header, button active)
- ✅ Composants (button, tag, projectCard, header)

### 3. Importer dans Figma

**Option A : Import Local**

1. Ouvrir votre fichier Figma
2. Menu **Plugins** → **Tokens Studio for Figma**
3. Cliquer sur l'icône **Settings** (⚙️) en haut à droite
4. Choisir **Local** dans "Token Storage"
5. Cliquer sur **Import**
6. Sélectionner `design-tokens-figma.json`
7. Les tokens apparaissent dans le panel

**Option B : Import GitHub (synchronisation)**

1. Créer un repo GitHub
2. Pusher `design-tokens-figma.json` dans le repo
3. Dans Tokens Studio → Settings → **GitHub**
4. Connecter votre repo
5. Les tokens se synchroniseront automatiquement

### 4. Appliquer les Tokens

**Créer les Styles Figma**

1. Dans Tokens Studio, sélectionner un token set (colors, typography, etc.)
2. Cliquer sur **Create Styles**
3. Figma créera automatiquement :
   - Color Styles
   - Text Styles
   - Effect Styles (ombres)

**Utiliser les Tokens**

1. Sélectionner un élément dans Figma
2. Dans Tokens Studio, cliquer sur un token
3. Le token est appliqué à l'élément
4. Les références sont maintenues (ex: `{colors.primary.red}`)

## 🎨 Créer les Composants Figma

### Button Component

1. **Créer un rectangle** : 
   - Largeur : Auto-layout
   - Hauteur : 48px (16px × 2 + texte)
   - Border radius : `{borderRadius.md}` (8px)

2. **Ajouter le texte** :
   - Style : `{typography.styles.buttonText}`
   - Padding : `{spacing.3xl}` horizontal (40px), `{spacing.md}` vertical (16px)

3. **Créer 4 variantes** :
   - Default : bg `{colors.background.white}`, border `{colors.border.default}`
   - Hover : bg `{colors.primary.red}`, text white
   - Active : bg `{colors.primary.red}`, shadow `{shadows.buttonActive}`
   - Disabled : bg white, border `{colors.border.disabled}`, text `{colors.text.disabled}`

### Tag Component

1. Rectangle avec Auto-layout
2. Padding : 24px × 8px
3. Border : `{colors.border.accent}` (orange)
4. Border radius : `{borderRadius.md}`
5. Texte : `{typography.styles.sectionLabel}`

### ProjectCard Component

1. **Frame principal** :
   - Background : `{colors.background.accent}`
   - Border : `{colors.border.accent}`
   - Border radius : `{borderRadius.lg}` (12px)
   - Padding : `{spacing.3xl}` (40px)
   - Gap : `{spacing.3xl}` (40px)

2. **Image** :
   - Width : 540px
   - Height : 405px
   - Border radius : 12px

3. **Description section** :
   - Auto-layout vertical
   - Gap : `{spacing.xl}` (24px)

4. **Créer 2 variantes** :
   - image-left
   - image-right

### Header Component

1. Frame horizontal
2. Height : 54px
3. Padding : 120px × 16px
4. Shadow : `{shadows.header}`
5. Position : Sticky

## 📊 Structure des Tokens

```
colors/
├── primary/
│   ├── dark (#241623)
│   └── red (#9b2909)
├── secondary/
│   └── orange (#F4633A)
├── background/
├── text/
└── border/

typography/
├── fontFamilies/
├── fontWeights/
├── fontSize/
├── letterSpacing/
├── lineHeights/
└── styles/ (8 styles prédéfinis)

spacing/
├── xs (8px)
├── sm (10px)
├── md (16px)
├── lg (20px)
├── xl (24px)
├── 2xl (32px)
├── 3xl (40px)
└── 4xl (120px)

borderRadius/
├── sm (4px)
├── md (8px)
├── lg (12px)
└── xl (16px)

shadows/
├── header
└── buttonActive

components/ (specs des composants)
├── button
├── tag
├── projectCard
└── header
```

## 🔄 Synchronisation Bidirectionnelle

**Code → Figma**
1. Modifier `design-tokens-figma.json`
2. Commit & push (si GitHub)
3. Dans Tokens Studio → Pull
4. Les tokens sont mis à jour dans Figma

**Figma → Code**
1. Modifier les tokens dans Tokens Studio
2. Export JSON
3. Remplacer `design-tokens-figma.json`
4. Update CSS dans `src/styles/theme.css`

## 🎯 Variables Figma (Nouveau)

Figma supporte maintenant les Variables natives. Pour les utiliser :

1. Dans Tokens Studio → Settings
2. Activer **"Create Figma Variables"**
3. Les tokens deviennent des Variables Figma natives
4. Utilisables sans le plugin

## ⚡ Raccourcis Utiles

| Action | Raccourci |
|--------|-----------|
| Ouvrir Tokens Studio | `Cmd/Ctrl + /` puis "tokens" |
| Appliquer un token | Clic sur le token |
| Créer styles | Bouton "Create Styles" |
| Sync | Pull/Push dans Settings |

## 📝 Conventions de Nommage

Les tokens suivent la convention :
```
{category}.{subcategory}.{name}
```

Exemples :
- `{colors.primary.red}`
- `{typography.fontSize.base}`
- `{spacing.xl}`
- `{borderRadius.md}`

## ✅ Checklist d'Import

- [ ] Installer Tokens Studio for Figma
- [ ] Importer `design-tokens-figma.json`
- [ ] Créer les Color Styles
- [ ] Créer les Text Styles
- [ ] Créer les Effect Styles
- [ ] Créer le composant Button (4 variantes)
- [ ] Créer le composant Tag
- [ ] Créer le composant ProjectCard (2 variantes)
- [ ] Créer le composant Header
- [ ] Tester la synchronisation
- [ ] Configurer GitHub (optionnel)

## 🆘 Dépannage

**Les tokens ne s'importent pas**
- Vérifier que le JSON est valide
- Utiliser JSONLint pour valider le fichier

**Les références ne fonctionnent pas**
- Format : `{category.name}` avec accolades
- Vérifier que le token référencé existe

**Les styles Figma ne se créent pas**
- Sélectionner le token set avant "Create Styles"
- Vérifier les permissions du fichier Figma

## 🔗 Ressources

- [Tokens Studio Documentation](https://docs.tokens.studio/)
- [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383)
- [Design Tokens W3C Spec](https://design-tokens.github.io/community-group/format/)

---

**Fichier optimisé** : `design-tokens-figma.json`  
**Format** : Tokens Studio v2  
**Compatible** : Figma Variables, Style Dictionary
