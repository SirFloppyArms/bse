# BSE Welding Engineering Limited

Placeholder website for **Brad Ellis's BSE Welding Engineering Limited**, built to be hosted on [GitHub Pages](https://pages.github.com/) and eventually associated with a custom domain via WHC.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Main single-page website |
| `styles.css` | All styles (no external CSS frameworks) |

## Local Preview

Open `index.html` directly in any modern browser — no build step required.

## GitHub Pages Deployment

1. Push to the `main` branch (or your configured Pages branch).
2. In the repository **Settings → Pages**, set the source to the root of that branch.
3. GitHub will publish the site at `https://<username>.github.io/bse/` within a few minutes.

## Custom Domain (WHC)

1. In **Settings → Pages → Custom domain**, enter your domain (e.g. `www.bsewelding.ca`).
2. In your WHC DNS panel, add a `CNAME` record pointing your subdomain to `<username>.github.io`.
3. Enable **Enforce HTTPS** once the certificate has been provisioned.
