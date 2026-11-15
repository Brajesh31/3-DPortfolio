# 🗺️ Maintenance Roadmap

This roadmap records candidate areas for future quality work. It is a planning aid, not a commitment to ship every item or a promise of a particular release date. Priorities should be discussed and tracked through GitHub issues.

## 📚 Table of Contents

- [🎯 Prioritization Principles](#-prioritization-principles)
- [♿ Accessibility](#-accessibility)
- [⚡ Performance and 3D Resilience](#-performance-and-3d-resilience)
- [🧪 Testing and Reliability](#-testing-and-reliability)
- [🔐 Security and Privacy](#-security-and-privacy)
- [📚 Documentation Quality](#-documentation-quality)
- [📌 How to Propose Work](#-how-to-propose-work)

## 🎯 Prioritization Principles

Prioritize changes that improve visitor experience, reduce operational risk, address accessibility barriers, or make the project easier to maintain. Prefer measurable improvements over cosmetic changes that add complexity without a clear benefit.

A roadmap item should have an owner or an issue for discussion before it is treated as active work.

## ♿ Accessibility

Potential work:
- Audit keyboard paths across all routes.
- Verify focus order and focus visibility with fixed navigation and overlays.
- Review screen-reader names for interactive controls.
- Improve contact form error and success announcements.
- Validate reduced-motion behaviour.
- Test zoom and mobile reflow.

## ⚡ Performance and 3D Resilience

Potential work:
- Measure initial JavaScript and asset sizes.
- Profile 3D scene performance on mobile hardware.
- Review texture dimensions and model loading.
- Consider a useful fallback when WebGL is unavailable.
- Avoid unnecessary continuous animation and event work.
- Track layout shifts and long tasks during initial rendering.

Performance changes should include before-and-after evidence from representative devices.

## 🧪 Testing and Reliability

Potential work:
- Define a unit testing approach for isolated utilities and components.
- Introduce browser-based end-to-end tests for critical routes.
- Add accessibility checks to the quality process.
- Add link and documentation validation.
- Document supported browsers and deployment smoke tests.

Do not add automated workflows until the required test commands and repository permissions are configured.

## 🔐 Security and Privacy

Potential work:
- Review EmailJS provider configuration and abuse controls.
- Confirm FTP credentials are scoped and rotated appropriately.
- Review third-party GitHub Actions and their permissions.
- Monitor npm dependency advisories.
- Ensure the public privacy notice reflects the actual live environment.

## 📚 Documentation Quality

Keep README, setup, architecture, configuration, accessibility, testing, and deployment documents aligned with source changes. Remove outdated instructions rather than layering contradictory guidance over them.

## 📌 How to Propose Work

Open an issue with the user or maintainer problem, proposed outcome, acceptance criteria, risks, and validation approach. For broad design or architecture proposals, start with a discussion where enabled. No roadmap item should be represented as shipped until the implementation is merged and verified.
