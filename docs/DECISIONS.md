# Decision register

Updated 2026-10-16. The project brief is a starting hypothesis. “Proposed” means not yet approved by Suleyman; publication of these notes does not approve implementation.

| ID | Status | Direction | Reason / consequence |
| --- | --- | --- | --- |
| D01 | Confirmed user constraint | Planning and documentation only for this assignment | No frontend scaffold, package installation, site implementation, or deployment |
| D02 | Confirmed brief constraint | Preserve old portfolio; use GitHub for shared review | Audit old source read-only; review proposed changes through branches/PRs |
| D03 | Confirmed brief constraint | Evidence must support claims; distinguish completed work from proposals | Research provenance and personal contribution must be checked before publication |
| D04 | Proposed | Static Astro site with TypeScript and Markdown content collections | Content-heavy hiring journey benefits from HTML-first pages and validated content; React islands only if a specific interaction warrants them |
| D05 | Proposed | Scoped CSS and CSS custom properties for initial tokens | Keep content/layout simple; add Tailwind only if the team prefers that authoring model. No motion library by default |
| D06 | Proposed | Git-managed content; no CMS, database, login, or API in initial scope | Current brief is a public portfolio, with no established authenticated or dynamic requirement |
| D07 | Proposed | Home, Work, About, Resume, Contact; case studies at /work/[slug]/ | Start from the brief, then validate labels and grouping with hiring tasks; keep navigation small |
| D08 | Proposed | D2L as conditional flagship; supporting projects chosen by evidence | Do not fill arbitrary slots or turn future AI work into past experience |
| D09 | Proposed | Static Pages hosting candidate; domain cutover deferred | Existing site/domain remains operational during planning. Final host depends on preview, URL, and contact needs |

Tradeoff for D04: Astro introduces a framework to learn. A React + Vite implementation preserves familiarity and may be preferable if substantial interactive demonstrations become the core experience. A plain SPA would still need a deliberate prerendering/metadata/deep-link strategy. Next.js is an alternative if real server features emerge; none are currently established. Revisit after audience and interaction scope are agreed.

## Review process

Record Suleyman's explicit approval or revision against each proposed ID before implementation. ChatGPT can suggest changes through GitHub; coordinate ownership of the same files to avoid simultaneous edits. Each review should state its branch/commit and unresolved questions. Never put interview transcripts, participant identifiers, or restricted source material into this public repository; publish only owner-approved, redacted evidence.

## Review checkpoint — 2026-10-16

Suleyman relayed ChatGPT's review of PR #1: ChatGPT supports the documentation structure and proposed Astro + TypeScript direction. This is review support, not Suleyman's architectural approval. D04–D09 remain Proposed. PR #1 must remain open; resolve the highest-priority questions before merging or beginning frontend work.

Confirmed priority: project evidence, attribution, and accurate resume information come before implementation. Evidence provenance is a first-class part of the case-study content model. No code or dependency changes are authorized by this checkpoint.

Completed: initial source/evidence audit, live homepage reference check, and publication of the planning docs in PR #1. Next: gather owner answers and source artifacts for the P0 questions in OPEN_QUESTIONS.md.
