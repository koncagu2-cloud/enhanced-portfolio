# D2L Redesign — original-source analysis

Reviewed 2026-10-16. **Original discovery record. Subsequent owner approval and complete four-person roster confirmation authorize the separate implementation described in IMPLEMENTATION.md.** This document analyzes the supplied class-project file, not the current production D2L product. All claims below concern the team's recorded observations or proposal. Nothing establishes an official release, measured improvement, or business outcome.

## Reading guide and attribution

- **Observed:** content, interface states, dimensions, or prototype connections inspected in the original Figma file.
- **Owner-confirmed:** MSU collaborative university redesign; everyone worked together throughout. Suleyman confirmed Gabe Bustillo and Benji Fajardo as collaborators.
- **Interpretation:** a defensible relationship between artifacts, without a contemporaneous decision log proving causation.
- **Recommendation:** a proposed portfolio treatment or future evaluation, awaiting approval.
- **Unverified:** course/term, complete final credits, research methodology/consent, completed evaluation, and outcomes. Alana Alexander is named on heuristic/sketch material; confirm her project credit rather than omit or automatically add her to the owner-confirmed roster.

Prototype course labels/dates are sample content, not sufficient proof of the actual course or project term. Interview-note frames exist, but do not infer a participant count, completed protocol, representative findings, publication consent, or verified quotes from their presence. No participant names, raw responses, or grading-screen identities are reproduced in these documents.

## Source inventory and inspection coverage

All eight supplied page nodes resolved in file `piRHnDp4bwoVkKMo1mHSt7`. Metadata was read for all eight; selected original screen/sketch/flow renders and node properties/reactions were inspected read-only. This is a targeted artifact analysis, not exhaustive testing of every duplicate/component or a live prototype walkthrough.

| Page | Material observed | Portfolio disposition |
| --- | --- | --- |
| [0:1 — Heuristic Analysis + Questions](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=0-1) | Named evaluator notes, Nielsen workbook references, student/instructor question lists, interview-note frames | Use public-safe summaries with source IDs; do not reproduce the entire research board |
| [123:2 — User Task Flow](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=123-2) | Student submission/quiz and instructor creation/grading diagrams | Show submission as main thread; instructor flow as supporting counterpart |
| [160:2 — Sketches + MoodBoard](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=160-2) | Original sketch images, shared/individual reference boards, three-issue summary, style guide | Sketches demonstrate evolution; moodboards are inspiration, not original interface deliverables |
| [243:386 — Icons](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=243-386) | Categorized icon resources and instances | Supporting material; do not present the library as team-authored |
| [251:114 — Hi-fi Student](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=251-114) | Grayscale studies and green high-fidelity variants, home/course/assignment/upload/confirmation screens, style guide | Select comparable states, not every duplicate. Page name alone is not a reliable fidelity label for each frame |
| [554:550 — Final Student Hi-fi Prototype](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=554-550) | 15 top-level frames, detailed assignment view, file-selection states, removal, confirmation, submission history | Recommended primary student source, subject to owner approval of the named final version |
| [408:935 — Hi-fi Student prototype](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=408-935) | Earlier-labeled student variants and prototype reactions | Use only where a visible/state/connection comparison is meaningful |
| [241:193 — Hi-FI Professor](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=241-193) | Course/assignment management, two-stage assignment maker, rubric editing/review, grading, components | Use assignment maker and rubric as concise second-user-group evidence; verify names/content before publishing grading screens |

One `get_screenshot` request for `554:1493` returned HTTP 503. The same node was subsequently rendered through read-only `use_figma` successfully. No supplied page remained inaccessible. No source designs were edited. The node `235:241` was queried for a render, but did not produce a distinct visible image in the returned batch; it is not used as evidence below.

## Project summary

The team explored an alternative D2L learning-management experience for students and instructors. Its artifacts connect evaluation of an existing interface, task mapping, sketches, visual exploration, and desktop prototypes. The strongest student sequence is locating an assignment, reviewing its requirements, selecting a file, submitting, and checking status. Instructor artifacts connect assignment setup, grading rules, rubric creation, publication, and feedback.

**Recommended story:** make academic work easier to locate, prepare, and verify. Lead with student submission and use the instructor creation/rubric sequence to show that both sides of coursework were considered. Do not frame it as an official D2L engagement, a shipped redesign, or proven simplification.

## Three strongest documented findings

These are selected for specific source support and visible design responses, not ranked severity. The team's own summary, [163:12](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=163-12), names ambiguity in grading/assignment making, file-upload issues, and information hierarchy. The following selection develops those themes.

### F1 — Navigation and hierarchy made context harder to read

**Observed in evaluation:** [16:2](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=16-2) records main navigation that did not persistently indicate the current page. [19:10](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=19-10) connects missing page headings/current-page cues to recall. [18:2](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=18-2) records inconsistent instructor-customized course structures. [9:6](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=9-6) criticizes low-priority help content above the calendar and uneven column use.

**Heuristics considered:** Visibility of system status; Recognition rather than recall; Consistency and standards; Aesthetic and minimalist design. **Proposed response:** current-page emphasis, explicit headings, more consistent course structure, clearer content priorities. Relevant to students navigating multiple courses and instructors managing course content. These are evaluator observations of the class project's baseline, not a measured frequency or a current-product audit.

### F2 — Submission control needed a clearer account of the chosen file

**Observed in evaluation:** [18:2](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=18-2), text `42:11`, describes confusion when another file is submitted rather than clearly replacing the earlier one. Recommendation `45:4` calls for replacing a submission so the final file is clear. The three-issue summary also identifies file-upload issues.

**Heuristic:** User control and freedom. **Proposed response:** make the selected file and completion state explicit, with control to reconsider it. Most directly relevant to students, with downstream implications for instructors locating the intended file. The narrower control shown in final frames is removal **before** submission; post-submit replacement is not established. Do not describe the recommendation as fully solved.

### F3 — Assignment and rubric setup needed clearer structure

**Observed in evaluation:** [9:6](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=9-6), text `8:2`, reports difficulty differentiating rubric cells and repeatedly checking where entries belonged. Recommendation `8:3` proposes separating rows and sections. This is reinforced at theme level by the team's grading/assignment-making summary `163:12`.

**Heuristic:** Aesthetic and minimalist design. **Proposed response:** explicit labels, separated sections, clearer criteria/score structure. Directly relevant to instructors creating assignments/rubrics; student benefit through clearer coursework is a hypothesis, not an observed outcome.

### Other recorded heuristics and limits

The notes cover all ten Nielsen categories: the four in F1 plus Match between system and real world (`16:2`, icon consistency); User control and freedom (`18:2`); Error prevention (`19:10`); Flexibility and efficiency (`9:6`, `67:6`); Help users recognize/diagnose/recover from errors (`61:2`); and Help/documentation (`24:2`). The workbook references are at `2:2`, not original team methodology.

The help critique proposes contextual guidance instead of an external generic destination. Student customization/pinning is proposed in `9:6`; unused navigation is noted in `67:6`. No corresponding implemented help or personalization capability was established in inspected designs. The final student course view also contains a New Announcement control (`554:1529`); whether that action belongs in a student role needs clarification, rather than assuming role permissions were resolved. Some evaluator comments are mixed: `19:10` praises portions of hierarchy/error prevention while `9:6` criticizes particular layouts. `61:2` says no errors were noticed; this does not establish absence of errors or tested recovery. Do not turn tentative notes into unanimous findings, severity scores, or usability-test results.

## Three evidence-to-design chains

| Chain | Original issue and recommendation | Flow/sketch connection | Visible design response | Strength and unresolved limits |
| --- | --- | --- | --- | --- |
| D1 — Keep coursework context visible | F1: current-page cue/headings and consistent course organization (`16:2`, `19:10`, `18:2`) | Student flow `123:4` passes from course to Assignments to a named assignment; sketch `160:4` lays out the same navigation/work areas | Final assignment `554:1123` visibly underlines Assignments and names the assignment in its heading; summary groups due date, points, submission type, and status. Course page `554:1493` groups Announcements and Upcoming/Recent Content | Direct artifact correspondence. The claim that evaluation **caused** each choice is an interpretation unless team rationale is confirmed. No reduced search time, validated comprehension, universal course consistency, or evidence of the proposed calendar priority |
| D2 — Review a file before committing | F2: replacement/final-file ambiguity (`18:2`, `45:4`) | `123:4` includes View Chosen Files → Confirm or Back → Submit → confirmation; sketch `160:4` includes upload, finder, selected-file and final states | Final `554:1323` shows file information; `554:1377` names the file and offers Submit/Cancel/Add File; remove component `554:1410` navigates to empty state `554:1415`; confirmation `554:1452`, history `554:1169` | **Partial response**: selection/removal/feedback correspond to the workflow. No demonstrated replacement after submission. Empty-state Submit still navigates to confirmation; no file validation or real upload established. Do not state that the original replacement problem was resolved |
| D3 — Separate setup, criteria, and review | F3: rubric-cell ambiguity; recommendation to separate rows/sections (`9:6`, `8:3`), team theme `163:12` | Instructor flow `123:3` explicitly creates details/requirements, criteria, supplements, then publishes; sketch `161:2` joins assignment creation and rubric review to submissions | `274:414` organizes assignment overview; `274:488` separates grading/submission settings; `286:415` labels Criteria, Criteria Headers, Score, and templates/draft actions; `286:573` previews criteria/score bands; `462:804` reviews assignment settings before Publish | Strong visible organizational response, not proof of easier rubric authoring or grading reliability. Some table text remains dense/small. No evaluation, scoring validation, or actual publishing integration established |

No direct decision log was located linking every evaluation note to a chosen frame. These chains are source-backed correspondences and proposed case-study interpretations, not manufactured causal research narratives.

## Workflows and portfolio selection

### Student

Original diagram [123:4](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=123-4): Open D2L → select course → Assignments → assignment → Add File → choose/drag file → view chosen file → confirm/back → Submit → confirmation. It also branches to a quiz task. The diagram uses sequential nodes rather than formal decision diamonds; do not invent a validated decision model or baseline time/step count.

The inspected final design connects Home `554:1219` to course `554:1493`; Assignments on that course page goes to `554:970`. A separate assignments variant, `554:916`, links Project 4 to `554:1123`. **The reached variant `554:970` has no inspected non-hover connection to the assignment**, so the end-to-end route is not fully connected in the inspected graph.

From assignment `554:1123`, Add File opens overlay `554:1487`; its Add File leads to finder `554:1539`, then a file entry state `554:1268`, selected details `554:1323`, selected-file review `554:1377`, and confirmation `554:1452`. Confirmation Done leads to status-list variant `554:1021`. Submission history `554:1169` is reachable from another list variant `554:1072`, not established from the Done destination. Frame links demonstrate prototype wiring, not operating file-system/email behavior.

**Worth showing:** original `123:4` plus a plain-language transcript; final assignment → selected-file review → history. The quiz branch can remain in the original diagram with a caption that the story focuses on submission. If later cropped, label the export as a crop and retain an original reference. Do not redraw it as an original artifact.

**Proposed evaluation questions:** Can students distinguish Add/Open/Submit? Can they recover from a wrong file, interpret status, find history, and understand retry/replacement? Where should empty/invalid files, network failures, or late submissions lead? These were not tested in this analysis.

### Instructor

Original [123:3](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=123-3): Open D2L → course → assignment creation → details/requirements → rubric/criteria → supplements → publish → grade → feedback. It shows a linear sequence, not all optional/recovery branches.

Observed prototype links: New Assignment from `270:212` opens `274:414`; the grading/submission stage `274:488` links to rubric maker `286:415` and assignment review `462:804`. Rubric review `286:573` Finish returns to stage two; assignment review Publish leads to list `393:585`. The sketch `161:2` visibly connects course content, assignment/rubric creation, and submission review. Grading `465:518` juxtaposes a submission list, file, feedback, grade and rubric access; identities/content require publication clearance.

**Worth showing:** original instructor flow in a secondary, full-width figure and the overview/rubric pair. Avoid repeating every step as screenshots. Questions for proposed evaluation include date-field distinctions, optional rubric choice, save-versus-publish, and feedback visibility; no reduction in instructor effort or grading errors is established.

## Early-to-final comparison

Chronology is inferred from page/frame labels and supplied context, not a verified revision timeline. Compare authentic project iterations, not original production D2L versus a redesign unless a matching original screenshot is cleared.

| Comparable artifacts | Observed difference or continuity | Safe interpretation |
| --- | --- | --- |
| Grayscale course `251:152` → final course `554:1493` | Placeholder regions and neutral navigation give way to named course, grouped announcements/recent content, green/white palette, and populated controls | Structural exploration → resolved visual concept; no effectiveness claim |
| Grayscale upload `251:353` → green upload `282:163` → final selected-file state `554:1377` | Initial generic add/cancel panel; later branded drop-area; final named-file review with Submit and removal control. These are **different states**, so label the state changes rather than call them a like-for-like before/after | Show the journey gaining detail, not proof of fewer steps |
| Prior assignment `481:1306` → final `554:1123` | Both 1440×1435 and same core hierarchy. Final populates Overview and adds comment-editor controls/placeholder; earlier renders blank directions/comments boxes | Better-described content/controls in the artifact; no claim of new layout or researched demand for formatting |
| Prior course `481:1907` → final `554:1493` | Visually near-identical. Prior Assignments instance goes on press to intermediate course variant `481:1953`; final goes on click to list `554:970` | Specific prototype-link change, not a proven reduction in task steps; final onward list link remains unresolved |
| Prior finder `481:1593` → final `554:1268` | Same two-pane folder/file-information pattern and 1440×1068 dimensions | Retained concept, not a material redesign. Final selected state `554:1323` fills in metadata |
| Prior selected-file `481:1749` → final `554:1377` | Filename, removal X, Add File/Cancel/Submit retained; final backdrop includes populated directions; visible spacing differs | Refinement of an existing interaction concept, not a new capability |
| Prior confirmation `481:1867` → final `554:1452` | Same confirmation message and Done action; final backdrop adds directions. Both retain underlying Not Submitted text | Preserve the original screen and acknowledge inconsistent status; no automatic-email capability proved |

## Visual exploration and icon assessment

Original student sketch sheet `160:4` contains home, course, assignment, upload/finder, selected-file and final-state layouts. Original instructor sketch photo `161:2` connects course, assignment/rubric and submission review. Their correspondence to later screens is visible; precise chronology, authorship of each individual drawing, and rejected alternatives remain unconfirmed. Use collective attribution in the narrative.

Shared moodboard `163:9` mixes palette/type references, institutional imagery and third-party interface examples. It is inspiration material. Style guide `167:25` records #18453B, #0B9A6D, #008934, #000000, #2CC295 and #18C258, plus Metropolis Bold/Medium/Regular; later `282:765` specifies Semi Bold for secondary headings/buttons and Medium for tertiary headings. Final text nodes include multiple Metropolis weights and some Inter; a toolbar label saying “Lato” is interface content, not proof of the outer UI font. Do not enforce the prototype fonts/colors on the portfolio's existing design system.

The designs visibly repeat home, notification, help, settings, file, upload and removal symbols. Main navigation uses text labels and the active Assignments underline; these communicate more explicitly than an isolated icon grid. Mixed filled/outlined icons and unlabeled X/home actions warrant future recognition/accessibility evaluation. No comprehension or assistive-technology results were found. `243:386` is a resource collection, not a demonstrated original icon family. The style guide explicitly references Iconscout; the exact provenance/license of every final icon is unresolved. Keep the library supporting, with concise attribution after rights review.

## Open evidence and approval items

1. Confirm complete team credit, including whether Alana Alexander should be listed. Do not infer sole authorship from per-artifact labels; shared collaboration is owner-confirmed.
2. Confirm actual course/term and dates. GD468/FS25 appears inside sample screens, not an approved project metadata record.
3. Confirm which student version to feature and whether the incomplete prototype links are intentional/known. Preserve original screens; do not silently repair Figma in this phase.
4. Confirm which interviews were actually conducted, recruitment/method, usable anonymized synthesis, and public quote/image consent. Do not publish raw board captures.
5. Confirm whether usability/accessibility evaluation happened and provide records before claiming findings or improvement. Do not infer testing from a prototype or task flow.
6. Verify illustrative identities/file names in instructor grading screens, photos, icon licenses, university/logo usage, and Nielsen workbook/reference rights before public exports.
7. Resolve prototype limits in future evaluation: empty Submit, wrong-file recovery, post-submit replacement, contradictory status, date/point inconsistencies, unconnected routes, student/instructor action boundaries (including New Announcement on a student course frame), persistent history, and error states. Do not edit the source designs merely to improve the portfolio story.
8. Approve the proposed student-first/instructor-supporting narrative and hero before any implementation.

## Repository and verification boundary

Work is documentation-only on `docs/d2l-discovery`, based on the current Community Spaces branch to inspect existing components. No application source, assets, tests, configuration, Community Spaces document/content, or old portfolio was changed. No Figma design was changed. No new website build or accessibility test is claimed; those checks would not validate this analysis. Source references and documentation-only diff are checked separately. No merge/deploy is authorized. See [PROPOSAL.md](PROPOSAL.md) for the presentation and copy proposal.

### Documentation validation

All 63 distinct node references in this analysis and all 24 in the proposal were matched to inspected source metadata or read-only node results. All 36 Figma links use the supplied file and known node IDs. Relative documentation links resolve. The committed diff is limited to these two planning documents; application source, assets, tests and review configuration are byte-for-byte unchanged from the base. `git diff --check` passed. Build/browser/accessibility suites were not rerun for this documentation-only phase. Prototype reactions were inspected as source data; no real upload, email, publication, user evaluation or accessibility capability was tested.

### Attribution update — 2026-10-16

The owner subsequently confirmed Alana Alexander alongside Suleyman Koncagul, Gabe Bustillo, and Benji Fajardo. Complete shared team attribution is resolved; the uncertainty in the original analysis above is historical. Course/term and completed evaluation remain unconfirmed. Original observations and prototype limitations remain unchanged.
