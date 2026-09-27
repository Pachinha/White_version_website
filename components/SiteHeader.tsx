"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, PHONE_LABEL, PHONE_TEL } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";
import { PhoneIcon } from "./Icons";
import s from "./SiteHeader.module.css";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Header muda de estado depois de 40px de scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu ao mudar de página
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Menu aberto: bloqueia scroll e fecha com Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`${s.header} ${scrolled ? s.scrolled : ""} ${open ? s.menuOpen : ""}`}
    >
      <div className={s.inner}>
        <Link href="/" className={s.logo} aria-label="Lareiras Pachinha — início">
          <Image src="/logo.png" alt="Lareiras Pachinha" width={2100} height={749} priority />
        </Link>

        <nav className={s.nav} aria-label="Principal">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={s.navLink}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                  {item.highlight && <span className={s.dot} aria-hidden="true" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={s.actions}>
          <a href={`tel:${PHONE_TEL}`} className={s.phone}>
            <PhoneIcon />
            <span>{PHONE_LABEL}</span>
          </a>
          <LanguageSwitcher className={s.langDesktop} />
          <Link href="/orcamento" className={`btn btn-primary btn-sm ${s.cta}`}>
            Pedir orçamento
          </Link>
          <button
            type="button"
            className={s.burger}
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Menu móvel */}
      <div
        id="menu-movel"
        className={s.drawer}
        data-open={open}
        inert={!open}
      >
        <nav aria-label="Principal (móvel)">
          <ul>
            {NAV.map((item, i) => (
              <li key={item.href} style={{ "--d": `${i * 35}ms` } as React.CSSProperties}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                  {item.highlight && <span className={s.dot} aria-hidden="true" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={s.drawerFooter}>
          <Link href="/orcamento" className="btn btn-primary btn-lg">
            Pedir orçamento
          </Link>
          <a href={`tel:${PHONE_TEL}`} className="btn btn-secondary btn-lg">
            <PhoneIcon /> {PHONE_LABEL}
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
