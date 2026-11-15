# Contributing

Thank you for considering a contribution to 3-D Portfolio.

## Before starting

1. Read the project README and this guide.
2. Search existing issues and pull requests to avoid duplicate work.
3. For substantial changes, open an issue first to discuss the proposed approach.
4. Do not include credentials, private contact data, generated build output, or dependencies in a pull request.

## Development setup

Requirements: Node.js 18 or newer and npm.

```bash
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Suggested workflow

1. Create a focused branch from `main`.
2. Make changes related to one issue or improvement.
3. Run `npm run build`.
4. Test affected pages in a modern browser. For 3D changes, verify a WebGL-capable browser and check a narrow viewport.
5. Update documentation when commands, setup, behavior, or deployment assumptions change.
6. Open a pull request with context, screenshots for visual changes, and test results.

## Pull request expectations

- Explain the problem and the chosen solution.
- Link related issues using GitHub closing keywords when appropriate.
- Keep changes scoped and avoid unrelated formatting or refactoring.
- Add or update tests when the project has applicable test coverage.
- Call out accessibility impact, performance impact, and breaking changes.
- Never commit `node_modules/`, generated `dist/`, local environment files, or secrets.

## Code and design

Follow the conventions already present in the relevant files. Preserve the existing React, Vite, and Three.js architecture unless a change has been discussed and accepted. Keep animations usable and respect reduced-motion preferences where feasible.

## Reporting issues

Use the repository issue templates. For suspected security vulnerabilities, follow [SECURITY.md](SECURITY.md) instead of posting sensitive details publicly.

By submitting a contribution, you confirm that you have the right to submit it under the repository's MIT license. Contributions remain subject to applicable third-party license terms.
