# 🧭 Support and Getting Help

This document explains how to get help with the 3-D Portfolio repository, how to choose the right reporting channel, and what information makes a request useful. It is intended for visitors, developers, contributors, and maintainers working with the project.

Support is provided on a best-effort basis. The repository does not promise a guaranteed response time, uptime commitment, or service-level agreement.

## 📚 Table of Contents

- [Start Here](#-start-here)
- [Before Asking for Help](#-before-asking-for-help)
- [Choose the Correct Channel](#-choose-the-correct-channel)
- [Installation and Development Support](#-installation-and-development-support)
- [Build and Tooling Support](#-build-and-tooling-support)
- [3D and WebGL Support](#-3d-and-webgl-support)
- [Routing and Deployment Support](#-routing-and-deployment-support)
- [Contact Form Support](#-contact-form-support)
- [Documentation and Contribution Support](#-documentation-and-contribution-support)
- [Information to Include](#-information-to-include)
- [How to Write a Useful Support Request](#-how-to-write-a-useful-support-request)
- [Security and Privacy](#-security-and-privacy)
- [Support Boundaries](#-support-boundaries)
- [Maintainer Triage Checklist](#-maintainer-triage-checklist)

## 🚦 Start Here

If you are new to the repository, start with:

1. [README.md](README.md) for the project overview and quick setup.
2. [docs/README.md](docs/README.md) for the complete documentation index.
3. [docs/getting-started.md](docs/getting-started.md) for installation and local development.
4. [docs/troubleshooting.md](docs/troubleshooting.md) for common problems.
5. [CONTRIBUTING.md](CONTRIBUTING.md) if you intend to change the project.

Before opening a request, check whether an existing issue already describes the same problem.

## 🔍 Before Asking for Help

A good support request starts with a reproducible observation. Try to determine:

- Which page, route, component, or command is affected?
- Does the problem occur on the current default branch?
- Does it happen every time or only under certain conditions?
- Did it begin after a specific code or dependency change?
- Does it happen in another browser or on another device?
- Is there a relevant terminal, browser console, or network error?
- Can the issue be reproduced without using real personal data?

For a clean local installation:

```bash
git clone https://github.com/Brajesh31/3-DPortfolio.git
cd 3-DPortfolio
npm ci
npm run dev
```

Use the actual local URL printed by Vite. If a command fails, include the first meaningful error rather than only the final failure summary.

## 🧭 Choose the Correct Channel

| Request type | Recommended channel | Important note |
|---|---|---|
| Reproducible application defect | GitHub Bug Report issue template | Include steps and environment |
| New feature or enhancement | Feature Request issue template | Explain the user problem |
| Documentation correction | Documentation issue template or pull request | Include the incorrect and expected wording |
| General usage question | GitHub Discussions, if enabled | Search existing discussions first |
| Security vulnerability | Private reporting described in SECURITY.md | Never publish exploit details |
| Conduct concern | Private contact with repository owner | Do not expose private details publicly |
| Privacy question | Private contact with repository owner | Do not post personal information |
| Contribution process question | CONTRIBUTING.md and project discussion | Keep the question specific |

Do not create multiple issues for the same problem unless there is a clear reason to track separate work.

## 📦 Installation and Development Support

Common installation problems include unsupported Node.js versions, incomplete package installation, registry failures, and lockfile conflicts.

Collect the environment details:

```bash
node --version
npm --version
```

Then retry a clean install:

```bash
npm ci
```

If it still fails, include:
- Operating system and version.
- Node.js and npm versions.
- The exact command that failed.
- The first relevant error message.
- Whether the lockfile was modified.
- Whether the same issue occurs on a clean checkout.

Do not delete the lockfile or switch package managers as a first response. That can change the dependency graph and hide the original cause.

## 🏗️ Build and Tooling Support

For production build problems, run:

```bash
npm ci
npm run build
```

If the local build fails, report the file, line, and compiler message where available. If local build succeeds but GitHub Actions fails, compare Node.js versions, npm versions, install commands, environment variables, and operating-system differences.

A successful build does not prove that every browser route, form integration, or deployment destination works. Describe the exact stage that failed.

## 🧊 3D and WebGL Support

The portfolio uses WebGL-backed rendering. A blank scene, slow frame rate, missing model, or browser crash may be related to browser support, GPU drivers, resource size, or scene complexity.

Include:
- Browser name and version.
- Operating system.
- Device type and approximate hardware class.
- Whether WebGL is enabled and supported.
- The route and point in the experience where the issue occurs.
- Whether the problem is reproducible after a refresh.
- Relevant console and network errors, with private data removed.
- Whether another browser or device behaves differently.

A screenshot is useful for a visual defect. For a rendering failure, console and network evidence may be more useful.

Do not assume that a scene working on one desktop GPU proves compatibility with all mobile devices.

## 🌐 Routing and Deployment Support

If a route works through in-app navigation but fails when opened directly or refreshed, the hosting server may not be configured to serve the SPA entrypoint for client-side routes.

Report:
- The exact URL path.
- Whether navigation from the homepage works.
- Whether direct entry fails.
- Whether browser refresh changes the result.
- The deployment environment and approximate time.
- The HTTP status and response where available.

For deployment failures, identify whether the failing stage is checkout, dependency installation, build, or upload. Never include FTP credentials or secret values in the report.

See [docs/deployment.md](docs/deployment.md) for the documented deployment mechanisms.

## ✉️ Contact Form Support

The contact form relies on EmailJS. A failed submission may be caused by an inactive service, incorrect template parameters, provider restrictions, quotas, network errors, or a problem in the application.

Use synthetic test data. Include the browser console message and request status where safe. Do not include:
- Real visitor messages.
- Personal email addresses.
- Provider passwords.
- Private API keys.
- EmailJS dashboard screenshots containing account information.

A successful browser request does not necessarily prove final email delivery. Provider-side delivery logs may be needed by an authorized account operator.

## 📚 Documentation and Contribution Support

If documentation is unclear or incorrect, identify:
- The document and section.
- The exact instruction that is confusing or inaccurate.
- The expected behaviour.
- The command or source file that confirms the correction, if known.

For contribution questions, read [CONTRIBUTING.md](CONTRIBUTING.md). Keep proposed changes focused and document any new scripts, configuration, or operational assumptions.

## 🧾 Information to Include

| Information | Why it matters |
|---|---|
| Repository commit or branch | Establishes the code being tested |
| Affected route or file | Narrows the investigation |
| Operating system | Helps identify environment-specific behaviour |
| Browser and version | Helps identify browser compatibility |
| Viewport dimensions | Helps reproduce layout issues |
| Node.js and npm versions | Helps reproduce installation/build issues |
| Exact command or action | Makes the failure reproducible |
| Steps to reproduce | Defines a reliable test case |
| Expected result | Clarifies intended behaviour |
| Actual result | Describes the observed problem |
| Sanitized logs | Provides technical evidence |
| Screenshot or recording | Helps explain visual defects |

Remove passwords, tokens, private messages, personal information, and other sensitive values before sharing logs.

## ✍️ How to Write a Useful Support Request

A concise report is better than a long report with no reproduction path. Use this structure:

```text
Title:
A short description of the problem.

Environment:
Operating system:
Browser:
Node.js:
npm:
Device / viewport:

Affected area:
Route, component, command, or workflow.

Steps to reproduce:
1.
2.
3.

Expected result:

Actual result:

Error output:
Paste sanitized output only.

Frequency:
Always / sometimes / once.

Additional context:
Recent changes or relevant observations.
```

For feature requests, replace reproduction steps with the user problem, proposed outcome, alternatives considered, and acceptance criteria.

## 🔐 Security and Privacy

Never use a public issue to report a vulnerability or share credentials. Follow [SECURITY.md](SECURITY.md) and use the private reporting option where available.

Do not post personal contact details, visitor messages, private provider configuration, or identifying information about another person. For conduct concerns, use the private route described in [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## 🚧 Support Boundaries

Support does not include:
- Guaranteed debugging of every fork or heavily modified copy.
- Recovery of credentials or access to third-party accounts.
- Changes to a hosting account that the maintainer does not control.
- A promise that every feature request will be implemented.
- Legal advice about privacy, licensing, or compliance.
- Guaranteed response or resolution times.

The project can help investigate reproducible issues in the repository. Third-party hosting, EmailJS, browser, and network problems may require the relevant provider.

## 🛠️ Maintainer Triage Checklist

When reviewing a support request, maintainers can use this checklist:

- [ ] The request is in the correct channel.
- [ ] The affected version or commit is known.
- [ ] Reproduction steps are clear.
- [ ] The expected and actual outcomes are stated.
- [ ] Logs and screenshots have been checked for sensitive data.
- [ ] The issue is not a duplicate.
- [ ] The likely owner or subsystem is identified.
- [ ] Severity and user impact are understood.
- [ ] The next action is clear to the reporter.

Thank you for taking the time to provide useful context. Clear reports make the project easier to maintain and improve.
