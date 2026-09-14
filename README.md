# RetroCalcs — CFRP Strengthening Calculation Suite

Browser-based design and verification tools for externally bonded FRP strengthening of
reinforced-concrete members, built around the ACI 440.2R method.

**For preliminary / educational use.** Verify against ACI 440.2R and a licensed engineer's
review before construction.

## Calculators

| Tool | Member | Scope |
|---|---|---|
| [Slab Flexure](calculators/slab-flexure.html) | One-way slab | Flexural strengthening, positive & negative moment regions |
| [Beam Flexure](calculators/beam-flexure.html) | RC beam | Soffit-bonded laminate, incl. existing-capacity eligibility check |
| [Beam Shear](calculators/beam-shear.html) | RC beam | U-wrap, full-wrap, and side-bonded strip configurations |
| [Column Axial + Bending](calculators/column-axial-bending.html) | RC column | FRP confinement jacket; simplified P-M interaction diagram (ACI 440.2R Appendix D) |

## Structure

```
/
├── index.html                  landing page
├── assets/
│   ├── style.css               shared design system
│   ├── nav.js                  shared nav bar (injected at runtime)
│   ├── retrocrete-logo.jpg
│   └── cfrp-background.jpg
└── calculators/
    ├── slab-flexure.html
    ├── beam-flexure.html
    ├── beam-shear.html
    └── column-axial-bending.html
```

Each calculator is a self-contained page: shared styling and nav come from `/assets/`,
but each page keeps its own calculation engine inline, so the tools stay independent
of one another.

## Deployment

Static site — no build step. Serve the repository root.

For GitHub Pages: enable Pages on the repository and set the source to the branch root.
Paths are absolute (`/assets/...`, `/calculators/...`), so the site must be served from a
domain root (`username.github.io` or a custom domain) rather than a project subpath.

### Local preview

Because paths are absolute, open the site through a local server rather than the
filesystem:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Notes

- `.nojekyll` is present so GitHub Pages serves the files as-is without Jekyll processing.
- All calculators recalculate live as inputs change; no data leaves the browser.
