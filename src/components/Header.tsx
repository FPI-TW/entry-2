import { useTranslation } from "react-i18next"
import PageShell from "./PageShell"

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="relative border-b border-line bg-paper/95 after:absolute after:-bottom-px after:left-0 after:h-0.5 after:w-[min(17vw,230px)] after:bg-gold after:content-['']">
      <PageShell className="flex min-h-18 items-center justify-between gap-4 sm:min-h-20 sm:gap-8">
        <a
          className="flex items-center gap-2.5 sm:gap-4"
          href="#portal-title"
          aria-label={t("header.brandLabel")}
        >
          <img
            className="block h-7 w-auto object-contain sm:h-8"
            src="/wealth-magazine-logo.webp"
            alt={t("header.wealthMagazineLogoAlt")}
            width="100"
            height="33"
          />
          <span className="h-6 w-px bg-line sm:h-8" aria-hidden="true" />
          <img
            className="block h-6 w-auto object-contain sm:h-8"
            src="/hwashin-logo.webp"
            alt={t("header.hwashinLogoAlt")}
            width="180"
            height="64"
          />
        </a>
        <p className="m-0 hidden text-xs font-bold tracking-[0.12em] text-ink-soft sm:block">
          {t("header.portalLabel")}
        </p>
      </PageShell>
    </header>
  )
}
