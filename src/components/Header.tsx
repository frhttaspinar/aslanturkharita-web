"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü açıkken sayfa kaymasın: scrollbar genişliği kadar telafi verilir.
  useEffect(() => {
    if (!open) return;

    const { body, documentElement } = document;
    const scrollbar = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;

    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onResize = () => {
      if (window.innerWidth >= 900) close();
    };

    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, close]);

  return (
    <>
      <header className="header" data-scrolled={scrolled}>
        <div className="wrap header__inner">
          <Link className="brand" href="/" onClick={close} aria-label={`${site.name} — ana sayfa`}>
            <Image
              className="brand__mark"
              src={site.logo.mark}
              alt={`${site.name} logosu`}
              width={144}
              height={104}
              priority
            />
            <span className="brand__text">
              <span className="brand__name">Aslantürk Harita</span>
              <span className="brand__engineer">{site.engineerName}</span>
              <span className="brand__note">{site.legalNote}</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Ana menü">
            {navItems.map((item) => (
              <Link key={item.href} className="nav__link" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            className="btn btn--primary btn--sm header__cta"
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            WhatsApp’tan Ulaşın
          </a>

          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="mobil-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="burger__bars" aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
          </div>
      </header>

      {/* Panel header dışında duruyor: header'daki backdrop-filter,
          içindeki position:fixed öğeler için kapsayıcı blok oluşturuyor. */}
      <div className="menu" id="mobil-menu" data-open={open}>
        <nav aria-label="Mobil menü">
          {navItems.map((item) => (
            <Link key={item.href} className="menu__link" href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="menu__actions">
          <a
            className="btn btn--primary"
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            <WhatsAppIcon />
            WhatsApp’tan Ulaşın
          </a>
          <a className="btn btn--quiet" href={site.phone.href} onClick={close}>
            <PhoneIcon />
            {site.phone.display}
          </a>
        </div>
      </div>
    </>
  );
}
