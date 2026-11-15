# 🗺️ Maintenance Roadmap and Quality Priorities

This roadmap records candidate areas for future maintenance and improvement of 3-D Portfolio. It is a planning document, not a delivery commitment, release schedule, or claim that the listed work is already implemented.

Priorities should be discussed through GitHub issues or discussions where enabled. A roadmap item should become active work only when its scope, expected outcome, and validation approach are understood.

## 📚 Table of Contents

- [Purpose and Planning Principles](#-purpose-and-planning-principles)
- [How to Read This Roadmap](#-how-to-read-this-roadmap)
- [Accessibility and Inclusive Use](#-accessibility-and-inclusive-use)
- [3D Experience and Performance](#-3d-experience-and-performance)
- [Frontend Reliability and Testing](#-frontend-reliability-and-testing)
- [Security and Privacy](#-security-and-privacy)
- [Developer Experience](#-developer-experience)
- [Documentation and Project Governance](#-documentation-and-project-governance)
- [Candidate Work Breakdown](#-candidate-work-breakdown)
- [Prioritization Framework](#-prioritization-framework)
- [How to Propose a Roadmap Item](#-how-to-propose-a-roadmap-item)
- [Definition of Done](#-definition-of-done)

## 🎯 Purpose and Planning Principles

The roadmap exists to make maintenance priorities visible and encourage deliberate improvements.

Planning principles:
1. Improve a real visitor or maintainer problem.
2. Prefer measurable outcomes over cosmetic complexity.
3. Keep accessibility, performance, and security in scope from the beginning.
4. Avoid adding dependencies without a clear benefit.
5. Preserve the reliability of existing routes and core portfolio content.
6. Keep proposed work small enough to review and validate.
7. Update documentation when actual behaviour changes.

## 🧭 How to Read This Roadmap

The sections below contain candidate areas, not committed delivery dates. An item may be completed, deferred, replaced, or rejected after investigation.

Do not represent a candidate item as a shipped feature. Track implementation status in the relevant issue or pull request and update this document when priorities materially change.

## ♿ Accessibility and Inclusive Use

Potential improvements:

- Review keyboard navigation across every route.
- Verify focus order and focus visibility with fixed navigation and overlays.
- Review accessible names for icon-only controls.
- Improve form labels, instructions, validation, and status announcements.
- Check heading structure and landmarks.
- Test colour contrast in all important states.
- Validate reduced-motion behaviour for animation-heavy sections.
- Test zoom and mobile reflow.
- Ensure essential portfolio information remains available without WebGL.
- Perform a screen reader review of navigation, projects, and contact flows.

Success should be demonstrated through repeatable manual checks and recorded issues, not by simply adding an accessibility badge.

## ⚡ 3D Experience and Performance

Potential improvements:

- Measure initial JavaScript and asset transfer sizes.
- Profile scene initialization and frame rate on representative devices.
- Review geometry complexity, materials, texture dimensions, and model compression.
- Avoid loading nonessential 3D resources before they are needed.
- Review animation loops, observers, and event listener cleanup.
- Improve the fallback experience when WebGL is unavailable.
- Avoid letting a decorative scene block access to important content.
- Measure layout shifts and long tasks during initial rendering.
- Compare before-and-after results for performance changes.

Performance work should record the device, browser, test conditions, and measurement method. A single desktop result is not enough to claim broad improvement.

## 🧪 Frontend Reliability and Testing

Potential improvements:

- Define a test framework appropriate for the current React application.
- Add focused unit tests for isolated logic and reusable components.
- Add browser-based tests for critical navigation and contact flows.
- Introduce documentation link validation.
- Add accessibility checks to the quality workflow.
- Document browser support expectations.
- Add deployment smoke-test instructions.
- Consider visual regression testing for high-impact page layouts.

Do not claim that tests exist or run until their dependencies, scripts, and workflows are actually configured. Keep the first test suite focused on critical user journeys rather than attempting broad coverage immediately.

## 🔐 Security and Privacy

Potential improvements:

- Review EmailJS origin restrictions and abuse controls.
- Confirm the contact form sends only necessary fields.
- Review retention and access settings in the provider account.
- Confirm FTP credentials are scoped and rotated appropriately.
- Evaluate encrypted deployment transport supported by the hosting provider.
- Review third-party GitHub Actions and workflow permissions.
- Monitor npm dependency advisories.
- Ensure public privacy information reflects the real production environment.
- Review external scripts, embeds, and resource origins when they are introduced.

Do not move secrets into Vite client variables. A browser bundle is public by design.

## 🧰 Developer Experience

Potential improvements:

- Keep installation instructions aligned with the npm lockfile.
- Document the supported Node.js baseline based on the actual toolchain.
- Make build errors easier to diagnose.
- Keep component and asset organization understandable.
- Reduce duplicate animation responsibilities where practical.
- Document the difference between FTP and GitHub Pages publishing.
- Add scripts only when they solve a recurring developer problem.
- Keep issue and pull request templates concise enough to be completed.

A developer-experience improvement should reduce confusion or maintenance effort without adding unnecessary process.

## 📚 Documentation and Project Governance

Potential improvements:

- Review README accuracy whenever application routes or scripts change.
- Keep architecture diagrams and descriptions aligned with source.
- Update configuration documentation when integrations change.
- Record meaningful user-facing changes in the changelog.
- Keep security reporting instructions reachable.
- Review community and contribution policies periodically.
- Remove obsolete instructions instead of leaving conflicting guidance.
- Ensure links between root documents and `docs/` remain valid.

Documentation quality is measured by whether a reader can complete a task correctly, not by page length alone.

## 🧩 Candidate Work Breakdown

| Workstream | Candidate task | Evidence of completion |
|---|---|---|
| Accessibility | Keyboard audit | Recorded results for core routes |
| Accessibility | Contact form review | Labels, errors, and status feedback tested |
| 3D | Mobile performance profiling | Device-specific baseline and comparison |
| 3D | WebGL fallback review | Core content remains accessible |
| Reliability | Unit test foundation | Test command and passing test output |
| Reliability | Critical route tests | Repeatable navigation checks |
| Security | Workflow permission review | Documented least-privilege assessment |
| Privacy | Provider data-flow review | Verified live provider and retention details |
| Developer experience | Setup guide verification | Clean install and build from fresh checkout |
| Documentation | Link and navigation review | Valid internal links and current instructions |

## 📊 Prioritization Framework

A practical prioritization model considers:

- **Impact:** How many visitors or maintainers are affected?
- **Severity:** Does the issue block a core task or create security risk?
- **Evidence:** Can the problem be reproduced or measured?
- **Effort:** Is the change proportionate to its benefit?
- **Risk:** Could the change break routing, 3D rendering, contact delivery, or deployment?
- **Dependencies:** Does another task need to happen first?

Security vulnerabilities and blockers to core site functionality should generally receive higher priority than low-impact visual polish. Performance work should be based on measurement rather than assumptions.

## 📝 How to Propose a Roadmap Item

Open an issue with:

1. A concise problem statement.
2. Who is affected and how.
3. Current behaviour and expected outcome.
4. Proposed solution or alternatives.
5. Acceptance criteria.
6. Potential risks and dependencies.
7. A validation plan.
8. Screenshots or measurements where relevant.

For broad architectural proposals, use a discussion first where that feature is enabled. Do not begin a large rewrite without explaining why incremental changes are insufficient.

## ✅ Definition of Done

A roadmap item should not be marked complete until:

- [ ] The agreed scope is implemented.
- [ ] The change is reviewed against existing architecture.
- [ ] Relevant build and validation steps have been run.
- [ ] Affected user journeys have been tested.
- [ ] Accessibility and responsive impact have been considered.
- [ ] Security and privacy implications have been reviewed.
- [ ] Documentation is updated.
- [ ] Known limitations are recorded.
- [ ] The result is present on the intended branch.

The roadmap should evolve with the real project. Remove stale items, add evidence-backed priorities, and avoid turning a list of possibilities into an unrealistic promise.
