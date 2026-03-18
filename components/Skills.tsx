"use client";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "@/node_modules/next/image";
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
    IconComponent?: React.ComponentType<{ size?: number; }>;
}

const CustomIcon: React.FC<IconProps> = ({ size = 60, ...props }) => (
    <svg
        width={size}
        height={size * (66 / 80)} // İkon orantısını koru (senin svg 80x66 px)
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





export default function Skills(): JSX.Element {
    const t = useTranslations("skills");
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const skills: Record<string, Skill[]> = {
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
            { name: "Sanity Studio", level: 90 }
        ],
        design: [
            { name: "Figma", level: 90 },
            { name: "UI/UX", level: 85 },
            { name: "Responsive Design", level: 95 },
            { name: "Typography", level: 80 },
        ],
    };

    const technologies: Technology[] = [
        { name: "React", iconUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "HTML5", iconUrl: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
        { name: "CSS3", iconUrl: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
        { name: "JavaScript", iconUrl: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
        { name: "Node.js", iconUrl: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
        { name: "Sanity", IconComponent: CustomIcon }, // Kendi SVG icon bileşenin
        { name: "MongoDB", iconUrl: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
        { name: "Tailwind", iconUrl: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
        { name: "Figma", iconUrl: "https://static.cdnlogo.com/logos/f/43/figma.svg" },
    ];


    const renderSkillBars = (skillCategory: Skill[]) =>
        skillCategory.map((skill, index) => (
            <div key={index} className="mb-5">
                <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full">
                    <motion.div
                        className="h-full bg-gradient-to-r from-bvs-purple to-bvs-lightPurple rounded-full"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    />
                </div>
            </div>
        ));

    return (
        <section id="skills" className="py-20 px-2 lg:px-20">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">{t("subtitle")}</p>
                </motion.div>

                {/* Skills Bars */}
                <div className="grid md:grid-cols-3 gap-10 mb-20">
                    {["frontend", "backend", "design"].map((category, i) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 * (i + 1) }}
                        >
                            <h3 className="text-xl font-bold mb-6 text-bvs-purple">
                                {t(`${category}`)}
                            </h3>
                            {renderSkillBars(skills[category])}
                        </motion.div>
                    ))}

                </div>

                {/* Technologies Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h3 className="text-2xl font-bold mb-10 text-center">{t("title")}</h3>
                    <div className="flex flex-wrap justify-center gap-10">
                        {technologies.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-16 h-16 mb-3">
                                    {tech.IconComponent ? (
                                        <tech.IconComponent />
                                    ) : tech.iconUrl ? (
                                        <Image
                                            width={800}
                                            height={600}
                                            src={tech.iconUrl}
                                            alt={tech.name}
                                            className="w-full h-full object-contain"
                                        />
                                    ) : null}
                                </div>
                                <span className="text-sm text-gray-600">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
