/* eslint-disable @typescript-eslint/member-ordering */
import type {Page, Browser} from '@playwright/test';
import {test as base} from '@playwright/test';
export {expect} from '@playwright/test';

export default class Performer_Storage {
	// Page signed in as "Performer".

 constructor(public page: Page) {
		this.page = page;
	}

	static async create(browser: Browser) {
		const context = await browser.newContext({storageState: 'Performer.json'});
		const page = await context.newPage();
		return new Performer_Storage(page);
	}
}
