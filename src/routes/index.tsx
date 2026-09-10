import { createFileRoute } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import PageShell from "../components/PageShell"
import { services } from "../services"

export const Route = createFileRoute("/")({ component: PortalHome })

function PortalHome() {
  const { t } = useTranslation()

  return (
    <main className="relative min-h-[calc(100dvh-77px)] overflow-hidden pt-11 pb-8 sm:pt-14 sm:pb-10 lg:pt-20">
      <div
        className="pointer-events-none absolute top-0 right-[max(0px,calc((100vw_-_1220px)/2))] h-[230px] w-[min(38vw,520px)] bg-[linear-gradient(135deg,var(--gold-wash),transparent_65%)] [clip-path:polygon(26%_0,100%_0,100%_100%,0_100%)]"
        aria-hidden="true"
      />

      <PageShell>
        <section
          className="relative grid items-end gap-5 pb-8 sm:pb-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(250px,0.7fr)] lg:gap-12 lg:pb-14 before:absolute before:top-1 before:-left-4 before:h-3/4 before:w-0.5 before:bg-gold before:content-[''] sm:before:-left-6"
          aria-labelledby="portal-title"
        >
          <div>
            <p className="m-0 mb-3 text-xs font-extrabold tracking-[0.15em] text-gold">
              {t("hero.kicker")}
            </p>
            <h1
              className="m-0 max-w-3xl text-4xl leading-[1.06] font-bold tracking-[-0.055em] text-ink sm:text-5xl lg:text-7xl"
              id="portal-title"
            >
              {t("hero.title")}
            </h1>
          </div>
          <p className="m-0 max-w-2xl text-base leading-7 text-ink-soft lg:mb-1 lg:max-w-sm">
            {t("hero.description")}
          </p>
        </section>

        <section
          className="grid auto-rows-fr gap-4 lg:grid-cols-3"
          aria-label={t("services.label")}
        >
          {services.map(service => (
            <a
              className="group isolate grid min-w-0 grid-cols-1 grid-rows-[190px_minmax(0,1fr)] overflow-hidden rounded-2xl border border-line bg-paper-strong text-ink no-underline shadow-card-inset transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-[3px] hover:border-gold/70 hover:shadow-portal focus-visible:-translate-y-[3px] focus-visible:border-gold/70 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gold/35 active:-translate-y-px active:scale-[0.99] motion-reduce:transition-none md:grid-cols-[minmax(170px,38%)_1fr] md:grid-rows-[minmax(190px,auto)] lg:grid-cols-1 lg:grid-rows-[230px_minmax(0,1fr)]"
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("services.openLabel", {
                name: t(`services.${service.id}.title`),
              })}
              key={service.id}
            >
              <div
                className="relative overflow-hidden bg-mist"
                aria-hidden="true"
              >
                <img
                  className="block h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025] motion-reduce:transition-none"
                  src={service.image}
                  alt=""
                  width={service.width}
                  height={service.height}
                />
              </div>
              <div className="flex min-w-0 flex-col justify-between gap-7 p-5 sm:p-6 lg:p-8">
                <div>
                  <h2 className="m-0 text-2xl leading-tight font-bold tracking-[-0.035em] text-ink">
                    {t(`services.${service.id}.title`)}
                  </h2>
                  <p className="mt-3 mb-0 max-w-xl text-sm leading-6 text-ink-soft">
                    {t(`services.${service.id}.description`)}
                  </p>
                </div>
                <span className="inline-flex w-max items-center border-b border-gold-soft text-sm leading-7 font-extrabold whitespace-nowrap text-forest transition-colors group-hover:text-gold group-focus-visible:text-gold motion-reduce:transition-none">
                  {t(`services.${service.id}.cta`)}
                </span>
              </div>
            </a>
          ))}
        </section>

        <footer className="flex flex-col items-start gap-1 pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <p className="m-0">{t("footer.notice")}</p>
          <p className="m-0">{t("footer.support")}</p>
        </footer>
      </PageShell>
    </main>
  )
}
