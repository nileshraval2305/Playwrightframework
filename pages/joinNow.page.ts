import type {Page, Locator} from '@playwright/test';
import {expect} from '@playwright/test';

export default class JoinNowPage {
	readonly joinLink: Locator;
	readonly membershipHeader: Locator;
	readonly performerTitle: Locator;
	readonly agentTitle: Locator;
	readonly castingProfessionalsTitle: Locator;
	readonly youngPerformersTitle: Locator;
	readonly graduatesTitle: Locator;

	constructor(readonly page: Page) {
		this.joinLink = page.locator(
			'nav[id=\'desktopNav\'] a[title=\'Find out more about our membership types and how to join Spotlight\']',
		);
		this.membershipHeader = page.locator('.heroHeading');
		this.performerTitle = page.locator(
			'div[class=\'containerGroups\'] div:nth-child(1) div:nth-child(2) strong:nth-child(1)',
		);
		this.agentTitle = page.locator(
			'div[class=\'containerGroups\'] div:nth-child(2) div:nth-child(2) strong:nth-child(1)',
		);
		this.castingProfessionalsTitle = page.locator(
			'div.joinWrapper section:nth-child(2) div.containerGroups div.groupHolder:nth-child(3) div.groupTitle > strong:nth-child(1)',
		);
		this.youngPerformersTitle = page.locator(
			'div.joinWrapper section:nth-child(2) div.containerGroups div.groupHolder:nth-child(4) div.groupTitle > strong:nth-child(1)',
		);
		this.graduatesTitle = page.locator(
			'div.joinWrapper section:nth-child(2) div.containerGroups div.groupHolder:nth-child(5) div.groupTitle > strong:nth-child(1)',
		);
	}

	async joinnowbtnOnMainPage() {
		await this.joinLink.click();
	}

	async validateMembershipText() {
		await expect(this.membershipHeader).toHaveText('Your Membership Options');
	}

	async validatePerformerTitle() {
		await expect(this.performerTitle).toHaveText('Performers');
	}

	async validateAgentsTitle() {
		await expect(this.agentTitle).toHaveText('Agents');
	}

	async validateCastingProfessionalsTitle() {
		await expect(this.castingProfessionalsTitle).toHaveText('Casting Professionals');
	}

	async validateYoungPerformersTitle() {
		await expect(this.youngPerformersTitle).toHaveText('Young Performers');
	}

	async validateGratuatesTitle() {
		await expect(this.graduatesTitle).toHaveText('Graduates');
	}
}
