# 🧪 Testing and Quality Validation

This guide describes a practical test process for the current repository. The package manifest presently provides development, build, preview, and deployment scripts, but does not expose a dedicated unit-test or end-to-end-test command.

## 📚 Table of Contents

- [🎯 Testing Strategy](#-testing-strategy)
- [⚙️ Available Automated Checks](#️-available-automated-checks)
- [🧭 Manual Smoke Testing](#-manual-smoke-testing)
- [🧊 3D Experience Testing](#-3d-experience-testing)
- [📱 Responsive Testing](#-responsive-testing)
- [♿ Accessibility Testing](#-accessibility-testing)
- [✉️ Contact Form Testing](#️-contact-form-testing)
- [📋 Recording Test Results](#-recording-test-results)
- [🚫 What a Build Does Not Prove](#-what-a-build-does-not-prove)

## 🎯 Testing Strategy

Testing should provide evidence that a change works and has not broken nearby functionality. Use a layered process: install validation, production build, local preview, targeted manual testing, and device or browser checks relevant to the change.

The appropriate test depth depends on risk. A documentation-only edit needs link and formatting review. A 3D scene change needs browser rendering and performance checks. A routing change needs direct URL and refresh testing on the hosting platform.

## ⚙️ Available Automated Checks

The current package scripts include:

| Command | Purpose |
|---|---|
| `npm ci` | Reproducible dependency install |
| `npm run build` | Production bundle creation |
| `npm run preview` | Serve the production bundle locally |

Baseline validation:

```bash
npm ci
npm run build
npm run preview
```

There is no dedicated test script listed in the inspected package manifest. Do not report unit-test, integration-test, E2E-test, or coverage results unless such tests are added and actually run.

## 🧭 Manual Smoke Testing

After opening the application in a browser, check:

- [ ] Landing experience completes its loading state.
- [ ] Main navigation leads to the expected portfolio sections.
- [ ] About content renders.
- [ ] Projects list and project links work.
- [ ] Skills content renders.
- [ ] Contact form is visible and its fields can be used.
- [ ] Hire-me route opens.
- [ ] Talk route opens.
- [ ] Browser back and forward navigation behave as expected.
- [ ] Direct route entry and browser refresh are checked on the deployment host.
- [ ] No unexpected console errors appear.

Do not submit real personal data while testing a live contact form. Use an authorized test address and synthetic message content.

## 🧊 3D Experience Testing

3D rendering relies on browser and device graphics capabilities. Validate:

- Scene initialization and model loading.
- Correct model placement and scale across viewport sizes.
- Scroll and section transitions.
- Behaviour when the browser reports WebGL errors.
- Performance on a lower-powered device.
- Whether page content and navigation remain usable if the canvas fails.

Record device and browser details. A scene that works on one desktop GPU may not work reliably on every mobile device.

## 📱 Responsive Testing

Test at representative mobile, tablet, and desktop widths. Look for:

- Horizontal overflow.
- Overlapping fixed elements.
- Text clipped by animated containers.
- Project cards that become difficult to scan.
- Navigation controls that are too small or too close together.
- 3D models obscuring content.
- Loading overlays that cover interactive controls.

Use real devices when possible. Browser emulation is useful but does not fully reproduce touch interaction or device GPU constraints.

## ♿ Accessibility Testing

Use the review sequence in [Accessibility](accessibility.md). At minimum:

- Navigate the core site by keyboard.
- Inspect focus visibility and focus order.
- Check form labels and status feedback.
- Check heading structure and link names.
- Use a screen reader for major navigation and contact flow.
- Review colour contrast and zoom.
- Enable reduced motion and inspect essential content.

Automated accessibility tools can find some issues but cannot replace manual review.

## ✉️ Contact Form Testing

The form uses EmailJS and has provider-side dependencies. Test with a controlled account configuration. Verify that the expected fields are submitted and the correct success/error states are shown.

Do not expose EmailJS account credentials, provider dashboard screenshots, real message content, or recipient data in public reports.

## 📋 Recording Test Results

A useful test report includes:

| Field | Example of useful information |
|---|---|
| Commit | Branch or commit SHA tested |
| Environment | OS and device type |
| Runtime | Node.js and npm versions for build testing |
| Browser | Name and version |
| Viewport | Approximate width and height |
| Steps | Exact reproduction sequence |
| Expected | Intended outcome |
| Actual | Observed outcome |
| Evidence | Sanitized logs or screenshots |

State clearly which checks were run and which were not.

## 🚫 What a Build Does Not Prove

A successful Vite build does not prove:

- Every route works on the deployed host.
- EmailJS has valid provider configuration.
- All assets load in production.
- 3D performance is acceptable on mobile.
- Keyboard and screen-reader experiences are correct.
- No runtime errors occur after the page loads.

Use the build as one validation layer, not as a complete quality certification.
