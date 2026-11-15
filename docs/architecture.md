# Project Architecture

## Technology

The inspected package manifest identifies the following primary technologies:

- React 18 and React DOM for the application interface.
- Vite for local development and production bundling.
- Three.js, React Three Fiber, and Drei for 3D rendering.
- React Router for page routes.
- Framer Motion, GSAP, React Spring, and Lenis for animation and scrolling effects.
- Bootstrap, React Bootstrap, Tailwind CSS, and React Icons / Font Awesome for UI styling and icons.
- EmailJS for contact-form delivery.

## High-level structure

| Location | Responsibility |
| --- | --- |
| `src/App.jsx` | Main routing, shared page composition, loading and 3D scene orchestration |
| `src/Components/` | Reusable UI and 3D scene components |
| `src/pages/` | Portfolio page-level components |
| `src/utils/` | Rendering and animation compatibility helpers |
| `src/assets/` | Imported portfolio images and other bundled assets |
| `public/` | Static files served directly |
| `.github/workflows/` | Existing automation and deployment workflows |

## Runtime flow

Vite serves the React entrypoint. The application mounts its routing tree and renders portfolio pages and shared components. The landing experience coordinates scroll state, section visibility, transitions, and a Three.js scene. Individual pages render portfolio content such as the home, about, projects, skills, contact, hire-me, and talk views.

## External services

The contact component integrates with EmailJS. Deployment automation includes an FTP action that publishes the generated `dist/` directory to a configured hosting destination.

This document is descriptive. It does not prescribe or introduce a new architecture.
