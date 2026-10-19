# Decision register

Updated 2026-10-16. The project brief is a starting hypothesis. “Proposed” means not yet approved by Suleyman. The later bounded homepage assignment authorizes M1 below; it does not approve all launch decisions.

| ID | Status | Direction | Reason / consequence |
| --- | --- | --- | --- |
| D01 | Superseded for M1 only | Original planning-only hold lifted for the explicitly requested grayscale homepage | Full site, finalized claims, merge, and deployment remain outside scope |
| D02 | Confirmed brief constraint | Preserve old portfolio; use GitHub for shared review | Audit old source read-only; review proposed changes through branches/PRs |
| D03 | Confirmed brief constraint | Evidence must support claims; distinguish completed work from proposals | Research provenance and personal contribution must be checked before publication |
| D04 | Approved for M1 | Static Astro site with TypeScript and Markdown content collections | Explicitly requested in the latest assignment; no React dependency needed for the homepage |
| D05 | M1 implementation choice; long-term choice proposed | Plain CSS and CSS custom properties | Reversible grayscale implementation; no Tailwind or motion library added |
| D06 | Proposed | Git-managed content; no CMS, database, login, or API in initial scope | Current brief is a public portfolio, with no established authenticated or dynamic requirement |
| D07 | Partially approved for M1 | Navigation Work, About, Resume, Contact; homepage Hero → Selected Work → Design Approach → About → Contact | Same-page anchors in M1; separate pages and case-study routes remain proposed |
| D08 | Proposed | D2L as conditional flagship; supporting projects chosen by evidence | Do not fill arbitrary slots or turn future AI work into past experience |
| D09 | Proposed | Static Pages hosting candidate; domain cutover deferred | Existing site/domain remains operational during planning. Final host depends on preview, URL, and contact needs |

Tradeoff for D04: Astro introduces a framework to learn. A React + Vite implementation preserves familiarity and may be preferable if substantial interactive demonstrations become the core experience. A plain SPA would still need a deliberate prerendering/metadata/deep-link strategy. Next.js is an alternative if real server features emerge; none are currently established. Revisit after audience and interaction scope are agreed.

## Review process

Record Suleyman's explicit approval or revision against each proposed ID before implementation. ChatGPT can suggest changes through GitHub; coordinate ownership of the same files to avoid simultaneous edits. Each review should state its branch/commit and unresolved questions. Never put interview transcripts, participant identifiers, or restricted source material into this public repository; publish only owner-approved, redacted evidence.

## Review checkpoint — 2026-10-16

Suleyman relayed ChatGPT's review of PR #1: ChatGPT supports the documentation structure and proposed Astro + TypeScript direction. This is review support, not Suleyman's architectural approval. D04–D09 remain Proposed. PR #1 must remain open; resolve the highest-priority questions before merging or beginning frontend work.

Confirmed priority: project evidence, attribution, and accurate resume information come before implementation. Evidence provenance is a first-class part of the case-study content model. No code or dependency changes are authorized by this checkpoint.

Completed: initial source/evidence audit, live homepage reference check, and publication of the planning docs in PR #1. Next: gather owner answers and source artifacts for the P0 questions in OPEN_QUESTIONS.md.

## Approved homepage checkpoint — 2026-10-16

Suleyman explicitly approved primary positioning as UX / Product Designer; 80% Editorial Minimalism / 20% Technical Precision; light-first with optional dark mode; the hierarchy and navigation in D07; large type, generous whitespace, restrained colors, precise alignment, authentic artifacts, and accessible responsive keyboard interaction. This approval authorizes a low-fidelity homepage on a separate implementation branch and draft PR. It does not approve D08, D09, claims, artifact reuse, or production launch. Earlier planning-only checkpoints remain historical context.

M1 choices: Astro 7.4.0, TypeScript, schema-backed Markdown collections, Node 24.19.0, pnpm 11.25.0 with committed lockfile (available local runtime; replaces the proposed npm choice), standard static HTML and no React, system fonts and grayscale CSS, no backend, no analytics, no deployment workflow. Header links target existing homepage sections. Theme starts light regardless of OS; an explicit choice persists when storage is available. No-JavaScript mode retains core navigation and native disclosures.

Implementation review is stacked on docs/portfolio-discovery (PR #1), which remains open/draft. The new draft PR targets that branch to isolate implementation changes; after planning merges, retarget to main and recheck the diff. Do not merge either PR without owner review.

## Community Spaces assignment — 2026-10-16

The owner explicitly requested a dedicated Community Spaces page and large homepage feature using authentic supplied sources. This authorizes `/work/community-spaces/` and its review-only content, not publication of other candidates. Shared team contribution was confirmed by the owner. See COMMUNITY_SPACES.md for sources, validation, and unresolved rights/content issues. Work is on a separate feature branch stacked on PR #2; neither merge nor deployment is authorized. No flagship status is assigned beyond the requested feature.

## Full Community Spaces review — 2026-10-16

Owner approved the staggered hero as visual direction and requested the complete case-study experience. Preserve authentic screen composition/editorial styling; KIBS is a secondary label. Research, problem definition, physical/digital concept, flow, evolution, deliverables, and reflection are now represented with source notes. Full desktop/mobile capture sequences are documented in COMMUNITY_SPACES.md. No production or merge approval is implied.


## Approved audit refinements — 2026-10-19

The owner said to proceed with the independent review’s recommendations. Implement on a separate branch/draft PR, preserving PR #5’s scope and the live portfolio.

- Use the recommended D2L-first homepage ordering with substantial authentic visuals for both commissioned studies. Keep Pure Michigan’s record as draft pending evidence.
- Keep the existing visual system; favor compact editorial explanation, ordinary anchors and original-size links over a new lightbox or animation library.
- Add direct Gmail contact and the owner-supplied LinkedIn URL. Serve the selected resume with the expressly authorized collaborative D2L revision; correct its outdated LinkedIn annotation.
- Refine Community Spaces separately within this authorized audit pass, preserving original art and research sample limits. The original prohibition on Community changes applied to the earlier D2L-only Phase 1, not this later portfolio-wide approval.
- Preserve noindex, source originals, credits and prototype limitations. No launch, merge, domain or hosting approval is implied.
