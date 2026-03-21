# BSE Welding Engineering Limited

Fact-first interim website for **BSE Welding Engineering Limited**, designed for [GitHub Pages](https://pages.github.com/) and future connection to a WHC-managed custom domain.

This version intentionally excludes guessed claims and unverified contact details.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Main single-page website |
| `styles.css` | All styles (no external CSS frameworks) |

## Current Content Policy

1. Only publicly verifiable information is displayed.
2. Unsupported marketing claims and placeholder metrics are removed.
3. Contact details remain unpublished until owner-confirmed.

## Public Sources Used (March 20, 2026)

1. ASM International Manitoba Chapter: `http://asm-manitoba.ca/industries.html`
2. Manitoba Court Registry page containing the business name:
	`https://web43.gov.mb.ca/Registry/FileNumberSearch/LawyerDetails?FileNumber=CI20-01-26727&PartySequenceNum=2085366&PartyName=BSE%20WELDING%20ENGINEERING%20LIMITED,%20`
3. Province of Manitoba engineering firms list (background context, non-exhaustive):
	`http://gov.mb.ca/sd/envprograms/swm/pdf/engineering_firms.pdf`

## Local Preview

Open `index.html` directly in any modern browser — no build step required.

## GitHub Pages Deployment

1. Push to the `main` branch (or your configured Pages branch).
2. In the repository **Settings → Pages**, set the source to the root of that branch.
3. GitHub will publish the site at `https://<username>.github.io/bse/` within a few minutes.
4. Confirm the site loads and all source links in the "Public Source Notes" section open correctly.

## Custom Domain (WHC)

Planned domain: `BSEWeldingEngineeringLimited.ca`

1. In **Settings → Pages → Custom domain**, enter `BSEWeldingEngineeringLimited.ca` when ready.
2. If using a `www` subdomain, add a WHC DNS `CNAME` record:
	- Host: `www`
	- Value: `<username>.github.io`
3. If using apex/root domain, set WHC `A` records to GitHub Pages IPs per GitHub docs.
4. Wait for DNS propagation, then verify the domain resolves to GitHub Pages.
5. Enable **Enforce HTTPS** once certificate provisioning completes.

### CNAME File Timing

- Add a `CNAME` file to the repository root only when DNS changes are ready to go live.
- File content should be exactly:
  `BSEWeldingEngineeringLimited.ca`

## Next Owner Inputs Needed

1. Official service list and service area wording.
2. Preferred public contact channel (email/phone/form destination).
3. Final custom domain to add a `CNAME` file.
