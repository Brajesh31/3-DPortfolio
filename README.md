# 3-D Portfolio

This project is a React portfolio website built with Vite. It combines traditional portfolio content with interactive 3D presentation using React Three Fiber, Drei, Three.js, animation libraries, and responsive UI components.

## Features

- Interactive portfolio sections and navigation.
- Three.js and React Three Fiber scenes.
- Motion and scroll-based presentation effects.
- Responsive React UI with Bootstrap and icon libraries.
- Email/contact integration through EmailJS.
- Static production deployment through GitHub Pages.

## Requirements

- Node.js 18 or newer
- npm
- A modern browser with WebGL support for the 3D experience

## Local setup

```powershell
npm ci
npm run dev
```

Open the local URL printed by Vite, usually <http://localhost:5173>.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production bundle |
| `npm run preview` | Preview the production bundle locally |
| `npm run deploy` | Publish `dist/` through GitHub Pages |

`npm run deploy` runs the `predeploy` build first. Confirm the repository’s GitHub Pages configuration and deployment branch before publishing.

## Project structure

- `src/` contains React components, pages, styles, and 3D scene code.
- `public/` contains static assets served without bundling.
- `index.html` is the Vite HTML entrypoint.
- `dist/` is generated output and should not be edited manually.

## Configuration and privacy

EmailJS and other browser-side integrations may require public identifiers. Keep private provider secrets out of client-side code; anything shipped to the browser should be treated as public. Review contact-form validation, spam protection, and personal-data handling before production deployment.

## Validation

```powershell
npm ci
npm run build
npm run preview
```

Check the portfolio on desktop and mobile viewports, verify the 3D scene on a WebGL-capable browser, and test reduced-motion behavior where applicable.

## Contributing

Keep visual changes focused, avoid committing generated output or dependencies, and document new environment variables or deployment assumptions. See the repository’s contribution and security policies when this project is managed as part of the parent workspace.

Last updated: 2026-10-22 02:12 UTC
