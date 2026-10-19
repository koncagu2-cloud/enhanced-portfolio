# D2L Phase 1 — Storytelling and Evidence Clarity

Implemented 2026-10-19 on `feat/d2l-case-study`, draft PR #5. Only Phase 1 was authorized. No merge, deployment, Figma edits, homepage changes, or Community Spaces changes.

## Scope and files

- `src/content/projects/d2l.md`: opening, project type, shared contribution, Challenge, evaluation framing, and source references.
- `src/pages/work/d2l-redesign.astro`: metadata/status before the unchanged dual-desktop visuals; evidence-linked findings; compact priorities inside Challenge.
- `src/styles/d2l.css`: D2L-only placement, priority-list rules, and accessible source-link spacing.
- `docs/d2l/PHASE1.md`: this review record.
- `docs/previews/d2l/phase1/`: ten captures listed below.

Title, subtitle, six chapters, original artifacts, colors, navigation, theme behavior, detailed student/instructor galleries, and reflection are preserved. Phase 2–4 work is deferred. The existing detailed “Find Assignment” label is not corrected in this phase; it remains a Phase 2 presentation issue because that image depicts an assignment already open.

## Before / after copy

### Hero

**Before**

How might we make everyday academic tasks easier for students and instructors? Our team examined usability challenges in D2L, mapped key coursework workflows, and explored redesigned interfaces for submitting and managing assignments.

**After**

Students and instructors interact with the same coursework from different perspectives. Our team evaluated D2L’s assignment workflows and explored how clearer navigation, file-selection states, and grading structures could make those interactions easier to understand.

**Contribution before**

Evaluation, workflow mapping, interface exploration, and prototyping — shared team work.

**Contribution after**

Collaborative work across heuristic evaluation, workflow mapping, interface exploration, and prototyping — shared team work.

Project context now reads “Michigan State University · Academic UX/UI redesign proposal”. Metadata states the four-person roster and student-primary/instructor-supporting focus. It appears before the preserved hero images.

**Status before**

Project status. A collaborative university proposal, not an official D2L release. The work presents evaluator observations and prototype decisions; usability testing and measurable improvements are not established. Screen content is illustrative.

**Status after**

Project status. Academic proposal with high-fidelity student and instructor concepts; not implemented or launched, and not an official D2L release. The work presents evaluator observations; usability testing and measurable improvements are not established. Screen content is illustrative. Review only.

“Not implemented” follows the owner’s Phase 1 project-status instruction; it refers to the D2L concept, not the functioning portfolio website. No claim of completed usability validation is introduced.

### Challenge

Heading unchanged: “Coursework is a sequence, not a single screen.”

**Before**

Students need to find an assignment, understand its requirements, choose a file, and know whether it was submitted. Instructors need to organize those requirements, define grading criteria, and review work.
We focused the redesign on these connected tasks. The opportunity was to make context, available actions, and the next state easier to see as someone moved through coursework.

**After**

Our primary story follows student assignment discovery and submission. The task map moves from finding an assignment and reading its requirements to selecting a file, reviewing it, submitting, and checking the record. The interface concepts show several of these states; they do not form a fully connected prototype.
Instructor assignment creation and rubric structure support that journey. The instructor task map brings requirements, grading criteria, and assignment preparation together—the information students depend on when deciding what to submit.

### Heuristic findings

The three question headings are preserved. “Why it matters” is design reasoning, not a participant quote or tested result. Visible responses are artifact correspondences; no contemporaneous causal decision log was established.

#### Where am I in this course?

**Before**

The evaluation noted missing current-page cues and differences between course layouts.

Explore repeated navigation labels, a visible current section, and named assignment context.

**After**

The evaluator noted that the main navigation did not indicate the current page.

**Why it matters.** Without a persistent location cue, students must infer where they are before choosing the next action.

**Proposed response.** The assignment concept underlines Assignments and names the assignment above its requirements.

**Still unresolved.** This shows a location cue, not evidence that navigation or consistency across courses improved.

#### Which file will count?

**Before**

The notes raised uncertainty when another submission was added instead of clearly replacing the earlier file.

Make the chosen file visible before Submit, with a control to remove it.

**After**

The evaluator described adding another submission without clearly replacing the earlier file.

**Why it matters.** The intended final file can become ambiguous for both the student and the instructor.

**Proposed response.** The selected-file concept names the chosen PDF and offers removal before Submit.

**Still unresolved.** A partial response: replacing a file after submission remains unresolved. Confirmation and status also conflict in some states.

#### What belongs in this rubric cell?

**Before**

An evaluator described repeatedly checking which rubric cell should receive an entry.

Separate and label criteria, headers, and score, then provide a review state.

**After**

The evaluator described repeatedly checking which rubric cell should receive an entry.

**Why it matters.** Distinguishing criteria from scores matters when instructors prepare grading requirements.

**Proposed response.** The rubric-maker concept separates and labels Criteria, Criteria Headers, and Score.

**Still unresolved.** The structure is visible; easier or more accurate rubric authoring has not been demonstrated.

### Early design-decision summary

**Before:** No compact early summary. The detailed student interface sequence appeared in Chapter 5.

**After:** A definition list inside the existing Challenge chapter, not a new chapter or screenshot gallery.

- **Assignment context:** Bring the requirements into view before choosing a file.
- **File selection:** Show the chosen filename before submission.
- **Submission record:** Provide a place to inspect submitted work.

A keyboard-accessible link goes to the existing proposed student interface states. The source note identifies these as interface intentions, not validated improvements.

## Evidence traceability

| Revised claim / interpretation | Original source | Supporting artifact | Remaining limitation |
| --- | --- | --- | --- |
| Current location should remain visible | [Evaluation 16:2](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=16-2), including observation 16:5 and recommendation 17:6 | Assignment 554:1123: active Assignments underline and named heading | Not proof of navigation effectiveness or consistency across courses. Course-layout variation was removed from this specific finding to keep its source precise. |
| Review the intended file before submission | [Evaluation 18:2](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=18-2), observation 42:11 and recommendation 45:4 | Selected-file review 554:1377; student map 123:4 | Partial response: pre-submit removal does not solve replacement after submission. Confirmation 554:1452 retains contradictory Not Submitted status. |
| Separate rubric fields | [Evaluation 9:6](https://www.figma.com/design/piRHnDp4bwoVkKMo1mHSt7/Team--1?node-id=9-6), observation 8:2 and recommendation 8:3 | Rubric Maker 286:415 labels Criteria, Criteria Headers, Score | No demonstrated reduction in authoring difficulty or errors. |
| Student submission is primary; instructor setup supports it | Student flow 123:4 and instructor flow 123:3; owner-approved Phase 1 scope | Assignment 554:1123, file 554:1377, history 554:1169; instructor setup 274:414/274:488 and rubric 286:415 | Planned steps and selected screen states do not establish a complete connected prototype or functioning upload/publishing system. |
| Assignment context / selected file / submission record are visible priorities | Student flow 123:4 and selected original states | 554:1123 / 554:1377 / 554:1169 | Priorities describe intentions, not measured benefits. |
| Shared contribution and credits | Owner explicitly confirmed all four and shared work; provenance record d2l-team | Team task maps, evaluation, sketches and prototypes; unchanged credits | No individual leadership or sole authorship inferred. Course/term remain unconfirmed. |

Original evaluator metadata was reread from Figma for 16:2, 18:2 and 9:6 during this phase. No raw private responses were exported. The content/provenance tests verify all original local D2L and Community Spaces asset hashes.

## Intended recruiter benefit

The opening establishes project type, team, contribution, focus, and status before the large imagery. Challenge distinguishes the planned journey from demonstrated states. Three priorities offer a short route into the detailed student story. Each heuristic question now explains the observation, workflow implication, visible proposal, original source, and remaining limitation. These are intended reader benefits; no recruiter study or scan-time improvement was measured.

## Validation executed

| Command / check | Result |
| --- | --- |
| `pnpm run check` | Passed: 36 files; 0 errors, warnings, hints. |
| `pnpm run test:content` | Passed: 8/8, including original asset hashes. |
| `pnpm run build` | Passed: 4 static routes. Rerun after source-link spacing fix. |
| `pnpm run test` — initial run | 19 passed, 1 failed: axe found adjacent new Figma links had insufficient target size/spacing. |
| Source-link correction | Added D2L-scoped inline-block links with vertical padding; no test rules disabled. |
| `pnpm run test` — final run | Passed: all 20 Chromium tests. |
| Additional read-only browser review | Passed at 320, 390, 768, 1440: no overflow, metadata precedes visuals, six chapter links, valid fragment targets, priority jump works by keyboard with visible focus. |
| Community Spaces comparison | Before/after HTML identical; full-page PNGs byte-identical at 1440 and 390. |
| Homepage comparison | Before/after HTML identical. |
| `git diff --check` | Passed. |

The existing browser suite exercises image loading, native proportions and alt text; local routes and artifact links; keyboard traversal and chapter anchors; light/dark themes; axe WCAG A/AA checks; no-JavaScript navigation; reduced motion; and noindex/nofollow. D2L axe runs at all four requested widths in both themes. Automated results are not WCAG certification or evidence that the source prototype is usable.

Updated captures were visually inspected at desktop and mobile. Original desktop UI detail remains small on mobile; existing full-size links and surrounding text remain important. No source images were cropped, recolored or redrawn.

Pending: screen-reader testing, Safari/Firefox and physical-device review, signed-out Figma/resource access, course/term confirmation, and third-party rights clearance before a separately authorized launch. These are not blockers to this review-only Phase 1 delivery. No owner clarification is required to complete Phase 1.

## Review screenshots

| Capture | Desktop 1440px | Mobile 390px |
| --- | --- | --- |
| Opening / hero | [View](../previews/d2l/phase1/hero-1440.jpg) | [View](../previews/d2l/phase1/hero-390.jpg) |
| Challenge | [View](../previews/d2l/phase1/challenge-1440.jpg) | [View](../previews/d2l/phase1/challenge-390.jpg) |
| Heuristic findings | [View](../previews/d2l/phase1/findings-1440.jpg) | [View](../previews/d2l/phase1/findings-390.jpg) |
| Early priorities | [View](../previews/d2l/phase1/priorities-1440.jpg) | [View](../previews/d2l/phase1/priorities-390.jpg) |
| Full page | [View](../previews/d2l/phase1/full-1440.jpg) | [View](../previews/d2l/phase1/full-390.jpg) |

Full-page and component captures at 320px are also delivered locally for review; the source does not include unrelated capture replacements.

## Next approval boundary

Stop after Phase 1. Further student-journey presentation, caption/artifact inspection, Community Spaces, and homepage changes require separate approval. Keep PR #5 draft. Nothing is merged or deployed.
