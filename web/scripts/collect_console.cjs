const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();

    page.on('console', msg => console.log('[PAGE CONSOLE]', msg.type().toUpperCase(), msg.text()));
    page.on('pageerror', err => console.error('[PAGE ERROR]', err.stack || err.toString()));
    page.on('requestfailed', req => console.error('[REQUEST FAILED]', req.url(), req.failure() && req.failure().errorText));

    const url = 'http://localhost:4321/';
    console.log('Visiting', url);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    await page.waitForTimeout(3000);

    try {
      const selector = '.card .section';
      const el = await page.$(selector);
      if (el) {
        console.log('Hovering', selector);
        await el.hover();
        await page.waitForTimeout(1000);
      } else {
        console.log('No', selector, 'found to hover');
      }
    } catch (e) {
      console.error('Hover failed', e && e.toString());
    }

    await page.waitForTimeout(1000);
    await browser.close();
    console.log('Done');
  } catch (err) {
    console.error('Script error', err);
    process.exit(1);
  }
})();
