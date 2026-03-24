const { chromium } = require('playwright');

(async () => {
  const userDataDir = 'C:/Users/Mitta/AppData/Local/BraveSoftware/Brave-Browser/User Data';
  const bravePath = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe';
  const CODE = 'E6A9-7FC4';

  const browser = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    executablePath: bravePath,
    args: ['--no-sandbox'],
    timeout: 15000,
  });

  const page = await browser.newPage();
  await page.goto('https://github.com/login/device');
  await page.waitForTimeout(4000);

  console.log('URL:', page.url());

  // Try to find code input
  const inputs = await page.locator('input:visible').all();
  console.log('Inputs:', inputs.length);

  let filled = false;
  for (const inp of inputs) {
    const autocomplete = await inp.getAttribute('autocomplete').catch(() => '');
    const name = await inp.getAttribute('name').catch(() => '');
    const placeholder = await inp.getAttribute('placeholder').catch(() => '');
    console.log('input:', { autocomplete, name, placeholder });
    if (autocomplete === 'one-time-code' || name === 'user-code' || placeholder?.includes('code')) {
      await inp.fill(CODE);
      filled = true;
      console.log('Code ingevuld!');
    }
  }

  if (!filled && inputs.length > 0) {
    // Try first visible text input
    for (const inp of inputs) {
      const type = await inp.getAttribute('type').catch(() => 'text');
      if (type === 'text' || !type) {
        await inp.fill(CODE);
        filled = true;
        console.log('Code ingevuld in eerste tekstveld');
        break;
      }
    }
  }

  if (filled) {
    await page.waitForTimeout(500);
    await page.keyboard.press('Enter');
    console.log('Enter gedrukt - wacht op autorisatie...');
    await page.waitForTimeout(8000);
    console.log('Eindpagina URL:', page.url());
  }

  await browser.close();
  console.log('Klaar!');
})().catch(e => console.error('Fout:', e.message));
