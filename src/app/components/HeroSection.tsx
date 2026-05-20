import React from 'react';
import { Button } from './Button';
import Objects from '../../imports/Objects/Objects';

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className = '' }: HeroSectionProps) {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projets');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="accueil"
      className={`relative bg-[rgba(239,233,244,0.85)] min-h-[700px] lg:h-[1024px] w-full overflow-hidden ${className}`}
      aria-labelledby="hero-main-title"
    >
      {/* Objets décoratifs en arrière-plan - SVG complet de Figma (desktop uniquement) */}
      <div className="hidden lg:block absolute inset-[2.25%_0_-2.72%_0] pointer-events-none" aria-hidden="true">
        <Objects />
      </div>

      {/* Contenu principal */}
      <div className="absolute left-6 sm:left-12 md:left-20 lg:left-[120px] top-[200px] sm:top-[220px] lg:top-[275px] w-[calc(100%-48px)] sm:w-[calc(100%-96px)] lg:w-[486px]">
        <div className="flex flex-col gap-8 lg:gap-[40px] relative">
          {/* Sous-titre */}
          <h2
            className="font-['Urbanist',sans-serif] font-bold leading-[1.1] text-[#241623] text-[32px] sm:text-[40px] lg:text-[48px] tracking-[0.48px]"
            style={{ fontWeight: 700 }}
          >
            De<span className="inline-block w-[8px]" />signer web
          </h2>

          {/* Titre principal H1 - MYLENE BIERSKI */}
          <div className="flex flex-col gap-6 lg:gap-[32px] w-full">
            <h1
              id="hero-main-title"
              className="font-['Satoshi',sans-serif] leading-[1.1] text-[60px] sm:text-[90px] lg:text-[120px] tracking-[3.6px] uppercase"
              style={{ fontWeight: 500 }}
            >
              <span className="block text-[#241623] mb-0">mylene</span>
              <span className="block text-[#9b2909]">bierski</span>
            </h1>
          </div>

          {/* "e" rouge en rotation - positionné absolument */}
          <div
            className="absolute flex h-[32px] lg:h-[48.1px] items-center justify-center left-[14px] sm:left-[18px] lg:left-[28px] top-[2px] lg:top-[5px] w-[32px] lg:w-[48.915px]"
            aria-hidden="true"
          >
            <div className="flex-none rotate-[-13.22deg]">
              <div className="bg-[#9b2909] flex flex-col h-[26px] lg:h-[39.801px] items-center justify-center rounded-[6px] lg:rounded-[8px] w-[27px] lg:w-[40.895px]">
                <p
                  className="font-['Urbanist',sans-serif] font-bold leading-[1.1] text-[32px] lg:text-[48px] text-center text-white tracking-[0.32px] lg:tracking-[0.48px]"
                  style={{ fontWeight: 700 }}
                >
                  e
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p
            className="font-['Satoshi',sans-serif] leading-[1.4] text-[#241623] text-[14px] sm:text-[16px] tracking-[0.16px] max-w-full"
            style={{ fontWeight: 400 }}
          >
            Créatrice d'expériences digitales inclusives qui captivent et convertissent. Design minimaliste, impact maximal
          </p>

          {/* Call to action */}
          <div className="flex">
            <Button
              onClick={scrollToProjects}
              className="shadow-sm hover:shadow-md transition-shadow"
              aria-label="Découvrir mes projets - Accéder à la section projets"
            >
              Mes projets
            </Button>
          </div>
        </div>
      </div>

      {/* Lien d'évitement pour l'accessibilité */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#241623] focus:text-white focus:rounded-md"
      >
        Aller au contenu principal
      </a>
    </section>
  );
}
