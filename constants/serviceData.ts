import { ReactNode } from "react";
export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  cta: string;
  icon?: ReactNode;
  process?: string[];
  technologies?: string[];
  detailedDescription?: string;
  benefits?: string[];
  useCases?: string[];
  faq?: { question: string; answer: string }[];
  relatedProjects?: { title: string; url: string }[];
  blogPosts?: { title: string; url: string }[];
  idealFor?: string[];
  pricingModel?: string;
  commonMistakes?: string[];
  performanceMetrics?: string[];
  heroImageUrl?: string;
  keywords?: string[];
  meta?: {
    title: string;
    description: string;
  };
};

export const ServiceData: Record<string, Service[]> = {
  en: [
    {
      id: "2001",
      slug: "webdevelopment",
      title: "Web Development",
      description: "Modern and responsive websites tailored to your needs.",
      cta: "Explore Builds",
      detailedDescription:
        "We build high-performance, SEO-optimized, responsive websites using the latest technologies. Perfect for startups, small businesses, and enterprises looking to scale online.",
      process: [
        "Requirement gathering",
        "Wireframing and design",
        "Frontend development",
        "Backend integration",
        "Testing and optimization",
        "Deployment and maintenance",
      ],
      technologies: [
        "Next.js",
        "React JS",
        "Tailwind CSS",
        "HTML5",
        "Node.js",
        "MongoDB",
        "Sanity CMS",
      ],
      benefits: [
        "Responsive design for all devices",
        "SEO optimized structure",
        "Custom content management solutions",
        "Fast loading and performance",
      ],
      useCases: [
        "Corporate websites",
        "Portfolio websites",
        "Landing pages",
        "E-commerce integration",
      ],
      faq: [
        {
          question: "How long does a typical web project take?",
          answer: "Usually 4-8 weeks depending on complexity.",
        },
        {
          question: "Do you provide post-launch support?",
          answer: "Yes, we offer maintenance and updates.",
        },
      ],
      relatedProjects: [
        { title: "Startup Portfolio", url: "/projects/startup-portfolio" },
        { title: "E-Commerce Launch", url: "/projects/ecommerce-launch" },
      ],
      blogPosts: [
        {
          title: "Top Web Design Trends 2025",
          url: "/blog/web-design-trends-2025",
        },
        { title: "Why SEO Matters for Your Website", url: "/blog/seo-matters" },
      ],
      idealFor: [
        "Startups looking for MVP websites",
        "Businesses aiming to scale online",
        "Agencies outsourcing front-end",
        "Nonprofits needing modern web presence",
      ],
      pricingModel: "Project-based with optional monthly support packages.",
      commonMistakes: [
        "Not considering mobile-first design",
        "Ignoring performance optimization",
        "Lack of a proper content structure",
        "Trying to skip the wireframing phase",
      ],
      performanceMetrics: [
        "PageSpeed Score > 90",
        "SEO score via Lighthouse > 85",
        "Responsive test pass on all breakpoints",
        "Load time under 2 seconds",
      ],
      heroImageUrl: "/images/services/webdevelopment-hero.jpg",
      keywords: [
        "custom website",
        "responsive web design",
        "Next.js development",
        "React web developer",
        "SEO optimized websites",
      ],
      meta: {
        title: "Custom Web Development Services | Bravix Creative",
        description:
          "We build modern, SEO-friendly, and high-performance websites tailored to your business. Explore our web development services now.",
      },
    },
    {
      id: "2002",
      slug: "e-commerce-solutions",
      title: "E-Commerce Solutions",
      description: "Custom online stores built for performance and conversion.",
      cta: "Build My Store",
      detailedDescription:
        "We create secure, scalable online stores optimized for sales and user experience. Ideal for retailers who want to sell efficiently online.",
      process: [
        "Store planning",
        "Product catalog setup",
        "Payment gateway integration",
        "Order management system",
        "Security implementation",
        "Launch and support",
      ],
      technologies: [
        "Stripe/PayPal",
        "Inventory systems",
        "Customer management",
        "Analytics",
      ],
      benefits: [
        "Secure payment processing",
        "Inventory management",
        "High conversion design",
        "Scalable architecture",
      ],
      useCases: [
        "B2C e-commerce",
        "Marketplace platforms",
        "Subscription stores",
        "Custom online stores",
      ],
      faq: [
        {
          question: "Can you integrate multiple payment gateways?",
          answer: "Yes, Stripe, PayPal and other options are available.",
        },
        {
          question: "Do you provide ongoing store maintenance?",
          answer: "Yes, we monitor and update your store continuously.",
        },
      ],
      relatedProjects: [
        { title: "Fashion E-Commerce", url: "/projects/fashion-ecommerce" },
        { title: "Electronics Store", url: "/projects/electronics-store" },
      ],
      blogPosts: [
        { title: "E-Commerce UX Best Practices", url: "/blog/ecommerce-ux" },
        { title: "Boosting Online Sales", url: "/blog/boost-online-sales" },
      ],
      idealFor: [
        "Retailers selling B2C",
        "Brands launching subscription stores",
        "Entrepreneurs starting a marketplace",
        "Companies needing scalable e-commerce solutions",
      ],
      pricingModel:
        "Project-based, with optional ongoing subscription for maintenance and updates.",
      commonMistakes: [
        "Skipping mobile optimization",
        "Neglecting payment gateway security",
        "Poor product categorization",
        "Ignoring analytics tracking",
      ],
      performanceMetrics: [
        "Conversion rate improvement > 15%",
        "Checkout success rate > 95%",
        "Load time under 3 seconds",
        "Scalable architecture supporting 10k+ SKUs",
      ],
      heroImageUrl: "/images/services/ecommerce-hero.jpg",
      keywords: [
        "ecommerce store",
        "online shop",
        "stripe integration",
        "paypal payment gateway",
        "marketplace platform",
      ],
      meta: {
        title: "E-Commerce Solutions for High Conversion | Bravix Creative",
        description:
          "Launch secure, scalable, and high-converting online stores with our e-commerce solutions. Perfect for retailers and entrepreneurs.",
      },
    },
    {
      id: "2003",
      slug: "ui-ux-design",
      title: "UI/UX Design",
      description: "Intuitive and visually appealing user experiences.",
      cta: "Design My Experience",
      detailedDescription:
        "Our UI/UX services focus on creating seamless user experiences that are both aesthetically pleasing and easy to navigate, increasing engagement and conversion.",
      process: [
        "User research",
        "Wireframing",
        "Prototyping",
        "User testing",
        "Visual design",
        "Handoff to development",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping tools"],
      benefits: [
        "User-friendly interfaces",
        "Increased engagement",
        "Aesthetic design",
        "Consistent UX patterns",
      ],
      useCases: [
        "Web applications",
        "Mobile apps",
        "Dashboards",
        "Landing pages",
      ],
      faq: [
        {
          question: "Do you conduct user testing?",
          answer: "Yes, testing with real users is part of our process.",
        },
        {
          question: "Can you redesign an existing product?",
          answer: "Absolutely, we improve UX based on research and analytics.",
        },
      ],
      relatedProjects: [
        { title: "Travel App UI", url: "/projects/travel-app-ui" },
        { title: "Dashboard Redesign", url: "/projects/dashboard-redesign" },
      ],
      blogPosts: [
        { title: "UI/UX Design Principles", url: "/blog/ui-ux-principles" },
        {
          title: "Designing for Mobile First",
          url: "/blog/mobile-first-design",
        },
      ],
      idealFor: [
        "Startups needing intuitive apps",
        "Businesses redesigning legacy systems",
        "Companies seeking to improve conversion",
        "Web & mobile platforms",
      ],
      pricingModel: "Project-based with optional UX audit subscriptions.",
      commonMistakes: [
        "Ignoring user research",
        "Overcomplicating UI",
        "Inconsistent design patterns",
        "Skipping accessibility considerations",
      ],
      performanceMetrics: [
        "User satisfaction score > 85%",
        "Task completion rate > 90%",
        "Drop-off reduction in flows",
        "Time-on-task improvement",
      ],
      heroImageUrl: "/images/services/uiux-hero.jpg",
      keywords: [
        "UI design",
        "UX optimization",
        "mobile-first design",
        "web apps",
        "user experience",
      ],
      meta: {
        title: "Professional UI/UX Design Services | Bravix Creative",
        description:
          "Craft intuitive and visually appealing user experiences for web and mobile apps. Boost engagement and conversion with our UI/UX design services.",
      },
    },
    {
      id: "2004",
      slug: "seo-optimization",
      title: "SEO Optimization",
      description: "Boost your visibility and rank higher in search results.",
      cta: "Boost My SEO",
      detailedDescription:
        "Comprehensive SEO services to increase your organic traffic, improve search engine rankings, and optimize your website structure and content.",
      process: [
        "Site audit",
        "Keyword research",
        "On-page optimization",
        "Technical SEO",
        "Content strategy",
        "Performance monitoring",
      ],
      technologies: [
        "Google Analytics",
        "Search Console",
        "SEO tools",
        "Content optimization",
      ],
      benefits: [
        "Higher search rankings",
        "Improved traffic quality",
        "Better conversion",
        "Long-term growth",
      ],
      useCases: [
        "Corporate websites",
        "E-commerce stores",
        "Blogs",
        "Landing pages",
      ],
      faq: [
        {
          question: "How long until I see SEO results?",
          answer: "Typically 3-6 months for significant improvements.",
        },
        {
          question: "Do you provide SEO audits?",
          answer: "Yes, complete technical and content audits are included.",
        },
      ],
      relatedProjects: [
        { title: "SEO Case Study - Retail", url: "/projects/seo-retail" },
        { title: "SEO Case Study - SaaS", url: "/projects/seo-saas" },
      ],
      blogPosts: [
        { title: "SEO Strategies for 2025", url: "/blog/seo-strategies-2025" },
        {
          title: "Optimizing Content for Search Engines",
          url: "/blog/content-seo",
        },
      ],
      idealFor: [
        "Businesses aiming to increase organic traffic",
        "E-commerce stores seeking higher conversion",
        "Blogs and content-heavy sites",
        "Corporate websites with low search visibility",
      ],
      pricingModel: "Monthly retainer or project-based packages.",
      commonMistakes: [
        "Neglecting technical SEO",
        "Using wrong or duplicate keywords",
        "Ignoring analytics tracking",
        "Skipping content strategy",
      ],
      performanceMetrics: [
        "Organic traffic growth > 20%",
        "Improved SERP rankings for targeted keywords",
        "Click-through rate improvement",
        "Reduced bounce rate",
      ],
      heroImageUrl: "/images/services/seo-hero.jpg",
      keywords: [
        "SEO services",
        "search engine optimization",
        "organic traffic",
        "keyword ranking",
        "website SEO",
      ],
      meta: {
        title: "Professional SEO Optimization Services | Bravix Creative",
        description:
          "Improve your website’s visibility and rankings with expert SEO optimization services. Increase traffic and conversions effectively.",
      },
    },
    {
      id: "2005",
      slug: "maintenance",
      title: "Maintenance",
      description: "Ongoing support and updates for your digital platforms.",
      cta: "Secure My Site",
      detailedDescription:
        "Continuous website and application maintenance services to ensure security, performance, and up-to-date features for your digital assets.",
      process: [
        "Regular updates",
        "Security monitoring",
        "Performance optimization",
        "Content updates",
        "Technical support",
        "Feature additions",
      ],
      technologies: [
        "Monitoring tools",
        "Backup systems",
        "Security scanners",
        "Performance testing",
      ],
      benefits: [
        "Up-to-date security",
        "Optimized performance",
        "Content management",
        "Feature improvements",
      ],
      useCases: [
        "Corporate websites",
        "E-commerce stores",
        "Web applications",
        "SaaS platforms",
      ],
      faq: [
        {
          question: "Do you offer emergency support?",
          answer: "Yes, 24/7 emergency support is available.",
        },
        {
          question: "How often do you update systems?",
          answer: "Regular updates are applied as part of maintenance.",
        },
      ],
      relatedProjects: [
        {
          title: "Corporate Website Maintenance",
          url: "/projects/corporate-maintenance",
        },
        {
          title: "E-Commerce Maintenance",
          url: "/projects/ecommerce-maintenance",
        },
      ],
      blogPosts: [
        {
          title: "Website Maintenance Best Practices",
          url: "/blog/maintenance-best-practices",
        },
        { title: "Ensuring Website Security", url: "/blog/website-security" },
      ],
      idealFor: [
        "Businesses wanting hassle-free updates",
        "E-commerce stores needing security and uptime",
        "Web platforms requiring feature maintenance",
        "SaaS companies",
      ],
      pricingModel: "Monthly subscription based on service scope.",
      commonMistakes: [
        "Skipping security patches",
        "Neglecting backups",
        "Ignoring performance metrics",
        "Outdated content or features",
      ],
      performanceMetrics: [
        "Uptime > 99.9%",
        "Incident response time < 1 hour",
        "Performance improvements per release",
        "Security vulnerabilities resolved within 24h",
      ],
      heroImageUrl: "/images/services/maintenance-hero.jpg",
      keywords: [
        "website maintenance",
        "app maintenance",
        "digital support",
        "security updates",
        "performance monitoring",
      ],
      meta: {
        title: "Ongoing Website & App Maintenance Services | Bravix Creative",
        description:
          "Keep your digital platforms secure, up-to-date, and optimized with our professional maintenance services.",
      },
    },
  ],
  tr: [
    {
      id: "2001",
      slug: "webdevelopment",
      title: "Web Geliştirme",
      description: "İhtiyaçlarınıza özel modern ve duyarlı web siteleri.",
      cta: "Projeleri Keşfet",
      detailedDescription:
        "En yeni teknolojileri kullanarak yüksek performanslı, SEO uyumlu ve duyarlı web siteleri oluşturuyoruz. Startuplar, KOBİ’ler ve ölçeklenebilir çözümler arayan işletmeler için idealdir.",
      process: [
        "Gereksinim toplama",
        "Wireframe ve tasarım",
        "Frontend geliştirme",
        "Backend entegrasyonu",
        "Test ve optimizasyon",
        "Yayın ve bakım",
      ],
      technologies: [
        "Next.js",
        "React JS",
        "Tailwind CSS",
        "HTML5",
        "Node.js",
        "MongoDB",
        "Sanity CMS",
      ],
      benefits: [
        "Tüm cihazlarda duyarlı tasarım",
        "SEO uyumlu yapı",
        "Özel içerik yönetim çözümleri",
        "Hızlı yükleme ve performans",
      ],
      useCases: [
        "Kurumsal web siteleri",
        "Portföy siteleri",
        "Landing page’ler",
        "E-ticaret entegrasyonu",
      ],
      faq: [
        {
          question: "Tipik bir web projesi ne kadar sürer?",
          answer: "Genellikle karmaşıklığa bağlı olarak 4-8 hafta.",
        },
        {
          question: "Yayın sonrası destek veriyor musunuz?",
          answer: "Evet, bakım ve güncellemeler sunuyoruz.",
        },
      ],
      heroImageUrl: "/images/services/web-hero.jpg",
      idealFor: [
        "Startuplar",
        "KOBİ’ler",
        "Büyümek isteyen işletmeler",
        "Online satış yapan şirketler",
      ],
      pricingModel: "Proje bazlı fiyatlandırma.",
      commonMistakes: [
        "Kullanıcı deneyimini ihmal etmek",
        "SEO’yu göz ardı etmek",
        "Tasarımda tutarsızlık",
        "Yavaş performans",
      ],
      performanceMetrics: [
        "Yüklenme süresi < 2s",
        "SEO skor > 85%",
        "Mobil uyumluluk %100",
        "Trafik artışı %20+",
      ],
      keywords: [
        "web geliştirme",
        "Next.js",
        "React",
        "SEO uyumlu web",
        "frontend-backend",
      ],
      meta: {
        title: "Profesyonel Web Geliştirme Hizmetleri | Bravix Creative",
        description:
          "Modern ve performanslı web siteleri ile işinizi online ortama taşıyın. SEO ve hızlı çözümler sunuyoruz.",
      },
    },
    {
      id: "2002",
      slug: "e-commerce-solutions",
      title: "E-Ticaret Çözümleri",
      description: "Performans ve dönüşüm odaklı özel online mağazalar.",
      cta: "Mağazamı Kur",
      detailedDescription:
        "Güvenli, ölçeklenebilir ve satışa optimize online mağazalar oluşturuyoruz. Perakendeciler için verimli online satış çözümü sunar.",
      process: [
        "Mağaza planlama",
        "Ürün kataloğu kurulumu",
        "Ödeme sistemleri entegrasyonu",
        "Sipariş yönetimi",
        "Güvenlik uygulamaları",
        "Yayın ve destek",
      ],
      technologies: [
        "Stripe/PayPal",
        "Envanter sistemleri",
        "Müşteri yönetimi",
        "Analitik",
      ],
      benefits: [
        "Güvenli ödeme işlemleri",
        "Envanter yönetimi",
        "Yüksek dönüşüm tasarımı",
        "Ölçeklenebilir mimari",
      ],
      useCases: [
        "B2C e-ticaret",
        "Marketplace platformları",
        "Abonelik mağazaları",
        "Özel online mağazalar",
      ],
      faq: [
        {
          question: "Birden fazla ödeme sistemi entegre edebilir misiniz?",
          answer: "Evet, Stripe, PayPal ve diğer seçenekler mevcuttur.",
        },
        {
          question: "Sürekli mağaza bakımı sağlıyor musunuz?",
          answer: "Evet, mağazanızı sürekli izliyor ve güncelliyoruz.",
        },
      ],
      heroImageUrl: "/images/services/ecommerce-hero.jpg",
      idealFor: [
        "Perakendeciler",
        "Online satış yapan işletmeler",
        "B2C platformlar",
        "Marketplace’ler",
      ],
      pricingModel: "Mağaza başına fiyatlandırma.",
      commonMistakes: [
        "Ödeme güvenliğini ihmal etmek",
        "Envanter yönetimini ihmal etmek",
        "Kullanıcı deneyimini göz ardı etmek",
        "Performans optimizasyonu yapmamak",
      ],
      performanceMetrics: [
        "Ödeme başarısı %99",
        "Sipariş yönetimi %100 doğru",
        "Mobil uyumluluk %100",
        "Satış artışı %25+",
      ],
      keywords: [
        "e-ticaret",
        "online mağaza",
        "Stripe",
        "PayPal",
        "dönüşüm optimize",
      ],
      meta: {
        title: "Özel E-Ticaret Çözümleri | Bravix Creative",
        description:
          "Performans ve dönüşüm odaklı online mağazalar kurun. Güvenli ve ölçeklenebilir çözümler.",
      },
    },
    {
      id: "2003",
      slug: "ui-ux-tasarimi",
      title: "UI/UX Tasarımı",
      description: "Kullanıcı dostu ve estetik arayüz deneyimleri.",
      cta: "Deneyim Tasarla",
      process: [
        "Kullanıcı araştırması",
        "Taslak oluşturma",
        "Prototip oluşturma",
        "Kullanıcı testi",
        "Görsel tasarım",
        "Geliştirmeye aktarım",
      ],
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Prototip oluşturma araçları",
      ],
      detailedDescription:
        "UI/UX hizmetlerimiz, hem estetik açıdan çekici hem de gezinmesi kolay, sorunsuz kullanıcı deneyimleri yaratmaya odaklanır.",
      benefits: [
        "Kullanıcı dostu arayüzler",
        "Artan kullanıcı etkileşimi",
        "Estetik tasarım",
        "Tutarlı UX desenleri",
      ],
      useCases: [
        "Web uygulamaları",
        "Mobil uygulamalar",
        "Dashboardlar",
        "Landing page",
      ],
      faq: [
        {
          question: "Kullanıcı testi yapıyor musunuz?",
          answer: "Evet, gerçek kullanıcılarla test sürecimizde yer alıyor.",
        },
        {
          question: "Var olan bir ürünü yeniden tasarlayabilir misiniz?",
          answer:
            "Evet, analiz ve araştırmalar doğrultusunda UX geliştirmesi yapıyoruz.",
        },
      ],
      relatedProjects: [
        { title: "Seyahat Uygulaması UI", url: "/projects/travel-app-ui" },
        {
          title: "Dashboard Yeniden Tasarımı",
          url: "/projects/dashboard-redesign",
        },
      ],
      blogPosts: [
        { title: "UI/UX Tasarım Prensipleri", url: "/blog/ui-ux-principles" },
        { title: "Mobile First Tasarım", url: "/blog/mobile-first-design" },
      ],
    },
    {
      id: "2004",
      slug: "seo-optimizasyonu",
      title: "SEO Optimizasyonu",
      description: "Arama motorlarında görünürlüğünüzü artırın.",
      cta: "SEO'yu Güçlendir",
      process: [
        "Site denetimi",
        "Anahtar kelime araştırması",
        "Sayfa optimizasyonu",
        "Teknik SEO",
        "İçerik stratejisi",
        "Performans izleme",
      ],
      technologies: [
        "Google Analytics",
        "Search Console",
        "SEO araçları",
        "İçerik optimizasyonu",
      ],
      detailedDescription:
        "Web sitenizin organik trafiğini artırmak, arama motorlarındaki sıralamanızı yükseltmek ve sitenizi optimize etmek için kapsamlı SEO hizmetleri sunuyoruz.",
      benefits: [
        "Daha yüksek arama sıralamaları",
        "İyileştirilmiş trafik kalitesi",
        "Daha iyi dönüşüm",
        "Uzun vadeli büyüme",
      ],
      useCases: [
        "Kurumsal web siteleri",
        "E-ticaret siteleri",
        "Bloglar",
        "Landing page",
      ],
      faq: [
        {
          question: "SEO sonuçlarını ne zaman görürüm?",
          answer: "Genellikle 3-6 ay içinde önemli iyileşmeler görülür.",
        },
        {
          question: "SEO denetimi sağlıyor musunuz?",
          answer: "Evet, teknik ve içerik denetimleri dahildir.",
        },
      ],
      relatedProjects: [
        { title: "SEO Case Study - Perakende", url: "/projects/seo-retail" },
        { title: "SEO Case Study - SaaS", url: "/projects/seo-saas" },
      ],
      blogPosts: [
        { title: "2025 SEO Stratejileri", url: "/blog/seo-strategies-2025" },
        { title: "İçerik SEO Optimizasyonu", url: "/blog/content-seo" },
      ],
    },
    {
      id: "2005",
      slug: "bakim",
      title: "Bakım",
      description:
        "Web ve uygulamalarınız için sürekli destek ve güncellemeler.",
      cta: "Sitemi Koruma Altına Al",
      process: [
        "Düzenli güncellemeler",
        "Güvenlik izleme",
        "Performans optimizasyonu",
        "İçerik güncellemeleri",
        "Teknik destek",
        "Özellik eklemeleri",
      ],
      technologies: [
        "İzleme araçları",
        "Yedekleme sistemleri",
        "Güvenlik tarayıcıları",
        "Performans testi",
      ],
      detailedDescription:
        "Web sitelerinizin ve uygulamalarınızın güvenli, performanslı ve güncel kalmasını sağlayacak sürekli bakım hizmetleri sunuyoruz.",
      benefits: [
        "Güncel güvenlik",
        "Optimize performans",
        "İçerik yönetimi",
        "Özellik geliştirmeleri",
      ],
      useCases: [
        "Kurumsal web siteleri",
        "E-ticaret siteleri",
        "Web uygulamaları",
        "SaaS platformları",
      ],
      faq: [
        {
          question: "Acil destek sağlıyor musunuz?",
          answer: "Evet, 7/24 acil destek mevcuttur.",
        },
        {
          question: "Sistemleri ne sıklıkla güncelliyorsunuz?",
          answer: "Bakım kapsamında düzenli güncellemeler uygulanır.",
        },
      ],
      relatedProjects: [
        {
          title: "Kurumsal Site Bakımı",
          url: "/projects/corporate-maintenance",
        },
        { title: "E-Ticaret Bakımı", url: "/projects/ecommerce-maintenance" },
      ],
      blogPosts: [
        {
          title: "Web Site Bakımında En İyi Uygulamalar",
          url: "/blog/maintenance-best-practices",
        },
        {
          title: "Web Sitesi Güvenliğini Sağlamak",
          url: "/blog/website-security",
        },
      ],
    },
  ],
  ru: [
    {
      id: "2001",
      slug: "webdevelopment",
      title: "Веб-разработка",
      description:
        "Современные и адаптивные веб-сайты, созданные под ваши нужды.",
      cta: "Исследовать проекты",
      detailedDescription:
        "Мы создаем высокопроизводительные, SEO-оптимизированные и адаптивные веб-сайты с использованием новейших технологий. Идеально для стартапов, малого бизнеса и компаний, которые хотят масштабироваться онлайн.",
      process: [
        "Сбор требований",
        "Прототипирование и дизайн",
        "Frontend разработка",
        "Интеграция Backend",
        "Тестирование и оптимизация",
        "Запуск и поддержка",
      ],
      technologies: [
        "Next.js",
        "React JS",
        "Tailwind CSS",
        "HTML5",
        "Node.js",
        "MongoDB",
        "Sanity CMS",
      ],
      benefits: [
        "Адаптивный дизайн для всех устройств",
        "SEO-оптимизированная структура",
        "Индивидуальные CMS решения",
        "Быстрая загрузка и производительность",
      ],
      useCases: [
        "Корпоративные сайты",
        "Портфолио",
        "Landing page",
        "Интеграция e-commerce",
      ],
      faq: [
        {
          question: "Сколько времени занимает проект?",
          answer: "Обычно 4-8 недель в зависимости от сложности.",
        },
        {
          question: "Предоставляете ли поддержку после запуска?",
          answer: "Да, мы обеспечиваем обслуживание и обновления.",
        },
      ],
      heroImageUrl: "/images/services/web-hero.jpg",
      idealFor: [
        "Стартапы",
        "Малый бизнес",
        "Компании, желающие масштабироваться",
        "Онлайн-продажи",
      ],
      pricingModel: "Оплата за проект.",
      commonMistakes: [
        "Игнорирование UX",
        "Пренебрежение SEO",
        "Несогласованность дизайна",
        "Низкая скорость",
      ],
      performanceMetrics: [
        "Время загрузки < 2s",
        "SEO > 85%",
        "100% мобильная адаптация",
        "Рост трафика > 20%",
      ],
      keywords: [
        "веб-разработка",
        "Next.js",
        "React",
        "SEO веб",
        "frontend-backend",
      ],
      meta: {
        title: "Профессиональная веб-разработка | Bravix Creative",
        description:
          "Создавайте современные и производительные веб-сайты с SEO-оптимизацией. Быстро и эффективно.",
      },
    },
    {
      id: "2002",
      slug: "e-commerce-solutions",
      title: "E-Commerce Решения",
      description:
        "Индивидуальные онлайн-магазины, оптимизированные для продаж.",
      cta: "Создать магазин",
      detailedDescription:
        "Мы создаем безопасные, масштабируемые онлайн-магазины, оптимизированные для продаж и удобства пользователей. Идеально для розничных продавцов.",
      process: [
        "Планирование магазина",
        "Настройка каталога товаров",
        "Интеграция платежных систем",
        "Управление заказами",
        "Обеспечение безопасности",
        "Запуск и поддержка",
      ],
      technologies: [
        "Stripe/PayPal",
        "Системы управления складом",
        "Управление клиентами",
        "Аналитика",
      ],
      benefits: [
        "Безопасные платежи",
        "Управление складом",
        "Высокая конверсия дизайна",
        "Масштабируемая архитектура",
      ],
      useCases: [
        "B2C e-commerce",
        "Платформы маркетплейс",
        "Подписочные магазины",
        "Индивидуальные онлайн-магазины",
      ],
      faq: [
        {
          question: "Можно ли интегрировать несколько платежных систем?",
          answer: "Да, доступны Stripe, PayPal и другие варианты.",
        },
        {
          question: "Предоставляете ли вы постоянное обслуживание магазина?",
          answer: "Да, мы следим за вашим магазином и обновляем его.",
        },
      ],
      heroImageUrl: "/images/services/ecommerce-hero.jpg",
      idealFor: [
        "Розничные продавцы",
        "Онлайн-бизнес",
        "B2C платформы",
        "Маркетплейсы",
      ],
      pricingModel: "Стоимость за магазин.",
      commonMistakes: [
        "Игнорирование безопасности платежей",
        "Плохое управление складом",
        "Плохой UX",
        "Отсутствие оптимизации производительности",
      ],
      performanceMetrics: [
        "Успешные платежи > 99%",
        "Правильное управление заказами 100%",
        "100% мобильная адаптация",
        "Рост продаж > 25%",
      ],
      keywords: [
        "e-commerce",
        "онлайн-магазин",
        "Stripe",
        "PayPal",
        "конверсия",
      ],
      meta: {
        title: "Индивидуальные E-Commerce Решения | Bravix Creative",
        description:
          "Создавайте онлайн-магазины с фокусом на безопасность и конверсию. Масштабируемые и надежные решения.",
      },
    },
    {
      id: "2003",
      slug: "ui-ux-dizain",
      title: "UI/UX дизайн",
      description:
        "Интуитивно понятный и привлекательный пользовательский опыт.",
      cta: "Разработать интерфейс",
      process: [
        "Исследование пользователей",
        "Прототипирование",
        "Создание прототипов",
        "Тестирование пользователей",
        "Визуальный дизайн",
        "Передача в разработку",
      ],
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Инструменты прототипирования",
      ],
      detailedDescription:
        "Наши услуги UI/UX направлены на создание бесшовного пользовательского опыта, эстетически привлекательного и удобного для навигации, увеличивая вовлеченность и конверсии.",
      benefits: [
        "Удобные интерфейсы",
        "Повышение вовлеченности",
        "Эстетичный дизайн",
        "Последовательные UX шаблоны",
      ],
      useCases: [
        "Веб-приложения",
        "Мобильные приложения",
        "Панели управления",
        "Landing page",
      ],
      faq: [
        {
          question: "Проводите ли вы тестирование пользователей?",
          answer:
            "Да, тестирование с реальными пользователями включено в процесс.",
        },
        {
          question: "Можете ли вы переработать существующий продукт?",
          answer: "Да, мы улучшаем UX на основе исследований и аналитики.",
        },
      ],
      relatedProjects: [
        {
          title: "UI для приложения путешествий",
          url: "/projects/travel-app-ui",
        },
        { title: "Редизайн Dashboard", url: "/projects/dashboard-redesign" },
      ],
      blogPosts: [
        { title: "Принципы дизайна UI/UX", url: "/blog/ui-ux-principles" },
        { title: "Дизайн для Mobile First", url: "/blog/mobile-first-design" },
      ],
    },
    {
      id: "2004",
      slug: "seo-optimizatsiya",
      title: "SEO оптимизация",
      description: "Повышение видимости и позиции в поисковой выдаче.",
      cta: "Улучшить SEO",
      process: [
        "Аудит сайта",
        "Исследование ключевых слов",
        "Оптимизация страниц",
        "Технический SEO",
        "Стратегия контента",
        "Мониторинг производительности",
      ],
      technologies: [
        "Google Analytics",
        "Search Console",
        "SEO инструменты",
        "Оптимизация контента",
      ],
      detailedDescription:
        "Комплексные услуги SEO для увеличения органического трафика, улучшения рейтинга в поисковых системах и оптимизации структуры и контента сайта.",
      benefits: [
        "Более высокие позиции в поиске",
        "Улучшенное качество трафика",
        "Лучшая конверсия",
        "Долгосрочный рост",
      ],
      useCases: [
        "Корпоративные сайты",
        "Интернет-магазины",
        "Блоги",
        "Landing page",
      ],
      faq: [
        {
          question: "Когда будут видны результаты SEO?",
          answer: "Обычно значительные улучшения через 3-6 месяцев.",
        },
        {
          question: "Предоставляете ли вы SEO аудит?",
          answer: "Да, включены полные технические и контент аудиты.",
        },
      ],
      relatedProjects: [
        { title: "SEO Case Study - Розница", url: "/projects/seo-retail" },
        { title: "SEO Case Study - SaaS", url: "/projects/seo-saas" },
      ],
      blogPosts: [
        {
          title: "SEO стратегии на 2025 год",
          url: "/blog/seo-strategies-2025",
        },
        {
          title: "Оптимизация контента для поисковых систем",
          url: "/blog/content-seo",
        },
      ],
    },
    {
      id: "2005",
      slug: "tekhnicheskoe-obsluzhivanie",
      title: "Техническое обслуживание",
      description: "Постоянная поддержка и обновления ваших цифровых платформ.",
      cta: "Защитить сайт",
      process: [
        "Регулярные обновления",
        "Мониторинг безопасности",
        "Оптимизация производительности",
        "Обновление контента",
        "Техническая поддержка",
        "Добавление функций",
      ],
      technologies: [
        "Инструменты мониторинга",
        "Системы резервного копирования",
        "Сканеры безопасности",
        "Тестирование производительности",
      ],
      detailedDescription:
        "Постоянное обслуживание веб-сайтов и приложений для обеспечения безопасности, производительности и актуальности функций ваших цифровых активов.",
      benefits: [
        "Актуальная безопасность",
        "Оптимизированная производительность",
        "Управление контентом",
        "Улучшение функций",
      ],
      useCases: [
        "Корпоративные сайты",
        "Интернет-магазины",
        "Веб-приложения",
        "SaaS платформы",
      ],
      faq: [
        {
          question: "Предоставляете ли вы экстренную поддержку?",
          answer: "Да, 24/7 экстренная поддержка доступна.",
        },
        {
          question: "Как часто обновляются системы?",
          answer: "Регулярные обновления включены в обслуживание.",
        },
      ],
      relatedProjects: [
        {
          title: "Обслуживание корпоративного сайта",
          url: "/projects/corporate-maintenance",
        },
        {
          title: "Обслуживание E-Commerce",
          url: "/projects/ecommerce-maintenance",
        },
      ],
      blogPosts: [
        {
          title: "Лучшие практики обслуживания сайтов",
          url: "/blog/maintenance-best-practices",
        },
        {
          title: "Обеспечение безопасности сайта",
          url: "/blog/website-security",
        },
      ],
    },
  ],
};
