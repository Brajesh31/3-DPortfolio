# ⚙️ Configuration, Integrations, and Secrets

This guide documents configuration visible in the inspected repository and explains how maintainers should manage settings safely. It intentionally does not invent a list of environment variables that the application does not currently consume.

## 📚 Table of Contents

- [🧭 Configuration Overview](#-configuration-overview)
- [📦 Package and Build Configuration](#-package-and-build-configuration)
- [✉️ EmailJS Integration](#️-emailjs-integration)
- [🔑 GitHub Actions Secrets](#-github-actions-secrets)
- [🌐 Vite Environment Variables](#-vite-environment-variables)
- [🛡️ Secret Handling Rules](#️-secret-handling-rules)
- [🔄 Changing Configuration Safely](#-changing-configuration-safely)
- [✅ Maintainer Checklist](#-maintainer-checklist)

## 🧭 Configuration Overview

The repository is configured as a Vite-powered React frontend. Main configuration is stored in the root-level package manifest, lockfile, Vite configuration, Tailwind configuration, and PostCSS configuration. Deployment settings are present in GitHub Actions workflow files.

Different kinds of configuration have different exposure levels. Build-tool settings may be public in the repository, browser-side settings are public at runtime, and deployment credentials must remain in GitHub's secret store.

## 📦 Package and Build Configuration

| File | Responsibility |
|---|---|
| `package.json` | Project scripts and declared dependencies |
| `package-lock.json` | Resolved npm dependency tree |
| `vite.config.js` | Vite build and development configuration |
| `tailwind.config.js` | Tailwind configuration |
| `postcss.config.cjs` | PostCSS plugin configuration |
| `eslint.config.js` | ESLint configuration |

When changing dependency versions, review compatibility with React, Three.js, React Three Fiber, Drei, and the Vite toolchain. Update the lockfile using npm and validate the resulting build.

## ✉️ EmailJS Integration

The contact component imports the EmailJS browser library, initializes it in the browser, and submits a form using configured service and template identifiers.

The form currently collects visitor name, email address, subject, and message. It attempts to send a second message as an automatic reply after the primary submission. Verify that the provider template supports the parameters actually sent by the component.

### Operational checks
- Confirm the service and template are active in the intended EmailJS account.
- Check provider-side origin restrictions and abuse prevention.
- Confirm the template parameters and recipient settings.
- Test the form using synthetic test information.
- Review privacy and retention settings.
- Do not place private account credentials in frontend code.

A public browser identifier is not a private credential. Do not assume hiding it in an environment variable makes it secret if it is still included in the client bundle.

## 🔑 GitHub Actions Secrets

The existing FTP deployment workflow references these Actions secrets:

| Secret name | Purpose | Exposure rule |
|---|---|---|
| `FTP_USERNAME` | Authenticates the deployment account | Store only as GitHub Actions secret |
| `FTP_PASSWORD` | Authenticates the deployment account | Store only as GitHub Actions secret |

To configure them, open repository Settings, select Secrets and variables, then Actions, and create the required repository secrets. The actual values must never appear in workflow YAML, documentation, commit messages, issue reports, screenshots, or logs.

Limit the FTP account to the deployment destination where the hosting provider allows it. Rotate credentials if they are exposed.

## 🌐 Vite Environment Variables

Vite exposes variables prefixed with `VITE_` to client-side application code. This behaviour is intentional for public configuration, not a secret-management feature.

Do not put the following in `VITE_*` variables:

- Private API keys.
- Database credentials.
- FTP passwords.
- Personal access tokens.
- Signing secrets.
- Any value that grants privileged access.

The inspected source does not currently define a documented environment-variable contract. Therefore, no `.env.example` file is added as part of this documentation because doing so would risk implying unsupported variables.

## 🛡️ Secret Handling Rules

1. Keep private credentials out of the Git history.
2. Use GitHub Actions secrets for workflow credentials.
3. Assume all browser-delivered values are public.
4. Redact secret values from logs and screenshots.
5. Rotate any credential that has been committed or exposed.
6. Restrict third-party integration permissions.
7. Review deployment account access periodically.

Deleting a secret from the latest version of a file does not make an exposed credential safe. Revoke or rotate it at the provider.

## 🔄 Changing Configuration Safely

When changing build settings, dependencies, provider integrations, or deployment settings:

1. Identify the system that owns the configuration.
2. Confirm whether the value is public or secret.
3. Review the provider's current configuration requirements.
4. Update only the necessary configuration.
5. Test locally or in a safe staging environment.
6. Update documentation and any required GitHub secret names.
7. Verify the deployed result without exposing secret values.

## ✅ Maintainer Checklist

- [ ] Package and lockfile changes are intentional.
- [ ] Browser values contain no private credentials.
- [ ] EmailJS form parameters match the provider template.
- [ ] FTP credentials exist only in Actions secrets.
- [ ] Deployment account has limited access.
- [ ] No unsupported environment variables are documented.
- [ ] Documentation matches active provider configuration.
