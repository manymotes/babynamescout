# Analytics & Search Console Setup Guide

## Step 1: Google Analytics 4 Setup

### Get Your GA4 Tracking ID

1. **Go to Google Analytics**: https://analytics.google.com/

2. **Create an account** (if you don't have one):
   - Click "Start measuring"
   - Enter Account Name: "BabyNameScout"
   - Click Continue

3. **Create a Property**:
   - Property Name: "BabyNameScout.com"
   - Time zone: Select your timezone
   - Currency: USD (or your preference)
   - Click Continue

4. **Business Details**:
   - Industry: Media & Entertainment (or relevant)
   - Business size: Select appropriate
   - Click Continue

5. **Set up Data Stream**:
   - Select "Web"
   - Website URL: `https://babynamescout.com`
   - Stream name: "BabyNameScout Main Site"
   - Click "Create stream"

6. **Copy Your Measurement ID**:
   - You'll see a Measurement ID that looks like: `G-XXXXXXXXXX`
   - Copy this ID

### Add GA4 ID to Your Site

1. Create a file named `.env.local` in your project root:
   ```bash
   cd /Users/kendallmotes/seo/babynames
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and replace `G-XXXXXXXXXX` with your actual ID:
   ```
   NEXT_PUBLIC_GA_ID=G-YOUR-ACTUAL-ID
   ```

---

## Step 2: Google Search Console Setup

### Verify Your Site

1. **Go to Google Search Console**: https://search.google.com/search-console

2. **Add Property**:
   - Click "Add Property"
   - Select "URL prefix"
   - Enter: `https://babynamescout.com`
   - Click Continue

3. **Verify Ownership** (HTML tag method):
   - Select "HTML tag" verification method
   - You'll see something like:
     ```html
     <meta name="google-site-verification" content="ABC123XYZ..." />
     ```
   - Copy ONLY the content value: `ABC123XYZ...`

4. **Add Verification Code**:
   - Edit your `.env.local` file
   - Replace `your-google-verification-code-here` with your actual code:
     ```
     NEXT_PUBLIC_GSC_VERIFICATION=ABC123XYZ...
     ```

5. **Click "Verify"** in Google Search Console

### Submit Your Sitemap

Once verified:

1. In Google Search Console, go to "Sitemaps" (left sidebar)
2. Enter: `sitemap.xml`
3. Click "Submit"

---

## Step 3: Deploy Changes

After adding both IDs to `.env.local`:

```bash
# Rebuild the site
npm run build

# Deploy to Cloudflare
npx wrangler deploy --env=""
```

**IMPORTANT**: You need to add environment variables to Cloudflare Workers:

1. Go to Cloudflare Dashboard
2. Select your Workers project: "babynamescout"
3. Go to Settings → Variables
4. Add these variables:
   - `NEXT_PUBLIC_GA_ID` = Your G-XXXXXXXXXX
   - `NEXT_PUBLIC_GSC_VERIFICATION` = Your verification code

Or via command line:
```bash
wrangler secret put NEXT_PUBLIC_GA_ID
# Enter your GA4 ID when prompted

wrangler secret put NEXT_PUBLIC_GSC_VERIFICATION
# Enter your verification code when prompted
```

---

## Step 4: Verify Everything Works

### Check Analytics:
1. Visit https://babynamescout.com
2. Go to Google Analytics → Reports → Realtime
3. You should see yourself as an active user

### Check Search Console:
1. Go to Google Search Console
2. Check "URL Inspection" tool
3. Test any page from your site

---

## What to Monitor

### In Google Analytics (Daily/Weekly):
- **Users** - How many visitors
- **Sessions** - Total visits
- **Engagement** - Time on site, bounce rate
- **Top Pages** - Which names get most traffic
- **Traffic Sources** - Where users come from

### In Google Search Console (Weekly):
- **Performance** - Impressions, clicks, CTR, position
- **Coverage** - Index status (aim for 1800+ indexed)
- **Enhancements** - Structured data (should show FAQ/Breadcrumb)
- **Mobile Usability** - Any mobile issues

---

## Troubleshooting

**Analytics not showing data?**
- Wait 24-48 hours for initial data
- Check `.env.local` has correct ID
- Verify ID starts with `G-`
- Check browser console for errors

**Search Console verification failed?**
- Make sure `.env.local` has correct code
- Rebuild and redeploy after adding code
- Try DNS verification as alternative

**Changes not reflecting?**
- Clear browser cache
- Verify environment variables in Cloudflare
- Check deployment completed successfully

---

## Next Steps After Setup

1. **Wait 48 hours** for initial data
2. **Request indexing** for key pages in GSC
3. **Set up alerts** in GA4 for traffic drops
4. **Create custom reports** for name searches
5. **Monitor Core Web Vitals** in GSC

Need help? Check the official docs:
- GA4: https://support.google.com/analytics
- GSC: https://support.google.com/webmasters
