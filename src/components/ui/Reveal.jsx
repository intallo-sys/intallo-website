"use client";

import { Reveal as AnimatedReveal } from "./Animations";

export default function Reveal({ children, className = "", direction = "up", delay = 0 }) {
  return (
    <AnimatedReveal className={className} direction={direction} delay={delay}>
      {children}
    </AnimatedReveal>
  );
}
