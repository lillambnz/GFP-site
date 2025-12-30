#!/usr/bin/env node

/**
 * Google Indexing API - Automated URL Submission
 *
 * This script submits all URLs from your sitemap to Google's Indexing API
 * for faster crawling and indexing.
 *
 * Setup Instructions:
 * 1. Go to https://console.cloud.google.com/
 * 2. Create a new project or select existing one
 * 3. Enable "Indexing API" in APIs & Services
 * 4. Create a Service Account:
 *    - Go to APIs & Services > Credentials
 *    - Create Credentials > Service Account
 *    - Download JSON key file
 * 5. Add service account email to Google Search Console:
 *    - Go to https://search.google.com/search-console
 *    - Settings > Users and permissions
 *    - Add service account email as Owner
 * 6. Save the JSON key file as 'google-indexing-credentials.json' in this directory
 *
 * Usage:
 *   npm install googleapis
 *   node scripts/submit-to-google.js
 */

const { google } = require('googleapis');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'https://gosnellsfamilypractice.com.au';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const CREDENTIALS_PATH = path.join(__dirname, 'google-indexing-credentials.json');
const BATCH_SIZE = 100; // Google allows 100 requests per batch
const DELAY_BETWEEN_BATCHES = 1000; // 1 second delay between batches

// URLs to submit (from your sitemap)
const URLS = [
  'https://gosnellsfamilypractice.com.au',
  'https://gosnellsfamilypractice.com.au/about',
  'https://gosnellsfamilypractice.com.au/after-hours',
  'https://gosnellsfamilypractice.com.au/blog',
  'https://gosnellsfamilypractice.com.au/blog/importance-of-regular-checkups',
  'https://gosnellsfamilypractice.com.au/blog/managing-chronic-conditions',
  'https://gosnellsfamilypractice.com.au/blog/nutrition-tips-from-dietitians',
  'https://gosnellsfamilypractice.com.au/blog/preparing-for-flu-season-2025',
  'https://gosnellsfamilypractice.com.au/blog/skin-cancer-screening',
  'https://gosnellsfamilypractice.com.au/blog/understanding-telehealth',
  'https://gosnellsfamilypractice.com.au/faqs',
  'https://gosnellsfamilypractice.com.au/services',
  'https://gosnellsfamilypractice.com.au/services/chronic-disease-management',
  'https://gosnellsfamilypractice.com.au/services/diabetes-management',
  'https://gosnellsfamilypractice.com.au/services/dietitian-services',
  'https://gosnellsfamilypractice.com.au/services/driver-medicals',
  'https://gosnellsfamilypractice.com.au/services/general-checkups',
  'https://gosnellsfamilypractice.com.au/services/immunisations',
  'https://gosnellsfamilypractice.com.au/services/mens-health',
  'https://gosnellsfamilypractice.com.au/services/mental-health',
  'https://gosnellsfamilypractice.com.au/services/minor-procedures',
  'https://gosnellsfamilypractice.com.au/services/pathology-services',
  'https://gosnellsfamilypractice.com.au/services/pre-employment-medicals',
  'https://gosnellsfamilypractice.com.au/services/pregnancy-care',
  'https://gosnellsfamilypractice.com.au/services/psychology-services',
  'https://gosnellsfamilypractice.com.au/services/respiratory-care',
  'https://gosnellsfamilypractice.com.au/services/skin-cancer-screening',
  'https://gosnellsfamilypractice.com.au/services/telehealth',
  'https://gosnellsfamilypractice.com.au/services/travel-health',
  'https://gosnellsfamilypractice.com.au/services/womens-health',
  'https://gosnellsfamilypractice.com.au/services/workers-compensation',
  'https://gosnellsfamilypractice.com.au/team',
];

// Helper function to delay execution
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Check if credentials file exists
function checkCredentials() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error('❌ Error: Credentials file not found!');
    console.error(`   Expected at: ${CREDENTIALS_PATH}`);
    console.error('\n📝 Setup Instructions:');
    console.error('   1. Go to https://console.cloud.google.com/');
    console.error('   2. Enable "Indexing API"');
    console.error('   3. Create Service Account and download JSON key');
    console.error('   4. Save as "google-indexing-credentials.json" in scripts/ folder');
    console.error('   5. Add service account email to Google Search Console as Owner');
    process.exit(1);
  }
}

// Initialize Google Indexing API client
async function getAuthClient() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  return await auth.getClient();
}

// Submit a single URL to Google Indexing API
async function submitUrl(authClient, url) {
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  try {
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: 'URL_UPDATED',
      },
    });

    return {
      success: true,
      url: url,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      url: url,
      error: error.message,
    };
  }
}

// Submit URLs in batches
async function submitAllUrls() {
  console.log('🚀 Starting Google Indexing API submission...\n');
  console.log(`📊 Total URLs to submit: ${URLS.length}\n`);

  checkCredentials();

  let authClient;
  try {
    authClient = await getAuthClient();
    console.log('✅ Authentication successful!\n');
  } catch (error) {
    console.error('❌ Authentication failed:', error.message);
    console.error('\n💡 Make sure:');
    console.error('   1. The JSON key file is valid');
    console.error('   2. Service account email is added to Google Search Console');
    console.error('   3. Indexing API is enabled in Google Cloud Console');
    process.exit(1);
  }

  const results = {
    success: [],
    failed: [],
  };

  // Process URLs in batches
  for (let i = 0; i < URLS.length; i += BATCH_SIZE) {
    const batch = URLS.slice(i, i + BATCH_SIZE);
    const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(URLS.length / BATCH_SIZE);

    console.log(`📦 Processing batch ${batchNumber}/${totalBatches} (${batch.length} URLs)...`);

    // Submit all URLs in current batch
    const batchPromises = batch.map(url => submitUrl(authClient, url));
    const batchResults = await Promise.all(batchPromises);

    // Categorize results
    batchResults.forEach(result => {
      if (result.success) {
        results.success.push(result.url);
        console.log(`   ✅ ${result.url}`);
      } else {
        results.failed.push({ url: result.url, error: result.error });
        console.log(`   ❌ ${result.url} - ${result.error}`);
      }
    });

    // Delay between batches if there are more to process
    if (i + BATCH_SIZE < URLS.length) {
      console.log(`   ⏳ Waiting ${DELAY_BETWEEN_BATCHES}ms before next batch...\n`);
      await delay(DELAY_BETWEEN_BATCHES);
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(70));
  console.log('📊 SUBMISSION SUMMARY');
  console.log('='.repeat(70));
  console.log(`✅ Successfully submitted: ${results.success.length}/${URLS.length}`);
  console.log(`❌ Failed: ${results.failed.length}/${URLS.length}`);

  if (results.failed.length > 0) {
    console.log('\n❌ Failed URLs:');
    results.failed.forEach(item => {
      console.log(`   - ${item.url}`);
      console.log(`     Error: ${item.error}`);
    });
  }

  console.log('\n✨ Done! Google will now crawl your URLs faster.');
  console.log('   Check status in Google Search Console in 24-48 hours.');
  console.log('='.repeat(70) + '\n');
}

// Run the script
submitAllUrls().catch(error => {
  console.error('\n❌ Script failed:', error);
  process.exit(1);
});
