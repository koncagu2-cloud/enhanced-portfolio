# M1 — Grayscale homepage for review

Status: bounded implementation requested by Suleyman, 2026-10-16. This is a provisional structure study, not a launch-ready portfolio. Supersedes the earlier planning-only hold for this milestone only.

## Scope and blockers

Minimal milestone: one static Astro/TypeScript homepage that demonstrates the approved content hierarchy, navigation, responsive grid, collection-driven work candidates, optional theme, and keyboard behavior. No case-study pages, final resume, contact form, image gallery, analytics, or deployment.

There are no remaining technical blockers to this bounded preview. The following still block later deliverables:

| Unresolved item | Blocks | M1 handling |
| --- | --- | --- |
| Hosting, public origin/base path, and domain cutover | Production URLs, canonical metadata, deployment | Local preview, noindex metadata; no deployment or CNAME |
| Case-study route/IA approval | Full navigation and case-study implementation | Real same-page Work/About/Resume/Contact anchors |
| Project attribution, evidence, and artifact permissions | Final cards, images, findings, and outcomes | Explicit provisional candidates; no artifact images or factual research/outcome claims |
| Verified resume and preferred contact details | Resume download and final contact | Honest resume-unavailable note; contact links to the existing portfolio's Contact page |
| Final type/color/visual system | Polished production design | System fonts, neutral tokens, no motion library |

Astro + TypeScript + content collections are explicitly authorized for M1. Do not treat this as approval of D08 (flagship selection) or D09 (hosting). See DECISIONS.md for the updated scope of D04–D07.

## Initial component structure

`src/pages/index.astro` composes BaseLayout → SiteHeader → Hero → SelectedWork → DesignApproach → About → Contact → SiteFooter. SectionHeading gives major sections a consistent title/number rail. ProjectRow renders collection metadata and a native details disclosure. ThemeToggle is the only custom interactive control. There is no client framework runtime.

`src/data/site.ts` is the identity/navigation/current-contact source. `src/content/projects/*.md` holds two review candidates; collection configuration imports the reusable provenance schema from `src/lib/project-schema.ts`. No full case-study routes are generated. Markdown bodies contain review notes, not invented case studies. Review entries appear deliberately on this noindex prototype; drafts are excluded. Before launch, replace this review selection with an explicitly published-only policy and approved claims.

Content validation rejects duplicate evidence IDs, missing claim references, and publishing linked claims with pending/restricted or unverified evidence. Published records also require a known work status and at least one supported claim. These checks enforce structure, not truth: owner editorial review must still verify sources, narrative, attribution, and publication rights. Public-safe references point to the old portfolio's inspected commit; they establish only that prior summaries exist. Raw research is not copied.

## Responsive layout rules

- Content max-width: 81rem; desktop margins: 3rem each. Hero uses fluid `clamp()` type. A 4rem label rail aligns headings and project indices.
- Above 60rem: header is a three-part grid; project rows pair narrative with an honest review-status column; approach has three columns; About has two.
- At/below 60rem: margins become 1.5rem; navigation occupies its own visible header row; hero intro/action stack. Navigation stays accessible without a hamburger or JavaScript.
- At/below 40rem: margins become 1.25rem; label rail shrinks to 2rem; project status moves below the narrative; approach/About/contact stack; footer wraps.
- No fixed-width media or decorative placeholder artwork. Text can wrap, native disclosure expands in document flow, focus remains visible, and navigation controls have at least 44px height. Breakpoints are content-layout choices rather than device identification.

## Theme strategy

Light is the default, even on an OS configured for dark. CSS custom properties define paper/ink/muted/rule tokens. Optional dark mode changes those tokens via `html[data-theme]`; it is an explicit preference, not an automatic OS override. A short head script applies the saved preference before rendering to avoid a light flash. A keyboard-operable button uses stable “Dark mode” text and `aria-pressed` to expose state.

Storage failures are caught; the current-page toggle still works. Without JavaScript, the theme control remains hidden and the light site, links, and details controls remain usable. No cross-tab preference synchronization is implemented. Reduced-motion CSS suppresses animation/transitions; no entrance animations or smooth scrolling are added.

## Runtime and validation

Node 24.19.0, pnpm 11.25.0, Astro 7.4.0, TypeScript 5.9.3. Versions are recorded in .node-version, package.json, and pnpm-lock.yaml. The local environment supplies pnpm rather than npm, so M1 uses pnpm consistently. pnpm-workspace.yaml explicitly permits esbuild's required build script; the lockfile records dependency resolution. No old-site packages or generated assets were copied.

Validation completed locally on 2026-10-16:

| Check | Result |
| --- | --- |
| Frozen dependency installation | Passed after explicitly allowing the esbuild build step |
| `pnpm run check` | Passed; 0 errors, 0 warnings, 0 hints |
| `pnpm run build` | Passed; static homepage and 404 generated |
| `pnpm run test:content` | 6 passed; provenance reference/publication validation |
| `pnpm run test` | 7 passed in Chromium against production output |
| Axe WCAG A/AA scans | Zero detected violations in desktop light/dark and mobile dark states |
| Responsive overflow | No horizontal overflow at 320, 390, 768, 1440px |
| Interaction | Keyboard skip link, native details, theme toggle/persistence, blocked storage, no-JavaScript navigation passed |
| Source diff whitespace | Passed |

Reviewed full-page desktop and mobile screenshots for hierarchy, wrapping, spacing, and clipping. [Desktop](previews/homepage-desktop.png), [mobile](previews/homepage-mobile.png), and [dark](previews/homepage-dark.png) captures are from the production-build test run. These are prototype review images, not research artifacts.

Initial validation found missing Node type declarations, corrected by adding @types/node. Astro preview exited early in the first browser runner attempt because this environment started a background preview; the runner now uses `--ignore-lock` to own its foreground server lifecycle. The final check/build/content/browser runs all passed.

Limits: no manual screen-reader audit, Safari/Firefox run, real-device review, or performance/Lighthouse audit yet. Automated accessibility checks do not establish WCAG conformance. No external contact flow was submitted. There are no approved artifact images to test or validated case studies to evaluate in this milestone.

## Review and next step

Review the hierarchy, type scale, whitespace, narrow layouts, theme behavior, provisional labels, and schema. Approval of this draft is not approval to publish unverified material. Keep PR #1 open; this implementation PR is stacked against docs/portfolio-discovery so its diff isolates M1. Retarget after planning merges. Do not merge or deploy in this assignment.

Next milestone: gather original evidence and owner-approved resume facts, confirm contribution and artifact rights, then replace one candidate with a genuine case-study vertical slice. No arbitrary number of projects is required.
