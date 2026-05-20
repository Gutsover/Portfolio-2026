import {
  Header,
  SectionTitle,
  ProjectCard,
  ProjectDescription,
  ProjectHighlight,
  DisplayHeading,
  SectionHeading,
  SectionLabel,
  BodyText,
  CaptionText,
  Button,
  Divider,
  Tag,
  Logo,
  LogoIcon
} from './components';

import Portfolio from './Portfolio';

export default function App() {
  // Pour le moment, afficher le Portfolio
  // Décommenter pour voir la démo du design system
  const showPortfolio = true;

  if (showPortfolio) {
    return <Portfolio />;
  }

  // Design System Demo
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="flex flex-col items-center gap-[120px] px-[120px] py-[80px]">
        {/* Design System Showcase */}
        <section className="w-full max-w-[1200px] flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[40px]">
            <h1 className="font-['Satoshi',sans-serif] font-bold text-[48px] text-[#241623]">
              Design System Portfolio
            </h1>
            <p className="font-['Satoshi',sans-serif] text-[18px] text-[#241623] max-w-[600px]">
              Système de design complet extrait de la frame Figma du portfolio, comprenant tous les composants, tokens et la charte graphique.
            </p>
          </div>

          {/* Colors Section */}
          <div className="flex flex-col gap-[24px]">
            <SectionLabel className="text-[#241623]">01 - Couleurs</SectionLabel>
            <div className="grid grid-cols-4 gap-[24px]">
              <div className="flex flex-col gap-[12px]">
                <div className="w-full h-[120px] bg-[#241623] rounded-[8px]"></div>
                <div className="flex flex-col gap-[4px]">
                  <BodyText className="text-[#241623]">Primary Dark</BodyText>
                  <CaptionText className="text-[#717182]">#241623</CaptionText>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="w-full h-[120px] bg-[#9b2909] rounded-[8px]"></div>
                <div className="flex flex-col gap-[4px]">
                  <BodyText className="text-[#241623]">Primary Red</BodyText>
                  <CaptionText className="text-[#717182]">#9b2909</CaptionText>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="w-full h-[120px] bg-[#F4633A] rounded-[8px]"></div>
                <div className="flex flex-col gap-[4px]">
                  <BodyText className="text-[#241623]">Secondary Orange</BodyText>
                  <CaptionText className="text-[#717182]">#F4633A</CaptionText>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="w-full h-[120px] bg-white border border-[#241623] rounded-[8px]"></div>
                <div className="flex flex-col gap-[4px]">
                  <BodyText className="text-[#241623]">Background</BodyText>
                  <CaptionText className="text-[#717182]">#FFFFFF</CaptionText>
                </div>
              </div>
            </div>
          </div>

          {/* Typography Section */}
          <div className="flex flex-col gap-[32px]">
            <SectionLabel className="text-[#241623]">02 - Typographie</SectionLabel>

            <div className="flex flex-col gap-[24px] border border-[#241623] rounded-[8px] p-[24px]">
              <div className="flex flex-col gap-[8px]">
                <CaptionText className="text-[#717182]">Display Heading - Satoshi Medium 64px</CaptionText>
                <DisplayHeading className="text-[#241623]">
                  <span className="text-[#9b2909]">Design</span> System
                </DisplayHeading>
              </div>

              <Divider />

              <div className="flex flex-col gap-[8px]">
                <CaptionText className="text-[#717182]">Section Heading - Urbanist Bold 48px</CaptionText>
                <SectionHeading className="text-[#9b2909]">Végétal Local</SectionHeading>
              </div>

              <Divider />

              <div className="flex flex-col gap-[8px]">
                <CaptionText className="text-[#717182]">Section Label - Urbanist Medium 16px</CaptionText>
                <SectionLabel className="text-[#241623]">03 - Composants</SectionLabel>
              </div>

              <Divider />

              <div className="flex flex-col gap-[8px]">
                <CaptionText className="text-[#717182]">Body Text - Satoshi Regular 16px</CaptionText>
                <BodyText className="text-[#241623]">
                  La refonte du site répond à une <ProjectHighlight>architecture de l'information peu lisible</ProjectHighlight> et une <ProjectHighlight>expérience utilisateur peu engageante</ProjectHighlight>.
                </BodyText>
              </div>

              <Divider />

              <div className="flex flex-col gap-[8px]">
                <CaptionText className="text-[#717182]">Caption Text - Urbanist Regular 16px</CaptionText>
                <CaptionText className="text-[#241623]">Office Français de la Biodiversité (OFB)</CaptionText>
              </div>
            </div>
          </div>

          {/* Components Section */}
          <div className="flex flex-col gap-[32px]">
            <SectionLabel className="text-[#241623]">03 - Composants de base</SectionLabel>

            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[16px]">
                <CaptionText className="text-[#717182]">Buttons - États</CaptionText>
                <div className="flex gap-[16px] items-center">
                  <div className="flex flex-col gap-[8px] items-center">
                    <Button>Me contacter</Button>
                    <CaptionText className="text-[#717182] text-[12px]">Défaut</CaptionText>
                  </div>
                  <div className="flex flex-col gap-[8px] items-center">
                    <Button className="bg-[#9b2909]" disabled={false}>Me contacter</Button>
                    <CaptionText className="text-[#717182] text-[12px]">Hover</CaptionText>
                  </div>
                  <div className="flex flex-col gap-[8px] items-center">
                    <Button disabled={true}>Me contacter</Button>
                    <CaptionText className="text-[#717182] text-[12px]">Désactivé</CaptionText>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[16px]">
                <CaptionText className="text-[#717182]">Tags</CaptionText>
                <div className="flex gap-[16px] flex-wrap">
                  <Tag>Build</Tag>
                  <Tag>Design</Tag>
                  <Tag>UX/UI</Tag>
                </div>
              </div>

              <div className="flex flex-col gap-[16px]">
                <CaptionText className="text-[#717182]">Dividers</CaptionText>
                <div className="w-[200px]">
                  <Divider />
                </div>
              </div>

              <div className="flex flex-col gap-[16px]">
                <CaptionText className="text-[#717182]">Logo Complet</CaptionText>
                <Logo />
              </div>

              <div className="flex flex-col gap-[16px]">
                <CaptionText className="text-[#717182]">Logo Icône (différentes tailles)</CaptionText>
                <div className="flex gap-[24px] items-end">
                  <LogoIcon size={16} />
                  <LogoIcon size={24} />
                  <LogoIcon size={32} />
                  <LogoIcon size={48} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Card Examples */}
        <section className="w-full flex flex-col items-center gap-[80px]">
          <SectionTitle
            label="04 - Composants complexes"
            title="Projets sélectionnés"
            highlightedWord="Projets"
          />

          <ProjectCard
            title="Végétal Local"
            client="Office Français de la Biodiversité (OFB)"
            year="2025-2026"
            category="Refonte du site"
            layout="image-left"
            image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80"
            imageAlt="Végétal Local Project"
            description={
              <>
                <ProjectDescription>
                  <span className="leading-[1.4]">La refonte du site Végétal local répond à une </span>
                  <ProjectHighlight>architecture de l'information peu lisible</ProjectHighlight>
                  <span className="leading-[1.4]">, une </span>
                  <ProjectHighlight>accessibilité limitée aux contenus clés</ProjectHighlight>
                  <span className="leading-[1.4]"> et une </span>
                  <ProjectHighlight>expérience utilisateur peu engageante</ProjectHighlight>
                  <span className="leading-[1.4]">, malgré un contenu riche et un fort enjeu environnemental. Le site existant ne permettait pas une compréhension immédiate du </span>
                  <ProjectHighlight>message de la marque</ProjectHighlight>
                  <span className="leading-[1.4]"> ni une navigation adaptée aux </span>
                  <ProjectHighlight>différents publics</ProjectHighlight>
                  <span className="leading-[1.4]">.</span>
                </ProjectDescription>
                <ProjectDescription>
                  <span className="leading-[1.4]">L'objectif du projet a été de </span>
                  <ProjectHighlight>clarifier l'identité</ProjectHighlight>
                  <span className="leading-[1.4]"> </span>
                  <ProjectHighlight>et la proposition de valeur</ProjectHighlight>
                  <span className="leading-[1.4]">, de </span>
                  <ProjectHighlight>structurer les parcours utilisateurs</ProjectHighlight>
                  <span className="leading-[1.4]"> et de </span>
                  <ProjectHighlight>renforcer l'engagement</ProjectHighlight>
                  <span className="leading-[1.4]"> autour des actions du label. Le site devait devenir une plateforme de référence, à la fois pédagogique, crédible et orientée vers l'action, tout en améliorant la </span>
                  <ProjectHighlight>performance</ProjectHighlight>
                  <span className="leading-[1.4]"> et le </span>
                  <ProjectHighlight>SEO</ProjectHighlight>
                  <span className="leading-[1.4]">.</span>
                </ProjectDescription>
                <ProjectDescription>
                  <span className="leading-[1.4]">La solution proposée repose sur une </span>
                  <ProjectHighlight>refonte UX/UI globale</ProjectHighlight>
                  <span className="leading-[1.4]"> : réorganisation de l'architecture, hiérarchisation des contenus, parcours différenciés selon les usages et </span>
                  <ProjectHighlight>identité visuelle sobre et organique</ProjectHighlight>
                  <span className="leading-[1.4]">, inspirée du vivant et des territoires. Le design met en avant les messages clés, les chiffres d'impact et des CTA clairs, afin d'offrir une </span>
                  <ProjectHighlight>expérience fluide, accessible et engageante</ProjectHighlight>
                  <span className="leading-[1.4]">, au service de la biodiversité.</span>
                </ProjectDescription>
              </>
            }
          />

          <ProjectCard
            title="Portfolio Design"
            client="Services publiques"
            year="2022-2026"
            category="UX/UI Design"
            layout="image-right"
            image="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80"
            imageAlt="Portfolio Design Project"
            description={
              <>
                <ProjectDescription>
                  <span className="leading-[1.4]">Création d'un </span>
                  <ProjectHighlight>design system complet</ProjectHighlight>
                  <span className="leading-[1.4]"> pour un portfolio one-page moderne et élégant.</span>
                </ProjectDescription>
                <ProjectDescription>
                  <span className="leading-[1.4]">Le système inclut </span>
                  <ProjectHighlight>tokens de design</ProjectHighlight>
                  <span className="leading-[1.4]">, </span>
                  <ProjectHighlight>composants réutilisables</ProjectHighlight>
                  <span className="leading-[1.4]"> et une </span>
                  <ProjectHighlight>charte graphique cohérente</ProjectHighlight>
                  <span className="leading-[1.4]">.</span>
                </ProjectDescription>
              </>
            }
          />
        </section>

        {/* Spacing System */}
        <section className="w-full max-w-[1200px] flex flex-col gap-[32px]">
          <SectionLabel className="text-[#241623]">05 - Espacements</SectionLabel>
          <div className="flex flex-col gap-[16px]">
            {[
              { name: 'XS', value: '8px' },
              { name: 'SM', value: '10px' },
              { name: 'MD', value: '16px' },
              { name: 'LG', value: '20px' },
              { name: 'XL', value: '24px' },
              { name: '2XL', value: '32px' },
              { name: '3XL', value: '40px' },
              { name: '4XL', value: '120px' }
            ].map((spacing) => (
              <div key={spacing.name} className="flex items-center gap-[24px]">
                <CaptionText className="text-[#241623] w-[60px]">{spacing.name}</CaptionText>
                <div className="h-[24px] bg-[#9b2909] rounded-[4px]" style={{ width: spacing.value }}></div>
                <CaptionText className="text-[#717182]">{spacing.value}</CaptionText>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full bg-[#241623] text-white py-[40px] px-[120px] flex justify-center">
        <BodyText className="text-white">Design System - Tous les composants extraits de la frame Figma</BodyText>
      </footer>
    </div>
  );
}