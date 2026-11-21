# 🌌 3-D Portfolio

<p align="center">
  <strong>An interactive portfolio experience built with React, Vite, Three.js, and modern frontend technologies.</strong>
</p>

<p align="center">
  A portfolio should do more than list skills. This project combines structured professional information, project showcases, motion, and an interactive 3D presentation in one browser-based experience.
</p>

<p align="center">
  <a href="https://github.com/Brajesh31/3-DPortfolio">Repository</a> ·
  <a href="https://github.com/Brajesh31/3-DPortfolio/issues">Issues</a> ·
  <a href="https://github.com/Brajesh31/3-DPortfolio/discussions">Discussions</a> ·
  <a href="docs/README.md">Full Documentation</a>
</p>

---

## 📚 Table of Contents

1. [Project Overview](#-project-overview)
2. [Project Goals](#-project-goals)
3. [Features and Experience](#-features-and-experience)
4. [Technology Stack](#-technology-stack)
5. [Application Areas](#-application-areas)
6. [How the Application Works](#-how-the-application-works)
7. [Requirements](#-requirements)
8. [Installation and Local Development](#-installation-and-local-development)
9. [Available Commands](#-available-commands)
10. [Repository Structure](#-repository-structure)
11. [Configuration and Integrations](#-configuration-and-integrations)
12. [3D Development Notes](#-3d-development-notes)
13. [Responsive Design and Accessibility](#-responsive-design-and-accessibility)
14. [Performance Considerations](#-performance-considerations)
15. [Testing and Validation](#-testing-and-validation)
16. [Build and Deployment](#-build-and-deployment)
17. [Troubleshooting](#-troubleshooting)
18. [Security](#-security)
19. [Privacy and Data Handling](#-privacy-and-data-handling)
20. [Contributing](#-contributing)
21. [Project Roadmap](#-project-roadmap)
22. [Documentation Index](#-documentation-index)
23. [License](#-license)

---

## 👋 Project Overview

**3-D Portfolio** is a browser-based personal portfolio application developed with React and Vite. It presents professional information and selected work through conventional web content, route-based pages, animated transitions, and an interactive 3D visual layer.

The project uses Three.js through React Three Fiber and Drei for its 3D experience. It also includes a collection of motion and scrolling libraries, responsive UI styling, and an EmailJS-powered contact experience. The intent is to make the portfolio engaging without sacrificing the clarity and usability expected from a professional website.

The repository contains the frontend source code, reusable components, page-level components, imported assets, static public files, build configuration, and deployment automation. The documentation is written around the implementation present in this repository. It distinguishes existing functionality from possible future improvements and does not claim that unimplemented services or tests already exist.

### Project at a glance

| Area | Current implementation |
|---|---|
| Application type | Client-side single-page web application |
| UI framework | React 18 |
| Development and build | Vite |
| 3D rendering | Three.js, React Three Fiber, Drei |
| Navigation | React Router |
| Motion | Framer Motion, GSAP, React Spring |
| Scrolling | Lenis and related scroll utilities |
| Styling | Bootstrap, Tailwind CSS, component styles |
| Contact integration | EmailJS |
| Package manager | npm |
| Build output | `dist/` |
| Main deployment workflow | GitHub Actions with FTP deployment |
| Additional deployment script | `gh-pages` npm script |

---

## 🎯 Project Goals

The project is guided by a few practical goals:

1. **Present information clearly.** Visitors should be able to understand the portfolio, skills, projects, and contact options without needing to interpret a 3D scene.
2. **Create a memorable visual experience.** Three-dimensional visuals and motion should support the presentation rather than distract from the content.
3. **Keep the code approachable.** Components, pages, and utilities should remain understandable to contributors who are new to the repository.
4. **Work across screen sizes.** The experience should be reviewed on mobile, tablet, and desktop layouts.
5. **Treat performance as part of design.** 3D models, textures, animations, and media should be introduced with attention to loading and rendering cost.
6. **Handle visitor information responsibly.** Contact form data and provider configuration should be treated carefully.
7. **Document operational reality.** Setup, build, testing, and deployment instructions should match the scripts and workflows that actually exist.

---

## ✨ Features and Experience

### 🧊 Interactive 3D presentation

The application integrates Three.js scenes through React Three Fiber. Drei provides helper components and utilities for common 3D tasks. The scene is coordinated with the broader page experience.

WebGL support is required for the full 3D presentation. A browser or device with limited graphics capability may render the experience differently or fail to initialize the scene. Essential portfolio information should remain understandable outside the canvas.

### 🧭 Portfolio navigation and pages

The application uses React Router for client-side navigation. The inspected source includes portfolio areas such as:

- Home and landing experience
- About information
- Project showcase
- Skills presentation
- Contact experience
- Hire-me view
- Talk view

The precise content and route configuration are maintained in the application source. If routes are added, renamed, or removed, update the navigation, this README, and the relevant documentation together.

### 🎞️ Animation and scroll-based interaction

The dependency set includes Framer Motion, GSAP, React Spring, and Lenis. These libraries support different motion and scrolling responsibilities in the interface.

Animation should communicate hierarchy or provide useful feedback. Avoid adding effects solely for decoration when they increase CPU/GPU work, delay access to content, or make the page difficult to navigate.

### 🧑‍💻 Project showcase

The portfolio includes a project-focused area intended to present work with supporting information and links. When updating project content, check that titles, descriptions, images, technologies, and destinations are accurate and that external links lead to the intended resources.

### ✉️ Contact experience

The contact form integrates with EmailJS. It submits visitor-provided information through the configured provider service and template. Provider-side settings determine delivery, processing, retention, and other operational details.

Never place private EmailJS account credentials in browser code. Public browser identifiers are not a substitute for private credentials, and frontend validation is not a security boundary.

### 📱 Responsive interface

The UI uses responsive styling and viewport-aware presentation. Review the site at narrow and wide widths because 3D scenes, fixed elements, text, and animation can behave differently across devices.

---

## 🧰 Technology Stack

| Technology | Purpose |
|---|---|
| React 18 | Component-based UI and application state |
| Vite | Development server and production bundler |
| Three.js | 3D scene and rendering engine |
| React Three Fiber | Declarative React integration for Three.js |
| Drei | Helpers for React Three Fiber |
| React Router | Client-side route navigation |
| Framer Motion | UI motion and transitions |
| GSAP | Timeline and animation control |
| React Spring | Spring-based animation |
| Lenis | Smooth scrolling behaviour |
| Bootstrap | Layout and UI styling utilities |
| Tailwind CSS | Utility-first styling |
| EmailJS | Browser-side contact form delivery |
| npm | Dependency installation and scripts |

This table highlights major technologies, not every package in the lockfile. The package manifest and lockfile remain the authoritative references for exact dependency versions.

---

## 🧭 Application Areas

| Area | Responsibility | What to verify when editing |
|---|---|---|
| Landing experience | First impression, scene, and section flow | Loading, layout, 3D state, scroll behaviour |
| About | Professional and personal introduction | Content accuracy, heading hierarchy |
| Projects | Showcase of selected work | Project links, images, descriptions |
| Skills | Technical skills and capabilities | Accuracy and readable grouping |
| Contact | Visitor inquiry form | Validation, provider settings, feedback |
| Hire-me | Hiring or collaboration information | Clear call to action and working links |
| Talk | Conversation or contact-oriented view | Navigation and content consistency |

These descriptions are a guide to the current application areas. Inspect the corresponding page and component files before changing behaviour.

---

## 🏗️ How the Application Works

At a high level, the application follows this flow:

1. Vite serves the project during local development.
2. The React entrypoint mounts the application.
3. The application composition and router select the relevant page or view.
4. React components render content and shared UI.
5. The 3D layer uses Three.js through React Three Fiber where required.
6. Animation and scrolling utilities coordinate visual transitions.
7. The contact component communicates with EmailJS from the browser.
8. Vite creates a static production bundle in `dist/`.

The repository is a frontend application. The inspected project does not define a first-party backend API or database. Do not treat hidden frontend routes as authorization or put private data in the client bundle.

For a deeper explanation, read [Architecture and Technical Overview](docs/architecture.md).

---

## 💻 Requirements

Recommended baseline for local development:

- Node.js 18 or newer. The GitHub deployment workflow currently configures Node.js 22.
- npm, included with Node.js.
- Git.
- A modern browser.
- WebGL-capable hardware and browser support for the full 3D experience.
- A stable internet connection for installing dependencies and loading any externally hosted resources.

Check your installed versions:

```bash
node --version
npm --version
git --version
```

If the project or one of its dependencies requires a newer Node.js version, follow the version requirement reported by the package manager or build tool.

---

## 🚀 Installation and Local Development

### 1. Clone the repository

```bash
git clone https://github.com/Brajesh31/3-DPortfolio.git
cd 3-DPortfolio
```

### 2. Install dependencies

Use the committed npm lockfile for a reproducible installation:

```bash
npm ci
```

If installation fails, check the Node.js and npm versions, network connectivity, and the first meaningful error in the terminal output. Avoid deleting the lockfile as an initial troubleshooting step.

### 3. Start the development server

```bash
npm run dev
```

Vite prints the local address in the terminal. Open that address in a browser. The default is commonly `http://localhost:5173`, but the actual port may change if the default port is occupied.

### 4. Make and inspect changes

Edit the relevant source files and keep the development server running. Vite generally refreshes the browser when source modules change. Check the browser console as well as the terminal.

### 5. Create a production build

```bash
npm run build
```

The generated production files are placed in `dist/`. Do not edit this directory manually. Change the source files and rebuild instead.

### 6. Preview the production build

```bash
npm run preview
```

Use the local address printed by Vite to inspect the production output before deployment.

---

## 📜 Available Commands

The following commands are represented by the current npm scripts:

| Command | Purpose | Notes |
|---|---|---|
| `npm ci` | Install exact dependencies from the lockfile | Recommended for clean installs |
| `npm run dev` | Start the Vite development server | Uses the local development configuration |
| `npm run build` | Generate the production bundle | Output is written to `dist/` |
| `npm run preview` | Preview the production bundle locally | Useful before publishing |
| `npm run deploy` | Publish the generated bundle using `gh-pages` | Separate from the FTP workflow |

The `deploy` script runs the configured pre-deploy build step before publishing. Confirm GitHub Pages settings, the Vite base path, publishing branch, and target site before using it. The existence of this script does not mean it is the active production deployment path.

No dedicated unit-test or end-to-end-test command is currently documented in the inspected package scripts. Do not report test coverage or automated test results unless a test framework is added and the tests are actually run.

---

## 🗂️ Repository Structure

The following is a conceptual guide to the repository. File names and directory contents can evolve, so inspect the current tree before relying on a path in a script.

```text
3-DPortfolio/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── PULL_REQUEST_TEMPLATE/
│   ├── templates/
│   └── workflows/
├── docs/
│   ├── README.md
│   ├── getting-started.md
│   ├── architecture.md
│   ├── configuration.md
│   ├── deployment.md
│   ├── testing.md
│   ├── accessibility.md
│   ├── troubleshooting.md
│   └── roadmap.md
├── public/
├── src/
│   ├── Components/
│   ├── pages/
│   ├── utils/
│   └── assets/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.cjs
├── README.md
├── CONTRIBUTING.md
├── SECURITY.md
├── CODE_OF_CONDUCT.md
├── PRIVACY.md
├── SUPPORT.md
└── CHANGELOG.md
```

| Path | Responsibility |
|---|---|
| `src/` | React application source |
| `src/Components/` | Shared UI and scene-related components |
| `src/pages/` | Page-level components |
| `src/utils/` | Supporting utilities and hooks |
| `src/assets/` | Assets imported into the application bundle |
| `public/` | Static files served directly |
| `docs/` | Detailed project and maintainer documentation |
| `.github/workflows/` | GitHub Actions automation |
| `dist/` | Generated production output, not source |

---

## ⚙️ Configuration and Integrations

### Vite configuration

Vite controls local development and production bundling. Review `vite.config.js` before changing aliases, build output, base paths, or server behaviour.

### EmailJS

The contact form uses EmailJS from browser code. Verify service identifiers, template identifiers, parameter names, allowed origins, rate limits, and provider-side settings in the authorized EmailJS account.

Use synthetic test messages during development. Do not commit private provider credentials or real visitor submissions.

### GitHub Actions deployment secrets

The current FTP workflow expects:

| Secret | Purpose |
|---|---|
| `FTP_USERNAME` | FTP deployment account |
| `FTP_PASSWORD` | FTP deployment password |

Configure these under **Repository Settings → Secrets and variables → Actions**. Never write secret values into workflow files, source code, documentation, screenshots, or logs.

### Environment variables

Vite exposes variables prefixed with `VITE_` to client-side code. Treat them as public. Do not store passwords, private API keys, database credentials, or privileged tokens in these variables.

For a more detailed configuration guide, see [Configuration and Integrations](docs/configuration.md).

---

## 🧊 3D Development Notes

3D work can introduce performance and compatibility issues that ordinary UI changes do not. Before changing a scene:

- Identify the component responsible for the scene or model.
- Inspect how the scene is mounted and how state is passed to it.
- Check model dimensions, origin, scale, and camera placement.
- Review geometry complexity, material count, texture dimensions, and file size.
- Avoid loading large resources before they are needed.
- Check that animation loops and event listeners are cleaned up.
- Test with a lower-powered device where possible.
- Confirm that important page content remains available if WebGL fails.

A scene that works on one desktop GPU is not proof of acceptable performance on mobile hardware. Record the browser and device used when reporting a rendering problem.

---

## ♿ Responsive Design and Accessibility

Visual quality is not enough if visitors cannot use the site. Review:

- Keyboard navigation and visible focus.
- Meaningful names for links and buttons.
- Correct labels for form controls.
- Readable text and adequate contrast.
- Logical headings and page landmarks.
- Useful alternative text for informative images.
- Reduced-motion preferences.
- Zoom and narrow viewport behaviour.
- A usable experience when the 3D canvas is unavailable.

Use [ACCESSIBILITY.md](ACCESSIBILITY.md) for the project-wide expectations and [docs/accessibility.md](docs/accessibility.md) for a practical review process. These documents are guidance, not a claim of formal accessibility certification.

---

## ⚡ Performance Considerations

The 3D experience, animation libraries, images, fonts, and external integrations can all affect loading and runtime performance.

Practical review points:

1. Measure the production bundle rather than guessing its size.
2. Compress and appropriately size images and textures.
3. Avoid unnecessarily complex geometry and materials.
4. Reduce repeated state updates and expensive work in render loops.
5. Clean up observers, event listeners, and animation timelines.
6. Avoid blocking the initial page with nonessential media.
7. Test on mobile devices and slower networks.
8. Compare before-and-after measurements for performance changes.

Do not claim that the site is optimized or fast based only on a successful build. Measure the experience on representative devices.

---

## 🧪 Testing and Validation

### Minimum build validation

```bash
npm ci
npm run build
```

### Local production preview

```bash
npm run preview
```

### Manual smoke-test checklist

- [ ] Landing experience loads without a blocking error.
- [ ] Main navigation opens the expected pages or sections.
- [ ] About content is readable.
- [ ] Project cards and external project links work.
- [ ] Skills content renders correctly.
- [ ] Contact form fields can be completed.
- [ ] Contact form success and error states are understandable.
- [ ] Hire-me and Talk routes open.
- [ ] Browser back and forward navigation work.
- [ ] Nested routes work when opened directly on the deployed host.
- [ ] 3D scene loads in a supported browser.
- [ ] Page remains usable when WebGL is unavailable.
- [ ] Keyboard navigation and visible focus are checked.
- [ ] Mobile and tablet layouts are reviewed.
- [ ] Browser console and network requests are checked for unexpected failures.

The repository currently does not define a dedicated automated unit-test or E2E command in the inspected package scripts. A successful build is useful evidence, but it does not prove that every route, form, animation, or deployment behaviour works.

See [Testing and Quality Validation](docs/testing.md) for a fuller process.

---

## 🚚 Build and Deployment

### Existing FTP workflow

The repository includes a GitHub Actions deployment workflow at `.github/workflows/deploy.yml`. It is configured to run for pushes to `main`, sets up Node.js 22, installs dependencies, builds the application, and uploads the `dist/` output using an FTP deployment action.

Required Actions secrets:

- `FTP_USERNAME`
- `FTP_PASSWORD`

Check the workflow file for the current server and destination settings. Do not copy private values into this README.

### Separate GitHub Pages script

The npm manifest also includes a `gh-pages` deployment script. This is a separate publishing route. Confirm the Pages source, Vite base path, branch permissions, and intended production destination before running it.

Do not assume that the FTP workflow and GitHub Pages script publish to the same environment.

### Before deployment

- [ ] Confirm the correct commit is on `main`.
- [ ] Run `npm ci`.
- [ ] Run `npm run build`.
- [ ] Confirm the required Actions secrets exist.
- [ ] Verify the deployment account and destination.
- [ ] Check that the generated `dist/` output contains the expected assets.
- [ ] Confirm contact integration configuration.
- [ ] Confirm no credentials or private test data are included.

### After deployment

Open the live site and verify the homepage, routes, static assets, 3D scene, project links, contact flow, responsive layout, and browser console. Test direct navigation and refresh on nested routes because hosting rewrite configuration can differ from the local Vite server.

For detailed procedures, see [Deployment and Release Operations](docs/deployment.md).

---

## 🧯 Troubleshooting

| Problem | First checks |
|---|---|
| `npm ci` fails | Node/npm versions, lockfile, registry access, first error |
| Development server does not start | Dependency installation, port conflict, terminal output |
| Build fails | First compiler error, imports, syntax, package compatibility |
| 3D scene is blank | WebGL support, console errors, model request, GPU capability |
| Model or image is missing | Network request, asset path, filename case, build output |
| Nested route fails on refresh | Hosting rewrite/fallback configuration |
| Contact form fails | EmailJS service/template, field mapping, provider limits |
| FTP deployment fails | Actions run logs, secret presence, account and destination permissions |

For detailed investigation steps, use [Troubleshooting Guide](docs/troubleshooting.md). Never paste secret values or private visitor messages into a public issue.

---

## 🔐 Security

Security issues should be reported privately. Do not publish credentials, exploit details, or sensitive personal data in public issues or discussions.

Important rules:

- Treat all browser-delivered configuration as public.
- Keep FTP credentials in GitHub Actions secrets.
- Do not put private credentials in `VITE_` variables.
- Rotate credentials immediately if exposed.
- Review dependencies and third-party GitHub Actions.
- Use synthetic data when testing the contact form.
- Do not treat client-side routing as authorization.

Read [SECURITY.md](SECURITY.md) before reporting a vulnerability.

---

## 🛡️ Privacy and Data Handling

The contact form transmits visitor-provided information through EmailJS. The live provider account and hosting environment determine how that information is processed and retained. The repository's [PRIVACY.md](PRIVACY.md) describes the known integration points and the checks required before making a public privacy statement.

The operator of the deployed site is responsible for ensuring that any visitor-facing privacy notice reflects the actual production configuration and applicable legal requirements.

---

## 🤝 Contributing

Contributions that improve usability, correctness, accessibility, performance, maintainability, and documentation are welcome.

Before making a substantial change:

1. Check existing issues and discussions.
2. Describe the problem and intended outcome.
3. Keep the implementation focused.
4. Avoid unrelated formatting changes.
5. Run the relevant build and manual checks.
6. Update documentation when behaviour or setup changes.
7. Provide screenshots or recordings for significant visual changes.
8. Never commit credentials, generated output, or private visitor data.

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the complete contribution workflow and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community expectations.

---

## 🗺️ Project Roadmap

Potential maintenance areas include:

- Improving keyboard and screen-reader support across all routes.
- Reviewing reduced-motion behaviour in animated sections.
- Measuring 3D loading and rendering performance on mobile hardware.
- Improving resilience when WebGL is unavailable.
- Adding an appropriate automated test strategy.
- Improving asset loading and optimization.
- Reviewing EmailJS abuse controls and privacy configuration.
- Keeping deployment and setup documentation current.

These are candidate areas, not promises that the work is already implemented. See [docs/roadmap.md](docs/roadmap.md) for the planning principles.

---

## 📖 Documentation Index

| Document | Purpose |
|---|---|
| [Documentation home](docs/README.md) | Complete documentation navigation |
| [Getting started](docs/getting-started.md) | Installation and first local run |
| [Architecture](docs/architecture.md) | Application structure and technology responsibilities |
| [Configuration](docs/configuration.md) | EmailJS, Vite, and deployment settings |
| [Deployment](docs/deployment.md) | Build, FTP workflow, GitHub Pages distinction, verification |
| [Testing](docs/testing.md) | Automated checks and manual validation |
| [Accessibility](docs/accessibility.md) | Practical accessibility review |
| [Troubleshooting](docs/troubleshooting.md) | Common development and deployment problems |
| [Roadmap](docs/roadmap.md) | Candidate maintenance priorities |
| [Contributing](CONTRIBUTING.md) | Contribution process and review expectations |
| [Security](SECURITY.md) | Private vulnerability reporting and security guidance |
| [Code of Conduct](CODE_OF_CONDUCT.md) | Behaviour and enforcement expectations |
| [Privacy](PRIVACY.md) | Known data flows and privacy review |
| [Support](SUPPORT.md) | Where and how to ask for help |
| [Changelog](CHANGELOG.md) | Meaningful project changes |

---

## 📄 License

This repository includes a `LICENSE` file. Review that file for the exact license terms before copying, modifying, or redistributing the project.

---

<p align="center">
  <strong>Built to bring code, creativity, and 3D experiences together.</strong>
</p>

Last updated: 2026-11-21 00:25 UTC
