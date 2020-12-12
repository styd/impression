const path = require('path');
const timeout = 5000;

const absolutePath = (pageRelativePath) => {
  return `file:${path.join(__dirname, 'pages', 'one-time-impression', pageRelativePath)}`
};

describe('one time impression', () => {
  let page;
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage()
    await page.setViewport({ width: 0, height: 0 })
  }, timeout);

  afterAll(async () => {
    await page.close()
  })

  describe('use on', () => {
    it('everything is working perfectly', async () => {
      await page.goto(absolutePath('[00]-on.html'));

      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('$10');
      expect(text).toContain('0M');
      expect(text).toContain('4%');

      await page.waitForTimeout(70);

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('$412');

      page.evaluate(() => {
        let counter = document.querySelector('.last');
        counter.scrollIntoViewIfNeeded(true);
      });
      await page.waitForTimeout(70);

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('64%');

      page.evaluate(() => {
        let counter = document.querySelector('.immediately-appear');
        counter.scrollIntoViewIfNeeded(true);
      });

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('$412');
      await page.waitForTimeout(70);

      page.evaluate(() => {
        let counter = document.querySelector('.last');
        counter.scrollIntoViewIfNeeded(true);
      });
      await page.waitForTimeout(70);

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('64%');
    })
  })

  describe('use on with custom selector', () => {
    it('everything is working perfectly', async () => {
      await page.goto(absolutePath('[01]-on--custom-selector.html'));

      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('$10');
      expect(text).toContain('0M');
      expect(text).toContain('4%');

      await page.waitForTimeout(70);

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('$412');

      page.evaluate(() => {
        let counter = document.querySelector('.last--impression');
        counter.scrollIntoViewIfNeeded(true);
      });
      await page.waitForTimeout(70);

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('64%');

      page.evaluate(() => {
        let counter = document.querySelector('.immediately-appear--impression');
        counter.scrollIntoViewIfNeeded(true);
      });

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('$412');
      await page.waitForTimeout(70);

      page.evaluate(() => {
        let counter = document.querySelector('.last--impression');
        counter.scrollIntoViewIfNeeded(true);
      });
      await page.waitForTimeout(70);

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('64%');
    })
  })

  describe('use on and off', () => {
    it('everything is working perfectly', async () => {
      await page.goto(absolutePath('[02]-on--off.html'));

      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('$10');
      expect(text).toContain('0M');
      expect(text).toContain('4%');

      await page.waitForTimeout(70);

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('$412');

      page.evaluate(() => {
        let counter = document.querySelector('.last');
        counter.scrollIntoViewIfNeeded(true);
      });
      await page.waitForTimeout(70);

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('64%');

      page.evaluate(() => {
        let counter = document.querySelector('.immediately-appear');
        counter.scrollIntoViewIfNeeded(true);
      });

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('$212');
      await page.waitForTimeout(70);

      page.evaluate(() => {
        let counter = document.querySelector('.last');
        counter.scrollIntoViewIfNeeded(true);
      });
      await page.waitForTimeout(70);

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('32%');
    })
  })

  describe('use on and off with custom selector', () => {
    it('everything is working perfectly', async () => {
      await page.goto(absolutePath('[03]-on--off--custom-selector.html'));

      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('$10');
      expect(text).toContain('0M');
      expect(text).toContain('4%');

      await page.waitForTimeout(70);

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('$412');

      page.evaluate(() => {
        let counter = document.querySelector('.last--impression');
        counter.scrollIntoViewIfNeeded(true);
      });
      await page.waitForTimeout(70);

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('64%');

      page.evaluate(() => {
        let counter = document.querySelector('.immediately-appear--impression');
        counter.scrollIntoViewIfNeeded(true);
      });

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('$212');
      await page.waitForTimeout(70);

      page.evaluate(() => {
        let counter = document.querySelector('.last--impression');
        counter.scrollIntoViewIfNeeded(true);
      });
      await page.waitForTimeout(70);

      text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('32%');
    })
  })
}, timeout)
