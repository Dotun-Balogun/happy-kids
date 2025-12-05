"use client";

import React from "react";
import WaveDivider from "./WaveDivider";

type SectionContainerProps = {
  bgColor?: string;         // Background color of the whole section
  waveColor?: string;       // Color of the top + bottom waves
  padding?: string;         // Tailwind padding (default: py-20)
  topWave?: boolean;        // Toggle top wave
  bottomWave?: boolean;     // Toggle bottom wave
  className?: string;       // Extra styles
  children: React.ReactNode;
};

const SectionContainer = ({
  bgColor = "#ffffff",
  waveColor = "#ffffff",
  padding = "py-20",
  topWave = true,
  bottomWave = true,
  className,
  children,
}: SectionContainerProps) => {
  return (
    <section
      className={`relative w-full overflow-hidden ${padding} ${className ?? ""}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Top Wave */}
      {topWave && (
        <div className="absolute top-0 left-0 w-full -translate-y-full">
          <WaveDivider position="top" color={waveColor} height={100} />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Bottom Wave */}
      {bottomWave && (
        <div className="absolute bottom-0 left-0 w-full translate-y-full">
          <WaveDivider position="bottom" color={waveColor} height={100} />
        </div>
      )}
    </section>
  );
};

export default SectionContainer;
