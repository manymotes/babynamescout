# BabyNameScout - Project Status

## Overview
Programmatic SEO website for baby names, targeting expectant parents (70-80% women audience). Similar architecture to HoroscopeHub with scalable, pattern-rich page generation.

## Status: 🟡 Development

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Workers (static export)
- **Data**: SSA/Behind the Name API (planned)

## Page Types (pSEO Patterns)
| Pattern | Example | Est. Pages |
|---------|---------|------------|
| `/names/[gender]/` | Girl Names, Boy Names | 3 |
| `/names/[gender]/[letter]/` | Girl Names Starting with A | 78 |
| `/name/[slug]/` | Olivia - Meaning & Origin | 200+ |
| `/origin/[origin]/` | Hebrew Names | 22 |
| `/meaning/[meaning]/` | Names Meaning Strong | 12 |
| `/generator/` | Name Generator Tool | 1 |

**Total Initial Pages**: ~320+
**Scalable to**: 10,000+ with full SSA database

## Current Data
- 200+ sample names (girl, boy, unisex)
- 22 origins (Hebrew, Greek, Latin, Celtic, etc.)
- 12 meaning categories (strong, love, nature, light, etc.)
- Popularity rankings based on SSA 2025 data

## SEO Features
- ✅ Dynamic sitemap generation
- ✅ Robots.txt
- ✅ FAQ schema markup on letter pages
- ✅ Article schema on name pages
- ✅ Open Graph meta tags
- ✅ Internal linking between related names
- ✅ Breadcrumb navigation

## Monetization (Planned)
- **Display Ads**: Google AdSense → Mediavine/AdThrive (same pub ID: ca-pub-6061225328031066)
- **Affiliates**:
  - Baby products (Amazon Associates)
  - Baby registries (Target, Babylist)
  - Pregnancy apps
  - Baby books

## Revenue Projection
| Month | Traffic | Display | Affiliates | Total |
|-------|---------|---------|------------|-------|
| 3 | 5K | $100 | $50 | $150 |
| 6 | 25K | $500 | $250 | $750 |
| 12 | 75K | $2,250 | $750 | $3,000 |

## Next Steps
1. [ ] Run `npm install` to install dependencies
2. [ ] Run `npm run dev` to test locally on port 3006
3. [ ] Run `npm run build` to generate static pages
4. [ ] Fetch SSA name data to expand database
5. [ ] Register domain (babynames.com alternatives)
6. [ ] Deploy to Cloudflare Workers
7. [ ] Add to Google Search Console
8. [ ] Enable AdSense after 50+ pages indexed

## Data Sources to Integrate
- **SSA Popular Names**: https://www.ssa.gov/oact/babynames/
- **Behind the Name API**: https://www.behindthename.com/api/
- **OFLC**: https://opendata.socrata.com/

## Related Sites in Portfolio
- SalaryMetro (salarymetro.com) - LIVE
- HoroscopeHub (horoscopehub.io) - LIVE
- Water Quality (uswatergrade.com) - Ready
- Rent Data (usrentprices.com) - Dev
- Nutrition Data (caloriedata.io) - Planning
- Air Quality (usairquality.com) - Ready

## Quick Commands
```bash
# Development
npm run dev

# Build static site
npm run build

# Deploy to Cloudflare
npx wrangler deploy

# Fetch name data (when script ready)
npm run fetch-names
```
