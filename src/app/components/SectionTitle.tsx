import React from 'react';
import { DisplayHeading, SectionLabel } from './Typography';

interface SectionTitleProps {
  label: string;
  title: string;
  highlightedWord?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function SectionTitle({
  label,
  title,
  highlightedWord,
  icon,
  className = ''
}: SectionTitleProps) {
  const renderTitle = () => {
    if (highlightedWord) {
      const parts = title.split(highlightedWord);
      return (
        <>
          <span className="text-[#241623]">{parts[0]}</span>
          <span className="text-[#9b2909]">{highlightedWord}</span>
          <span className="text-[#241623]">{parts[1]}</span>
        </>
      );
    }
    return <span className="text-[#241623]">{title}</span>;
  };

  return (
    <div className={`flex flex-col gap-[24px] w-full max-w-[1200px] ${className}`}>
      <SectionLabel className="text-[#241623]">{label}</SectionLabel>
      <div className="flex gap-[24px] items-center w-full">
        <DisplayHeading className="text-[#241623]">{renderTitle()}</DisplayHeading>
        {icon && <div className="flex items-center">{icon}</div>}
      </div>
    </div>
  );
}
