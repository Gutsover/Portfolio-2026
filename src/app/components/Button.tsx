import React, { useState } from 'react';
import { ButtonText } from './Typography';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button({
  children,
  onClick,
  disabled = false,
  className = ''
}: ButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = () => {
    if (!disabled) setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (!disabled) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setIsHovered(false);
  };

  const baseStyles = 'relative flex items-center justify-center px-[40px] py-[16px] rounded-[8px] transition-all';

  const stateStyles = disabled
    ? 'bg-white cursor-not-allowed'
    : isActive || isHovered
    ? 'bg-[#9b2909] cursor-pointer shadow-[0px_4px_8px_rgba(0,0,0,0.2)]'
    : 'bg-white cursor-pointer';

  const textColor = disabled
    ? 'text-[#c4c4c4]'
    : isActive || isHovered
    ? 'text-white'
    : 'text-[#241623]';

  return (
    <button
      type="button"
      className={`${baseStyles} ${stateStyles} ${className}`}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {!isActive && !isHovered && (
        <div
          aria-hidden="true"
          className={`absolute border ${disabled ? 'border-[#e0e0e0]' : 'border-[#241623]'} border-solid inset-0 pointer-events-none rounded-[8px] transition-opacity`}
        />
      )}
      <ButtonText className={textColor}>{children}</ButtonText>
    </button>
  );
}
