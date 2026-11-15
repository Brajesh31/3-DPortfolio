# Security Policy

## Supported versions

Security fixes are considered for the current version represented by the default branch. No separate release support window is currently published.

## Reporting a vulnerability

Please do not disclose exploitable vulnerabilities in public issues or pull requests.

Use GitHub's **Report a vulnerability** feature in the repository Security tab when it is available. Otherwise, contact the repository owner privately through the contact method listed on the GitHub profile and include:

- A clear description of the issue and its potential impact.
- Affected files, components, routes, or dependency versions.
- Reproduction steps or a proof of concept that does not access other people's data.
- Any suggested mitigation.

Avoid including real credentials, personal data, or live exploit payloads.

## Response

The maintainer will review a report, request clarification if necessary, and coordinate a fix and disclosure timeline where practical. A response time or service-level agreement is not guaranteed.

## Security notes for this project

- Treat all values shipped to the browser as public, including Vite environment variables prefixed with `VITE_`.
- Never put private API keys, FTP passwords, tokens, or account credentials in source files or client-side bundles.
- Review EmailJS configuration, spam controls, and data exposure before deployment.
- Keep dependencies updated and review security advisories.
- Restrict deployment credentials to the minimum required permissions.
