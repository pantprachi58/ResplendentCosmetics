import type { CSSProperties } from "react";

type IconProps = {
  /** Material Symbols ligature name, e.g. "call" */
  name: string;
  className?: string;
  /** Use the filled variant of the glyph */
  filled?: boolean;
  /** Optional inline styles */
  style?: CSSProperties;
};

export default function Icon({ name, className, filled = false, style }: IconProps) {
  const mergedStyle: CSSProperties = {
    ...(filled ? { fontVariationSettings: "'FILL' 1" } : {}),
    ...style,
  };

  return (
    <span
      className={`material-symbols-outlined${className ? ` ${className}` : ""}`}
      style={Object.keys(mergedStyle).length > 0 ? mergedStyle : undefined}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
