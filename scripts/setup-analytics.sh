#!/bin/bash

# Analytics Setup Helper Script

echo "🎯 BabyNameScout Analytics Setup"
echo "=================================="
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✓ .env.local already exists"
else
    echo "Creating .env.local from example..."
    cp .env.local.example .env.local
    echo "✓ Created .env.local"
fi

echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Get your Google Analytics 4 ID:"
echo "   → Visit: https://analytics.google.com/"
echo "   → Create property for babynamescout.com"
echo "   → Copy your Measurement ID (G-XXXXXXXXXX)"
echo ""
echo "2. Get your Google Search Console verification:"
echo "   → Visit: https://search.google.com/search-console"
echo "   → Add property: https://babynamescout.com"
echo "   → Choose HTML tag verification"
echo "   → Copy the verification code"
echo ""
echo "3. Edit .env.local with your IDs:"
echo "   → nano .env.local"
echo "   → Add your GA4 ID and GSC verification code"
echo ""
echo "4. Build and deploy:"
echo "   → npm run build"
echo "   → npx wrangler deploy --env=\"\""
echo ""
echo "5. Add environment variables to Cloudflare:"
echo "   → wrangler secret put NEXT_PUBLIC_GA_ID"
echo "   → wrangler secret put NEXT_PUBLIC_GSC_VERIFICATION"
echo ""
echo "📖 Full guide: See ANALYTICS_SETUP.md"
echo ""
