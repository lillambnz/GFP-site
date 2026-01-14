#!/usr/bin/env node

/**
 * Google Search Console - Organic Insights CLI
 *
 * This script fetches the actual search data: what people are searching for
 * when they find your clinic.
 *
 * Usage:
 *   node scripts/get-search-insights.js [days]
 *   
 *   Examples:
 *   node scripts/get-search-insights.js      (Defaults to last 30 days)
 *   node scripts/get-search-insights.js 7    (Last 7 days)
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'sc-domain:gosnellsfamilypractice.com.au';
const CREDENTIALS_PATH = path.join(__dirname, 'google-indexing-credentials.json');

// Check credentials
if (!fs.existsSync(CREDENTIALS_PATH)) {
  console.error('❌ Error: Credentials file not found!');
  console.error(`   Expected at: ${CREDENTIALS_PATH}`);
  process.exit(1);
}

async function getSearchData(days = 30) {
  // Load credentials
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
  
  // Auth client
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  const authClient = await auth.getClient();

  const searchConsole = google.searchconsole({ version: 'v1', auth: authClient });

  // Calculate date range
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - days);

  const formatDate = (date) => date.toISOString().split('T')[0];

  console.log(`\n🔍 Analyzing Search Traffic for: ${SITE_URL}`);
  console.log(`📅 Period: ${formatDate(startDate)} to ${formatDate(endDate)} (${days} days)\n`);

  try {
    const response = await searchConsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        dimensions: ['query'],
        rowLimit: 20, // Top 20 terms
      },
    });

    const rows = response.data.rows || [];

    if (rows.length === 0) {
      console.log('ℹ️  No search data found for this period.');
      console.log('    (This is normal if the site was just submitted)');
      return;
    }

    console.log('🏆 Top 20 Search Queries (What people are typing):\n');
    console.log('   Clicks | Impressions | CTR   | Query');
    console.log('   -------|-------------|-------|-------------------------');

    rows.forEach(row => {
      const clicks = row.clicks.toString().padEnd(6);
      const impr = row.impressions.toString().padEnd(11);
      const ctr = (row.ctr * 100).toFixed(1) + '%';
      
      console.log(`   ${clicks} | ${impr} | ${ctr.padEnd(5)} | ${row.keys[0]}`);
    });

    console.log('\n💡 Terminology:');
    console.log('   - Clicks: Users who actually visited the site');
    console.log('   - Impressions: How many times your site appeared in Google results');
    console.log('   - CTR: Click-Through Rate (Clicks / Impressions)');

  } catch (error) {
    console.error('❌ API Error:', error.message);
    if (error.message.includes('User does not have sufficient permissions')) {
      console.error('\n⚠️  Permission Error:');
      console.error('   Ensure the Service Account email (inside the JSON file)');
      console.error('   has been added as an OWNER or FULL USER in Google Search Console.');
    }
  }
}

// Get days from args or default to 30
const days = process.argv[2] ? parseInt(process.argv[2]) : 30;
getSearchData(days);
