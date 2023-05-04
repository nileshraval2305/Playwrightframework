/* eslint-disable default-case */

/* eslint-disable @typescript-eslint/naming-convention */
import type {Page, Locator} from '@playwright/test';
import {expect} from '@playwright/test';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';

export default class webApplicationActions {
	readonly unicid: string;
	date: string;
	getday: number;
	getname: string;
	Loc: any;
	Locator: any;
	constructor(public page: Page) {
		this.unicid = uuidv4();
	}

	async navigateToURL(url: string) {
		await this.page.goto(url);
	}

	async waitForPageNavigation(event: string): Promise<void> {
		switch (event.toLowerCase()) {
			case 'networkidle':
				await this.page.waitForNavigation({waitUntil: 'networkidle'});
				break;
			case 'load':
				await this.page.waitForNavigation({waitUntil: 'load'});
				break;
			case 'domcontentloaded':
				await this.page.waitForNavigation({waitUntil: 'domcontentloaded'});
		}
	}

	async uuidalphabet() {
		// Console.log(this.unicid.replace(/[0-9,-]/g, ''));

		return this.unicid.replace(/[0-9,-]/g, '');
	}

	async uuidAlphabetWithFixLength(startwith: string) {
		this.getname = this.unicid.replace(/[0-9,-]/g, '');
		return startwith.concat(this.getname.substring(0, 25));
	}

	async delay(time: number): Promise<void> {
		return new Promise(resolve => {
			setTimeout(resolve, time);
		});
	}

	async clickElement(locator: Locator): Promise<void> {
		await locator.click();
	}

	async getElementText(locator: Locator): Promise<string> {
		return locator.innerText();
	}

	async enterElementText(locator: Locator, text: string): Promise<void> {
		await locator.fill(text);
	}

	async typeElement(locator: Locator, text: string): Promise<void> {
		await locator.type(text);
	}

	async dragAndDrop(dragElementLocator: string, dropElementLocator: string): Promise<void> {
		await this.page.dragAndDrop(dragElementLocator, dropElementLocator);
	}

	async selectOptionFromDropdown(locator: string, option: string): Promise<void> {
		const selectDropDownLocator = this.page.locator(locator);
		await selectDropDownLocator.type(option);
	}

	async keyPress(locator: string, key: string): Promise<void> {
		await this.page.press(locator, key);
	}

	async verifyElementText(locator: string, text: string): Promise<void> {
		const textValue = await this.page.textContent(locator);
		expect(textValue.trim()).toBe(text);
	}

	async verifyElementContainsText(locator: string, text: string): Promise<void> {
		await expect(this.page.locator(locator)).toContainText(text);
	}

	async verifyElementContainsTextUsingLocator(expectedlocator: string, actualLocator: string): Promise<void> {
		expect(expectedlocator).toContain(actualLocator);
	}

	async verifyJSElementValue(locator: string, text: string): Promise<void> {
		const textValue = await this.page.$eval(locator, (element: HTMLInputElement) => element.value);
		expect(textValue.trim()).toBe(text);
	}

	async verifyElementAttribute(locator: Locator, attribute: string, actualValue: string): Promise<void> {
		const textValue = await locator.getAttribute(attribute);
		expect(textValue.trim()).toBe(actualValue);
	}

	async verifyElementIsDisplayed(locator: string, errorMessage: string): Promise<void> {
		await this.page.waitForSelector(locator, {state: 'visible'})
			.catch(() => {
				throw new Error(`${errorMessage}`);
			});
	}

	async expectToBeTrue(status: boolean, errorMessage: string): Promise<void> {
		expect(status, `${errorMessage}`).toBe(true);
	}

	async expectToBeValue(expectedValue: string, actualValue: string, errorMessage: string): Promise<void> {
		expect(expectedValue.trim(), `${errorMessage}`).toBe(actualValue);
	}

	async validateGetAndCompareText(Expected_Locator: Locator, Expected_Value: string) {
		await expect(Expected_Locator).toHaveText(Expected_Value);
	}

	async uploadFileImages(File_Location: string, Locator: Locator) {
		await Locator.setInputFiles(File_Location);
	}

	async selectdropdownvalue(Locator: Locator, value: string) {
		await Locator.selectOption(value);
	}

	async selectDate(): Promise<string> {
		return this.date;
	}
}
