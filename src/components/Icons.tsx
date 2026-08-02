import type { SVGProps } from "react";

/** Hafif, elle çizilmiş SVG ikon seti — ek ikon paketi kurulmadı. */

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export type IconName =
  | "target"
  | "document"
  | "split"
  | "corner"
  | "contour"
  | "grid"
  | "parcel"
  | "tripod";

const paths: Record<IconName, React.ReactNode> = {
  // Aplikasyon: zemine gösterilen nokta
  target: (
    <>
      <circle cx="12" cy="12" r="6.5" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  // Cins değişikliği: kayıt belgesi
  document: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 16h4" />
    </>
  ),
  // Birleştirme / ayırma
  split: (
    <>
      <path d="M3 4h8v16H3zM13 4h8v7h-8zM13 13h8v7h-8z" />
    </>
  ),
  // Sınır tespiti: köşe noktası
  corner: (
    <>
      <path d="M4 20V6a2 2 0 0 1 2-2h14" />
      <path d="M4 20l7-7 4 4 5-9" />
      <circle cx="11" cy="13" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  // Plankote: eş yükselti eğrileri
  contour: (
    <>
      <path d="M2 17c3-4 6-6 10-6s7 2 10 6" />
      <path d="M5 20c2.5-2.5 4.5-3.5 7-3.5s4.5 1 7 3.5" />
      <path d="M8 10c1.5-2.5 2.5-4 4-4s2.5 1.5 4 4" />
    </>
  ),
  // İmar uygulaması: ada düzeni
  grid: (
    <>
      <path d="M3 3h18v18H3z" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </>
  ),
  // Kadastro: parsel şeması
  parcel: (
    <>
      <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
      <path d="M9 3v15M15 6v15" />
    </>
  ),
  // Arazi ölçümü: üç ayak
  tripod: (
    <>
      <path d="M8 6h8v3H8z" />
      <path d="M12 9v4M12 13l-5 8M12 13l5 8M8.5 18h7" />
      <path d="M16 7.5h3" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: IconName }) {
  return (
    <svg {...base} width="24" height="24">
      {paths[name]}
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      width="18"
      height="18"
      {...props}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.05 8.05 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.09 8.09a8.1 8.1 0 0 1-4.12-1.13l-.3-.18-3.11.82.83-3.04-.19-.31a8.03 8.03 0 0 1-1.23-4.29c0-4.46 3.63-8.09 8.09-8.09Zm-3.2 4.06c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.32-.75-1.8-.19-.44-.38-.4-.53-.4l-.5-.01Z" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      width="18"
      height="18"
      {...props}
    >
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.62c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13V9.9H7.5V13h2.77v8h3.23Z" />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
