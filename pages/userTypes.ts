import type {Page,Locator} from '@playwright/test';
import { expect } from '@playwright/test';

export default class UserTypes {
	
	readonly PerformerOption:Locator;
    readonly AgentOption:Locator;
	readonly CastingDirectorOption:Locator;
	readonly ValidatePerformerLogin:Locator;
	readonly ValidateAgentLogin:Locator;
	readonly ValidateCastingDirectorLogin:Locator;
	
	constructor( public page: Page) {
		this.PerformerOption = this.page.locator('a.performer');
        this.AgentOption= this.page.locator('a.agent');
        this.CastingDirectorOption=this.page.locator('a.casting');
	    this.ValidatePerformerLogin= this.page.locator('text=Upcoming events');
	    this.ValidateAgentLogin=this.page.locator('input[placeholder=\'Search performer name\']');
	    this.ValidateCastingDirectorLogin=this.page.locator('div[class=\'a-content-container\'] li:nth-child(1) a:nth-child(1)');
	
	
	
	}

	async performerOption() {
		await this.PerformerOption.click();
	}

	async agentOption() {
		await this.AgentOption.click();
	}

	async castingDirectorOption() {
		await this.CastingDirectorOption.click();
	}

	async validatePerformerLogin() {
		const gettext = await this.ValidatePerformerLogin.textContent();
		await expect.soft(gettext).toContain('Upcoming events');
	}

	async validateAgentLogin() {
		await expect.soft(this.ValidateAgentLogin).toBeVisible();
	}

	async validateCastingDirectorLogin() {
		await expect
			.soft(this.ValidateCastingDirectorLogin)
			.toBeVisible();
	}
}
