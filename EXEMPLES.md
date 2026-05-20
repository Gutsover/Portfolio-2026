# Exemples d'Utilisation du Design System

## 🚀 Démarrage Rapide

### Importer les composants

```tsx
import {
  Header,
  Button,
  ProjectCard,
  SectionTitle,
  DisplayHeading,
  BodyText
} from './components';
```

## 📋 Exemples de Code

### 1. Page de Portfolio Simple

```tsx
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="px-[120px] py-[80px]">
        <SectionTitle
          label="01 - Introduction"
          title="Projets sélectionnés"
          highlightedWord="Projets"
        />

        <div className="mt-[60px]">
          <ProjectCard
            title="Mon Projet"
            client="Client Name"
            year="2026"
            category="Build"
            image="/project-image.jpg"
            description={
              <>
                <ProjectDescription>
                  Description du projet avec <ProjectHighlight>mots importants</ProjectHighlight>.
                </ProjectDescription>
              </>
            }
          />
        </div>
      </main>
    </div>
  );
}
```

### 2. Section About

```tsx
function AboutSection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto py-[80px]">
      <SectionLabel className="text-[#241623] mb-[24px]">
        02 - À propos
      </SectionLabel>

      <DisplayHeading className="mb-[40px]">
        <span className="text-[#241623]">Designer </span>
        <span className="text-[#9b2909]">UX/UI</span>
      </DisplayHeading>

      <div className="max-w-[600px]">
        <BodyText className="text-[#241623] mb-[20px]">
          Je suis designer UX/UI passionné par la création d'expériences
          utilisateur <BodyTextMedium>intuitives et engageantes</BodyTextMedium>.
        </BodyText>

        <BodyText className="text-[#241623]">
          Mon approche combine <BodyTextMedium>recherche utilisateur</BodyTextMedium>,
          <BodyTextMedium>design thinking</BodyTextMedium> et
          <BodyTextMedium>prototypage itératif</BodyTextMedium>.
        </BodyText>
      </div>

      <div className="mt-[40px] flex gap-[16px]">
        <Button onClick={() => console.log('Contact')}>Me contacter</Button>
        <Button disabled={true}>Bientôt disponible</Button>
      </div>
    </section>
  );
}
```

### 3. Grille de Projets

```tsx
function ProjectsGrid() {
  const projects = [
    {
      title: "Végétal Local",
      client: "Office Français de la Biodiversité",
      year: "2025-2026",
      category: "Refonte du site",
      image: "/vegetal-local.jpg",
      layout: "image-left"
    },
    {
      title: "E-commerce",
      client: "Decathlon",
      year: "2024",
      category: "UX/UI Design",
      image: "/ecommerce.jpg",
      layout: "image-right"
    }
  ];

  return (
    <section className="w-full py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[120px]">
        <SectionTitle
          label="03 - Projets"
          title="Réalisations récentes"
          highlightedWord="Réalisations"
        />

        <div className="mt-[60px] flex flex-col gap-[40px]">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              client={project.client}
              year={project.year}
              category={project.category}
              layout={project.layout}
              image={project.image}
              description={
                <ProjectDescription>
                  <span className="leading-[1.4]">Description du projet avec </span>
                  <ProjectHighlight>mots en emphase</ProjectHighlight>
                  <span className="leading-[1.4]">.</span>
                </ProjectDescription>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 4. Section Compétences

```tsx
function SkillsSection() {
  const skills = ["UX Research", "UI Design", "Prototypage", "Design System"];

  return (
    <section className="w-full max-w-[1200px] mx-auto py-[80px]">
      <SectionLabel className="text-[#241623] mb-[32px]">
        04 - Compétences
      </SectionLabel>

      <div className="flex flex-wrap gap-[16px]">
        {skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </section>
  );
}
```

### 5. Footer avec Contact

```tsx
function Footer() {
  return (
    <footer className="w-full bg-[#241623] text-white">
      <div className="max-w-[1200px] mx-auto px-[120px] py-[80px]">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-[24px]">
            <Logo />
            <BodyText className="text-white max-w-[400px]">
              Designer UX/UI basée à Paris, passionnée par la création
              d'expériences utilisateur exceptionnelles.
            </BodyText>
          </div>

          <div className="flex flex-col gap-[24px]">
            <SectionLabel className="text-white">Contact</SectionLabel>
            <div className="flex flex-col gap-[12px]">
              <CaptionText className="text-white">hello@mylene-b.com</CaptionText>
              <CaptionText className="text-white">+33 6 12 34 56 78</CaptionText>
            </div>
            <div className="flex gap-[16px] mt-[16px]">
              <Button variant="primary">LinkedIn</Button>
              <Button variant="primary">GitHub</Button>
            </div>
          </div>
        </div>

        <Divider className="my-[40px]" />

        <CaptionText className="text-white text-center">
          © 2026 Mylene.B - Tous droits réservés
        </CaptionText>
      </div>
    </footer>
  );
}
```

### 6. Hero Section

```tsx
function HeroSection() {
  return (
    <section className="w-full min-h-[600px] flex items-center justify-center"
      style={{ background: 'rgba(239, 233, 244, 0.85)' }}>
      <div className="max-w-[1200px] mx-auto px-[120px] py-[120px] text-center">
        <DisplayHeading className="mb-[32px]">
          <span className="text-[#241623]">Design </span>
          <span className="text-[#9b2909]">qui inspire</span>
        </DisplayHeading>

        <BodyText className="text-[#241623] text-[18px] max-w-[600px] mx-auto mb-[48px]">
          Je conçois des expériences numériques centrées sur l'utilisateur,
          alliant <BodyTextMedium>esthétique</BodyTextMedium> et
          <BodyTextMedium>fonctionnalité</BodyTextMedium>.
        </BodyText>

        <div className="flex gap-[16px] justify-center">
          <Button variant="secondary">Voir mes projets</Button>
          <Button variant="primary">Me contacter</Button>
        </div>
      </div>
    </section>
  );
}
```

### 7. Section Témoignages

```tsx
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Un travail exceptionnel sur notre refonte UX/UI",
      author: "Marie Dubois",
      role: "Product Manager, OFB"
    },
    {
      quote: "Professionnelle, créative et à l'écoute",
      author: "Thomas Martin",
      role: "CEO, StartupXYZ"
    }
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[120px]">
        <SectionLabel className="text-[#241623] mb-[40px]">
          05 - Témoignages
        </SectionLabel>

        <div className="grid grid-cols-2 gap-[40px]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-[8px] p-[32px]">
              <BodyText className="text-[#241623] mb-[24px] italic">
                "{testimonial.quote}"
              </BodyText>
              <Divider className="mb-[16px]" />
              <div>
                <BodyTextMedium className="text-[#241623] block">
                  {testimonial.author}
                </BodyTextMedium>
                <CaptionText className="text-[#717182]">
                  {testimonial.role}
                </CaptionText>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## 🎨 Personnalisation des Couleurs

### Utiliser les couleurs du design system

```tsx
// Texte
<BodyText className="text-[#241623]">Texte principal</BodyText>
<BodyText className="text-[#9b2909]">Texte accentué</BodyText>
<BodyText className="text-[#F4633A]">Texte secondaire</BodyText>

// Backgrounds
<div className="bg-[#241623]">Fond sombre</div>
<div className="bg-white">Fond clair</div>
<div style={{ background: 'rgba(239, 233, 244, 0.85)' }}>Fond accent</div>

// Bordures
<div className="border border-[#241623]">Bordure</div>
```

## 📐 Utiliser les Espacements

```tsx
// Padding
<div className="p-[8px]">XS padding</div>
<div className="p-[16px]">MD padding</div>
<div className="p-[24px]">XL padding</div>
<div className="p-[40px]">3XL padding</div>

// Gap
<div className="flex gap-[16px]">Gap MD</div>
<div className="flex gap-[24px]">Gap XL</div>
<div className="flex gap-[60px]">Gap personnalisé</div>

// Margin
<div className="mb-[24px]">Margin bottom XL</div>
<div className="mt-[80px]">Margin top personnalisé</div>
```

## 🔧 Composition de Composants

### Créer un composant personnalisé

```tsx
import { BodyText, BodyTextMedium, Tag, Button } from './components';

function ServiceCard({ title, description, tags, onContact }) {
  return (
    <div className="bg-white rounded-[8px] p-[32px] border border-[#241623]">
      <SectionHeading className="text-[#9b2909] mb-[16px]">
        {title}
      </SectionHeading>

      <BodyText className="text-[#241623] mb-[24px]">
        {description}
      </BodyText>

      <div className="flex flex-wrap gap-[12px] mb-[24px]">
        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </div>

      <Button variant="primary" onClick={onContact}>
        En savoir plus
      </Button>
    </div>
  );
}
```

## 💡 Conseils

1. **Cohérence** : Utilisez toujours les mêmes espacements (multiples de 8px)
2. **Hiérarchie** : Respectez l'ordre des titres (Display > Section > Body)
3. **Contraste** : Vérifiez l'accessibilité des couleurs
4. **Responsive** : Adaptez les espacements pour mobile
5. **Performance** : Optimisez les images avant utilisation

## 🎯 Template Complet

Voir `src/app/App.tsx` pour un exemple complet de page utilisant tous les composants du design system.
