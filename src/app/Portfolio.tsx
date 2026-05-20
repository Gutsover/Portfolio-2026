import React from 'react';
import { Header, HeroSection, AboutSection, ProjectsSection, ContactSection } from './components';

export default function Portfolio() {
  return (
    <div className="bg-white relative w-full min-h-screen" lang="fr">
      {/* Navigation principale */}
      <Header />

      {/* Contenu principal */}
      <main id="main-content" role="main">
        {/* Section Hero / Accueil */}
        <HeroSection />

        {/* Section À propos */}
        <AboutSection />

        {/* Section Projets */}
        <ProjectsSection />

        {/* Section Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-[#241623] w-full px-6 sm:px-12 md:px-20 lg:px-[120px] py-6 border-t border-[rgba(255,255,255,0.1)]" role="contentinfo" lang="fr">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="font-['Satoshi',sans-serif] text-white text-[14px] leading-[1.6] tracking-[0.14px]" style={{ fontWeight: 400 }}>
            © 2026 Mylène Bierski<br />
            Conçu et développé avec soin — Accessibilité : conforme aux standards RGAA
          </p>
        </div>
      </footer>
    </div>
  );
}
