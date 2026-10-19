# Approved resume content

Owner approved the exact homepage/About/resume wording in conversation on 2026-10-19. `content.json` is the editable resume source. `scripts/build-resume.py` renders it to `public/resume/suleyman-koncagul-resume.pdf` using Python `reportlab` and checks it with `pypdf`. These are authoring dependencies only; the Astro site does not require Python.

Run from the repository root:

```sh
python3 scripts/build-resume.py
```

The generated document is one page with selectable text and active email/portfolio/LinkedIn links. Review its rendered appearance after changes. Rendering does not certify PDF accessibility; semantic tagging and assistive-technology reading remain unverified.

## Accuracy boundaries

- Expected Graduation: December 2026; one credit remains. Do not imply an awarded degree.
- Getir duties are owner-confirmed, including fulfillment, inventory, staff task assignment, owner-absence responsibility, closing, and cash reconciliation. The title is descriptive rather than verified official employment wording. Dates June 2023-August 2024 remain provisional at the owner's request. The employer is described as a family-owned Getir storehouse, not direct corporate Getir employment or UX work.
- D2L and Community Spaces are collaborative four-person academic projects. Complete credits remain in their case studies; no lead role is inferred.
- Community interview participation is owner-confirmed and response/theming boards were supplied as screenshots. Forty total/ten each remains unreconciled with five visible participant groups in individual screenshots and the existing twelve-participant findings summary. No numerical interview claim is included.
- MSU Arts and Pure Michigan are deferred, omitted from the resume and selected work. Pure Michigan's existing draft source record remains preserved.
- Frontend/tool/language entries are approved owner-reported skills, not independently certified proficiency or sole authorship of agent-assisted code.
- Project dates and implementation-ready handoff claims are omitted. No launched product, measured improvement, or completed usability testing is claimed.
- Gmail and LinkedIn are owner-approved. The portfolio URL remains the existing live domain until a separate launch decision.

The original supplied PDF at `/Users/suleymankoncagul/Documents/resume pddf 58.pdf` is untouched. The newly generated served PDF supersedes it for this review draft; it is no longer expected to match the supplied file's hash.
