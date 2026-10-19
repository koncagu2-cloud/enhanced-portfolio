# Portfolio audit refinements — 2026-10-19

## Latest resume replacement — 2026-10-19

The owner supplied and requested `resume pddf 58.pdf`, superseding the earlier resume described below. The current served PDF is an exact, unmodified copy of this new one-page document, SHA-256 `0c65f84fa1312dd6232a62944cef4b927eb4155252cf574cdd1b0e9de37f18f0`. It already contains the owner-supplied LinkedIn URL and MSU email. The website continues to use the owner-approved Gmail address as its primary contact. No dates, research counts or employment claims from the new resume were automatically copied into the case studies; those remain governed by their existing evidence.

Replacement verification: production build passed; both targeted homepage/contact and served-resume browser checks passed (2/2). The PDF returns HTTP 200/application-pdf, and its bytes match the owner-supplied file. The full 23-test refinement run documented below predates this PDF-only replacement.

The earlier collaborative-bullet edit remains a historical record of the superseded PDF, not an edit to this new document. The original new PDF and all page source/styles are unchanged.

## Approval and boundary

The owner approved implementation of the independent portfolio audit recommendations. This branch is `feat/portfolio-review-refinements`, based on PR #5 commit `33bd1ad112b12cbe87bab81f689d24a913cb6c92`. A separate draft PR keeps the original D2L implementation review isolated. No merge, deployment, live-site edit, Figma change or indexing-policy change is authorized.

## Changes and intended reader benefit

- **Homepage:** specific UX/Product positioning and Experience Architecture background replace portfolio-building copy. D2L now leads with authentic selected-file/history visuals; Community Spaces retains a substantial three-screen feature. Pure Michigan remains in source as draft, omitted from selected work until supporting evidence exists. Expected benefit: a clearer professional identity and two inspectable project choices, not a measured recruiter result.
- **About/implementation:** replace the future-tense biography placeholder with owner-supplied background and shared collaboration. A native disclosure describes this site's actual Astro/TypeScript/semantic HTML/provenance checks without implying sole authorship, React implementation, validated project outcomes, or AI product experience.
- **Contact:** replace the unreliable old-site `/contact` dependency with an owner-approved Gmail mailto action and LinkedIn profile. MSU email was also offered; Gmail is the primary website choice. No message was sent and email delivery was not tested.
- **Resume:** link the owner-selected one-page PDF locally. The owner expressly authorized replacing “Led an end-to-end LMS redesign” with collaborative wording. The resulting bullet reads: “Collaborated on an LMS redesign: mapped student journeys and explored navigation for assignments, deadlines, and course content.” Its outdated LinkedIn annotation is corrected to the owner-supplied profile. Other visible text is unchanged; the source file on the Desktop is unchanged. The PDF retains its existing fonts, page layout and structural tag tree; this is not a PDF accessibility certification. Website Gmail is primary while the selected document retains its MSU email.
- **D2L:** compact top team/focus metadata while retaining every teammate in Credits. Add one authentic selected-file example in the existing Challenge chapter; keep the six chapters and original dual-desktop hero. Rename the first detailed state “Review Assignment Requirements”; explain confirmation/history separation and link its authentic source. Reduce the iteration pair's width, without cropping or discarding the originals. File replacement after submission, contradictory status and incomplete prototype connections remain unresolved.
- **Community Spaces:** emphasize the documented date-specific event need; retain ≈9/12 music/concert interest as context limited to the class sample. Align Final Concept copy with Event Details → Reservation → Confirmation. Explain the proposed discover → review → register → attend relationship in the existing physical/digital section; attendance is an intended service step, not an observed result. Mobile hero now presents Discover before Explore/Join; desktop composition is retained. Final concept figures use the whole section width.
- **Shared access:** descriptive full-size artifact links, earlier tablet stacking, wrapping navigation, flexible headings/content and capped small-screen gutters support enlarged text. Hover feedback no longer changes CTA layout height. Original raster screens are not edited, inverted or re-encoded.

## Evidence and accuracy

| Change | Original source / basis | Remaining boundary |
| --- | --- | --- |
| D2L early file example | Original selected-file review 554:1377, source evaluation 18:2, task map 123:4 | Removal is before Submit; not proof of post-submit replacement or improved usability. |
| D2L assignment label | Original assignment requirements 554:1123 | Already-open assignment, not a discovery screen. |
| D2L confirmation link | Original 554:1452; retained technical findings in d2l/ANALYSIS.md | Contradictory Not Submitted label and incomplete paths remain. |
| Instructor supporting story | Original rubric 286:415 and task map 123:3 | No expanded or invented instructor validation. |
| Community dates / event information | Original user-needs file STtzkQ9AyK3krzZihxnXxt, node 0:1; class presentation p4 | Need statement/concept rationale, not representative population research. |
| Community music finding | Class presentation p3 | ≈9/12 in the reported project sample; no invented concert feature. |
| Community final figures | Original 214:167, 214:89, 214:4 | Proposed details/reservation/confirmation, not a launched service. |
| Community intended visit | User needs 0:1 and original task flow | HTML sequence is explanatory; no completed attendance is claimed. |
| Shared credits | Existing owner-confirmed complete rosters | No individual leadership inferred. |
| Resume / contact | Owner selected the PDF, approved collaborative revision and supplied email/LinkedIn | Other resume claims are owner-provided, not independently validated by project-source checks. |

## Executed validation

- `pnpm run check`: passed, 38 Astro files, 0 errors/warnings/hints.
- `pnpm run test:content`: all 8 passed, including original 9 Community and 11 D2L asset hashes.
- `pnpm run build`: passed, 4 static routes. The resume is a local public PDF, not a new HTML route.
- `pnpm run test`: final 23/23 Chromium tests passed. Existing expectations were updated for the approved project order, accurate labels, revised status wording, mobile order, early example image count, direct contact and real resume response.
- Three focused regressions cover enlarged text/navigation; early evidence, accurate states and descriptive links; and hover feedback without a height change.
- Additional fresh browser review: three pages × six widths × light/dark = 36 states, no detected axe A/AA violations, no default-size overflow, no console/page errors. Widths: 320, 390, 768, 1024, 1440, 1920.
- 200% root-text checks pass at 320/390/768 for all three pages. The six-width review also captures 390px at enlarged text, with no document or main-content overflow. This is not native browser zoom or WCAG certification.
- Images loaded; local routes/fragments and full-size assets resolved. Mailto/LinkedIn hrefs match the owner’s input. No email, form or external message was sent.
- Keyboard skip/focus/navigation, chapter anchors, saved theme/storage failures, no-JavaScript use, reduced motion and noindex/nofollow remain covered.
- Resume: single-page render visually inspected; text comparison verified only the approved bullet changed, and its LinkedIn annotation was checked. Structural tags retained; original file hash unchanged. HTTP 200/application-pdf and PDF header verified by the browser suite.
- `git diff --check`: passed after removing an extra trailing blank line.

### Corrections encountered during verification

The first source check rejected a YAML paragraph containing an unquoted colon; changed it to a dash. An accidentally started test run against the previous build was interrupted and is not counted as validation. A later test found an exact-copy capitalization mismatch; changed the assertion to case-insensitive without weakening its status check. The new enlarged-text regression exposed additional narrow-layout overflow; corrected wrapping, minimum grid widths and gutters. Final 23-test run and completed browser matrix pass; no accessibility rules were disabled.

### Measured presentation differences

At 390px the early selected-file example starts around y=3,272; at 1440px around y=2,234. These are layout positions, not recruiter timing. The full D2L page is slightly longer because it now includes the early example and more readable stacked artifacts; no blanket claim of reduced page length is made. The purpose is earlier access to a concrete decision.

Community final concept figures are approximately 289px wide at 1024px versus 175px previously; at 1440px they render at 393px versus about 249px. At 768px they are approximately 348px and wrap into additional rows. Original images/proportions remain intact.

## Screenshots

| Page | Full desktop 1440 | Full mobile 390 |
| --- | --- | --- |
| Homepage | [View](previews/refinements/home-1440.jpg) | [View](previews/refinements/home-390.jpg) |
| D2L | [View](previews/refinements/d2l-1440.jpg) | [View](previews/refinements/d2l-390.jpg) |
| Community Spaces | [View](previews/refinements/community-1440.jpg) | [View](previews/refinements/community-390.jpg) |

[Contact](previews/refinements/home-contact-1440.jpg), [D2L findings](previews/refinements/d2l-evaluation-1440.jpg), [Community final concept](previews/refinements/community-concept-1440.jpg), [200% text mobile](previews/refinements/home-390-text200.jpg), [raw browser results](previews/refinements/browser-results.json).

Additional 320/768/1024/1920 opening and dark-mode captures are delivered locally. Source image hashes remain unchanged; the Community page intentionally changes within the owner-approved portfolio-wide audit refinement scope, rather than claiming pixel identity to the earlier version.

## Unresolved and separate approval gates

- Manual screen-reader/assistive-technology review, native 200%/400% browser zoom, Safari/Firefox and physical devices have not been tested. Only Chromium is installed here.
- No Lighthouse/Core Web Vitals, network-throttled performance or real recruiter study is claimed.
- Fine detail in full desktop originals may still require the full-size links on mobile. No lightbox, animation library or speculative image optimization was added.
- Signed-out Figma access and third-party asset rights require review before launch. Noindex is an indexing hint, not access control.
- Final visual approval, any remaining resume fact corrections, upstream stacked PR review and explicit launch/hosting/domain decisions remain with the owner. This pass does not substantiate the supplied resume’s employment/research claims independently.
- No merge, public deployment, original portfolio modification or live-domain change occurred.
