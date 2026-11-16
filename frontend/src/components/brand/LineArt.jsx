import { motion } from "framer-motion";

const ART = {
  handshake: { src: "/art/handshake.png", ratio: 1140 / 454 },
  negotiation: { src: "/art/negotiation.png", ratio: 884 / 622 },
  handoff: { src: "/art/handoff.png", ratio: 1072 / 323 },
};

const GRADIENTS = {
  crown: "linear-gradient(100deg, #2FE03A 0%, #00C850 30%, #ADBA36 65%, #C9C23A 100%)",
  gilt: "linear-gradient(100deg, #ADBA36 0%, #C9C23A 50%, #B09820 100%)",
  earth: "linear-gradient(100deg, #6B4E24 0%, #B09820 55%, #00C850 100%)",
  ink: "linear-gradient(100deg, #14100A, #3A2A14)",
};

/**
 * Abstract one-line artwork, painted with logo colours through a CSS mask.
 * Reveals left-to-right as if being drawn when it scrolls into view.
 */
export default function LineArt({
  name = "handshake",
  tone = "crown",
  className = "",
  reveal = true,
  duration = 2.6,
  delay = 0,
  animateOnMount = false,
  ...rest
}) {
  const art = ART[name];
  const style = {
    aspectRatio: `${art.ratio}`,
    background: GRADIENTS[tone] || tone,
    WebkitMaskImage: `url(${art.src})`,
    maskImage: `url(${art.src})`,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  };

  if (!reveal) {
    return <div role="img" className={className} style={style} {...rest} />;
  }

  const hidden = { clipPath: "inset(0 100% 0 0)" };
  const shown = {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration, delay, ease: [0.65, 0, 0.35, 1] },
  };

  if (animateOnMount) {
    return (
      <motion.div
        role="img"
        className={className}
        style={style}
        initial={hidden}
        animate={shown}
        {...rest}
      />
    );
  }

  // Observe an un-clipped wrapper (a clip-path on the target itself hides it
  // from IntersectionObserver), and pass the reveal down via variants.
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.25 }}
      {...rest}
    >
      <motion.div
        role="img"
        className="w-full"
        style={style}
        variants={{ hidden, shown }}
      />
    </motion.div>
  );
}
