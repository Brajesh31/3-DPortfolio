# 🔐 Security Policy

Security is relevant to the application source, dependency tree, build configuration, GitHub workflows, deployment credentials, contact form integration, and the information handled by the live website.

This policy explains how to report a vulnerability privately and describes practical security expectations for contributors and maintainers. It does not promise a fixed response time or claim that the project has undergone an independent security audit.

## 📚 Table of Contents

- [Security Commitment](#-security-commitment)
- [Scope](#-scope)
- [Supported Versions](#-supported-versions)
- [Reporting a Vulnerability](#-reporting-a-vulnerability)
- [Information to Include](#-information-to-include)
- [Safe Testing and Proof of Concept](#-safe-testing-and-proof-of-concept)
- [Response and Coordinated Disclosure](#-response-and-coordinated-disclosure)
- [Application Architecture and Trust Boundaries](#-application-architecture-and-trust-boundaries)
- [Browser-Side Configuration](#-browser-side-configuration)
- [EmailJS Contact Integration](#-emailjs-contact-integration)
- [GitHub Actions and Deployment Credentials](#-github-actions-and-deployment-credentials)
- [Dependency and Supply-Chain Security](#-dependency-and-supply-chain-security)
- [3D Assets and External Resources](#-3d-assets-and-external-resources)
- [Privacy and Personal Information](#-privacy-and-personal-information)
- [Incident Response Checklist](#-incident-response-checklist)
- [Security Review Checklist](#-security-review-checklist)
- [Out of Scope and Limitations](#-out-of-scope-and-limitations)

## 🛡️ Security Commitment

The project aims to handle security reports responsibly, avoid exposing credentials, and reduce avoidable risk in the frontend and deployment process.

Security improvements should be practical and evidence-based. A documentation change does not itself prove that a vulnerability has been fixed. A successful production build does not establish that the application is secure.

## 🎯 Scope

This policy covers security issues in:
- React application source code.
- Vite and other build configuration.
- npm dependencies and lockfile.
- GitHub Actions workflows and repository automation.
- Deployment configuration represented in the repository.
- Contact form integration and browser-side data handling.
- Static assets and external resource loading.
- Documentation that could cause unsafe configuration or deployment.

Third-party providers, hosting accounts, user-controlled forks, browser extensions, and infrastructure not operated by this repository have their own security responsibilities. Reports about those systems may need to be sent to the relevant provider.

## 📦 Supported Versions

Security fixes are considered for the current version represented by the repository's default branch, `main`.

The repository does not currently publish a formal long-term support matrix, guaranteed patch schedule, or security response service-level agreement. When reporting an issue, include the affected commit, route, dependency version, workflow, or deployment configuration where known.

## 🚨 Reporting a Vulnerability

**Do not publish exploitable vulnerability details in public issues, pull requests, discussions, screenshots, or social media posts before coordinated remediation.**

Preferred reporting process:

1. Open the repository's **Security** tab.
2. Select **Report a vulnerability** or the private security advisory option if it is enabled.
3. Provide the minimum information required to understand and reproduce the issue safely.
4. Avoid attaching real credentials, personal data, or private visitor information.
5. Allow the maintainer an opportunity to investigate before public disclosure.

Private advisory route:

<https://github.com/Brajesh31/3-DPortfolio/security/advisories/new>

If private vulnerability reporting is unavailable, contact the repository owner through the contact method listed on the owner's GitHub profile. Do not send passwords, private keys, or exploit material through an unverified channel.

For ordinary defects, use the public issue templates. A security vulnerability should not be filed as an ordinary public bug report.

## 🧾 Information to Include

A useful report may include:

- A concise title and vulnerability category.
- The affected route, component, workflow, dependency, or configuration.
- The affected commit or version.
- Preconditions and safe reproduction steps.
- Expected and actual behaviour.
- A realistic security impact and attack scenario.
- A proof of concept that does not access real user data.
- Relevant sanitized logs or screenshots.
- A suggested mitigation, if known.

Do not include:
- Actual passwords or access tokens.
- FTP credentials.
- Private EmailJS account credentials.
- Personal contact messages or visitor submissions.
- Private user records.
- Unredacted logs containing secrets.
- Data obtained from another person's account without permission.

A report does not need to contain a weaponized exploit. A clear explanation of the security boundary and impact is more useful than a dangerous proof of concept.

## 🧪 Safe Testing and Proof of Concept

Only test systems and accounts that you own or are explicitly authorized to assess.

Do not:
- Access another person's account or data.
- Send unsolicited messages through the live contact form.
- Run denial-of-service or resource-exhaustion tests against the live site.
- Exfiltrate data to demonstrate impact.
- Publish credentials or use leaked credentials.
- Modify or delete production data.
- Probe third-party infrastructure without authorization.

Use local copies, synthetic data, and controlled environments wherever possible. Stop testing if an action could affect real visitors or third-party systems.

## ⏱️ Response and Coordinated Disclosure

The maintainer will make a best-effort attempt to:
1. Acknowledge the report.
2. Determine whether the issue is reproducible and in scope.
3. Assess severity and likely impact.
4. Request clarification where necessary.
5. Coordinate a mitigation or fix.
6. Verify the remediation where practical.
7. Agree on an appropriate disclosure approach.

No fixed acknowledgement or resolution time is promised. Response may depend on severity, reproducibility, maintainer availability, and third-party provider involvement.

Please allow a reasonable opportunity to investigate and address a report before publishing technical details. Coordinated disclosure should protect users while respecting the reporter's need for transparency and recognition.

## 🧱 Application Architecture and Trust Boundaries

This repository is a browser-delivered React/Vite frontend. It does not define a first-party backend API or database in the inspected application architecture.

Important implications:

- Browser code and assets are visible to visitors.
- Client-side validation can improve usability but is not a trusted security boundary.
- Hiding a route or UI element does not protect private information.
- A visitor can inspect requests and values sent by the browser.
- A public identifier is not the same as a private credential.
- Privileged operations should not be implemented by placing secrets in frontend code.

Do not describe the application as having server-side authorization unless such a backend is actually implemented and verified.

## 🌐 Browser-Side Configuration

Vite exposes variables prefixed with `VITE_` to client-side code. Values included in the production bundle can be inspected.

Never put the following in browser-exposed configuration:
- Database passwords.
- Private API keys.
- FTP passwords.
- Personal access tokens.
- Signing secrets.
- Private provider dashboard credentials.
- Any value that grants privileged access.

If a secret is accidentally committed or bundled:
1. Revoke or rotate it at the provider immediately.
2. Review account access and relevant logs.
3. Remove the exposed value from active source.
4. Review Git history and deployment artefacts.
5. Notify affected parties if required by the circumstances or applicable law.

Deleting the value from the latest commit does not make it safe again.

## ✉️ EmailJS Contact Integration

The contact form uses EmailJS from browser code. The form sends visitor-provided fields through the configured service and template.

Recommended controls:
- Use the provider's intended public-client configuration.
- Restrict allowed origins where supported.
- Review template permissions and recipient settings.
- Apply provider-side rate limits or abuse prevention where available.
- Validate and constrain input appropriately.
- Avoid logging complete message bodies unnecessarily.
- Use synthetic information for development and testing.
- Review the provider's data-processing and retention settings.
- Monitor unusual or abusive submissions through authorized provider tools.

Do not publish private account credentials. Public identifiers required by the browser should not be confused with account passwords or private API tokens.

## 🔑 GitHub Actions and Deployment Credentials

The existing FTP deployment workflow expects these GitHub Actions secrets:

| Secret | Purpose | Storage requirement |
|---|---|---|
| `FTP_USERNAME` | Deployment account authentication | GitHub Actions secret |
| `FTP_PASSWORD` | Deployment account password | GitHub Actions secret |

Recommended practices:
- Keep credentials out of workflow YAML and source files.
- Use a dedicated deployment account.
- Limit that account to the deployment directory where supported.
- Rotate credentials after exposure or access changes.
- Restrict workflow permissions to the minimum required.
- Review third-party Actions before use.
- Prefer trusted, pinned action references where practical.
- Avoid printing secrets in logs.
- Review the deployment destination before publishing.

The current workflow uses FTP on port 21. Confirm whether the hosting provider supports an encrypted alternative before changing the transport. This policy does not modify the workflow or guarantee that the provider supports a particular protocol.

## 📦 Dependency and Supply-Chain Security

Dependencies can introduce vulnerabilities or unexpected behaviour.

A responsible update process:
1. Review the advisory and affected package range.
2. Confirm whether the vulnerable code path is used.
3. Inspect the package's official release notes.
4. Check compatibility with React, Three.js, React Three Fiber, Drei, and Vite.
5. Update a focused set of packages.
6. Regenerate the npm lockfile using npm.
7. Run a clean install and production build.
8. Test affected routes and interactions.
9. Record the update and any known limitations.

Do not blindly force-upgrade the entire dependency tree. A dependency update can break the 3D renderer, animation behaviour, or build output.

## 🧊 3D Assets and External Resources

3D models, textures, images, fonts, and other assets are delivered to or processed by the browser.

Review:
- Asset source and permission to use it.
- File type and size.
- Whether a file contains executable or active content.
- External URLs and redirect behaviour.
- Third-party scripts and embeds.
- Unexpected network requests.
- Risks from dynamically inserting untrusted HTML or script content.

Do not add untrusted executable content to public assets. Large or unusual files should be reviewed before being committed.

## 🛡️ Privacy and Personal Information

Security reports and public issues should not expose personal data. Contact form messages may contain sensitive information supplied by visitors. Use synthetic content for testing and avoid copying real submissions into logs, screenshots, fixtures, or issue descriptions.

See [PRIVACY.md](PRIVACY.md) for known data flows and privacy review expectations. The deployed site operator remains responsible for verifying the actual provider configuration and applicable obligations.

## 🚑 Incident Response Checklist

If a security issue or credential exposure is confirmed:

- [ ] Identify the affected system and credential or data type.
- [ ] Revoke or rotate exposed credentials.
- [ ] Restrict affected access where necessary.
- [ ] Review relevant provider and workflow logs.
- [ ] Determine the affected commits, builds, and deployments.
- [ ] Remove unsafe active configuration.
- [ ] Prepare and validate a remediation.
- [ ] Consider whether visitors or third parties are affected.
- [ ] Make any required notifications through appropriate channels.
- [ ] Record the incident and lessons learned without exposing secrets.

## ✅ Security Review Checklist

- [ ] No private credentials are committed.
- [ ] No privileged values are exposed through `VITE_` variables.
- [ ] FTP credentials are stored only as Actions secrets.
- [ ] Deployment account permissions are limited.
- [ ] GitHub Actions permissions and third-party actions are reviewed.
- [ ] EmailJS settings and abuse controls are reviewed.
- [ ] Contact form testing uses synthetic data.
- [ ] Dependencies are reviewed for relevant advisories.
- [ ] External assets and scripts are reviewed.
- [ ] Public reports do not expose sensitive reproduction data.
- [ ] Private reporting instructions are reachable.
- [ ] Remediation and disclosure decisions are documented appropriately.

## 🚧 Out of Scope and Limitations

This policy does not:
- Guarantee that every report will result in a code change.
- Provide a guaranteed response time.
- Authorize testing against systems you do not own.
- Replace the security policies of EmailJS, GitHub, the hosting provider, or other third parties.
- Provide legal advice.
- Certify that the application is free of vulnerabilities.

Security is an ongoing process. If you identify a credible issue, report it privately and provide enough context for a safe investigation.
