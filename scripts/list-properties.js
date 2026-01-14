const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const CREDENTIALS_PATH = path.join(__dirname, 'google-indexing-credentials.json');
const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));

async function listSites() {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  const authClient = await auth.getClient();
  const searchConsole = google.searchconsole({ version: 'v1', auth: authClient });

  try {
    const res = await searchConsole.sites.list();
    console.log('✅ Properties this bot can see:');
    res.data.siteEntry.forEach(site => console.log(` - ${site.siteUrl}`));
  } catch (e) {
    console.error('❌ Error listing sites:', e.message);
  }
}
listSites();
