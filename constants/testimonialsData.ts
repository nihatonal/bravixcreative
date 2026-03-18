export type TestimonialItem = {
    id: number;
    name: string;
    company: string;
    role: string;
    date: string;
    rating: number;
    service: string;
    projectType: string;
    content: string;
  };
  
  export type TestimonialsData = {
    en: TestimonialItem[];
    tr: TestimonialItem[];
    ru: TestimonialItem[];
  };
  
  export const testimonialsData: TestimonialsData = {
    en: [
      {
        id: 1,
        name: "Emily Carter",
        company: "Bloom Café",
        role: "Founder",
        date: "2024-10-14",
        rating: 5,
        service: "Web Design",
        projectType: "Restaurant Website",
        content:
          "Bravix Creative delivered a website that feels modern, elegant, and easy to use. Our new online presence reflects our brand perfectly, and customers now find menus and contact details much faster.",
      },
      {
        id: 2,
        name: "Daniel Brooks",
        company: "Northline Studio",
        role: "Creative Director",
        date: "2024-09-03",
        rating: 5,
        service: "UI/UX Design",
        projectType: "Agency Portfolio",
        content:
          "Their design process was clear, collaborative, and professional from start to finish. The final result improved both the visual quality of our site and the way visitors move through our content.",
      },
      {
        id: 3,
        name: "Sophia Reed",
        company: "Vero Dental",
        role: "Operations Manager",
        date: "2024-11-22",
        rating: 5,
        service: "Web Development",
        projectType: "Corporate Website",
        content:
          "We needed a fast and reliable website with strong structure and mobile performance. Bravix Creative handled every detail carefully and gave us a site that feels polished and trustworthy.",
      },
      {
        id: 4,
        name: "Michael Turner",
        company: "Urban Peak Fitness",
        role: "Co-Founder",
        date: "2024-08-18",
        rating: 5,
        service: "Web Application",
        projectType: "Booking Platform",
        content:
          "The team understood our business needs very quickly and turned them into a clean digital product. The booking flow is now much smoother, and our users immediately noticed the difference.",
      },
      {
        id: 5,
        name: "Olivia Hayes",
        company: "Luma Interiors",
        role: "Marketing Lead",
        date: "2024-12-01",
        rating: 5,
        service: "Brand-Focused Website",
        projectType: "Interior Design Website",
        content:
          "What impressed us most was their attention to detail and brand consistency. The website feels premium, performs well, and gives potential clients much more confidence in our services.",
      },
    ],
    tr: [
      {
        id: 1,
        name: "Zeynep Kaya",
        company: "Mimoza Kafe",
        role: "Kurucu",
        date: "2024-10-14",
        rating: 5,
        service: "Web Tasarım",
        projectType: "Restoran Web Sitesi",
        content:
          "Bravix Creative markamızı gerçekten yansıtan modern ve kullanımı kolay bir web sitesi hazırladı. Yeni sitemiz sayesinde müşteriler menüye, iletişim bilgilerine ve rezervasyon detaylarına çok daha hızlı ulaşıyor.",
      },
      {
        id: 2,
        name: "Mert Aydın",
        company: "Piksel Atölye",
        role: "Kreatif Direktör",
        date: "2024-09-03",
        rating: 5,
        service: "UI/UX Tasarım",
        projectType: "Ajans Portfolyo Sitesi",
        content:
          "Süreç baştan sona çok düzenli ve profesyoneldi. Ortaya çıkan tasarım hem görsel kaliteyi yükseltti hem de ziyaretçilerin içerikler arasında daha rahat ilerlemesini sağladı.",
      },
      {
        id: 3,
        name: "Elif Demir",
        company: "Dentora Klinik",
        role: "Operasyon Müdürü",
        date: "2024-11-22",
        rating: 5,
        service: "Web Geliştirme",
        projectType: "Kurumsal Web Sitesi",
        content:
          "Hızlı, güvenilir ve mobilde güçlü çalışan bir site istiyorduk. Bravix Creative tüm detayları dikkatle ele aldı ve kurumsal kimliğimize uygun, güven veren bir sonuç ortaya çıkardı.",
      },
      {
        id: 4,
        name: "Burak Şahin",
        company: "Peak Studio",
        role: "Kurucu Ortak",
        date: "2024-08-18",
        rating: 5,
        service: "Web Uygulama",
        projectType: "Rezervasyon Platformu",
        content:
          "Ekibimiz için en önemli konu kullanıcı deneyimiydi. Bravix Creative ihtiyaçlarımızı çok iyi anlayıp bunu sade, güçlü ve akıcı bir dijital ürüne dönüştürdü.",
      },
      {
        id: 5,
        name: "Selin Aras",
        company: "Luna İç Mimarlık",
        role: "Pazarlama Sorumlusu",
        date: "2024-12-01",
        rating: 5,
        service: "Marka Odaklı Web Sitesi",
        projectType: "İç Mimarlık Web Sitesi",
        content:
          "En çok etkilendiğimiz nokta detaylara verdikleri önem oldu. Site hem premium bir his veriyor hem de performans açısından çok iyi çalışıyor. Yeni müşteriler üzerinde çok daha güçlü bir ilk izlenim oluşturuyor.",
      },
    ],
    ru: [
      {
        id: 1,
        name: "Анна Петрова",
        company: "Bloom Café",
        role: "Основатель",
        date: "2024-10-14",
        rating: 5,
        service: "Веб-дизайн",
        projectType: "Сайт ресторана",
        content:
          "Bravix Creative создали современный и удобный сайт, который отлично отражает наш бренд. Теперь посетители намного быстрее находят меню, контакты и основную информацию.",
      },
      {
        id: 2,
        name: "Илья Соколов",
        company: "Northline Studio",
        role: "Креативный директор",
        date: "2024-09-03",
        rating: 5,
        service: "UI/UX дизайн",
        projectType: "Портфолио агентства",
        content:
          "Процесс работы был понятным, аккуратным и профессиональным на каждом этапе. Итоговый результат улучшил не только внешний вид сайта, но и общую логику взаимодействия с контентом.",
      },
      {
        id: 3,
        name: "Мария Орлова",
        company: "Vero Dental",
        role: "Операционный менеджер",
        date: "2024-11-22",
        rating: 5,
        service: "Веб-разработка",
        projectType: "Корпоративный сайт",
        content:
          "Нам нужен был быстрый и надежный сайт с хорошей структурой и сильной мобильной версией. Команда Bravix Creative внимательно проработала детали и создала действительно качественный продукт.",
      },
      {
        id: 4,
        name: "Дмитрий Лебедев",
        company: "Urban Peak Fitness",
        role: "Сооснователь",
        date: "2024-08-18",
        rating: 5,
        service: "Веб-приложение",
        projectType: "Платформа бронирования",
        content:
          "Команда очень быстро поняла наши бизнес-задачи и превратила их в чистый и удобный цифровой продукт. Процесс бронирования стал заметно проще, и пользователи это сразу оценили.",
      },
      {
        id: 5,
        name: "Екатерина Смирнова",
        company: "Luma Interiors",
        role: "Руководитель маркетинга",
        date: "2024-12-01",
        rating: 5,
        service: "Имиджевый сайт",
        projectType: "Сайт студии интерьера",
        content:
          "Больше всего нас впечатлило внимание к деталям и целостность бренда. Сайт выглядит премиально, работает быстро и помогает клиентам гораздо больше доверять нашей компании.",
      },
    ],
  };