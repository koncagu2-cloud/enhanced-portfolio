# Proposed architecture and first milestone

Status: initial proposal, 2026-10-16. The later user assignment authorizes the bounded Astro/TypeScript grayscale homepage described in [IMPLEMENTATION_M1.md](IMPLEMENTATION_M1.md). Other architecture/content/hosting decisions remain proposed. Earlier planning and acceptance sections below describe the broader site, not a blocker to this explicitly authorized prototype.

## Recommended shape

Use Astro with TypeScript, static output, and Markdown content collections. Generate ordinary HTML pages at build time. Add small interactive components only for a defined task such as an accessible image viewer; a React island is optional, not an initial dependency. This is a fit judgment based on the current content-heavy brief, not a claim that React cannot support a portfolio.

Proposed content flow: approved project records + approved media → schema and link checks → reusable layouts → static pages → hosting. A content edit becomes a reviewed Git commit followed by a build; recruiters read the generated pages without needing a login or runtime content service.

Astro provides [schema-backed content collections](https://docs.astro.build/en/guides/content-collections/) and [selective client-side islands](https://docs.astro.build/en/concepts/islands/). Exact supported package and Node versions should be verified and locked when scaffolding is approved. Do not copy the old project's dependency versions automatically.

## Information architecture and boundaries

| Route | Purpose |
| --- | --- |
| / | Clear role positioning, strongest evidence, selected work, resume/contact actions |
| /work/ | Small curated project list with real artifacts, ownership, and project status |
| /work/[slug]/ | Scannable summary plus evidence-backed narrative; meaningful headings and optional table of contents |
| /about/ | Concise credible background tied to demonstrated strengths |
| /resume/ | Accessible HTML resume and a separately checked downloadable PDF |
| /contact/ | Approved email link and verified professional links; form only if a genuine need emerges |

Proposed source boundaries (directories to create only after approval):

- src/content/projects/: one Markdown narrative with typed frontmatter per project.
- src/content.config.ts: collection schema, required fields, publication rules.
- src/data/: single approved identity/contact record and structured resume data.
- src/layouts/: base page and case-study layout, including title/description/canonical metadata.
- src/components/: navigation, project card, figure/caption, evidence callout, case-study summary, optional TOC. Components do not supply invented project findings.
- src/pages/: file-based routes and generated published case-study routes.
- src/assets/projects/: approved images processed at build time, with dimensions and descriptive alternatives.
- public/: approved download files and assets that must retain exact URLs.
- src/styles/: typography, spacing, color, focus, and reduced-motion tokens.
- docs/: decision history, inventory, open questions, and editorial review records.

Use Markdown initially. Add MDX only if editorial requirements need embedded components. Avoid coupling narrative to React JSX or one giant project-data file.

## Proposed content contract

Every project needs: slug, title, concise summary, project type (coursework/personal/client as verified), dates, individual role, team attribution, problem, constraints, publication status, and source references. Optional sections hold real evidence, decisions, outcomes, limitations, and reflection. Do not render empty mandatory-looking process stages.

Keep **publication status** (draft/review/published) separate from **work status** (concept/prototype/launched). Each evidence record should carry an ID, approved public source or artifact path, evidence type, date/context, contributor attribution, caption/alt text, and whether it is original, reconstructed, or explanatory. Explicitly distinguish observation, interpretation, and proposed validation. Use outcome text plus optional sourced metrics; never require invented numbers.

### Evidence provenance requirements

The requirement to track provenance is agreed; the following field design remains proposed pending architecture/content-model approval. Treat evidence as referenced records rather than captions alone. Each substantive research, ownership, or outcome claim should reference evidence IDs.

| Field | Purpose |
| --- | --- |
| evidenceId / claimIds | Stable connection between artifacts, claims, and design decisions |
| sourceReference | Original source location or safe reference; do not expose private source URLs or credentials |
| sourceContext / date | What activity produced it and when; record unknowns explicitly |
| creator / contribution | Separate original creator, team attribution, and Suleyman's contribution |
| representation | Original, redacted, reconstructed, or explanatory; describe transformations |
| verification | Unverified, source-checked, or owner-confirmed; record reviewer and review date when checked |
| publicationPermission | Pending, approved, or restricted; record what can be shown publicly |
| limitations | What the evidence supports, what it cannot establish, and unresolved uncertainty |

The editorial publication gate requires adequate verified support and permission for each factual claim. Pending or restricted evidence blocks that claim's publication, not necessarily the whole project if it can be honestly narrowed. Conceptual reasoning and future validation can be included when explicitly labeled. An explanatory redraw cannot establish that interviews or testing occurred. Unknown evidence should never silently become a confirmed finding. Only public-safe metadata belongs in this repository.

Schema checks can enforce structure and referenced files, but cannot certify truth. Owner review must confirm claims, authorship, consent, and publication permission. Drafts should be excluded both from project indexes and generated public routes. Content in this public Git repository is still public even when excluded from the built site; keep raw or sensitive evidence outside it.

## Delivery and quality gates after approval

- Use npm with a committed lockfile and reproducible CI installation. Choose and document the supported Node runtime when scaffolding.
- PR checks: content/type validation, formatting/linting, production build, missing assets and internal links, and representative Playwright journeys. Check meaningful behavior rather than mirroring component internals.
- Test navigation → project → resume/contact, direct case-study URLs, unknown URLs, draft exclusion, keyboard operation, and any actual dialog's focus management.
- Pair automated accessibility checks with manual keyboard, focus, screen-reader spot checks, contrast, reduced motion, and mobile/reflow review. Target WCAG 2.2 AA; do not label it achieved before audit.
- Core content remains usable without client JavaScript. Serve sized/optimized images; minimize fonts and animation. Set mobile performance budgets during the grayscale milestone and measure before visual polish.
- Page-specific metadata, canonical URLs, social previews, sitemap, and a real 404. Confirm the final origin/base path before publishing links.
- GitHub Pages is a low-complexity static candidate with an [official Astro deployment workflow](https://docs.astro.build/en/guides/deploy/github/). If branch preview URLs are essential, select a static host supporting that workflow before implementation. No DNS, CNAME, production workflow, or domain switch in this assignment.
- No site authentication or stored credentials in the proposed public portfolio. GitHub/plugin credentials stay outside site source. Start with email contact and no analytics; revisit forms, spam handling, analytics, and data policy only if required.

## First milestone: agree on evidence, IA, and architecture

The next milestone should finish planning rather than start the website.

Deliverables:

1. Owner-approved role positioning and primary hiring audience; one clear sentence describing the value proposition.
2. Project inventory with provenance, individual contribution, publication permissions, gaps, and flagship/supporting/archive disposition. Choose D2L only if its audit supports it.
3. One source-backed flagship outline: 30-second summary, two-minute scan, and deeper narrative. Trace at least one real observation through a decision and artifact to a known outcome or explicitly untested hypothesis.
4. A sitemap and page-purpose/content map reviewed against the brief's 30-second, two-minute, and ten-minute hiring tasks.
5. Approved D04–D09 decisions, a sample content record on paper, hosting direction, and an ordered backlog.

Acceptance: Suleyman confirms factual claims and content priorities; every public claim in the flagship outline has a source or is explicitly labeled proposed; unresolved blockers are documented; architecture and IA receive explicit approval. A short walkthrough using the outline should let a reviewer identify role, personal contribution, a design decision, and resume/contact paths. This is a review method, not a completed usability test or fabricated finding.

Only after that milestone is approved: implement a grayscale vertical slice with navigation, one real project, and resume/contact paths; check structure and accessibility before adding visual polish. Do not scaffold that slice during the present assignment.
