# ♿ Accessibility Review and Testing Guide

This guide provides a practical way to review accessibility in the 3-D Portfolio application. It complements the project-wide expectations in [ACCESSIBILITY.md](../ACCESSIBILITY.md).

The application combines route-based content, animated components, a WebGL canvas, navigation controls, images, and a contact form. These elements can introduce barriers if they are not designed and tested carefully. Accessibility review should be part of normal implementation and release work, not a final cosmetic check.

This document is a review guide. It does not claim that the application conforms to WCAG or has received an independent accessibility audit.

## 📚 Table of Contents

- [Accessibility Objectives](#-accessibility-objectives)
- [Review Scope](#-review-scope)
- [Keyboard Navigation](#-keyboard-navigation)
- [Semantic Structure and Headings](#-semantic-structure-and-headings)
- [Links and Interactive Controls](#-links-and-interactive-controls)
- [Forms and Validation](#-forms-and-validation)
- [Images and 3D Content](#-images-and-3d-content)
- [Motion and Animation](#-motion-and-animation)
- [Colour, Contrast, and Typography](#-colour-contrast-and-typography)
- [Responsive Layout and Zoom](#-responsive-layout-and-zoom)
- [Screen Reader Review](#-screen-reader-review)
- [Testing Workflow](#-testing-workflow)
- [Issue Reporting Template](#-issue-reporting-template)
- [Release Checklist](#-release-checklist)
- [Further Reading](#-further-reading)

## 🎯 Accessibility Objectives

The portfolio should aim to make its core information and actions perceivable, operable, understandable, and robust.

Practical objectives include:
- Visitors can understand the site's purpose without relying on animation or 3D rendering.
- Navigation and primary actions can be operated using a keyboard.
- Interactive controls have meaningful accessible names.
- Form fields have labels and understandable error and success feedback.
- Text remains readable at common zoom levels and narrow viewport widths.
- Motion does not prevent visitors from reading or operating the site.
- Important information remains available when WebGL is unsupported or disabled.

## 🧭 Review Scope

Prioritize these areas:

| Area | Review focus |
|---|---|
| Navigation | Keyboard access, focus order, current-page indication |
| Landing experience | Loading state, animation timing, 3D fallback |
| About and skills | Heading hierarchy, readable text, meaningful grouping |
| Project showcase | Link purpose, image alternatives, card interaction |
| Contact form | Labels, instructions, validation, status messages |
| Hire-me and Talk routes | Clear page titles and actionable links |
| Overlays and transitions | Focus management, motion, content visibility |
| Responsive layout | Reflow, zoom, touch target spacing |

## ⌨️ Keyboard Navigation

Test the main user journey without a mouse.

Check:
- Tab moves through interactive elements in a logical order.
- Shift+Tab moves backwards predictably.
- Enter activates links and buttons.
- Space activates buttons and appropriate custom controls.
- Escape closes dismissible dialogs or overlays where that behaviour is expected.
- Focus is visible at all times.
- Focus is not trapped in a decorative or inactive element.
- Focus is not moved unexpectedly when animations complete.
- Hidden controls are not reachable by keyboard.
- The user can reach and operate the contact form.

Do not remove the browser focus outline unless a clearly visible replacement is provided. Custom clickable containers should use semantic buttons or links rather than relying only on pointer event handlers.

## 🧱 Semantic Structure and Headings

Use semantic HTML elements that communicate the structure of the page. A page should have a clear primary heading and a logical hierarchy beneath it.

Review:
- One clear page-level heading where appropriate.
- Heading levels are not selected only for visual size.
- Navigation is represented with appropriate navigation landmarks.
- Main content is identifiable.
- Lists are represented as lists.
- Buttons perform actions and links navigate.
- Decorative containers do not create unnecessary screen-reader noise.

A visually large paragraph is not a replacement for a heading. A clickable `div` is not automatically equivalent to a button.

## 🔗 Links and Interactive Controls

Every interactive control should have a meaningful name and purpose.

Examples:
- A project link should identify the project or destination.
- An icon-only button should have an accessible label.
- A download link should communicate what is being downloaded.
- A contact action should describe the action rather than use an ambiguous label.
- External links should make their destination or external nature clear when necessary.

Avoid using colour alone to communicate selected, active, invalid, or successful states. Provide text or another perceivable indicator.

## ✉️ Forms and Validation

The contact form is a high-priority accessibility area.

Review:
- Every field has a persistent, programmatically associated label.
- Required fields are clearly identified.
- Instructions are available before the visitor submits the form.
- Validation errors identify the affected field.
- Error messages explain how to correct the problem.
- Focus behaviour after validation is predictable.
- Success and failure messages are perceivable to assistive technology.
- Form submission does not depend on colour alone.
- The form remains usable at high zoom and narrow widths.

Do not use placeholder text as the only field label. Placeholder text disappears when a visitor types and may have insufficient contrast.

## 🖼️ Images and 3D Content

Images that communicate information should have alternative text that conveys their purpose. Decorative images should not create repetitive or meaningless announcements.

For project thumbnails, consider whether the image provides information not already present in the project title and description. If it is purely decorative, an empty alternative may be more appropriate than a long description.

The 3D canvas should not be the only place where important portfolio information is presented. Provide readable text and standard navigation outside the canvas. If WebGL fails, visitors should still be able to understand the project and access the core routes.

Do not automatically describe every visual detail of a decorative 3D model to a screen reader. The alternative experience should be useful, concise, and aligned with the visitor's task.

## 🎞️ Motion and Animation

The application uses animation and scrolling libraries. Motion can improve visual continuity, but excessive or essential motion can create barriers.

Review:
- Whether animations can be reduced when the visitor requests reduced motion.
- Whether essential text waits for an animation to finish before becoming available.
- Whether automatic movement distracts from reading.
- Whether scroll-linked effects interfere with normal scrolling.
- Whether transitions cause focus or layout changes.
- Whether flashing or rapidly changing content is introduced.
- Whether loading animations can leave the page in an unusable state.

Use the operating system's reduced-motion preference where practical. Reduced motion should preserve the content and function of the interface, not simply hide information.

## 🎨 Colour, Contrast, and Typography

Check text and interactive elements against their backgrounds. Avoid placing small text over complex imagery or moving 3D content without a stable readable surface.

Review:
- Body text and secondary text.
- Links in normal, hover, and focus states.
- Button labels and borders.
- Form labels, placeholders, and errors.
- Focus indicators.
- Text over gradients, images, and 3D scenes.
- Disabled and selected controls.

Do not assume a visually attractive palette has sufficient contrast. Use a contrast checker and inspect the actual rendered interface.

## 📱 Responsive Layout and Zoom

Test at narrow widths and at 200% browser zoom. Look for:
- Horizontal scrolling that is not required by the content.
- Text clipped by fixed-height or animated containers.
- Controls that overlap.
- Navigation that becomes unreachable.
- Project cards that become too narrow to read.
- 3D models obscuring text or controls.
- Sticky elements covering focused controls.
- Forms that require horizontal scrolling.

Test with both browser emulation and real devices where possible. Emulation does not fully reproduce touch interaction, GPU constraints, or assistive technology behaviour.

## 🔊 Screen Reader Review

Use at least one screen reader available in the testing environment. A review should cover the main navigation, page heading, project links, contact form, and status messages.

Listen for:
- Meaningful page and control names.
- Logical reading order.
- Correct role and state announcements.
- Useful link text.
- Form labels and error associations.
- Announcements for dynamic content where required.
- Unnecessary repeated decorative content.

Automated accessibility scanners can identify some issues, but they cannot reliably judge whether the page makes sense to a person using assistive technology.

## 🧪 Testing Workflow

A practical review sequence:

1. Open the page at a desktop viewport.
2. Navigate the page using only the keyboard.
3. Check visible focus and activation behaviour.
4. Inspect headings, landmarks, links, and form labels.
5. Test the contact form with synthetic data.
6. Enable reduced motion in the operating system or browser.
7. Review the page at 200% zoom.
8. Review a narrow mobile viewport.
9. Test the 3D experience with WebGL available and, where practical, unavailable.
10. Use a screen reader for the primary navigation and contact journey.
11. Record defects with exact steps and environment details.
12. Re-test after the fix.

## 📝 Issue Reporting Template

Use this structure when reporting an accessibility barrier:

```text
Title:
Affected page or route:
Affected control or content:
Assistive technology:
Browser and version:
Operating system:
Viewport and zoom:

Steps to reproduce:
1.
2.
3.

Expected experience:
Observed barrier:
Impact on the visitor:
Suggested improvement:
Evidence:
```

Avoid including private visitor information or personal data in screenshots and recordings.

## ✅ Release Checklist

- [ ] Main navigation works with a keyboard.
- [ ] Focus is visible and follows a logical order.
- [ ] Buttons and links have meaningful names.
- [ ] Heading hierarchy is understandable.
- [ ] Images have appropriate alternatives.
- [ ] Contact fields have associated labels.
- [ ] Validation and status feedback are perceivable.
- [ ] Reduced-motion behaviour is reviewed.
- [ ] Text and controls have sufficient contrast.
- [ ] The page remains usable at 200% zoom.
- [ ] Narrow viewport layout has been checked.
- [ ] Essential information is available without WebGL.
- [ ] Screen reader review has been performed for key flows.
- [ ] Known barriers are documented rather than hidden.

## 📚 Further Reading

- [W3C Web Accessibility Initiative](https://www.w3.org/WAI/)
- [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

Accessibility is ongoing maintenance. Revisit these checks whenever navigation, page structure, animation, contact forms, or 3D presentation changes.
