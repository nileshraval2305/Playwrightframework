/* eslint-disable no-mixed-spaces-and-tabs */
import type {Page, Locator} from '@playwright/test';
import {expect} from '@playwright/test';
import {v4 as uuidv4} from 'uuid';

export default class PerformerPage {
	readonly performerFindmoreBtn: Locator;
	readonly performerText: Locator;
	readonly performerJoinBtn: Locator;
	readonly performerSpotlightProfileText: Locator;
	readonly performerSpotlightDiscountsText: Locator;
	readonly performerDevelopementEventsText: Locator;
	readonly performerAdviceandSupportText: Locator;
	readonly performerContactText: Locator;
	readonly performerFaqText: Locator;
	readonly performerGetPriceText: Locator;
	readonly performerWelcomeText: Locator;
	readonly performerTrainingText: Locator;
	readonly performerRecommendationText: Locator;
	readonly performerExperienceText: Locator;
	readonly unicid: string;
	readonly performerFirstname: Locator;
	readonly performerSurname: Locator;
	readonly checknameavailability: Locator;
	readonly performerEmail: Locator;
	readonly performerTermCheckbox: Locator;
	readonly performerContinueEligibility: Locator;
	readonly performerValidateEligibilityText: Locator;
	readonly performerExperienceCriteriaOption: Locator;
	readonly performerEligibilityContinueBtn2: Locator;
	readonly performerTrainingRadioBtn: Locator;
	readonly performerRecommendedRadioBtn: Locator;

	constructor(public page: Page) {
		this.unicid = uuidv4();

		this.performerText = this.page.locator('.heroHeading');
		this.performerFindmoreBtn = this.page.locator('a[href=\'/join-us/performers/\']');
		this.performerJoinBtn = this.page.locator('div[class=\'heroItem\'] a[class=\'button\']');
		this.performerSpotlightProfileText = this.page.locator('text=Spotlight profile');
		this.performerSpotlightDiscountsText = this.page.locator('//strong[normalize-space()=\'Discounts\']');
		this.performerDevelopementEventsText = this.page.locator('text=Development and Events');
		this.performerAdviceandSupportText = this.page.locator('//strong[normalize-space()=\'Advice and Support\']');
		this.performerContactText = this.page.locator('//a[@class=\'itemLink\'][normalize-space()=\'Contacts\']');
		this.performerGetPriceText = this.page.locator('div[class=\'joinPriceInfo\'] h3');
		this.performerFaqText = page.locator('//a[@class=\'itemLink\'][normalize-space()=\'FAQs\']');

		this.performerWelcomeText = page.locator('.py-1.text-2xl');

		this.performerTrainingText = page.locator('//strong[normalize-space()=\'Training\']');
		this.performerRecommendationText = page.locator('//strong[normalize-space()=\'Recommendation\']');
		this.performerExperienceText = page.locator('//strong[normalize-space()=\'Experience\']');
		this.performerFirstname = page.locator('#forenames');
		this.performerSurname = page.locator('#surname');
		this.checknameavailability = page.locator('a[id=\'btn-check-name-available\'] span[class=\'c-button__text\']');
		this.performerEmail = page.locator('#email');
		this.performerTermCheckbox = page.locator('input[name=\'termsAgree\']');
		this.performerContinueEligibility = page.locator('a[id=\'btn-signup-application\'] span[class=\'c-button__text\']');
		this.performerValidateEligibilityText = page.locator('.py-4.text-2xl');
		this.performerExperienceCriteriaOption = page.locator('text=I meet the experience criteria ');
		this.performerEligibilityContinueBtn2 = page.locator('#btn-continue-eligibility-pathway');
		this.performerTrainingRadioBtn = page.locator('text=I meet the training criteria');
		this.performerRecommendedRadioBtn = page.locator('text=I have a recommendation');
	}

	async performerFindmoreButtonClick() {
		await this.performerFindmoreBtn.click();
	}

	async validatePerformerText() {
		await expect(this.performerText).toHaveText('Performers');
	}

	async validatePerformerSpotlightProfileText() {
		await expect(this.performerSpotlightProfileText).toHaveText('Spotlight profile');
	}

	async validatePerformerSpotlightDiscountsText() {
		await expect(this.performerSpotlightProfileText).toHaveText('Discounts');
	}

	async validatePerformerDevelopementEventsText() {
		await expect(this.performerDevelopementEventsText).toHaveText('Development and Events');
	}

	async validatePerformerAdviceandSupportText() {
		await expect(this.performerAdviceandSupportText).toHaveText('Advice and Support');
	}

	async validateperformerContact() {
		await expect(this.performerContactText).toHaveText('Contacts');
	}

	async validatePerformerFaqText() {
		await expect(this.performerFaqText).toHaveText('FAQs');
	}

	async validatePerformerGetPriceText() {
		await expect(this.performerGetPriceText).toHaveText('From £172.50 per year*');
	}

	async joinnowButtonClick() {
		await this.performerJoinBtn.click();
	}

	async validatePerformerWelcomeText() {
		await expect(this.performerWelcomeText).toHaveText('Welcome to the Spotlight Performer Application');
	}

	async validatePerformerExperienceText() {
		await expect(this.performerExperienceText).toHaveText('Experience');
	}

	async validatePerformerTrainingText() {
		await expect(this.performerTrainingText).toHaveText('Training');
	}

	async validatePerformerRecommendationText() {
		await expect(this.performerRecommendationText).toHaveText('Recommendation');
	}

	async uuidalphabet() {
		// Console.log(this.unicid.replace(/[0-9,-]/g, ''));

		return this.unicid.replace(/[0-9,-]/g, '');
	}

	async enterPerformerFirstname() 	{
		await this.performerFirstname.fill(await this.uuidalphabet());
	}

	async enterPerformerSurname() 	{
		await this.performerSurname.fill(await this.uuidalphabet());
	}

	async checknameavailabilityBtnClick() 	{
		await this.checknameavailability.click();
	}

	async enterPerformerEmail() 	{
		await this.performerEmail.fill(await this.uuidalphabet() + '@gmail.com');
	}

	async selectPerformerTermCheckbox() {
		await this.performerTermCheckbox.click();
	}

	async performerContinueEligibilityClick() {
		await this.performerContinueEligibility.click();
	}

	async validatePerformerEligibilityText() {
	 await expect(this.performerValidateEligibilityText).toHaveText('Eligibility:');
	}

	async selectPerformerExperienceCriteriaOption() {
		await this.performerExperienceCriteriaOption.click();
	}

	async performerContinueEligibilityBtn2Click() {
		await this.performerEligibilityContinueBtn2.click();
	}

	async performerTrainingOptionClick() {
		await this.performerTrainingRadioBtn.click();
	}

	async performerRecommendedRadioBtnClick() {
		await this.performerRecommendedRadioBtn.click();
	}
}
