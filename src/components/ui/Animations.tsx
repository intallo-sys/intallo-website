"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef, ReactNode } from "react";

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
