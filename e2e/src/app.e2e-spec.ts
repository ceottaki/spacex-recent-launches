import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('spacex-recent-launches App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display brand title message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('SpaceX Recent Launches');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
