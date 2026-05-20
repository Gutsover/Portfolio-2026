import React from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Divider({ orientation = 'horizontal', className = '' }: DividerProps) {
  if (orientation === 'horizontal') {
    return (
      <div className={`h-0 w-full ${className}`}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
          <line stroke="#241623" x2="32" y1="0.5" y2="0.5" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-0 h-full ${className}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 32">
        <line stroke="#241623" x1="0.5" y2="32" />
      </svg>
    </div>
  );
}
