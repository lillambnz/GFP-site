const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 720, height: 1280 } });

  const tileBase64 = fs.readFileSync('public/images/bulk-billing/BBPIP Practice social tile 1080x1080_1.png').toString('base64');
  const imgSrc = 'data:image/png;base64,' + tileBase64;

  await page.setContent(`
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          width: 720px; height: 1280px;
          background: linear-gradient(160deg, #00573F 0%, #00843D 30%, #006B31 60%, #004D2C 100%);
          display: flex; align-items: center; justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow: hidden; position: relative;
        }
        .circle1 { position: absolute; top: -120px; right: -100px; width: 380px; height: 380px; background: rgba(242,169,0,0.15); border-radius: 50%; }
        .circle2 { position: absolute; bottom: -140px; left: -100px; width: 340px; height: 340px; background: rgba(255,255,255,0.08); border-radius: 50%; }
        .circle3 { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 640px; height: 640px; background: rgba(255,255,255,0.03); border-radius: 50%; }
        .container { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 48px 120px; z-index: 1; }
        .badge { display: inline-flex; align-items: center; background: rgba(242,169,0,0.9); color: #00573F; padding: 12px 28px; border-radius: 50px; font-size: 20px; font-weight: 700; margin-bottom: 34px; letter-spacing: 1px; text-transform: uppercase; }
        .title { color: white; font-size: 74px; font-weight: 800; line-height: 1.1; margin-bottom: 24px; text-shadow: 0 2px 20px rgba(0,0,0,0.2); }
        .title .highlight { color: #F2A900; }
        .subtitle { color: rgba(255,255,255,0.9); font-size: 28px; line-height: 1.5; max-width: 560px; margin-bottom: 40px; }
        .tile-container { background: white; border-radius: 24px; padding: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); transform: rotate(3deg); margin-bottom: 48px; }
        .tile-container img { display: block; width: 300px; height: 300px; border-radius: 12px; }
        .benefits { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; }
        .benefit { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.15); padding: 12px 22px; border-radius: 50px; color: white; font-size: 19px; font-weight: 600; }
        .benefit .check { color: #F2A900; font-size: 22px; font-weight: 900; }
        .gold-bar { position: absolute; bottom: 0; left: 0; right: 0; height: 6px; background: linear-gradient(90deg, #F2A900, #FFD000, #F2A900); }
      </style>
    </head>
    <body>
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="container">
        <div class="badge">Exciting News</div>
        <h1 class="title">We're Now<br><span class="highlight">Bulk Billing!</span></h1>
        <p class="subtitle">No out-of-pocket costs for all eligible Medicare card holders at Gosnells Family Practice</p>
        <div class="tile-container">
          <img src="${imgSrc}" alt="Bulk Billing" />
        </div>
        <div class="benefits">
          <div class="benefit"><span class="check">&#10003;</span> All Medicare Cards</div>
          <div class="benefit"><span class="check">&#10003;</span> Open 7 Days</div>
        </div>
      </div>
      <div class="gold-bar"></div>
    </body>
    </html>
  `);

  await page.waitForTimeout(500);
  await page.screenshot({ path: 'public/images/hero/bulk-billing-banner-mobile.png' });
  await browser.close();
  console.log('Done!');
})();
