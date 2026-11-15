# 🛡️ Privacy and Data Handling Notes

This document describes privacy-relevant behaviour visible in the repository at the time it was written. It is a technical reference, not a substitute for a legally reviewed privacy notice for a deployed website. The person operating the live site must confirm the actual providers, settings, processing locations, retention rules, and applicable legal obligations.

## 📚 Table of Contents

- [🎯 Purpose and Scope](#-purpose-and-scope)
- [✉️ Contact Form Data](#️-contact-form-data)
- [🌐 Browser-Side Data and Configuration](#-browser-side-data-and-configuration)
- [🏗️ Hosting and Deployment](#️-hosting-and-deployment)
- [📦 Third-Party Services](#-third-party-services)
- [🧹 Data Minimization](#-data-minimization)
- [🔎 Visitor Transparency](#-visitor-transparency)
- [🛠️ Maintainer Review Checklist](#️-maintainer-review-checklist)

## 🎯 Purpose and Scope

A portfolio website may process information when visitors browse the site, submit a contact form, load external resources, or interact with third-party integrations. This document highlights known integration points in the repository and identifies details that must be confirmed in the service accounts and hosting environment.

Do not interpret this file as a definitive list of all data collected by a live deployment. Hosting logs, CDN configuration, analytics, cookies, browser storage, and provider-side telemetry may exist outside the source code.

## ✉️ Contact Form Data

The inspected contact form uses EmailJS and submits fields corresponding to:

| Field | Stated purpose |
|---|---|
| Name | Identify the person contacting the portfolio owner |
| Email address | Enable a response |
| Subject | Understand the reason for contact |
| Message | Receive the visitor's inquiry |

The implementation also attempts to send an automatic reply using the configured EmailJS service and template. The provider account determines how messages are processed, stored, retained, and delivered. Verify the active service and template configuration rather than assuming that the code alone defines the complete data lifecycle.

Before operating the form publicly:

1. Review EmailJS's current privacy and data-processing terms.
2. Confirm which fields are transmitted and to which service.
3. Configure domain restrictions and appropriate spam prevention.
4. Confirm the auto-reply template does not expose unrelated information.
5. Decide how long submitted messages need to be retained.
6. Publish a visitor-facing notice that matches the real configuration.
7. Provide a contact path for privacy questions where required.

## 🌐 Browser-Side Data and Configuration

This is a client-side Vite application. Values included in built JavaScript, HTML, CSS, or public assets can be downloaded and inspected by visitors.

In particular:

- Variables prefixed with `VITE_` are exposed to client-side code.
- Public EmailJS identifiers are not private credentials.
- Frontend validation is not a secure boundary for server-side data.
- A hidden route or UI element does not protect private information.

Never place database passwords, private API keys, private access tokens, or account credentials in the frontend bundle.

## 🏗️ Hosting and Deployment

The repository contains a GitHub Actions workflow that uploads the generated `dist/` directory using an FTP deployment action. The hosting provider may process connection data, request metadata, IP addresses, and server logs. The live account and hosting contract determine the precise details.

The deployment workflow expects FTP credentials in GitHub Actions secrets. These credentials must remain private and should be scoped to the smallest required directory.

## 📦 Third-Party Services

The current source references EmailJS and several public software libraries. Libraries used for rendering and animation do not automatically imply that personal data is sent to their maintainers. Review external requests, embeds, fonts, analytics, and any future integrations individually.

When adding a new provider, update this document after verifying:

- What information is sent.
- Why it is sent.
- Whether the provider stores it.
- Whether cookies or local storage are used.
- How visitors are informed.
- How a visitor can raise a privacy question.

## 🧹 Data Minimization

Collect only information needed to respond to the visitor. Avoid adding optional fields without a clear reason. Do not store contact submissions in public repositories, issue trackers, screenshots, or test fixtures.

If test data is required, use synthetic information and clearly mark it as test data.

## 🔎 Visitor Transparency

The published privacy notice must reflect the actual production deployment, not merely the intended code behaviour. It should identify the live operator, explain the contact form provider, state applicable retention practices, and describe any other active tracking or hosting services.

Where legal obligations apply, seek appropriate legal review. This repository document does not determine jurisdiction-specific compliance.

## 🛠️ Maintainer Review Checklist

- [ ] Contact-form fields and provider destination are confirmed.
- [ ] EmailJS account privacy and retention settings are reviewed.
- [ ] Public browser configuration contains no private credentials.
- [ ] Hosting logs and provider practices are understood.
- [ ] Analytics, cookies, and external embeds are inventoried.
- [ ] Public-facing privacy information reflects the live environment.
- [ ] Test data contains no real visitor information.
- [ ] Privacy questions have a suitable contact path.
