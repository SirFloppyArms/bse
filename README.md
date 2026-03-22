# BSE Welding Engineering Limited - Live Placeholder Setup

Simple professional placeholder site intended to go live immediately on GitHub Pages, then attach to a WHC-managed custom domain.

## Project Files

- `index.html` - single under-construction page
- `styles.css` - styling for the placeholder page
- `CNAME` - custom domain value for GitHub Pages

## Local Check

Open `index.html` in a browser to confirm the page renders.

## Go-Live Checklist (GitHub Pages)

1. Push this repository to GitHub.
2. In GitHub: `Settings -> Pages`.
3. Under `Build and deployment`, select:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` and `/ (root)`
4. Save and wait for the first publish.
5. Confirm default URL works: `https://<github-username>.github.io/<repo-name>/`

## Custom Domain Setup (WHC)

Target domain: `bseweldingengineeringlimited.ca`

### 1) GitHub Pages side

1. In `Settings -> Pages -> Custom domain`, enter:
   `bseweldingengineeringlimited.ca`
2. Keep `Enforce HTTPS` enabled once certificate is issued.

### 2) WHC DNS side

For apex/root domain (`bseweldingengineeringlimited.ca`), add these `A` records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Optional `www` support:

- Add `CNAME` record:
  - Host: `www`
  - Value: `<github-username>.github.io`

### 3) Verify

1. Wait for DNS propagation.
2. Confirm both load (if `www` configured):
   - `https://bseweldingengineeringlimited.ca`
   - `https://www.bseweldingengineeringlimited.ca`
3. Check GitHub Pages shows domain as connected.

## If Domain Changes

Update both:

- `CNAME`
- GitHub Pages `Custom domain` field
