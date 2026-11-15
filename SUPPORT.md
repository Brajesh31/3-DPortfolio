# 🧭 Support and Getting Help

This guide explains where to ask for help with 3-D Portfolio and what information makes a support request actionable.

## 📚 Table of Contents

- [🔍 Before Asking](#-before-asking)
- [🐛 Report a Defect](#-report-a-defect)
- [💡 Suggest an Improvement](#-suggest-an-improvement)
- [🧊 3D Rendering Support](#-3d-rendering-support)
- [✉️ Contact Form Support](#️-contact-form-support)
- [🔐 Security and Privacy](#-security-and-privacy)
- [📋 Information to Include](#-information-to-include)
- [⏳ Support Expectations](#-support-expectations)

## 🔍 Before Asking

Start with the README and relevant guide under `docs/`. Check whether the problem is reproducible on the current default branch and search existing issues or discussions. Many installation problems are caused by an unsupported runtime or an incomplete dependency install.

For a clean local setup, use:

```bash
npm ci
npm run dev
```

## 🐛 Report a Defect

Use the Bug Report issue template for reproducible defects. A good bug report describes the steps that trigger the issue, what was expected, what happened instead, and which environment was used.

Avoid vague reports such as "the website is broken" without a route, reproduction path, or relevant diagnostic detail.

## 💡 Suggest an Improvement

Use the Feature Request template for a concrete improvement proposal. Explain the user problem and why the proposed change is better than the current experience. For broad ideas that need discussion first, use GitHub Discussions if enabled.

## 🧊 3D Rendering Support

The portfolio uses WebGL-backed rendering. When the 3D experience is blank, slow, or unstable, include:

- Browser and version.
- Operating system and device class.
- Whether WebGL is enabled and supported.
- The route and point in the loading experience where the issue occurs.
- Browser console errors, with private data removed.
- Whether the issue occurs on another browser or device.

A screenshot can help with visual defects, but console and environment details are often necessary to diagnose a rendering failure.

## ✉️ Contact Form Support

The form relies on an external EmailJS configuration. When submission fails, verify the form fields, browser console, network request, and provider service/template configuration. Do not post account credentials, real visitor messages, or private email addresses in a public issue.

## 🔐 Security and Privacy

Never use a public issue to report a vulnerability or share secrets. Follow [SECURITY.md](SECURITY.md). For privacy questions, avoid posting personal data and contact the repository owner through an appropriate private channel.

## 📋 Information to Include

| Information | Why it helps |
|---|---|
| Route or page | Identifies the affected experience |
| Browser and version | Helps identify compatibility differences |
| Operating system | Helps reproduce device-specific behaviour |
| Viewport dimensions | Helps understand responsive layout problems |
| Node.js and npm versions | Helps reproduce development or build failures |
| Steps to reproduce | Makes the issue testable |
| Expected and actual result | Clarifies the discrepancy |
| Sanitized logs | Provides technical evidence without exposing secrets |

## ⏳ Support Expectations

Support is maintained on a best-effort basis. No guaranteed response or resolution time is offered. Requests with clear reproduction steps and relevant evidence are easier to prioritize and investigate.
