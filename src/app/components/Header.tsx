import React, { useState } from 'react';
import { Logo } from './Logo';
import { CaptionText } from './Typography';

interface HeaderProps {
  className?: string;
}

export function Header({ className = '' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false); // Fermer le menu après navigation
    }
  };

  return (
    <>
      <header
        className={`bg-white flex items-end justify-between px-6 sm:px-12 md:px-20 lg:px-[120px] py-[16px] h-[54px] sticky top-0 w-full z-50 ${className}`}
        style={{
          boxShadow: '0px 225px 31.5px rgba(0,0,0,0), 0px 144px 29px rgba(0,0,0,0.01), 0px 81px 24.5px rgba(0,0,0,0.05), 0px 36px 18px rgba(0,0,0,0.09), 0px 9px 10px rgba(0,0,0,0.1)'
        }}
        role="banner"
      >
        {/* Logo avec lien vers l'accueil */}
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('accueil');
          }}
          aria-label="Retour à l'accueil - Mylene.B"
          className="focus:outline-none focus:ring-2 focus:ring-[#F4633A] focus:ring-offset-2 rounded-sm"
        >
          <Logo />
        </a>

        {/* Navigation desktop */}
        <nav
          className="hidden md:flex items-center justify-between w-[282px]"
          role="navigation"
          aria-label="Navigation principale"
        >
          <a
            href="#a-propos"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('a-propos');
            }}
            className="focus:outline-none focus:ring-2 focus:ring-[#F4633A] focus:ring-offset-2 rounded-sm transition-colors hover:text-[#9b2909]"
            aria-label="Aller à la section À propos"
          >
            <CaptionText className="text-[#241623] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#F4633A] after:transition-all after:duration-300 hover:after:w-full">à propos</CaptionText>
          </a>
          <a
            href="#projets"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projets');
            }}
            className="focus:outline-none focus:ring-2 focus:ring-[#F4633A] focus:ring-offset-2 rounded-sm transition-colors hover:text-[#9b2909]"
            aria-label="Aller à la section Projets"
          >
            <CaptionText className="text-[#241623] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#F4633A] after:transition-all after:duration-300 hover:after:w-full">Projets</CaptionText>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="focus:outline-none focus:ring-2 focus:ring-[#F4633A] focus:ring-offset-2 rounded-sm transition-colors hover:text-[#9b2909]"
            aria-label="Aller à la section Contact"
          >
            <CaptionText className="text-[#241623] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#F4633A] after:transition-all after:duration-300 hover:after:w-full">Contact</CaptionText>
          </a>
        </nav>

        {/* Bouton burger mobile */}
        <button
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-[#F4633A] rounded-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#241623]"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </header>

      {/* Menu mobile déroulant */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white border-b border-[#f1ecf5] sticky top-[54px] w-full z-40 shadow-md"
          role="navigation"
          aria-label="Navigation mobile"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            <a
              href="#a-propos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('a-propos');
              }}
              className="py-2 focus:outline-none focus:ring-2 focus:ring-[#F4633A] focus:ring-offset-2 rounded-sm"
              aria-label="Aller à la section À propos"
            >
              <CaptionText className="text-[#241623]">à propos</CaptionText>
            </a>
            <a
              href="#projets"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projets');
              }}
              className="py-2 focus:outline-none focus:ring-2 focus:ring-[#F4633A] focus:ring-offset-2 rounded-sm"
              aria-label="Aller à la section Projets"
            >
              <CaptionText className="text-[#241623]">Projets</CaptionText>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="py-2 focus:outline-none focus:ring-2 focus:ring-[#F4633A] focus:ring-offset-2 rounded-sm"
              aria-label="Aller à la section Contact"
            >
              <CaptionText className="text-[#241623]">Contact</CaptionText>
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
