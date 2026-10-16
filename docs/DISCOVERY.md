# Repository and evidence audit

Reviewed 2026-10-16. Planning only; this is a source inspection, not a live-site usability or accessibility audit.

## Scope and confirmed repository state

- Read README.md and PROJECT_BRIEF.md completely after a successful `git pull --ff-only origin main`.
- New repository baseline: `5a33f01`. Its main tree contains exactly README.md and docs/PROJECT_BRIEF.md. There is no frontend, package manifest, asset library, test suite, CI, or deployment configuration yet.
- The earlier plugin write-test file is on a separate test branch, not main.
- The old portfolio is locally available at `/Users/suleymankoncagul/Documents/GitHub/portfolio`, with remote `https://github.com/koncagu2-cloud/portfolio.git`. Inspected local commit `27c378ef9a2c473ce6b04b57ff98dd0501d1b490`; working tree was clean. Did not pull, edit, install dependencies, or deploy that repository. Its local snapshot may differ from current remote main.
- No applicable AGENTS.md was found in either repository or the checked parent directories.

## Existing implementation: reference only

The old site's active entry is src/main.jsx → src/app/App.jsx → src/app/AppRoutes.jsx. src/App.jsx is a leftover Vite starter, not the active site. Routes cover home, projects, project details, about, strengths, resume, contact, and a fallback.

The tracked lockfile resolves React 19.2.4, React Router DOM 7.14.0, Framer Motion 12.38.0, Vite 8.0.7, and Tailwind CSS 4.2.2. These are observed old-project versions, not proposed new-project pins. Its scripts provide development, build, lint, and preview, but no test command. GitHub Actions is configured for Pages deployment; a custom-domain CNAME and other hosting configuration also exist. Configuration does not establish current live hosting state.

## Evidence inventory and provisional disposition

| Candidate | Material actually found in old source | Missing verification | Recommendation |
| --- | --- | --- | --- |
| D2L redesign | Extensive narrative in src/data/projects.js; Team 1 Figma link; seven SVGs for audit synthesis, flow, wireframes, course home, upload, file selection, and confirmation | Original research records; individual vs team ownership; quote provenance and permission to publish; actual prototype source/deployment; measured validation | Strongest flagship candidate, conditional on evidence audit |
| Pure Michigan IA/content audit | Summary, role, tools, and tags only in projects.js | Audit spreadsheet, original sitemap/taxonomy, decisions, outcomes, owner contribution | Supporting candidate; cannot publish a full case study yet |
| MSU Museum/social impact | Summary, role, tools, and tags only | Source artifacts, research, contribution, consent, outcomes; whether it is the accessibility/community project in the brief | Supporting candidate; identity and evidence unresolved |
| Personal portfolio | Actual React source, styles, navigation, and deployment configuration | Accurate account of authorship, rationale, iteration, and evaluation | Possible supporting engineering example, not automatically a flagship |
| Four draft projects | Design system, public service IA, mobile onboarding, analytics dashboard summaries marked draft | Evidence that the work exists beyond planned descriptions | Keep off the public launch list pending audit |
| AI × UX | Future candidate in shared brief | Research, design, implementation, evaluation | Future work; no existing AI product experience established |
| OceanGate journey map | Markdown, HTML, SVG and PNG files under old docs/ | Authorship, project context, source accuracy, publication suitability | Inventory candidate only; not selected for launch |

Presence of prose or a diagram proves a file exists, not that the described research or impact happened. No external Figma files or separate D2L application were audited in this pass.

## Material findings

1. **Research claims need reconciliation.** D2L copy describes interview planning/protocols, but also presents interview themes and two direct student quotes (projects.js:239–305). Obtain original notes and clarify completed vs proposed research before reuse. Do not infer that the quotes are fabricated; provenance is simply unverified here.
2. **SVGs are presentation graphics, not sufficient research provenance.** Source inspection shows native SVG shapes/text, including an audit synthesis and wireframe thumbnail. Confirm which are original exports, later reconstructions, or explanatory redraws. Label accordingly.
3. **One asset is invalid XML.** Parsing all seven D2L SVGs found six valid and one failure: heuristic-evaluation-board.svg line 32 contains an unescaped ampersand in “Feedback & recovery.” Repair or replace only in the new repository if approved for reuse. Asset rendering and visual fidelity were not tested.
4. **Generic templates invent apparent completeness.** ProjectDetail.jsx supplies placeholder sections when project data is missing and hardcodes assignment/upload/student takeaways in OutcomeSection for every project. New content must omit unsupported sections and require project-specific conclusions.
5. **Cards do not show the available evidence.** ProjectCard.jsx draws decorative gradient regions rather than rendering artifact images. Home foregrounds positioning and capability statements before concrete work. The new hierarchy should surface selected evidence earlier.
6. **Resume/contact data drift.** Resume.jsx says graduation is “expected May 2026,” now in the past. ResumeDesign.jsx and Resume.jsx describe Getir as a UX / Operations Intern with specific UX duties; confirm actual title and work rather than carrying these over. LinkedIn is null in siteContact.js but generic `/in/` links remain in resume components. Contact and PDF email sources differ. Establish one approved source for identity, dates, contact, and resume content.

## Limits and next step

No website was implemented. No build or browser audit was run on the old site. Source-level checks cannot establish accessibility compliance, research quality, or live-link availability. Resolve the priority questions in OPEN_QUESTIONS.md, then review the proposed architecture in DECISIONS.md and ARCHITECTURE.md.
