import { useTranslation } from "react-i18next"

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a
          className="brand-lockup"
          href="#portal-title"
          aria-label={t("header.brandLabel")}
        >
          <img
            className="brand-logo brand-logo-wealth"
            src="/wealth-magazine-logo.webp"
            alt="理財週刊"
            width="100"
            height="33"
          />
          <span className="brand-divider" aria-hidden="true" />
          <img
            className="brand-logo brand-logo-hwashin"
            src="/hwashin-logo.webp"
            alt="華信投顧"
            width="180"
            height="64"
          />
        </a>
        <p className="portal-label">{t("header.portalLabel")}</p>
      </div>
    </header>
  )
}
