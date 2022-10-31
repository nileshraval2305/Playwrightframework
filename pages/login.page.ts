/* eslint-disable no-mixed-spaces-and-tabs */
import type {Page, Locator} from '@playwright/test';

export default class LoginPage {
	// eslint-disable-next-line @typescript-eslint/parameter-properties
	readonly page: Page;
	readonly signInLink: Locator;
	readonly myaccountbtn: Locator;
	readonly loginInput: Locator;
	readonly passwordInput: Locator;
	readonly performerCheckbox: Locator;
	readonly signInBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.signInLink = this.page.locator('#signInLink');
		this.loginInput = this.page.locator('#Username');
		this.passwordInput = this.page.locator('#Password');
		this.performerCheckbox = this.page.locator('a.performer');
	  	this.signInBtn = this.page.locator('#sign-in-button');
	    this.myaccountbtn = this.page.locator('#myAccountLink');
	 }

	async navigateToUrl(URL: string) {
		await this.page.goto(URL);
	}

	async signinbuttonOnMainPage() {
		await this.signInLink.click();
	}

	async myaccountbtnOnMainPage() {
		await this.myaccountbtn.click();
	}

	async enterUsername(username: string) {
		await this.loginInput.fill(username);
	}

	async enterPassword(password: string) {
		await this.passwordInput.fill(password);
	}

	async performerOption() {
		await this.performerCheckbox.click();
	}

	async continueButton() {
		await Promise.all([this.page.waitForLoadState('domcontentloaded'), this.signInBtn.click()]);
	}

	async doLogin(username: string, password: string) {
		await this.enterUsername(username);
		await this.enterPassword(password);
		await this.continueButton();
	}
}
