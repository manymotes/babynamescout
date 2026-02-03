const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

async function submitSitemap() {
  try {
    // Load service account credentials
    const keyPath = '/Users/kendallmotes/seo/seo-metrics/service-account-key.json';
    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const searchconsole = google.searchconsole({
      version: 'v1',
      auth: auth,
    });

    const siteUrl = 'sc-domain:babynamescout.com';
    const sitemapUrl = 'https://babynamescout.com/sitemap.xml';

    console.log(`Submitting sitemap: ${sitemapUrl}`);
    
    const response = await searchconsole.sitemaps.submit({
      siteUrl: siteUrl,
      feedpath: sitemapUrl,
    });

    console.log('✅ Sitemap submitted successfully!');
    console.log('Google will crawl and index the new pages within a few days.');
  } catch (error) {
    console.error('Error submitting sitemap:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

submitSitemap();
