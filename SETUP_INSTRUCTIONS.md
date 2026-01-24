# Quick Setup Instructions (Hardcoded Version)

## Step 1: Google Analytics 4 (2 minutes)

1. Go to **https://analytics.google.com/**
2. Click "Start measuring" (or "Admin" if you have an account)
3. Create Account:
   - Account name: "BabyNameScout"
4. Create Property:
   - Property name: "BabyNameScout.com"
   - Select your timezone
   - Click "Next"
5. Fill in business details (any category is fine)
6. Click "Create" and accept terms
7. Select "Web" platform
8. Set up web stream:
   - URL: `https://babynamescout.com`
   - Stream name: "Main Site"
   - Click "Create stream"
9. **COPY YOUR MEASUREMENT ID** - looks like: `G-ABC123XYZ`

### Add to your code:

Open: `components/Analytics.tsx`

Find line 6:
```typescript
const GA_ID = 'G-XXXXXXXXXX'
```

Replace with your actual ID:
```typescript
const GA_ID = 'G-ABC123XYZ'  // <-- Your real ID here
```

---

## Step 2: Google Search Console (2 minutes)

1. Go to **https://search.google.com/search-console**
2. Click "Add Property"
3. Select "URL prefix" (not Domain)
4. Enter: `https://babynamescout.com`
5. Click "Continue"
6. Choose verification method: **"HTML tag"**
7. You'll see something like:
   ```html
   <meta name="google-site-verification" content="abc123xyz456..." />
   ```
8. **COPY ONLY THE CONTENT VALUE**: `abc123xyz456...`

### Add to your code:

Open: `app/layout.tsx`

Find line 28:
```typescript
google: 'REPLACE_WITH_YOUR_VERIFICATION_CODE',
```

Replace with your code:
```typescript
google: 'abc123xyz456...',  // <-- Your real code here
```

---

## Step 3: Verify Files Changed

Check that you edited these 2 files:
- ✅ `components/Analytics.tsx` (line 6)
- ✅ `app/layout.tsx` (line 28)

---

## Step 4: Deploy

```bash
# Build the site
npm run build

# Deploy to Cloudflare
npx wrangler deploy --env=""
```

Wait ~2 minutes for deployment to complete.

---

## Step 5: Verify It Worked

### For Google Search Console:
1. Go back to the Search Console verification page
2. Click **"Verify"** button
3. Should say "Ownership verified" ✅

### For Google Analytics:
1. Visit your site: https://babynamescout.com
2. Go to Google Analytics → Reports → Realtime
3. You should see 1 active user (you!)
4. Wait 24-48 hours for more data

---

## Step 6: Submit Sitemap to Search Console

1. In Google Search Console, go to "Sitemaps" (left menu)
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Status should show "Success" with 1800+ URLs discovered

---

## What to Monitor Daily/Weekly

### Google Analytics (https://analytics.google.com/)
- **Realtime** → See current visitors
- **Reports → Engagement → Pages** → Most popular names
- **Reports → Acquisition → Traffic** → Where visitors come from

### Google Search Console (https://search.google.com/search-console)
- **Performance** → Clicks, impressions, average position
- **Coverage** → How many pages are indexed (goal: 1800+)
- **Enhancements** → Check structured data (FAQ, Breadcrumbs)

---

## Troubleshooting

**Can't find the files to edit?**
```bash
cd /Users/kendallmotes/seo/babynames
nano components/Analytics.tsx  # Press Ctrl+W to search for "G-XXXXXXXXXX"
nano app/layout.tsx           # Press Ctrl+W to search for "REPLACE_WITH"
```

**Analytics not showing data after 48 hours?**
- Make sure you replaced 'G-XXXXXXXXXX' with real ID
- Check that ID starts with 'G-'
- Visit site in incognito mode and check GA Realtime

**Search Console verification failed?**
- Make sure you replaced 'REPLACE_WITH_YOUR_VERIFICATION_CODE'
- Make sure you deployed after editing the file
- Try clearing your browser cache and verifying again

**Deployment failed?**
- Run `npm run build` first to check for errors
- Make sure you're in the project directory
- Check that both edits were saved

---

## Files You Need to Edit

### File 1: `components/Analytics.tsx`
Location: `/Users/kendallmotes/seo/babynames/components/Analytics.tsx`

**BEFORE:**
```typescript
const GA_ID = 'G-XXXXXXXXXX'
```

**AFTER (with your real ID):**
```typescript
const GA_ID = 'G-ABC123XYZ'
```

---

### File 2: `app/layout.tsx`
Location: `/Users/kendallmotes/seo/babynames/app/layout.tsx`

**BEFORE:**
```typescript
verification: {
  google: 'REPLACE_WITH_YOUR_VERIFICATION_CODE',
},
```

**AFTER (with your real code):**
```typescript
verification: {
  google: 'abc123def456ghi789',
},
```

---

That's it! Once you complete these steps, you'll have:
- ✅ Analytics tracking all visitors
- ✅ Search Console monitoring search performance
- ✅ Sitemap submitted to Google
- ✅ Site ready for SEO monitoring

Questions? Just ask!
