import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import Header from "../components/Header"
import i18n from "../i18n"

import appCss from "../styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: i18n.t("meta.title") },
      {
        name: "description",
        content: i18n.t("meta.description"),
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html className="min-h-full min-w-80 scroll-smooth bg-paper" lang="zh-Hant">
      <head>
        <HeadContent />
      </head>
      <body className="m-0 min-h-full overflow-x-hidden bg-paper font-sans text-ink antialiased">
        <Header />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
