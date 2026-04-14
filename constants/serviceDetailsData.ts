export type ServiceDetails = {
  title: string;
  description: string;
  process: string[];
  technologies: string[];
};

// Her dil için ayrı service detayları
export const serviceDetailsData: Record<
  string, // locale (tr, en, ru, ...)
  Record<string, ServiceDetails> // serviceId -> ServiceDetails
> = {
  tr: {
    webDev: {
      title: "Web Geliştirme",
      description:
        "React JS, HTML5 ve Tailwind CSS kullanarak özel, duyarlı web siteleri oluşturuyorum. Her site, belirli ihtiyaçlarınızı ve hedeflerinizi karşılamak için sıfırdan inşa edilir.",
      process: [
        "Gereksinim toplama",
        "Taslak ve tasarım",
        "Frontend geliştirme",
        "Backend entegrasyonu",
        "Test ve optimizasyon",
        "Dağıtım ve bakım",
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
    },
    ecommerce: {
      title: "E-Ticaret Çözümleri",
      description:
        "Güvenli ödeme işleme, envanter yönetimi ve ürünlerinizi sergilemek için kullanıcı dostu arayüzlerle eksiksiz çevrimiçi mağaza çözümleri.",
      process: [
        "Mağaza planlama",
        "Ürün kataloğu kurulumu",
        "Ödeme geçidi entegrasyonu",
        "Sipariş yönetim sistemi",
        "Güvenlik uygulaması",
        "Lansman ve destek",
      ],
      technologies: [
        "Stripe/PayPal",
        "Envanter sistemleri",
        "Müşteri yönetimi",
        "Analitik",
      ],
    },
    uiDesign: {
      title: "UI/UX Tasarımı",
      description:
        "Kullanıcı göz önünde bulundurularak tasarlanmış güzel, sezgisel arayüzler. Hem görsel açıdan çekici hem de kullanımı kolay deneyimler yaratmaya odaklanıyorum.",
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
    },
    seo: {
      title: "SEO Optimizasyonu",
      description:
        "İşletmenize özel kapsamlı SEO stratejileriyle web sitenizin arama motorlarındaki görünürlüğünü artırın.",
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
    },
    mobileApp: {
      title: "Mobil Uygulamalar",
      description:
        "Tüm cihazlarda sorunsuz bir kullanıcı deneyimi sağlayan çapraz platform mobil uygulamalar.",
      process: [
        "Gereksinim tanımlama",
        "UI/UX tasarımı",
        "Geliştirme",
        "Test",
        "App store başvurusu",
        "Bakım",
      ],
      technologies: [
        "React Native",
        "Native API'lar",
        "App store dağıtımı",
        "Çapraz platform araçları",
      ],
    },
    maintenance: {
      title: "Bakım",
      description:
        "Sitenizin güvenli, güncel ve optimal performans göstermesini sağlamak için sürekli web sitesi desteği.",
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
    },
  },
  en: {
    webDev: {
      title: "Web Development",
      description:
        "I create custom, responsive websites using React JS, HTML5, and Tailwind CSS. Each site is built from the ground up to meet your specific needs and goals.",
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
    },
    ecommerce: {
      title: "E-Commerce Solutions",
      description:
        "Complete online store solutions with secure payment processing, inventory management, and user-friendly interfaces to showcase your products.",
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
    },
    uiDesign: {
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed with the user in mind. I focus on creating experiences that are both visually appealing and easy to use.",
      process: [
        "User research",
        "Wireframing",
        "Prototyping",
        "User testing",
        "Visual design",
        "Handoff to development",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping tools"],
    },
    seo: {
      title: "SEO Optimization",
      description:
        "Improve your website's visibility in search engines with comprehensive SEO strategies tailored to your business.",
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
    },
    mobileApp: {
      title: "Mobile Applications",
      description:
        "Cross-platform mobile applications that provide a seamless user experience across all devices.",
      process: [
        "Requirements definition",
        "UI/UX design",
        "Development",
        "Testing",
        "App store submission",
        "Maintenance",
      ],
      technologies: [
        "React Native",
        "Native APIs",
        "App store deployment",
        "Cross-platform tools",
      ],
    },
    maintenance: {
      title: "Maintenance",
      description:
        "Ongoing website support to ensure your site remains secure, up-to-date, and performing optimally.",
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
    },
  },
  ru: {
    webDev: {
      title: "Веб-разработка",
      description:
        "Я создаю индивидуальные, адаптивные веб-сайты с использованием React JS, HTML5 и Tailwind CSS. Каждый сайт строится с нуля, чтобы соответствовать вашим конкретным потребностям и целям.",
      process: [
        "Сбор требований",
        "Прототипирование и дизайн",
        "Фронтенд-разработка",
        "Интеграция бэкенда",
        "Тестирование и оптимизация",
        "Развертывание и обслуживание",
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
    },
    ecommerce: {
      title: "Решения для электронной коммерции",
      description:
        "Полные решения для интернет-магазинов с безопасной обработкой платежей, управлением запасами и удобными интерфейсами для демонстрации ваших товаров.",
      process: [
        "Планирование магазина",
        "Настройка каталога товаров",
        "Интеграция платежного шлюза",
        "Система управления заказами",
        "Внедрение систем безопасности",
        "Запуск и поддержка",
      ],
      technologies: [
        "Stripe/PayPal",
        "Системы учета запасов",
        "Управление клиентами",
        "Аналитика",
      ],
    },
    uiDesign: {
      title: "UI/UX дизайн",
      description:
        "Красивые, интуитивно понятные интерфейсы, разработанные с учетом пользователя. Я сосредотачиваюсь на создании опыта, который одновременно привлекателен визуально и прост в использовании.",
      process: [
        "Исследование пользователей",
        "Прототипирование",
        "Создание прототипов",
        "Пользовательское тестирование",
        "Визуальный дизайн",
        "Передача в разработку",
      ],
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Инструменты прототипирования",
      ],
    },
    seo: {
      title: "SEO оптимизация",
      description:
        "Улучшение видимости вашего сайта в поисковых системах с помощью комплексных стратегий SEO, адаптированных к вашему бизнесу.",
      process: [
        "Аудит сайта",
        "Исследование ключевых слов",
        "Оптимизация страниц",
        "Техническое SEO",
        "Стратегия контента",
        "Мониторинг производительности",
      ],
      technologies: [
        "Google Analytics",
        "Search Console",
        "Инструменты SEO",
        "Оптимизация контента",
      ],
    },
    mobileApp: {
      title: "Мобильные приложения",
      description:
        "Кросс-платформенные мобильные приложения, обеспечивающие безупречный пользовательский опыт на всех устройствах.",
      process: [
        "Определение требований",
        "UI/UX дизайн",
        "Разработка",
        "Тестирование",
        "Подача в App Store",
        "Обслуживание",
      ],
      technologies: [
        "React Native",
        "Native APIs",
        "Развертывание в App Store",
        "Кросс-платформенные инструменты",
      ],
    },
    maintenance: {
      title: "Техническое обслуживание",
      description:
        "Постоянная поддержка веб-сайта для обеспечения его безопасности, актуальности и оптимальной работы.",
      process: [
        "Регулярные обновления",
        "Мониторинг безопасности",
        "Оптимизация производительности",
        "Обновления контента",
        "Техническая поддержка",
        "Добавление функций",
      ],
      technologies: [
        "Инструменты мониторинга",
        "Системы резервного копирования",
        "Сканеры безопасности",
        "Тестирование производительности",
      ],
    },
  },
};
