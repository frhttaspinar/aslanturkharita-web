"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * İçindeki `.reveal-item` öğelerini görünür alana girdiğinde bir kez ortaya
 * çıkarır. Tek bir IntersectionObserver kullanılır ve iş bitince kapatılır.
 *
 * Progressive enhancement: gizleme kuralları yalnızca <html class="js">
 * altında geçerli olduğu için JavaScript çalışmadığında içerik görünür kalır.
 * prefers-reduced-motion açıkken hareket beklenmeden doğrudan gösterilir.
 */
export default function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const show = () => {
      element.dataset.revealed = "true";
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} data-reveal="">
      {children}
    </div>
  );
}
