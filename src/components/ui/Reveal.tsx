"use client";

import { ReactNode } from "react";
import { Reveal as AnimatedReveal } from "./Animations";

export interface RevealProps {
  children?: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export default function Reveal({ children, className = "", direction = "up", delay = 0 }: RevealProps) {
  return (
    <AnimatedReveal className={className} direction={direction} delay={delay}>
      {children}
    </AnimatedReveal>
  );
}
