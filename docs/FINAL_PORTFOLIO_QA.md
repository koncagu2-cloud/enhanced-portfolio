# Portfolio foundation QA — 2026-10-20

## Scope and result

Owner authorized the final portfolio-wide pass after the Community Spaces guided walkthrough. Work continues in `enhanced-portfolio`, branch `feat/community-guided-walkthrough`, draft PR #8. Starting commit: `e89b7a7e9229db504fcd27efa2af7d3c0fcc2226`.

The homepage, About/resume/contact sections, D2L and Community Spaces retain their approved presentation. No website source, styles, routes, resume or original assets changed in this pass. The old portfolio and live domain were untouched. Review-only/noindex remains. No merge or deployment.

## Executed checks

| Check | Result |
| --- | --- |
| `pnpm run check` | 47 files; zero errors, warnings or hints |
| `pnpm run test:content` | 8/8; original asset hashes retained |
| `pnpm run build` | Four static routes built |
| `pnpm exec playwright test --browser=chromium` | 35/35 |
| `pnpm exec playwright test --browser=firefox` | 35/35 |
| `pnpm exec playwright test --browser=webkit` | 35/35 |
| Local route/resource/fragment sweep | 59 unique local link destinations; all successful responses and existing anchor targets |
| Heading structure | One h1 and no skipped heading levels on homepage, both case studies and 404 |
| Review indexing guard | `noindex, nofollow` on all four checked pages |

Browser checks cover 320/390/768/1440 responsive layouts, original-image loading/proportions/descriptions, keyboard skip links and visible focus, chapter and primary navigation, light/dark themes, theme persistence and blocked storage, guided states and annotations, direct fragments, no-JavaScript content, reduced motion, emulated touch and enlarged root text. Axe A/AA checks detected no violations in the tested states. These are automated results, not WCAG certification or usability validation. WebKit is Playwright's engine build, not a certification of shipping Safari/iOS behavior.

### Corrections and reproducibility

- The older local preview process at port 4323 returned an EPERM error while reading the project. It was stopped and restarted from this session; the review URL now serves the built portfolio. This was a local process issue, not a website code defect or deployment.
- Initial Chromium and Firefox runs passed 35/35. Initial WebKit run passed 31/35: four keyboard checks assumed plain Tab traverses links. A direct probe confirmed macOS WebKit's default: Tab reached a disclosure, while Option-Tab reached the skip link.
- Added `tests/browser/keyboard.ts` to use Option-Tab for macOS WebKit and Tab otherwise, preserving focus/viewport assertions and all test coverage. Final full suites were rerun. No accessibility rule disabled or test skipped.
- Firefox/WebKit binaries were installed into the local Playwright cache. No dependency or lockfile changes. To reproduce on another machine, install Playwright browsers first: `pnpm exec playwright install chromium firefox webkit`.

## Links and contact

[Raw response and fragment results](previews/final-qa/links.json) record the actual sweep. Local full-size assets and the PDF resolve. Email/LinkedIn hrefs remain the owner's approved values; no message was sent and mail delivery was not tested.

External HTTP observations: GitHub and the D2L Figma URLs returned 200; Community wireframe/user-needs URLs returned 403; LinkedIn returned 999. These automated, signed-out responses do not establish whether a human visitor can inspect the underlying Figma file or LinkedIn profile. A 200 from Figma also does not establish source-node visibility. Keep the existing canonical links; manually inspect sharing/sign-in behavior before launch. The locally hosted original screenshots remain available regardless of Figma sign-in.

## Research reconciliation

The owner reported ten interviews per teammate / forty total. The supplied individual research-board overview screenshots show five visible participant groups in several boards. The existing class presentation reports approximately nine of twelve participants interested in music/concert entertainment. These sources do not establish whether the twelve are a subset, a separate activity, or another aggregation; nor whether forty means unique people. Do not infer a reconciliation or convert either count into a population-level finding.

The current case study keeps the presentation's sample-specific finding, and the resume omits an interview count. No raw interview responses or participant identifiers were copied into this report/repository. To resolve this content gap, confirm unique participant count, study activity, and how the twelve-person summary relates to the interview boards. Existing provenance notes: [foundation alignment](FOUNDATION_ALIGNMENT.md), [resume accuracy notes](resume/README.md), [Community walkthrough](COMMUNITY_GUIDED_WALKTHROUGH.md).

## Visual review

Fresh homepage captures at 390/1440 include selected work, About, resume and contact. Mobile reading order and contact access were visually inspected. Both case studies were exercised by each browser suite; their approved walkthrough captures remain applicable because page code/assets did not change.

- [Homepage desktop](previews/final-qa/home-1440.jpg)
- [Homepage mobile](previews/final-qa/home-390.jpg)
- [About and resume section](previews/final-qa/about-1440.jpg)
- Community: [desktop](previews/community-guided/full-1440.jpg), [390px](previews/community-guided/full-390.jpg), [320px](previews/community-guided/full-320.jpg)
- D2L: [desktop](previews/d2l-guided/full-1440.jpg), [390px](previews/d2l-guided/full-390.jpg)

## Remaining before publication

1. Manual VoiceOver/NVDA review, physical devices, shipping Safari/iOS and native browser zoom. Enlarged-root-text and engine tests do not substitute for these checks.
2. PDF semantic accessibility, measured performance/Core Web Vitals and a real recruiter review remain unverified.
3. Confirm Figma visitor access and third-party asset rights; resolve the research-count relationship before adding any new count claim.
4. Getir dates/title remain provisional/descriptive as recorded in the resume notes. Served resume still points to the existing live domain pending a separate launch decision.
5. Owner's final visual approval and review of stacked draft PRs. Launch/hosting/domain decisions require separate approval. Noindex is an indexing hint, not access control.

The foundation passes the automated checks listed above. It is ready for continued content development and owner review, with these publication checks still open; this report does not declare it ready to launch.
