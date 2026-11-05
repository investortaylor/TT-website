import { motion } from "framer-motion";

/**
 * The TruTown crown: five high-rise buildings whose peaks form a crown,
 * resting on the arched "street" band — traced from the logo emblem.
 *
 * variant: "line" (stroked outline, optional draw animation) | "solid"
 */
const SKYLINE =
  "M30 300 L40 245 L79 206 L116 243 L116 185 L158 150 L200 185 L200 262 L206 262 L206 130 L251 95 L296 130 L296 262 L307 262 L307 200 L349 165 L392 200 L392 250 L428 218 L466 250 L476 300 Q251 262 30 300 Z";

export default function CrownSkyline({
  variant = "line",
  className = "",
  strokeWidth = 2,
  draw = false,
  gradientId = "crown-grad",
  stroke,
  fill,
  ...rest
}) {
  const paint = stroke || `url(#${gradientId})`;
  return (
    <svg
      viewBox="20 85 466 225"
      fill="none"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stopColor="#2FE03A" />
          <stop offset="35%" stopColor="#00C850" />
          <stop offset="70%" stopColor="#ADBA36" />
          <stop offset="100%" stopColor="#C9C23A" />
        </linearGradient>
      </defs>
      {variant === "solid" ? (
        <path d={SKYLINE} fill={fill || paint} />
      ) : draw ? (
        <motion.path
          d={SKYLINE}
          stroke={paint}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: [0.65, 0, 0.35, 1] }}
        />
      ) : (
        <path
          d={SKYLINE}
          stroke={paint}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      )}
    </svg>
  );
}

/** Tiny crown glyph for bullets, separators and kickers. */
export function CrownGlyph({ className = "w-4 h-4", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden="true" fill={color}>
      <path d="M1 15 L1.5 10 L4 7.5 L6 9.5 L6 6 L8.6 3.8 L10.4 5.6 L10.4 4 L12 1 L13.6 4 L13.6 5.6 L15.4 3.8 L18 6 L18 9.5 L20 7.5 L22.5 10 L23 15 Q12 12.6 1 15 Z" />
    </svg>
  );
}
