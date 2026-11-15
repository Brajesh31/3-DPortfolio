# 🤝 Contributing to 3-D Portfolio

Thank you for taking the time to contribute. This guide explains how to propose changes, prepare a local environment, validate work, and submit a pull request that maintainers can review efficiently.

## 📚 Table of Contents

- [🎯 Contribution Philosophy](#-contribution-philosophy)
- [🧭 Ways to Contribute](#-ways-to-contribute)
- [🛠️ Development Environment](#️-development-environment)
- [🌿 Branching and Commit Practices](#-branching-and-commit-practices)
- [🧪 Validation Expectations](#-validation-expectations)
- [🎨 UI, 3D, and Accessibility Considerations](#-ui-3d-and-accessibility-considerations)
- [🔐 Security and Privacy](#-security-and-privacy)
- [📦 Pull Request Process](#-pull-request-process)
- [✅ Review Checklist](#-review-checklist)
- [❓ Questions](#-questions)

## 🎯 Contribution Philosophy

The goal is to improve the portfolio without making it harder to maintain. A good contribution solves a clear problem, respects the existing architecture, and explains why the change is useful. Large rewrites, broad formatting changes, or new dependencies without a concrete benefit increase review cost and should be discussed before implementation.

Contributions should preserve the application's intended user experience. A visually impressive change that breaks keyboard navigation, adds excessive rendering cost, or makes mobile use unreliable is not a complete improvement.

## 🧭 Ways to Contribute

Contributions may include:

| Area | Examples | Useful evidence |
|---|---|---|
| 🐛 Bug fixes | Broken navigation, visual regressions, runtime errors | Reproduction steps and before/after result |
| ✨ Enhancements | Better project presentation, improved interaction | User problem and expected behaviour |
| 📚 Documentation | Setup, architecture, deployment, clarification | Corrected instructions or references |
| ♿ Accessibility | Keyboard support, labels, focus, contrast | Browser and assistive technology details |
| ⚡ Performance | Reduced 3D load, optimized assets, fewer unnecessary effects | Measurements and device details |
| 🧪 Quality | Test strategy, reproducible checks | Commands and outcomes |
| 🔐 Security | Safer configuration and dependency hygiene | Private report for vulnerabilities |

Do not open an issue that exposes private credentials, personal contact details, or a security exploit. Use the private security process described in [SECURITY.md](SECURITY.md).

## 🛠️ Development Environment

### Prerequisites

- Node.js 18 or newer.
- npm.
- Git.
- A modern browser.
- WebGL support for the full 3D experience.

### Clone and install

```bash
git clone https://github.com/Brajesh31/3-DPortfolio.git
cd 3-DPortfolio
npm ci
```

### Start the local server

```bash
npm run dev
```

Use the URL printed by Vite. Do not assume the server always chooses the same port if the default is occupied.

### Build locally

```bash
npm run build
```

The production bundle is generated in `dist/`. The contents are generated artifacts and should not be edited manually or included in a normal source contribution.

## 🌿 Branching and Commit Practices

Create a short, descriptive branch from the current default branch:

```bash
git checkout main
git pull origin main
git checkout -b docs/improve-deployment-guide
```

Suggested branch prefixes:

- `fix/` for a specific defect.
- `feat/` for a user-facing enhancement.
- `docs/` for documentation-only work.
- `test/` for test additions or corrections.
- `chore/` for maintenance.

Use commit messages that describe the effect of the commit. Examples:

```text
docs: clarify local development setup
fix: handle missing project preview image
feat: improve project navigation feedback
```

Do not claim that a change is a fix if it has not been reproduced and verified.

## 🧪 Validation Expectations

Run the checks relevant to the files changed. For all frontend changes, a production build is the minimum baseline:

```bash
npm ci
npm run build
```

Also test the affected user journey manually. For routing changes, test direct route entry and browser refresh. For animation changes, check the transition in a real browser. For 3D changes, test WebGL-capable hardware and consider a lower-powered device.

The repository currently does not define a dedicated unit-test or E2E script in `package.json`. Do not invent a test command or report automated coverage that does not exist.

## 🎨 UI, 3D, and Accessibility Considerations

### Visual changes
- Include screenshots or a short recording for meaningful UI changes.
- Check desktop, tablet, and mobile layouts.
- Confirm that text remains readable over imagery and 3D scenes.
- Avoid introducing layout shifts or blocking overlays.

### 3D and animation changes
- Consider scene load time, geometry complexity, texture size, and GPU cost.
- Avoid making essential text or navigation dependent on the 3D canvas.
- Check behaviour when WebGL is unavailable.
- Consider reduced-motion preferences and avoid unnecessary continuous animation.

### Accessibility changes
- Use semantic controls and meaningful accessible names.
- Preserve visible keyboard focus.
- Label all form fields.
- Ensure dynamic success and error messages can be perceived by assistive technology.
- Do not use colour alone to communicate state.

Use [ACCESSIBILITY.md](ACCESSIBILITY.md) as the review baseline.

## 🔐 Security and Privacy

Never commit:
- EmailJS account secrets or private tokens.
- FTP usernames or passwords.
- Personal contact messages or exported form submissions.
- Local environment files containing secrets.
- Private credentials in screenshots or logs.

Anything bundled into browser code is public. Values prefixed with `VITE_` are not suitable for secrets. If a credential is exposed, remove it from active use and rotate it. Deleting it from a later commit does not invalidate an exposed credential.

For vulnerabilities, follow the private reporting instructions in [SECURITY.md](SECURITY.md).

## 📦 Pull Request Process

1. **Discuss** substantial changes before doing extensive work.
2. **Scope** the branch to one issue or coherent improvement.
3. **Implement** the smallest maintainable change that addresses the problem.
4. **Validate** the build and affected flows.
5. **Document** new setup, configuration, or behavioural details.
6. **Submit** a pull request using the repository template.
7. **Respond** to review feedback with focused commits and explanations.

A useful pull request description includes the context, implementation choice, alternatives considered, test results, screenshots where relevant, accessibility impact, and any migration or deployment notes.

## ✅ Review Checklist

Before requesting review:

- [ ] The change solves the stated problem.
- [ ] The diff contains no unrelated formatting or generated files.
- [ ] The production build was run when applicable.
- [ ] Affected flows were tested in a browser.
- [ ] Desktop and mobile layouts were considered.
- [ ] Keyboard and accessibility impact was reviewed.
- [ ] No credentials or personal data were committed.
- [ ] Documentation was updated where needed.
- [ ] Breaking changes and limitations are disclosed.

## ❓ Questions

For general usage questions, use an issue or discussion where appropriate. For conduct concerns or security issues, follow their separate private reporting guidance. Be specific and include only the information needed to understand the question.

Thank you for helping keep this project useful, readable, and maintainable.
