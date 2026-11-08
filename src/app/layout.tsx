import type { Metadata, Viewport } from "next";
import { Manrope, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import JsonLd from "@/components/JsonLd";
import { jsonLdGraph, professionalServiceNode, webSiteNode } from "@/lib/schema";
import { absoluteUrl, metadataBase, robotsMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const defaultTitle = `${site.name} | ${site.tagline}`;

export const metadata: Metadata = {
  ...metadataBase(),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  publisher: site.name,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: defaultTitle,
    description: site.description,
    url: absoluteUrl("/") ?? undefined,
    images: [
      {
        url: "/og-aslanturk-harita.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
    images: ["/og-aslanturk-harita.png"],
  },
  // Alan adı bağlanana kadar noindex; helper tek kaynaktan karar verir.
  ...robotsMeta(),
};

export const viewport: Viewport = {
  themeColor: "#fffdf9",
  width: "device-width",
  initialScale: 1,
};

const siteGraph = jsonLdGraph([professionalServiceNode(), webSiteNode()]);

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${outfit.variable} ${manrope.variable}`}>
      <body>
        {/*
          Scroll animasyonları yalnızca JavaScript çalışırken devreye girer.
          Bu sınıf olmadan kartlar hiçbir zaman gizlenmez (progressive enhancement).
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
        <a className="skip-link" href="#icerik">
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik">{children}</main>
        <Footer />
        <WhatsAppFab />
        <JsonLd data={siteGraph} />
      </body>
    </html>
  );
}
