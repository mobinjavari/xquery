interface LandingSection {
  subject: string,
  title: string,
  desc: string,
  items: object
}

export default {
  name: "xQuery",
  header: {
    login: {
      text: "Panel Girişi",
      to: '/redirect/cpanel',
      icon: 'LoginIcon',
    }
  },
  landing: {
    title: "Yazılım Geliştirme ve Programlama Ekibi",
    desc: "xQuery ekibi tarafından özel programlama, web tasarımı, uygulama geliştirme, sistem geliştirme, otomasyon ve bakım hizmetleri sağlanmaktadır.",
    keywords: "xQuery, programlama, yazılım geliştirme, web tasarımı, uygulama geliştirme, programlama hizmetleri, geliştirme ekibi, yazılım projeleri, xQuery ekibi, xQuery team",
    hero: {
      title: "Merhaba, ben xQuery!",
      desc: "Ben yorulmayan zeki bir robotum ve her zaman işinizi optimize etmek ve otomatikleştirmek için hazır durumdayım. Beni edinmek için sadece geliştiricimle iletişime geçmeniz yeterli!",
      buttons: [
        {
          text: "Telegram Kanalı",
          to: '/redirect/telegram-channel',
          icon: 'TelegramIcon',
          isPrimary: true,
        },
        {
          text: "Danışmanlık Talebi",
          to: '/redirect/telegram-support',
          icon: 'MessageIcon',
          isPrimary: false,
        },
      ]
    },
    whyus: <LandingSection> {
      subject: "Neden Biz?",
      title: "Geleceği Bugünden İnşa Edin",
      desc: "Yaratıcılık, yeni teknolojiler ve yapay zekayı birleştirerek işiniz için daha akıllı bir gelecek inşa ediyoruz.",
      items: [
        {
          title: 'Hızlı ve Akıllı Performans',
          desc: 'Gelişmiş algoritmalar sayesinde sisteminizin hızı ve verimliliği artar.',
          icon: 'FlashIcon',
        },
        {
          title: 'Yüksek Güvenlik ve Güvenilirlik',
          desc: 'En yeni güvenlik protokolleri ile verileriniz güvenle korunur.',
          icon: 'ShieldIcon',
        },
        {
          title: 'Sürekli Destek',
          desc: 'Destek ekibimiz 7/24 sorularınızı yanıtlamaya ve sorunları çözmeye hazırdır.',
          icon: 'ChatBubbleIcon',
        },
      ]
    },
    services: <LandingSection> {
      subject: "Hizmetlerimiz",
      title: "Profesyonel Hizmet ve Çözümler",
      desc: "İşinizin dijital dönüşümü ve büyümesi için akıllı çözümler ve profesyonel hizmetler sunuyoruz.",
      items: [
        {
          title: "Yapay Zeka",
          desc: "İş süreçlerini gelişmiş yapay zeka algoritmaları ile optimize edin.",
          icon: 'SparklesIcon',
        },
        {
          title: "Otomasyon",
          desc: "Özel ihtiyaçlarınıza uygun süreçleri otomatikleştirin.",
          icon: 'FlashIcon',
        },
        {
          title: "Hosting",
          desc: "7/12 destekli güvenilir hosting ve kapsamlı güvenlik çözümleri.",
          icon: 'MonitorIcon',
        },
      ]
    },
    technologies: <LandingSection> {
      subject: "Teknolojilerimiz",
      title: "Daha İyi Bir Gelecek için Gelişmiş Teknoloji",
      desc: "Hızlı ve doğru hizmet sunmak için en yeni teknolojileri kullanıyoruz.",
      items: [
        { name: 'Temiz Kodlama', icon: 'BranchIcon' },
        { name: 'Yüksek Hız', icon: 'SpeedIcon' },
        { name: 'Gelişmiş Güvenlik', icon: 'SecurityIcon' },
        { name: 'Yapay Zeka', icon: 'AlignBottomIcon' },
      ]
    },
    features: <LandingSection> {
      subject: "Avantajlarımız",
      title: "Bizi Farklı Kılan Değerler",
      desc: "Uzmanlık, yenilikçi teknolojiler ve benzersiz müşteri deneyimini birleştiriyoruz.",
      items: [
        {
          title: 'Gelişmiş Yapay Zeka',
          desc: 'Verileri modern algoritmalar ile analiz ve işleyin.',
          icon: 'SparklesIcon'
        },
        {
          title: 'Üstün Hız',
          desc: 'Her koşulda hızlı ve kesintisiz performans için optimize tasarım.',
          icon: 'FlashIcon'
        },
        {
          title: 'Çok Katmanlı Güvenlik',
          desc: 'Verileriniz en yeni güvenlik protokolleriyle korunur.',
          icon: 'LockIcon'
        }
      ]
    },
    stats: <LandingSection> {
      subject: "Başarılarımız",
      title: "Güveninize Dayalı Büyüme",
      desc: "Sizin güveniniz, ilerleme ve yenilik yolundaki itici gücümüzdür.",
      items: [
        { label: 'Aktif Kullanıcı', start: 0, end: 1000, suffix: '+' },
        { label: 'Başarılı Proje', start: 0, end: 200, suffix: '+' },
        { label: 'Destek Saatleri', start: 0, end: 12, suffix: '/7' },
        { label: 'Müşteri Memnuniyeti', start: 0, end: 99, suffix: '%' },
      ]
    },
    pricing: <LandingSection> {
      subject: "Hosting Planları",
      title: "Büyümeniz için Güvenilir Hosting",
      desc: "Hızlı, güvenli ve uygun maliyetli hosting; çevrimiçi varlığınız için sağlam bir temel.",
      suggested: "Özel Teklif",
      order: "Sipariş",
      items: [
        {
          name: 'Başlangıç Planı',
          desc: 'Startup’lar ve küçük projeler için uygun',
          icon: 'StatsIcon',
          price: '$2.99',
          cycle: 'Aylık',
          features: [
            'Hosting Alanı: 5 GB',
            'Bant Genişliği: Sınırsız',
            '7/12 Destek',
            'Günlük Yedekleme'
          ],
          orderLink: '/redirect/telegram-support'
        },
        {
          name: 'Profesyonel Plan',
          desc: 'Büyümekte olan işletmeler için ideal',
          icon: 'StarIcon',
          price: '$5.99',
          cycle: 'Aylık',
          isPrimary: true,
          features: [
            'Hosting Alanı: 20 GB',
            'Bant Genişliği: Sınırsız',
            '7/12 Destek',
            'Günlük + Haftalık Yedekleme',
          ],
          orderLink: '/redirect/telegram-support'
        },
        {
          name: 'Kurumsal Plan',
          desc: 'Büyük işletmeler ve projeler için özel',
          icon: 'CloudIcon',
          price: '$11.99',
          cycle: 'Aylık',
          features: [
            'Hosting Alanı: 50 GB',
            'Bant Genişliği: Sınırsız',
            'VIP 7/12 Destek',
            'Günlük + Haftalık + Aylık Yedekleme',
          ],
          orderLink: '/redirect/telegram-support'
        }
      ]
    },
    steps: <LandingSection> {
      subject: "İş Birliği Adımları",
      title: "Fikrinizi Gerçeğe Dönüştürmek için Basit Adımlar",
      desc: "Fikrinizi gerçeğe dönüştürmek ve projeyi bizimle ilerletmek için birkaç basit adım yeterli.",
      items: [
        { title: 'Bizimle İletişime Geçin', desc: 'Telegram veya e-posta ile iletişime geçin.' },
        { title: 'Ücretsiz Danışmanlık', desc: 'İhtiyaçlarınız incelenir ve en iyi çözüm sunulur.' },
        { title: 'İş Birliğine Başlayın', desc: 'Anlaşma sonrası proje başlatılır.' },
        { title: 'Nihai Teslim', desc: 'Proje en yüksek kalite ile teslim edilir.' }
      ]
    },
    experties: <LandingSection> {
      subject: "Uzmanlık Alanlarımız",
      title: "Yazılım Geliştirme Faaliyetlerimiz",
      desc: "Farklı yazılım geliştirme alanlarında yetkiniz, fikirlerinizi profesyonel ürünlere dönüştürmemizi sağlar.",
      items: [
        {
          title: 'Mobil Geliştirme',
          desc: 'iOS ve Android için yüksek performanslı native uygulamalar.',
          icon: 'MobileIcon',
          skills: ['Swift', 'Kotlin', 'Java'],
        },
        {
          title: 'Web Geliştirme',
          desc: 'Modern web siteleri tasarlayıp geliştiriyoruz.',
          icon: 'CodeIcon',
          skills: ['Vue.js', 'React', 'Laravel', 'Node.js'],
        },
        {
          title: 'Masaüstü Geliştirme',
          desc: 'Farklı işletim sistemleri için güçlü uygulamalar tasarlayın.',
          icon: 'MonitorIcon',
          skills: ['C#', 'C++', 'Swift'],
        },
        {
          title: 'Blockchain Geliştirme',
          desc: 'Akıllı sözleşmeler ve merkezi olmayan uygulamalar geliştirin.',
          icon: 'DatabaseIcon',
          skills: ['Solidity', 'Web3.js'],
        },
        {
          title: 'Sunucu ve DevOps',
          desc: 'Sunucu yönetimi, otomasyon ve CI/CD uygulamaları.',
          icon: 'ServerIcon',
          skills: ['Linux', 'Docker', 'Bash', 'Python'],
        },
        {
          title: 'UI/UX Tasarımı',
          desc: 'Modern ve kullanıcı dostu arayüz tasarımı.',
          icon: 'DesignIcon',
          skills: ['Figma', 'Photoshop'],
        },
        {
          title: 'IoT Geliştirme',
          desc: 'Akıllı sistemler ve nesnelerin interneti çözümleri.',
          icon: 'PuzzleIcon',
          skills: ['Arduino', 'RaspberryPi', 'ESP32/8266'],
        },
        {
          title: 'Telegram Geliştirme',
          desc: 'Gelişmiş Telegram botları ve Mini uygulamalar.',
          icon: 'TelegramIcon',
          skills: ['Telegram Bot', 'Mini Apps'],
        },
      ]
    },
    tools: <LandingSection> {
      subject: "Yönetim Panelleri",
      title: "Kolay Yönetim Araçları",
      desc: "Yönetim panellerimizle tüm araçlara ve raporlara hızlı ve kolay erişim sağlayabilirsiniz.",
      status: {
        active: "Aktif",
        development: "Geliştiriliyor...",
      },
      items: [
        {
          title: 'cPanel Girişi',
          desc: "Hosting ve alan adı yönetimi",
          to: '/redirect/cpanel',
          icon: 'MonitorIcon'
        },
        {
          title: 'WHM Girişi',
          desc: "Sunucu ve hesap yönetimi",
          to: '/redirect/whm',
          icon: 'LayersIcon'
        },
        {
          title: "Sunucu Durumu",
          desc: "Aktif sunucuların durum ve istatistiklerini görüntüleyin",
          redirect: null,
          icon: 'ServerIcon'
        }
      ]
    },
    faq: <LandingSection> {
      subject: "Sık Sorulan Sorular",
      title: "Sorularınıza Hızlı Cevaplar",
      desc: "En sık sorulan soruları inceleyerek hızlıca ihtiyacınız olan bilgileri edinebilirsiniz.",
      items: [
        {
          question: "Hizmetlerinizi nasıl kullanabilirim?",
          answer: "Hizmetlerimizden yararlanmak için Telegram veya e-posta ile bizimle iletişime geçin. Ekibimiz en kısa sürede yanıt verecektir."
        },
        {
          question: "Hizmet bedeli nasıl hesaplanır?",
          answer: "Ücret, projenin türüne, karmaşıklığına ve gereken süreye göre belirlenir. Kesin tahmin için ücretsiz danışmanlık alın."
        },
        {
          question: "Özelleştirme mümkün mü?",
          answer: "Evet, tüm hizmetlerimiz tamamen özelleştirilebilir ve ihtiyacınıza göre tasarlanır."
        },
        {
          question: "Proje süresi ne kadar?",
          answer: "Projenin büyüklüğüne ve karmaşıklığına bağlıdır. Danışmanlık sırasında net zaman çizelgesi sunulur."
        }
      ]
    }
  },
  redirects: {
    goNow: "Hemen Git",
    timer: "%sec% saniye içinde yönlendirileceksiniz.",
    items: [
      {
          id: 'whm',
          title: 'WHM Yönetim Paneli',
          desc: 'WHM ile birden fazla cPanel hesabını yönetebilir, sunucu kaynaklarını takip edebilir ve güvenlik/dns ayarlarını kontrol edebilirsiniz.',
          url: 'https://whm.example.org',
          icon: 'LayersIcon',
          delay: 15
      },
      {
          id: 'cpanel',
          title: 'cPanel Yönetim Paneli',
          desc: 'cPanel ile dosyalarınızı, e-postalarınızı, veritabanlarınızı ve domainlerinizi kolayca yönetebilirsiniz.',
          url: 'https://cpanel.example.org',
          icon: 'MonitorIcon',
          delay: 15
      },
      {
          id: 'telegram-channel',
          title: 'Telegram Kanalı',
          desc: 'xQuery Telegram kanalında en son haberleri, güncellemeleri ve özel fırsatları takip edebilirsiniz.',
          items: [
              'Hızlı haber ve duyurular',
              'Hizmet güncellemelerine erişim',
              'Özel kullanıcı koşullarını ve teklifler',
              'Eğitim ve teknik ipuçları'
          ],
          icon: 'TelegramIcon',
          url: 'https://t.me/username',
          delay: 15
      },
      {
          id: 'telegram-support',
          title: 'Telegram Destek',
          desc: 'Telegram üzerinden xQuery ekibi ile doğrudan iletişime geçebilirsiniz.',
          items: [
              'Hızlı yanıt ile doğrudan destek',
              'Web ve sunucu yönetimi için profesyonel danışmanlık',
              'Bireysel veya kurumsal proje siparişi',
              'Hizmet geliştirme önerileri ve geri bildirim',
              'Hızlı teknik yardım ve sorun çözümü'
          ],
          icon: 'TelegramIcon',
          url: 'https://t.me/username',
          delay: 15
      },
      {
          id: 'email-support',
          title: 'E-posta Desteği',
          desc: 'Sorularınızı ve önerilerinizi e-posta ile bize gönderebilirsiniz.',
          items: [
              'Servislerle ilgili soru ve sorun bildirme',
              'Hizmet geliştirme önerilerini iletme',
              'Kullanıcı taleplerini takip etme',
              'Sorun çözümü için ek doküman ve bilgi gönderme'
          ],
          icon: 'MailBoxIcon',
          url: 'mailto:support[.]example.org',
          delay: 15
      }
    ]
  },
  footer: {
    desc: "Yapay zeka ve ileri teknolojilerle işinizi bir üst seviyeye taşıyoruz.",
    links: {
      text: "Hızlı Erişim",
      items: [
        { text: 'WHM', to: '/redirect/whm' },
        { text: 'cPanel', to: '/redirect/cpanel' },
      ]
    },
    contact: {
      text: "Bizimle İletişime Geçin",
      items: [
        {
          icon: 'TelegramIcon',
          text: 'Telegram Kanalı',
          to: "/redirect/telegram-channel",
        },
        {
          icon: 'MailBoxIcon',
          text: 'E-posta Desteği',
          to: "/redirect/email-support",
        }
      ]
    },
    copyright:
      "Tüm hakları xQuery ekibine aittir.",
  }
}
