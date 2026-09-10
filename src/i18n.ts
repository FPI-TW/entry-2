import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  "zh-TW": {
    translation: {
      header: {
        brandLabel: "理財週刊與華信證券合作入口",
        portalLabel: "AI 金融智能入口",
      },
      hero: {
        kicker: "FINANCIAL INTELLIGENCE",
        title: "您的金融智能工作平台",
        description:
          "從晨會洞察、專業研報到策略對談，選擇工具立即開始今日的市場決策。",
      },
      services: {
        label: "金融智能服務",
        openLabel: "開啟{{name}}，將在新分頁顯示",
        morningBrief: {
          title: "晨會報告智能體",
          description:
            "快速掌握市場動態與關鍵訊號，讓每天的投資會議從重要資訊開始。",
          cta: "查看晨會報告",
        },
        financialReport: {
          title: "金融研報",
          description: "整合市場資料與研究脈絡，協助建立清晰完整的分析報告。",
          cta: "開啟金融研報",
        },
        strategist: {
          title: "全能軍師",
          description: "針對投資與商業議題展開即時對談，梳理策略與行動方向。",
          cta: "開始策略對談",
        },
      },
      footer: {
        notice: "合作夥伴專屬服務入口",
        support: "由廷豐金融科技提供技術服務",
      },
    },
  },
} as const

void i18n.use(initReactI18next).init({
  resources,
  lng: "zh-TW",
  fallbackLng: "zh-TW",
  interpolation: { escapeValue: false },
})

export default i18n
