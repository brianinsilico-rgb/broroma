"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface CountUpProps {
  /** End value (e.g. 25, 50, 1000, 99) */
  end: number;
  /** Suffix after number (e.g. "+", "%") */
  suffix?: string;
  /** Duration in seconds */
  duration?: number;
  /** Run only once when in view */
  once?: boolean;
  className?: string;
}

export default function CountUp({
  end,
  suffix = "",
  duration = 1.75,
  once = true,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { amount: 0.2, once });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, end, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
