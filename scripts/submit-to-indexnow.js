#!/usr/bin/env node

/**
 * IndexNow - Instant Search Engine Notification
 *
 * IndexNow is supported by Bing, Yandex, and other search engines.
 * No authentication required - just submit and go!
 *
 * Usage:
 *   node scripts/submit-to-indexnow.js
 */

const https = require('https');

// Configuration
const SITE_HOST = 'gosnellsfamilypractice.com.au';
const API_KEY = 'your-api-key-here'; // Can be any string, or generate one

// All URLs from sitemap
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

// Generate a simple API key if not set
function generateApiKey() {
  return Array(32).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}

// Submit URLs to IndexNow
function submitToIndexNow() {
  const apiKey = API_KEY === 'your-api-key-here' ? generateApiKey() : API_KEY;

  console.log('🚀 Submitting URLs to IndexNow...\n');
  console.log(`📊 Total URLs: ${URLS.length}`);
  console.log(`🔑 API Key: ${apiKey}\n`);
  console.log('⚠️  IMPORTANT: Save this API key for future submissions!\n');

  const payload = JSON.stringify({
    host: SITE_HOST,
    key: apiKey,
    keyLocation: `https://${SITE_HOST}/${apiKey}.txt`,
    urlList: URLS
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('='.repeat(70));
      console.log('📊 INDEXNOW SUBMISSION RESULT');
      console.log('='.repeat(70));
      console.log(`Status Code: ${res.statusCode}`);

      if (res.statusCode === 200) {
        console.log('✅ SUCCESS! All URLs submitted to IndexNow');
        console.log('\n📝 Next Steps:');
        console.log('   1. Create a file at your website root:');
        console.log(`      https://${SITE_HOST}/${apiKey}.txt`);
        console.log('   2. File content should be just the API key:');
        console.log(`      ${apiKey}`);
        console.log('\n   This verifies you own the domain.');
        console.log('\n✨ Search engines will be notified within minutes!');
        console.log('   Supported: Bing, Yandex, Seznam.cz, Naver');
      } else if (res.statusCode === 202) {
        console.log('✅ URLs accepted and will be processed');
      } else {
        console.log('⚠️  Unexpected status code');
        console.log(`Response: ${data}`);
      }

      console.log('='.repeat(70) + '\n');
    });
  });

  req.on('error', (error) => {
    console.error('❌ Error submitting to IndexNow:', error.message);
  });

  req.write(payload);
  req.end();
}

// Run the script
submitToIndexNow();
