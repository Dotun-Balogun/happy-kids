import WaveDivider from "./WaveDivider";

// SectionContainer Component
type SectionContainerProps = {
  bgColor?: string;
  waveColor?: string;
  waveHeight?: number;
  padding?: string;
  topWave?: boolean;
  bottomWave?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default function  SectionContainer ({
  bgColor = "#ffffff",
  waveColor = "#ffffff",
  waveHeight = 100,
  padding = "",
  topWave = true,
  bottomWave = true,
  className = "",
  children,
}: SectionContainerProps) {
  return (
    <div className="relative w-full">
      {/* Top Wave */}
      {topWave && (
        <div className="w-full" style={{ marginBottom: 0 }}>
          <WaveDivider position="bottom" color={waveColor} height={waveHeight} />
        </div>
      )}

      {/* Content Section */}
      <section
        className={`w-full ${padding} ${className}`}
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </section>

      {/* Bottom Wave */}
      {bottomWave && (
        <div className="w-full" style={{ marginTop: 0 }}>
          <WaveDivider position="top" color={waveColor} height={waveHeight} />
        </div>
      )}
    </div>
  );
};
