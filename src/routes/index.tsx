import { createFileRoute } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import { services } from "../services"

export const Route = createFileRoute("/")({ component: PortalHome })

function PortalHome() {
  const { t } = useTranslation()

  return (
    <main className="portal-main">
      <div className="site-shell">
        <section className="intro" aria-labelledby="portal-title">
          <div>
            <p className="intro-kicker">{t("hero.kicker")}</p>
            <h1 className="intro-title" id="portal-title">
              {t("hero.title")}
            </h1>
          </div>
          <p className="intro-copy">{t("hero.description")}</p>
        </section>

        <section className="service-grid" aria-label={t("services.label")}>
          {services.map((service, index) => (
            <a
              className={`service-card ${
                service.featured
                  ? "service-card-featured"
                  : "service-card-compact"
              }`}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("services.openLabel", {
                name: t(`services.${service.id}.title`),
              })}
              key={service.id}
            >
              <div className="service-visual" aria-hidden="true">
                <img
                  className="service-image"
                  src={service.image}
                  alt=""
                  width={service.width}
                  height={service.height}
                />
              </div>
              <div className="service-body">
                <div>
                  <p className="service-index">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="service-title">
                    {t(`services.${service.id}.title`)}
                  </h2>
                  <p className="service-description">
                    {t(`services.${service.id}.description`)}
                  </p>
                </div>
                <span className="service-cta">
                  {t(`services.${service.id}.cta`)}
                </span>
              </div>
            </a>
          ))}
        </section>

        <footer className="site-footer">
          <p>{t("footer.notice")}</p>
          <p>{t("footer.support")}</p>
        </footer>
      </div>
    </main>
  )
}
