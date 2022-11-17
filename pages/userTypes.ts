/* eslint-disable no-mixed-spaces-and-tabs */
import type {Page, Locator} from '@playwright/test';
import {expect} from '@playwright/test';

export default class UserTypes {
	readonly performerOption: Locator;
	readonly agentOption: Locator;
	readonly castingDirectorOption: Locator;
	readonly validatePerformerLogin: Locator;
	readonly validateAgentLogin: Locator;
	readonly validateCastingDirectorLogin: Locator;

	constructor(public page: Page) {
		this.performerOption = this.page.locator('a.performer');
		this.agentOption = this.page.locator('a.agent');
		this.castingDirectorOption = this.page.locator('a.casting');
	    this.validatePerformerLogin = this.page.locator('text=Upcoming events');
	    this.validateAgentLogin = this.page.locator('input[placeholder=\'Search performer name\']');
	    this.validateCastingDirectorLogin = this.page.locator('div[class=\'a-content-container\'] li:nth-child(1) a:nth-child(1)');
	}

	async doperformerOption() {
		await this.performerOption.click();
	}

	async doagentOption() {
		await this.agentOption.click();
	}

	async docastingDirectorOption() {
		await this.castingDirectorOption.click();
	}

	async validatePerformerLogintest() {
		const gettext = await this.validatePerformerLogin.textContent();
		expect.soft(gettext).toContain('Upcoming events');
	}

	async validateAgentLogintest() {
		await expect.soft(this.validateAgentLogin).toBeVisible();
	}

	async validateCastingDirectorLogintest() {
		await expect
			.soft(this.validateCastingDirectorLogin)
			.toBeVisible();
	}
}
