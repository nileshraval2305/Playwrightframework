/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/naming-convention */

import type {Page, Locator} from '@playwright/test';
import {Browser} from '@playwright/test';
import {expect} from '@playwright/test';
import WebActions from '../../lib/webapplicationActions';
import * as userdata from '../../test-Data/Spotlight-testdata.json';

let webevents: WebActions;

export default class youngPerformerJoinnow {
	readonly youngPerformerText: Locator;
	readonly youngPerformerFirstName: Locator;
	readonly youngPerformerSurName: Locator;
	readonly youngPerformerDob: Locator;
	readonly youngPerformerParentFirstName: Locator;
	readonly youngPerformerParentSurName: Locator;
	readonly youngPerformerEmailAddress: Locator;
	readonly youngPerformerMobileNumber: Locator;
	readonly youngPerformerTermConditionCheckbox: Locator;
	readonly youngPerformerContinueButton: Locator;
	readonly youngPerformerDobmonths: Locator;
	readonly youngPerformerdobyear: Locator;
	readonly youngperformerDobDate: Locator;
	readonly youngPerformerPlayingAgeFrom: Locator;
	readonly youngPerformerPlayingAgeFromValue: Locator;
	readonly youngPerformerPlayingAgeTo: Locator;
	readonly youngPerformerPlayingAgeToValue: Locator;
	readonly youngPerformerContinueReviewBtn: Locator;
	readonly youngPerformerJoingingAs: Locator;
	readonly youngPerformerReviewDob: Locator;
	readonly youngPerformerReviewSpeotlightMember: Locator;
	readonly youngPerformerReviewSpeotlightPublishAge: Locator;
	readonly youngPerformerReviewGender: Locator;
	readonly youngPerformerReviewShowMeOnProfile: Locator;
	readonly youngPerformerReviewAgent: Locator;
	readonly youngPerformerChooseSpotlightMembershipOption: Locator;
	readonly youngPerformerPreviousName: Locator;
	readonly youngPerformerPreviouslyEmailAddress: Locator;
	readonly youngPerformerChooseSpotlightMembershipOptionAsNo: Locator;
	readonly youngPerformerChoosePoto: Locator;

	constructor(public page: Page) {
		this.page = page;
		webevents = new WebActions(this.page);
		this.youngPerformerText = page.locator('.py-1.text-3xl');
		this.youngPerformerFirstName = page.locator('#firstNameYP');
		this.youngPerformerSurName = page.locator('#secondNameYP');
		this.youngPerformerDob = page.locator('input[placeholder=\'DD/MM/YYYY\']');
		this.youngPerformerDobmonths = page.locator('.react-datepicker__month-select');
		this.youngPerformerdobyear = page.locator('.react-datepicker__year-select');
		this.youngperformerDobDate = page.locator('div[aria-label=\'Choose Tuesday, April 4th, 2006\']');
		this.youngPerformerParentFirstName = page.locator('#firstNameParentYP');
		this.youngPerformerParentSurName = page.locator('#secondNameParentYP');
		this.youngPerformerEmailAddress = page.locator('#emailParentYP');
		this.youngPerformerMobileNumber = page.locator('input[name=\'mobileNumberParentYP\']');
		this.youngPerformerTermConditionCheckbox = page.locator('input[value=\'true\']');
		this.youngPerformerContinueButton = page.locator('.c-button__text');
	    this.youngPerformerPlayingAgeFrom = page.locator('(//div[contains(text(),\'Please select\')])[1]');
		this.youngPerformerPlayingAgeFromValue = page.locator('//div[text()=\'15 years\']');
		this.youngPerformerPlayingAgeTo = page.locator('//div[@class=\'grid grid-cols-1 md:gap-4 md:grid-cols-2\']/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]//*[name()=\'svg\']');
		this.youngPerformerPlayingAgeToValue = page.locator('//div[text()=\'18 years\']');
	    this.youngPerformerContinueButton = page.locator('.c-button__text');
		this.youngPerformerJoingingAs = page.locator('span[class=\'ml-1.5 font-semibold\']');
		this.youngPerformerReviewDob = page.locator('div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > span:nth-child(2)');
	    this.youngPerformerReviewSpeotlightMember = page.locator('div[class=\'bg-grey-whisper flex items-center px-2 min-h-[50px] h-auto\'] span[class=\'py-1 pr-6 truncate\']');
	    this.youngPerformerReviewSpeotlightPublishAge = page.locator('//label[normalize-space()=\'Publish age?\']//following-sibling::span[1]');
		this.youngPerformerReviewGender = page.locator('//label[normalize-space()=\'Find me as:\']//following-sibling::div[1]');
	    this.youngPerformerReviewShowMeOnProfile = page.locator('//div[normalize-space()=\'Show on profile:\']//following-sibling::div[1]');
	    this.youngPerformerReviewAgent = page.locator('text=A I M');
	    this.youngPerformerChooseSpotlightMembershipOption = page.locator('//input[@data-testid=\'currentMember-radio-button-Yes\']//following::span[1]');
		this.youngPerformerChooseSpotlightMembershipOptionAsNo = page.locator('//input[@data-testid=\'currentMember-radio-button-No\']//following::span[1]');
		this.youngPerformerPreviousName = page.locator('#currentName');
	    this.youngPerformerPreviouslyEmailAddress = page.locator('#currentEmail');
		this.youngPerformerChoosePoto = page.locator('#btn-yp-headshot-choose-photo');
	}

	async getwelcometext() {
		await expect(this.youngPerformerText).toHaveText(userdata.young_Performer_welcome_Text);
	}

	async enterYoungPerformerFirstname() 	{
		await this.youngPerformerFirstName.fill(await webevents.uuidalphabet());
	}

	async enterYoungPerformerSurname() 	{
		await this.youngPerformerSurName.fill(await webevents.uuidalphabet());
	}

	async youngperformerSelectDobCalenderDropdown() {
		await this.youngPerformerDob.click();

		await this.youngPerformerDobmonths.selectOption('3');

		await this.youngPerformerdobyear.selectOption('2006');
		await this.youngperformerDobDate.click();
	}

	async enterYoungPerformerParentFirstname() 	{
		await this.youngPerformerParentFirstName.fill(await webevents.uuidalphabet());
	}

	async enterYoungPerformerParentSurname() 	{
		await this.youngPerformerParentSurName.fill(await webevents.uuidalphabet());
	}

	async enterYoungPerformerEmail() 	{
		await this.youngPerformerEmailAddress.fill(await webevents.uuidalphabet() + '@gmail.com');
	}

	async enterYoungPerformerPhone() 	{
		await this.youngPerformerMobileNumber.fill(userdata.Performer_Mobile);
	}

	async selectyoungPerformerTermConditionCheckbox() 	{
		await this.youngPerformerTermConditionCheckbox.click();
	}

	async youngPerformerContinueBtn() 	{
		await this.youngPerformerContinueButton.click();
	}

	async youngPerformerChoosePotoBtn() 	{
		await this.youngPerformerChoosePoto.click();
	}

	async youngPerformerAboutToPageSelectPlayingAge() {
		await this.youngPerformerPlayingAgeFrom.click();
		await this.youngPerformerPlayingAgeFromValue.click();
		await this.youngPerformerPlayingAgeTo.click();
		await this.youngPerformerPlayingAgeToValue.click();
	}

	async youngPerformerContinueToReviewButtonClick() {
		await this.youngPerformerContinueButton.click();
	}

	async youngPerformerChooseSelectSpotlightMembership() {
		await this.youngPerformerChooseSpotlightMembershipOption.click();
		await this.youngPerformerPreviousName.fill(await webevents.uuidalphabet());
		await this.youngPerformerPreviouslyEmailAddress.fill(await webevents.uuidalphabet() + '@gmail.com');
	}

	async youngPerformerChooseSelectSpotlightMembershipAsNo() {
		await this.youngPerformerChooseSpotlightMembershipOptionAsNo.click();
	}

	async validateYoungPerformerReviewPageEligibilityCreditsLabelText() {
		await webevents.validateGetAndCompareText(this.youngPerformerJoingingAs, 'Young Performer');
		await webevents.validateGetAndCompareText(this.youngPerformerReviewDob, '04.04.2006');
		await webevents.validateGetAndCompareText(this.youngPerformerReviewSpeotlightMember, 'Yes');

		await webevents.validateGetAndCompareText(this.youngPerformerReviewSpeotlightPublishAge, 'Yes');
		await webevents.validateGetAndCompareText(this.youngPerformerReviewGender, 'Male');
		await webevents.validateGetAndCompareText(this.youngPerformerReviewShowMeOnProfile, 'Yes');
	}

	async validateYoungPerformerReviewPageLabelTextWithoutSpotlightMemember() {
		await webevents.validateGetAndCompareText(this.youngPerformerJoingingAs, 'Young Performer');
		await webevents.validateGetAndCompareText(this.youngPerformerReviewDob, '04.04.2006');
		await webevents.validateGetAndCompareText(this.youngPerformerReviewSpeotlightMember, 'No');

		await webevents.validateGetAndCompareText(this.youngPerformerReviewSpeotlightPublishAge, 'Yes');
		await webevents.validateGetAndCompareText(this.youngPerformerReviewGender, 'Male');
		await webevents.validateGetAndCompareText(this.youngPerformerReviewShowMeOnProfile, 'Yes');
	}

	async validateYoungPerformerReviewAgent() {
		await Promise.all([this.page.waitForLoadState('domcontentloaded'),
			 webevents.validateGetAndCompareText(this.youngPerformerReviewAgent, 'A I M')]);
	}
}
