import React from 'react';
import { Button } from './Button';

// Import des images PNG - chemins relatifs comme dans le fichier Figma original
import imgMacBookAir2022 from '../../imports/3Projets/54e3bf192483b07e27b72f9c3280bfeee20b8f74.png';
import imgFreeIPhoneAir from '../../imports/3Projets/b963fa6e37a6d6837e07e9d5b330382caab56caf.png';
import imgIMac24Inch1 from '../../imports/3Projets/a0ff8be1a6f321b9e915f5d3f6426b8cfc2a23e6.png';
import imgColbert1 from '../../imports/3Projets/e686da89743a0360ef1d00d6446f5f739da1a450.png';

// Import des images VCC depuis Frame90
import img1Accueil1 from '../../imports/Frame90/46862a5a23b936f753be0064b1502fb54a331518.png';
import imgIPhone15Pro from '../../imports/Frame90/115fa4d0df50aff65a90efd275a679d2591f6221.png';
import { img1Accueil } from '../../imports/Frame90/svg-4650h';

// Import des masques SVG
import { imgIMac24Inch } from '../../imports/3Projets/svg-uyce4';

interface ProjectCardProps {
  title: string;
  client: string;
  year: string;
  category: string;
  description: React.ReactNode;
  image: string;
  imageAlt?: string;
  layout?: 'image-left' | 'image-right';
  imageVariant?: 'simple' | 'double' | 'imac';
  secondaryImage?: string;
  maskSVG?: string;
  projectUrl?: string;
  buttonText?: string;
  extraBadge?: string;
  extraBadges?: string[];
  buttonDisabled?: boolean;
}

function ProjectCardInternal({
  title,
  client,
  year,
  category,
  description,
  image,
  imageAlt = '',
  layout = 'image-left',
  imageVariant = 'simple',
  secondaryImage,
  maskSVG,
  projectUrl,
  buttonText = 'Voir le projet',
  extraBadge,
  extraBadges,
  buttonDisabled = false
}: ProjectCardProps) {
  const imageSection = imageVariant === 'double' && secondaryImage ? (
    // Variant VCC avec 2 images superposées avec masque
    <div className="h-[350px] lg:h-[520px] w-full lg:w-[540px] relative shrink-0 overflow-hidden">
      <div className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] place-items-start relative shrink-0">
        {/* Image desktop avec shadow et masque */}
        <div
          className="col-1 h-[569.176px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[540px_534px] ml-0 mt-0 relative row-1 shadow-[0px_4px_32px_0px_rgba(36,22,35,0.15)] w-[508.568px]"
          style={{ maskImage: `url('${img1Accueil}')` }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt={imageAlt}
              className="absolute h-[76.99%] left-[0.09%] max-w-none top-[0.04%] w-[100.09%]"
              src={image}
            />
          </div>
        </div>
        {/* Image mobile superposée avec masque */}
        <div
          className="col-1 h-[377.086px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-49px_-198.686px] mask-size-[540px_534px] ml-[49px] mt-[198.69px] relative row-1 w-[612px]"
          style={{ maskImage: `url('${img1Accueil}')` }}
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={secondaryImage}
          />
        </div>
      </div>
    </div>
  ) : imageVariant === 'imac' ? (
    // Variant BNPE avec masque iMac
    <div className="h-[350px] lg:h-[520px] w-full lg:w-[540px] relative shrink-0">
      <img
        alt={imageAlt}
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-[12px]"
        src={image}
      />
    </div>
  ) : (
    // Variant simple
    <div className="h-[350px] lg:h-[520px] w-full lg:w-[540px] relative rounded-[12px] shrink-0">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
      />
    </div>
  );

  const descriptionSection = (
    <div className="flex flex-col gap-[16px] flex-1 min-w-0">
      {/* Titre */}
      <h3 id={`project-title-${title.toLowerCase().replace(/\s/g, '-')}`} className="font-['Urbanist',sans-serif] font-bold leading-[1.1] text-[#9b2909] text-[32px] lg:text-[48px] tracking-[0.48px]" style={{ fontWeight: 700 }}>
        {title}
      </h3>

      {/* Badges : catégorie, client, année, extra */}
      <div className="flex flex-wrap gap-[10px] items-start w-full">
        {/* Badge catégorie */}
        <div className="flex items-center justify-center px-[24px] py-[8px] rounded-[8px] border border-[#f4633a]">
          <p className="capitalize font-['Urbanist',sans-serif] font-normal leading-[1.1] text-[#241623] text-[14px] lg:text-[16px] tracking-[0.16px] whitespace-nowrap">
            {category}
          </p>
        </div>
        {/* Badge client */}
        <div className="flex items-center justify-center px-[24px] py-[8px] rounded-[8px] border border-[#f4633a]">
          <p className="capitalize font-['Urbanist',sans-serif] font-normal leading-[1.1] text-[#241623] text-[14px] lg:text-[16px] tracking-[0.16px] whitespace-nowrap">
            {client}
          </p>
        </div>
        {/* Badges extra multiples optionnels */}
        {extraBadges && extraBadges.map((badge, index) => (
          <div key={index} className="flex items-center justify-center px-[24px] py-[8px] rounded-[8px] border border-[#f4633a]">
            <p className="capitalize font-['Urbanist',sans-serif] font-normal leading-[1.1] text-[#241623] text-[14px] lg:text-[16px] tracking-[0.16px] whitespace-nowrap">
              {badge}
            </p>
          </div>
        ))}
        {/* Badge année */}
        <div className="flex items-center justify-center px-[24px] py-[8px] rounded-[8px] border border-[#f4633a]">
          <p className="capitalize font-['Urbanist',sans-serif] font-normal leading-[1.1] text-[#241623] text-[14px] lg:text-[16px] tracking-[0.16px] whitespace-nowrap">
            {year}
          </p>
        </div>
        {/* Badge extra optionnel (rétrocompatibilité) */}
        {extraBadge && (
          <div className="flex items-center justify-center px-[24px] py-[8px] rounded-[8px] border border-[#f4633a]">
            <p className="capitalize font-['Urbanist',sans-serif] font-normal leading-[1.1] text-[#241623] text-[14px] lg:text-[16px] tracking-[0.16px] whitespace-nowrap">
              {extraBadge}
            </p>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="font-['Satoshi',sans-serif] text-[#241623] text-[14px] lg:text-[16px] tracking-[0.16px] w-full lg:w-[540px]" style={{ fontWeight: 400 }}>
        {description}
      </div>

      {/* Bouton */}
      <div className="pt-[20px] flex">
        {projectUrl && !buttonDisabled ? (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${buttonText} - ${title} (ouvre dans un nouvel onglet)`}
          >
            <Button>{buttonText}</Button>
          </a>
        ) : (
          <Button disabled={buttonDisabled} aria-label={`${buttonText} - ${title}`}>{buttonText}</Button>
        )}
      </div>
    </div>
  );

  // Gradient de bordure selon le layout
  const borderGradient = layout === 'image-left'
    ? 'linear-gradient(135deg, #f4633a 0%, rgba(244, 99, 58, 0.3) 50%, rgba(244, 99, 58, 0) 100%)'
    : 'linear-gradient(225deg, #f4633a 0%, rgba(244, 99, 58, 0.3) 50%, rgba(244, 99, 58, 0) 100%)';

  return (
    <article className="bg-[rgba(239,233,244,0.45)] relative rounded-[12px] w-full" aria-labelledby={`project-title-${title.toLowerCase().replace(/\s/g, '-')}`}>
      <div className="flex items-center overflow-clip rounded-inherit size-full">
        <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[40px] items-center p-[24px] lg:p-[40px] relative size-full">
          {/* Mobile: toujours image en premier, Desktop: selon layout */}
          <div className="lg:hidden w-full">
            {imageSection}
          </div>

          {/* Desktop: selon layout prop */}
          {layout === 'image-left' ? (
            <>
              <div className="hidden lg:block">
                {imageSection}
              </div>
              {descriptionSection}
            </>
          ) : (
            <>
              {descriptionSection}
              <div className="hidden lg:block">
                {imageSection}
              </div>
            </>
          )}
        </div>
      </div>
      {/* Bordure avec gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-[-0.5px] pointer-events-none rounded-[12.5px]"
        style={{
          background: borderGradient,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px'
        }}
      />
    </article>
  );
}

interface ProjectsSectionProps {
  className?: string;
}

export function ProjectsSection({ className = '' }: ProjectsSectionProps) {
  return (
    <section
      id="projets"
      className={`bg-white w-full px-6 sm:px-12 md:px-20 lg:px-[120px] py-12 lg:py-[120px] ${className}`}
      aria-labelledby="projects-title"
    >
      <div className="flex flex-col gap-12 lg:gap-[60px] max-w-[1200px] mx-auto">
        {/* En-tête de section */}
        <div className="flex flex-col gap-6 lg:gap-[24px]">
          <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#241623] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
            02 - projets
          </p>

          <div className="flex gap-6 lg:gap-[24px] items-center w-full">
            <h2
              id="projects-title"
              className="font-['Satoshi',sans-serif] leading-[0.9] text-[40px] sm:text-[52px] lg:text-[64px] tracking-[1.92px]"
              style={{ fontWeight: 500 }}
            >
              <span className="text-[#9b2909]">Projets</span> sélectionnés
            </h2>
          </div>
        </div>

        {/* Projet 1: PanTher */}
        <ProjectCardInternal
          title="PanTher"
          client="eaufrance"
          year="2026 -en cours de réalisation"
          category="Build"
          layout="image-left"
          image={imgMacBookAir2022}
          imageAlt="Projet PanTher - Eaufrance"
          buttonDisabled={true}
          description={
            <>
              {/* Contexte */}
              <div className="flex flex-col gap-[8px] mb-[16px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Contexte
                </p>
                <p className="leading-[1.4]">
                  Dans un contexte de changement climatique et d'augmentation des épisodes de sécheresse, la surveillance de la température des eaux de surface constitue un enjeu majeur pour la gestion des ressources en eau et la préservation de la biodiversité.
                  <br />
                  Office français de la biodiversité a été désigné pour piloter la création d'un outil national de centralisation et d'exploitation des données de température collectées par de nombreux acteurs publics et privés du territoire.
                </p>
              </div>

              {/* Mon rôle */}
              <div className="flex flex-col gap-[8px] mb-[16px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Mon rôle
                </p>
                <p className="leading-[1.4]">
                  Conception UX/UI d'une plateforme de bancarisation et de consultation de données environnementales, en collaboration étroite avec les équipes métiers et les parties prenantes institutionnelles.
                  <br />
                  Travail sur la structuration de l'information, la simplification des parcours utilisateurs et la conception d'interfaces facilitant l'accès, la lecture et l'exploitation de données complexes.
                  <br />
                  Prise en compte des enjeux d'accessibilité, de lisibilité et des besoins spécifiques liés aux outils métiers et scientifiques.
                </p>
              </div>

              {/* Impact */}
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Impact
                </p>
                <p className="leading-[1.4]">
                  Une vision claire et centralisée des données de température des eaux de surface, facilitant leur exploitation par les acteurs publics et les organismes partenaires.
                  <br />
                  Une interface pensée pour améliorer l'accessibilité des données environnementales et accompagner les enjeux d'adaptation liés au changement climatique.
                </p>
              </div>
            </>
          }
        />

        {/* Projet 2: Végétal Local */}
        <ProjectCardInternal
          title="Végétal Local"
          client="MVL"
          year="2025-2026"
          category="Refonte graphique"
          layout="image-right"
          image={imgFreeIPhoneAir}
          imageAlt="Projet Végétal Local - MVL"
          projectUrl="https://www.vegetal-local.fr/"
          buttonText="en cours de développement - voir l'ancien site"
          description={
            <>
              {/* Contexte */}
              <div className="flex flex-col gap-[8px] mb-[16px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Contexte
                </p>
                <p className="leading-[1.4]">
                  Le site Végétal local, porté par Office français de la biodiversité, présentait une architecture de l'information peu lisible, un accès limité aux contenus clés et une expérience utilisateur peu engageante malgré la richesse de son contenu et ses enjeux environnementaux.
                  <br />
                  Le site existant ne permettait pas de transmettre clairement le message du label ni d'accompagner efficacement les différents publics dans leur navigation.
                </p>
              </div>

              {/* Mon rôle */}
              <div className="flex flex-col gap-[8px] mb-[16px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Mon rôle
                </p>
                <p className="leading-[1.4]">
                  Conception de la refonte UX/UI globale du site, en collaboration étroite avec le client et les équipes projet Drupal.
                  <br />
                  Travail sur la restructuration de l'architecture de l'information, la hiérarchisation des contenus et la définition de parcours utilisateurs adaptés aux différents profils.
                  <br />
                  Refonte de l'identité visuelle digitale pour mieux valoriser les messages clés, les données d'impact et les appels à l'action.
                </p>
              </div>

              {/* Impact */}
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Impact
                </p>
                <p className="leading-[1.4]">
                  Une plateforme plus claire, pédagogique et engageante, facilitant l'accès à l'information et la compréhension de la proposition de valeur du label.
                  <br />
                  Une expérience plus fluide et accessible, renforçant l'engagement des utilisateurs tout en améliorant la visibilité et la performance SEO.
                </p>
              </div>
            </>
          }
        />

        {/* Projet 3: BNPE */}
        <ProjectCardInternal
          title="BNPE"
          client="Office français de la biodiversité (OFB)"
          year="2024"
          category="Refonte graphique"
          layout="image-left"
          imageVariant="simple"
          image={imgIMac24Inch1}
          imageAlt="Projet BNPE - OFB"
          projectUrl="https://bnpe.eaufrance.fr/"
          description={
            <>
              {/* Contexte */}
              <div className="flex flex-col gap-[8px] mb-[16px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Contexte
                </p>
                <p className="leading-[1.4]">
                  La refonte de la BNPE (Banque Nationale des Prélèvements en Eau), portée par Office français de la biodiversité, répond à une interface vieillissante, dense et complexe, rendant la lecture des données difficile et l'expérience peu accessible pour des publics variés.
                  <br />
                  L'objectif était de moderniser l'outil, clarifier l'information et renforcer son rôle de plateforme de référence dans la gestion durable des ressources en eau.
                </p>
              </div>

              {/* Mon rôle */}
              <div className="flex flex-col gap-[8px] mb-[16px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Mon rôle
                </p>
                <p className="leading-[1.4]">
                  Conception de la refonte UX/UI globale de la plateforme, en collaboration étroite avec le client et les équipes techniques.
                  <br />
                  Animation des échanges de cadrage, compréhension des enjeux métiers et traduction des besoins en solutions concrètes : restructuration de l'architecture de l'information, hiérarchisation des contenus, simplification des parcours utilisateurs et modernisation de l'interface.
                </p>
              </div>

              {/* Impact */}
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Impact
                </p>
                <p className="leading-[1.4]">
                  Une plateforme plus claire, plus lisible et plus accessible, facilitant l'analyse des données et l'usage quotidien par différents profils utilisateurs.
                  <br />
                  Une expérience modernisée, plus efficace et alignée avec les enjeux institutionnels et opérationnels.
                </p>
              </div>
            </>
          }
        />

        {/* Projet 4: VCC */}
        <ProjectCardInternal
          title="VCC"
          client="Decathlon"
          year="2024"
          category="BUILD"
          layout="image-right"
          imageVariant="double"
          image={img1Accueil1}
          secondaryImage={imgIPhone15Pro}
          imageAlt="Projet VCC - Decathlon"
          extraBadge="Concept produit non développé"
          buttonDisabled={true}
          description={
            <>
              {/* Contexte */}
              <div className="flex flex-col gap-[8px] mb-[16px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Contexte
                </p>
                <p className="leading-[1.4]">
                  Le projet VCC (Visites de Centres de Conception), imaginé pour Decathlon, visait la création d'une plateforme de réservation permettant au grand public de planifier des visites guidées des sites de production à travers la France.
                  <br />
                  Le produit n'existait pas et nécessitait la conception complète d'un parcours de service, à destination du public comme des équipes internes.
                </p>
              </div>

              {/* Mon rôle */}
              <div className="flex flex-col gap-[8px] mb-[16px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Mon rôle
                </p>
                <p className="leading-[1.4]">
                  Conception UX/UI complète du produit, de la définition des parcours utilisateurs à la création des interfaces, en collaboration étroite avec le client.
                  <br />
                  Structuration du parcours de réservation, conception des espaces de gestion internes et du tableau de bord de suivi d'activité.
                  <br />
                  Organisation et animation de tests utilisateurs sur différents parcours clés afin de valider les usages, identifier les points de friction et ajuster les interfaces avant livraison.
                </p>
              </div>

              {/* Impact */}
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Impact
                </p>
                <p className="leading-[1.4]">
                  Livraison d'un prototype fonctionnel et d'une vision produit complète, permettant de cadrer le futur développement de la plateforme.
                  <br />
                  Le projet n'a finalement pas été mis en production pour des raisons budgétaires.
                </p>
              </div>
            </>
          }
        />

        {/* Projet 5: Services publics */}
        <ProjectCardInternal
          title="Services publics"
          client="Ministère de l'intérieur"
          year="2023-aujourd'hui"
          category="BUILD"
          extraBadges={[
            "Ministère de la transition écologique",
            "Ministère de l'agriculture (Luxembourg)"
          ]}
          layout="image-left"
          image={imgColbert1}
          imageAlt="Projets Services publics"
          buttonText="indisponible au grand public"
          buttonDisabled={true}
          description={
            <>
              {/* Contexte */}
              <div className="flex flex-col gap-[8px] mb-[16px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Contexte
                </p>
                <p className="leading-[1.4]">
                  Conception d'outils internes pour des services de l'État, dans le cadre de projets soumis à des contraintes de confidentialité, notamment pour Ministère de l'Intérieur et Ministère de la Transition écologique.
                  <br />
                  Ces plateformes répondent à des enjeux d'efficacité opérationnelle, de lisibilité des parcours et d'accessibilité pour des usages métiers spécifiques.
                </p>
              </div>

              {/* Mon rôle */}
              <div className="flex flex-col gap-[8px] mb-[16px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Mon rôle
                </p>
                <p className="leading-[1.4]">
                  Conception UX/UI de plusieurs interfaces métiers en collaboration avec les équipes projet et les parties prenantes.
                  <br />
                  Structuration des parcours utilisateurs, conception des interfaces et adaptation aux standards du Design Système de l'État afin d'assurer cohérence, simplicité d'usage et conformité.
                </p>
              </div>

              {/* Impact */}
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Urbanist',sans-serif] font-medium leading-[1.1] text-[#9b2909] text-[16px] tracking-[0.48px] uppercase" style={{ fontWeight: 500 }}>
                  Impact
                </p>
                <p className="leading-[1.4]">
                  Des outils internes clairs, accessibles et cohérents, pensés pour améliorer l'efficacité des utilisateurs au quotidien.
                  <br />
                  Une conception alignée avec les exigences Direction interministérielle du numérique (DINUM) et les standards du RGAA pour garantir une conformité d'accessibilité numérique optimale.
                </p>
              </div>
            </>
          }
        />
      </div>
    </section>
  );
}
