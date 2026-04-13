export interface ProjectTestimonial {
  content: string;
  author: string;
  company?: string;
}

export interface ProjectAdminPanel {
  title?: string;
  content: string;
}

export interface ProjectFaqItem {
  question: string;
  answer: string;
}

export interface ProjectSeo {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface Project {
  id: string;
  slug: string;

  // UI
  title: string;
  shortDescription?: string;

  // SEO
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];

  // Business / classification
  client: string;
  type: string;
  category: string;
  industry?: string;
  serviceType?: string;

  // Core content
  description: string;
  challenge?: string;
  solution?: string;
  process?: string;
  results?: string[];

  // Conversion / trust
  testimonial?: ProjectTestimonial;
  adminPanel?: ProjectAdminPanel;
  faq?: ProjectFaqItem[];

  // Media / links
  images: string[];
  coverImage?: string;
  liveUrl?: string;
  viewLiveSite?: string;

  // Tech
  technologies: string[];

  // Optional SEO enhancements
  noindex?: boolean;
  publishedAt?: string;
  updatedAt?: string;
}

export const portfolioData: Record<string, Project[]> = {
  en: [
    {
      id: "1001",
      slug: "apartment-hotel-website-and-admin-panel",

      title: "Apartment Hotel Website",
      shortDescription:
        "Modern hotel website with a reservation-focused landing page and custom admin panel for rate and availability management.",

      seoTitle: "Apartment Hotel Website & Admin Panel",
      seoDescription:
        "Modern hotel website and admin panel developed for Monihomes. Professional solution with React, Node.js, and Google Calendar integration.",
      keywords: [
        "hotel website",
        "admin panel",
        "react node project",
        "bravix creative",
      ],

      client: "Monihomes",
      type: "web-design",
      category: "Web Design + Admin Panel",
      industry: "Hospitality",
      serviceType: "Hotel Website Development",

      description:
        "Modern single-page promotional website and custom admin panel for a hotel owner. The project provides a user-friendly interface for guests and allows the owner to manage room rates and availability easily.",
      challenge:
        "The client wanted a professional but simple site to promote their hotel. Additionally, a backend system was needed to track room availability via Google Calendar and collect reservation requests efficiently.",
      solution:
        "Designed a fast and stylish landing page with React. The admin panel was built with Node.js/Express, MongoDB, and JWT. Room availability is synchronized automatically with Google Calendar. Guests submit their information via a form, which is sent to the owner via email and WhatsApp. Google Analytics data is displayed in daily, weekly, and yearly charts.",
      process:
        "The project started with a simple hotel landing page structure focused on trust, room presentation, and direct reservation intent. After defining the content flow, a custom admin panel was created for availability control, pricing updates, and reservation management. Google Calendar synchronization and analytics dashboards were then integrated to simplify operations for the hotel owner.",
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

      adminPanel: {
        title: "Admin Panel",
        content:
          "The custom admin panel allows the hotel owner to manage rates, monitor room availability, and review reservation requests from a single interface. Google Calendar synchronization helps keep availability accurate and reduces manual follow-up.",
      },

      faq: [
        {
          question: "What was the main goal of this hotel website project?",
          answer:
            "The main goal was to create a professional website that promotes the hotel while also giving the owner an easy way to manage room availability and guest requests.",
        },
        {
          question: "Was an admin panel included in the project?",
          answer:
            "Yes. A custom admin panel was developed to manage availability, rates, and reservation-related workflows.",
        },
        {
          question: "Which technologies were used in this project?",
          answer:
            "The project was built with React, Node.js, MongoDB, Tailwind CSS, and Google Calendar API integration.",
        },
      ],

      images: [
        "/images/projects/monihomes_story.webp",
        "/images/projects/moniomes-2_iphones.webp",
        "/images/projects/monihomes_post.webp",
      ],
      coverImage: "/images/projects/monihomes_story.webp",
      liveUrl: "https://www.monihomes.com.tr",
      viewLiveSite: "View Site",

      technologies: [
        "React",
        "Node",
        "MongoDB",
        "Tailwind CSS",
        "Google Calendar API",
      ],

      publishedAt: "2025-01-12",
      updatedAt: "2026-03-20",
    },

    {
      id: "1002",
      slug: "vineyard-investment-website",

      title: "Vineyard Investment Website",
      shortDescription:
        "Fast, bilingual investment website designed to present vineyard opportunities, services, and blog content with a trustworthy brand image.",

      seoTitle: "Vineyard Investment Website",
      seoDescription:
        "Modern, fast, bilingual website for a vineyard investment company in Konya. Optimized solution with React and i18next.",
      keywords: [
        "vineyard investment website",
        "multilingual site",
        "react project",
        "bravix creative",
      ],

      client: "Bag Bahçe Yatırım",
      type: "web-design",
      category: "Multilingual Web Design",
      industry: "Investment / Real Estate",
      serviceType: "Multilingual Corporate Website Development",

      description:
        "Modern, fast, bilingual promotional website for a vineyard investment company in the Konya region. Presents services, investment guides, and blog content while reflecting a reliable and natural brand image.",
      challenge:
        "A fast, aesthetic, and multilingual website was needed to attract investors. The design aimed to match a natural and sustainable investment theme.",
      solution:
        "Designed a responsive and visually appealing landing page with React. Used a simple layout and natural tones. Multilingual content support (i18n) included. Sections: About, Investment Process, Blog, Contact.",
      process:
        "The site structure was planned around investor trust and clarity. Content sections were organized to explain the investment model, present the brand story, and guide visitors toward contact. Multilingual support was added early in the process so the website could serve both local and international audiences consistently.",
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

      faq: [
        {
          question: "Why was a bilingual structure important for this website?",
          answer:
            "Because the company wanted to present investment opportunities clearly to both local and foreign investors.",
        },
        {
          question: "What kind of website was developed for this brand?",
          answer:
            "A multilingual corporate promotional website focused on trust, clarity, and investment communication.",
        },
        {
          question: "Which technologies supported the project?",
          answer:
            "The website was built with React, Node, CSS3, i18next, and Framer Motion.",
        },
      ],

      images: [
        "/images/projects/bagbahce_multi.webp",
        "/images/projects/bby-phone.webp",
        "/images/projects/bby-2-pages.webp",
      ],
      coverImage: "/images/projects/bagbahce_multi.webp",
      liveUrl: "https://konyalimemlak.web.app/",
      viewLiveSite: "View Site",

      technologies: ["React", "Node", "CSS3", "i18next", "Framer Motion"],

      publishedAt: "2025-01-18",
      updatedAt: "2026-03-20",
    },

    {
      id: "1003",
      slug: "the-glass-hut-cabin-website",

      title: "The Glass Hut Website",
      shortDescription:
        "A visually immersive cabin website designed to showcase a calm glamping experience with booking-focused sections and FAQs.",

      seoTitle: "The Glass Hut – Glamping Cabin Website",
      seoDescription:
        "Single-page promotional website for a glass cabin with nature-immersive glamping experience. Easy booking and information access.",
      keywords: [
        "glamping site",
        "cabin promotional site",
        "single-page website",
        "react project",
      ],

      client: "Personal Project",
      type: "web-development",
      category: "Web Development",
      industry: "Hospitality / Travel",
      serviceType: "Promotional Website Development",

      description:
        "Modern and visually appealing promotional website for a glass cabin offering a nature-immersive glamping experience. Single-page design includes cabin details, surrounding area info, booking form, and FAQ.",
      challenge:
        "The client wanted a nature-friendly, simple, yet visually rich website to promote the cabin and provide easy access to information.",
      solution:
        "Built a single-page app with React and deployed via Firebase Hosting. Sections include The Hut, The Area, Booking, About Us, and FAQ. Animations and full-screen images create a calm and serene atmosphere.",
      process:
        "The design process focused on atmosphere first: large visuals, soft transitions, and a content structure that supports browsing without friction. Information architecture was shaped around the key user questions such as accommodation details, nearby area, booking, and trust-building content.",
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

      faq: [
        {
          question: "What kind of experience does this website promote?",
          answer:
            "It promotes a peaceful, nature-immersive glamping and cabin stay experience.",
        },
        {
          question: "Was the website designed as a single-page experience?",
          answer:
            "Yes. The project was built as a single-page promotional site with clear sections for details, booking, and FAQs.",
        },
        {
          question: "Which technologies were used?",
          answer:
            "The project used React, React Router, Tailwind CSS, Framer Motion, and Firebase Hosting.",
        },
      ],

      images: [
        "/images/projects/glasshut_multi.webp",
        "/images/projects/glasshut_screens__.webp",
        "/images/projects/glasshutscreens_.webp",
      ],
      coverImage: "/images/projects/glasshut_multi.webp",
      liveUrl: "https://theglasshut.web.app/",
      viewLiveSite: "Demo",

      technologies: [
        "React",
        "React Router",
        "Tailwind CSS",
        "Framer Motion",
        "Firebase Hosting",
      ],

      publishedAt: "2025-01-25",
      updatedAt: "2026-03-20",
    },

    {
      id: "1004",
      slug: "mindfulness-app-landing-page",

      title: "Mindfulness App Landing Page",
      shortDescription:
        "A calm, responsive landing page built to promote a mindfulness app with breathing animation, pricing, reviews, and conversion-focused sections.",

      seoTitle: "Mindfulness App Landing Page",
      seoDescription:
        "Single-page ZenMind landing page with calming design, interactive breathing animation, and mobile-friendly experience.",
      keywords: [
        "mindfulness site",
        "ZenMind landing",
        "landing page",
        "react project",
      ],

      client: "Personal Project",
      type: "web-design",
      category: "Landing Page Design",
      industry: "Wellness / Mobile Apps",
      serviceType: "Landing Page Design",

      description:
        "Single-page, serene, responsive website to promote the ZenMind mobile app. Uses calming colors, typography, and interactions aligned with mindfulness theme for a user-friendly experience.",
      challenge:
        "Client requested a fast-loading, mobile-friendly website reflecting the app’s calming nature. Main challenge: digitally convey mindfulness via interactive animations like breathing.",
      solution:
        "Built a responsive landing page with React and Tailwind CSS. 'Breathe In / Out' animation created using custom motion components. Design includes app promo, user reviews, pricing, and CTA buttons. White space and smooth transitions provide a calm UX.",
      process:
        "The landing page was structured around emotional clarity and conversion. First, visual direction and interaction tone were defined to match the mindfulness theme. Then the page sections were arranged to guide users from emotional connection to app discovery, pricing review, and call-to-action.",
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

      faq: [
        {
          question: "What was the main objective of this landing page?",
          answer:
            "The goal was to promote the app with a calm visual language while improving mobile engagement and app download intent.",
        },
        {
          question: "How was the mindfulness theme reflected in the design?",
          answer:
            "Through soft colors, generous white space, smooth transitions, and custom breathing-related interaction design.",
        },
        {
          question: "Which tools and technologies were used?",
          answer:
            "The page was built with React, Tailwind CSS, Framer Motion, responsive design principles, and Lottie Animation.",
        },
      ],

      images: [
        "/images/projects/zenmind_multi.webp",
        "/images/projects/zenmind_instagram.webp",
        "/images/projects/zenmind_laptop.png",
      ],
      coverImage: "/images/projects/zenmind_multi.webp",
      liveUrl: "",
      viewLiveSite: "Demo",

      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive Web Design",
        "Lottie Animation",
      ],

      publishedAt: "2025-02-02",
      updatedAt: "2026-03-20",
    },

    {
      id: "1005",
      slug: "creative-flow-dashboard",

      title: "Creative Flow Dashboard",
      shortDescription:
        "Modern dashboard UI concept designed for creators to manage analytics, income, tasks, and content in a clear and visually balanced layout.",

      seoTitle: "Creative Flow Dashboard UI",
      seoDescription:
        "Modern, responsive, aesthetic UI/UX dashboard for creators. Optimized for task, earnings, content, and analytics management.",
      keywords: [
        "ui/ux dashboard",
        "creative flow",
        "dashboard interface",
        "react project",
      ],

      client: "Personal Project",
      type: "ui-ux",
      category: "Dashboard UI/UX",
      industry: "Creator Economy / SaaS",
      serviceType: "Dashboard UI/UX Design",

      description:
        "Modern, responsive dashboard interface designed to streamline creators’ workflows. Focused on usability, clarity, and aesthetic balance for task, earnings, content, and analytics management.",
      challenge:
        "The goal was to build a visually appealing and functional dashboard for daily use. Main challenge: balance visual clarity and data density across mobile and desktop.",
      solution:
        "Used Figma for wireframes and high-fidelity prototypes. Designed intuitive user experience with income charts, recent activities, quick actions, and navigation. Color themes and spacing optimized focus and calmness for long-term use.",
      process:
        "The process began with understanding how creators interact with dense information every day. Wireframes prioritized quick scanning, modular cards, and clear hierarchy. After that, visual refinements focused on keeping the interface calm, expandable, and reusable across different dashboard scenarios.",
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

      faq: [
        {
          question: "Who is this dashboard concept designed for?",
          answer:
            "It is designed primarily for creators who need to manage analytics, tasks, income, and content from one interface.",
        },
        {
          question: "What was the biggest UI/UX challenge in this project?",
          answer:
            "The biggest challenge was presenting data-rich content clearly across both desktop and mobile layouts.",
        },
        {
          question: "Which tools were used in the design process?",
          answer:
            "The project used Figma, React, Tailwind CSS, responsive design methods, and data visualization principles.",
        },
      ],

      images: [
        "/images/projects/dasboard_destkop.webp",
        "/images/projects/dashboard_2.webp",
        "/images/projects/dashboard_1.webp",
      ],
      coverImage: "/images/projects/dasboard_destkop.webp",
      liveUrl: "https://creator-flow-dashboard.netlify.app/",
      viewLiveSite: "Demo",

      technologies: [
        "Figma",
        "React",
        "Tailwind CSS",
        "Responsive Design",
        "Data Visualization",
      ],

      publishedAt: "2025-02-10",
      updatedAt: "2026-03-20",
    },

    {
      id: "1006",
      slug: "fast-food-restaurant-website",

      title: "Fast Food Restaurant Website",
      shortDescription:
        "Interactive restaurant website with online ordering, secure payment flow, and real-time order tracking supported by a lightweight admin panel.",

      seoTitle: "Fast Food Restaurant Website",
      seoDescription:
        "Modern and interactive fast food website for Quick Bite. Optimized online ordering, payment, and real-time tracking.",
      keywords: [
        "fast food website",
        "online ordering",
        "restaurant panel",
        "react project",
      ],

      client: "Quick Bite",
      type: "web-application",
      category: "Web Design + E-commerce",
      industry: "Food & Beverage",
      serviceType: "Restaurant Website Development",

      description:
        "Quick Bite offers a complete online ordering experience for a fast food restaurant. Visitors can browse a modern responsive menu, add items to cart, make secure payments, and track orders in real-time.",
      challenge:
        "The goal was to replace traditional ordering with fully integrated online ordering, payment, and delivery tracking system to improve customer experience and internal efficiency.",
      solution:
        "Built an interactive food ordering platform with React. Key features include dynamic cart system, payment integration, and real-time order tracking dashboard.",
      process:
        "The product flow was designed around a familiar ordering journey: menu browsing, cart management, payment, and post-purchase tracking. After defining the customer flow, a lightweight admin side was added for order status updates and operational visibility. The interface was optimized for mobile-first use since many users place restaurant orders on mobile devices.",
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

      adminPanel: {
        title: "Admin Panel",
        content:
          "Lightweight admin panel enables staff to track incoming orders, update order status ('Preparing', 'On the Way', 'Delivered'), and securely access customer/payment info. Provides instant visibility into the order process and improves efficiency.",
      },

      faq: [
        {
          question: "What features were included in this restaurant website?",
          answer:
            "The platform includes menu browsing, cart management, secure payment flow, and real-time order tracking.",
        },
        {
          question: "Was there an admin area for restaurant staff?",
          answer:
            "Yes. A lightweight admin panel was included so staff could update order statuses and manage incoming orders efficiently.",
        },
        {
          question: "What was the main business goal of the project?",
          answer:
            "The main goal was to improve customer experience and internal efficiency by replacing manual ordering with a digital workflow.",
        },
      ],

      images: [
        "/images/projects/quickbite.webp",
        "/images/projects/QB_menu.webp",
        "/images/projects/menu-page.webp",
      ],
      coverImage: "/images/projects/quickbite.webp",
      liveUrl: "https://quick-bite-fastfood.netlify.app/",
      viewLiveSite: "Live Site",

      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Payment API",
        "Local Storage",
      ],

      publishedAt: "2025-02-18",
      updatedAt: "2026-03-20",
    },
    {
      id: "1007",
      slug: "ta-travel-web-site",

      title: "TA-Travel Website",
      shortDescription:
        "Modern tourism platform with destination pages, customer reviews, newsletter integration, and admin panel support.",

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

      client: "TA-Travel",
      type: "web-application",
      category: "Web Development + Admin Panel",
      industry: "Tourism",
      serviceType: "Corporate Website Development",

      description:
        "A modern and multifunctional promotional website developed for TA-Travel. The site features destination highlights, contact forms, customer testimonials, minimal costs, and legal policies. Users can easily access information, subscribe to newsletters, and leave reviews. The admin panel allows content management, review approval, and Google Analytics tracking.",

      challenge:
        "Creating a fast, user-friendly, and visually appealing website for TA-Travel customers, while simplifying admin panel management of reviews, newsletters, and analytics.",

      solution:
        "Developed a modern and responsive web application using React and Tailwind CSS. The admin panel allows review moderation, newsletter management, and Google Analytics tracking. Only approved reviews are published, and new subscribers are notified immediately.",

      process:
        "We planned the information architecture around tourism-focused landing sections, user reviews, destination browsing, and conversion-focused contact points. The admin side was structured to simplify publishing workflows and moderation.",

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

      images: [
        "/images/projects/ta-travel_home.webp",
        "/images/projects/ta-travel_about.webp",
        "/images/projects/ta-travel_destinations.webp",
      ],
      coverImage: "/images/projects/ta-travel_home.webp",

      liveUrl: "https://www.ta-travel.ru/",
      viewLiveSite: "Live Site",

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
      faq: [
        {
          question: "What was the main goal of this hotel website project?",
          answer:
            "The main goal was to create a professional website that promotes the hotel while also giving the owner an easy way to manage room availability and guest requests.",
        },
        {
          question: "Was an admin panel included in the project?",
          answer:
            "Yes. A custom admin panel was developed to manage availability, rates, and reservation-related workflows.",
        },
        {
          question: "Which technologies were used in this project?",
          answer:
            "The project was built with React, Node.js, MongoDB, Tailwind CSS, and Google Calendar API integration.",
        },
      ],
    },
  ],
  tr: [
    {
      id: "1001",
      slug: "apart-otel-web-sitesi-ve-yonetici-paneli",

      title: "Apart Otel Web Sitesi",
      shortDescription:
        "Rezervasyon odaklı açılış sayfası ve fiyat ile müsaitlik yönetimi için özel yönetim paneli içeren modern otel web sitesi.",

      seoTitle: "Apart Otel Web Sitesi ve Yönetim Paneli",
      seoDescription:
        "Monihomes için geliştirilen modern otel web sitesi ve yönetim paneli. React, Node.js ve Google Calendar entegrasyonu ile profesyonel çözüm.",
      keywords: [
        "otel web sitesi",
        "yönetim paneli",
        "react node projesi",
        "bravix creative",
      ],

      client: "Monihomes",
      type: "web-design",
      category: "Web Tasarım + Yönetim Paneli",
      industry: "Konaklama",
      serviceType: "Otel Web Sitesi Geliştirme",

      description:
        "Bir otel sahibi için geliştirilen modern tek sayfalık tanıtım sitesi ve özel yönetim paneli. Proje, misafirler için kullanıcı dostu bir arayüz sunarken, işletme sahibinin oda fiyatlarını ve müsaitliği kolayca yönetmesini sağlar.",
      challenge:
        "Müşteri, otelini tanıtmak için profesyonel ama sade bir site istiyordu. Buna ek olarak, oda müsaitliğini Google Calendar üzerinden takip edecek ve rezervasyon taleplerini verimli şekilde toplayacak bir arka plan sistemine ihtiyaç vardı.",
      solution:
        "React ile hızlı ve şık bir açılış sayfası tasarlandı. Yönetim paneli Node.js/Express, MongoDB ve JWT ile geliştirildi. Oda müsaitliği Google Calendar ile otomatik olarak senkronize edilir. Misafirler bilgilerini form üzerinden gönderir; bu bilgiler işletme sahibine e-posta ve WhatsApp üzerinden iletilir. Google Analytics verileri günlük, haftalık ve yıllık grafikler halinde gösterilir.",
      process:
        "Proje, güven, oda sunumu ve doğrudan rezervasyon niyeti odaklı sade bir otel açılış sayfası yapısıyla başladı. İçerik akışı belirlendikten sonra, müsaitlik kontrolü, fiyat güncellemeleri ve rezervasyon yönetimi için özel bir yönetim paneli oluşturuldu. Sonrasında Google Calendar senkronizasyonu ve analiz panelleri entegre edilerek otel sahibinin operasyonları kolaylaştırıldı.",
      results: [
        "Yönetim süresinde %60 azalma",
        "Tüm talepler %100 oranında e-posta ve WhatsApp üzerinden toplandı",
        "Mobil uyumlu tasarım kullanıcı deneyimini belirgin şekilde iyileştirdi",
      ],

      testimonial: {
        content:
          "Yeni web sitemiz ve yönetim panelimiz otel yönetimini çok daha kolay hale getirdi. Tüm bilgileri tek bir yerden kontrol edebiliyorum ve misafir talepleri bana anında ulaşıyor.",
        author: "U. Dinç, İşletme Sahibi",
        company: "Monihomes",
      },

      adminPanel: {
        title: "Yönetim Paneli",
        content:
          "Özel yönetim paneli, otel sahibinin fiyatları yönetmesine, oda müsaitliğini takip etmesine ve rezervasyon taleplerini tek bir arayüzden incelemesine olanak tanır. Google Calendar senkronizasyonu, müsaitlik bilgilerinin doğru kalmasına yardımcı olur ve manuel takibi azaltır.",
      },

      faq: [
        {
          question: "Bu otel web sitesi projesinin temel amacı neydi?",
          answer:
            "Temel amaç, oteli tanıtan profesyonel bir web sitesi oluştururken aynı zamanda işletme sahibine oda müsaitliği ve misafir taleplerini kolayca yönetebileceği bir yapı sunmaktı.",
        },
        {
          question: "Projeye bir yönetim paneli dahil edildi mi?",
          answer:
            "Evet. Müsaitlik, fiyatlar ve rezervasyon süreçlerini yönetmek için özel bir yönetim paneli geliştirildi.",
        },
        {
          question: "Bu projede hangi teknolojiler kullanıldı?",
          answer:
            "Proje React, Node.js, MongoDB, Tailwind CSS ve Google Calendar API entegrasyonu ile geliştirildi.",
        },
      ],

      images: [
        "/images/projects/monihomes_story.webp",
        "/images/projects/moniomes-2_iphones.webp",
        "/images/projects/monihomes_post.webp",
      ],
      coverImage: "/images/projects/monihomes_story.webp",
      liveUrl: "https://www.monihomes.com.tr",
      viewLiveSite: "Siteyi Gör",

      technologies: [
        "React",
        "Node",
        "MongoDB",
        "Tailwind CSS",
        "Google Calendar API",
      ],

      publishedAt: "2025-01-12",
      updatedAt: "2026-03-20",
    },

    {
      id: "1002",
      slug: "bag-yatirim-web-sitesi",

      title: "Bağ Yatırım Web Sitesi",
      shortDescription:
        "Bağ yatırım fırsatlarını, hizmetleri ve blog içeriklerini güven veren bir marka yapısıyla sunmak için tasarlanmış hızlı ve iki dilli yatırım web sitesi.",

      seoTitle: "Bağ Yatırım Web Sitesi",
      seoDescription:
        "Konya’daki bir bağ yatırım şirketi için modern, hızlı ve iki dilli web sitesi. React ve i18next ile optimize edilmiş çözüm.",
      keywords: [
        "bağ yatırım web sitesi",
        "çok dilli site",
        "react projesi",
        "bravix creative",
      ],

      client: "Bağ Bahçe Yatırım",
      type: "web-design",
      category: "Çok Dilli Web Tasarım",
      industry: "Yatırım / Gayrimenkul",
      serviceType: "Çok Dilli Kurumsal Web Sitesi Geliştirme",

      description:
        "Konya bölgesindeki bir bağ yatırım şirketi için hazırlanan modern, hızlı ve iki dilli tanıtım web sitesi. Hizmetleri, yatırım rehberlerini ve blog içeriklerini sunarken güvenilir ve doğal bir marka imajı yansıtır.",
      challenge:
        "Yatırımcıları çekmek için hızlı, estetik ve çok dilli bir web sitesine ihtiyaç vardı. Tasarımın doğal ve sürdürülebilir yatırım temasına uyum sağlaması hedeflendi.",
      solution:
        "React ile duyarlı ve görsel açıdan güçlü bir açılış sayfası tasarlandı. Sade yerleşim ve doğal tonlar kullanıldı. Çok dilli içerik desteği (i18n) eklendi. Bölümler: Hakkımızda, Yatırım Süreci, Blog, İletişim.",
      process:
        "Site yapısı, yatırımcı güveni ve içerik netliği etrafında planlandı. İçerik bölümleri yatırım modelini açıklamak, marka hikayesini sunmak ve ziyaretçileri iletişime yönlendirmek için düzenlendi. Çok dilli destek, web sitesinin hem yerel hem uluslararası kitlelere tutarlı biçimde hizmet verebilmesi için sürecin erken aşamasında eklendi.",
      results: [
        "Profesyonel tasarım marka güvenini artırdı",
        "İki dilli arayüz yabancı yatırımcılar için erişilebilirliği artırdı",
        "Performans hem mobil hem masaüstü kullanıcılar için optimize edildi",
      ],

      testimonial: {
        content:
          "Web sitemiz görsel olarak etkileyici ve tatmin edici bir kullanıcı deneyimi sunuyor. Yatırımcılarla iletişim kurmak çok daha kolay hale geldi.",
        author: "V. Karakuş",
        company: "Bağ Bahçe Yatırım",
      },

      faq: [
        {
          question: "Bu web sitesi için neden iki dilli yapı önemliydi?",
          answer:
            "Çünkü şirket yatırım fırsatlarını hem yerel hem de yabancı yatırımcılara açık ve anlaşılır şekilde sunmak istiyordu.",
        },
        {
          question: "Bu marka için nasıl bir web sitesi geliştirildi?",
          answer:
            "Güven, netlik ve yatırım iletişimi odaklı çok dilli kurumsal bir tanıtım web sitesi geliştirildi.",
        },
        {
          question: "Projede hangi teknolojiler kullanıldı?",
          answer:
            "Web sitesi React, Node, CSS3, i18next ve Framer Motion ile geliştirildi.",
        },
      ],

      images: [
        "/images/projects/bagbahce_multi.webp",
        "/images/projects/bby-phone.webp",
        "/images/projects/bby-2-pages.webp",
      ],
      coverImage: "/images/projects/bagbahce_multi.webp",
      liveUrl: "https://konyalimemlak.web.app/",
      viewLiveSite: "Siteyi Gör",

      technologies: ["React", "Node", "CSS3", "i18next", "Framer Motion"],

      publishedAt: "2025-01-18",
      updatedAt: "2026-03-20",
    },

    {
      id: "1003",
      slug: "the-glass-hut-kabin-tanitim-sitesi",

      title: "The Glass Hut Web Sitesi",
      shortDescription:
        "Sakin bir glamping deneyimini rezervasyon odaklı bölümler ve sık sorulan sorular ile sunmak için tasarlanmış görsel açıdan etkileyici kabin web sitesi.",

      seoTitle: "The Glass Hut – Glamping Kabin Web Sitesi",
      seoDescription:
        "Doğayla iç içe glamping deneyimi sunan cam kabin için tek sayfalık tanıtım web sitesi. Kolay rezervasyon ve bilgi erişimi.",
      keywords: [
        "glamping sitesi",
        "kabin tanıtım sitesi",
        "tek sayfalık web sitesi",
        "react projesi",
      ],

      client: "Kişisel Proje",
      type: "web-development",
      category: "Web Geliştirme",
      industry: "Konaklama / Seyahat",
      serviceType: "Tanıtım Web Sitesi Geliştirme",

      description:
        "Doğayla iç içe glamping deneyimi sunan cam kabin için modern ve görsel açıdan etkileyici tanıtım web sitesi. Tek sayfalık tasarım; kabin detayları, çevre bilgileri, rezervasyon formu ve sık sorulan sorular bölümlerini içerir.",
      challenge:
        "Müşteri, kabini tanıtmak ve bilgilere kolay erişim sağlamak için doğa dostu, sade ama görsel açıdan zengin bir web sitesi istiyordu.",
      solution:
        "React ile tek sayfalık bir uygulama geliştirildi ve Firebase Hosting üzerinden yayınlandı. The Hut, The Area, Booking, About Us ve FAQ bölümleri eklendi. Animasyonlar ve tam ekran görseller, sakin ve huzurlu bir atmosfer oluşturdu.",
      process:
        "Tasarım süreci önce atmosfer üzerine kuruldu: büyük görseller, yumuşak geçişler ve akıcı gezinmeyi destekleyen bir içerik yapısı. Bilgi mimarisi; konaklama detayları, yakın çevre, rezervasyon ve güven oluşturan içerikler gibi kullanıcıların temel soruları etrafında şekillendirildi.",
      results: [
        "Markayı yansıtan temiz ve etkileyici bir dijital görünüm oluşturuldu",
        "Mobil uyumlu tasarım ve net gezinme kullanıcı deneyimini iyileştirdi",
        "Sitede geçirilen süre arttı",
      ],

      testimonial: {
        content:
          "Sitemiz tam hayal ettiğimiz gibi oldu: sade, şık ve doğa dostu. Misafirler artık bilgilere kolayca ulaşıyor ve rezervasyon süreci daha net.",
        author: "Konsept Geri Bildirimi",
        company: "İç Değerlendirme",
      },

      faq: [
        {
          question: "Bu web sitesi nasıl bir deneyimi tanıtıyor?",
          answer:
            "Doğayla iç içe, huzurlu bir glamping ve kabin konaklama deneyimini tanıtıyor.",
        },
        {
          question: "Web sitesi tek sayfalık bir deneyim olarak mı tasarlandı?",
          answer:
            "Evet. Proje, detaylar, rezervasyon ve sık sorulan sorular için net bölümler içeren tek sayfalık bir tanıtım sitesi olarak geliştirildi.",
        },
        {
          question: "Hangi teknolojiler kullanıldı?",
          answer:
            "Projede React, React Router, Tailwind CSS, Framer Motion ve Firebase Hosting kullanıldı.",
        },
      ],

      images: [
        "/images/projects/glasshut_multi.webp",
        "/images/projects/glasshut_screens__.webp",
        "/images/projects/glasshutscreens_.webp",
      ],
      coverImage: "/images/projects/glasshut_multi.webp",
      liveUrl: "https://theglasshut.web.app/",
      viewLiveSite: "Demo",

      technologies: [
        "React",
        "React Router",
        "Tailwind CSS",
        "Framer Motion",
        "Firebase Hosting",
      ],

      publishedAt: "2025-01-25",
      updatedAt: "2026-03-20",
    },

    {
      id: "1004",
      slug: "mindfulness-uygulama-tanitim-sitesi",

      title: "Mindfulness Uygulaması Açılış Sayfası",
      shortDescription:
        "Nefes animasyonu, fiyatlandırma, kullanıcı yorumları ve dönüşüm odaklı bölümlerle bir mindfulness uygulamasını tanıtmak için hazırlanmış sakin ve duyarlı açılış sayfası.",

      seoTitle: "Mindfulness Uygulaması Açılış Sayfası",
      seoDescription:
        "Sakin tasarım, etkileşimli nefes animasyonu ve mobil uyumlu deneyim sunan tek sayfalık ZenMind açılış sayfası.",
      keywords: [
        "mindfulness sitesi",
        "ZenMind açılış sayfası",
        "landing page",
        "react projesi",
      ],

      client: "Kişisel Proje",
      type: "web-design",
      category: "Açılış Sayfası Tasarımı",
      industry: "Sağlık / Mobil Uygulamalar",
      serviceType: "Açılış Sayfası Tasarımı",

      description:
        "ZenMind mobil uygulamasını tanıtmak için hazırlanmış tek sayfalık, sakin ve duyarlı web sitesi. Kullanıcı dostu deneyim için mindfulness temasıyla uyumlu sakin renkler, tipografi ve etkileşimler kullanır.",
      challenge:
        "Müşteri, uygulamanın sakin doğasını yansıtan hızlı açılan ve mobil uyumlu bir web sitesi talep etti. Ana zorluk, nefes gibi etkileşimli animasyonlarla mindfulness hissini dijital olarak aktarabilmekti.",
      solution:
        "React ve Tailwind CSS ile duyarlı bir açılış sayfası geliştirildi. 'Nefes Al / Ver' animasyonu özel motion bileşenleri ile oluşturuldu. Tasarım; uygulama tanıtımı, kullanıcı yorumları, fiyatlandırma ve CTA butonlarını içerir. Boşluk kullanımı ve yumuşak geçişler sakin bir kullanıcı deneyimi sağlar.",
      process:
        "Açılış sayfası, duygusal netlik ve dönüşüm etrafında yapılandırıldı. Önce mindfulness temasına uygun görsel yön ve etkileşim dili belirlendi. Ardından sayfa bölümleri, kullanıcıyı duygusal bağdan uygulamayı keşfetmeye, fiyatlandırmayı incelemeye ve harekete geçirici mesaja yönlendirecek şekilde sıralandı.",
      results: [
        "Mobil dönüşüm %45 arttı",
        "UI/UX tasarımı erken kullanıcılar tarafından büyük beğeni topladı",
        "Net CTA, uygulama indirmelerini artırdı",
      ],

      testimonial: {
        content:
          "Açılış sayfası tam uygulamamız gibi hissettiriyor: sakin, sade ve ilham verici. Marka sesimizle mükemmel şekilde örtüşüyor.",
        author: "Konsept Geri Bildirimi",
        company: "İç Değerlendirme",
      },

      faq: [
        {
          question: "Bu açılış sayfasının temel amacı neydi?",
          answer:
            "Amaç, sakin bir görsel dil ile uygulamayı tanıtmak ve aynı zamanda mobil etkileşimi ile indirme niyetini artırmaktı.",
        },
        {
          question: "Mindfulness teması tasarıma nasıl yansıtıldı?",
          answer:
            "Yumuşak renkler, geniş boşluklar, akıcı geçişler ve nefes temalı özel etkileşim tasarımı ile yansıtıldı.",
        },
        {
          question: "Hangi araçlar ve teknolojiler kullanıldı?",
          answer:
            "Sayfa React, Tailwind CSS, Framer Motion, responsive tasarım prensipleri ve Lottie Animation ile geliştirildi.",
        },
      ],

      images: [
        "/images/projects/zenmind_multi.webp",
        "/images/projects/zenmind_instagram.webp",
        "/images/projects/zenmind_laptop.png",
      ],
      coverImage: "/images/projects/zenmind_multi.webp",
      liveUrl: "",
      viewLiveSite: "Demo",

      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive Web Design",
        "Lottie Animation",
      ],

      publishedAt: "2025-02-02",
      updatedAt: "2026-03-20",
    },

    {
      id: "1005",
      slug: "yaratici-akis-paneli-arayuzu",

      title: "Creative Flow Dashboard",
      shortDescription:
        "Üreticilerin analiz, gelir, görev ve içeriklerini net ve görsel açıdan dengeli bir arayüzde yönetmesi için tasarlanmış modern dashboard UI konsepti.",

      seoTitle: "Creative Flow Dashboard UI",
      seoDescription:
        "Üreticiler için modern, duyarlı ve estetik dashboard UI/UX. Görev, gelir, içerik ve analiz yönetimi için optimize edildi.",
      keywords: [
        "ui/ux dashboard",
        "creative flow",
        "dashboard arayüzü",
        "react projesi",
      ],

      client: "Kişisel Proje",
      type: "ui-ux",
      category: "Dashboard UI/UX",
      industry: "İçerik Üretici Ekonomisi / SaaS",
      serviceType: "Dashboard UI/UX Tasarımı",

      description:
        "Üreticilerin iş akışlarını kolaylaştırmak için tasarlanmış modern ve duyarlı dashboard arayüzü. Görev, kazanç, içerik ve analiz yönetiminde kullanılabilirlik, netlik ve estetik dengeye odaklanır.",
      challenge:
        "Hedef, günlük kullanım için görsel açıdan güçlü ve işlevsel bir dashboard oluşturmaktı. Ana zorluk, mobil ve masaüstünde görsel netlik ile veri yoğunluğu arasında denge kurmaktı.",
      solution:
        "Wireframe ve yüksek doğruluklu prototipler için Figma kullanıldı. Gelir grafikleri, son aktiviteler, hızlı işlemler ve gezinme ile sezgisel kullanıcı deneyimi tasarlandı. Renk temaları ve boşluk kullanımı, uzun süreli kullanım için odak ve sakinlik sağlayacak şekilde optimize edildi.",
      process:
        "Süreç, üreticilerin yoğun bilgiyle her gün nasıl etkileşime geçtiğini anlamakla başladı. Wireframe'ler hızlı tarama, modüler kartlar ve net bir hiyerarşi önceliğiyle oluşturuldu. Sonrasında görsel iyileştirmeler, arayüzü sakin, genişletilebilir ve farklı dashboard senaryolarında yeniden kullanılabilir tutmaya odaklandı.",
      results: [
        "Minimum bilişsel yük ile verimli iş akışı",
        "Genişlemeye uygun, yüksek uyarlanabilir bileşen sistemi",
        "Estetik ve kullanılabilirlik açısından yaratıcı profesyonellerden olumlu geri bildirim",
      ],

      testimonial: {
        content:
          "Bu dashboard, işlevsellik ile görsel netlik arasında mükemmel bir denge kuruyor. Bir içerik üreticisi olarak bunu her gün kullanmak isterdim.",
        author: "Konsept Geri Bildirimi",
        company: "İç Değerlendirme",
      },

      faq: [
        {
          question: "Bu dashboard konsepti kimler için tasarlandı?",
          answer:
            "Öncelikli olarak analiz, görev, gelir ve içeriklerini tek arayüzden yönetmek isteyen içerik üreticileri için tasarlandı.",
        },
        {
          question: "Bu projedeki en büyük UI/UX zorluğu neydi?",
          answer:
            "En büyük zorluk, veri yoğun içerikleri hem masaüstü hem mobil düzenlerde net şekilde sunmaktı.",
        },
        {
          question: "Tasarım sürecinde hangi araçlar kullanıldı?",
          answer:
            "Projede Figma, React, Tailwind CSS, responsive tasarım yöntemleri ve veri görselleştirme prensipleri kullanıldı.",
        },
      ],

      images: [
        "/images/projects/dasboard_destkop.webp",
        "/images/projects/dashboard_2.webp",
        "/images/projects/dashboard_1.webp",
      ],
      coverImage: "/images/projects/dasboard_destkop.webp",
      liveUrl: "https://creator-flow-dashboard.netlify.app/",
      viewLiveSite: "Demo",

      technologies: [
        "Figma",
        "React",
        "Tailwind CSS",
        "Responsive Design",
        "Data Visualization",
      ],

      publishedAt: "2025-02-10",
      updatedAt: "2026-03-20",
    },

    {
      id: "1006",
      slug: "fast-food-restoran-web-sitesi",

      title: "Fast Food Restoran Web Sitesi",
      shortDescription:
        "Hafif bir yönetim paneliyle desteklenen, online sipariş, güvenli ödeme akışı ve gerçek zamanlı sipariş takibi sunan etkileşimli restoran web sitesi.",

      seoTitle: "Fast Food Restoran Web Sitesi",
      seoDescription:
        "Quick Bite için modern ve etkileşimli fast food web sitesi. Online sipariş, ödeme ve gerçek zamanlı takip için optimize edildi.",
      keywords: [
        "fast food web sitesi",
        "online sipariş",
        "restoran paneli",
        "react projesi",
      ],

      client: "Quick Bite",
      type: "web-application",
      category: "Web Tasarım + E-ticaret",
      industry: "Yeme & İçme",
      serviceType: "Restoran Web Sitesi Geliştirme",

      description:
        "Quick Bite, bir fast food restoranı için eksiksiz bir online sipariş deneyimi sunar. Ziyaretçiler modern ve duyarlı menüyü inceleyebilir, ürünleri sepete ekleyebilir, güvenli ödeme yapabilir ve siparişlerini gerçek zamanlı takip edebilir.",
      challenge:
        "Amaç, müşteri deneyimini ve iç operasyon verimliliğini artırmak için geleneksel sipariş sürecini tamamen entegre bir online sipariş, ödeme ve teslimat takip sistemiyle değiştirmekti.",
      solution:
        "React ile etkileşimli bir yemek sipariş platformu geliştirildi. Temel özellikler arasında dinamik sepet sistemi, ödeme entegrasyonu ve gerçek zamanlı sipariş takip paneli bulunur.",
      process:
        "Ürün akışı, alışıldık bir sipariş yolculuğu etrafında tasarlandı: menü inceleme, sepet yönetimi, ödeme ve sipariş sonrası takip. Müşteri akışı tanımlandıktan sonra, sipariş durum güncellemeleri ve operasyon görünürlüğü için hafif bir yönetim tarafı eklendi. Arayüz, kullanıcıların restoran siparişlerini çoğunlukla mobil üzerinden vermesi nedeniyle mobil öncelikli olarak optimize edildi.",
      results: [
        "Güvenli online ödeme ve gerçek zamanlı teslimat takibi",
        "Yönetim paneli sayesinde sipariş yönetiminde verimlilik artışı",
        "Mobil öncelikli tasarım müşteri memnuniyetini artırdı",
      ],

      testimonial: {
        content:
          "Müşterilerimiz online sipariş ve ödeme kolaylığını çok seviyor. Sipariş takip özelliği telefon aramalarını azalttı ve iş akışını iyileştirdi.",
        author: "Restoran Müdürü",
        company: "Quick Bite",
      },

      adminPanel: {
        title: "Yönetim Paneli",
        content:
          "Hafif yönetim paneli, çalışanların gelen siparişleri takip etmesine, sipariş durumlarını ('Hazırlanıyor', 'Yolda', 'Teslim Edildi') güncellemesine ve müşteri/ödeme bilgilerine güvenli şekilde erişmesine olanak tanır. Süreç üzerinde anlık görünürlük sağlar ve verimliliği artırır.",
      },

      faq: [
        {
          question: "Bu restoran web sitesine hangi özellikler dahil edildi?",
          answer:
            "Platform; menü inceleme, sepet yönetimi, güvenli ödeme akışı ve gerçek zamanlı sipariş takibini içerir.",
        },
        {
          question: "Restoran personeli için bir yönetim alanı var mıydı?",
          answer:
            "Evet. Personelin sipariş durumlarını güncelleyebilmesi ve gelen siparişleri verimli şekilde yönetebilmesi için hafif bir yönetim paneli eklendi.",
        },
        {
          question: "Projenin temel iş hedefi neydi?",
          answer:
            "Temel hedef, manuel sipariş sürecini dijital iş akışıyla değiştirerek müşteri deneyimini ve iç operasyon verimliliğini artırmaktı.",
        },
      ],

      images: [
        "/images/projects/quickbite.webp",
        "/images/projects/QB_menu.webp",
        "/images/projects/menu-page.webp",
      ],
      coverImage: "/images/projects/quickbite.webp",
      liveUrl: "https://quick-bite-fastfood.netlify.app/",
      viewLiveSite: "Canlı Site",

      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Payment API",
        "Local Storage",
      ],

      publishedAt: "2025-02-18",
      updatedAt: "2026-03-20",
    },

    {
      id: "1007",
      slug: "ta-travel-web-sitesi",

      title: "TA-Travel Web Sitesi",
      shortDescription:
        "Destinasyon sayfaları, müşteri yorumları, bülten entegrasyonu ve yönetim paneli desteği sunan modern turizm platformu.",

      seoTitle:
        "TA-Travel Web Sitesi | Modern Turizm Platformu ve Yönetim Paneli",
      seoDescription:
        "TA-Travel için geliştirilen; destinasyon öne çıkanları, müşteri yorumları, bülten işlevi ve yönetim paneli optimizasyonu sunan modern web sitesi.",
      keywords: [
        "turizm web sitesi",
        "TA-Travel",
        "react projesi",
        "yönetim paneli",
        "bülten",
        "Google Analytics",
      ],

      client: "TA-Travel",
      type: "web-application",
      category: "Web Geliştirme + Yönetim Paneli",
      industry: "Turizm",
      serviceType: "Kurumsal Web Sitesi Geliştirme",

      description:
        "TA-Travel için geliştirilen modern ve çok işlevli tanıtım web sitesi. Site; destinasyon öne çıkanları, iletişim formları, müşteri yorumları, düşük maliyet vurgusu ve yasal politika sayfaları içerir. Kullanıcılar bilgilere kolayca erişebilir, bültene abone olabilir ve yorum bırakabilir. Yönetim paneli ise içerik yönetimi, yorum onayı ve Google Analytics takibi sağlar.",
      challenge:
        "TA-Travel müşterileri için hızlı, kullanıcı dostu ve görsel açıdan güçlü bir web sitesi oluştururken; yorumlar, bültenler ve analizlerin yönetimini panel tarafında kolaylaştırmak.",
      solution:
        "React ve Tailwind CSS ile modern ve duyarlı bir web uygulaması geliştirildi. Yönetim paneli; yorum moderasyonu, bülten yönetimi ve Google Analytics takibi sunar. Yalnızca onaylanan yorumlar yayınlanır ve yeni aboneler anında yönetime bildirilir.",
      process:
        "Bilgi mimarisi; turizm odaklı açılış bölümleri, kullanıcı yorumları, destinasyon keşfi ve dönüşüm odaklı iletişim noktaları etrafında planlandı. Yönetim tarafı ise yayın akışını ve moderasyon süreçlerini kolaylaştıracak şekilde yapılandırıldı.",
      results: [
        "Ziyaretçiler destinasyonları kolayca inceleyip yorum bırakabiliyor",
        "Bülten özelliği kullanıcı ile marka etkileşimini güçlendirdi",
        "Yönetim paneli içerik ve yorum yönetimini kolaylaştırdı",
        "Google Analytics entegrasyonu performans ve kullanıcı davranışlarını takip etmeyi sağladı",
      ],

      adminPanel: {
        title: "Yönetim Paneli",
        content:
          "Yönetim paneli, kullanıcı yorumlarını moderasyon etmeyi, bülten aboneliklerini yönetmeyi ve Google Analytics verilerini görüntülemeyi sağlar. Yöneticiler hangi yorumların yayınlanacağına karar verir ve tüm süreçleri verimli şekilde yönetir.",
      },

      testimonial: {
        content:
          "Yeni web sitemiz sayesinde ziyaretçiler içeriklere ve hizmetlere kolayca ulaşabiliyor. Yorum ve bülten yönetimi yönetim paneli üzerinden çok kolay hale geldi.",
        author: "TA-Travel Ekibi",
        company: "TA-Travel",
      },

      images: [
        "/images/projects/ta-travel_home.webp",
        "/images/projects/ta-travel_about.webp",
        "/images/projects/ta-travel_destinations.webp",
      ],
      coverImage: "/images/projects/ta-travel_home.webp",

      liveUrl: "https://www.ta-travel.ru/",
      viewLiveSite: "Canlı Site",

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
      faq: [
        {
          question: "TA-Travel web sitesinde hangi özellikler yer aldı?",
          answer:
            "Web sitesinde destinasyon öne çıkanları, iletişim formları, müşteri yorumları, bülten aboneliği, yasal politika sayfaları ve içerik ile yorum yönetimi için bir yönetim paneli yer aldı.",
        },
        {
          question: "Bu proje için bir yönetim paneli geliştirildi mi?",
          answer:
            "Evet. Yorumları, bülten aboneliklerini ve Google Analytics verilerini yönetmek için özel bir yönetim paneli geliştirildi.",
        },
        {
          question: "Bu projede hangi teknolojiler kullanıldı?",
          answer:
            "Proje React, Tailwind CSS, Node.js, MongoDB, Firebase Hosting, i18next, Google Analytics ve Email API ile geliştirildi.",
        },
      ],
    },
  ],
  ru: [
    {
      id: "1001",
      slug: "veb-sayt-apart-otelya-i-administrativnaya-panel",

      title: "Сайт апарт-отеля",
      shortDescription:
        "Современный сайт отеля с посадочной страницей, ориентированной на бронирование, и собственной админ-панелью для управления ценами и доступностью.",

      seoTitle: "Сайт апарт-отеля и админ-панель",
      seoDescription:
        "Современный сайт отеля и админ-панель, разработанные для Monihomes. Профессиональное решение на React, Node.js и с интеграцией Google Calendar.",
      keywords: [
        "сайт отеля",
        "админ-панель",
        "проект react node",
        "bravix creative",
      ],

      client: "Monihomes",
      type: "web-design",
      category: "Веб-дизайн + админ-панель",
      industry: "Гостеприимство",
      serviceType: "Разработка сайта для отеля",

      description:
        "Современный одностраничный промо-сайт и индивидуальная админ-панель для владельца отеля. Проект предоставляет удобный интерфейс для гостей и позволяет владельцу легко управлять ценами на номера и доступностью.",
      challenge:
        "Клиенту нужен был профессиональный, но при этом простой сайт для продвижения отеля. Кроме того, требовалась внутренняя система для отслеживания доступности номеров через Google Calendar и эффективного сбора запросов на бронирование.",
      solution:
        "Была разработана быстрая и стильная посадочная страница на React. Админ-панель создана на Node.js/Express, MongoDB и JWT. Доступность номеров автоматически синхронизируется с Google Calendar. Гости отправляют свои данные через форму, после чего информация поступает владельцу по электронной почте и WhatsApp. Данные Google Analytics отображаются в виде дневных, недельных и годовых графиков.",
      process:
        "Проект начался с простой структуры посадочной страницы отеля, ориентированной на доверие, презентацию номеров и прямой запрос на бронирование. После определения логики контента была создана индивидуальная админ-панель для контроля доступности, обновления цен и управления бронированиями. Затем были интегрированы синхронизация с Google Calendar и аналитические панели, чтобы упростить работу владельца отеля.",
      results: [
        "Сокращение времени на управление на 60%",
        "100% заявок стали собираться через email и WhatsApp",
        "Адаптивный дизайн значительно улучшил пользовательский опыт",
      ],

      testimonial: {
        content:
          "Наш новый сайт и админ-панель сделали управление отелем намного проще. Я могу контролировать всю информацию в одном месте, а запросы гостей приходят ко мне мгновенно.",
        author: "U. Dinc, владелец",
        company: "Monihomes",
      },

      adminPanel: {
        title: "Админ-панель",
        content:
          "Индивидуальная админ-панель позволяет владельцу отеля управлять ценами, отслеживать доступность номеров и просматривать заявки на бронирование в одном интерфейсе. Синхронизация с Google Calendar помогает поддерживать актуальную доступность и снижает объем ручной работы.",
      },

      faq: [
        {
          question: "Какова была основная цель этого проекта сайта отеля?",
          answer:
            "Главная цель состояла в том, чтобы создать профессиональный сайт для продвижения отеля и одновременно дать владельцу удобный инструмент для управления доступностью номеров и запросами гостей.",
        },
        {
          question: "Была ли в проект включена админ-панель?",
          answer:
            "Да. Была разработана индивидуальная админ-панель для управления доступностью, ценами и процессами, связанными с бронированием.",
        },
        {
          question: "Какие технологии использовались в этом проекте?",
          answer:
            "Проект был реализован с использованием React, Node.js, MongoDB, Tailwind CSS и интеграции с Google Calendar API.",
        },
      ],

      images: [
        "/images/projects/monihomes_story.webp",
        "/images/projects/moniomes-2_iphones.webp",
        "/images/projects/monihomes_post.webp",
      ],
      coverImage: "/images/projects/monihomes_story.webp",
      liveUrl: "https://www.monihomes.com.tr",
      viewLiveSite: "Открыть сайт",

      technologies: [
        "React",
        "Node",
        "MongoDB",
        "Tailwind CSS",
        "Google Calendar API",
      ],

      publishedAt: "2025-01-12",
      updatedAt: "2026-03-20",
    },

    {
      id: "1002",
      slug: "veb-sayt-investiciy-v-vinodelni",

      title: "Сайт для инвестиций в виноградники",
      shortDescription:
        "Быстрый двуязычный инвестиционный сайт, созданный для презентации возможностей вложений в виноградники, услуг и блог-контента с надежным образом бренда.",

      seoTitle: "Сайт для инвестиций в виноградники",
      seoDescription:
        "Современный, быстрый и двуязычный сайт для компании по инвестициям в виноградники в Конье. Оптимизированное решение на React и i18next.",
      keywords: [
        "сайт для инвестиций в виноградники",
        "мультиязычный сайт",
        "проект react",
        "bravix creative",
      ],

      client: "Bağ Bahçe Yatırım",
      type: "web-design",
      category: "Мультиязычный веб-дизайн",
      industry: "Инвестиции / Недвижимость",
      serviceType: "Разработка мультиязычного корпоративного сайта",

      description:
        "Современный, быстрый и двуязычный промо-сайт для компании по инвестициям в виноградники в регионе Конья. Представляет услуги, инвестиционные гайды и блог-контент, при этом передавая надежный и естественный образ бренда.",
      challenge:
        "Для привлечения инвесторов был нужен быстрый, эстетичный и мультиязычный сайт. Дизайн должен был соответствовать теме природных и устойчивых инвестиций.",
      solution:
        "Была разработана адаптивная и визуально привлекательная посадочная страница на React. Использованы простой макет и натуральные оттенки. Добавлена поддержка многоязычного контента (i18n). Разделы: О нас, Инвестиционный процесс, Блог, Контакты.",
      process:
        "Структура сайта была спланирована вокруг доверия инвесторов и ясности контента. Разделы были организованы так, чтобы объяснить инвестиционную модель, представить историю бренда и направить посетителей к контакту. Поддержка нескольких языков была внедрена на раннем этапе, чтобы сайт мог одинаково хорошо работать как для местной, так и для международной аудитории.",
      results: [
        "Профессиональный дизайн повысил доверие к бренду",
        "Двуязычный интерфейс улучшил доступность для иностранных инвесторов",
        "Производительность была оптимизирована для мобильных и десктопных пользователей",
      ],

      testimonial: {
        content:
          "Наш сайт выглядит очень привлекательно и обеспечивает отличный пользовательский опыт. Общаться с инвесторами стало намного проще.",
        author: "V. Karakuş",
        company: "Bağ Bahçe Yatırım",
      },

      faq: [
        {
          question: "Почему двуязычная структура была важна для этого сайта?",
          answer:
            "Потому что компания хотела ясно представить инвестиционные возможности как местным, так и иностранным инвесторам.",
        },
        {
          question: "Какой сайт был разработан для этого бренда?",
          answer:
            "Был создан мультиязычный корпоративный промо-сайт, ориентированный на доверие, ясность и инвестиционную коммуникацию.",
        },
        {
          question: "Какие технологии использовались в проекте?",
          answer:
            "Сайт был создан с использованием React, Node, CSS3, i18next и Framer Motion.",
        },
      ],

      images: [
        "/images/projects/bagbahce_multi.webp",
        "/images/projects/bby-phone.webp",
        "/images/projects/bby-2-pages.webp",
      ],
      coverImage: "/images/projects/bagbahce_multi.webp",
      liveUrl: "https://konyalimemlak.web.app/",
      viewLiveSite: "Открыть сайт",

      technologies: ["React", "Node", "CSS3", "i18next", "Framer Motion"],

      publishedAt: "2025-01-18",
      updatedAt: "2026-03-20",
    },

    {
      id: "1003",
      slug: "the-glass-hut-sayt-dlya-steklyannogo-domika",

      title: "Сайт The Glass Hut",
      shortDescription:
        "Визуально выразительный сайт домика, созданный для демонстрации спокойного глэмпинг-опыта с акцентом на бронирование и FAQ.",

      seoTitle: "The Glass Hut – сайт глэмпинг-домика",
      seoDescription:
        "Одностраничный промо-сайт для стеклянного домика с погружением в природу. Удобный доступ к бронированию и информации.",
      keywords: [
        "сайт глэмпинга",
        "промо-сайт домика",
        "одностраничный сайт",
        "проект react",
      ],

      client: "Личный проект",
      type: "web-development",
      category: "Веб-разработка",
      industry: "Гостеприимство / Путешествия",
      serviceType: "Разработка промо-сайта",

      description:
        "Современный и визуально привлекательный промо-сайт для стеклянного домика, предлагающего глэмпинг с полным погружением в природу. Одностраничный дизайн включает информацию о домике, окружающей местности, форму бронирования и FAQ.",
      challenge:
        "Клиент хотел природный, простой, но при этом визуально насыщенный сайт для продвижения домика и удобного доступа к информации.",
      solution:
        "Было создано одностраничное приложение на React и размещено через Firebase Hosting. На сайте есть разделы The Hut, The Area, Booking, About Us и FAQ. Анимации и полноэкранные изображения создают спокойную и умиротворяющую атмосферу.",
      process:
        "Процесс дизайна в первую очередь был сосредоточен на атмосфере: крупные визуалы, мягкие переходы и структура контента, поддерживающая свободное знакомство с сайтом. Информационная архитектура строилась вокруг ключевых вопросов пользователя: детали проживания, окрестности, бронирование и контент, повышающий доверие.",
      results: [
        "Создан чистый и привлекательный онлайн-образ, отражающий бренд",
        "Адаптивный дизайн и понятная навигация улучшили UX",
        "Увеличилось время пребывания пользователей на сайте",
      ],

      testimonial: {
        content:
          "Наш сайт получился именно таким, как мы хотели: чистым, стильным и близким к природе. Теперь гости легко находят нужную информацию, а процесс бронирования стал понятнее.",
        author: "Концептуальный отзыв",
        company: "Внутренний обзор",
      },

      faq: [
        {
          question: "Какой опыт продвигает этот сайт?",
          answer:
            "Он продвигает спокойный отдых в формате глэмпинга и проживания в домике на природе.",
        },
        {
          question: "Был ли сайт разработан как одностраничный проект?",
          answer:
            "Да. Проект был создан как одностраничный промо-сайт с четкими разделами для деталей, бронирования и FAQ.",
        },
        {
          question: "Какие технологии использовались?",
          answer:
            "В проекте использовались React, React Router, Tailwind CSS, Framer Motion и Firebase Hosting.",
        },
      ],

      images: [
        "/images/projects/glasshut_multi.webp",
        "/images/projects/glasshut_screens__.webp",
        "/images/projects/glasshutscreens_.webp",
      ],
      coverImage: "/images/projects/glasshut_multi.webp",
      liveUrl: "https://theglasshut.web.app/",
      viewLiveSite: "Демо",

      technologies: [
        "React",
        "React Router",
        "Tailwind CSS",
        "Framer Motion",
        "Firebase Hosting",
      ],

      publishedAt: "2025-01-25",
      updatedAt: "2026-03-20",
    },

    {
      id: "1004",
      slug: "mindfulness-app-landing-page",

      title: "Лендинг для mindfulness-приложения",
      shortDescription:
        "Спокойная адаптивная посадочная страница для продвижения mindfulness-приложения с анимацией дыхания, тарифами, отзывами и конверсионными блоками.",

      seoTitle: "Лендинг для mindfulness-приложения",
      seoDescription:
        "Одностраничный лендинг ZenMind со спокойным дизайном, интерактивной анимацией дыхания и мобильной адаптацией.",
      keywords: [
        "mindfulness сайт",
        "ZenMind лендинг",
        "landing page",
        "проект react",
      ],

      client: "Личный проект",
      type: "web-design",
      category: "Дизайн лендинга",
      industry: "Wellness / Мобильные приложения",
      serviceType: "Дизайн посадочной страницы",

      description:
        "Одностраничный, спокойный и адаптивный сайт для продвижения мобильного приложения ZenMind. Использует мягкие цвета, типографику и взаимодействия, соответствующие теме mindfulness, чтобы создать удобный пользовательский опыт.",
      challenge:
        "Клиенту нужен был быстро загружающийся, адаптированный для мобильных устройств сайт, отражающий спокойную природу приложения. Главная сложность заключалась в том, чтобы передать состояние mindfulness через интерактивные анимации, такие как дыхание.",
      solution:
        "Была создана адаптивная посадочная страница на React и Tailwind CSS. Анимация 'Вдох / Выдох' реализована с помощью кастомных motion-компонентов. Дизайн включает промо приложения, отзывы пользователей, тарифы и CTA-кнопки. Пространство и плавные переходы создают спокойный UX.",
      process:
        "Посадочная страница была выстроена вокруг эмоциональной ясности и конверсии. Сначала были определены визуальное направление и характер взаимодействия, соответствующие теме mindfulness. Затем разделы страницы были расположены так, чтобы провести пользователя от эмоционального контакта к знакомству с приложением, изучению тарифов и призыву к действию.",
      results: [
        "Мобильная конверсия выросла на 45%",
        "UI/UX-дизайн получил высокую оценку от первых пользователей",
        "Четкий CTA увеличил число установок приложения",
      ],

      testimonial: {
        content:
          "Лендинг ощущается точно так же, как и наше приложение: спокойно, просто и вдохновляюще. Он идеально соответствует голосу нашего бренда.",
        author: "Концептуальный отзыв",
        company: "Внутренний обзор",
      },

      faq: [
        {
          question: "Какова была основная цель этого лендинга?",
          answer:
            "Цель состояла в том, чтобы продвигать приложение через спокойный визуальный язык и одновременно повысить мобильную вовлеченность и намерение скачать приложение.",
        },
        {
          question: "Как тема mindfulness была отражена в дизайне?",
          answer:
            "Через мягкие цвета, большое количество свободного пространства, плавные переходы и специальные взаимодействия, связанные с дыханием.",
        },
        {
          question: "Какие инструменты и технологии использовались?",
          answer:
            "Страница была создана с использованием React, Tailwind CSS, Framer Motion, принципов адаптивного дизайна и Lottie Animation.",
        },
      ],

      images: [
        "/images/projects/zenmind_multi.webp",
        "/images/projects/zenmind_instagram.webp",
        "/images/projects/zenmind_laptop.png",
      ],
      coverImage: "/images/projects/zenmind_multi.webp",
      liveUrl: "",
      viewLiveSite: "Демо",

      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive Web Design",
        "Lottie Animation",
      ],

      publishedAt: "2025-02-02",
      updatedAt: "2026-03-20",
    },

    {
      id: "1005",
      slug: "panel-upravleniya-creator-flow",

      title: "Creative Flow Dashboard",
      shortDescription:
        "Современная UI-концепция дашборда для авторов, позволяющая управлять аналитикой, доходом, задачами и контентом в ясном и визуально сбалансированном интерфейсе.",

      seoTitle: "Creative Flow Dashboard UI",
      seoDescription:
        "Современный, адаптивный и эстетичный UI/UX-дашборд для авторов. Оптимизирован для управления задачами, доходом, контентом и аналитикой.",
      keywords: [
        "ui/ux dashboard",
        "creative flow",
        "интерфейс дашборда",
        "проект react",
      ],

      client: "Личный проект",
      type: "ui-ux",
      category: "Dashboard UI/UX",
      industry: "Creator Economy / SaaS",
      serviceType: "Дизайн Dashboard UI/UX",

      description:
        "Современный адаптивный интерфейс дашборда, созданный для оптимизации рабочих процессов создателей контента. Основной акцент сделан на удобстве, ясности и эстетическом балансе при управлении задачами, доходами, контентом и аналитикой.",
      challenge:
        "Целью было создать визуально привлекательный и функциональный дашборд для повседневного использования. Главная сложность состояла в балансе между визуальной ясностью и высокой плотностью данных на мобильных и десктопных устройствах.",
      solution:
        "Для вайрфреймов и high-fidelity прототипов использовался Figma. Был спроектирован интуитивный пользовательский опыт с графиками доходов, последними действиями, быстрыми операциями и навигацией. Цветовые темы и интервалы были оптимизированы для концентрации и спокойствия при длительном использовании.",
      process:
        "Процесс начался с понимания того, как создатели контента ежедневно взаимодействуют с большим объемом информации. Вайрфреймы были выстроены с приоритетом быстрого сканирования, модульных карточек и четкой иерархии. Затем визуальные доработки были направлены на то, чтобы интерфейс оставался спокойным, масштабируемым и пригодным для повторного использования в разных сценариях дашборда.",
      results: [
        "Эффективный рабочий процесс с минимальной когнитивной нагрузкой",
        "Высокоадаптивная компонентная система для масштабирования",
        "Положительные отзывы от креативных специалистов о эстетике и удобстве",
      ],

      testimonial: {
        content:
          "Этот дашборд идеально балансирует между функциональностью и визуальной ясностью. Как контент-креатор, я бы хотел пользоваться им каждый день.",
        author: "Концептуальный отзыв",
        company: "Внутренний обзор",
      },

      faq: [
        {
          question: "Для кого разработана эта концепция дашборда?",
          answer:
            "В первую очередь она создана для авторов, которым нужно управлять аналитикой, задачами, доходом и контентом в одном интерфейсе.",
        },
        {
          question: "Какая UI/UX-задача была самой сложной в этом проекте?",
          answer:
            "Самой сложной задачей было ясно представить насыщенный данными контент как на десктопе, так и на мобильных устройствах.",
        },
        {
          question: "Какие инструменты использовались в процессе дизайна?",
          answer:
            "В проекте использовались Figma, React, Tailwind CSS, методы адаптивного дизайна и принципы визуализации данных.",
        },
      ],

      images: [
        "/images/projects/dasboard_destkop.webp",
        "/images/projects/dashboard_2.webp",
        "/images/projects/dashboard_1.webp",
      ],
      coverImage: "/images/projects/dasboard_destkop.webp",
      liveUrl: "https://creator-flow-dashboard.netlify.app/",
      viewLiveSite: "Демо",

      technologies: [
        "Figma",
        "React",
        "Tailwind CSS",
        "Responsive Design",
        "Data Visualization",
      ],

      publishedAt: "2025-02-10",
      updatedAt: "2026-03-20",
    },

    {
      id: "1006",
      slug: "sayt-fastfud-restorana",

      title: "Сайт ресторана быстрого питания",
      shortDescription:
        "Интерактивный сайт ресторана с онлайн-заказом, безопасной оплатой и отслеживанием заказа в реальном времени, поддерживаемый легкой админ-панелью.",

      seoTitle: "Сайт ресторана быстрого питания",
      seoDescription:
        "Современный и интерактивный сайт быстрого питания для Quick Bite. Оптимизирован для онлайн-заказов, оплаты и отслеживания в реальном времени.",
      keywords: [
        "сайт быстрого питания",
        "онлайн заказ",
        "панель ресторана",
        "проект react",
      ],

      client: "Quick Bite",
      type: "web-application",
      category: "Веб-дизайн + E-commerce",
      industry: "Еда и напитки",
      serviceType: "Разработка сайта для ресторана",

      description:
        "Quick Bite предлагает полноценный опыт онлайн-заказа для ресторана быстрого питания. Посетители могут просматривать современное адаптивное меню, добавлять блюда в корзину, безопасно оплачивать заказы и отслеживать их в реальном времени.",
      challenge:
        "Цель заключалась в том, чтобы заменить традиционный процесс заказа полностью интегрированной системой онлайн-заказа, оплаты и отслеживания доставки для улучшения клиентского опыта и внутренней эффективности.",
      solution:
        "Была создана интерактивная платформа для заказа еды на React. Ключевые функции включают динамическую корзину, интеграцию оплаты и панель отслеживания заказов в реальном времени.",
      process:
        "Пользовательский сценарий был построен вокруг привычного пути заказа: просмотр меню, управление корзиной, оплата и отслеживание после покупки. После определения клиентского потока была добавлена легкая административная часть для обновления статусов заказов и оперативной прозрачности. Интерфейс был оптимизирован в первую очередь для мобильных устройств, поскольку многие пользователи делают заказы именно с телефона.",
      results: [
        "Безопасная онлайн-оплата и отслеживание доставки в реальном времени",
        "Повышение эффективности управления заказами благодаря админ-панели",
        "Mobile-first дизайн повысил удовлетворенность клиентов",
      ],

      testimonial: {
        content:
          "Нашим клиентам очень нравится удобство онлайн-заказа и оплаты. Функция отслеживания заказов сократила количество звонков и улучшила рабочий процесс.",
        author: "Менеджер ресторана",
        company: "Quick Bite",
      },

      adminPanel: {
        title: "Админ-панель",
        content:
          "Легкая админ-панель позволяет сотрудникам отслеживать входящие заказы, обновлять статусы ('Готовится', 'В пути', 'Доставлено') и безопасно получать доступ к данным клиентов и оплат. Это дает мгновенную видимость процесса и повышает эффективность.",
      },

      faq: [
        {
          question: "Какие функции были включены в этот сайт ресторана?",
          answer:
            "Платформа включает просмотр меню, управление корзиной, безопасную оплату и отслеживание заказа в реальном времени.",
        },
        {
          question: "Была ли административная зона для персонала ресторана?",
          answer:
            "Да. Была добавлена легкая админ-панель, чтобы сотрудники могли обновлять статусы заказов и эффективно управлять входящими заявками.",
        },
        {
          question: "Какова была основная бизнес-цель проекта?",
          answer:
            "Главная цель заключалась в улучшении клиентского опыта и внутренней эффективности за счет замены ручного процесса заказа цифровым рабочим потоком.",
        },
      ],

      images: [
        "/images/projects/quickbite.webp",
        "/images/projects/QB_menu.webp",
        "/images/projects/menu-page.webp",
      ],
      coverImage: "/images/projects/quickbite.webp",
      liveUrl: "https://quick-bite-fastfood.netlify.app/",
      viewLiveSite: "Открыть сайт",

      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Payment API",
        "Local Storage",
      ],

      publishedAt: "2025-02-18",
      updatedAt: "2026-03-20",
    },

    {
      id: "1007",
      slug: "ta-travel-vebsayt",

      title: "Сайт TA-Travel",
      shortDescription:
        "Современная туристическая платформа со страницами направлений, отзывами клиентов, интеграцией рассылки и поддержкой админ-панели.",

      seoTitle:
        "Сайт TA-Travel | Современная туристическая платформа и админ-панель",
      seoDescription:
        "Современный сайт для TA-Travel с направлениями, отзывами клиентов, функцией рассылки и оптимизированной админ-панелью.",
      keywords: [
        "туристический сайт",
        "TA-Travel",
        "проект react",
        "админ-панель",
        "рассылка",
        "Google Analytics",
      ],

      client: "TA-Travel",
      type: "web-application",
      category: "Веб-разработка + админ-панель",
      industry: "Туризм",
      serviceType: "Разработка корпоративного сайта",

      description:
        "Современный и многофункциональный промо-сайт, разработанный для TA-Travel. На сайте есть блоки с направлениями, контактные формы, отзывы клиентов, акцент на доступную стоимость и страницы с юридической информацией. Пользователи могут легко получать информацию, подписываться на рассылку и оставлять отзывы. Админ-панель позволяет управлять контентом, одобрять отзывы и отслеживать данные Google Analytics.",
      challenge:
        "Создать быстрый, удобный и визуально привлекательный сайт для клиентов TA-Travel, одновременно упростив управление отзывами, рассылками и аналитикой в админ-панели.",
      solution:
        "Было разработано современное и адаптивное веб-приложение на React и Tailwind CSS. Админ-панель позволяет модерировать отзывы, управлять рассылкой и отслеживать Google Analytics. Публикуются только одобренные отзывы, а о новых подписчиках администраторы уведомляются сразу.",
      process:
        "Информационная архитектура была спланирована вокруг туристических посадочных блоков, пользовательских отзывов, просмотра направлений и точек контакта, ориентированных на конверсию. Административная часть была организована так, чтобы упростить публикацию материалов и процессы модерации.",
      results: [
        "Посетители могут легко изучать направления и оставлять отзывы",
        "Функция рассылки усилила взаимодействие между пользователями и компанией",
        "Админ-панель упростила управление контентом и отзывами",
        "Интеграция Google Analytics позволила отслеживать производительность и поведение пользователей",
      ],

      adminPanel: {
        title: "Админ-панель",
        content:
          "Админ-панель позволяет модерировать отзывы пользователей, управлять подписками на рассылку и просматривать данные Google Analytics. Администраторы решают, какие отзывы публиковать, и эффективно управляют всеми процессами.",
      },

      testimonial: {
        content:
          "Благодаря нашему новому сайту посетители могут легко получать доступ к контенту и услугам. Управлять отзывами и рассылкой через админ-панель стало очень просто.",
        author: "Команда TA-Travel",
        company: "TA-Travel",
      },

      images: [
        "/images/projects/ta-travel_home.webp",
        "/images/projects/ta-travel_about.webp",
        "/images/projects/ta-travel_destinations.webp",
      ],
      coverImage: "/images/projects/ta-travel_home.webp",

      liveUrl: "https://www.ta-travel.ru/",
      viewLiveSite: "Открыть сайт",

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
      faq: [
        {
          question: "Какие функции были включены в сайт TA-Travel?",
          answer:
            "Сайт включает блоки с направлениями, контактные формы, отзывы клиентов, подписку на рассылку, страницы с юридической информацией и админ-панель для управления контентом и отзывами.",
        },
        {
          question: "Была ли для этого проекта разработана админ-панель?",
          answer:
            "Да. Была разработана индивидуальная админ-панель для управления отзывами, подписками на рассылку и данными Google Analytics.",
        },
        {
          question: "Какие технологии использовались в этом проекте?",
          answer:
            "Проект был реализован с использованием React, Tailwind CSS, Node.js, MongoDB, Firebase Hosting, i18next, Google Analytics и Email API.",
        },
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
