import React from "react";

interface FaintTextProps {
  text: string;
  className?: string;
}

const FaintText = ({ text, className }: FaintTextProps) => {
  return (
    <span
      className={`absolute -top-10 md:-top-16 left-1/2 md:left-0 
      -translate-x-1/2 md:translate-x-0 
      text-[60px] md:text-[120px] 
      font-extrabold text-secondary/10 
      select-none whitespace-nowrap pointer-events-none ${className}`}
    >
      {text}
    </span>
  );
};

export default FaintText;
