# Enhanced Portfolio

A hiring-focused Experience Architecture and UX portfolio by Suleyman Koncagul.

## Mission

Show how research, information architecture, accessible interaction design, and frontend implementation come together to solve real problems. Every major claim should be supported by project evidence.

## Principles

- **Evidence before decoration:** Show research, decisions, iterations, and outcomes rather than relying on visual polish alone.
- **Clarity before cleverness:** Help recruiters understand the work quickly and explore it deeply.
- **Accessibility by design:** Treat semantics, keyboard access, contrast, and reduced motion as foundational requirements.
- **Honest storytelling:** Never invent research, results, or project responsibilities.
- **Maintainable engineering:** Use clear component boundaries, structured content, and appropriate automated checks without unnecessary complexity.

## Development approach

1. Audit existing work and gather evidence.
2. Define the hiring journey and information architecture.
3. Design the content model and technical architecture.
4. Build and test a low-fidelity experience.
5. Develop flagship case studies.
6. Apply the visual system and purposeful interactions.
7. Validate accessibility, usability, performance, and content accuracy.

The previous portfolio remains available as a reference while this version is developed.

## Grayscale homepage study (M1)

This branch adds a provisional Astro + TypeScript homepage for review. Project narratives, artifacts, resume facts, and final contact details remain under review. There is no deployment configuration or change to the existing live site.

Use Node 24.19.0 (see `.node-version`) and pnpm 11.25.0:

```sh
pnpm install --frozen-lockfile
pnpm run dev
```

Validation and production preview:

```sh
pnpm run check
pnpm run test:content
pnpm run build
pnpm exec playwright install chromium
pnpm run test
pnpm run preview
```

Browser tests run against the built output and start/stop their own preview server on port 4322. Rebuild after changing source. The test suite covers keyboard interaction, responsive overflow, theme persistence/storage failures, no-JavaScript use, and automated accessibility checks; it is not a full accessibility certification.

See [M1 implementation notes](docs/IMPLEMENTATION_M1.md) for components, layout/theme rules, unresolved decisions, and validation results. Evidence provenance lives with the Markdown project records; the schema cannot replace source verification or permission review. `noindex` is an indexing hint, not access control. This repository and everything committed to it are public.

## Community Spaces review case study

This feature adds `/work/community-spaces/` and an authentic-artifact homepage feature, still noindex and review-only. See [source/implementation notes](docs/COMMUNITY_SPACES.md) for team attribution, source hashes, screenshots, validation, and unresolved issues. No launch or demonstrated usability improvements are claimed.
