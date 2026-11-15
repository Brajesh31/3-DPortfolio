# 🧯 Troubleshooting Guide

This guide provides a structured way to diagnose common local development, browser rendering, contact form, and deployment problems. It focuses on investigation steps and avoids making assumptions about errors without evidence.

## 📚 Table of Contents

- [📦 Dependency Installation](#-dependency-installation)
- [🏗️ Production Build](#️-production-build)
- [🌐 Development Server](#-development-server)
- [🧊 3D Rendering](#-3d-rendering)
- [🖼️ Missing Assets](#️-missing-assets)
- [🧭 Routing and Refresh](#-routing-and-refresh)
- [✉️ Contact Form](#️-contact-form)
- [🚚 GitHub Actions Deployment](#-github-actions-deployment)
- [📋 How to Report a Problem](#-how-to-report-a-problem)

## 📦 Dependency Installation

### Symptoms
- `npm ci` exits with an error.
- A package cannot be downloaded.
- A dependency reports an unsupported runtime.
- Local installation differs from CI.

### Investigation
1. Run `node --version` and `npm --version`.
2. Confirm the Node.js version meets the documented baseline.
3. Check network access and package registry availability.
4. Read the first relevant error in the output.
5. Confirm the checkout is complete and the lockfile is present.
6. Retry `npm ci` after correcting the environment.

Avoid deleting `package-lock.json` or switching package managers as an initial troubleshooting step. Those actions can introduce a different dependency tree and make the original problem harder to isolate.

## 🏗️ Production Build

Run:

```bash
npm ci
npm run build
```

If the build fails, inspect the file and line reported by Vite or the underlying tool. Check import paths, dependency compatibility, and syntax. Do not assume that the final "build failed" line identifies the actual cause.

If the local build passes but CI fails, compare Node.js versions, npm versions, install commands, environment variables, and operating-system differences.

## 🌐 Development Server

If `npm run dev` does not start:

- Confirm dependencies installed successfully.
- Check whether the expected port is occupied.
- Read the terminal output for the actual listening address.
- Confirm Vite configuration has not been changed unexpectedly.
- Check whether a firewall or browser extension blocks local requests.

Use the exact URL Vite reports. Do not assume a fixed port if another process is already using it.

## 🧊 3D Rendering

### Blank or missing scene
Check browser WebGL availability, graphics-driver support, console messages, and whether the model asset was downloaded successfully.

### Low frame rate
Inspect device GPU capability, scene complexity, high-resolution textures, and repeated rendering work. Record the device and browser. Avoid making performance claims from a single desktop test.

### Model appears in the wrong position
Check viewport-specific scene positioning and page state. Reproduce at the affected screen width and on the route where the issue occurs.

### WebGL unavailable
The essential portfolio content should remain usable without the canvas. If it does not, file an issue describing the blocked content and browser environment.

## 🖼️ Missing Assets

For a missing image, model, or other file:

1. Inspect the browser Network panel.
2. Note the requested URL and response status.
3. Confirm the file exists in the correct repository location.
4. Check whether it is imported from `src/assets/` or served from `public/`.
5. Verify case-sensitive path spelling.
6. Rebuild and preview the production bundle.

A path that works on a case-insensitive local filesystem may fail on a case-sensitive production host.

## 🧭 Routing and Refresh

The app uses React Router for client-side routes. Client-side navigation can work while direct browser refresh fails if the server does not serve the SPA entrypoint for nested paths.

Check the hosting platform's rewrite or fallback configuration. Verify the root route, each required nested route, and refresh behaviour. Diagnose the server configuration before altering application routing.

## ✉️ Contact Form

If a submission fails:

- Check the browser console and Network panel.
- Confirm the EmailJS service and template are active.
- Verify parameter names match the configured template.
- Check provider-side account restrictions and quotas.
- Use synthetic test content.
- Do not publish real message text, email addresses, or provider credentials.

A successful browser request does not always prove that the final email was delivered. Check the provider's authorized delivery logs when available.

## 🚚 GitHub Actions Deployment

If deployment fails:

1. Open the failed Actions run.
2. Identify whether checkout, dependency installation, build, or FTP upload failed.
3. Reproduce the build locally where appropriate.
4. Confirm `FTP_USERNAME` and `FTP_PASSWORD` exist as repository Actions secrets.
5. Check server availability and destination permissions.
6. Do not echo secret values into logs.
7. Verify the actual remote destination before retrying.

The FTP workflow uses a provider-specific server and directory. Refer to the workflow file for current settings.

## 📋 How to Report a Problem

Include the affected route, commit, browser, operating system, viewport, reproduction steps, expected behaviour, actual behaviour, and sanitized error output.

For a security vulnerability, do not use a public issue. Follow [SECURITY.md](../SECURITY.md).
