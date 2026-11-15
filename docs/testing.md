# Testing and Validation

The package manifest currently defines development, build, preview, and deploy scripts. It does not define a dedicated automated unit or end-to-end test command.

## Baseline validation

```bash
npm ci
npm run build
npm run preview
```

## Manual smoke test

- Open the home page and allow the initial loading experience to complete.
- Navigate through the main portfolio sections.
- Open the hire-me and talk routes.
- Open project, skills, about, and contact views.
- Check internal navigation and browser refresh on nested routes in the intended hosting environment.
- Test desktop, tablet, and mobile widths.
- Verify the 3D experience in a WebGL-capable browser.
- Inspect console errors and failed network requests.
- Test the contact form only with an authorized test configuration.
- Check keyboard navigation, focus, and reduced-motion settings.

## Reporting results

Include the command executed, Node.js and npm versions, browser, operating system, relevant non-sensitive logs, and whether the issue reproduces on the current default branch.

Do not claim tests passed unless they were actually run.
