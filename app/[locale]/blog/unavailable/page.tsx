import Link from "next/link";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const messages = {
  tr: {
    title: "Bu blog yazısının bu dilde çevirisi yok.",
    description: "Blog ana sayfasına dönüp diğer yazılara göz atabilirsiniz.",
    button: "Blog ana sayfasına dön",
  },
  en: {
    title: "This blog post is not available in this language.",
    description: "You can return to the blog homepage and browse other posts.",
    button: "Back to blog homepage",
  },
  ru: {
    title: "Эта статья недоступна на выбранном языке.",
    description: "Вы можете вернуться на главную страницу блога и посмотреть другие статьи.",
    button: "Вернуться в блог",
  },
};

export default async function BlogUnavailablePage({ params }: Props) {
  const { locale } = await params;
  const t =
    messages[locale as keyof typeof messages] ?? messages.en;

  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold mb-4">{t.title}</h1>
      <p className="text-base mb-8">{t.description}</p>

      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center rounded-md px-5 py-3 bg-black text-white"
      >
        {t.button}
      </Link>
    </section>
  );
}