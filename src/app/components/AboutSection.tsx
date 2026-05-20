import React from 'react';
import { Button } from './Button';
import { Tag } from './Tag';

interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className = '' }: AboutSectionProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="a-propos"
      className={`bg-[#f1ecf5] w-full px-6 sm:px-12 md:px-20 lg:px-[120px] py-12 lg:py-[120px] ${className}`}
      aria-labelledby="about-title"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[24px] max-w-[1200px] mx-auto">
        {/* Colonne gauche - Texte principal */}
        <div className="flex-1 lg:w-[588px]">
          <div className="flex flex-col gap-6 lg:gap-[24px] pr-0 lg:pr-[32px] py-8 lg:py-[40px]">
            {/* Label section */}
            <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#241623] text-[16px] tracking-[0.48px] uppercase">
              01 - à propos
            </p>

            {/* Titre principal */}
            <h2
              id="about-title"
              className="font-['Satoshi',sans-serif] leading-[0.9] text-[#241623] text-[40px] sm:text-[52px] lg:text-[64px] tracking-[1.92px]"
              style={{ fontWeight: 500 }}
            >
              <span className="block">Passionnée par le</span>
              <span className="block text-[#9b2909]">design accessible</span>
            </h2>

            {/* Description */}
            <div className="font-['Satoshi',sans-serif] text-[#241623] text-[16px] tracking-[0.16px] space-y-[20px]" style={{ fontWeight: 400 }}>
              <p className="leading-[1.4]">
                Forte d'une{' '}
                <span className="font-medium" style={{ fontWeight: 500 }}>
                  expérience de 4 ans
                </span>{' '}
                en ESN dans le design UX/UI et un passé de développeuse front-end (Angular, 3 ans), je crée des interfaces qui allient{' '}
                <span className="font-medium" style={{ fontWeight: 500 }}>
                  esthétique, performance et accessibilité
                </span>
                . Ma double casquette design-développement me permet de concevoir des{' '}
                <span className="font-medium" style={{ fontWeight: 500 }}>
                  solutions élégantes, fonctionnelles{' '}
                </span>
                et
                <span className="font-medium" style={{ fontWeight: 500 }}>
                  {' '}
                  techniquement réalisables
                </span>
                .
              </p>
              <p className="leading-[1.4]">
                Mon atout différenciant : l'
                <span className="font-medium" style={{ fontWeight: 500 }}>
                  accessibilité numérique
                </span>{' '}
                au cœur de ma{' '}
                <span className="font-medium" style={{ fontWeight: 500 }}>
                  démarche centrée utilisateur final
                </span>
                . Spécialisée en{' '}
                <span className="font-medium" style={{ fontWeight: 500 }}>
                  RGAA
                </span>{' '}
                et{' '}
                <span className="font-medium" style={{ fontWeight: 500 }}>
                  conformité web
                </span>
                , j'anticipe les exigences réglementaires croissantes pour créer des{' '}
                <span className="font-medium" style={{ fontWeight: 500 }}>
                  expériences inclusives
                </span>{' '}
                dès la conception.
              </p>
            </div>

            {/* Bouton CTA */}
            <div className="flex mt-4 lg:mt-0">
              <Button
                onClick={scrollToContact}
                className="shadow-sm hover:shadow-md transition-shadow"
                aria-label="Me contacter - Accéder à la section contact"
              >
                Contactez moi
              </Button>
            </div>
          </div>
        </div>

        {/* Colonne droite - Carte compétences */}
        <div className="flex-1 lg:w-[588px]">
          <div className="bg-white rounded-[12px] px-6 sm:px-8 lg:px-[32px] py-8 lg:py-[40px] flex flex-col gap-8 lg:gap-[32px] h-full">
            {/* Compétences principales */}
            <div className="flex flex-col gap-4 lg:gap-[16px]">
              {/* Titre avec bullet point */}
              <div className="flex gap-[8px] items-center">
                <div className="bg-[#9b2909] size-[4px] shrink-0" />
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#241623] text-[16px] tracking-[0.48px] uppercase">
                  compétences
                </p>
              </div>

              {/* Tags compétences */}
              <div className="flex flex-wrap gap-[10px]">
                <Tag>UI/UX Design</Tag>
                <Tag>Design system</Tag>
                <Tag>Figma</Tag>
                <Tag>Prototypage</Tag>
                <Tag>Tests utilisateurs</Tag>
                <Tag>Ecoconception</Tag>
                <Tag>RGAA</Tag>
                <Tag>Accessibilité</Tag>
                <Tag>HTML/SCSS</Tag>
              </div>
            </div>

            {/* Compétences transverses */}
            <div className="flex flex-col gap-4 lg:gap-[16px]">
              {/* Titre avec bullet point */}
              <div className="flex gap-[8px] items-center">
                <div className="bg-[#9b2909] size-[4px] shrink-0" />
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#241623] text-[16px] tracking-[0.48px] uppercase">
                  compétences transverses
                </p>
              </div>

              {/* Tags compétences transverses */}
              <div className="flex flex-wrap gap-[10px]">
                <Tag>Sensibilité UX</Tag>
                <Tag>écoute active</Tag>
                <Tag>vision globale</Tag>
                <Tag>Autonomie</Tag>
                <Tag>Leadership</Tag>
                <Tag>Gestion de projet</Tag>
                <Tag>Brainstorm</Tag>
                <Tag>analyse/Anticipation</Tag>
                <Tag>Communication</Tag>
              </div>
            </div>

            {/* Statistiques */}
            <div className="relative flex gap-4 sm:gap-8 lg:gap-[60px] pt-8 lg:pt-[32px] mt-auto border-t border-[#f1ecf5]">
              {/* 50+ projets */}
              <div className="flex-1 flex flex-col gap-[8px] items-center text-center min-w-0">
                <p
                  className="font-['Satoshi',sans-serif] leading-[1.1] text-[#9b2909] text-[24px] sm:text-[32px] lg:text-[40px] tracking-[1.2px] uppercase"
                  style={{ fontWeight: 500 }}
                >15+</p>
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.2] text-[#241623] text-[12px] sm:text-[14px] lg:text-[16px] tracking-[0.24px] sm:tracking-[0.36px] lg:tracking-[0.48px] uppercase">projets réalisés</p>
              </div>

              {/* 4+ années */}
              <div className="flex-1 flex flex-col gap-[8px] items-center text-center min-w-0">
                <p
                  className="font-['Satoshi',sans-serif] leading-[1.1] text-[#9b2909] text-[24px] sm:text-[32px] lg:text-[40px] tracking-[1.2px] uppercase"
                  style={{ fontWeight: 500 }}
                >
                  4+
                </p>
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.2] text-[#241623] text-[12px] sm:text-[14px] lg:text-[16px] tracking-[0.24px] sm:tracking-[0.36px] lg:tracking-[0.48px] uppercase text-center break-words">
                  années d'expériences
                </p>
              </div>

              {/* ∞ itérations */}
              <div className="flex-1 flex flex-col gap-[8px] items-center text-center min-w-0">
                <p
                  className="font-['Satoshi',sans-serif] leading-[1.1] text-[#9b2909] text-[24px] sm:text-[32px] lg:text-[40px] tracking-[1.2px] uppercase"
                  style={{ fontWeight: 500 }}
                >
                  ∞
                </p>
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.2] text-[#241623] text-[12px] sm:text-[14px] lg:text-[16px] tracking-[0.24px] sm:tracking-[0.36px] lg:tracking-[0.48px] uppercase">
                  itérations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
