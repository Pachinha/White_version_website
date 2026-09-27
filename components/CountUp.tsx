"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// useLayoutEffect só no browser (evita aviso no servidor)
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const formatPt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/** Conta de 0 até `to` quando entra no ecrã. Sem JS / movimento reduzido: mostra logo o valor final. */
export default function CountUp({
  to,
  suffix = "",
  duration = 1200,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setValue(0);
    let raf = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(eased * to));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {formatPt(value)}
      {suffix}
    </span>
  );
}
