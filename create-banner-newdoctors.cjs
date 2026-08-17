// Generates the "Meet Our New Doctors" hero banner (desktop + mobile).
// Run: node create-banner-newdoctors.cjs
const { chromium } = require('playwright');
const fs = require('fs');

const doctors = [
  { file: 'public/images/team/Dr-Siti-white.jpg', name: 'Dr Sue', sub: 'Women\'s Health · Family Planning', pos: 'top' },
  { file: 'public/images/team/drwan.jpeg', name: 'Dr Wan Maisarah', sub: 'Menopause · Contraception · Implanon', pos: 'top' },
  { file: 'public/images/team/dr-nil-white.jpg', name: 'Dr Nilanjana Haque', sub: 'Women\'s & Sexual Health · Children', pos: 'top' },
].map(d => ({ ...d, src: 'data:image/jpeg;base64,' + fs.readFileSync(d.file).toString('base64') }));

const base = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; overflow: hidden; position: relative;
         background: linear-gradient(135deg, #0b5f66 0%, #1a8b93 45%, #10b981 100%); color: #fff; }
  .c1 { position: absolute; width: 520px; height: 520px; border-radius: 50%; background: rgba(255,255,255,0.08); }
  .c2 { position: absolute; width: 380px; height: 380px; border-radius: 50%; background: rgba(0,0,0,0.10); }
  .badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.35);
           padding: 10px 22px; border-radius: 50px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
  .title { font-weight: 800; line-height: 1.05; text-shadow: 0 2px 20px rgba(0,0,0,0.25); }
  .title .hl { color: #fde68a; }
  .sub { color: rgba(255,255,255,0.92); line-height: 1.45; }
  .cta { display: inline-flex; align-items: center; gap: 10px; background: #fff; color: #0b5f66; font-weight: 800; border-radius: 50px;
         box-shadow: 0 10px 30px rgba(0,0,0,0.25); }
  .card { background: #fff; border-radius: 22px; padding: 12px 12px 14px; box-shadow: 0 20px 50px rgba(0,0,0,0.30); text-align: center; color: #0f172a; }
  .card img { display: block; width: 100%; object-fit: cover; object-position: top; border-radius: 14px; }
  .card .n { font-weight: 800; margin-top: 10px; }
  .card .s { color: #475569; margin-top: 2px; }
  .gold { position: absolute; bottom: 0; left: 0; right: 0; height: 6px; background: linear-gradient(90deg, #14b8a6, #34d399, #14b8a6); }
`;

function desktopHtml() {
  return `<html><head><style>${base}
    body { width: 1500px; height: 800px; }
    .c1 { top: -180px; right: -120px; } .c2 { bottom: -160px; left: -120px; }
    .wrap { position: relative; z-index: 1; display: grid; grid-template-columns: 560px 1fr; align-items: center; gap: 40px; padding: 0 80px; height: 100%; }
    .badge { font-size: 15px; margin-bottom: 26px; }
    .title { font-size: 66px; margin-bottom: 20px; }
    .sub { font-size: 22px; max-width: 520px; margin-bottom: 30px; }
    .cta { font-size: 18px; padding: 16px 30px; }
    .cards { display: flex; gap: 22px; justify-content: flex-end; align-items: flex-end; }
    .card { width: 250px; }
    .card img { height: 250px; }
    .card .n { font-size: 18px; } .card .s { font-size: 12px; }
    .card:nth-child(1) { transform: rotate(-3deg) translateY(10px); }
    .card:nth-child(2) { transform: translateY(-14px); }
    .card:nth-child(3) { transform: rotate(3deg) translateY(10px); }
  </style></head><body>
    <div class="c1"></div><div class="c2"></div>
    <div class="wrap">
      <div>
        <div class="badge">✨ Now Accepting New Patients</div>
        <h1 class="title">Meet Our<br><span class="hl">New Doctors</span></h1>
        <p class="sub">Three experienced GPs have joined Gosnells Family Practice — bulk billing for all eligible Medicare card holders.</p>
        <div class="cta">Book online now &nbsp;→</div>
      </div>
      <div class="cards">
        ${doctors.map(d => `<div class="card"><img src="${d.src}" alt=""><div class="n">${d.name}</div><div class="s">${d.sub}</div></div>`).join('')}
      </div>
    </div>
    <div class="gold"></div>
  </body></html>`;
}

function mobileHtml() {
  return `<html><head><style>${base}
    body { width: 720px; height: 1280px; }
    .c1 { top: -200px; right: -160px; } .c2 { bottom: -170px; left: -140px; }
    .wrap { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; text-align: center; padding: 200px 44px 0; height: 100%; }
    .badge { font-size: 17px; margin-bottom: 26px; }
    .title { font-size: 68px; margin-bottom: 20px; }
    .sub { font-size: 24px; max-width: 600px; margin-bottom: 34px; }
    .cards { display: flex; gap: 14px; justify-content: center; align-items: flex-end; margin-bottom: 36px; }
    .card { width: 206px; padding: 9px 9px 11px; border-radius: 18px; }
    .card img { height: 205px; border-radius: 12px; }
    .card .n { font-size: 15px; } .card .s { display: none; }
    .card:nth-child(1) { transform: rotate(-3deg) translateY(8px); }
    .card:nth-child(2) { transform: translateY(-10px); }
    .card:nth-child(3) { transform: rotate(3deg) translateY(8px); }
    .cta { font-size: 22px; padding: 18px 36px; }
  </style></head><body>
    <div class="c1"></div><div class="c2"></div>
    <div class="wrap">
      <div class="badge">✨ Now Accepting New Patients</div>
      <h1 class="title">Meet Our<br><span class="hl">New Doctors</span></h1>
      <p class="sub">Three experienced GPs have joined Gosnells Family Practice — bulk billing available.</p>
      <div class="cards">
        ${doctors.map(d => `<div class="card"><img src="${d.src}" alt=""><div class="n">${d.name}</div><div class="s">${d.sub}</div></div>`).join('')}
      </div>
      <div class="cta">Tap to book online &nbsp;→</div>
    </div>
    <div class="gold"></div>
  </body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  for (const [html, w, h, out] of [
    [desktopHtml(), 1500, 800, 'public/images/hero/new-doctors-banner.jpg'],
    [mobileHtml(), 720, 1280, 'public/images/hero/new-doctors-banner-mobile.jpg'],
  ]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.setContent(html);
    await page.waitForTimeout(400);
    await page.screenshot({ path: out, type: 'jpeg', quality: 88 });
    await page.close();
    console.log('Wrote', out, Math.round(fs.statSync(out).size / 1024) + 'KB');
  }
  await browser.close();
})();
