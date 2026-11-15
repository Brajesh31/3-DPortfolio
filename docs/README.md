# 🌌 3-D Portfolio

> An interactive, 3D-enabled personal portfolio built with React, Vite, and Three.js technologies.

<p align="center">
  <strong>Explore the work, skills, projects, and contact experience of Brajesh Kumar.</strong>
</p>

---

## 📚 Table of Contents

- [👋 About the Project](#-about-the-project)
- [✨ Experience and Features](#-experience-and-features)
- [🧰 Technology Stack](#-technology-stack)
- [🖥️ Requirements](#️-requirements)
- [🚀 Getting Started](#-getting-started)
- [📦 Available Commands](#-available-commands)
- [🗂️ Repository Structure](#️-repository-structure)
- [🧭 Application Areas](#-application-areas)
- [⚙️ Configuration and Integrations](#️-configuration-and-integrations)
- [🌐 Deployment](#-deployment)
- [🧪 Validation and Quality](#-validation-and-quality)
- [♿ Accessibility](#-accessibility)
- [🔐 Security and Privacy](#-security-and-privacy)
- [🤝 Contributing](#-contributing)
- [🛠️ Troubleshooting](#️-troubleshooting)
- [🗺️ Roadmap](#️-roadmap)
- [📄 License](#-license)

## 👋 About the Project

3-D Portfolio is a browser-based portfolio experience that presents professional information and selected work through a combination of conventional web content, animated transitions, and interactive 3D visuals. The application is built as a React single-page application and uses Vite for development and production bundling.

The 3D layer is implemented with Three.js through React Three Fiber and Drei. The page experience also uses animation and scrolling libraries to coordinate content transitions and reveal effects. The portfolio remains a web application: the 3D presentation is an enhancement to the content, not a replacement for navigation or readable information.

This repository contains the application source, public assets, imported media, build configuration, and GitHub workflows. Documentation describes the implementation that exists in this repository. It does not assume features or services that have not been verified.

## ✨ Experience and Features

### 🧊 Interactive 3D presentation
The application integrates Three.js scenes through React Three Fiber. The landing experience coordinates a 3D model and scene components with page state and scroll position. WebGL support is required for the full visual experience.

### 🧭 Portfolio navigation and sections
The application includes portfolio areas for the home experience, about information, projects, skills, and contact. Additional route components include hire-me and talk views. React Router is used for route-level navigation.

### 🎞️ Motion and scroll effects
The dependency set includes Framer Motion, GSAP, React Spring, and Lenis. These libraries support animation and scrolling experiences in different parts of the interface.

### 🧑‍💻 Project showcase
The projects page presents a broad collection of work with project descriptions, technology labels, visual assets, and links to source repositories or demos where configured.

### ✉️ Contact experience
The contact component integrates with EmailJS. It submits visitor-provided contact details through a configured EmailJS service and template. The exact processing and retention behaviour depends on the active provider account and settings.

### 📱 Responsive layout
The source contains viewport-aware layout behaviour. Review the site on desktop, tablet, and mobile because 3D scenes and animated layouts can have different resource and interaction constraints on smaller devices.

## 🧰 Technology Stack

| Technology | Role in this repository |
|---|---|
| React 18 | Component-based user interface |
| Vite | Development server and production build |
| Three.js | 3D rendering engine |
| React Three Fiber | React renderer for Three.js |
| Drei | Helpers and abstractions for React Three Fiber |
| React Router | Client-side route navigation |
| Framer Motion | Motion and transition effects |
| GSAP | Timeline and scroll-driven animation support |
| React Spring | Spring-based animation |
| Lenis | Smooth-scroll support |
| Bootstrap / React Bootstrap | UI styling and components |
| Tailwind CSS | Utility-oriented styling |
| React Icons / Font Awesome | Icon assets |
| EmailJS | Browser-side contact form delivery |

The package manifest is the source of truth for dependency versions. This table describes the principal technologies, not every transitive dependency.

## 🖥️ Requirements

- **Node.js:** version 18 or newer is the documented baseline.
- **npm:** use npm with the committed `package-lock.json`.
- **Browser:** a modern browser with JavaScript enabled.
- **WebGL:** required for the interactive 3D presentation.
- **Network access:** needed to install dependencies and for any configured third-party integrations.

Use the Node.js version supported by the installed dependency set and deployment environment. The existing deployment workflow uses Node.js 22.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Brajesh31/3-DPortfolio.git
cd 3-DPortfolio
```

### 2. Install dependencies

```bash
npm ci
```

Use `npm ci` for reproducible installs from the committed lockfile. If installation fails, verify Node.js and npm versions before changing dependency declarations or regenerating the lockfile.

### 3. Start the development server

```bash
npm run dev
```

Vite prints the local development URL in the terminal. The default is commonly `http://localhost:5173`, but use the URL actually printed by Vite.

### 4. Create a production build

```bash
npm run build
```

The generated static site is written to `dist/`. This directory is build output. Do not edit files inside it by hand because the next build will regenerate them.

### 5. Preview the production build

```bash
npm run preview
```

Use the preview server to inspect the production bundle before deployment.

## 📦 Available Commands

| Command | What it does | When to use it |
|---|---|---|
| `npm ci` | Installs the exact dependency tree from the lockfile | Fresh setup and CI |
| `npm run dev` | Starts the Vite development server | Local development |
| `npm run build` | Creates the production bundle | Before release or deployment |
| `npm run preview` | Serves the production bundle locally | Production smoke testing |
| `npm run deploy` | Runs the configured gh-pages deployment script after its predeploy build | Only when GitHub Pages is the intended target |

The repository also has a separate GitHub Actions FTP deployment workflow. The `npm run deploy` command and FTP workflow are different deployment paths. Review [Deployment](docs/deployment.md) before using either.

## 🗂️ Repository Structure

```text
3-DPortfolio/
├── .github/
│   ├── ISSUE_TEMPLATE/       # Structured issue forms and templates
│   ├── PULL_REQUEST_TEMPLATE/# Pull request templates
│   ├── DISCUSSION_TEMPLATE/  # Discussion forms
│   ├── templates/            # Reusable Markdown templates
│   ├── workflows/            # Existing GitHub Actions workflows
│   └── CODEOWNERS
├── docs/                     # Project-specific technical documentation
├── public/                   # Public static assets
├── src/
│   ├── Components/            # Shared UI and 3D scene components
│   ├── pages/                 # Page-level React components
│   ├── utils/                 # Rendering and animation helpers
│   ├── assets/                # Imported project and certificate media
│   ├── App.jsx                # Main route tree and page orchestration
│   └── main.jsx               # Application entrypoint
├── .editorconfig
├── .gitattributes
├── LICENSE
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── ACCESSIBILITY.md
├── PRIVACY.md
├── SUPPORT.md
├── CHANGELOG.md
├── CITATION.cff
├── package.json
├── package-lock.json
├── vite.config.js
└── tailwind.config.js
```

The structure above highlights key locations and documentation added for repository maintainability. It is not an exhaustive listing of every asset file.

## 🧭 Application Areas

| Area | Purpose |
|---|---|
| Home | Main introduction and landing presentation |
| About | Personal and professional background |
| Projects | Project portfolio and related links |
| Skills | Technology and capability presentation |
| Contact | Contact form and communication details |
| Hire Me | Hiring-oriented route |
| Talk | Conversation/contact-oriented route |

Navigation, route availability, and actual content are defined in the React source. When updating documentation after a future UI change, verify the corresponding components before changing this table.

## ⚙️ Configuration and Integrations

### EmailJS
The contact form uses EmailJS browser integration. Public client identifiers are visible in the browser and should never be confused with private account credentials. Verify the provider service, template, allowed origins, spam controls, and privacy disclosures in the EmailJS account.

### GitHub Actions deployment
The existing FTP deployment workflow expects repository Actions secrets named `FTP_USERNAME` and `FTP_PASSWORD`. Do not add their values to source files, issue descriptions, workflow logs, or documentation.

### Vite configuration
Vite configuration and project scripts are defined in the repository root. Any future Vite environment variable prefixed with `VITE_` is bundled for client-side use and must be considered public.

More details: [Configuration and Secrets](docs/configuration.md).

## 🌐 Deployment

The repository contains a GitHub Actions workflow that builds the project and uploads `dist/` using an FTP deployment action. It runs on pushes to the `main` branch and expects the FTP secrets described above.

The package also contains a gh-pages deployment script. These methods are separate and must not be assumed to target the same hosting platform.

Read the [Deployment Guide](docs/deployment.md) and confirm the target host, credentials, deployment path, and route rewrite requirements before publishing.

## 🧪 Validation and Quality

At minimum, validate the production build:

```bash
npm ci
npm run build
npm run preview
```

Then manually check navigation, all portfolio sections, nested routes, image loading, the 3D scene, contact form behaviour, browser console output, and responsive layouts.

The package manifest does not currently expose a dedicated unit-test or end-to-end-test script. Do not interpret a successful build as proof that every user journey has been tested. See [Testing and Validation](docs/testing.md).

## ♿ Accessibility

Accessibility is a continuing engineering responsibility. Review keyboard navigation, visible focus, semantic structure, labels, contrast, screen-reader announcements, zoom, and reduced-motion behaviour. The presence of animation and WebGL makes it especially important that essential information remains available through conventional page content.

See [Accessibility](ACCESSIBILITY.md) for the project's review expectations.

## 🔐 Security and Privacy

- Never commit passwords, private API keys, access tokens, or FTP credentials.
- Treat all browser-delivered configuration as public.
- Review EmailJS form handling and spam protection.
- Keep dependencies maintained and review security advisories.
- Do not post security vulnerabilities in public issues.
- Explain actual personal-data processing before operating the contact form publicly.

Read [SECURITY.md](SECURITY.md) and [PRIVACY.md](PRIVACY.md) before changing integrations or deployment credentials.

## 🤝 Contributing

Contributions should be focused, understandable, and validated. Before starting substantial work, open an issue to discuss the proposal. Follow the existing project conventions and include screenshots for visible UI changes.

See [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and the templates under `.github/`.

## 🛠️ Troubleshooting

Common guidance is collected in [Troubleshooting](docs/troubleshooting.md). For installation or rendering problems, include the runtime, browser, viewport, reproduction steps, and relevant non-sensitive logs.

## 🗺️ Roadmap

Potential maintenance areas include improving accessibility, validating reduced-motion handling, documenting browser support, strengthening form abuse prevention, improving WebGL fallback behaviour, and adding automated testing if an appropriate test framework is introduced.

See [Roadmap](docs/roadmap.md). Roadmap items are proposals, not delivery commitments.

## 📄 License

This repository includes the MIT License. Review the [LICENSE](LICENSE) file for the exact terms. The license does not remove third-party license obligations for dependencies, media, or assets that may have separate rights.

---

<p align="center">
  Built and maintained by <strong>Brajesh Kumar</strong>
</p>
