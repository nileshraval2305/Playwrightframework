import { test as base, Page, Browser} from '@playwright/test';
export { expect } from '@playwright/test';



export default class Performer_Storage {
  // Page signed in as "Performer".
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  static async create(browser: Browser) {
    const context = await browser.newContext({ storageState: 'Performer.json' });
    const page = await context.newPage();
    return new Performer_Storage(page);
  }
}