import { useTranslations } from "next-intl";
import Image from "next/image";

interface Skill {
  name: string;
  level: number;
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

interface Technology {
  name: string;
  iconUrl?: string;
  IconComponent?: React.ComponentType<{ size?: number }>;
}

const CustomIcon: React.FC<IconProps> = ({ size = 60, ...props }) => (
  <svg
    width={size}
    height={size * (66 / 80)}
    viewBox="0 0 80 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M77.7572 44.3133L74.7776 39.3112L60.374 47.7838L76.371 28.1129L78.7887 26.7426L78.2517 25.8042L79.2907 24.5233L75.9989 21.877L75.5743 21.1372L75.2821 21.301L74.2406 20.4669L72.0927 23.1083L25.3405 49.6009L42.5388 29.6321L74.6577 12.6348L71.6056 6.93759L54.1126 16.1946L62.7242 6.19782L57.789 2L38.4028 24.5084L19.1465 34.7013L33.8897 15.8843L43.1257 11.2446L40.1936 5.48536L13.2771 19.0122L20.62 9.63601L15.495 5.67154L0 25.4666L0.242265 25.6528L3.13696 31.3425L20.3103 22.7111L4.65799 42.6873L7.21801 44.6708L8.74403 47.5182L26.8315 37.9459L6.9183 61.0674L11.851 65.2652L12.8426 64.1133L60.881 36.8908L44.9315 56.5022L45.1912 56.7107L45.1662 56.7281L48.473 62.2813L69.685 49.8045L61.5204 62.5295L66.9951 66L80 45.7358L77.7572 44.3133Z"
      fill="black"
    />
  </svg>
);

export default function Skills() {
  const t = useTranslations("skills");

  const skills = {
    frontend: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Tailwind", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "Sanity Studio", level: 90 },
    ],
    design: [
      { name: "Figma", level: 90 },
      { name: "UI/UX", level: 85 },
      { name: "Responsive Design", level: 95 },
      { name: "Typography", level: 80 },
    ],
  } satisfies Record<string, Skill[]>;

  const categories: Array<keyof typeof skills> = [
    "frontend",
    "backend",
    "design",
  ];

  const technologies: Technology[] = [
    { name: "React", iconUrl: "/tech/react-2.svg" },
    { name: "HTML5", iconUrl: "/tech/html-1.svg" },
    { name: "CSS3", iconUrl: "/tech/css-3.svg" },
    { name: "JavaScript", iconUrl: "/tech/javascript-1.svg" },
    { name: "Node.js", iconUrl: "/tech/nodejs-icon.svg" },
    { name: "Sanity", IconComponent: CustomIcon },
    { name: "MongoDB", iconUrl: "/tech/mongodb-icon-1.svg" },
    { name: "Tailwind", iconUrl: "/tech/tailwind-css-2.svg" },
    { name: "Figma", iconUrl: "/tech/figma.svg" },
  ];

  const renderSkillBars = (skillCategory: Skill[]) =>
    skillCategory.map((skill) => (
      <div key={skill.name} className="mb-5">
        <div className="mb-1 flex justify-between">
          <span className="font-medium">{skill.name}</span>
          <span className="text-gray-500">{skill.level}%</span>
        </div>
        <div className="h-2.5 rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-gradient-to-l from-bvs-accent to-bvs-primary"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    ));

  return (
    <section id="skills" className="px-2 py-20 lg:px-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-bvs-purple/20 bg-white/80 px-4 py-1 text-sm font-medium text-bvs-mutedText shadow-sm backdrop-blur-sm">
            {t("eyebrow")}
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t("title")}</h2>
          <p className="mx-auto max-w-xl text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="mb-20 grid gap-10 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-6 text-xl font-bold text-bvs-purple">
                {t(category)}
              </h3>
              {renderSkillBars(skills[category])}
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-10 text-center text-2xl font-bold">{t("title")}</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center">
                  {tech.IconComponent ? (
                    <tech.IconComponent />
                  ) : tech.iconUrl ? (
                    <Image
                      src={tech.iconUrl}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  ) : null}
                </div>
                <span className="text-sm text-gray-600">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}