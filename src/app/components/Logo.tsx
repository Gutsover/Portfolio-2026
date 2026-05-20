import React from 'react';
import { LogoText } from './Typography';
import svgPaths from '../../imports/Group26948/svg-g17htdlqwg';

export function Logo() {
  return (
    <div className="flex gap-[20px] items-end">
      <div className="h-[24px] w-[39.977px] relative">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.9769 24.0001">
          <g clipPath="url(#clip0_logo)" id="Group 26948">
            <path d={svgPaths.p348a8300} fill="#241623" id="Vector 1" />
            <path d={svgPaths.p73caa00} fill="#241623" id="Vector 2" />
            <path d={svgPaths.p17ef70c0} fill="#F4633A" id="Vector 3" />
            <path d={svgPaths.p3511df00} fill="#241623" id="B" />
          </g>
          <defs>
            <clipPath id="clip0_logo">
              <rect fill="white" height="24.0001" width="39.9769" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <LogoText className="text-[#241623]">mylene.B</LogoText>
    </div>
  );
}
