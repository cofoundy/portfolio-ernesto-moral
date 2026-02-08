# QA Report: Ernesto Moral

**Date:** 2026-02-08
**URL:** https://cofoundy.github.io/portfolio-ernesto-moral/
**Template:** Premium (minimalista/premium-starter)
**Status:** PASS (with 1 minor note)

## Data Validation
- [x] Name matches source: "Ernesto Moral" (Sheet: "Ernesto Tomas Moral Guevara", display name: "Ernesto Moral")
- [x] Email matches source: ernesto.moral@outlook.com.pe (matches Sheet exactly)
- [x] Title matches source: "Jefe de Proyectos de Mejora | Operational Excellence"
- [x] Companies verified: RESEMIN S.A. (x2 entries), ARTECOLA, AC FARMA — all from CV
- [x] Education verified: IQS/Ramon Llull, Universidad de Lima (x2), Wharton, ESAN — all from CV
- [x] Dates match config.ts source data
- [x] No hallucinated data detected

## Premium Template Features
- [x] 6-color palette active (navy #0F2A4A + amber #f59e0b + blue #1e40af)
- [x] Shimmer bars visible at top/bottom of hero (bar-shimmer class present)
- [x] Stats bar: "+$5.98M Ahorros Anuales", "10+ Anos de Experiencia", "Wharton Executive Program"
- [x] Tagline: "Transformo operaciones industriales en motores de eficiencia y ahorro."
- [x] Profile photo loads with amber border and decorative glow
- [x] Floating pill nav (appears after scroll, 4 items: Sobre Mi, Proyectos, Trayectoria, Educacion)
- [x] Pull quote in About section: "Los datos impulsan la mejora. La mejora genera valor."
- [x] 3-column About layout (Title | Bio | Quote)
- [x] Horizontal timeline + experience cards
- [x] 4 experience entries (RESEMIN x2, ARTECOLA, AC FARMA)
- [x] 4 project cards with skill tags
- [x] 5 education entries in card layout
- [x] Premium fonts loading (Cormorant, Montserrat, Raleway)
- [x] Services section correctly hidden (no services in config)
- [x] CTA section correctly hidden (no CTA in config)
- [x] Footer with navy background and conditional social links (only email + LinkedIn shown)

## Clean Deploy
- [x] No "Powered by" / "Made with" / "Built with" watermarks
- [x] No "lorem ipsum" or placeholder text
- [x] No template links (View source, Fork this, etc.)
- [x] No Astro logo or Vercel badge visible to users
- [x] No "undefined" or "null" visible in content
- [x] No ghost social links (Twitter/GitHub correctly hidden in footer)
- [x] Meta generator tag "Astro v5.17.1" present but not user-visible (acceptable)

## Technical Health
- [x] Page loads: HTTP 200
- [x] CSS loads: HTTP 200 (_astro/index.tKH_ma4A.css)
- [x] Profile image loads: HTTP 200 (profile.jpg)
- [x] Favicon loads: HTTP 200 (favicon.svg)
- [x] html lang="es" correct
- [x] No critical console errors (only Chrome extension noise)

## Issues Found

### Minor (does not block delivery)

1. **Experience bullets truncated to 3 per entry** — The Experience.astro component uses `exp.bullets.slice(0, 3)`, so the first RESEMIN entry (5 bullets) loses 2 important bullets:
   - Missing: "Migracion SAP S/4 HANA: 100% procesos estabilizados en 3 meses"
   - Missing: "Consolidacion CAPEX: +$750K/ano en ahorros"
   This is a template design decision (keeps cards compact), and the SAP migration is covered in the Projects section. However, the $750K savings data point is lost entirely.

### None (blocking)

No blocking issues found.

## Evidence
- qa-desktop.png (Education + Footer section)
- qa-desktop-hero.png (Hero section with photo, stats, tagline, CTA)
