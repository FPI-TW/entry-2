### Git rules

1. Never use --no-verify
2. Branch names must use `<type>/<summary-kebab-case>`, for example `feat/platform-command-split` or `fix/auth-refresh-bug`.
3. Commit messages must use `<type>: <summary>`, for example `feat: split package scripts by platform` or `fix: guard renderer process access`.
4. Recommended commit types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `build`, `ci`.
5. Unless the user asks, never relax TypeScript, lint, or format constraints, and never skip tests.\

## UI 規則

- 元件視覺樣式優先使用 Tailwind CSS utilities；新增或修改 UI 時，不新增只為單一元件服務的 semantic CSS class。
- 盡可能使用 Tailwind 原生 class name；僅在 Tailwind 沒有對應 utility 或必須引用專案 design token 時使用 arbitrary values（例如 `[...]`）。
- 不得使用常數保存 Tailwind class name，避免編輯器的 Tailwind 插件無法辨識；重複樣式應抽成共用元件、shadcn variant，或在 Tailwind 中定義可復用的 class name。
- 因執行期條件、狀態或其他功能需求時可以使用變數組合 class；不得只為集中保存一組靜態樣式而建立變數。
- 頁面元件的條件式 class 必須直接列出完整 class 名稱；只有共用 UI 元件內的 shadcn/CVA variants 可以集中管理 class 組合。
- `src/styles.css` 僅保留 Tailwind import、全域 design tokens、字型、頁面基礎樣式，以及 utilities 難以清楚表達的跨元件規則。
- 沿用 CSS variables 作為明暗主題的 design tokens，再由 Tailwind utilities 引用；不得在元件內複製 light/dark 色碼。
- 所有非同步資料頁面必須有明確的初次 loading UI（建議 skeleton 並搭配 `role="status"` / `aria-live`）；第一次請求完成前，不得顯示錯誤占位或「無資料」狀態。

### Validation Rules and Checklist

1. Formatting
   - Prompt: Apply and verify formatting rule.
   - When to use: Before committing or after broad edits, normalize formatting across the codebase.
   - Checklist:
     - Run `format`.
     - Run `format:check`.
     - Confirm only intended files were changed.

2. Git Hook Maintenance
   - Prompt: Apply and verify git hook rule.
   - When to use: When pre-commit and pre-push checks must stay enforced and consistent.
   - Checklist:
     - Ensure hooks are executable.
     - Ensure hooks include `format:check` and `lint:check`.
     - If type-checking or tests are enabled, ensure those checks are included.

3. Lint Validation
   - Prompt: Run and validate lint rule.
   - When to use: After adding rules or changing tooling, verify lint consistency.
   - Checklist:
     - Run `lint`.
     - Run `lint:check`.
     - Fix max-warnings and remaining lint violations.

4. Test Configuration
   - Prompt: Validate test runner setup and execution.
   - When to use: When test rules are added or test configuration changes.
   - Current test runner: `vitest`
   - Checklist:
     - Confirm the selected test runner matches the project setup.
     - Run `test`.
     - Run `test:coverage` when coverage validation is needed.

5. TypeScript Settings
   - Prompt: Validate TypeScript strictness and config.
   - When to use: When tsconfig or strict typing rules are changed.
   - Checklist:
     - Run `type:check`.
     - Confirm strict compiler options remain enabled.
     - Ensure `exclude` does not hide product-logic paths.

### Package Rules and Checklist

1. Tailwind CSS
   - Prompt: Use Tailwind utilities consistently and extract repeated UI patterns into components.
   - When to use: When styling TanStack Start routes, layouts, or shared UI primitives.
   - Checklist:
     - Keep class lists readable and grouped by layout, spacing, color, and state.
     - Use a shared class-name helper when composing conditional class names.
     - Avoid duplicating long class combinations across components.

2. i18next + react-i18next
   - Prompt: Use react-i18next translation keys instead of hard-coded user-facing strings.
   - When to use: When adding localized text or formatting to TanStack Start routes and components.
   - Checklist:
     - Keep translation keys stable and descriptive.
     - Use interpolation instead of string concatenation.
     - Keep locale files organized by route or feature.
