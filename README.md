# BSE Welding Engineering Limited Website

Launch site for **BSE Welding Engineering Limited**, intended to be published on GitHub Pages and then connected to the custom domain:

`bseweldingengineeringlimited.ca`

## Files

- `index.html` - responsive temporary homepage
- `styles.css` - visual design and responsive layout
- `assets/icons/` - favicon set and web manifest
- `favicon.ico` - root fallback icon
- `CNAME` - GitHub Pages custom domain target
- `.nojekyll` - tells GitHub Pages to serve the site as plain static files
- `robots.txt` - allows crawling and points search engines to the sitemap
- `sitemap.xml` - homepage URL for discovery and reindexing

## Local Check

Open `index.html` in a browser and confirm:

- layout looks correct on desktop
- layout collapses cleanly on mobile width
- the page content looks correct and professional

## GitHub Pages Publish

1. Push the repository to GitHub.
2. Open `Settings -> Pages`.
3. Under `Build and deployment`, set:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
4. Wait for the first deployment to finish.
5. Confirm the GitHub Pages URL works before touching DNS.

## Custom Domain Setup

This repository includes the correct `CNAME` file:

`bseweldingengineeringlimited.ca`

When the domain is purchased, finish setup in two places.

### 1) GitHub Pages

In `Settings -> Pages`:

- confirm `Custom domain` is `bseweldingengineeringlimited.ca`
- leave `Enforce HTTPS` off until GitHub finishes certificate provisioning
- turn `Enforce HTTPS` on after the certificate is active

### 2) DNS Provider

For the root domain (`bseweldingengineeringlimited.ca`), create these `A` records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Optional `www` support:

- record type: `CNAME`
- host/name: `www`
- target/value: `<github-username>.github.io`

## Final Launch Check

After DNS propagates, verify:

1. `bseweldingengineeringlimited.ca` resolves to the site.
2. GitHub Pages shows the domain as connected.
3. HTTPS can be enforced successfully.
4. The live page matches the latest repository version.
