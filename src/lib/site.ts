/**
 * Firma bilgilerinin tek kaynağı. Telefon, WhatsApp, adres ve sosyal medya
 * bağlantıları başka hiçbir dosyada tekrar yazılmaz; hep buradan okunur.
 */

const whatsappMessage =
  "Merhaba, Aslantürk Harita hizmetleri hakkında bilgi almak istiyorum.";

const address = {
  street: "Hızırpaşa, Karacaoğlan Cd. No:156",
  postalCode: "05100",
  district: "Amasya Merkez",
  region: "Amasya",
  country: "TR",
} as const;

const addressLine = `${address.street}, ${address.postalCode} ${address.district}/${address.region}`;

export const site = {
  name: "Aslantürk Harita",
  legalNote: "Harita Mühendisliği Ofisi",
  engineerName: "Harita Mühendisi Nazım Aslantürk",
  tagline: "Amasya Harita ve Kadastro Hizmetleri",
  yearsOfExperience: 15,
  description:
    "Aslantürk Harita, Amasya’da 15 yıllık tecrübesiyle harita mühendisliği, arazi ölçümü ve taşınmazlara yönelik teknik danışmanlık hizmetleri sunar.",

  phone: {
    display: "0542 450 11 61",
    href: "tel:+905424501161",
    international: "+905424501161",
  },

  whatsapp: {
    message: whatsappMessage,
    href: `https://wa.me/905424501161?text=${encodeURIComponent(whatsappMessage)}`,
  },

  address: { ...address, line: addressLine },

  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=H%C4%B1z%C4%B1rpa%C5%9Fa%2C+Karacao%C4%9Flan+Cd.+No%3A156%2C+05100+Amasya+Merkez%2FAmasya",

  mapsEmbedUrl:
    "https://www.google.com/maps?q=H%C4%B1z%C4%B1rpa%C5%9Fa%2C+Karacao%C4%9Flan+Cd.+No%3A156%2C+05100+Amasya+Merkez%2FAmasya&output=embed",

  social: {
    instagram: "https://www.instagram.com/nazimaslanturk/",
    facebook: "https://www.facebook.com/AslntrkHrta/",
  },

  logo: {
    lockup: "/a1.png",
    mark: "/aslanturk-mark-new.png",
  },
} as const;

/**
 * Bağlantılar alt sayfalardan da çalışması için route uyumlu tutulur:
 * blog sayfalarında "#hizmetler" yerine "/#hizmetler" gerekir.
 */
export const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/#iletisim" },
] as const;
