import { describe, expect, it } from "vitest"
import { services } from "./services"

describe("financial service links", () => {
  it("exposes the three requested HTTPS destinations", () => {
    expect(services.map(({ href }) => href)).toEqual([
      "https://daily-insights.geailab.com/",
      "https://ai-financial-report-web.vercel.app/login",
      "https://reporting-agent-flame.vercel.app/login",
    ])
  })
})
