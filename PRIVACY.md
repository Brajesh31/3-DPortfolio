# Privacy Notes

This repository contains a client-side portfolio application. This file is an implementation-oriented privacy note, not a legal privacy policy for a hosted service.

## Contact form

The current contact component uses EmailJS to submit form fields such as name, email address, subject, and message. The implementation also sends an automatic reply using the configured EmailJS service and template. Data handling, retention, processing location, and provider terms are governed by the account and configuration used to operate that service.

Before operating a live form, review the provider's privacy terms, configure appropriate spam controls, and disclose the actual processing and retention practices to visitors.

## Browser-side configuration

Anything bundled into a browser application can be inspected by visitors. Vite variables prefixed with `VITE_`, public EmailJS identifiers, and client-side configuration are not secrets. Never place private credentials in frontend code.

## Hosting and logs

The hosting provider and deployment configuration may process technical information such as IP addresses and request logs. Consult the active hosting account's settings and terms for details.

## Data minimization

Collect only the information needed for the stated purpose. Do not add analytics, tracking, cookies, or additional data collection without updating the implementation and providing appropriate notice.

## Questions

For privacy questions about this codebase, open a general repository discussion without posting personal data. For vulnerabilities, follow [SECURITY.md](SECURITY.md).
