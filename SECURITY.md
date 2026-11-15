# 🔐 Security Policy

Security reports help protect project maintainers, contributors, and anyone who uses or deploys this portfolio. This policy explains the reporting channel and practical security expectations for this client-side React application.

## 📚 Table of Contents

- [🧭 Scope](#-scope)
- [📦 Supported Versions](#-supported-versions)
- [🚨 Reporting a Vulnerability](#-reporting-a-vulnerability)
- [🧪 What to Include](#-what-to-include)
- [⏱️ Response and Disclosure](#️-response-and-disclosure)
- [🛡️ Application-Specific Security Guidance](#️-application-specific-security-guidance)
- [🔑 Secrets and Deployment](#-secrets-and-deployment)
- [📚 Dependency Security](#-dependency-security)
- [✅ Maintainer Checklist](#-maintainer-checklist)

## 🧭 Scope

This policy covers vulnerabilities in the source code, build configuration, dependencies, GitHub workflows, and documented deployment process of this repository.

The project is a browser-delivered React/Vite application. A browser client cannot keep credentials secret from its users. Public identifiers required by a client-side service must be configured with the provider's intended public-client model and abuse controls.

Third-party providers, hosting accounts, and user-controlled deployment environments have their own security policies and are not directly operated by this repository.

## 📦 Supported Versions

Security fixes are considered for the current version represented by the default branch. The repository does not currently publish a formal long-term support matrix or guaranteed patch schedule.

When reporting a problem, include the affected commit, route, dependency version, or deployment configuration where known.

## 🚨 Reporting a Vulnerability

**Please do not publish exploitable vulnerabilities in public issues, pull requests, discussions, screenshots, or social media posts before coordinated remediation.**

Preferred channel:

1. Open the repository's **Security** tab.
2. Select **Report a vulnerability** or the private security advisory option if enabled.
3. Provide the minimum detail needed to reproduce and assess the issue.

Private advisory URL: https://github.com/Brajesh31/3-DPortfolio/security/advisories/new

If the private reporting option is unavailable, contact the repository owner through the contact method listed on the owner's GitHub profile. Do not send secrets or exploit material through an unverified channel.

## 🧪 What to Include

A useful report may include:

- A concise title and vulnerability category.
- The affected page, component, workflow, or dependency.
- The affected commit or version.
- Preconditions and safe reproduction steps.
- Expected and actual behaviour.
- Security impact and realistic attack scenario.
- A proof of concept that does not access real user data.
- A suggested mitigation, if known.

Do not include actual passwords, API tokens, FTP credentials, private messages, personal records, or data belonging to another person. Redact logs and screenshots before sharing.

## ⏱️ Response and Disclosure

The maintainer will make a best-effort attempt to acknowledge and assess a report, request clarification where needed, and coordinate a fix and disclosure. No fixed acknowledgement time or service-level agreement is promised.

Please allow an opportunity to investigate and address the issue before publicly disclosing technical details. Coordinated disclosure should balance user protection with the reporter's need for recognition and transparency.

## 🛡️ Application-Specific Security Guidance

### Browser-visible configuration
Vite variables prefixed with `VITE_` are exposed to client-side code. Do not store private credentials in them. Anything included in the built JavaScript, HTML, or static assets can be downloaded and inspected.

### EmailJS contact form
The contact form submits user-entered name, email, subject, and message fields through EmailJS. Review provider-side domain restrictions, abuse prevention, template permissions, and rate controls. Validate input appropriately and avoid logging sensitive message content unnecessarily.

Public EmailJS identifiers are not equivalent to private account credentials. Never publish provider passwords, private API keys, or dashboard access tokens.

### 3D assets and browser performance
3D models and media are served to browsers. Consider resource size, parsing cost, and untrusted file provenance when adding assets. Avoid adding untrusted executable content or scripts to public assets.

### Client-side routing
Client-side route guards are not authorization controls. Never put privileged or private data in frontend code and assume route visibility protects it.

### Content and links
Use trusted destinations, avoid unsafe dynamic HTML insertion, and review third-party embeds or external scripts before adding them.

## 🔑 Secrets and Deployment

The existing FTP deployment workflow reads `FTP_USERNAME` and `FTP_PASSWORD` from GitHub Actions secrets. Keep these values in repository or organization secret storage, never in the YAML file.

Recommended practices:

- Use a dedicated FTP account scoped to the deployment directory.
- Prefer encrypted deployment transport when supported by the host and deployment action configuration.
- Rotate credentials after accidental exposure or staff access changes.
- Limit workflow permissions to what each job needs.
- Review third-party GitHub Actions and pin to trusted versions or immutable references as appropriate.
- Avoid printing secrets in build scripts or debugging output.

The workflow currently uses FTP on port 21. Confirm whether the host supports a more secure transport before changing deployment configuration. This documentation does not change the workflow itself.

## 📚 Dependency Security

Review npm advisories and dependency updates regularly. A safe update process includes:

1. Inspect the affected package and advisory.
2. Review release notes and breaking changes.
3. Update a focused set of dependencies.
4. Run a clean install and production build.
5. Test the pages affected by the dependency.
6. Record the update and any known limitations.

Do not blindly apply force upgrades to the complete dependency tree. Dependency changes may affect the 3D renderer, React integration, animations, or build output.

## ✅ Maintainer Checklist

- [ ] Private reporting is enabled and reachable.
- [ ] FTP credentials are stored only as Actions secrets.
- [ ] Browser-side configuration contains no private keys.
- [ ] EmailJS settings and spam controls are reviewed.
- [ ] Third-party workflow actions are reviewed.
- [ ] Dependency advisories are monitored.
- [ ] Public reports do not expose sensitive reproduction data.
- [ ] Remediation and disclosure decisions are documented appropriately.
