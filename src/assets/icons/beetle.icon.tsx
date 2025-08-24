import React from "react";

type Props = {
  width?: number;
  height?: number;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

export const BeetleIcon: React.FC<Props> = ({ 
  width = 64, 
  height = 64, 
  className = "",
  ...props 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Beetle body */}
      <ellipse cx="32" cy="40" rx="20" ry="12" fill="currentColor" opacity="0.9"/>
      
      {/* Beetle head */}
      <circle cx="32" cy="28" r="8" fill="currentColor" opacity="0.9"/>
      
      {/* Antennae */}
      <path d="M28 20 Q26 16 24 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <path d="M36 20 Q38 16 40 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      
      {/* Wings */}
      <path d="M16 32 Q12 28 16 24 Q20 28 16 32" fill="currentColor" opacity="0.6"/>
      <path d="M48 32 Q52 28 48 24 Q44 28 48 32" fill="currentColor" opacity="0.6"/>
      
      {/* Legs */}
      <path d="M20 44 L18 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <path d="M44 44 L46 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <path d="M24 46 L22 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <path d="M40 46 L42 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
    </svg>
  );
};
