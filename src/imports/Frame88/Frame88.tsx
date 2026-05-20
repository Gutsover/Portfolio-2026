import imgAccueil2 from "./8b8b61b4936a59bb8f7fafeccf975e00fab2fbe4.png";
import { imgAccueil1 } from "./svg-n4pwj";

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 h-[616px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[540px_775px] ml-0 mt-0 relative row-1 w-[538px]" style={{ maskImage: `url('${imgAccueil1}')` }} data-name="Accueil 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAccueil2} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[32px]">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
            <line id="Line 14" stroke="var(--stroke-0, #241623)" x2="32" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0">
      <p className="capitalize font-['Urbanist:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#241623] text-[16px] tracking-[0.16px] whitespace-nowrap">Office Français de la Biodiversité (OFB)</p>
      <div className="flex flex-row items-end self-stretch">
        <Frame2 />
      </div>
      <p className="capitalize font-['Urbanist:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#241623] text-[16px] tracking-[0.16px] whitespace-nowrap">2024</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#9b2909] text-[16px] tracking-[0.48px] uppercase whitespace-nowrap">
        <p className="leading-[1.1]">Contexte</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame4 />
      <div className="flex flex-col font-['Satoshi:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#241623] text-[16px] tracking-[0.16px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">
          La refonte de la BNPE (Banque Nationale des Prélèvements en Eau), portée par Office français de la biodiversité, répond à une interface vieillissante, dense et complexe, rendant la lecture des données difficile et l’expérience peu accessible pour des publics variés.
          <br aria-hidden="true" />
          {` L’objectif était de moderniser l’outil, clarifier l’information et renforcer son rôle de plateforme de référence dans la gestion durable des ressources en eau.`}
        </p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#9b2909] text-[16px] tracking-[0.48px] uppercase whitespace-nowrap">
        <p className="leading-[1.1]">Mon rôle</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame5 />
      <div className="flex flex-col font-['Satoshi:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#241623] text-[16px] tracking-[0.16px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">
          Conception de la refonte UX/UI globale de la plateforme, en collaboration étroite avec le client et les équipes techniques.
          <br aria-hidden="true" />
          {` Animation des échanges de cadrage, compréhension des enjeux métiers et traduction des besoins en solutions concrètes : restructuration de l’architecture de l’information, hiérarchisation des contenus, simplification des parcours utilisateurs et modernisation de l’interface.`}
        </p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#9b2909] text-[16px] tracking-[0.48px] uppercase whitespace-nowrap">
        <p className="leading-[1.1]">Impact</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame6 />
      <div className="flex flex-col font-['Satoshi:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#241623] text-[16px] tracking-[0.16px] w-full">
        <p className="leading-[1.4]">
          Une plateforme plus claire, plus lisible et plus accessible, facilitant l’analyse des données et l’usage quotidien par différents profils utilisateurs.
          <br aria-hidden="true" />
          Une expérience modernisée, plus efficace et alignée avec les enjeux institutionnels et opérationnels.
        </p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full">
      <div className="bg-white content-stretch flex items-center justify-center px-[40px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#241623] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#241623] text-[16px] tracking-[0.48px] uppercase whitespace-nowrap">Voir le projet</p>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[10px] py-[40px] relative size-full">
          <Frame />
          <div className="flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#9b2909] text-[48px] tracking-[0.48px] whitespace-nowrap">
            <p className="leading-[1.1]">BNPE</p>
          </div>
          <Frame3 />
          <Frame8 />
          <Frame9 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[rgba(239,233,244,0.45)] content-stretch flex gap-[40px] items-center p-[40px] relative rounded-[12px] size-full">
      <div aria-hidden="true" className="absolute border border-[#f4633a] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <div className="flex flex-row items-center self-stretch">
        <MaskGroup />
      </div>
      <Description />
    </div>
  );
}