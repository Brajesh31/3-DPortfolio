# 🏗️ Architecture and Technical Overview

This document describes the current high-level organization of 3-D Portfolio. It is intended to help contributors locate the right part of the codebase and understand the responsibilities of the major technologies before making changes.

## 📚 Table of Contents

- [🎯 Architecture at a Glance](#-architecture-at-a-glance)
- [🧰 Technology Responsibilities](#-technology-responsibilities)
- [🗂️ Source Layout](#️-source-layout)
- [🚦 Application Startup and Routing](#-application-startup-and-routing)
- [🧊 3D Rendering Layer](#-3d-rendering-layer)
- [🧩 Page and Component Layer](#-page-and-component-layer)
- [🎞️ Animation and Scrolling](#️-animation-and-scrolling)
- [✉️ External Integrations](#️-external-integrations)
- [📦 Build and Deployment Boundary](#-build-and-deployment-boundary)
- [🧭 Safe Change Guidance](#-safe-change-guidance)

## 🎯 Architecture at a Glance

The application is a client-side React single-page application bundled by Vite. React components compose the portfolio interface and route views. A Three.js scene provides the interactive 3D visual layer. Animation libraries support page transitions, scroll effects, and component motion. EmailJS provides the contact-form delivery integration.

The project has a frontend architecture. The inspected package and source files do not define a first-party backend service or server-side database. Do not describe client-side code as a protected backend or treat front-end navigation as an access-control boundary.

## 🧰 Technology Responsibilities

| Layer | Main technology | Responsibility |
|---|---|---|
| UI | React 18 | Components, state, effects, page composition |
| Development/build | Vite | Local server, module graph, production output |
| 3D engine | Three.js | Scene graph, geometry, materials, rendering |
| React 3D integration | React Three Fiber | Declarative Three.js scene composition |
| 3D utilities | Drei | Reusable helpers for React Three Fiber |
| Routing | React Router | Client-side path-to-view mapping |
| Motion | Framer Motion, GSAP, React Spring | Transition and animation behaviour |
| Scrolling | Lenis / scroll utilities | Smooth scrolling and scroll-linked experiences |
| UI styling | Bootstrap, Tailwind CSS, component styles | Layout, visual presentation, responsive rules |
| Contact delivery | EmailJS | Browser-side submission of contact form data |

The package manifest remains the authoritative list of dependencies and scripts. The table describes major responsibilities, not an exhaustive import map.

## 🗂️ Source Layout

### `src/App.jsx`
The application composition and route definitions are centralized here. The main landing experience tracks page state, scroll progress, section visibility, loading transitions, and the rendering of the 3D scene. The route tree also exposes individual portfolio pages.

### `src/Components/`
This directory contains shared interface components and scene-related components. The 3D view is divided across scene, model, and related helper components, while navigation and contact UI are represented as reusable components.

### `src/pages/`
Page-level components live here. These represent larger areas of the portfolio such as home, about, projects, skills, hire-me, and talk.

### `src/utils/`
Utility components and hooks support rendering compatibility and animation provider behaviour.

### `src/assets/`
Imported images and media used by the React bundle are stored here. Asset changes should consider file size, image dimensions, loading strategy, and rights to use the asset.

### `public/`
Static files in this directory are served directly. Public assets are not processed in the same way as imported source assets and are accessible by their deployed URL.

## 🚦 Application Startup and Routing

The React entrypoint mounts the application and provides the router context. The route tree in `App.jsx` maps paths to page components.

The landing view also renders a sequence of portfolio sections and coordinates the 3D scene with section state. When a visitor directly opens a nested route, the browser first requests that path from the hosting server. The server must be configured to serve the SPA entrypoint for paths handled by React Router. This is a hosting concern, not necessarily an application-code defect.

## 🧊 3D Rendering Layer

Three.js provides the rendering engine, React Three Fiber provides React-oriented scene composition, and Drei provides helper abstractions. Model and scene components are integrated with the landing experience.

When changing 3D components, consider:

- Model and texture download size.
- Geometry complexity and draw-call count.
- GPU memory and rendering performance.
- Mobile device capability and thermal constraints.
- Scene initialization and loading behaviour.
- Fallback content when WebGL is unavailable.
- Whether important content exists outside the canvas.

A scene that renders correctly on a desktop workstation may perform poorly on a low-powered mobile device. Test on more than one device class where practical.

## 🧩 Page and Component Layer

Page components should own page-level presentation and composition. Shared components should encapsulate reusable controls or visual elements. Before introducing a new component, check whether a similar component already exists and whether a new abstraction will make the code easier to maintain.

Keep visual content and semantic text available independently of the canvas wherever possible. Avoid relying on animation completion as the only way to expose important information.

## 🎞️ Animation and Scrolling

The dependency set includes more than one animation library. Existing usage may differ by component. When changing an animation, inspect the component's current mechanism rather than adding a second animation system for the same responsibility.

Review cleanup of event listeners, observers, intervals, and animation timelines. Long-running effects should not continue after a component is unmounted. Prefer predictable transitions and consider reduced-motion settings.

## ✉️ External Integrations

The contact form uses EmailJS from browser code. This means the browser communicates with the provider directly. Review the provider configuration, public identifiers, allowed origins, form parameters, and spam controls when changing that integration.

No application backend or database integration was identified in the inspected package and source paths. Do not invent API endpoints or environment variables in documentation.

## 📦 Build and Deployment Boundary

Vite creates the production output in `dist/`. That directory is generated and should not be used as the source of truth. Deployment automation uploads the generated bundle through an FTP action. A separate npm script uses `gh-pages`; review its target before use because it is not the same mechanism as FTP publishing.

## 🧭 Safe Change Guidance

Before modifying the application:

1. Identify the page or component responsible for the behaviour.
2. Trace imports and props to understand dependencies.
3. Check whether the behaviour is coordinated by the landing page or 3D scene.
4. Make the smallest change that solves the problem.
5. Check browser console and build output.
6. Test relevant viewport sizes and navigation routes.
7. Update documentation when the architecture or operational behaviour changes.

This document is descriptive. It should be updated when the real architecture changes, not used as an unverified specification for a future rewrite.
