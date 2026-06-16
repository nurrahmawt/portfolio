"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export default function ScrollReveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  const element = ref.current;
  if (!element) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reducedMotion.matches) {
    setIsVisible(true);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "0px 0px -80px 0px",
    }
  );

  setTimeout(() => {
    if (ref.current) observer.observe(ref.current);
  }, 100);

  const timeout = setTimeout(() => {
    setIsVisible(true);
  }, 1500);

  return () => {
    observer.disconnect();
    clearTimeout(timeout);
  };
}, []);

  const style = {
    ["--reveal-delay" as string]: `${delay}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`reveal-shell ${isVisible ? "is-visible" : "is-hidden"}`}
      style={style}
    >
      {children}
    </div>
  );
}