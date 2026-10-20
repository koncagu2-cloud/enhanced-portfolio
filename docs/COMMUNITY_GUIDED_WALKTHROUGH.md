# Community Spaces — editorial and guided walkthrough

Owner-approved implementation for draft review, 2026-10-19.

## Scope and branch

The owner approved the focused Community Spaces blueprint. Work is isolated on `feat/community-guided-walkthrough`, based on PR #7 head `bc15aed`, targeting `feat/d2l-guided-walkthrough` in a separate draft PR. This preserves the approved D2L work and all upstream portfolio refinements. Existing PRs remain open/draft. No merge, deployment, original/live portfolio or Figma edit.

## What changed

- Six chapter labels and original staggered hero retained. Research now connects documented needs/tasks to visible concept responses and specific future evaluation questions.
- Physical and digital relationship explained as discovery → details → registration → intended visit. The last stage is a proposed service relationship, not observed attendance or an invented app screen. Original spatial sketches remain prominent; original task-flow artifact is retained in a native disclosure.
- Final Concept uses four original states in a guided walkthrough with optional annotations and Read all steps. Portrait composition is distinct from D2L's desktop composition; original images are not stretched beyond 393px. At 390px viewport they use 350px instead of the former 280px cap; at 320px they use 280px.
- Original sketches, mid-fi/hi-fi comparison, complete team credits and “Designing beyond the screen” conclusion preserved. Reflection retains three evaluation priorities, including evaluating “Continue Shopping” terminology. The source screen remains unchanged.
- The roughly 9-of-12 music/concert finding stays contextual, with no population-level conclusion, concert-feature claim or merger with the unresolved 40-person interview count. No raw interview responses or participant identifiers added.

## Reused interaction architecture

`GuidedJourney.astro` renders configurable typed steps, Figma file references and layout. `journey.ts` defines the step shape. Shared styles are extracted to `guided-journey.css`; D2L's `StudentJourney.astro` becomes a thin three-state wrapper. Community uses its own four-state data in `community-journey.ts` and portrait-specific layout. No new dependencies.

Both cases retain native keyboard step buttons, `aria-current="step"`, polite position announcements, stable-label Read all steps toggle, button focus retention, direct fragment revelation and heading focus, optional native annotation disclosures and full-size image links. All original states are available without JavaScript. Annotation numbers are a separate noninteractive overlay, with equivalent text; narrow layouts use text only. No autoplay, motion, modal, simulated booking or submission.

D2L original page content/route, source images and state sequence are unchanged. The refactor changes its wrapper and stylesheet organization, not its intended behavior or editorial design; all D2L tests are rerun.

## Original Community artifact map

Figma file: `pWjqzjZD2HgayCk6pQg3Zk`.

| Step | Node | Original asset | Explanation |
| --- | --- | --- | --- |
| Discover an event | 214:237 | events-hi-fi.png | Titles, images, dates and descriptions introduce activities. |
| Review the details | 214:167 | event-details-hi-fi.png | Description, location and time support considering a visit. |
| Reserve a place | 214:89 | reserve-spot-hi-fi.png | Member type, requirements and illustrative availability before Book. |
| See confirmation | 214:4 | confirmation-hi-fi.png | Original acknowledgment and next actions, including wording to evaluate. |

Other originals: user needs `STtzkQ9AyK3krzZihxnXxt` node 0:1; mid-fi Events 1:5; presentation spatial sketches p10, digital sketch p11, original flow p8. Source images and provenance manifests are unchanged. No temporary Figma URLs or new original-interface designs.

Research-to-design connections are source-backed interpretations, not invented contemporaneous decision records. All four teammates—Katelyn Jewett, Illiana Gonzalez, Boran Erdogan and Suleyman Koncagul—retain shared attribution.

## Validation executed

- Astro check: zero errors/warnings/hints.
- Production build: four static routes passed.
- Content checks: 8/8 passed, including unchanged Community/D2L original-image hashes.
- Chromium browser suite: 35/35 passed, including all D2L regressions and six new Community journey tests.
- Journey coverage: keyboard focus/progress/active state, read-all, research/deep links, native annotation controls, source preservation, mobile sizing, no-JavaScript fallback and emulated touch.
- All Community states with annotations and read-all audited in light and dark at 320/390/768/1440. Reduced motion and 200% root-text overflow checks included. No axe violations detected; this is not accessibility certification.
- Additional screenshot review at four widths: no page-script errors or document overflow. [Review measurements](previews/community-guided/review.json).
- D2L default walkthrough visually inspected after extraction; current behavior covered by its complete existing test suite.
- Diff checks confirm homepage, resume, hero component, D2L content/route, original assets, global styles and shared case-study styles untouched from base. Whitespace and relative report links pass.

Initial run passed 34/35 checks. The additional Events figure repeated a full-size link label from the comparison. Walkthrough image links now include step context for distinct descriptions; the final full suite passes. No accessibility rules disabled.

## Review captures

| View | Desktop 1440 | Mobile 390 |
| --- | --- | --- |
| Full page | [View](previews/community-guided/full-1440.jpg) | [View](previews/community-guided/full-390.jpg) |
| Discover | [View](previews/community-guided/step-1-1440.jpg) | [View](previews/community-guided/step-1-390.jpg) |
| Details | [View](previews/community-guided/step-2-1440.jpg) | [View](previews/community-guided/step-2-390.jpg) |
| Reserve | [View](previews/community-guided/step-3-1440.jpg) | [View](previews/community-guided/step-3-390.jpg) |
| Confirmation | [View](previews/community-guided/step-4-1440.jpg) | [View](previews/community-guided/step-4-390.jpg) |

[Small mobile](previews/community-guided/full-320.jpg) · [Tablet](previews/community-guided/full-768.jpg) · [Research](previews/community-guided/research-1440.jpg) · [Physical/digital relationship](previews/community-guided/relationship-1440.jpg) · [Dark desktop](previews/community-guided/dark-1440.jpg) · [Dark mobile](previews/community-guided/dark-390.jpg).

## Remaining review items

Manual screen-reader announcements, Safari/Firefox, physical devices, native zoom and measured performance remain unverified. Original screenshot text can still require full-size viewing. Third-party asset rights and source sharing remain launch gates. Project dates and participant totals remain unresolved and are not newly asserted. No built space/app, real reservation, observed attendance, validated improvement or sole ownership is claimed. Review-only/noindex unchanged; no merge/deployment.
