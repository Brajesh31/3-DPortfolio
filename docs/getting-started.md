# Getting Started

## Overview

3-D Portfolio is a browser-based portfolio built with React 18 and Vite. It uses Three.js through React Three Fiber and Drei for interactive 3D scenes, alongside animation and UI libraries.

## Requirements

- Node.js 18 or newer.
- npm (the repository includes `package-lock.json`).
- A modern browser. WebGL support is needed for the 3D experience.

## Install

```bash
npm ci
```

## Run locally

```bash
npm run dev
```

Use the local URL printed by Vite, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

Vite writes production output to `dist/`. Treat that directory as generated output; do not edit it manually.

## Repository conventions

- Application components and pages live in `src/`.
- Static public assets live in `public/`.
- Project-level build configuration is in the root.
- GitHub automation lives in `.github/workflows/`.

For contribution expectations, see [CONTRIBUTING.md](../CONTRIBUTING.md).
