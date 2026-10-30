import { useId } from "react";

type Props = {
  className?: string;
  title?: string;
  /** Simplified mark for very small sizes (no split diagonal). */
  simple?: boolean;
};

/**
 * KA monogram, rebuilt as a vector from the approved logo concept.
 * The K and A share their strokes; the split diagonal reads as a structural brace.
 * Uses currentColor so it can be brass, ivory or ink wherever it sits.
 */
export default function Monogram({ className, title = "Kehinde Abiuwa", simple = false }: Props) {
  const uid = useId().replace(/:/g, "");
  const clip = `ka-clip-${uid}`;
  const mask = `ka-mask-${uid}`;

  return (
    <svg
      viewBox="36 36 764 588"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      <defs>
        <clipPath id={clip}>
          <rect x="122" y="0" width="700" height="619" />
        </clipPath>
        <mask id={mask} maskUnits="userSpaceOnUse" x="0" y="0" width="820" height="660">
          <rect width="820" height="660" fill="#fff" />
          {!simple && <line x1="60" y1="259.5" x2="760" y2="784.5" stroke="#000" strokeWidth="10" />}
        </mask>
      </defs>
      <g mask={`url(#${mask})`}>
        <rect x="122" y="48" width="68" height="562" />
        <path d="M64,42 H248 V50 C214,52 196,58 190,70 H122 C116,58 98,52 64,50 Z" />
        <path d="M122,590 H190 C196,602 216,608 266,610 V619 H40 V610 C92,608 116,602 122,590 Z" />
        <g clipPath={`url(#${clip})`} stroke="currentColor" fill="none">
          <line x1="60" y1="218.5" x2="760" y2="743.5" strokeWidth={simple ? 70 : 56} />
          {!simple && <line x1="60" y1="291.5" x2="760" y2="816.5" strokeWidth="41" />}
        </g>
      </g>
      <path d="M472,40 L748,608 L678,608 L446,128 Z" />
      <path d="M669,590 H739 C746,602 768,608 795,610 V619 H625 V610 C650,608 664,602 669,590 Z" />
      <line x1="272" y1="312" x2="436" y2="148" stroke="currentColor" strokeWidth={simple ? 40 : 32} />
      {!simple && <line x1="382" y1="408" x2="488" y2="302" stroke="currentColor" strokeWidth="32" />}
    </svg>
  );
}
