import React from 'react';
import { SectionHeading, CaptionText, BodyText, BodyTextMedium } from './Typography';
import { Button } from './Button';
import { Divider } from './Divider';
import { Tag } from './Tag';

interface ProjectCardProps {
  title: string;
  client: string;
  year: string;
  category: string;
  description: React.ReactNode;
  image: string;
  imageAlt?: string;
  layout?: 'image-left' | 'image-right';
  className?: string;
}

export function ProjectCard({
  title,
  client,
  year,
  category,
  description,
  image,
  imageAlt = '',
  layout = 'image-left',
  className = ''
}: ProjectCardProps) {
  const imageSection = (
    <div className="h-[405px] w-[540px] relative rounded-[12px] shrink-0">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 max-w-none object-cover rounded-[12px] size-full"
      />
    </div>
  );

  const descriptionSection = (
    <div className="flex flex-col gap-[24px] flex-1 min-w-0">
      <div className="flex gap-[10px] items-end">
        <CaptionText className="text-[#241623]">{client}</CaptionText>
        <div className="h-0 relative w-[32px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
              <line stroke="#241623" x2="32" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <CaptionText className="text-[#241623]">{year}</CaptionText>
      </div>

      <SectionHeading className="text-[#9b2909]">{title}</SectionHeading>

      <div className="flex flex-col gap-[16px] items-start">
        <Tag>{category}</Tag>
        <div className="flex flex-col w-[540px]">
          {description}
        </div>
      </div>

      <div className="pt-[20px] flex">
        <Button>Voir le projet</Button>
      </div>
    </div>
  );

  // Gradient de bordure selon le layout
  const borderGradient = layout === 'image-left'
    ? 'linear-gradient(135deg, #f4633a 0%, rgba(244, 99, 58, 0.3) 50%, rgba(244, 99, 58, 0) 100%)'
    : 'linear-gradient(225deg, #f4633a 0%, rgba(244, 99, 58, 0.3) 50%, rgba(244, 99, 58, 0) 100%)';

  return (
    <div className={`bg-[rgba(239,233,244,0.45)] relative rounded-[12px] w-full ${className}`}>
      <div className="flex items-center overflow-clip rounded-inherit size-full">
        <div className="flex gap-[40px] items-center p-[40px] relative size-full">
          {layout === 'image-left' ? (
            <>
              {imageSection}
              {descriptionSection}
            </>
          ) : (
            <>
              {descriptionSection}
              {imageSection}
            </>
          )}
        </div>
      </div>
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
    </div>
  );
}

export function ProjectDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Satoshi',sans-serif] text-[16px] leading-[1.4] tracking-[0.16px] text-[#241623] mb-[5px]">
      {children}
    </p>
  );
}

export function ProjectHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-['Satoshi',sans-serif] text-[16px] leading-[1.4] tracking-[0.16px] text-[#241623]" style={{ fontWeight: 500 }}>
      {children}
    </span>
  );
}
