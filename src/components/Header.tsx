import { useTranslation } from "react-i18next"
import PageShell from "./PageShell"

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="relative border-b border-line bg-paper/95 after:absolute after:-bottom-px after:left-0 after:h-0.5 after:w-[min(17vw,230px)] after:bg-gold after:content-['']">
      <PageShell className="flex min-h-18 items-center justify-between gap-4 sm:min-h-20 sm:gap-8">
        <a
          className="flex items-center"
          href="#portal-title"
          aria-label={t("header.brandLabel")}
        >
          <img
            className="block h-9 w-auto object-contain sm:h-10"
            src="/partner-logo.webp"
            alt={t("header.partnerLogoAlt")}
            width="227"
            height="51"
          />
        </a>
        <p className="m-0 hidden text-xs font-bold tracking-[0.12em] text-ink-soft sm:block">
          {t("header.portalLabel")}
        </p>
      </PageShell>
    </header>
  )
}
