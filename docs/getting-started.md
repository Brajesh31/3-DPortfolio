# 🚀 Getting Started

This guide walks through preparing a local development environment for 3-D Portfolio. It assumes a clean checkout and uses the npm lockfile already present in the repository.

## 📚 Table of Contents

- [🧰 Prerequisites](#-prerequisites)
- [📥 Clone the Repository](#-clone-the-repository)
- [📦 Install Dependencies](#-install-dependencies)
- [▶️ Run the Development Server](#️-run-the-development-server)
- [🏗️ Build for Production](#️-build-for-production)
- [🔍 Preview the Production Build](#-preview-the-production-build)
- [🗂️ Understand the Repository](#️-understand-the-repository)
- [✅ First-Run Checklist](#-first-run-checklist)
- [🧯 Common Setup Problems](#-common-setup-problems)

## 🧰 Prerequisites

| Requirement | Baseline | Why it is needed |
|---|---|---|
| Node.js | 18 or newer | Runs Vite and development tooling |
| npm | Compatible with installed Node.js | Installs the dependency tree |
| Git | Recent stable version | Clones and manages repository history |
| Browser | Current modern browser | Runs the React application |
| WebGL | Supported and enabled | Renders the 3D scene |

The existing deployment workflow uses Node.js 22. For local work, use a supported Node.js version and keep local and CI environments reasonably aligned.

Verify installations:

```bash
node --version
npm --version
git --version
```

## 📥 Clone the Repository

```bash
git clone https://github.com/Brajesh31/3-DPortfolio.git
cd 3-DPortfolio
```

If you already have a checkout, move into its project directory and update from the intended branch before beginning a new contribution.

## 📦 Install Dependencies

```bash
npm ci
```

The repository includes `package-lock.json`. The `npm ci` command installs the dependency tree represented by that lockfile and is the preferred clean setup for CI and repeatable local installs.

Do not remove the lockfile simply because an installation fails. First inspect the Node.js version, npm output, network connectivity, and any native or platform-specific package error.

## ▶️ Run the Development Server

```bash
npm run dev
```

Vite prints the local address and port in the terminal. Open that exact address in your browser. If the default port is occupied, Vite may choose another port or report a conflict depending on the configuration.

Changes to source files are handled by the development server's reload mechanism. Some 3D or animation changes should still be checked with a complete browser refresh because they may depend on initialization order or device state.

## 🏗️ Build for Production

```bash
npm run build
```

A production build compiles the frontend and writes output to `dist/`. Build output should be treated as generated content. It is not the location for permanent source edits.

A successful build verifies that the bundler can produce the application bundle. It does not prove that every route, contact form, external integration, or 3D interaction works correctly.

## 🔍 Preview the Production Build

```bash
npm run preview
```

Use the URL printed by Vite. Preview testing is important because production bundling and asset paths can behave differently from the development server.

Check the home experience, internal navigation, project links, contact view, media loading, and 3D scene. Confirm that browser console errors are not being overlooked.

## 🗂️ Understand the Repository

| Path | Responsibility |
|---|---|
| `src/App.jsx` | Main route tree and page/scene orchestration |
| `src/Components/` | Shared interface and 3D scene components |
| `src/pages/` | Page-level components |
| `src/utils/` | Rendering and animation helpers |
| `src/assets/` | Imported media and portfolio assets |
| `public/` | Static public assets |
| `docs/` | Technical documentation |
| `.github/workflows/` | Existing automation and deployment |
| `package.json` | Scripts and dependency declarations |
| `package-lock.json` | Locked npm dependency tree |

## ✅ First-Run Checklist

- [ ] Node.js and npm versions have been checked.
- [ ] Repository cloned successfully.
- [ ] `npm ci` completed without unresolved errors.
- [ ] `npm run dev` starts the development server.
- [ ] Home page loads in the browser.
- [ ] Navigation reaches the expected sections and routes.
- [ ] 3D scene is visible in a WebGL-capable browser.
- [ ] `npm run build` completes.
- [ ] Production preview can be opened.

## 🧯 Common Setup Problems

**Dependency installation fails:** verify Node.js and npm versions, inspect the first meaningful error, and retry with `npm ci` after correcting the environment.

**Vite port is already occupied:** use the alternate local URL printed in the terminal or stop the process occupying the port.

**3D scene is blank:** check browser WebGL support, console errors, graphics drivers, and device constraints.

**Production route fails after refresh:** investigate hosting rewrite rules for the React Router application. See [Deployment](deployment.md) and [Troubleshooting](troubleshooting.md).
