# 🌐 Deployment and Release Operations

This guide explains the deployment mechanisms currently represented in the repository. It is important to distinguish the existing FTP workflow from the separate `gh-pages` npm script. They are not interchangeable unless the hosting environment is configured to make them so.

## 📚 Table of Contents

- [🎯 Deployment Overview](#-deployment-overview)
- [🚚 Existing FTP Workflow](#-existing-ftp-workflow)
- [🔑 Required GitHub Secrets](#-required-github-secrets)
- [🏗️ Build Output](#️-build-output)
- [📄 Separate GitHub Pages Script](#-separate-github-pages-script)
- [✅ Pre-Deployment Checklist](#-pre-deployment-checklist)
- [🔍 Post-Deployment Verification](#-post-deployment-verification)
- [🧯 Deployment Troubleshooting](#-deployment-troubleshooting)
- [🔐 Operational Security](#-operational-security)

## 🎯 Deployment Overview

The application is built as a static frontend by Vite. The build output is placed in `dist/`. The repository has a GitHub Actions workflow that runs on pushes to `main`, installs dependencies, builds the application, and uploads the output using an FTP deployment action.

The package manifest also contains a `deploy` script that publishes `dist/` with `gh-pages`. This is a separate publishing mechanism. Confirm the intended hosting target and repository configuration before running it.

## 🚚 Existing FTP Workflow

The current workflow file is:

`.github/workflows/deploy.yml`

At a high level, it:

1. Checks out the repository.
2. Sets up Node.js 22.
3. Installs dependencies.
4. Runs the production build.
5. Uses an FTP deployment action to publish the `dist/` directory.

The workflow is configured to run for pushes to the `main` branch. Review the exact workflow YAML in GitHub for the current server and destination settings. Do not copy private credential values into documentation.

## 🔑 Required GitHub Secrets

The workflow expects these repository Actions secrets:

| Name | Required for | Storage |
|---|---|---|
| `FTP_USERNAME` | FTP authentication | GitHub Actions secret |
| `FTP_PASSWORD` | FTP authentication | GitHub Actions secret |

Configure them in:

**Repository Settings → Secrets and variables → Actions**

If a secret is missing, the workflow may fail during the deploy step. Secret values are not visible after creation; update or rotate them through the repository settings and provider account.

## 🏗️ Build Output

Run a clean build locally:

```bash
npm ci
npm run build
```

Vite creates the deployment output in `dist/`. The deployment workflow uploads this directory. Do not edit generated files under `dist/` because the next build will replace them.

## 📄 Separate GitHub Pages Script

The package manifest includes a `deploy` script that runs `gh-pages -d dist`, and a `predeploy` script that builds first. This path is independent of the FTP action.

Before using it, verify:

- GitHub Pages is configured for the expected source.
- The repository and Vite base path are correct for the target URL.
- The publishing branch and permissions are configured.
- The resulting site is the intended deployment target.

Do not run two different deployment paths without understanding which one owns the production site.

## ✅ Pre-Deployment Checklist

- [ ] Confirm the correct commit is on the deployment branch.
- [ ] Install dependencies from the lockfile.
- [ ] Run the production build locally.
- [ ] Confirm required GitHub Actions secrets exist.
- [ ] Confirm the FTP account is scoped to the target directory.
- [ ] Confirm the deployment destination is correct.
- [ ] Review the workflow changes, if any.
- [ ] Confirm contact integration settings are production-ready.
- [ ] Check that no test credentials or local data are included.

## 🔍 Post-Deployment Verification

After deployment, open the production site and verify:

1. The homepage loads successfully.
2. Static images and 3D assets load.
3. Navigation between sections works.
4. Nested routes can be opened directly and refreshed.
5. The 3D scene renders in a supported browser.
6. Project links point to the intended destinations.
7. The contact form behaves as expected using a controlled test.
8. Browser console and network panels show no unexpected failures.
9. The site remains usable on mobile and keyboard navigation.

## 🧯 Deployment Troubleshooting

**Build step fails:** reproduce with `npm ci` and `npm run build` locally. Inspect the first actual build error rather than only the final workflow status.

**FTP authentication fails:** verify the two Actions secrets and the FTP account status. Do not print secret values to debug.

**Files upload to the wrong directory:** verify the workflow's server directory and the account's home-directory mapping with the hosting provider.

**Nested route returns 404 on refresh:** configure the hosting platform to serve the SPA entrypoint for routes handled by React Router. Check the provider's rewrite documentation.

**3D assets return 404:** verify asset paths and deployment output. Do not assume a local development path will work unchanged on the production host.

## 🔐 Operational Security

The existing FTP workflow uses port 21. Confirm whether secure FTP or another encrypted deployment transport is supported before making operational changes. This documentation update does not alter the deployment workflow.

Keep workflow permissions limited, review third-party Actions, and rotate credentials after accidental exposure. Do not use a deployment account with broader server access than necessary.
