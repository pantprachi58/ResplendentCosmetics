type IconProps = {
  /** Material Symbols ligature name, e.g. "call" */
  name: string;
  className?: string;
  /** Use the filled variant of the glyph */
  filled?: boolean;
};

export default function Icon({ name, className, filled = false }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined${className ? ` ${className}` : ""}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
