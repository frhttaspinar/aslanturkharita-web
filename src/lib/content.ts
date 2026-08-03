import type { IconName } from "@/components/Icons";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
};

/** Hizmetler tek diziden yönetilir: bölüm, footer ve JSON-LD aynı kaynağı kullanır. */
export const services: Service[] = [
  {
    id: "aplikasyon",
    title: "Aplikasyon",
    description:
      "Tapuda kayıtlı sınırların koordinatlı ölçümle arazide zemine gösterilmesi.",
    icon: "target",
  },
  {
    id: "cins-degisikligi",
    title: "Cins Değişikliği",
    description:
      "Taşınmazın zemindeki güncel durumuna göre cinsinin tapu kaydında güncellenmesi işlemleri.",
    icon: "document",
  },
  {
    id: "birlestirme-ayirma",
    title: "Birleştirme ve Ayırma",
    description:
      "Tevhit ve ifraz işlemleri için gereken ölçüm, hesap ve teknik dosya çalışması.",
    icon: "split",
  },
  {
    id: "sinir-tespiti",
    title: "Parsel ve Sınır Tespiti",
    description:
      "Parsel köşelerinin ve komşu sınırların arazide net biçimde belirlenmesi.",
    icon: "corner",
  },
  {
    id: "plankote",
    title: "Plankote ve Halihazır Harita",
    description:
      "Arazinin kot, eğim ve mevcut durumunun projeye esas olacak şekilde haritalanması.",
    icon: "contour",
  },
  {
    id: "imar-uygulamalari",
    title: "İmar Uygulamaları",
    description:
      "İmar planına dayalı düzenleme çalışmalarında teknik ölçüm ve hesap desteği.",
    icon: "grid",
  },
  {
    id: "kadastro",
    title: "Kadastro Teknik Hizmetleri",
    description:
      "Kadastro işlemlerinde ihtiyaç duyulan ölçüm, hesap ve dosya hazırlığı.",
    icon: "parcel",
  },
  {
    id: "arazi-olcum",
    title: "Harita ve Arazi Ölçümü",
    description:
      "GNSS ve total station ile hassas arazi ölçümü, alan ve hacim hesapları.",
    icon: "tripod",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "İletişim ve ihtiyaç analizi",
    description:
      "Telefon ya da WhatsApp’tan durumu anlatın; hangi işlemin gerektiğini ve nasıl ilerleyeceğimizi birlikte netleştirelim.",
  },
  {
    step: "02",
    title: "Evrak ve taşınmaz incelemesi",
    description:
      "Tapu, ada–parsel ve varsa proje bilgilerini inceliyor, eksik evrakı işe başlamadan önce bildiriyoruz.",
  },
  {
    step: "03",
    title: "Saha ölçümü ve teknik çalışma",
    description:
      "Araziye çıkıp ölçümü yapıyor, verileri büroda hesaplayarak teknik dosyayı hazırlıyoruz.",
  },
  {
    step: "04",
    title: "İşlemin tamamlanması ve teslim",
    description:
      "İşlemi ilgili kurum nezdinde sonuçlandırıp belgeleri size teslim ediyoruz.",
  },
];

/**
 * Ana sayfadaki görünür SSS. Cevaplar blog yazılarındaki cümlelerin kopyası
 * değildir; kesin süre veya sonuç garantisi verilmez.
 */
export const homeFaq = [
  {
    question: "LİHKAB nedir?",
    answer:
      "Lisanslı harita kadastro bürosunun kısaltmasıdır. Kadastro teknik hizmetlerini, Tapu ve Kadastro Genel Müdürlüğü’nün belirlediği çerçevede yürütmek üzere lisans almış harita mühendislerince işletilir. Aslantürk Harita resmî bir LİHKAB ofisidir.",
  },
  {
    question: "Aplikasyon işlemi ne için yapılır?",
    answer:
      "Tapuda kayıtlı parsel sınırlarının arazide zemine uygulanması için yapılır. Yapı, duvar veya bahçe düzenlemesinden önce sınırın nereden geçtiğini net biçimde görmenizi sağlar.",
  },
  {
    question: "Parsel sınırının belirlenmesi için hangi bilgiler gerekir?",
    answer:
      "İl, ilçe, mahalle veya köy bilgisiyle birlikte ada ve parsel numarası gerekir; bu bilgiler tapu belgenizde yer alır. Talebin taşınmaz maliki ya da yetkili temsilcisi tarafından yapılması gerekir. İstenen belgeler işlem türüne göre değişebilir.",
  },
  {
    question: "Harita ve kadastro işlemleri ne kadar sürer?",
    answer:
      "Tek bir standart süre yoktur. Süre; işlem türüne, taşınmazın durumuna, evrakın tam olmasına ve ilgili kurumun incelemesine göre değişir. Durumunuzu WhatsApp’tan ya da telefonla iletirseniz adımları ve öngörümüzü baştan anlatalım.",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

/** public/ klasöründeki gerçek saha fotoğrafları. Stok görsel kullanılmadı. */
export const gallery: GalleryItem[] = [
  {
    src: "/yapi-aplikasyon-gnss.jpg",
    alt: "Yeni yapılmış bir evin önünde GNSS anteni ve el terminaliyle yapılan ölçüm çalışması",
    caption: "Yapı sonrası kontrol ölçümü",
  },
  {
    src: "/tarim-arazisi-olcum.jpg",
    alt: "Tarım arazisinde GNSS direği ve el terminaliyle alınan nokta ölçümü",
    caption: "Tarım arazisinde sınır ölçümü",
  },
  {
    src: "/drone-ucus-plani.jpg",
    alt: "Arazi üzerinde uçuş planı görüntülenen insansız hava aracı kumandası",
    caption: "İnsansız hava aracıyla alan çalışması",
  },
  {
    src: "/altyapi-kazi-olcum.jpg",
    alt: "Kazı alanında el terminali ve ölçüm direğiyle yapılan altyapı ölçümü",
    caption: "Kazı ve altyapı ölçümü",
  },
  {
    src: "/ruzgar-turbini-olcum.jpg",
    alt: "Rüzgâr türbininin altında kurulmuş GNSS ölçüm ekipmanı",
    caption: "Enerji yatırımlarında ölçüm",
  },
  {
    src: "/dere-kenari-olcum.jpg",
    alt: "Dere kenarındaki arazide GNSS direğiyle nokta ölçümü alınması",
    caption: "Doğal sınırlarda ölçüm",
  },
  {
    src: "/gunes-enerjisi-santrali.jpg",
    alt: "Güneş enerjisi santrali sahasında panel sıraları ve saha yolu",
    caption: "Güneş enerjisi santrali sahası",
  },
  {
    src: "/arazi-veri-islem.jpg",
    alt: "Arazide dizüstü bilgisayarla ölçüm verilerini kontrol eden teknik personel",
    caption: "Sahada veri kontrolü",
  },
];
