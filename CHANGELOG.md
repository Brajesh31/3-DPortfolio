# 📜 Changelog

This changelog records meaningful changes to the 3-D Portfolio project. It is intended to help visitors and maintainers understand what has changed, why it changed, and whether a change affects setup, behaviour, security, or deployment.

The changelog is maintained manually. It should describe verified changes, not future intentions or work that exists only in an issue or an unmerged proposal.

## 📚 Table of Contents

- [Purpose](#-purpose)
- [Change Categories](#-change-categories)
- [Versioning Approach](#-versioning-approach)
- [Unreleased](#-unreleased)
- [How to Write an Entry](#-how-to-write-an-entry)
- [Release Preparation Checklist](#-release-preparation-checklist)
- [Maintainer Notes](#-maintainer-notes)

## 🧭 Purpose

A useful changelog answers:
- What changed?
- Who or what is affected?
- Is there a setup, configuration, or migration action?
- Was the change a bug fix, enhancement, security correction, or documentation update?
- Where can a reader find the technical details?

Do not copy every commit message into this file. Group related changes and explain their user or maintainer impact.

## 🏷️ Change Categories

| Category | Use it for |
|---|---|
| Added | New user-visible functionality, tooling, or documentation |
| Changed | A modification to existing behaviour or workflow |
| Fixed | A verified correction to a defect |
| Security | Security hardening, vulnerability remediation, or dependency security changes |
| Deprecated | Functionality that remains available but is planned for removal |
| Removed | Functionality, files, or configuration removed from the project |
| Performance | Measured improvements to loading or runtime performance |
| Maintenance | Internal changes that materially affect development or operations |

Use categories consistently. Do not label a proposed improvement as a fix before the change is implemented and verified.

## 🔖 Versioning Approach

The repository does not currently document a formal release cadence or a complete semantic-versioning policy. Do not invent release versions or dates.

When a release process is adopted, document:
- The version format.
- What constitutes a breaking change.
- How release tags are created.
- Whether release notes are generated automatically.
- How deployment and rollback are handled.

Until then, maintain an `Unreleased` section and add dated release headings only when a real release is prepared.

## 🚧 Unreleased

### Added
- Expanded the root README into a detailed project guide with setup, technology stack, application areas, architecture summary, configuration, testing, deployment, security, privacy, and documentation navigation.
- Expanded the project documentation index and the technical guides for setup, architecture, configuration, deployment, testing, accessibility, troubleshooting, and roadmap planning.
- Added repository guidance for contributions, security reporting, community conduct, support, and privacy review.
- Added issue, pull request, discussion, and reusable documentation templates.

### Changed
- Documentation now distinguishes the existing FTP deployment workflow from the separate GitHub Pages npm script.
- Documentation clarifies that browser-delivered Vite configuration is public and that private credentials must remain outside the client bundle.
- Documentation describes the current frontend architecture without claiming the existence of a first-party backend, database, or automated test suite.

### Fixed
- No application source-code defect is claimed as fixed by this documentation work.

### Security
- Added clearer guidance for private vulnerability reporting, GitHub Actions secrets, EmailJS configuration, and credential rotation.

## ✍️ How to Write an Entry

When a meaningful change is completed:

1. Add the entry under the correct category in `Unreleased`.
2. Explain the effect rather than listing only the changed file.
3. Mention a migration or configuration step if one is required.
4. Reference an issue or pull request when one exists.
5. Keep wording factual and concise.
6. Do not expose secrets or private data.
7. Do not claim tests passed unless they were run.
8. Do not add an entry for an unmerged proposal as though it were released.

Example:

```markdown
### Fixed
- Corrected direct navigation to the project details route on the production host.

### Changed
- Updated the contact form instructions to match the active provider template.
```

## 📦 Release Preparation Checklist

- [ ] Confirm the intended changes are present on the release branch.
- [ ] Review the complete commit range.
- [ ] Run the production build.
- [ ] Run relevant manual smoke tests.
- [ ] Confirm dependency and security changes.
- [ ] Update documentation and configuration instructions.
- [ ] Add verified changelog entries.
- [ ] Confirm deployment destination and required secrets.
- [ ] Prepare release notes without unsupported claims.
- [ ] Verify the deployed result after publishing.

## 🛠️ Maintainer Notes

The changelog complements commit history, issues, pull requests, and release notes. It should not replace them.

When an entry becomes part of a dated release, move it from `Unreleased` into the appropriate release section. Preserve the meaning of the original entry and include migration notes where necessary.
