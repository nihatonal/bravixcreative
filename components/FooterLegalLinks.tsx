
import { useLocale } from "next-intl";
import { legalPaths, type Locale } from "@/constants/paths";
import Link from "@/node_modules/next/link";

type FooterLegalLinksProps = {
    privacy: string;
    terms: string;
    cookies: string;
};
export function FooterLegalLinks({
    privacy,
    terms,
    cookies,
}: FooterLegalLinksProps) {
    const locale = useLocale() as Locale;

    return (
        <ul className="space-y-2">
            <li>
                <Link aria-label="legal link" href={`/${locale}/${legalPaths.privacy[locale]}`} className="text-gray-300 hover:text-white">
                    {privacy}
                </Link>
            </li>
            <li>
                <Link aria-label="legal link" href={`/${locale}/${legalPaths.terms[locale]}`} className="text-gray-300 hover:text-white">
                    {terms}
                </Link>
            </li>
            <li>
                <Link aria-label="legal link" href={`/${locale}/${legalPaths.cookie[locale]}`} className="text-gray-300 hover:text-white">
                    {cookies}
                </Link>
            </li>
        </ul>
    );
}
