type HeadingWithFaintTextProps = {
  faintText?: string;
  children: React.ReactNode;
  faintTextClassName?: string;
  headingClassName?: string;
  containerClassName?: string;
};

export default function HeadingWithFaintText({
  faintText,
  children,
  faintTextClassName = "",
  headingClassName = "",
  containerClassName = "",
}: HeadingWithFaintTextProps) {
  return (
    <div className={`relative ${containerClassName}`}>
      {/* Faint Background Text */}
      <div
        className={`absolute  text-[clamp(60px,16vw,120px)] top-1/2 left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none
          ${faintTextClassName}`}
      >
        {faintText}
      </div>

      {/* Main Heading */}
      <div className={`relative z-10  font-concert-one ${headingClassName}`}>{children}</div>
    </div>
  );
}
