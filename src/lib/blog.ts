/**
 * Blog içerikleri: CMS veya ek bağımlılık olmadan, tip güvenli ve semantik
 * biçimde render edilebilen bir veri modeli. HTML string tutulmaz;
 * dangerouslySetInnerHTML kullanılmaz.
 */

/** Metin içinde bağlantı gerektiğinde kullanılan satır içi düğüm. */
export type InlineNode = string | { text: string; href: string; external?: boolean };

export type BlogSection =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; content: InlineNode[] }
  | { type: "list"; ordered?: boolean; items: InlineNode[][] }
  | { type: "note"; title: string; content: InlineNode[] }
  | { type: "sources"; items: { label: string; url: string }[] };

export type BlogFaq = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  /** Yayın tarihi (ISO). Gerçek tarih kullanılır, geriye tarih atılmaz. */
  publishedAt: string;
  /** Yalnızca içerik gerçekten güncellendiğinde doldurulur. */
  updatedAt?: string;
  author: string;
  category: string;
  readingTime: string;
  coverImage: string;
  coverAlt: string;
  sections: BlogSection[];
  faq?: BlogFaq[];
};

const TKGM = "https://www.tkgm.gov.tr/";
const TKGM_LIHKAB = "https://www.tkgm.gov.tr/lihkab";
const KANUN_5368 =
  "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=5368&MevzuatTur=1&MevzuatTertip=5";

const genelBilgilendirme: BlogSection = {
  type: "note",
  title: "Bu yazı genel bilgilendirme amaçlıdır",
  content: [
    "Harita ve kadastro işlemlerinde izlenecek adımlar, istenen evraklar ve süreler; taşınmazın durumuna, işlem türüne ve ilgili kurumun incelemesine göre değişir. Kendi taşınmazınız için net bilgi almak isterseniz ada–parsel bilgisiyle ",
    { text: "bize ulaşın", href: "/#iletisim" },
    ".",
  ],
};

type BlogPostInput = Omit<BlogPost, "readingTime">;

const posts: BlogPostInput[] = [
  {
    slug: "aplikasyon-nedir-parsel-siniri-nasil-belirlenir",
    title: "Aplikasyon Nedir? Parsel Sınırı Nasıl Belirlenir?",
    seoTitle: "Aplikasyon Nedir? Parsel Sınırı Nasıl Belirlenir?",
    description:
      "Aplikasyon işlemi nedir, hangi durumlarda gerekir ve parsel sınırları arazide nasıl gösterilir? LİHKAB ofisinin rolü ve sık yapılan yanlışlar.",
    excerpt:
      "Tapuda kayıtlı sınırların arazide nerede olduğunu görmek için yapılan aplikasyon işlemini, gereken bilgileri ve saha ölçüm sürecini açıklıyoruz.",
    publishedAt: "2026-08-03",
    author: "Aslantürk Harita",
    category: "Kadastro İşlemleri",
    coverImage: "/yapi-aplikasyon-gnss.jpg",
    coverAlt:
      "Yeni yapılmış bir evin önünde GNSS anteni ve el terminaliyle yapılan aplikasyon ölçümü",
    sections: [
      {
        type: "paragraph",
        content: [
          "Aplikasyon, tapu kütüğünde kayıtlı bir taşınmazın sınırlarının, kadastro kayıtlarındaki ölçü değerlerine göre arazide zemine uygulanmasıdır. Kısacası “tapudaki parselin sınırı arazide tam olarak nereden geçiyor?” sorusunun teknik cevabıdır. İşlem sonunda sınır köşeleri zeminde işaretlenir ve yapılan çalışma bir kroki ile belgelenir.",
        ],
      },
      { type: "heading", level: 2, text: "Aplikasyon nedir?" },
      {
        type: "paragraph",
        content: [
          "Kadastro çalışmalarında her parselin köşe noktaları ölçülür ve koordinat değerleriyle kayıt altına alınır. Aplikasyon, bu kayıtlı değerlerin tersine çevrilmiş hâlidir: kayıttaki koordinatlar araziye taşınır ve parselin köşeleri zeminde gösterilir. Bu nedenle aplikasyon yeni bir sınır oluşturmaz; hâlihazırda kayıtlı olan sınırı görünür kılar.",
        ],
      },
      {
        type: "paragraph",
        content: [
          "İşlem teknik bir tespittir. Taşınmazın hukuki durumunu, yüzölçümünü veya tapu kaydını kendiliğinden değiştirmez. Tapu kaydında bir değişiklik gerekiyorsa bu, cins değişikliği, birleştirme veya ayırma gibi ayrı işlemlerin konusudur.",
        ],
      },
      { type: "heading", level: 2, text: "Hangi durumlarda aplikasyon gerekir?" },
      {
        type: "list",
        items: [
          ["Arsanıza yapı yaptırmadan önce sınırların zeminde net olarak bilinmesi gerektiğinde"],
          ["Duvar, çit veya bahçe düzenlemesi yapılmadan önce komşu sınırının konumu belirlenirken"],
          ["Satın alacağınız taşınmazın arazideki karşılığını görmek istediğinizde"],
          ["Uzun süredir kullanılmayan bir tarlanın veya arazinin sınırları belirsiz hâle geldiğinde"],
          ["Komşu parselle sınır konusunda tereddüt oluştuğunda teknik durumun ortaya konması için"],
        ],
      },
      { type: "heading", level: 2, text: "Parsel sınırı arazide nasıl belirlenir?" },
      { type: "heading", level: 3, text: "Ada ve parsel bilgisinin rolü" },
      {
        type: "paragraph",
        content: [
          "Çalışmanın başlangıç noktası taşınmazın kimliğidir: il, ilçe, mahalle/köy ile ada ve parsel numarası. Bu bilgiler tapu belgenizde yer alır. Ada–parsel bilgisi olmadan hangi parselin ölçüleceği belirlenemez; bu yüzden işlem talebinde ilk istenen bilgi budur. Taşınmazın maliki veya yetkili temsilcisi olarak talepte bulunmanız gerekir.",
        ],
      },
      { type: "heading", level: 3, text: "Saha ölçümü nasıl yapılır?" },
      {
        type: "paragraph",
        content: [
          "Büroda kadastro kayıtlarındaki ölçü değerleri incelenir ve araziye çıkılacak noktalar hazırlanır. Sahada GNSS alıcısı ya da total station gibi hassas ölçüm cihazlarıyla, ülke koordinat sistemine dayalı olarak parsel köşeleri zemine uygulanır. Köşe noktaları kazık, çivi veya benzeri işaretlerle belirtilir; ölçüler büroda kontrol edilir ve çalışma krokiye işlenir.",
        ],
      },
      {
        type: "paragraph",
        content: [
          "Arazinin eğimi, bitki örtüsü, mevcut yapılar ve ulaşım koşulları çalışma süresini etkiler. Bu nedenle her taşınmaz için tek bir standart süre vermek doğru olmaz. Ölçüm ekipmanlarımızla yaptığımız saha çalışmalarına ",
          { text: "çalışmalarımız bölümünden", href: "/#calismalarimiz" },
          " göz atabilirsiniz.",
        ],
      },
      { type: "heading", level: 2, text: "LİHKAB ofisinin rolü" },
      {
        type: "paragraph",
        content: [
          "Aplikasyon, kadastro teknik hizmetleri kapsamındadır ve lisanslı harita kadastro büroları (LİHKAB) tarafından yürütülebilir. Lisanslı bürolar, Tapu ve Kadastro Genel Müdürlüğü’nün belirlediği çerçevede çalışır; hizmet bedelleri de kurumun yayımladığı tarifeye göre uygulanır. Bu yapı, işlemin kayıt altında ve belirli bir standartta yürütülmesini sağlar. Ayrıntı için ",
          { text: "LİHKAB nedir yazımızı", href: "/blog/lihkap-nedir-hangi-islemleri-yapar" },
          " okuyabilirsiniz.",
        ],
      },
      { type: "heading", level: 2, text: "Sık yapılan yanlışlar" },
      {
        type: "list",
        items: [
          [
            "Çit veya duvarı ölçüm yaptırmadan örmek. Sonradan sınırın farklı çıkması, yapılan imalatın taşınmasına yol açabilir.",
          ],
          [
            "Eski taş, ağaç veya hendek gibi işaretleri sınır kabul etmek. Bu işaretler zamanla yer değiştirebilir; esas olan kadastro kayıtlarıdır.",
          ],
          [
            "Aplikasyonun hukuki uyuşmazlığı sonlandıracağını düşünmek. Aplikasyon teknik bir tespittir; taraflar arasındaki anlaşmazlık devam ediyorsa süreç hukuki boyut kazanabilir.",
          ],
          [
            "Ada–parsel bilgisi ve tapu belgesi olmadan işlem başlatmayı beklemek. Eksik bilgi süreci en baştan geciktirir.",
          ],
        ],
      },
      genelBilgilendirme,
      { type: "heading", level: 2, text: "Amasya’da aplikasyon işlemi için" },
      {
        type: "paragraph",
        content: [
          "Aslantürk Harita olarak Amasya ve çevresinde aplikasyon, sınır tespiti ve arazi ölçüm işlerini yürütüyoruz. Taşınmazınızın ada–parsel bilgisini iletin; hangi adımların gerektiğini ve nasıl ilerleyeceğimizi baştan konuşalım. Tüm hizmetlerimizi ",
          { text: "hizmetler bölümünde", href: "/#hizmetler" },
          " bulabilirsiniz.",
        ],
      },
      {
        type: "sources",
        items: [
          { label: "Tapu ve Kadastro Genel Müdürlüğü", url: TKGM },
          { label: "TKGM — LİHKAB sayfası", url: TKGM_LIHKAB },
        ],
      },
    ],
    faq: [
      {
        question: "Aplikasyon için hangi bilgiler gerekir?",
        answer:
          "Taşınmazın il, ilçe, mahalle/köy bilgisi ile ada ve parsel numarası gerekir. Talebin taşınmaz maliki ya da yetkili temsilcisi tarafından yapılması gerekir; istenen belgeler işlem türüne göre değişebilir.",
      },
      {
        question: "Aplikasyon tapu kaydını değiştirir mi?",
        answer:
          "Hayır. Aplikasyon, kayıtlı sınırın arazide gösterilmesidir. Tapu kaydında değişiklik gerektiren durumlar cins değişikliği, birleştirme veya ayırma gibi ayrı işlemlerle yürütülür.",
      },
      {
        question: "Sınır işaretleri kaybolursa ne olur?",
        answer:
          "Zemindeki işaretler zamanla yer değiştirebilir veya kaybolabilir. Böyle durumlarda sınırın yeniden gösterilmesi için işlemin tekrarlanması gerekebilir.",
      },
    ],
  },

  {
    slug: "cins-degisikligi-nedir-nasil-yapilir",
    title: "Cins Değişikliği Nedir ve Nasıl Yapılır?",
    seoTitle: "Cins Değişikliği Nedir ve Nasıl Yapılır?",
    description:
      "Taşınmazın cinsinin tapu kaydında güncellenmesi olan cins değişikliği işlemi hangi durumlarda gerekir, ölçüm ve teknik dosya süreci nasıl ilerler?",
    excerpt:
      "Arsa üzerine yapı yapıldığında ya da taşınmazın fiili durumu değiştiğinde gündeme gelen cins değişikliği işlemini adım adım açıklıyoruz.",
    publishedAt: "2026-08-03",
    author: "Aslantürk Harita",
    category: "Tapu İşlemleri",
    coverImage: "/arazi-veri-islem.jpg",
    coverAlt:
      "Arazide dizüstü bilgisayarla ölçüm verilerini kontrol eden harita teknik personeli",
    sections: [
      {
        type: "paragraph",
        content: [
          "Cins değişikliği, bir taşınmazın tapu kütüğünde yazılı cinsinin (niteliğinin) zemindeki güncel durumuna uygun hâle getirilmesidir. En bilinen örneği, üzerine bina yapılan bir arsanın kaydının yapıyı içerecek şekilde güncellenmesidir. İşlem, saha ölçümü ve teknik dosya hazırlığını içerir; sonuçlandırma ilgili kurumun incelemesine bağlıdır.",
        ],
      },
      { type: "heading", level: 2, text: "Cins değişikliği ne demek?" },
      {
        type: "paragraph",
        content: [
          "Tapu kütüğünde her taşınmazın bir cinsi vardır: arsa, tarla, bahçe, bina gibi. Zaman içinde taşınmazın fiili durumu değişebilir. Kayıt ile arazideki durum birbirinden ayrıldığında, kaydın güncellenmesi gerekir. Cins değişikliği tam olarak bu güncellemeyi ifade eder ve taşınmazın kimliğini doğru gösterebilmesi açısından önemlidir.",
        ],
      },
      { type: "heading", level: 2, text: "Hangi durumlarda gerekir?" },
      {
        type: "list",
        items: [
          ["Arsa üzerine yeni bir yapı yapıldığında"],
          ["Mevcut yapı yıkıldığında ve taşınmaz yeniden arsa durumuna geldiğinde"],
          ["Yapıda, kayda yansıması gereken kalıcı bir değişiklik olduğunda"],
          ["Taşınmazın fiili kullanımı kayıttaki cinsinden farklı hâle geldiğinde"],
        ],
      },
      {
        type: "paragraph",
        content: [
          "Kredi, satış, ruhsat veya abonelik gibi süreçlerde tapu kaydı ile zemindeki durumun uyumlu olması beklenir. Bu nedenle cins değişikliği çoğu zaman başka bir işlemin ön şartı olarak gündeme gelir.",
        ],
      },
      { type: "heading", level: 2, text: "Zemindeki mevcut durumun önemi" },
      {
        type: "paragraph",
        content: [
          "İşlemin dayanağı, taşınmazın arazideki güncel hâlidir. Yapının parsel içindeki konumu, oturduğu alan ve sınırlara olan mesafesi ölçülerek belirlenir. Bu nedenle çalışma masa başında tamamlanamaz; mutlaka saha ölçümü gerekir. Yapının konumu parsel sınırlarıyla birlikte değerlendirildiği için, gerektiğinde ",
          {
            text: "aplikasyon ve sınır tespiti",
            href: "/blog/aplikasyon-nedir-parsel-siniri-nasil-belirlenir",
          },
          " çalışması da sürecin parçası olur.",
        ],
      },
      { type: "heading", level: 2, text: "Ölçüm ve teknik dosya süreci" },
      {
        type: "list",
        ordered: true,
        items: [
          [
            "Talep ve ön inceleme: Ada–parsel bilgisi, tapu kaydı ve varsa yapıya ilişkin belgeler değerlendirilir.",
          ],
          [
            "Saha ölçümü: Parsel sınırları ve yapının konumu hassas ölçüm cihazlarıyla ölçülür.",
          ],
          [
            "Büro çalışması: Ölçü verileri hesaplanır, çizimler hazırlanır ve teknik dosya oluşturulur.",
          ],
          [
            "Kurum incelemesi ve tescil: Hazırlanan dosya ilgili kadastro ve tapu birimlerince incelenir; uygun bulunduğunda kayıt güncellenir.",
          ],
        ],
      },
      {
        type: "paragraph",
        content: [
          "Bu adımlardan hangilerinin nasıl ilerleyeceği taşınmazın durumuna göre değişebilir. Çalışma yöntemimizin genel akışını ",
          { text: "ana sayfadaki çalışma süreci bölümünde", href: "/#surec" },
          " görebilirsiniz.",
        ],
      },
      { type: "heading", level: 2, text: "Evraklar işleme göre değişir" },
      {
        type: "paragraph",
        content: [
          "Cins değişikliğinde istenen belgeler tek bir listeye indirgenemez. Taşınmazın niteliği, yapının durumu ve talebin kapsamı istenen evrakı değiştirir; yapıya ilişkin izin ve ruhsat belgeleri işlem türüne göre gerekebilir. Mevzuat da zaman içinde güncellenir. Bu yüzden doğru yaklaşım, işleme başlamadan önce taşınmazın kaydını incelemek ve eksik evrakı baştan belirlemektir. Biz de sürece bu inceleme ile başlıyoruz.",
        ],
      },
      { type: "heading", level: 2, text: "Kurum incelemesi ve süre" },
      {
        type: "paragraph",
        content: [
          "Teknik dosya hazırlandıktan sonra işlemin sonuçlanması ilgili kurumun incelemesine bağlıdır. Yoğunluk, evrak durumu ve taşınmazın özel şartları süreyi etkiler. Bu nedenle kesin bir gün sayısı ya da sonuç garantisi vermek doğru olmaz; size verebileceğimiz en sağlıklı bilgi, dosyanın hangi aşamada olduğunu şeffaf biçimde paylaşmaktır.",
        ],
      },
      genelBilgilendirme,
      { type: "heading", level: 2, text: "Amasya’da cins değişikliği için" },
      {
        type: "paragraph",
        content: [
          "Taşınmazınızın kaydı ile zemindeki durumu arasında fark olduğunu düşünüyorsanız, ada–parsel bilgisiyle bize yazın. Durumu inceleyip hangi işlemin gerektiğini ve nasıl ilerleyeceğimizi anlatalım. Diğer hizmetlerimiz için ",
          { text: "hizmetler bölümüne", href: "/#hizmetler" },
          " bakabilir, dilerseniz doğrudan ",
          { text: "iletişim bölümünden", href: "/#iletisim" },
          " ulaşabilirsiniz.",
        ],
      },
      {
        type: "sources",
        items: [
          { label: "Tapu ve Kadastro Genel Müdürlüğü", url: TKGM },
          { label: "TKGM — LİHKAB sayfası", url: TKGM_LIHKAB },
        ],
      },
    ],
    faq: [
      {
        question: "Cins değişikliği için saha ölçümü şart mı?",
        answer:
          "Evet. İşlem taşınmazın zemindeki güncel durumuna dayandığı için yapının konumu ve parsel sınırları arazide ölçülür.",
      },
      {
        question: "İşlem ne kadar sürer?",
        answer:
          "Sabit bir süre yoktur. Saha çalışması, teknik dosyanın hazırlanması ve kurum incelemesi taşınmazın durumuna göre değişir. Dosyanızın hangi aşamada olduğunu süreç boyunca paylaşıyoruz.",
      },
      {
        question: "Hangi belgeler gerekir?",
        answer:
          "İstenen belgeler işlem türüne ve taşınmazın durumuna göre değişir. Kaydı inceleyip eksik evrakı işe başlamadan önce bildiriyoruz.",
      },
    ],
  },

  {
    slug: "lihkap-nedir-hangi-islemleri-yapar",
    title: "LİHKAB Nedir? Hangi İşlemleri Yapar?",
    seoTitle: "LİHKAB Nedir? Hangi İşlemleri Yapar?",
    description:
      "LİHKAB (lisanslı harita kadastro bürosu) nedir, hangi kadastro teknik hizmetlerini yürütür ve resmî bir LİHKAB ofisiyle çalışmak neden önemlidir?",
    excerpt:
      "Lisanslı harita kadastro bürolarının rolünü, yürüttüğü başlıca işlemleri ve resmî bir ofisle çalışmanın ne anlama geldiğini açıklıyoruz.",
    publishedAt: "2026-08-03",
    author: "Aslantürk Harita",
    category: "Rehber",
    coverImage: "/drone-ucus-plani.jpg",
    coverAlt:
      "Arazi üzerinde uçuş planı görüntülenen insansız hava aracı kumandasıyla yürütülen harita çalışması",
    sections: [
      {
        type: "paragraph",
        content: [
          "LİHKAB, “lisanslı harita kadastro bürosu” ifadesinin kısaltmasıdır. Bu bürolar, kadastro teknik hizmetlerini Tapu ve Kadastro Genel Müdürlüğü’nün belirlediği çerçevede yürütmek üzere lisans almış harita mühendislerince işletilir. Aplikasyon, cins değişikliği, birleştirme ve ayırma gibi işlemlerin teknik kısmı bu bürolar aracılığıyla yapılabilir.",
        ],
      },
      { type: "heading", level: 2, text: "LİHKAB kavramı nereden geliyor?" },
      {
        type: "paragraph",
        content: [
          "Lisanslı harita kadastro mühendisleri ve bürolarının çalışma esasları, ",
          {
            text: "5368 sayılı Lisanslı Harita Kadastro Mühendisleri ve Büroları Hakkında Kanun",
            href: KANUN_5368,
            external: true,
          },
          " ile düzenlenmiştir. Kanun 29 Haziran 2005 tarihli Resmî Gazete’de yayımlanmıştır. Amaç, kadastro teknik hizmetlerinin belirli bir standartta ve yetkilendirilmiş bürolar eliyle yürütülmesidir.",
        ],
      },
      {
        type: "paragraph",
        content: [
          "Lisans, mevzuatta belirlenen şartların sağlanması ve öngörülen süreçlerin tamamlanmasıyla verilir. Büroların işleyişi, hizmet kapsamı ve bedelleri kurumun düzenlemelerine tabidir.",
        ],
      },
      { type: "heading", level: 2, text: "LİHKAB hangi işlemleri yapar?" },
      {
        type: "paragraph",
        content: [
          "Lisanslı büroların yürüttüğü başlıca kadastro teknik hizmetleri şunlardır:",
        ],
      },
      {
        type: "list",
        items: [
          [
            {
              text: "Aplikasyon",
              href: "/blog/aplikasyon-nedir-parsel-siniri-nasil-belirlenir",
            },
            ": Tapuda kayıtlı sınırların arazide zemine uygulanması.",
          ],
          ["Parsel sınır tespiti ve yer gösterme: Parsel köşelerinin arazide belirlenmesi."],
          [
            {
              text: "Cins değişikliği",
              href: "/blog/cins-degisikligi-nedir-nasil-yapilir",
            },
            ": Taşınmazın cinsinin zemindeki duruma göre kayıtta güncellenmesi.",
          ],
          [
            "Birleştirme (tevhit) ve ayırma (ifraz): Parsellerin birleştirilmesi veya bölünmesi için gereken teknik çalışma.",
          ],
          ["Teknik ölçüm, hesap ve dosya hazırlığı: İşlemin dayanağı olan saha ve büro çalışması."],
        ],
      },
      {
        type: "paragraph",
        content: [
          "Hangi işlemin hangi büro veya kurum tarafından yürütüleceği mevzuatla belirlenir ve zaman içinde güncellenebilir. Güncel kapsam için ",
          { text: "TKGM’nin LİHKAB sayfasını", href: TKGM_LIHKAB, external: true },
          " inceleyebilirsiniz.",
        ],
      },
      { type: "heading", level: 2, text: "Resmî bir LİHKAB ofisiyle çalışmak" },
      {
        type: "paragraph",
        content: [
          "Lisanslı bir büroyla çalışmanın en somut faydası, işlemin tanımlı bir çerçevede yürütülmesidir: çalışma kurumun düzenlemelerine tabidir, hizmet bedelleri kurumun yayımladığı tarifeye göre uygulanır ve üretilen teknik dosya ilgili birimlerin incelemesine sunulabilecek biçimde hazırlanır. Bu da hem sürecin izlenebilir olmasını hem de sonradan düzeltme ihtiyacının azalmasını sağlar.",
        ],
      },
      {
        type: "paragraph",
        content: [
          "Taşınmaz işlemlerinde ölçünün doğruluğu, sonradan telafisi zor sonuçlar doğurabilecek bir konudur. Yanlış konumlandırılmış bir sınır; yapı, duvar veya proje kararlarını doğrudan etkiler.",
        ],
      },
      { type: "heading", level: 2, text: "Aslantürk Harita: Amasya’da resmî LİHKAB ofisi" },
      {
        type: "paragraph",
        content: [
          "Aslantürk Harita, 15 yıldır Amasya’da harita mühendisliği ve kadastro işlerini yürüten resmî bir LİHKAB ofisidir. Saha ölçümünü ve büro çalışmasını tek elden yapıyor, dosyayı ilgili kuruma teslim edilebilir hâle getirdikten sonra kapatıyoruz. Hangi işlemin gerektiğinden emin değilseniz, ada–parsel bilgisiyle ",
          { text: "bize ulaşın", href: "/#iletisim" },
          "; birlikte netleştirelim.",
        ],
      },
      genelBilgilendirme,
      {
        type: "sources",
        items: [
          { label: "Tapu ve Kadastro Genel Müdürlüğü", url: TKGM },
          { label: "TKGM — LİHKAB sayfası", url: TKGM_LIHKAB },
          { label: "5368 sayılı Kanun — Mevzuat Bilgi Sistemi", url: KANUN_5368 },
        ],
      },
    ],
    faq: [
      {
        question: "LİHKAB ile kadastro müdürlüğü aynı şey mi?",
        answer:
          "Hayır. LİHKAB, kadastro teknik hizmetlerini yürütmek üzere lisans almış özel bürodur. Kadastro ve tapu müdürlükleri ise kamu birimleridir; işlemin incelenmesi ve tescili bu birimlerce yapılır.",
      },
      {
        question: "LİHKAB hizmet bedelleri nasıl belirlenir?",
        answer:
          "Hizmet bedelleri, Tapu ve Kadastro Genel Müdürlüğü’nün yayımladığı tarifeye göre uygulanır. Bu nedenle bedel, büronun serbestçe belirlediği bir fiyat değildir.",
      },
      {
        question: "Her harita bürosu LİHKAB mıdır?",
        answer:
          "Hayır. LİHKAB, mevzuatta tanımlı şartları sağlayarak lisans almış bürolar için kullanılan bir tanımdır. Aslantürk Harita resmî bir LİHKAB ofisidir.",
      },
    ],
  },
];

/** Okuma süresi içerikten hesaplanır; elle tahmini değer yazılmaz. */
function readingTimeOf(post: BlogPostInput): string {
  const inlineWords = (nodes: InlineNode[]) =>
    nodes.map((node) => (typeof node === "string" ? node : node.text)).join(" ");

  const text = post.sections
    .map((section) => {
      switch (section.type) {
        case "heading":
          return section.text;
        case "paragraph":
          return inlineWords(section.content);
        case "note":
          return `${section.title} ${inlineWords(section.content)}`;
        case "list":
          return section.items.map(inlineWords).join(" ");
        case "sources":
          return section.items.map((item) => item.label).join(" ");
      }
    })
    .join(" ");

  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(2, Math.round(words / 200))} dk okuma`;
}

export const blogPosts: BlogPost[] = posts.map((post) => ({
  ...post,
  readingTime: readingTimeOf(post),
}));

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Bir yazının detay sayfasında gösterilecek diğer yazılar. */
export function relatedPosts(slug: string, limit = 2): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, limit);
}

export const blogMeta = {
  title: "Harita ve Kadastro Rehberi",
  description:
    "Aplikasyon, LİHKAB, cins değişikliği, parsel sınırı ve harita mühendisliği işlemleri hakkında anlaşılır bilgiler.",
};
