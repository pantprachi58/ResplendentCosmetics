"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import type { ImageRef } from "@/data/treatments/types";
import styles from "./CompareSlider.module.css";

const clamp = (value: number) => Math.min(100, Math.max(0, value));

const KEY_STEPS: Record<string, (pos: number) => number> = {
  ArrowLeft: (pos) => pos - 5,
  ArrowDown: (pos) => pos - 5,
  ArrowRight: (pos) => pos + 5,
  ArrowUp: (pos) => pos + 5,
  PageDown: (pos) => pos - 20,
  PageUp: (pos) => pos + 20,
  Home: () => 0,
  End: () => 100,
};

type CompareSliderProps = {
  before: ImageRef;
  after: ImageRef;
  /** Accessible name of the slider, e.g. "Rhinoplasty" → "Compare Rhinoplasty before and after" */
  subject: string;
  /** next/image `sizes` for both photos */
  sizes: string;
  /** CSS object-position for both photos */
  focus?: string;
  /** Stand-in photo: greys out the before side and shows a "Sample image" badge */
  sample?: boolean;
  /** "lg" for full sections (labels on top), "sm" for cards (compact handle, labels at the bottom) */
  size?: "lg" | "sm";
  /** Sizing for the frame (aspect-ratio / height) from the parent's stylesheet */
  className?: string;
  /** Extra overlays (tags, badges) rendered above the photos */
  children?: ReactNode;
};

/** Draggable before/after comparison: mouse drag or click, touch drag, and keyboard (arrows, Page Up/Down, Home/End). */
export default function CompareSlider({
  before,
  after,
  subject,
  sizes,
  focus,
  sample = false,
  size = "lg",
  className = "",
  children,
}: CompareSliderProps) {
  const [pos, setPos] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const moveTo = (clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (rect && rect.width > 0) setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    // Touch only moves on drag, so a vertical scroll that starts on the photo doesn't jump the divider.
    if (event.pointerType !== "touch") moveTo(event.clientX);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) moveTo(event.clientX);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = KEY_STEPS[event.key];
    if (!step) return;
    event.preventDefault();
    setPos((current) => clamp(step(current)));
  };

  const imageStyle = focus ? { objectPosition: focus } : undefined;
  const rounded = Math.round(pos);
  const small = size === "sm";

  return (
    <div
      ref={frameRef}
      className={`${styles.frame} ${small ? styles.small : ""} ${className}`}
      style={{ "--pos": `${pos}%` } as CSSProperties}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onLostPointerCapture={stopDragging}
    >
      <Image src={after.src} alt={after.alt} fill sizes={sizes} className={styles.image} style={imageStyle} draggable={false} />
      <div className={styles.beforeLayer}>
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes={sizes}
          className={`${styles.image} ${sample ? styles.sampleBefore : ""}`}
          style={imageStyle}
          draggable={false}
        />
      </div>

      {children}

      <span className={`${styles.tag} ${styles.tagBefore}`} data-hidden={pos < (small ? 22 : 14)}>
        Before
      </span>
      <span className={`${styles.tag} ${styles.tagAfter}`} data-hidden={pos > (small ? 78 : 86)}>
        After
      </span>
      {sample && (
        <span className={styles.sampleBadge}>
          {!small && <Icon name="photo_library" />}
          {small ? "Sample" : "Sample image"}
        </span>
      )}

      <span className={styles.divider} aria-hidden="true" />
      <div
        className={styles.handle}
        role="slider"
        tabIndex={0}
        aria-label={`Compare ${subject} before and after`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={rounded}
        aria-valuetext={`${rounded}% before, ${100 - rounded}% after`}
        onKeyDown={onKeyDown}
      >
        <Icon name="chevron_left" />
        <Icon name="chevron_right" />
      </div>
    </div>
  );
}
