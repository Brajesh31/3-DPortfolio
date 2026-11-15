# Troubleshooting

## Installation fails

- Confirm Node.js 18 or newer and npm are installed.
- Use `npm ci` to install exactly from the lockfile.
- Review the first meaningful error in the terminal output.

## Build fails

- Run `npm ci` before building.
- Check the full Vite error output and the file/line it identifies.
- Confirm the local Node.js version is compatible with the toolchain.
- Avoid deleting or regenerating the lockfile as a first response.

## 3D scene does not render

- Use a modern browser with WebGL enabled.
- Check browser console and graphics-driver errors.
- Test whether the issue occurs on another WebGL-capable device.
- Consider graphics performance and device capability when reproducing.

## Contact form does not send

- Verify the EmailJS service and template are active in the intended account.
- Check browser network and console output.
- Confirm the template accepts the parameters sent by the form.
- Do not share private account credentials or message contents in public reports.

## Deployment fails

- Inspect the relevant GitHub Actions run.
- Check that `FTP_USERNAME` and `FTP_PASSWORD` secrets are configured.
- Verify the deployment account, server reachability, and destination permissions.
- Review the workflow log while keeping passwords and tokens private.

## Nested route refresh returns an error

The app uses React Router. Confirm that the hosting provider serves the app entrypoint for client-side routes, and inspect the host's rewrite configuration. Do not change routing code solely to compensate for a server configuration issue without investigating the deployment target.
