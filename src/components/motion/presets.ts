/** Stable, enterprise-friendly motion — no blur, subtle drift only */

export const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const;
export const EASE_SMOOTH = [0.4, 0, 0.2, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: EASE_SMOOTH },
  },
};

export const staggerContainer = (stagger = 0.07, delayChildren = 0.05) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
