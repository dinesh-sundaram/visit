import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/**
 * Animated section header used across all pages.
 *
 * Props:
 *  title      – main heading text
 *  subtitle   – smaller line below
 *  align      – 'left' (default) | 'center'
 *  accent     – colour of the animated underline bar  (Tailwind bg-* class)
 *  delay      – extra CSS animation-delay for stagger (e.g. '0.1s')
 *  waveSubtitle – if true, subtitle characters wave continuously
 *  subtitleColor – Tailwind text class for subtitle colour
 */
export default function SectionHeader({
  title,
  subtitle,
  align         = 'left',
  accent        = 'bg-blue-600',
  delay         = '0s',
  waveSubtitle  = false,
  subtitleColor = '',
}) {
  const [ref, visible] = useScrollReveal(0.1);
  const textAlign = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  /* Split subtitle into characters, preserving spaces */
  const renderSubtitle = () => {
    if (!subtitle) return null;

    if (!waveSubtitle) {
      return (
        <p
          className={`section-subtitle caption-reveal ${subtitleColor} ${visible ? 'caption-reveal-in' : ''}`}
          style={{ animationDelay: `calc(${delay} + 0.25s)` }}
        >
          {subtitle}
        </p>
      );
    }

    /* Wave mode — each non-space char gets a staggered delay;
       total wave period = 5.4s, stagger = 0.06s per char */
    const chars = subtitle.split('');
    let charIdx = 0;
    return (
      <p
        className={`section-subtitle caption-reveal ${subtitleColor} ${visible ? 'caption-reveal-in' : ''}`}
        style={{ animationDelay: `calc(${delay} + 0.25s)` }}
        aria-label={subtitle}
      >
        {chars.map((ch, i) => {
          if (ch === ' ') return <span key={i}>&nbsp;</span>;
          const idx = charIdx++;
          return (
            <span
              key={i}
              className="wave-char"
              style={{
                animationDelay:    `${idx * 0.06}s`,
                animationDuration: '5.4s',
              }}
              aria-hidden="true"
            >
              {ch}
            </span>
          );
        })}
      </p>
    );
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col ${textAlign} mb-8 overflow-hidden`}
    >
      {/* Title */}
      <h2
        className={`section-title caption-reveal ${visible ? 'caption-reveal-in' : ''}`}
        style={{ animationDelay: delay }}
      >
        {title}
      </h2>

      {/* Animated underline bar */}
      <span
        className={`caption-bar ${accent} ${visible ? 'caption-bar-in' : ''}`}
        style={{ animationDelay: `calc(${delay} + 0.15s)` }}
        aria-hidden="true"
      />

      {/* Subtitle */}
      {renderSubtitle()}
    </div>
  );
}
