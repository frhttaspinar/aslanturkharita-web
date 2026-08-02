# Aslantürk Harita Web Sitesi

Aslantürk Harita için hazırlanmış kurumsal tanıtım sitesi. Tek sayfalık yapıda hizmetler,
hakkımızda, çalışma süreci, saha çalışmaları ve iletişim bölümlerini içerir.

## Teknolojiler

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript
- Stil için ek kütüphane kullanılmadan yazılmış CSS (`src/app/globals.css`)

## Yerel çalıştırma

```bash
npm install
npm run dev
```

Ardından tarayıcıda http://localhost:3000 adresini açın.

## Kalite komutları

```bash
npm run lint       # ESLint
npm run typecheck  # TypeScript tip kontrolü
npm run build      # Production build
```

## Proje yapısı

```
public/          Logo, imar planı çizimi ve saha fotoğrafları
src/app/         Layout, sayfa, global stiller, favicon
src/components/  Bölüm bileşenleri (Header, Hero, Services, ...)
src/lib/site.ts  Firma bilgileri: telefon, WhatsApp, adres, sosyal medya
src/lib/content.ts  Hizmetler, çalışma süreci ve galeri verileri
```

Firma bilgileri ve içerik metinleri `src/lib` altındaki iki dosyadan yönetilir; telefon,
WhatsApp veya adres güncellemesi için yalnızca `src/lib/site.ts` düzenlenmesi yeterlidir.

## Ortam değişkenleri

Site ortam değişkeni olmadan çalışır. Alan adı belirlendiğinde, Open Graph ve Twitter
görsellerinin mutlak URL üretebilmesi için `NEXT_PUBLIC_SITE_URL` tanımlanabilir:

```bash
NEXT_PUBLIC_SITE_URL=https://ornek-alan-adi.com
```

Bu değişken tanımlı değilken build sırasında Next.js'in verdiği `metadataBase` uyarısı
beklenen bir durumdur ve alan adı eklendiğinde ortadan kalkar.

## Yayın

Alan adı bağlantısı ve Vercel yayını sonraki aşamada yapılacaktır.
