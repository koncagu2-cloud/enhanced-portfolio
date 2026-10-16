# Portfolio V2 — Shared Project Brief for Codex and ChatGPT

Status: Planning / discovery. Last updated: 2026-10-16.
Owner: Suleyman Koncagul. Repository: koncagu2-cloud/enhanced-portfolio.
Reference only: koncagu2-cloud/portfolio (do not modify the old portfolio).

## The goal

Build a credible, accessible, polished, maintainable portfolio that makes it easy for UX / Experience Architecture / product design hiring teams to assess Suleyman's ability to investigate a problem, structure information, design interactions, implement accessible interfaces, and evaluate decisions. The goal is interview conversion through evidence, not visual spectacle.

Positioning **draft**, subject to verification against actual work:
> I turn ambiguity into understandable, accessible digital experiences — from research and information architecture through interaction and implementation.

Audience: UX/UI, UX research, product design, and AI-adjacent UX recruiters/hiring managers. Do not imply AI product experience without supporting work.

## What recruiters should learn

- In 30 seconds: who Suleyman is, what role he wants, strongest relevant work, and where to click next.
- In 2 minutes: 2–3 projects with clear ownership, actual artifacts, decisions, and relevant capabilities; easy resume/contact.
- In 10 minutes: a flagship case study with the real problem, constraints, methods, findings, design decisions, implementation, outcomes/limitations, and reflection.

## Proposed information architecture

Home | Work | About | Resume | Contact.
Case studies nested under Work.
Home: clear positioning → selected project evidence → relevant capabilities → concise personal context → contact.
Work: real project visuals and concise summaries, not decorative placeholders.
Case studies: Context → Problem → Role/constraints → Evidence → Findings → Decisions → IA/flows → Interaction → Implementation → Validation/outcomes → Reflection. Include only sections with genuine evidence.
About: credible, concise narrative. Resume: accurate and current. Contact: simple and frictionless.

## Project candidates — not yet confirmed

1. D2L redesign — candidate flagship showing IA, user tasks, interaction, prototype. Audit existing evidence and differentiate actual research from proposed research.
2. Accessibility / real-world systems project — candidate supporting or flagship based on artifacts.
3. AI × UX project — potential *new* project around transparency, trust, error recovery, and accessibility; must be researched and actually built, not presented as existing work.

Other existing work may include Pure Michigan information architecture and MSU accessibility projects. Inventory first; classify flagship / supporting / rebuild / archive. Do not force a fixed number of projects.

## Known issues to investigate in existing portfolio

Existing repo reportedly uses React, Vite, React Router, Tailwind, and motion. Verify versions rather than copying dependencies blindly.
- Homepage currently emphasizes philosophy before concrete work.
- Some project cards use generic gradient visuals rather than real artifacts.
- Some case study templates contain visible placeholders; a generic outcome component may include D2L-specific text on unrelated projects.
- About text is long relative to project evidence.
- Resume may have stale graduation dates and overstate Getir responsibilities. Verify with Suleyman before changing claims.
- LinkedIn link and content completeness need verification.
- Existing D2L SVG artifacts may be available under public/case-studies/d2l/. Inspect the files rather than assuming what they prove.

## Non-negotiable content rules

No fabricated interviews, test results, metrics, impact, job responsibilities, client relationships, or AI experience. Distinguish completed work from concepts, hypotheses, proposed tests, and future improvements. Prefer precise explanations of why a decision was made and what evidence supports it. Ask the owner when evidence is ambiguous.

## Experience and engineering standards

Semantic HTML; robust keyboard navigation and visible focus; accessible labels and contrast; reduced-motion support; responsive design; performant images; SEO metadata; understandable content hierarchy; clear component boundaries; content separated from presentation; consistent tokens; appropriate linting, formatting, and tests. Animations must improve comprehension. Avoid dependencies or abstractions without a real use case.

## Sequence of work

Phase 0 — Audit actual source projects, screenshots, documents, and claims.
Phase 1 — Confirm positioning, hiring journeys, information architecture, and content priorities.
Phase 2 — Define content schema, technical architecture, and quality gates.
Phase 3 — Implement a low-fidelity grayscale shell and navigation; test structure.
Phase 4 — Build evidence-backed flagship case studies.
Phase 5 — Develop visual language and purposeful interaction.
Phase 6 — Audit accessibility, content accuracy, responsive behavior, performance, and SEO.
Phase 7 — Deploy only after review.

## Collaboration workflow

- GitHub is the shared source of truth; Codex and ChatGPT do not automatically see each other's chat histories.
- Codex works on the cloned local repository; ChatGPT can review pushed GitHub files and commits.
- Before starting work, Codex should pull the latest changes. Use a feature branch for implementation work and submit reviewable commits/PRs where practical.
- Document important decisions in docs/DECISIONS.md and open questions in docs/OPEN_QUESTIONS.md (create when useful).
- Never rewrite or delete the old portfolio. Avoid destructive Git operations. Never commit secrets.
- Don't start a large frontend implementation until the audit and IA are approved by Suleyman.

## First assignment for Codex

1. Read this document and README.md.
2. Inspect the repository and report its actual current state.
3. Inspect the old portfolio as a reference **if locally available**; otherwise request access or ask for source/artifacts. Do not assume it exists on disk.
4. Produce a concise evidence inventory and prioritized questions for Suleyman, distinguishing confirmed facts from assumptions.
5. Propose a technical architecture and first small, testable milestone. **Do not implement the full website yet.**
6. Record any substantive discoveries in versioned docs and share a concise status update.
