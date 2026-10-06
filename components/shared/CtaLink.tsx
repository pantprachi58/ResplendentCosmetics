import Link from "next/link";
import Icon from "@/components/Icon";
import type { Cta } from "@/data/treatments/types";
import ui from "./ui.module.css";

type CtaLinkProps = {
  cta: Cta;
  variant?: "primary" | "secondary" | "light" | "green" | "ghost";
  block?: boolean;
};

const variantClass = {
  primary: ui.btnPrimary,
  secondary: ui.btnSecondary,
  light: ui.btnLight,
  green: ui.btnGreen,
  ghost: ui.btnGhost,
};

/** Pill button that uses next/link for routes and a plain anchor for tel:/#/external targets. */
export default function CtaLink({ cta, variant = "primary", block = false }: CtaLinkProps) {
  const className = `${ui.btn} ${variantClass[variant]}${block ? ` ${ui.btnBlock}` : ""}`;
  const content = (
    <>
      {cta.iconLeading && <Icon name={cta.iconLeading} />}
      <span>{cta.label}</span>
      {cta.icon && <Icon name={cta.icon} />}
    </>
  );

  if (cta.href.startsWith("/")) {
    return (
      <Link className={className} href={cta.href}>
        {content}
      </Link>
    );
  }
  return (
    <a className={className} href={cta.href}>
      {content}
    </a>
  );
}
