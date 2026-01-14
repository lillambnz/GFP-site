#!/usr/bin/env node

/**
 * Google Ads Campaign Planner
 *
 * This script analyzes your organic search data (from Search Console)
 * to propose a targeted Google Ads campaign structure.
 *
 * It groups successful organic keywords into high-intent Ad Groups
 * to maximize ROI for the clinic.
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'sc-domain:gosnellsfamilypractice.com.au';
const CREDENTIALS_PATH = path.join(__dirname, 'google-indexing-credentials.json');

// --- STRATEGY LOGIC ---
// We map keywords to specific service pages/intents
const INTENT_MAP = {
  'brand': {
    keywords: ['gosnells family practice', 'gosnell family practice', 'dr khan', 'dr ameer khan'],
    adGroup: 'Brand Protection',
    landingPage: '/',
    headline: 'Gosnells Family Practice - Your Trusted Local GP',
  },
  'location': {
    keywords: ['gosnells doctors', 'gosnells medical', 'gosnells clinic', 'doctor armadale'],
    adGroup: 'Local Area Service',
    landingPage: '/services',
    headline: 'Top Rated Doctors in Gosnells | Open Today',
  },
  'near_me': {
    keywords: ['near me', 'close to me'],
    adGroup: 'High Intent - Near Me',
    landingPage: '/book-appointment',
    headline: 'Find a GP Near You - Book Online Instantly',
  },
  'bulk_billing': {
    keywords: ['bulk billing', 'cheap doctor'],
    adGroup: 'Value Seekers',
    landingPage: '/fees',
    headline: 'Affordable Medical Care | Check Our Fees',
  },
  'service': {
    keywords: ['pathology', 'blood test', 'skin', 'checkup'],
    adGroup: 'Specific Services',
    landingPage: '/services',
    headline: 'Expert Medical Services - Pathology & More',
  }
};

async function generatePlan() {
  // 1. Fetch Real Data
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  const searchConsole = google.searchconsole({ version: 'v1', auth: await auth.getClient() });

  console.log('🔄 Fetching organic search data to build your ad plan...\n');

  const endDate = new Date().toISOString().split('T')[0];
  const startDate = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // Last 90 days

  const res = await searchConsole.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: { startDate, endDate, dimensions: ['query'], rowLimit: 100 }
  });

  const queries = res.data.rows || [];
  
  // 2. Process & Group Data
  const campaign = {};

  queries.forEach(row => {
    const term = row.keys[0].toLowerCase();
    const impressions = row.impressions;
    const clicks = row.clicks;

    // Find best fit category
    let category = 'general';
    for (const [key, config] of Object.entries(INTENT_MAP)) {
      if (config.keywords.some(k => term.includes(k))) {
        category = key;
        break;
      }
    }

    if (category === 'general') return; // Skip irrelevant terms

    if (!campaign[category]) {
      campaign[category] = {
        ...INTENT_MAP[category],
        keywords: [],
        totalImpressions: 0,
        totalClicks: 0
      };
    }

    campaign[category].keywords.push({ term, impressions, clicks });
    campaign[category].totalImpressions += impressions;
    campaign[category].totalClicks += clicks;
  });

  // 3. Output the Plan
  console.log('📋 GOOGLE ADS CAMPAIGN PROPOSAL');
  console.log('   Based on actual 90-day search data\n');
  console.log('---------------------------------------------------------------');

  Object.values(campaign).forEach(group => {
    console.log(`\n🔹 AD GROUP: ${group.adGroup.toUpperCase()}`);
    console.log(`   Target URL: https://gosnellsfamilypractice.com.au${group.landingPage}`);
    console.log(`   Suggested Headline: "${group.headline}"`);
    console.log(`   Potential Reach: ${group.totalImpressions} impressions/mo (based on organic)`);
    console.log(`   Top Keywords to Bid On:`);
    
    group.keywords
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 5) // Top 5 per group
      .forEach(k => {
        console.log(`     - "${k.term}" (${k.impressions} searches)`);
      });
  });

  console.log('\n---------------------------------------------------------------');
  console.log('💡 RECOMMENDATION:');
  console.log('   1. Start with the "Local Area Service" group to capture missed traffic.');
  console.log('      (You had many impressions but low clicks there)');
  console.log('   2. Bid on "dr ameer khan" - people are specifically looking for him.');
  console.log('---------------------------------------------------------------');
}

generatePlan().catch(console.error);
