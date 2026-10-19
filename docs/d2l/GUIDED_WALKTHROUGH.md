# D2L hybrid editorial walkthrough

Approved and implemented for draft review, 2026-10-19.

## Scope and branch integration

The owner explicitly approved every item of the planning-only blueprint and authorized implementation. The blueprint was prepared against PR #5 (`33bd1ad`). Later homepage, resume, navigation, and Community refinements live in PR #6. To preserve that work and avoid rewriting either existing PR, this implementation is isolated on `feat/d2l-guided-walkthrough`, based on PR #6 head `a90a6c9`. Its new draft PR targets `feat/portfolio-review-refinements`. PR #5 and PR #6 remain open/draft; no merge, deployment, domain, original portfolio or Figma changes are authorized.

## Approved blueprint and final mapping

1. Overview/context: retain the editorial introduction and dual-desktop hero, shared role and concise metadata. `#challenge` remains a valid overview anchor.
2. UX findings: retain three original evaluator concerns, shorten explanations, and link directly into supporting artifacts. Each distinguishes observation, proposed response and open question.
3. Student journey: requirements → chosen file → submission record. Consolidates the previous Challenge priority list, student-workflow chapter and redesigned-student sequence. The original task map is available in a native disclosure; legacy `#workflows` remains valid.
4. Instructor experience: explanatory relationship between setup, student interpretation, submission and evaluation; original rubric maker and optional original task map. The relationship is not presented as verified prototype connectivity.
5. Exploration: original sketches and equal-scale earlier/final assignment comparison. Retained layout versus populated directions/editor controls is the documented change, not a fabricated before/after outcome.
6. Reflection: submission recovery, contradictory status and incomplete connections remain the three proposed evaluation priorities. Full technical findings in ANALYSIS.md are retained unchanged.
7. Credits/resources: all four collaborators and original source links retained.

## Exact student artifact map

All nodes are from Figma file `piRHnDp4bwoVkKMo1mHSt7`.

| Step | Node | Existing image | Design reasoning and boundary |
| --- | --- | --- | --- |
| Understand requirements | 554:1123 | assignment-final.webp | Navigation identifies Assignments; summary/directions give context before adding a file. Already-open assignment, not a new discovery screen. |
| Review selected file | 554:1377 | file-review.webp | Visible filename and pre-submit removal. Does not establish replacing a submitted file. |
| Check submission record | 554:1169 | submission-history.webp | Separate record with illustrative file/date/status. Not established as the destination after confirmation. |

Other unchanged sources: hero `554:1219`/`274:414`; original flows `123:4`/`123:3`; rubric `286:415`; sketches `160:4`/`161:2`; earlier assignment `481:1306`; reflection confirmation link `554:1452`; instructor settings link `274:488`. No new image exports or temporary URLs. Existing asset manifest hashes remain unchanged.

## Evidence-to-design connections

- Location: evaluation `16:2` → active Assignments cue and named assignment `554:1123`. No measured orientation or course-consistency improvement.
- Chosen file: evaluation `18:2` → filename/removal before Submit `554:1377`. Partial response to the concern about replacement after submission.
- Rubric cells: evaluation `9:6` → labeled criteria/headers/score `286:415`. No validated authoring/grading improvement.

These are source-backed correspondences, not an invented contemporaneous decision log. This remains a collaborative MSU academic concept by Suleyman Koncagul, Gabe Bustillo, Benji Fajardo and Alana Alexander, with shared work across the process. No launch, completed usability validation, sole ownership, measured results or complete operating prototype is claimed.

## Interaction and accessibility contract

- All three original states and their captions are server-rendered in document order. With no JavaScript they remain visible, with ordinary step links and native annotation disclosures.
- JavaScript progressively enhances the same HTML to one visible state, three native step buttons, a polite/atomic step-position announcement and a stable-label Read all steps toggle with `aria-pressed`.
- The selected button uses `aria-current="step"`; focus stays on the button during selection. No tab roles, custom arrow-key pattern, autoplay, scroll hijacking or animated transitions.
- Direct fragments and links from findings reveal the appropriate panel. Hash navigation within the journey focuses its heading and scrolls to the revealed state. Unrelated section navigation remains native.
- Optional annotations are off initially. Numbered markers are a separate presentation layer, not edited pixels; the same explanation is available as numbered text. On narrow screens only the text is shown. Markers are noninteractive and hidden from assistive technology.
- Full-size image links remain ordinary links. No modal/lightbox or simulated screenshot controls. Progress counts portfolio states, not completed coursework or a real submission.
- Dark mode styles the surrounding interface only. Original screen colors/aspect ratios/bytes are preserved. Native details remain usable without JavaScript. Reduced motion requires no alternate animation path because no animation is introduced.
- The custom element cleans up event listeners when disconnected. Astro/TypeScript architecture and existing shared components remain intact; no new dependencies.

## Validation executed

- `pnpm run check`: 43 files, zero errors/warnings/hints.
- `pnpm run build`: four static routes passed, same routes/noindex behavior.
- `pnpm run test:content`: 8/8, including unchanged original D2L and Community image hashes.
- `pnpm run test`: 29/29 Chromium tests passed. Six new journey tests cover focus/step visibility/read-all, finding/deep links, optional annotations and unchanged sources, no-JavaScript fallback, all steps/read-all/annotations in both themes at 320/390/768/1440 with reduced motion and enlarged text, and emulated touch controls.
- Existing tests still cover the homepage, Community, resume response, keyboard navigation/focus, anchors, image loading/proportions, saved theme/storage failure and reduced-motion/no-JavaScript behavior.
- Additional visual review at 320/390/768/1440: no document overflow or page-script errors. Desktop/mobile screenshots include each guided step and annotations. [Review metadata](../previews/d2l-guided/review.json).
- Source diff confirms homepage, resume, Community route/content, original images and shared design styles unchanged from PR #6 base. Diff whitespace checks pass.

Initial test run: two selectors mistakenly included decorative step numbers omitted from accessible names. Corrected the selectors to the spoken button names, retaining semantic queries; final suite passes. Visual review found a spacing rule applying to guided panels following hidden siblings; corrected the guided-mode spacing without changing read-all spacing. No axe rules were disabled.

## Screenshots

| View | Desktop 1440 | Mobile 390 |
| --- | --- | --- |
| Full page, default guided mode | [View](../previews/d2l-guided/full-1440.jpg) | [View](../previews/d2l-guided/full-390.jpg) |
| Requirements | [View](../previews/d2l-guided/step-1-1440.jpg) | [View](../previews/d2l-guided/step-1-390.jpg) |
| Selected file | [View](../previews/d2l-guided/step-2-1440.jpg) | [View](../previews/d2l-guided/step-2-390.jpg) |
| Submission record | [View](../previews/d2l-guided/step-3-1440.jpg) | [View](../previews/d2l-guided/step-3-390.jpg) |

[Small mobile 320](../previews/d2l-guided/full-320.jpg) · [Tablet 768](../previews/d2l-guided/full-768.jpg) · [Annotations](../previews/d2l-guided/annotations-1440.jpg).

## Unresolved review items

Manual VoiceOver/NVDA announcements, Safari/Firefox, physical-device interaction, native zoom and measured performance remain unverified. Emulated touch and automated axe checks are not substitutes for those checks or accessibility certification. Original prototype limitations, third-party image/icon rights, course/term and signed-out source sharing remain as recorded. The full-size link remains necessary for fine original screenshot text on small screens. No merge or deployment.
