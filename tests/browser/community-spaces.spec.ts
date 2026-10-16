import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const path = '/work/community-spaces/';

test('homepage feature leads to the source-backed collaborative review case study', async ({ page, request }) => {
  await page.goto('/');
  const feature = page.getByRole('article', { name: 'Community Spaces', exact: true });
  await expect(feature.getByRole('img')).toHaveCount(3);
  await feature.getByRole('link', { name: 'Read the case study' }).click();
  await expect(page).toHaveURL(new RegExp(`${path}$`));
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Community Spaces');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  await expect(page.locator('.project-metadata')).toContainText('Katelyn Jewett, Illiana Gonzalez, Boran Erdogan, Suleyman Koncagul');
  await expect(page.locator('.project-metadata')).toContainText('Shared research');
  await expect(page.locator('#research')).toContainText('approximately 9 out of 12');
  await expect(page.locator('#research')).toContainText('findings reported in the class materials');
  await expect(page.locator('#outcomes')).toContainText('do not establish a public launch');
  await expect(page.locator('#next-steps')).toContainText('proposed tasks, not completed tests');
  await expect(page.locator('body')).not.toContainText('www.figma.com/api/mcp/asset');
  expect((await request.get(path)).status()).toBe(200);
  expect((await request.get('/work/pure-michigan/')).status()).toBe(404);
});

test('case-study anchors, keyboard skip link, and return navigation work', async ({ page }) => {
  await page.goto(path);
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  const link = page.getByRole('navigation', { name: 'Case study sections' }).getByRole('link', { name: 'Proposed next steps' });
  await link.focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#next-steps$/);
  await expect(page.locator('#next-steps h2')).toBeInViewport();
  const missing = await page.locator('a[href^="#"]').evaluateAll((links) => links.map((a) => a.getAttribute('href')!).filter((href) => !document.getElementById(href.slice(1))));
  expect(missing).toEqual([]);
  await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'Work', exact: true }).click();
  await expect(page).toHaveURL(/\/#work$/);
  await expect(page.getByRole('heading', { name: 'Selected work', exact: true })).toBeInViewport();
});

test('authentic image exports load with meaningful descriptions and intact proportions', async ({ page, request }) => {
  await page.goto(path);
  const images = page.locator('main img');
  await expect(images).toHaveCount(10);
  for (const img of await images.all()) {
    await img.scrollIntoViewIfNeeded();
    await expect(img).toHaveJSProperty('complete', true);
    await expect(img).toHaveAttribute('alt', /Community Spaces|Grayscale|Team task-flow|Hand-drawn/);
    expect(await img.evaluate((node: HTMLImageElement) => node.naturalWidth > 0 && Math.abs(node.getBoundingClientRect().width / node.getBoundingClientRect().height - node.naturalWidth / node.naturalHeight) < .01)).toBe(true);
    const src = await img.getAttribute('src');
    expect(src).toMatch(/^\/_astro\/.+\.png$/);
    const response = await request.get(src!);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('image/png');
  }
  await expect(page.locator('figcaption a')).toHaveCount(10);
});

test('desktop and narrow layouts retain readable figures and comparison without overflow', async ({ page }) => {
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(path);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    for (const img of await page.locator('main img').all()) {
      await img.scrollIntoViewIfNeeded();
      await expect(img).toHaveJSProperty('complete', true);
    }
    await page.evaluate(() => scrollTo(0, 0));
    if (width === 390 || width === 1440) {
      await page.screenshot({ path: `test-results/community-${width}.png`, fullPage: true });
      await page.screenshot({ path: `test-results/community-cover-${width}.jpg`, quality: 80 });
      await page.locator('.design-comparison').screenshot({ path: `test-results/community-comparison-${width}.jpg`, quality: 80 });
    }
    await page.goto('/');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    if (width === 1440) await page.locator('.community-feature').screenshot({ path: 'test-results/community-home-feature.jpg', quality: 80 });
  }
});

test('case-study light/dark and mobile pass automated accessibility checks', async ({ page }) => {
  await page.goto(path);
  const audit = async () => new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  expect((await audit()).violations).toEqual([]);
  await page.getByRole('button', { name: 'Dark mode' }).click();
  expect((await audit()).violations).toEqual([]);
  await page.screenshot({ path: 'test-results/community-dark.jpg', quality: 80 });
  await page.setViewportSize({ width: 390, height: 844 });
  expect((await audit()).violations).toEqual([]);
});

test('case-study navigation remains available without JavaScript and respects reduced motion', async ({ browser, page }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const plain = await context.newPage();
  await plain.goto(`http://127.0.0.1:4322${path}`);
  await expect(plain.getByRole('heading', { level: 1 })).toBeVisible();
  await plain.getByRole('navigation', { name: 'Case study sections' }).getByRole('link', { name: 'Reported research' }).click();
  await expect(plain).toHaveURL(/#research$/);
  await expect(plain.getByRole('button', { name: 'Dark mode' })).toBeHidden();
  await context.close();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(path);
  expect(await page.locator('.case-hero').evaluate((el) => getComputedStyle(el).animationName)).toBe('none');
});
