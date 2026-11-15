# 🛡️ Privacy and Data Handling Notes

This document describes privacy-relevant behaviour visible in the 3-D Portfolio repository and provides a review framework for the person operating the deployed website.

It is a technical documentation file. It is not a legally reviewed privacy policy, does not guarantee compliance with any law, and should not be presented as a complete visitor-facing notice without verifying the actual production environment.

The live site operator must confirm the identity of the operator, active providers, data flows, processing locations, retention practices, cookies, analytics, hosting logs, and applicable legal obligations.

## 📚 Table of Contents

- [Purpose and Scope](#-purpose-and-scope)
- [Important Privacy Limitations](#-important-privacy-limitations)
- [Information Visitors May Provide](#-information-visitors-may-provide)
- [Contact Form and EmailJS](#-contact-form-and-emailjs)
- [Browser-Side Data and Configuration](#-browser-side-data-and-configuration)
- [Hosting, Network Requests, and Logs](#-hosting-network-requests-and-logs)
- [Third-Party Libraries and Services](#-third-party-libraries-and-services)
- [Cookies, Local Storage, and Analytics](#-cookies-local-storage-and-analytics)
- [Data Minimization](#-data-minimization)
- [Retention and Deletion](#-retention-and-deletion)
- [Security Controls](#-security-controls)
- [Visitor Transparency](#-visitor-transparency)
- [Privacy Incident Handling](#-privacy-incident-handling)
- [Maintainer Responsibilities](#-maintainer-responsibilities)
- [Production Privacy Checklist](#-production-privacy-checklist)

## 🎯 Purpose and Scope

A portfolio website may process information when visitors:
- Load pages and static assets.
- Navigate between routes.
- Interact with embedded or externally hosted resources.
- Submit a contact form.
- Follow external links.
- Use a browser or network environment that produces technical request logs.

This document highlights integration points visible in the repository and the checks required before describing the live site's data practices.

It is not a complete inventory of all data processed by the deployed website. Hosting logs, CDN services, analytics, cookies, browser storage, security tooling, external scripts, and provider telemetry may exist outside the source code.

## ⚠️ Important Privacy Limitations

The source code alone cannot establish:
- The exact identity of the live website operator.
- The data retention settings of the hosting provider.
- Whether analytics or tracking are enabled in production.
- The exact geographic locations where providers process information.
- Whether provider-side logs contain visitor identifiers.
- The legal basis or retention period applicable to each processing activity.
- Whether a live deployment has additional scripts or integrations.

These details must be verified in the relevant provider accounts and production environment. Do not copy assumptions from this file into a public legal notice without checking them.

## 🧾 Information Visitors May Provide

The inspected contact form collects fields corresponding to:

| Field | Intended purpose | Handling consideration |
|---|---|---|
| Name | Identify the person making an inquiry | Avoid collecting more identity information than needed |
| Email address | Enable a response | Treat as personal information |
| Subject | Understand the inquiry category | Avoid requesting sensitive details |
| Message | Receive the visitor's request | May contain personal or sensitive information |

The exact information processed depends on what a visitor chooses to enter. The form should not encourage visitors to submit passwords, financial details, government identifiers, health information, or other sensitive information that is not needed for a portfolio inquiry.

## ✉️ Contact Form and EmailJS

The contact component integrates with EmailJS from browser code. It submits visitor-provided information through a configured service and template. The implementation also attempts to send an automatic reply using the configured provider service and template.

The provider account and its active settings determine how the information is transmitted, processed, delivered, stored, and retained. The repository code alone does not define the full data lifecycle.

Before operating the form publicly, the site operator should:

1. Confirm the active EmailJS service and template.
2. Confirm the exact fields transmitted by the application.
3. Review the provider's current privacy and data-processing terms.
4. Check the provider's data location and retention information.
5. Configure origin restrictions and abuse prevention where supported.
6. Confirm the automatic reply does not disclose unrelated information.
7. Limit access to the provider account and message history.
8. Decide how long inquiry messages need to be retained.
9. Provide a suitable contact route for privacy questions.
10. Publish a visitor-facing notice that reflects the real configuration.

Use synthetic test messages during development. Do not copy real visitor submissions into public issues, pull requests, screenshots, test fixtures, or documentation.

## 🌐 Browser-Side Data and Configuration

This is a client-side Vite application. Values included in built JavaScript, HTML, CSS, and public assets can be downloaded and inspected by visitors.

Important implications:
- Variables prefixed with `VITE_` are exposed to client-side code.
- Public EmailJS identifiers are not private account credentials.
- Frontend validation improves user experience but does not replace server-side validation.
- A hidden route or UI element does not protect private information.
- Anything sent in a browser request may be visible to the visitor or network tooling.

Never place database passwords, private API keys, private access tokens, FTP credentials, or other privileged secrets in the frontend bundle.

## 🏗️ Hosting, Network Requests, and Logs

The repository contains a GitHub Actions workflow that uploads the generated `dist/` directory using an FTP deployment action.

The hosting provider may process technical information such as:
- IP addresses.
- Request timestamps.
- Requested URLs and resources.
- User-agent and browser information.
- Error and security logs.
- Network and operational metadata.

The exact information collected, retention period, and access controls depend on the hosting provider and the live account configuration. The repository does not independently verify these provider practices.

The deployment workflow expects FTP credentials in GitHub Actions secrets. Those credentials must remain private and should be scoped to the smallest practical deployment directory.

## 📦 Third-Party Libraries and Services

The source uses public software libraries for UI rendering, routing, animation, 3D rendering, styling, and contact form delivery.

Using a library does not automatically mean that personal information is transmitted to its maintainers. However, external fonts, images, embeds, scripts, analytics, and service integrations may make network requests.

When adding a new integration, review:
- What information is sent.
- Which provider receives it.
- Why the transfer is necessary.
- Whether the provider stores the information.
- Whether cookies or browser storage are used.
- Whether the resource is loaded before visitor interaction.
- Whether the integration can be disabled or replaced.
- How visitors are informed.

Update this document after verifying a new integration's actual behaviour.

## 🍪 Cookies, Local Storage, and Analytics

The repository documentation does not establish a complete inventory of production cookies, local storage, analytics, or tracking technologies.

Do not claim that the live site does or does not use cookies or analytics without inspecting the deployed site and its provider configuration.

Before adding analytics, tracking pixels, session recording, advertising scripts, or similar tools:
1. Define the purpose.
2. Review what data is collected.
3. Review provider terms and settings.
4. Determine whether consent or notice is required.
5. Minimize identifiers and retention.
6. Document the integration.
7. Test the production result.

## 🧹 Data Minimization

Collect only information needed to respond to a visitor's inquiry.

Good practices:
- Keep contact form fields limited to a clear purpose.
- Avoid asking for sensitive information.
- Do not retain test submissions longer than necessary.
- Restrict access to inquiry messages.
- Avoid unnecessary copies of messages.
- Do not publish contact submissions in repository issues.
- Use synthetic data in development and screenshots.
- Remove data from local test environments when it is no longer needed.

Data minimization reduces the consequences of accidental exposure and makes privacy practices easier to explain.

## 🗃️ Retention and Deletion

The repository does not define a verified retention period for contact messages or hosting logs. The site operator must review the relevant provider settings and decide how long each category of information is needed.

A retention plan should identify:
- The type of information.
- The purpose for retaining it.
- The system where it is stored.
- Who can access it.
- The retention period.
- The deletion or anonymization process.
- Any legal or operational reason that requires longer retention.

Do not promise visitors that information is deleted within a specific period unless the provider configuration and operational process support that promise.

## 🔐 Security Controls

Privacy depends on appropriate security practices.

Recommended controls:
- Keep private credentials out of browser code.
- Store FTP credentials only in GitHub Actions secrets.
- Limit provider account access.
- Use a deployment account with restricted permissions.
- Rotate exposed credentials.
- Review third-party dependencies and workflow actions.
- Avoid logging full contact messages unnecessarily.
- Use synthetic test information.
- Remove personal data from public bug reports and screenshots.

See [SECURITY.md](SECURITY.md) for vulnerability reporting and security guidance.

## 🔎 Visitor Transparency

A public-facing privacy notice should be understandable and should reflect the actual deployed website.

Depending on the real environment and applicable requirements, it may need to explain:
- Who operates the site and how to contact them.
- What information visitors may submit.
- Why contact information is used.
- Which providers receive information.
- Whether analytics or cookies are active.
- How information is retained.
- How visitors can ask privacy questions or exercise applicable rights.
- Whether information is transferred to other locations.

Do not publish generic statements that contradict the actual provider settings. Seek qualified legal review where appropriate.

## 🚨 Privacy Incident Handling

If personal information is exposed or sent to an unintended destination:

1. Identify the affected data and system.
2. Stop or limit the ongoing exposure where possible.
3. Restrict access to affected accounts or resources.
4. Preserve relevant evidence securely.
5. Avoid copying exposed personal data into public reports.
6. Determine which providers and people may be affected.
7. Seek appropriate legal or professional guidance where required.
8. Follow applicable notification obligations.
9. Correct the underlying configuration or code.
10. Record lessons learned without retaining unnecessary personal data.

Do not assume every incident has the same legal notification requirements. The responsible operator must assess the specific facts and applicable law.

## 🛠️ Maintainer Responsibilities

Maintainers should:
- Avoid requesting unnecessary personal information.
- Use synthetic information in examples and tests.
- Review new integrations before merging.
- Keep secrets out of public files and logs.
- Update this document when verified data flows change.
- Avoid making unsupported claims about provider retention.
- Restrict access to contact submissions and provider accounts.
- Review the live site periodically for untracked scripts and resources.

## ✅ Production Privacy Checklist

- [ ] The live website operator is clearly identified.
- [ ] Contact form fields and provider destination are confirmed.
- [ ] EmailJS privacy and retention settings are reviewed.
- [ ] The automatic reply template is checked.
- [ ] Public browser configuration contains no private credentials.
- [ ] Hosting logs and provider practices are understood.
- [ ] Analytics, cookies, and external embeds are inventoried.
- [ ] Data retention and deletion practices are documented.
- [ ] Access to contact messages is restricted.
- [ ] Test data contains no real visitor information.
- [ ] Public-facing privacy information reflects the live environment.
- [ ] A suitable privacy contact path is available.
- [ ] Incident response responsibilities are understood.

This file should be reviewed whenever the contact form, hosting provider, analytics, external scripts, or data handling behaviour changes.
