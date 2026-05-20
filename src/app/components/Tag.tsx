import React from 'react';
import { Divider } from './Divider';
import { SectionLabel } from './Typography';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = '' }: TagProps) {
  return (
    <div className={`border border-[#f4633a] rounded-[8px] px-[24px] py-[8px] inline-flex ${className}`}>
      <SectionLabel>{children}</SectionLabel>
    </div>
  );
}
