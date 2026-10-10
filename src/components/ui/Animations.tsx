"use client";

import {
  motion,
  HTMLMotionProps,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { forwardRef, ReactNode, useRef, useState, useEffect } from "react";

const getTransition = (duration = 0.5, delay = 0, ease: any = [0.25, 0.1, 0.25, 1]) => ({
  duration,
  delay,
  ease,
});

export interface FadeInProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
  ({ children, className, delay = 0, duration = 0.5, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={getTransition(duration, delay)}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);
FadeIn.displayName = "FadeIn";

export interface RevealProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export const Reveal = forwardRef<HTMLDivElement, RevealProps>(
  ({ children, className, delay = 0, direction = "up", duration = 0.7, ...props }, ref) => {
    const yOffset = direction === "up" ? 40 : direction === "down" ? -40 : 0;
    const xOffset = direction === "left" ? 40 : direction === "right" ? -40 : 0;

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: yOffset, x: xOffset }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={getTransition(duration, delay, [0.22, 1, 0.36, 1])}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Reveal.displayName = "Reveal";

export interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  ({ children, className, staggerDelay = 0.1, delayChildren = 0, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);
StaggerContainer.displayName = "StaggerContainer";

export interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
  className?: string;
  yOffset?: number;
}

export const StaggerItem = forwardRef<HTMLDivElement, StaggerItemProps>(
  ({ children, className, yOffset = 20, ...props }, ref) => (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);
StaggerItem.displayName = "StaggerItem";

export interface ScaleInProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const ScaleIn = forwardRef<HTMLDivElement, ScaleInProps>(
  ({ children, className, delay = 0, duration = 0.6, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={getTransition(duration, delay, [0.22, 1, 0.36, 1])}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);
ScaleIn.displayName = "ScaleIn";

export interface SlideInProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "left" | "right";
}

export const SlideIn = forwardRef<HTMLDivElement, SlideInProps>(
  ({ children, className, delay = 0, duration = 0.6, direction = "left", ...props }, ref) => {
    const xOffset = direction === "left" ? -40 : direction === "right" ? 40 : 0;

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: xOffset }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={getTransition(duration, delay, [0.22, 1, 0.36, 1])}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
SlideIn.displayName = "SlideIn";

export interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  children?: ReactNode;
  className?: string;
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className, ...props }, ref) => (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  )
);
AnimatedButton.displayName = "AnimatedButton";

export interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
  className?: string;
}

export const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ children, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      whileHover={{ y: -6, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);
AnimatedCard.displayName = "AnimatedCard";

export interface SpotlightCardProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export const SpotlightCard = forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ children, className = "", spotlightColor = "rgba(26, 118, 255, 0.15)", ...props }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const target = localRef.current;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <motion.div
        ref={(node) => {
          localRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref && "current" in ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`relative overflow-hidden ${className}`}
        {...props}
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 65%)`,
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 h-full">{children}</div>
      </motion.div>
    );
  }
);
SpotlightCard.displayName = "SpotlightCard";

export interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className = "", strength = 0.25 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.2 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * strength);
    y.set(middleY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className = "" }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-intallo-blue via-sky-400 to-intallo-navy origin-left z-[100] pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}

export interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  padZero?: boolean;
}

export function NumberTicker({
  value,
  direction = "up",
  className = "",
  delay = 0,
  duration = 1.2,
  prefix = "",
  suffix = "",
  padZero = false,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(direction === "down" ? value : 0);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [displayValue, setDisplayValue] = useState(direction === "down" ? value : 0);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      animate(motionVal, direction === "down" ? 0 : value, {
        duration,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, delay, direction, duration, motionVal, value]);

  const formattedNumber = padZero && displayValue < 10 ? `0${displayValue}` : `${displayValue}`;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}

export interface SvgPathDrawProps {
  d: string;
  className?: string;
  stroke?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
}

export function SvgPathDraw({
  d,
  className = "",
  stroke = "currentColor",
  strokeWidth = 2,
  duration = 1.2,
  delay = 0,
}: SvgPathDrawProps) {
  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    />
  );
}

