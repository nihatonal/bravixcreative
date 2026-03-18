export type Testimonial = {
  content: string;
  author: string;
  company: string;
};
export type AdminPanel = {
  title: string;
  content: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  client: string;
  type: string;
  category: string;
  images: string[];
  technologies: string[];
  viewLiveSite?: string;
  liveUrl?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  adminPanel?: AdminPanel;
  testimonial?: Testimonial;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
};

export const portfolioData: Record<string, Project[]> = {
  en: [
    {
      id: "1001",
      slug: "apartment-hotel-website-and-admin-panel",
      viewLiveSite: "View Site",
      liveUrl: "https://www.monihomes.com.tr",
      title: "Apartment Hotel Website & Admin Panel",
      client: "Monihomes",
      type: "web-design",
      category: "Web Design + Admin Panel",
      description:
        "Modern single-page promotional website and custom admin panel for a hotel owner. The project provides a user-friendly interface for guests and allows the owner to manage room rates and availability easily.",
      challenge:
        "The client wanted a professional but simple site to promote their hotel. Additionally, a backend system was needed to track room availability via Google Calendar and collect reservation requests efficiently.",
      solution:
        "Designed a fast and stylish landing page with React. The admin panel was built with Node.js/Express, MongoDB, and JWT. Room availability is synchronized automatically with Google Calendar. Guests submit their information via a form, which is sent to the owner via email and WhatsApp. Google Analytics data is displayed in daily, weekly, and yearly charts.",
      technologies: [
        "React",
        "Node",
        "MongoDB",
        "Tailwind CSS",
        "Google Calendar API",
      ],
      results: [
        "60% reduction in management time",
        "All requests captured 100% via email and WhatsApp",
        "Mobile-friendly design significantly improved user experience",
      ],
      testimonial: {
        content:
          "Our new website and admin panel made hotel management much easier. I can control all information in one place and guest requests reach me instantly.",
        author: "U. Dinc, Owner",
        company: "Monihomes",
      },
      images: [
        "/images/projects/monihomes_story.webp",
        "/images/projects/moniomes-2_iphones.webp",
        "/images/projects/monihomes_post.webp",
      ],
      seoTitle: "Apartment Hotel Website & Admin Panel | Bravix Creative",
      seoDescription:
        "Modern hotel website and admin panel developed for Monihomes. Professional solution with React, Node.js, and Google Calendar integration.",
      keywords: [
        "hotel website",
        "admin panel",
        "react node project",
        "bravix creative",
      ],
    },
    {
      id: "1002",
      slug: "bag-investment-website",
      viewLiveSite: "View Site",
      liveUrl: "https://konyalimemlak.web.app/",
      title: "Vineyard Investment Website",
      client: "Bag Bahçe Yatırım",
      type: "web-design",
      category: "Multilingual Web Design",
      description:
        "Modern, fast, bilingual promotional website for a vineyard investment company in the Konya region. Presents services, investment guides, and blog content while reflecting a reliable and natural brand image.",
      challenge:
        "A fast, aesthetic, and multilingual website was needed to attract investors. The design aimed to match a natural and sustainable investment theme.",
      solution:
        "Designed a responsive and visually appealing landing page with React. Used a simple layout and natural tones. Multilingual content support (i18n) included. Sections: About, Investment Process, Blog, Contact.",
      technologies: ["React", "Node", "CSS3", "i18next", "Framer Motion"],
      results: [
        "Professional design increased brand trust",
        "Bilingual interface improved accessibility for foreign investors",
        "Optimized performance for both mobile and desktop users",
      ],
      testimonial: {
        content:
          "Our website is visually appealing and offers a satisfying user experience. Communicating with investors has become much easier.",
        author: "V. Karakuş",
        company: "Bag Bahçe Yatırım",
      },
      images: [
        "/images/projects/bagbahce_multi.webp",
        "/images/projects/bby-phone.webp",
        "/images/projects/bby-2-pages.webp",
      ],
      seoTitle: "Vineyard Investment Website | Bravix Creative",
      seoDescription:
        "Modern, fast, bilingual website for a vineyard investment company in Konya. Optimized solution with React and i18next.",
      keywords: [
        "vineyard investment website",
        "multilingual site",
        "react project",
        "bravix creative",
      ],
    },
    {
      id: "1003",
      slug: "the-glass-hut-cabin-website",
      viewLiveSite: "Demo",
      liveUrl: "https://theglasshut.web.app/",
      title: "The Glass Hut – Cabin Promotional Website",
      client: "Personal Project",
      type: "web-development",
      category: "Web Development",
      description:
        "Modern and visually appealing promotional website for a glass cabin offering a nature-immersive glamping experience. Single-page design includes cabin details, surrounding area info, booking form, and FAQ.",
      challenge:
        "The client wanted a nature-friendly, simple, yet visually rich website to promote the cabin and provide easy access to information.",
      solution:
        "Built a single-page app with React and deployed via Firebase Hosting. Sections include The Hut, The Area, Booking, About Us, and FAQ. Animations and full-screen images create a calm and serene atmosphere.",
      technologies: [
        "React",
        "React Router",
        "Tailwind CSS",
        "Framer Motion",
        "Firebase Hosting",
      ],
      results: [
        "Created a clean and appealing online presence reflecting the brand",
        "Mobile-friendly design and clear navigation improved UX",
        "Increased visitor time on site",
      ],
      testimonial: {
        content:
          "Our site is exactly as we imagined: clean, stylish, and nature-friendly. Guests can now access information easily and the booking process is clearer.",
        author: "Conceptual Feedback",
        company: "Internal Review",
      },
      images: [
        "/images/projects/glasshut_multi.webp",
        "/images/projects/glasshut_screens__.webp",
        "/images/projects/glasshutscreens_.webp",
      ],
      seoTitle: "The Glass Hut – Glamping Cabin Website | Bravix Creative",
      seoDescription:
        "Single-page promotional website for a glass cabin with nature-immersive glamping experience. Easy booking and information access.",
      keywords: [
        "glamping site",
        "cabin promotional site",
        "single-page website",
        "react project",
      ],
    },
    {
      id: "1004",
      slug: "mindfulness-app-landing-page",
      viewLiveSite: "Demo",
      liveUrl: "https://theglasshut.web.app/",
      title: "Mindfulness App Landing Page",
      client: "Personal Project",
      type: "web-design",
      category: "Landing Page Design",
      description:
        "Single-page, serene, responsive website to promote the ZenMind mobile app. Uses calming colors, typography, and interactions aligned with mindfulness theme for a user-friendly experience.",
      challenge:
        "Client requested a fast-loading, mobile-friendly website reflecting the app’s calming nature. Main challenge: digitally convey mindfulness via interactive animations like breathing.",
      solution:
        "Built a responsive landing page with React and Tailwind CSS. 'Breathe In / Out' animation created using custom motion components. Design includes app promo, user reviews, pricing, and CTA buttons. White space and smooth transitions provide a calm UX.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive Web Design",
        "Lottie Animation",
      ],
      results: [
        "Mobile conversion increased by 45%",
        "UI/UX design highly appreciated by early users",
        "Clear CTA improved app downloads",
      ],
      testimonial: {
        content:
          "The landing page feels exactly like our app: calm, simple, and inspiring. Matches our brand voice perfectly.",
        author: "Conceptual Feedback",
        company: "Internal Review",
      },
      images: [
        "/images/projects/zenmind_multi.webp",
        "/images/projects/zenmind_instagram.webp",
        "/images/projects/zenmind_laptop.png",
      ],
      seoTitle: "Mindfulness App Landing Page | Bravix Creative",
      seoDescription:
        "Single-page ZenMind landing page with calming design, interactive breathing animation, and mobile-friendly experience.",
      keywords: [
        "mindfulness site",
        "ZenMind landing",
        "landing page",
        "react project",
      ],
    },
    {
      id: "1005",
      slug: "creative-flow-dashboard",
      title: "Creative Flow Dashboard UI",
      viewLiveSite: "Demo",
      liveUrl: "https://creator-flow-dashboard.netlify.app/",
      client: "Personal Project",
      type: "ui-ux",
      category: "Dashboard UI/UX",
      description:
        "Modern, responsive dashboard interface designed to streamline creators’ workflows. Focused on usability, clarity, and aesthetic balance for task, earnings, content, and analytics management.",
      challenge:
        "The goal was to build a visually appealing and functional dashboard for daily use. Main challenge: balance visual clarity and data density across mobile and desktop.",
      solution:
        "Used Figma for wireframes and high-fidelity prototypes. Designed intuitive user experience with income charts, recent activities, quick actions, and navigation. Color themes and spacing optimized focus and calmness for long-term use.",
      technologies: [
        "Figma",
        "React",
        "Tailwind CSS",
        "Responsive Design",
        "Data Visualization",
      ],
      results: [
        "Efficient workflow with minimal cognitive load",
        "Highly adaptable component system for expansion",
        "Positive feedback from creative professionals on aesthetics and usability",
      ],
      testimonial: {
        content:
          "This dashboard strikes a perfect balance between functionality and visual clarity. As a content creator, I would want to use it daily.",
        author: "Conceptual Feedback",
        company: "Internal Review",
      },
      images: [
        "/images/projects/dasboard_destkop.webp",
        "/images/projects/dashboard_2.webp",
        "/images/projects/dashboard_1.webp",
      ],
      seoTitle: "Creative Flow Dashboard UI | Bravix Creative",
      seoDescription:
        "Modern, responsive, aesthetic UI/UX dashboard for creators. Optimized for task, earnings, content, and analytics management.",
      keywords: [
        "ui/ux dashboard",
        "creative flow",
        "dashboard interface",
        "react project",
      ],
    },
    {
      id: "1006",
      slug: "fast-food-restaurant-website",
      viewLiveSite: "Live Site",
      liveUrl: "https://quick-bite-fastfood.netlify.app/",
      title: "Fast Food Restaurant Website",
      client: "Personal Project",
      type: "web-application",
      category: "Web Design + E-commerce",
      description:
        "Quick Bite offers a complete online ordering experience for a fast food restaurant. Visitors can browse a modern responsive menu, add items to cart, make secure payments, and track orders in real-time.",
      challenge:
        "The goal was to replace traditional ordering with fully integrated online ordering, payment, and delivery tracking system to improve customer experience and internal efficiency.",
      solution:
        "Built an interactive food ordering platform with React. Key features include dynamic cart system, payment integration, and real-time order tracking dashboard.",
      adminPanel: {
        title: "Admin Panel",
        content:
          "Lightweight admin panel enables staff to track incoming orders, update order status ('Preparing', 'On the Way', 'Delivered'), and securely access customer/payment info. Provides instant visibility into the order process and improves efficiency.",
      },
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Payment API",
        "Local Storage",
      ],
      results: [
        "Secure online payment and real-time delivery tracking",
        "Improved order management efficiency via admin panel",
        "Mobile-first design enhanced customer satisfaction",
      ],
      testimonial: {
        content:
          "Our customers love the ease of online ordering and payment. The order tracking feature reduced phone inquiries and improved workflow.",
        author: "Restaurant Manager",
        company: "Quick Bite",
      },
      images: [
        "/images/projects/quickbite.webp",
        "/images/projects/QB_menu.webp",
        "/images/projects/menu-page.webp",
      ],
      seoTitle: "Fast Food Restaurant Website | Bravix Creative",
      seoDescription:
        "Modern and interactive fast food website for Quick Bite. Optimized online ordering, payment, and real-time tracking.",
      keywords: [
        "fast food website",
        "online ordering",
        "restaurant panel",
        "react project",
      ],
    },
    {
      id: "1007",
      slug: "ta-travel-web-site",
      title: "TA-Travel Website",
      liveUrl: "https://www.ta-travel.ru/",
      description:
        "A modern and multifunctional promotional website developed for TA-Travel. The site features destination highlights, contact forms, customer testimonials, minimal costs, and legal policies. Users can easily access information, subscribe to newsletters, and leave reviews. The admin panel allows content management, review approval, and Google Analytics tracking.",
      client: "TA-Travel",
      type: "web-application",
      category: "Web Development + Admin Panel",
      images: [
        "/images/projects/ta-travel_home.webp",
        "/images/projects/ta-travel_about.webp",
        "/images/projects/ta-travel_destinations.webp",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Firebase Hosting",
        "i18next",
        "Google Analytics",
        "Email API",
      ],
      viewLiveSite: "Live Site",
      challenge:
        "Creating a fast, user-friendly, and visually appealing website for TA-Travel customers, while simplifying admin panel management of reviews, newsletters, and analytics.",
      solution:
        "Developed a modern and responsive web application using React and Tailwind CSS. The admin panel allows review moderation, newsletter management, and Google Analytics tracking. Only approved reviews are published, and new subscribers are notified immediately.",
      results: [
        "Visitors can easily explore destinations and leave reviews",
        "Newsletter strengthens user and company engagement",
        "Admin panel simplifies content and review management",
        "Google Analytics integration allows performance and user behavior tracking",
      ],
      adminPanel: {
        title: "Admin Panel",
        content:
          "The admin panel enables moderating user reviews, managing newsletter subscriptions, and viewing Google Analytics data. Admins decide which reviews are published and manage all processes efficiently.",
      },
      testimonial: {
        content:
          "Thanks to our new website, visitors can easily access content and services. Reviews and newsletter management are very simple via the admin panel.",
        author: "TA-Travel Team",
        company: "TA-Travel",
      },
      seoTitle: "TA-Travel Website | Modern Tourism Platform & Admin Panel",
      seoDescription:
        "A modern website developed for TA-Travel with destination highlights, customer reviews, newsletter functionality, and admin panel optimization.",
      keywords: [
        "tourism website",
        "TA-Travel",
        "react project",
        "admin panel",
        "newsletter",
        "Google Analytics",
      ],
    },
  ],
  tr: [
    {
      id: "1001",
      slug: "apart-otel-web-sitesi-ve-yonetici-paneli",
      viewLiveSite: "Siteyi Görüntüle",
      liveUrl: "https://www.monihomes.com.tr",
      title: "Apart Otel Web Sitesi & Yönetici Paneli",
      client: "Monihomes",
      type: "web-design",
      category: "Web Tasarımı + Yönetim Paneli",
      description:
        "Otel sahibi için geliştirilen modern bir tek sayfalık tanıtım sitesi ve özel bir yönetici paneli. Proje, konuklar için kullanıcı dostu bir arayüz sunarken, otel sahibinin fiyatları ve doluluk durumunu kolayca yönetmesini sağlar.",
      challenge:
        "Müşteri, otelini tanıtmak için profesyonel ancak basit bir sayfa istedi. Ayrıca, her odanın doluluğunu Google Takvimi üzerinden takip edebileceği ve rezervasyon taleplerini verimli bir şekilde toplayabileceği bir arka uç sistemine ihtiyaç vardı.",
      solution:
        "React kullanarak hızlı ve şık bir açılış sayfası tasarladım. Yönetici paneli Node.js/Express, MongoDB ve JWT ile inşa edildi. Oda doluluk durumu otomatik olarak Google Takvimi'nden senkronize edildi. Misafirler doğrudan rezervasyon yapmadı, bunun yerine bilgilerini bir form aracılığıyla göndererek, bu bilgiler otel sahibine e-posta ve WhatsApp ile iletildi. Yönetici paneli, Google Analytics verilerini günlük, haftalık ve yıllık grafiklerde görüntülüyor.",
      technologies: [
        "React",
        "Node",
        "MongoDB",
        "Tailwind CSS",
        "Google Takvimi API",
      ],
      results: [
        "Yönetim süresinde %60 azalma",
        "Tüm talepler e-posta ve WhatsApp ile %100 yakalandı",
        "Mobil uyumlu tasarım, kullanıcı deneyimini önemli ölçüde iyileştirdi",
      ],
      testimonial: {
        content:
          "Yeni web sitemiz ve panelimizle otel yönetimi çok daha kolay hale geldi. Tüm bilgileri tek bir yerden kontrol edebiliyorum ve misafir talepleri anında bana ulaşıyor.",
        author: "U. Dinc, Sahip",
        company: "Monihomes",
      },
      images: [
        "/images/projects/monihomes_story.webp",
        "/images/projects/moniomes-2_iphones.webp",
        "/images/projects/monihomes_post.webp",
      ],

      // 🔹 Yeni SEO alanları
      seoTitle: "Apart Otel Web Sitesi ve Yönetim Paneli | Bravix Creative",
      seoDescription:
        "Monihomes için geliştirilen modern otel web sitesi ve yönetici paneli. React, Node.js ve Google Takvimi entegrasyonu ile profesyonel çözüm.",
      keywords: [
        "otel web sitesi",
        "yönetim paneli",
        "react node proje",
        "bravix creative",
      ],
    },
    {
      id: "1002",
      slug: "bag-yatirim-web-sitesi",
      viewLiveSite: "Siteyi Görüntüle",
      liveUrl: "https://konyalimemlak.web.app/",
      title: "Bağ Yatırım Web Sitesi",
      client: "Bag Bahçe Yatırım",
      type: "web-design",
      category: "Çok Dilli Web Tasarımı",
      description:
        "Konya bölgesinde faaliyet gösteren bir bağ yatırımı şirketi için modern, hızlı ve iki dilli tanıtım sitesi. Şirketin hizmetlerini, yatırım kılavuzlarını ve blog içeriklerini sunarken güvenilir ve doğal bir marka imajı sunar.",
      challenge:
        "Yatırımcıları çekmek için hızlı, estetik ve çok dilli bir web sitesi gerekiyordu. Doğal ve sürdürülebilir yatırım temasına uygun bir tasarım hedeflendi.",
      solution:
        "React kullanarak duyarlı ve görsel açıdan çekici bir açılış sayfası tasarlandı. Sade bir düzen ve doğal tonlar kullanıldı. Çok dilli içerik (i18n) desteği sunuldu. Hakkında, Yatırım Süreci, Blog ve İletişim bölümleri oluşturuldu.",
      technologies: ["React", "Node", "CSS3", "i18next", "Framer Motion"],
      results: [
        "Profesyonel tasarım ile marka güveni arttı",
        "İki dilli arayüz ile yabancı yatırımcılar için erişilebilirlik sağlandı",
        "Mobil ve masaüstü kullanıcıları için optimize edilmiş performans",
      ],
      testimonial: {
        content:
          "Web sitemiz hem görsel olarak hem de kullanıcı deneyimi açısından çok tatmin edici oldu. Yatırımcılarla iletişim artık çok daha kolay.",
        author: "V. Karakuş",
        company: "Bag Bahçe Yatırım",
      },
      images: [
        "/images/projects/bagbahce_multi.webp",
        "/images/projects/bby-phone.webp",
        "/images/projects/bby-2-pages.webp",
      ],
      seoTitle: "Bağ Yatırım Web Sitesi | Bravix Creative",
      seoDescription:
        "Konya bölgesinde faaliyet gösteren bağ yatırımı şirketi için modern, hızlı ve çok dilli web sitesi. React ve i18next ile optimize edilmiş çözüm.",
      keywords: [
        "bağ yatırımı web sitesi",
        "çok dilli site",
        "react proje",
        "bravix creative",
      ],
    },
    {
      id: "1003",
      slug: "the-glass-hut-kabin-tanitim-sitesi",
      viewLiveSite: "Demo",
      liveUrl: "https://theglasshut.web.app/",
      title: "The Glass Hut – Kabin Tanıtım Sitesi",
      client: "Kişisel Proje",
      type: "web-development",
      category: "Web Geliştirme",
      description:
        "Doğayla iç içe bir glamping deneyimi sunan cam kabin için modern ve etkileyici bir tanıtım sitesi. Site; kabin hakkında bilgiler, çevre tanıtımı, rezervasyon formu ve sıkça sorulan sorular bölümleriyle tek sayfalık bir yapıda sunulmuştur.",
      challenge:
        "Müşteri, doğayla uyumlu, sade ama görsel açıdan zengin bir web sitesi istiyordu. Amaç; hem kabini estetik bir şekilde tanıtmak hem de kullanıcıların kolayca bilgiye erişmesini sağlamaktı.",
      solution:
        "React ile geliştirilen tek sayfalık bir uygulama oluşturuldu ve Firebase Hosting ile yayınlandı. The Hut, The Area, Booking, About Us ve FAQ gibi bölümlerle kullanıcıların tüm bilgilere kolayca ulaşması sağlandı. Animasyonlar ve tam ekran görsellerle sakin ve huzurlu atmosfer yansıtıldı.",
      technologies: [
        "React",
        "React Router",
        "Tailwind CSS",
        "Framer Motion",
        "Firebase Hosting",
      ],
      results: [
        "Marka ruhuna uygun sade ve etkileyici web varlığı oluşturuldu",
        "Mobil uyum ve net navigasyon kullanıcı deneyimini iyileştirdi",
        "Ziyaretçilerin sitede kalma süresi belirgin şekilde arttı",
      ],
      testimonial: {
        content:
          "Web sitemiz tam hayal ettiğimiz gibi sade, şık ve doğaya uygun oldu. Misafirlerimiz artık bilgiye kolayca ulaşıyor ve rezervasyon süreci çok daha net.",
        author: "Kavramsal Geri Bildirim",
        company: "Dahili İnceleme",
      },
      images: [
        "/images/projects/glasshut_multi.webp",
        "/images/projects/glasshut_screens__.webp",
        "/images/projects/glasshutscreens_.webp",
      ],
      seoTitle:
        "The Glass Hut – Glamping Kabin Tanıtım Sitesi | Bravix Creative",
      seoDescription:
        "Doğayla iç içe glamping deneyimi sunan cam kabin için modern ve etkileyici tek sayfalık tanıtım sitesi. Rezervasyon ve bilgi erişimi kolay.",
      keywords: [
        "glamping sitesi",
        "cabin tanıtım sitesi",
        "tek sayfa web sitesi",
        "react project",
      ],
    },
    {
      id: "1004",
      slug: "mindfulness-uygulama-tanitim-sitesi",
      viewLiveSite: "Demo",
      liveUrl: "https://theglasshut.web.app/",
      title: "Mindfulness Uygulama Tanıtım Sitesi",
      client: "Kişisel Proje",
      type: "web-design",
      category: "Açılış Sayfası Tasarımı",
      description:
        "ZenMind mobil uygulamasını tanıtmak için oluşturulmuş sade, huzurlu ve tüm cihazlara uyumlu tek sayfalık bir web sitesi. Farkındalık temasıyla örtüşen renkler, tipografi ve etkileşimlerle kullanıcı dostu bir deneyim sunar.",
      challenge:
        "Müşteri, ZenMind uygulamasının huzur veren yapısını yansıtan, hızlı yüklenen ve mobil uyumlu bir web sitesi talep etti. En büyük zorluk, nefes animasyonu gibi interaktif bir yöntemle farkındalık hissini dijital ortama taşımaktı.",
      solution:
        "React ve Tailwind CSS kullanarak modern ve duyarlı bir landing page oluşturdum. 'Nefes Al / Ver' animasyonu özel hareket bileşenleriyle hazırlandı. Tasarımda uygulama tanıtımı, kullanıcı yorumları, fiyatlandırma ve açık çağrı butonları yer alıyor. Beyaz alan kullanımı ve geçiş efektleriyle sakin bir kullanıcı deneyimi sağlandı.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Duyarlı Web Tasarımı",
        "Lottie Animasyon",
      ],
      results: [
        "Mobil dönüşüm oranı %45 arttı",
        "Erken kullanıcılar tarafından UI/UX tasarımı çok beğenildi",
        "Net CTA yapısıyla uygulama indirmeleri arttı",
      ],
      testimonial: {
        content:
          "Yeni tanıtım sayfası tam olarak uygulamamız gibi hissettiriyor: sade, huzurlu ve ilham verici. Markamızın sesiyle birebir örtüşüyor.",
        author: "Kavramsal Geri Bildirim",
        company: "Dahili İnceleme",
      },
      images: [
        "/images/projects/zenmind_multi.webp",
        "/images/projects/zenmind_instagram.webp",
        "/images/projects/zenmind_laptop.png",
      ],
      seoTitle: "Mindfulness Uygulama Tanıtım Sitesi | Bravix Creative",
      seoDescription:
        "ZenMind mobil uygulaması için oluşturulmuş tek sayfalık landing page. Huzurlu tasarım, interaktif nefes animasyonu ve mobil uyumlu deneyim.",
      keywords: [
        "mindfulness sitesi",
        "ZenMind tanıtım",
        "landing page",
        "react project",
      ],
    },
    {
      id: "1005",
      slug: "yaratici-akis-paneli-arayuzu",
      title: "Yaratıcı Akış Paneli Arayüzü",
      viewLiveSite: "Demo",
      liveUrl: "https://creator-flow-dashboard.netlify.app/",
      client: "Kişisel Proje",
      type: "ui-ux",
      category: "Panel Arayüzü (UI/UX)",
      description:
        "İçerik üreticilerinin yaratıcı iş akışlarını kolaylaştırmak için tasarlanmış modern, duyarlı bir kontrol paneli arayüzü. Arayüz, kullanılabilirlik, netlik ve estetik dengeye odaklanarak görevleri, kazançları, içerikleri ve analizleri yönetmek için verimli bir alan sunar.",
      challenge:
        "İçerik üreticilerinin günlük olarak kullanabileceği, görsel olarak etkileyici ve işlevsel bir arayüz oluşturmak hedeflendi. Ana zorluk, mobil ve masaüstü uyumlu, temiz ve ilgi çekici bir görsel tasarımla veri yoğunluğunu dengelemekti.",
      solution:
        "Wireframe ve yüksek çözünürlüklü prototipler için Figma kullandım. Gelir grafikleri, son etkinlikler, hızlı işlemler ve gezinme gibi temel öğeleri sezgisel kullanıcı deneyimiyle yapılandırdım. Renk temaları ve boşluk kullanımı, uzun süreli kullanımlarda bile odaklanmayı ve sakinliği koruyacak şekilde özenle uygulandı.",
      technologies: [
        "Figma",
        "React",
        "Tailwind CSS",
        "Duyarlı Tasarım",
        "Veri Görselleştirme",
      ],
      results: [
        "Minimum zihinsel yükle verimli kullanıcı akışı",
        "Genişlemeye uygun yüksek uyarlanabilir bileşen sistemi",
        "Yaratıcı profesyonellerden estetik ve kullanılabilirlik açısından olumlu geri bildirim",
      ],
      testimonial: {
        content:
          "Bu panel tasarımı, işlevsellik ile görsel netlik arasında mükemmel bir denge kuruyor. Bir içerik üreticisi olarak her gün kullanmak isteyeceğim türde bir araç.",
        author: "Kavramsal Geri Bildirim",
        company: "Dahili İnceleme",
      },
      images: [
        "/images/projects/dasboard_destkop.webp",
        "/images/projects/dashboard_2.webp",
        "/images/projects/dashboard_1.webp",
      ],
      seoTitle: "Yaratıcı Akış Paneli Arayüzü | Bravix Creative",
      seoDescription:
        "İçerik üreticileri için modern, duyarlı ve estetik bir UI/UX panel arayüzü. Görev, gelir ve analiz yönetimi için optimize edildi.",
      keywords: [
        "ui/ux panel",
        "yaratıcı akış",
        "dashboard arayüzü",
        "react project",
      ],
    },
    {
      id: "1006",
      slug: "fast-food-restoran-web-sitesi",
      viewLiveSite: "Canlı Site",
      liveUrl: "https://quick-bite-fastfood.netlify.app/",
      title: "Fast Food Restoran Web Sitesi",
      client: "Kişisel Proje",
      type: "web-application",
      category: "Web Tasarımı + E-ticaret",
      description:
        "Quick Bite, eksiksiz bir çevrim içi sipariş deneyimi sunmak için tasarlanmış bir fast food restoran web sitesidir. Ziyaretçiler modern ve duyarlı menüyü inceleyebilir, ürünleri sepetlerine ekleyebilir, güvenli ödeme yapabilir ve siparişlerini gerçek zamanlı olarak takip edebilir — hepsi tek bir sorunsuz arayüzden.",
      challenge:
        "Amaç, geleneksel sipariş yöntemlerinin yerine tamamen entegre bir çevrim içi sipariş, ödeme ve teslimat takip sistemi sunarak hem müşteri deneyimini hem de iç operasyonel verimliliği artırmaktı.",
      solution:
        "React ve modern web geliştirme yaklaşımlarıyla, duyarlı ve etkileşimli bir yemek sipariş platformu oluşturdum. Öne çıkan özellikler arasında dinamik sepet sistemi, ödeme entegrasyonu ve gerçek zamanlı sipariş takip paneli yer alıyor.",
      adminPanel: {
        title: "Yönetim Paneli",
        content:
          "Restoran tarafındaki operasyonları kolaylaştırmak için hafif bir yönetim paneli oluşturdum. Panel sayesinde personel gelen siparişleri takip edebilir, sipariş durumlarını güncelleyebilir ('Hazırlanıyor', 'Yolda', 'Teslim Edildi' gibi) ve müşteri ile ödeme bilgilerine güvenli şekilde erişebilir. Bu yapı, sipariş sürecine anlık görünürlük sağlayarak manuel koordinasyonu azaltır ve verimliliği artırır.",
      },
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Ödeme API'si",
        "Local Storage",
      ],
      results: [
        "Güvenli çevrim içi ödeme ve gerçek zamanlı teslimat takibi sağlandı",
        "Yönetim paneli ile sipariş yönetim verimliliği artırıldı",
        "Mobil öncelikli deneyim ile müşteri memnuniyeti geliştirildi",
      ],
      testimonial: {
        content:
          "Müşterilerimiz çevrim içi sipariş ve ödeme kolaylığını çok seviyor. Sipariş takip özelliği de telefonla yapılan sorguları azalttı ve iş akışımızı geliştirdi.",
        author: "Restoran Müdürü",
        company: "Quick Bite",
      },
      images: [
        "/images/projects/quickbite.webp",
        "/images/projects/QB_menu.webp",
        "/images/projects/menu-page.webp",
      ],
      seoTitle: "Fast Food Restoran Web Sitesi | Bravix Creative",
      seoDescription:
        "Quick Bite için modern ve etkileşimli fast food web sitesi. Online sipariş, ödeme ve gerçek zamanlı sipariş takibi ile optimize edildi.",
      keywords: [
        "fast food web sitesi",
        "online sipariş",
        "restoran paneli",
        "react project",
      ],
    },
    {
      id: "1007",
      slug: "ta-travel-web-sitesi",
      title: "TA-Travel Web Sitesi",
      liveUrl: "https://www.ta-travel.ru/",
      description:
        "TA-Travel için geliştirilen modern ve çok işlevli bir tanıtım web sitesi. Site, destinasyon tanıtımı, iletişim, müşteri yorumları, minimal maliyetler ve yasal politikalar gibi bölümler içeriyor. Kullanıcılar kolayca bilgiye ulaşabiliyor, newsletter aboneliği oluşturabiliyor ve yorum bırakabiliyor. Admin paneli sayesinde içerik yönetimi, yorum onayı ve Google Analytics takibi sağlanıyor.",
      client: "TA-Travel",
      type: "web-application",
      category: "Web Geliştirme + Yönetim Paneli",
      images: [
        "/images/projects/ta-travel_home.webp",
        "/images/projects/ta-travel_about.webp",
        "/images/projects/ta-travel_destinations.webp",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Firebase Hosting",
        "i18next",
        "Google Analytics",
        "Email API",
      ],
      viewLiveSite: "Canlı Site",
      challenge:
        "TA-Travel müşterileri için hızlı, kullanıcı dostu ve görsel açıdan etkileyici bir site oluşturmak; aynı zamanda admin panelinden yorum, newsletter ve analiz takibini kolaylaştırmak.",
      solution:
        "React ve Tailwind CSS ile modern ve duyarlı bir web uygulaması geliştirdik. Admin paneli üzerinden kullanıcı yorumları değerlendiriliyor ve yayınlanacak olanlar seçiliyor. Newsletter sistemi ile yeni aboneler ve TA-Travel ekibi anlık bilgilendiriliyor. Google Analytics verileri panel üzerinden takip edilebiliyor.",
      results: [
        "Ziyaretçiler site üzerinden kolayca destinasyonları inceleyip yorum bırakabiliyor",
        "Newsletter ile kullanıcı ve şirket etkileşimi güçlendi",
        "Admin paneli ile içerik ve yorum yönetimi kolaylaştı",
        "Google Analytics entegrasyonu sayesinde site performansı ve kullanıcı davranışı izlenebiliyor",
      ],
      adminPanel: {
        title: "Yönetim Paneli",
        content:
          "Admin paneli, kullanıcı yorumlarını onaylama, newsletter abonelerini takip etme ve Google Analytics verilerini görüntüleme imkanı sağlar. Hangi yorumların yayınlanacağına admin karar verir ve panel tüm işlemleri kolaylaştırır.",
      },
      testimonial: {
        content:
          "Yeni web sitemiz sayesinde ziyaretçilerimiz içeriklere ve hizmetlerimize kolayca erişebiliyor. Yorumlar ve newsletter yönetimi admin paneli üzerinden çok rahat kontrol edilebiliyor.",
        author: "TA-Travel Ekibi",
        company: "TA-Travel",
      },
      seoTitle: "TA-Travel Web Sitesi | Modern Turizm ve Yönetim Paneli",
      seoDescription:
        "TA-Travel için geliştirilmiş modern web sitesi. Destinasyon tanıtımı, müşteri yorumları, newsletter ve admin paneli ile optimize edilmiş çözüm.",
      keywords: [
        "turizm web sitesi",
        "TA-Travel",
        "react proje",
        "admin paneli",
        "newsletter",
        "Google Analytics",
      ],
    },
  ],
  ru: [
    {
      id: "1001",
      slug: "apart-otel-veb-sayt-i-panel-administratora",
      viewLiveSite: "Посмотреть сайт",
      liveUrl: "https://www.monihomes.com.tr",
      title: "Апарт-отель Веб-сайт & Панель администратора",
      client: "Monihomes",
      type: "web-design",
      category: "Веб-дизайн + Панель администратора",
      description:
        "Современный одностраничный промо-сайт и индивидуальная панель администратора для владельца отеля. Проект обеспечивает удобный интерфейс для гостей и позволяет владельцу легко управлять ценами и доступностью номеров.",
      challenge:
        "Клиент хотел профессиональный, но простой сайт для продвижения отеля. Также требовалась бэкэнд-система для отслеживания занятости номеров через Google Календарь и эффективного сбора заявок на бронирование.",
      solution:
        "Разработан быстрый и стильный лендинг с использованием React. Панель администратора построена с Node.js/Express, MongoDB и JWT. Доступность номеров синхронизируется автоматически с Google Календарем. Гости отправляют информацию через форму, которая поступает владельцу по электронной почте и WhatsApp. Данные Google Analytics отображаются в виде графиков за день, неделю и год.",
      technologies: [
        "React",
        "Node",
        "MongoDB",
        "Tailwind CSS",
        "Google Calendar API",
      ],
      results: [
        "Сокращение времени управления на 60%",
        "Все заявки 100% получены через email и WhatsApp",
        "Мобильная версия значительно улучшила UX",
      ],
      testimonial: {
        content:
          "Наш новый сайт и панель сделали управление отелем намного проще. Я могу контролировать всю информацию в одном месте, а заявки гостей приходят мгновенно.",
        author: "U. Dinc, Владелец",
        company: "Monihomes",
      },
      images: [
        "/images/projects/monihomes_story.webp",
        "/images/projects/moniomes-2_iphones.webp",
        "/images/projects/monihomes_post.webp",
      ],
      seoTitle:
        "Апарт-отель Веб-сайт и Панель администратора | Bravix Creative",
      seoDescription:
        "Современный веб-сайт и панель администратора для Monihomes. Профессиональное решение с React, Node.js и интеграцией Google Календаря.",
      keywords: [
        "веб-сайт отеля",
        "панель администратора",
        "react node проект",
        "bravix creative",
      ],
    },
    {
      id: "1002",
      slug: "bag-investitsionnyy-veb-sayt",
      viewLiveSite: "Посмотреть сайт",
      liveUrl: "https://konyalimemlak.web.app/",
      title: "Веб-сайт Bag Investment",
      client: "Bag Bahçe Yatırım",
      type: "web-design",
      category: "Многоязычный веб-дизайн",
      description:
        "Современный, быстрый, двуязычный промо-сайт для инвестиционной компании по виноградникам в регионе Конья. Представляет услуги, инвестиционные руководства и блоговый контент, отражая надежный и естественный имидж бренда.",
      challenge:
        "Нужен был быстрый, эстетичный и многоязычный сайт для привлечения инвесторов. Дизайн должен был соответствовать естественной и устойчивой инвестиционной теме.",
      solution:
        "Разработан адаптивный и визуально привлекательный лендинг с React. Использованы простая структура и естественные оттенки. Поддержка многоязычного контента (i18n). Разделы: О компании, Процесс инвестирования, Блог, Контакты.",
      technologies: ["React", "Node", "CSS3", "i18next", "Framer Motion"],
      results: [
        "Профессиональный дизайн повысил доверие к бренду",
        "Двуязычный интерфейс улучшил доступность для иностранных инвесторов",
        "Оптимизированная производительность для мобильных и настольных пользователей",
      ],
      testimonial: {
        content:
          "Наш сайт визуально привлекательный и удобный для пользователей. Связь с инвесторами стала намного проще.",
        author: "V. Karakuş",
        company: "Bag Bahçe Yatırım",
      },
      images: [
        "/images/projects/bagbahce_multi.webp",
        "/images/projects/bby-phone.webp",
        "/images/projects/bby-2-pages.webp",
      ],
      seoTitle: "Веб-сайт Bag Investment | Bravix Creative",
      seoDescription:
        "Современный, быстрый, двуязычный сайт инвестиционной компании в регионе Конья. Оптимизированное решение с React и i18next.",
      keywords: [
        "инвестиции виноградник сайт",
        "многоязычный сайт",
        "react проект",
        "bravix creative",
      ],
    },
    {
      id: "1003",
      slug: "the-glass-hut-kabiny-veb-sayt",
      viewLiveSite: "Demo",
      liveUrl: "https://theglasshut.web.app/",
      title: "The Glass Hut – Веб-сайт для Кабины",
      client: "Личный проект",
      type: "web-development",
      category: "Веб-разработка",
      description:
        "Современный промо-сайт для стеклянной кабины с природным глэмпинг-опытом. Одностраничный дизайн включает информацию о кабине, окрестностях, форму бронирования и FAQ.",
      challenge:
        "Клиент хотел сайт, дружелюбный к природе, простой, но визуально насыщенный для продвижения кабины и удобного доступа к информации.",
      solution:
        "Создано одностраничное React-приложение и размещено на Firebase Hosting. Разделы: The Hut, The Area, Booking, About Us, FAQ. Анимации и полноэкранные изображения создают спокойную атмосферу.",
      technologies: [
        "React",
        "React Router",
        "Tailwind CSS",
        "Framer Motion",
        "Firebase Hosting",
      ],
      results: [
        "Создан чистый и привлекательный веб-сайт, соответствующий духу бренда",
        "Мобильная версия и четкая навигация улучшили UX",
        "Увеличено время пребывания посетителей на сайте",
      ],
      testimonial: {
        content:
          "Наш сайт получился таким, каким мы его представляли: чистый, стильный и соответствующий природе. Гости теперь легко получают информацию, а процесс бронирования стал прозрачнее.",
        author: "Концептуальная обратная связь",
        company: "Внутренний обзор",
      },
      images: [
        "/images/projects/glasshut_multi.webp",
        "/images/projects/glasshut_screens__.webp",
        "/images/projects/glasshutscreens_.webp",
      ],
      seoTitle: "The Glass Hut – Веб-сайт Glamping Кабины | Bravix Creative",
      seoDescription:
        "Одностраничный промо-сайт для стеклянной кабины с глэмпинг-опытом. Легкая бронирование и доступ к информации.",
      keywords: [
        "glamping сайт",
        "сайт кабины",
        "одностраничный сайт",
        "react проект",
      ],
    },
    {
      id: "1004",
      slug: "mindfulness-prilozhenie-landing-page",
      viewLiveSite: "Demo",
      liveUrl: "https://theglasshut.web.app/",
      title: "Лэндинг Mindfulness Приложения",
      client: "Личный проект",
      type: "web-design",
      category: "Дизайн лэндинга",
      description:
        "Одностраничный, спокойный и адаптивный сайт для продвижения мобильного приложения ZenMind. Используются спокойные цвета, типографика и интерактивные элементы для удобного пользовательского опыта.",
      challenge:
        "Клиент хотел быстрый, мобильный и спокойный сайт, отражающий природу приложения. Основная задача: передать ощущение mindfulness через анимации дыхания.",
      solution:
        "Создан адаптивный лендинг с React и Tailwind CSS. Анимация 'Вдох / Выдох' реализована с помощью пользовательских motion компонентов. Разделы: промо приложения, отзывы, цены и CTA. Белое пространство и плавные переходы создают спокойный UX.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Адаптивный дизайн",
        "Lottie Animation",
      ],
      results: [
        "Мобильная конверсия увеличилась на 45%",
        "UI/UX дизайн высоко оценили ранние пользователи",
        "Четкий CTA повысил загрузки приложения",
      ],
      testimonial: {
        content:
          "Лэндинг точно передает ощущение приложения: спокойный, простой и вдохновляющий. Полностью соответствует голосу нашего бренда.",
        author: "Концептуальная обратная связь",
        company: "Внутренний обзор",
      },
      images: [
        "/images/projects/zenmind_multi.webp",
        "/images/projects/zenmind_instagram.webp",
        "/images/projects/zenmind_laptop.png",
      ],
      seoTitle: "Лэндинг Mindfulness Приложения | Bravix Creative",
      seoDescription:
        "Одностраничный лендинг ZenMind с спокойным дизайном, интерактивной анимацией дыхания и мобильной адаптивностью.",
      keywords: [
        "mindfulness сайт",
        "ZenMind лэндинг",
        "landing page",
        "react проект",
      ],
    },
    {
      id: "1005",
      slug: "creative-flow-dashboard",
      viewLiveSite: "Demo",
      liveUrl: "https://creator-flow-dashboard.netlify.app/",
      title: "Интерфейс Creative Flow Dashboard",
      client: "Личный проект",
      type: "ui-ux",
      category: "Дашборд UI/UX",
      description:
        "Современный, адаптивный интерфейс дашборда для упрощения рабочих процессов создателей контента. Сосредоточен на удобстве, ясности и эстетическом балансе для управления задачами, доходами, контентом и аналитикой.",
      challenge:
        "Цель: создать визуально привлекательный и функциональный дашборд для ежедневного использования. Основная задача: баланс визуальной ясности и плотности данных на мобильных и десктопных устройствах.",
      solution:
        "Использован Figma для wireframe и прототипов. Создан интуитивный UX с графиками доходов, последними действиями, быстрыми действиями и навигацией. Цветовые темы и отступы оптимизированы для фокуса и спокойствия при длительном использовании.",
      technologies: [
        "Figma",
        "React",
        "Tailwind CSS",
        "Адаптивный дизайн",
        "Визуализация данных",
      ],
      results: [
        "Эффективный рабочий процесс с минимальной нагрузкой на мозг",
        "Высокоадаптируемая система компонентов для расширения",
        "Положительные отзывы от профессионалов о дизайне и удобстве",
      ],
      testimonial: {
        content:
          "Этот дашборд идеально балансирует функциональность и визуальную ясность. Как создатель контента, я бы хотел использовать его каждый день.",
        author: "Концептуальная обратная связь",
        company: "Внутренний обзор",
      },
      images: [
        "/images/projects/dasboard_destkop.webp",
        "/images/projects/dashboard_2.webp",
        "/images/projects/dashboard_1.webp",
      ],
      seoTitle: "Интерфейс Creative Flow Dashboard | Bravix Creative",
      seoDescription:
        "Современный, адаптивный, эстетичный UI/UX дашборд для создателей контента. Оптимизирован для управления задачами, доходами, контентом и аналитикой.",
      keywords: [
        "ui/ux дашборд",
        "creative flow",
        "интерфейс дашборда",
        "react проект",
      ],
    },
    {
      id: "1006",
      slug: "sayt-fastfud-restorana",
      viewLiveSite: "Живой сайт",
      liveUrl: "https://quick-bite-fastfood.netlify.app/",
      title: "Веб-сайт Fast Food ресторана",
      client: "Личный проект",
      type: "web-application",
      category: "Веб-дизайн + E-commerce",
      description:
        "Quick Bite предлагает полный онлайн-заказ для ресторана быстрого питания. Посетители могут просматривать адаптивное меню, добавлять товары в корзину, безопасно оплачивать и отслеживать заказы в реальном времени.",
      challenge:
        "Цель: заменить традиционные методы заказа полностью интегрированной системой онлайн-заказа, оплаты и отслеживания доставки для улучшения опыта клиента и внутренней эффективности.",
      solution:
        "Создана интерактивная платформа для заказов с использованием React. Основные функции: динамическая корзина, интеграция платежей, дашборд для отслеживания заказов в реальном времени.",
      adminPanel: {
        title: "Панель администратора",
        content:
          "Легкая панель позволяет сотрудникам отслеживать поступающие заказы, обновлять статус ('Готовится', 'В пути', 'Доставлено') и безопасно получать информацию о клиенте/платежах. Обеспечивает мгновенную видимость процесса заказов и повышает эффективность.",
      },
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Payment API",
        "Local Storage",
      ],
      results: [
        "Безопасная онлайн-оплата и отслеживание доставки в реальном времени",
        "Повышена эффективность управления заказами через панель администратора",
        "Мобильная адаптация улучшила удовлетворенность клиентов",
      ],
      testimonial: {
        content:
          "Наши клиенты любят удобство онлайн-заказа и оплаты. Функция отслеживания заказов сократила звонки и улучшила рабочий процесс.",
        author: "Менеджер ресторана",
        company: "Quick Bite",
      },
      images: [
        "/images/projects/quickbite.webp",
        "/images/projects/QB_menu.webp",
        "/images/projects/menu-page.webp",
      ],
      seoTitle: "Веб-сайт Fast Food ресторана | Bravix Creative",
      seoDescription:
        "Современный и интерактивный веб-сайт для Quick Bite. Оптимизирован для онлайн-заказа, оплаты и отслеживания заказов.",
      keywords: [
        "fast food сайт",
        "онлайн-заказ",
        "панель ресторана",
        "react проект",
      ],
    },
    {
      id: "1007",
      slug: "ta-travel-vebsayt",
      title: "Веб-сайт TA-Travel",
      liveUrl: "https://www.ta-travel.ru/",
      description:
        "Современный и многофункциональный промо-сайт, разработанный для TA-Travel. Сайт включает разделы с описанием направлений, контактные формы, отзывы клиентов, минимальные расходы и юридическую информацию. Пользователи могут легко получать информацию, подписываться на рассылку и оставлять отзывы. Админ-панель позволяет управлять контентом, утверждать отзывы и отслеживать данные Google Analytics.",
      client: "TA-Travel",
      type: "web-application",
      category: "Веб-разработка + Админ-панель",
      images: [
        "/images/projects/ta-travel_home.webp",
        "/images/projects/ta-travel_about.webp",
        "/images/projects/ta-travel_destinations.webp",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Firebase Hosting",
        "i18next",
        "Google Analytics",
        "Email API",
      ],
      viewLiveSite: "Открыть сайт",
      challenge:
        "Создать быстрый, удобный и визуально привлекательный сайт для клиентов TA-Travel, при этом упростив управление отзывами, рассылкой и аналитикой через админ-панель.",
      solution:
        "Разработан современный и адаптивный веб-сайт с использованием React и Tailwind CSS. Админ-панель позволяет модерацию отзывов, управление подписками на рассылку и просмотр данных Google Analytics. Публикуются только одобренные отзывы, новые подписчики получают уведомления сразу.",
      results: [
        "Посетители могут легко изучать направления и оставлять отзывы",
        "Рассылка укрепляет взаимодействие между пользователями и компанией",
        "Админ-панель упрощает управление контентом и отзывами",
        "Интеграция Google Analytics позволяет отслеживать производительность и поведение пользователей",
      ],
      adminPanel: {
        title: "Админ-панель",
        content:
          "Админ-панель позволяет модерировать отзывы пользователей, управлять подписками на рассылку и просматривать данные Google Analytics. Администраторы решают, какие отзывы публиковать, и эффективно управляют всеми процессами.",
      },
      testimonial: {
        content:
          "Благодаря нашему новому сайту посетители легко получают доступ к контенту и услугам. Управление отзывами и рассылкой стало очень простым через админ-панель.",
        author: "Команда TA-Travel",
        company: "TA-Travel",
      },
      seoTitle:
        "Веб-сайт TA-Travel | Современная туристическая платформа и админ-панель",
      seoDescription:
        "Современный веб-сайт для TA-Travel с описанием направлений, отзывами клиентов, функцией рассылки и оптимизированной админ-панелью.",
      keywords: [
        "туристический сайт",
        "TA-Travel",
        "проект на React",
        "админ-панель",
        "рассылка",
        "Google Analytics",
      ],
    },
  ],
};

export function getProjectById(
  id: string,
  locale: string
): Project | undefined {
  const projects = portfolioData[locale] || portfolioData["en"];
  return projects.find((project) => project.id === id);
}

export function getAllProjects(): Project[] {
  const projectsMap = new Map<string, Project>();
  Object.keys(portfolioData).forEach((locale) => {
    portfolioData[locale].forEach((project) => {
      if (!projectsMap.has(project.id)) {
        projectsMap.set(project.id, project);
      }
    });
  });
  return Array.from(projectsMap.values());
}
