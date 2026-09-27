"use client";

import { useState } from "react";
import { LANGS } from "@/lib/site";
import s from "./LanguageSwitcher.module.css";

// Por agora só muda o estado visual. Quando houver traduções,
// ligar ao routing de idiomas (ex.: /pt, /es, /fr, /en).
export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(0);

  return (
    <div
      className={`${s.switcher} ${className}`}
      role="group"
      aria-label="Idioma"
      style={{ "--i": active } as React.CSSProperties}
    >
      <span className={s.pill} aria-hidden="true" />
      {LANGS.map((code, i) => (
        <button
          key={code}
          type="button"
          className={s.option}
          aria-pressed={active === i}
          onClick={() => setActive(i)}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
