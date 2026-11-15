# Deployment

## Existing deployment workflow

The repository contains `.github/workflows/deploy.yml`, which runs on pushes to `main`. It checks out the repository, sets up Node.js 22, installs packages, builds the Vite site, and uses an FTP deployment action to publish `dist/`.

The workflow expects these repository Actions secrets:

- `FTP_USERNAME`
- `FTP_PASSWORD`

It also contains the hosting server and destination directory in the workflow configuration. Review those values in GitHub before running deployment. Do not publish credentials.

## Manual build

```bash
npm ci
npm run build
```

The deployable static output is in `dist/`.

## Pre-deployment checks

1. Confirm the intended commit is on `main`.
2. Confirm the Actions secrets exist and are valid.
3. Confirm the FTP account is restricted to the intended destination.
4. Run a clean local build.
5. Inspect the workflow result and the hosted site after deployment.
6. Verify direct refresh/navigation for nested routes under the hosting provider's routing rules.

## Separate npm deploy script

The package manifest also defines `npm run deploy`, using `gh-pages -d dist`. This is a separate deployment path from the existing FTP workflow. Do not assume both methods target the same host or are configured interchangeably.
