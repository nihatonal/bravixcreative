
import { useLocale } from "next-intl";
import { legalPaths, type Locale } from "@/constants/paths";
import Link from "@/node_modules/next/link";

export function FooterLegalLinks() {
    const locale = useLocale() as Locale;

    return (
        <ul className="space-y-2">
            <li>
                <Link aria-label="legal link" href={`/${locale}/${legalPaths.privacy[locale]}`} className="text-gray-300 hover:text-white">
                    Gizlilik Politikası
                </Link>
            </li>
            <li>
                <Link aria-label="legal link" href={`/${locale}/${legalPaths.terms[locale]}`} className="text-gray-300 hover:text-white">
                    Hizmet Şartları
                </Link>
            </li>
            <li>
                <Link aria-label="legal link" href={`/${locale}/${legalPaths.cookie[locale]}`} className="text-gray-300 hover:text-white">
                    Çerez Politikası
                </Link>
            </li>
        </ul>
    );
}
