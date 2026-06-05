"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "./presets";

type Direction = "up" | "down" | "none";

const offsets: Record<Direction, number> = {
  up: 14,
  down: -10,
  none: 0,
};

function buildVariants(
  direction: Direction,
  delay: number,
  reduced: boolean
): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.2, delay },
      },
    };
  }

  const y = offsets[direction];
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASE_OUT, delay },
    },
  };
}

export function AnimateIn({
  children,
  className,
  direction = "up",
  delay = 0,
  once = true,
  amount = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  once?: boolean;
  amount?: number;
}) {
  const reduced = useReducedMotion() ?? false;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      variants={buildVariants(direction, delay, reduced)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.07,
  delayChildren = 0.04,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const reduced = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -40px 0px" }}
      variants={
        reduced
          ? { hidden: {}, visible: { transition: { staggerChildren: 0 } } }
          : {
              hidden: {},
              visible: {
                transition: { staggerChildren: stagger, delayChildren },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      variants={
        reduced
          ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
          : {
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: EASE_OUT },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

/** Headings & paragraphs — fade up only, never horizontal or blur */
export function TextReveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}) {
  const reduced = useReducedMotion() ?? false;
  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -30px 0px" }}
      transition={
        reduced
          ? { duration: 0.2, delay }
          : { duration: 0.5, ease: EASE_OUT, delay }
      }
    >
      {children}
    </MotionTag>
  );
}
