# ♿ Accessibility Guidelines

Accessibility is part of product quality. This portfolio combines conventional web content with animated transitions and a 3D presentation, so it must remain understandable and usable for people who navigate by keyboard, use assistive technologies, prefer reduced motion, or cannot use WebGL.

This document defines the engineering expectations and review process. It does **not** claim that the current implementation is certified or fully conformant with WCAG.

## 📚 Table of Contents

- [🎯 Accessibility Goal](#-accessibility-goal)
- [📐 Standards Reference](#-standards-reference)
- [⌨️ Keyboard Interaction](#️-keyboard-interaction)
- [🔎 Semantics and Screen Readers](#-semantics-and-screen-readers)
- [🎨 Contrast and Visual Design](#-contrast-and-visual-design)
- [📝 Forms and Feedback](#-forms-and-feedback)
- [🖼️ Images and 3D Content](#️-images-and-3d-content)
- [🎞️ Animation and Motion](#-animation-and-motion)
- [📱 Responsive and Zoom Behaviour](#-responsive-and-zoom-behaviour)
- [🧪 Testing Procedure](#-testing-procedure)
- [🐛 Reporting an Accessibility Barrier](#-reporting-an-accessibility-barrier)

## 🎯 Accessibility Goal

The goal is for visitors to access the portfolio's essential content and actions without depending on a single sensory or interaction method. The 3D experience should improve presentation without becoming a gate that prevents visitors from reading about the work, opening project links, or reaching the contact channel.

Accessibility is not a one-time audit. Changes to navigation, animation, forms, assets, and layout can introduce new barriers. Review relevant checks whenever an affected component changes.

## 📐 Standards Reference

Use WCAG 2.2 Level AA as the primary reference target where applicable. Apply the criteria to the actual user interface and its content rather than treating a checklist as proof of conformance.

Important areas include:

- Perceivable text alternatives and information structure.
- Operable keyboard interactions and sufficient time.
- Understandable labels, instructions, and error feedback.
- Robust semantics and compatibility with assistive technologies.
- Focus visibility, focus order, target size, and motion considerations.

## ⌨️ Keyboard Interaction

All interactive elements should be reachable and usable with a keyboard.

Review the following:

1. Press Tab from the top of each route and observe the focus order.
2. Use Shift+Tab to navigate backwards.
3. Use Enter or Space to activate controls according to their semantics.
4. Confirm that focus indicators are visible against the surrounding background.
5. Ensure menus, overlays, and dialogs do not trap users unexpectedly.
6. Confirm that focus is not hidden behind fixed navigation or overlays.
7. Verify that page transitions do not unexpectedly reset or lose focus.

Use native links for navigation and native buttons for actions. Do not use clickable generic containers when a semantic control is available.

## 🔎 Semantics and Screen Readers

Use meaningful page headings, landmarks, link text, labels, and accessible names. A screen-reader user should understand the destination or purpose of an action without relying on its visual placement.

For portfolio imagery, distinguish informative images from decoration. An informative project image should have a concise alternative describing the relevant content. Decorative imagery should not repeat nearby text unnecessarily.

The visual 3D canvas should not be the only place where a meaningful name, role, or portfolio detail is exposed. Provide equivalent information in semantic page content.

## 🎨 Contrast and Visual Design

Check text, controls, borders, focus outlines, and hover states against their actual backgrounds. Animated gradients, images, and dark translucent panels can produce contrast that varies across the page.

Do not rely on colour alone to show active navigation, errors, success, or selected states. Pair colour with text, iconography, shape, or another perceivable indication.

## 📝 Forms and Feedback

Contact forms should have:

- Persistent labels programmatically associated with each field.
- Clear indication of required fields.
- Useful input types and autocomplete attributes where appropriate.
- Errors explained in text, not just by changing border colour.
- Status messages announced to assistive technology when appropriate.
- Focus management that does not disorient users after submission.

Avoid clearing entered form data when an error occurs unless the user explicitly chooses to reset it.

## 🖼️ Images and 3D Content

Images used to communicate project identity or outcomes need meaningful alternative text. Images that are purely decorative should not add noise to the accessibility tree.

For 3D scenes:

- Keep important content and navigation outside the canvas.
- Avoid relying on colour or animation alone to communicate meaning.
- Consider a meaningful fallback when WebGL cannot initialize.
- Prevent the canvas from blocking keyboard access to nearby content.
- Review GPU-heavy animation on lower-powered devices.

## 🎞️ Animation and Motion

The portfolio uses motion and scroll effects. Review transitions for vestibular impact and ensure non-essential movement can be reduced where feasible.

- Respect the operating system's reduced-motion preference.
- Avoid unnecessary parallax or large continuous movement.
- Do not make content available only after an animation completes.
- Avoid flashing effects.
- Ensure loading states provide understandable feedback without requiring users to watch a timed animation.

## 📱 Responsive and Zoom Behaviour

Check at narrow mobile widths, tablet widths, and desktop sizes. At 200% browser zoom, essential text and controls should remain available without horizontal scrolling for ordinary content, except where a layout genuinely requires two-dimensional presentation.

Ensure touch targets are usable and fixed elements do not cover important content or focus indicators.

## 🧪 Testing Procedure

Use a combination of automated checks and manual review. Automated scanners can detect some issues but cannot determine whether a description is meaningful or whether a complex interaction makes sense.

Suggested manual test sequence:

- [ ] Complete the home page with keyboard only.
- [ ] Visit each route directly and through navigation.
- [ ] Inspect heading hierarchy and landmark structure.
- [ ] Test contact form labels and validation feedback.
- [ ] Use a screen reader on navigation, project links, and form status.
- [ ] Review contrast for normal text, large text, and UI controls.
- [ ] Zoom to 200%.
- [ ] Enable reduced motion and re-check animated sections.
- [ ] Test a browser or device without WebGL support.

Record the browser, OS, viewport, assistive technology, steps, expected behaviour, and actual behaviour. Do not include sensitive health or personal information in an issue.

## 🐛 Reporting an Accessibility Barrier

Use the Accessibility issue template. Explain what task is affected and how it can be reproduced. Include a short screen recording or screenshot when it adds useful context, ensuring it contains no private information.

Accessibility reports are product-quality reports. They should be handled with the same care as functional defects.
