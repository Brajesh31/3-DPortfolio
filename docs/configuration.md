# Configuration and Environment

## Current configuration

The project is a Vite frontend with a checked-in npm lockfile. Configuration is distributed across `package.json`, `vite.config.js`, Tailwind/PostCSS configuration, and the GitHub Actions workflows.

## Browser-visible settings

The contact component currently initializes EmailJS in browser code and supplies service/template identifiers in the component. Browser-delivered identifiers are public. Do not replace them with private credentials or assume frontend code can protect secrets.

## Deployment secrets

The existing FTP workflow reads credentials from GitHub Actions secrets:

- `FTP_USERNAME`
- `FTP_PASSWORD`

Set these in the repository's Actions secrets before expecting the FTP deployment step to authenticate. Do not write their values in documentation, issues, workflow files, or commits.

## Safe configuration practices

- Keep private tokens, passwords, and signing keys out of the repository.
- Treat every `VITE_*` variable as publicly visible after build.
- Rotate any credential that has been committed or exposed.
- Give deployment credentials only the access required for the target directory.
- Review third-party service configuration and access before publishing.

No `.env.example` is provided because the inspected application does not currently read a documented set of environment variables.
