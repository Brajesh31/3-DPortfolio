# 🤝 Contributing to 3-D Portfolio

Thank you for considering a contribution to 3-D Portfolio. This guide explains how to understand the project, prepare a local development environment, propose a change, implement it safely, validate the result, and submit work for review.

Contributions are most useful when they solve a real problem and leave the repository easier to understand and maintain. A large diff is not automatically a better contribution. Focus, evidence, and reliable validation matter more than the number of files changed.

## 📚 Table of Contents

- [Project Contribution Principles](#-project-contribution-principles)
- [Ways to Contribute](#-ways-to-contribute)
- [Before Starting Work](#-before-starting-work)
- [Development Environment](#-development-environment)
- [Understanding the Codebase](#-understanding-the-codebase)
- [Issue and Proposal Guidelines](#-issue-and-proposal-guidelines)
- [Branching Strategy](#-branching-strategy)
- [Implementation Guidelines](#-implementation-guidelines)
- [React and Component Practices](#-react-and-component-practices)
- [3D and Animation Practices](#-3d-and-animation-practices)
- [Styling and Responsive Design](#-styling-and-responsive-design)
- [Accessibility Expectations](#-accessibility-expectations)
- [Security and Privacy](#-security-and-privacy)
- [Testing and Validation](#-testing-and-validation)
- [Commit Message Guidelines](#-commit-message-guidelines)
- [Pull Request Preparation](#-pull-request-preparation)
- [Review Process](#-review-process)
- [Documentation Requirements](#-documentation-requirements)
- [Contributor Checklist](#-contributor-checklist)
- [What Not to Submit](#-what-not-to-submit)
- [Getting Help](#-getting-help)

## 🎯 Project Contribution Principles

A contribution should improve at least one meaningful aspect of the project without introducing disproportionate complexity.

The project values:

1. **Correctness:** Changes should solve the stated problem and avoid regressions.
2. **Clarity:** Code and documentation should be understandable to another developer.
3. **Consistency:** Follow the existing architecture and patterns unless there is a reason to improve them.
4. **Usability:** The portfolio should remain easy to navigate and understand.
5. **Accessibility:** Interactive content should remain usable with different input methods and assistive technologies.
6. **Performance:** 3D rendering, animation, and media should be introduced with their runtime cost in mind.
7. **Security:** Private credentials and visitor information must be protected.
8. **Evidence:** Claims about tests, performance, and compatibility should be supported by checks that were actually performed.

A visually impressive change that breaks keyboard navigation, increases load time without benefit, or makes mobile use unreliable is not a complete improvement.

## 🧭 Ways to Contribute

| Contribution area | Examples | Useful evidence |
|---|---|---|
| Bug fixes | Broken route, incorrect layout, runtime exception | Reproduction steps and observed result |
| Features | Improved project showcase, useful interaction | User problem and acceptance criteria |
| UI and UX | Better hierarchy, navigation, responsive layout | Screenshots at relevant viewports |
| 3D experience | Model loading, scene behaviour, fallback | Browser, device, and rendering evidence |
| Performance | Smaller assets, less unnecessary work | Before-and-after measurements |
| Accessibility | Keyboard support, labels, focus, contrast | Manual test steps and assistive technology |
| Documentation | Setup, architecture, configuration, troubleshooting | Corrected instructions |
| Maintenance | Dependency or workflow improvements | Compatibility and build evidence |
| Security | Safer configuration and dependency hygiene | Private report for vulnerabilities |

You do not need to contribute code. Reproducing an issue, improving documentation, reporting an accessibility barrier, or suggesting a focused enhancement can be valuable.

## 🔎 Before Starting Work

Before changing files:

1. Read the root [README](README.md).
2. Review the relevant guide in [docs/](docs/README.md).
3. Search existing issues and discussions for the same problem.
4. Inspect the affected source files and nearby components.
5. Check whether the proposed behaviour already exists.
6. Identify whether the change affects routes, 3D rendering, contact delivery, or deployment.
7. For broad or breaking changes, discuss the approach before implementation.

Do not start a large rewrite based only on an assumption about how the application works. Inspect the current implementation first.

## 🛠️ Development Environment

### Prerequisites

- Node.js 18 or newer, subject to dependency requirements.
- npm.
- Git.
- A modern browser.
- WebGL support for the full 3D experience.
- Internet access for dependency installation.

Check versions:

```bash
node --version
npm --version
git --version
```

### Clone the repository

```bash
git clone https://github.com/Brajesh31/3-DPortfolio.git
cd 3-DPortfolio
```

### Install dependencies

```bash
npm ci
```

Use the lockfile-based installation to reduce differences between developer machines and CI. Do not switch package managers or regenerate the lockfile without a clear reason.

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite. The default port may be unavailable, so use the actual address shown in the terminal.

### Build the application

```bash
npm run build
```

The generated production bundle is written to `dist/`. Do not edit generated files directly.

### Preview the production bundle

```bash
npm run preview
```

Previewing the build is useful because development-server behaviour can differ from production output.

## 🗂️ Understanding the Codebase

The repository is a React/Vite frontend with route-level pages, shared components, 3D scene components, assets, and build/deployment configuration.

| Area | Responsibility |
|---|---|
| `src/App.jsx` | Application composition and route definitions |
| `src/Components/` | Shared UI and scene-related components |
| `src/pages/` | Page-level views |
| `src/utils/` | Supporting utilities and hooks |
| `src/assets/` | Imported assets |
| `public/` | Static public assets |
| `docs/` | Technical and maintainer documentation |
| `.github/workflows/` | GitHub Actions workflows |
| `package.json` | Scripts and direct dependencies |
| `package-lock.json` | Resolved npm dependency tree |

This is a navigation guide, not a guarantee that every future component will remain in the same directory. Inspect the current tree and imports before editing.

## 💡 Issue and Proposal Guidelines

### Bug reports

A useful bug report includes:
- A short, specific title.
- The affected route or component.
- The environment and browser.
- Exact steps to reproduce.
- Expected behaviour.
- Actual behaviour.
- Sanitized logs or screenshots.
- Whether the issue is consistent or intermittent.

### Feature proposals

A useful proposal explains:
- The user problem.
- Why the current behaviour is insufficient.
- The expected outcome.
- A proposed approach, if known.
- Alternatives considered.
- Potential impact on accessibility, performance, and maintenance.
- How the result could be validated.

For substantial changes, wait for discussion before investing in a large implementation. This reduces the risk of building a feature that does not fit the project's needs.

## 🌿 Branching Strategy

Create a focused branch from the current default branch:

```bash
git checkout main
git pull origin main
git checkout -b docs/improve-setup-guide
```

Suggested prefixes:

| Prefix | Use |
|---|---|
| `fix/` | Bug fix |
| `feat/` | User-facing feature |
| `docs/` | Documentation |
| `test/` | Test changes |
| `chore/` | Maintenance |
| `perf/` | Performance improvement |
| `a11y/` | Accessibility improvement |

Keep a branch focused on one coherent change. Avoid combining unrelated features, broad formatting changes, dependency upgrades, and documentation rewrites into a single review.

## 🧩 Implementation Guidelines

Before implementation:
- Understand the existing component and its dependencies.
- Confirm the intended behaviour.
- Consider how the change affects other routes.
- Check whether a dependency already provides the required capability.
- Avoid adding packages for trivial functionality.
- Plan how the change will be tested.

During implementation:
- Prefer readable, maintainable code.
- Keep components focused on clear responsibilities.
- Avoid unnecessary global state.
- Clean up event listeners, observers, and animation timelines.
- Handle loading and error states where relevant.
- Avoid hard-coded assumptions that break at different viewport sizes.
- Keep user-facing text clear and meaningful.
- Do not silently change unrelated behaviour.

After implementation:
- Review the complete diff.
- Remove debug statements and temporary files.
- Confirm no generated output or secrets were added.
- Run relevant validation.
- Update documentation.

## ⚛️ React and Component Practices

The application uses React 18. When modifying components:

- Follow the patterns already used in the affected part of the application.
- Keep props and component responsibilities understandable.
- Avoid unnecessary re-renders and expensive calculations during rendering.
- Use effects only for synchronization with external systems.
- Provide appropriate cleanup for subscriptions, observers, and listeners.
- Avoid using array indices as stable keys when list items can change order.
- Keep interactive elements semantic.
- Handle missing or delayed data gracefully.
- Do not introduce a new state-management library without a clear need.

Do not perform a broad refactor just to apply a personal coding preference. Explain the maintainability or correctness benefit.

## 🧊 3D and Animation Practices

The project uses Three.js through React Three Fiber and Drei, with animation and scrolling libraries.

When changing 3D or animation code:
- Inspect the existing scene lifecycle.
- Keep expensive model and texture resources under control.
- Consider geometry complexity and material count.
- Avoid unnecessary continuous rendering or state updates.
- Clean up timelines and event listeners.
- Consider mobile GPU limitations.
- Test scene loading and failure states.
- Keep essential content outside the 3D canvas.
- Consider reduced-motion preferences.
- Avoid competing animation systems for the same element.

A desktop-only test is not enough to claim broad device compatibility. Include the device and browser used for any performance claim.

## 🎨 Styling and Responsive Design

For visual changes:
- Follow the existing styling conventions in the affected component.
- Check desktop, tablet, and mobile layouts.
- Avoid horizontal overflow.
- Ensure text remains readable over imagery and 3D scenes.
- Check fixed navigation and overlays.
- Avoid layout shifts caused by late-loading media.
- Preserve visible focus states.
- Use consistent spacing and typography.
- Do not introduce global styles that unexpectedly affect unrelated pages.

Screenshots are strongly encouraged for meaningful visual changes. Include the viewport dimensions when comparing before and after.

## ♿ Accessibility Expectations

Accessibility is part of implementation quality.

Review:
- Keyboard navigation.
- Focus visibility and logical order.
- Semantic buttons and links.
- Accessible names for icon-only controls.
- Form labels and validation feedback.
- Heading hierarchy.
- Alternative text for informative images.
- Colour contrast.
- Reduced-motion behaviour.
- Zoom and narrow viewport reflow.
- Usability without WebGL.

Use [ACCESSIBILITY.md](ACCESSIBILITY.md) and [docs/accessibility.md](docs/accessibility.md) as review references. They are guidance and do not imply that the application has been formally certified.

## 🔐 Security and Privacy

Never commit:
- FTP usernames or passwords.
- Private EmailJS account credentials.
- Private API keys or access tokens.
- Local environment files containing secrets.
- Real contact form submissions.
- Personal messages or private visitor information.
- Credentials embedded in screenshots or logs.

Vite variables prefixed with `VITE_` are exposed to browser code. They must not contain private credentials.

If a credential is exposed:
1. Revoke or rotate it at the provider.
2. Review where it was exposed.
3. Remove it from active source files.
4. Review relevant logs and access.
5. Do not assume deleting it from a later commit makes it safe.

Report vulnerabilities privately using [SECURITY.md](SECURITY.md). Do not publish exploit details in an issue or pull request.

## 🧪 Testing and Validation

The inspected package scripts provide installation, development, build, preview, and deployment commands. A dedicated unit-test or end-to-end-test script is not currently documented in the package manifest.

Minimum frontend validation:

```bash
npm ci
npm run build
```

Where relevant, also run:

```bash
npm run preview
```

Manual checks should match the change:

| Change type | Validation |
|---|---|
| Routing | In-app navigation, direct URL, refresh, back/forward |
| UI | Desktop, tablet, mobile, keyboard focus |
| 3D scene | Model loading, WebGL, mobile performance |
| Animation | Timing, cleanup, reduced motion |
| Contact form | Synthetic submission, validation, success/error state |
| Assets | Network requests, path case, production output |
| Configuration | Clean install and production build |
| Documentation | Links, commands, spelling, accuracy |
| Deployment | Workflow result and live-site smoke test |

Do not report automated tests, coverage, or performance improvements that were not actually measured.

## 📝 Commit Message Guidelines

Use clear messages that describe the change.

Examples:

```text
docs: expand deployment troubleshooting guide
fix: correct project navigation on mobile
feat: improve project showcase filtering
perf: reduce oversized project preview assets
a11y: improve contact form field labels
chore: update compatible frontend dependencies
```

A commit message should not claim that a defect is fixed if the change has not been validated.

## 📦 Pull Request Preparation

A pull request should:
- Have a clear title.
- Explain the problem and the proposed solution.
- Reference the related issue where applicable.
- Describe important implementation decisions.
- List commands and checks that were actually run.
- Include screenshots for significant visual changes.
- Mention accessibility and responsive impact.
- Explain any configuration or deployment changes.
- Identify known limitations and follow-up work.

Keep the pull request focused. A reviewer should be able to understand the purpose without reconstructing the entire development history.

## 🔍 Review Process

Reviewers may evaluate:
- Correctness and reproducibility.
- Fit with existing architecture.
- Readability and maintainability.
- Performance implications.
- Accessibility and responsive behaviour.
- Security and privacy.
- Test evidence.
- Documentation completeness.
- Scope and unnecessary changes.

A request for changes is part of normal engineering review. Respond to the technical concern with evidence or a reasoned alternative. Do not treat review feedback as a personal attack.

## 📚 Documentation Requirements

Update documentation when a contribution changes:
- Installation or runtime requirements.
- Available scripts.
- Application routes or major architecture.
- Environment variables or provider configuration.
- Contact form behaviour.
- Deployment process.
- Testing approach.
- Security or privacy expectations.
- User-visible features.

If an instruction becomes obsolete, remove or replace it. Do not leave contradictory documentation in multiple files.

## ✅ Contributor Checklist

Before requesting review:

- [ ] I understand the problem being solved.
- [ ] I checked existing issues and relevant source files.
- [ ] My changes are focused and scoped.
- [ ] I followed the existing architecture where appropriate.
- [ ] I did not add unnecessary dependencies.
- [ ] I considered responsive behaviour.
- [ ] I considered keyboard and accessibility impact.
- [ ] I considered 3D and animation performance where relevant.
- [ ] I did not include credentials or private data.
- [ ] I did not commit generated build output.
- [ ] I ran the production build when applicable.
- [ ] I tested the affected user journey.
- [ ] I updated relevant documentation.
- [ ] I accurately described what was and was not tested.

## 🚫 What Not to Submit

Do not submit:
- Unrelated formatting changes that obscure the real diff.
- Generated `dist/` output unless explicitly required by the repository's deployment process.
- `node_modules/` or local caches.
- Private credentials or personal information.
- Large media files without a clear need and optimization review.
- Unverified claims about performance or test coverage.
- A broad rewrite without an agreed problem statement.
- A dependency upgrade mixed into an unrelated feature without justification.

## ❓ Getting Help

For general questions, use GitHub Discussions where enabled or follow [SUPPORT.md](SUPPORT.md). For security issues, use the private reporting process in [SECURITY.md](SECURITY.md). For conduct concerns, follow [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

Thank you for contributing thoughtfully. The goal is not simply to add more code, but to make the portfolio more reliable, accessible, useful, and maintainable.
