import React from 'react';
import svgPaths from '../../imports/2APropos-1/svg-4g7c4mn8ub';
import imgProfile from '../../imports/mb.png';
import imgGmail from '../../imports/2APropos-1/2a095695f5d165fbee83fb2335d2fa132fd22c22.png';
import imgLinkedIn from '../../imports/2APropos-1/241f2dcb975d963920c8bc722c9d2306abe9dcd8.png';
import imgGitHub from '../../imports/2APropos-1/e71daad90f5ea5d526ae368820f7630c7be1bb1c.png';

// Composant Objects - SVG décoratif
function Objects() {
  return (
    <div className="absolute inset-[-8.34%_0_-22.95%_0]" data-name="OBJECTS">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 588 420.135">
        <g id="OBJECTS">
          <path d={svgPaths.p1c193570} fill="#241623" fillOpacity="0.05" />
          <path d={svgPaths.p3785da80} fill="#FFCB2D" fillOpacity="0.1" />
          <path d={svgPaths.p3ee48800} fill="#EFE9F4" />
          <path d={svgPaths.p1895ed00} fill="#FFCB2D" fillOpacity="0.1" />
          <path d={svgPaths.p2a1fe332} fill="#EFE9F4" />
          <g>
            <path d={svgPaths.p17ab8c00} fill="#F4633A" fillOpacity="0.1" />
            <path d={svgPaths.p1a305570} fill="#F5F5F5" />
          </g>
          <path d={svgPaths.p34b02480} fill="#F4633A" fillOpacity="0.1" />
          <path d={svgPaths.p6842180} fill="#FFCB2D" fillOpacity="0.1" />
          <path d={svgPaths.p8f5d880} fill="#FFCB2D" fillOpacity="0.1" />
          <path d={svgPaths.p37330f80} fill="#241623" fillOpacity="0.05" />
          <path d={svgPaths.p23e85100} fill="#FFCB2D" fillOpacity="0.1" />
        </g>
      </svg>
    </div>
  );
}

// Logo SVG
function LogoGroup() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[16px] w-[39.977px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.977 24.0001">
        <g>
          <path d={svgPaths.p167d6e80} fill="#241623" />
          <path d={svgPaths.p363d3100} fill="#241623" />
          <path d={svgPaths.p22665c80} fill="#F4633A" />
          <path d={svgPaths.p1a34f300} fill="#241623" />
        </g>
      </svg>
    </div>
  );
}

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className = '' }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`bg-[#241623] w-full px-6 sm:px-12 md:px-20 lg:px-[120px] py-12 lg:py-[120px] ${className}`}
      aria-labelledby="contact-title"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[24px] max-w-[1200px] mx-auto">
        {/* Colonne gauche - Titre */}
        <div className="flex-1 lg:w-[588px]">
          <div className="flex flex-col gap-6 lg:gap-[24px] pr-0 lg:pr-[32px] py-8 lg:py-[40px] text-white">
            {/* Label section */}
            <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
              03 - contact
            </p>

            {/* Titre principal */}
            <h2
              id="contact-title"
              className="font-['Satoshi',sans-serif] leading-[0.9] text-[40px] sm:text-[52px] lg:text-[64px] tracking-[1.92px] text-right"
              style={{ fontWeight: 500 }}
            >"Discutons de nos projets communs</h2>
          </div>
        </div>

        {/* Colonne droite - Carte de contact */}
        <div className="flex-1 lg:w-[588px]">
          <div className="bg-white relative rounded-[12px]">
            {/* Bordure orange */}
            <div
              aria-hidden="true"
              className="absolute border border-[#f4633a] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]"
            />

            {/* Contenu */}
            <div className="flex flex-col gap-8 lg:gap-[32px] px-6 sm:px-8 lg:px-[32px] py-8 lg:py-[40px] relative overflow-clip rounded-inherit">
              {/* Background SVG décoratif */}
              <Objects />

              {/* Contenu de la carte */}
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-[32px] items-start w-full relative z-10">
                {/* Photo */}
                <div className="h-[280px] md:h-[240px] w-full md:w-[200px] shrink-0 relative rounded-[12px] pointer-events-none">
                  <div aria-hidden="true" className="absolute inset-0 rounded-[12px]">
                    <img
                      alt="Mylène Bierski"
                      className="block object-cover object-top rounded-[12px] size-full"
                      src={imgProfile}
                    />
                    {/* Overlay sombre */}
                    <div className="absolute bg-[rgba(36,22,35,0.32)] inset-0 rounded-[12px]" />
                  </div>
                  {/* Bordure gradient léger */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-[12px] pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(244, 99, 58, 0.4) 0%, rgba(244, 99, 58, 0.2) 50%, rgba(244, 99, 58, 0) 100%)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      padding: '1px'
                    }}
                  />

                  {/* Logo sur la photo */}
                  <LogoGroup />
                </div>

                {/* Informations de contact */}
                <div className="flex flex-col gap-[10px] flex-1 min-w-0">
                  {/* Nom */}
                  <p className="font-['Satoshi',sans-serif] leading-normal text-[#9b2909] text-[16px] tracking-[0.48px] uppercase font-bold" style={{ fontWeight: 700 }}>
                    Mylène Bierski
                  </p>

                  {/* Localisation */}
                  <p className="font-['Satoshi',sans-serif] leading-[1.4] text-[#241623] text-[16px] tracking-[0.16px]" style={{ fontWeight: 400 }}>
                    Je suis basée dans le nord de la France
                  </p>

                  {/* Email */}
                  <a
                    href="mailto:mylenevandaele@gmail.com"
                    className="flex gap-[10px] items-start hover:opacity-80 transition-opacity"
                    aria-label="Envoyer un email à Mylène Bierski"
                  >
                    <div className="relative shrink-0 size-[24px]">
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                        src={imgGmail}
                      />
                    </div>
                    <p className="font-['Satoshi',sans-serif] leading-[1.4] text-[#241623] text-[16px] tracking-[0.16px]" style={{ fontWeight: 500 }}>
                      mylenevandaele@gmail.com
                    </p>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/myl%C3%A8ne-bierski-12a376150/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-[10px] items-start hover:opacity-80 transition-opacity"
                    aria-label="Visiter le profil LinkedIn de Mylène Bierski"
                  >
                    <div className="relative shrink-0 size-[24px]">
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                        src={imgLinkedIn}
                      />
                    </div>
                    <p className="capitalize font-['Urbanist',sans-serif] font-normal leading-[1.1] text-[#241623] text-[16px] tracking-[0.16px]" style={{ fontWeight: 400 }}>
                      LinkedIn
                    </p>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Gutsover"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-[10px] items-start hover:opacity-80 transition-opacity"
                    aria-label="Visiter le profil GitHub de Mylène Bierski"
                  >
                    <div className="relative shrink-0 size-[24px]">
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                        src={imgGitHub}
                      />
                    </div>
                    <p className="capitalize font-['Urbanist',sans-serif] font-normal leading-[1.1] text-[#241623] text-[16px] tracking-[0.16px]" style={{ fontWeight: 400 }}>
                      GitHub
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
