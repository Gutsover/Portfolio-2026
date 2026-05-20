import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function DisplayHeading({ children, className = '' }: TypographyProps) {
  return (
    <h1
      className={`font-['Satoshi',sans-serif] font-medium text-[64px] leading-[0.9] tracking-[1.92px] ${className}`}
      style={{ fontWeight: 500 }}
    >
      {children}
    </h1>
  );
}

export function SectionHeading({ children, className = '' }: TypographyProps) {
  return (
    <h2
      className={`font-['Urbanist',sans-serif] font-bold text-[48px] leading-none tracking-[0.48px] ${className}`}
      style={{ fontWeight: 700 }}
    >
      {children}
    </h2>
  );
}

export function SectionLabel({ children, className = '' }: TypographyProps) {
  return (
    <p
      className={`font-['Urbanist',sans-serif] font-medium text-[16px] leading-[1.1] tracking-[0.48px] uppercase ${className}`}
      style={{ fontWeight: 500 }}
    >
      {children}
    </p>
  );
}

export function BodyText({ children, className = '' }: TypographyProps) {
  return (
    <p
      className={`font-['Satoshi',sans-serif] text-[16px] leading-[1.4] tracking-[0.16px] ${className}`}
      style={{ fontWeight: 400 }}
    >
      {children}
    </p>
  );
}

export function BodyTextMedium({ children, className = '' }: TypographyProps) {
  return (
    <span
      className={`font-['Satoshi',sans-serif] text-[16px] leading-[1.4] tracking-[0.16px] ${className}`}
      style={{ fontWeight: 500 }}
    >
      {children}
    </span>
  );
}

export function CaptionText({ children, className = '' }: TypographyProps) {
  return (
    <p
      className={`font-['Urbanist',sans-serif] text-[16px] leading-[1.1] tracking-[0.16px] capitalize ${className}`}
      style={{ fontWeight: 400 }}
    >
      {children}
    </p>
  );
}

export function ButtonText({ children, className = '' }: TypographyProps) {
  return (
    <p
      className={`font-['Urbanist',sans-serif] font-medium text-[16px] leading-[1.1] tracking-[0.48px] uppercase ${className}`}
      style={{ fontWeight: 500 }}
    >
      {children}
    </p>
  );
}

export function LogoText({ children, className = '' }: TypographyProps) {
  return (
    <p
      className={`font-['Satoshi',sans-serif] font-bold text-[16px] tracking-[0.48px] uppercase ${className}`}
      style={{ fontWeight: 700 }}
    >
      {children}
    </p>
  );
}
