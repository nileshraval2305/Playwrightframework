/* eslint-disable no-await-in-loop */
/* eslint-disable no-mixed-spaces-and-tabs */
import type {Page, Locator} from '@playwright/test';
import {expect} from '@playwright/test';
import webApplicationActions from '../lib/webapplicationActions';
import WebActions from '../lib/webapplicationActions';
import * as userdata from '../test-Data/Spotlight-testdata.json';
let webevents: WebActions;
export default class CastingDirector {
	readonly cdGetwelcometext: Locator;
	readonly cdFirstName: Locator;
	readonly cdSurName: Locator;
	readonly cdMobileNumber: Locator;
	readonly cdLandlineNumber: Locator;
	readonly cdemailAddress: Locator;
	readonly cdOccupation: Locator;
	readonly cdOccupationValue: Locator;
	readonly cdWebsite: Locator;
	readonly cdCompanyName: Locator;
	readonly cdMembershipOption: Locator;
	readonly cdSpotlightcapacity: Locator;
	readonly cdTermConditioncheckbox: Locator;
	readonly cdContinueBtnInReviewPage: Locator;
	readonly cdMembershipOptionNo: Locator;
	readonly cdMembershipOptionYes: Locator;
	readonly cdMemebreshipdropdown: Locator;
	readonly cdMemebreshipdropdownSelectValue: Locator;
	readonly cdSpotlightAccCapacityNo: Locator;
	readonly cdSpotlightAccCapacityYes: Locator;
	readonly cdTermCondtionCheckbox: Locator;
	readonly cdwelcomeContinueBtn: Locator;
	readonly cdAboutyoupage: Locator;
	readonly professionalOrgMemershipName: Locator;
	readonly professionalOrgMembershipEmail: Locator;
	readonly professionalOrgMembershipNumber: Locator;
	readonly cdspotlightAccountName: Locator;
	readonly cdspotlightMembershiptype: Locator;
	readonly cdspotlightSelectMembershiptypeDropdown: Locator;
	readonly cdspotlightSelectMembershiptypeDropdownValue: Locator;
	readonly cdExistingSpotlightEmail: Locator;
	readonly existingspotlightAccountOptionYes: Locator;
	readonly cdReviewyoupage: Locator;
	readonly getFullnameInReviewPage: Locator;
	readonly getPhonenumberInReviewPage: Locator;
	readonly getEmailAddressInReviewPage: Locator;
	readonly getYourOccupationInReviewPage: Locator;
	readonly getCompanyNameInReviewPage: Locator;
	readonly getCompanyWebsiteInReviewPage: Locator;
	readonly getMembershipInReviewPage: Locator;
	readonly getMemberNameInReviewPage: Locator;
	readonly getMemberEmailAddressInReviewPage: Locator;
	readonly getMembershipNumberInReviewPage: Locator;
	readonly getPreviousSpotlightAccountInReviewPage: Locator;
	readonly getSpotlightAccountNameInReviewPage: Locator;
	readonly getSpotlightMemberTypeInReviewPage: Locator;
	readonly getSpotlightEmailAddresInReviewPage: Locator;
	readonly selectCastingYearsDropdown: Locator;
	readonly selectCastingYearsDropdownValue: Locator;
	readonly castingdirectoruploadcv: Locator;
	readonly selectcdworkingageundereighteen: Locator;
	readonly cdWorkingCondtions: Locator;
	readonly cdspotlightfollowing: Locator;
	readonly cdContinueBtnInAbouttoPage: Locator;
	readonly cdlinkurl: Locator;
	readonly cdlinkAddBtn: Locator;
	readonly deleteuploadcv: Locator;
	readonly cdspotlightfollowingNotsure: Locator;
	readonly entertextinNotsureOption: Locator;
	private _getFirstnameval: string;
	private _getLastnameval: string;
	private _fullName: string;
	private _getemailaddressinWelcomePage: string;
	private _getemailaddressinReviewPage: string;

	constructor(readonly page: Page) {
		this.page = page;
		webevents = new WebActions(this.page);
		this.cdGetwelcometext = page.locator('.py-1.text-3xl');
		this.cdFirstName = page.locator('#firstNameCD');
		this.cdSurName = page.locator('#secondNameCD');
		this.cdMobileNumber = page.locator('#mobileNumberCD');
		this.cdLandlineNumber = page.locator('#landlineNumberCD');
		this.cdemailAddress = page.locator('#emailCD');
		this.cdOccupation = page.locator('//div[text()=\'Please select\']');
		this.cdOccupationValue = page.locator('//div[text()=\'Casting Director\']');
		this.cdWebsite = page.locator('#companyWebsite');
	    this.cdCompanyName = page.locator('#companyName');
		this.cdMembershipOptionNo = page.locator('//section[1]/form[2]/section[1]/div[1]/div[2]/fieldset[1]/div[2]/div[2]/label[1]/span[1]');
		this.cdSpotlightAccCapacityNo = page.locator('//section[1]/form[2]/section[2]/div[1]/div[2]/fieldset[1]/div[2]/div[2]/label[1]/span[1]');
		this.cdTermCondtionCheckbox = page.locator('input[value=\'true\']');
		this.cdwelcomeContinueBtn = page.locator('.c-button__text');
		this.cdAboutyoupage = page.locator('.py-4.text-2xl');
		this.cdMembershipOptionYes = page.locator('//input[@data-testid=\'memberOfProfessionalOrg-radio-button-Yes\']//following::span[3]');
	    this.cdMemebreshipdropdown = page.locator('//div[contains(text(),\'Please select your membership\')]');
	    this.cdMemebreshipdropdownSelectValue = page.locator('//div[contains(text(),\'CDA\')]');
	    this.professionalOrgMemershipName = page.locator('#professionalOrgMembershipName');
		this.professionalOrgMembershipEmail = page.locator('#professionalOrgMembershipEmail');
		this.professionalOrgMembershipNumber = page.locator('#professionalOrgMembershipNumber');
		this.cdSpotlightAccCapacityYes = page.locator('//input[@data-testid=\'hadSpotlightAccount-radio-button-Yes\']//following::span[3]');
	    this.cdspotlightAccountName = page.locator('#existingSpotlightAccName');
		this.cdspotlightSelectMembershiptypeDropdown = page.locator('//label[@for=\'existingSpotlightAccMembershipType\']//following::div[text()=\'Please select\']');
	    this.cdspotlightSelectMembershiptypeDropdownValue = page.locator('//div[normalize-space()=\'Casting Professional\']');
	    this.cdExistingSpotlightEmail = page.locator('#existingSpotlightAccEmail');
		this.cdReviewyoupage = page.locator('.py-4.text-2xl');

	    this.getFullnameInReviewPage = page.locator('//label[normalize-space()=\'Name:\']//following::span[1]');
		this.getPhonenumberInReviewPage = page.locator('//label[normalize-space()=\'Phone Numbers:\']//following::span[1]');
		this.getEmailAddressInReviewPage = page.locator('//label[normalize-space()=\'Email Address:\']//following::span[1]/a');
		this.getYourOccupationInReviewPage = page.locator('//label[normalize-space()=\'Your occupation:\']//following::span[1]');
		this.getCompanyNameInReviewPage = page.locator('//label[normalize-space()=\'Company name:\']//following::span[1]');
		this.getCompanyWebsiteInReviewPage = page.locator('//label[normalize-space()=\'Company website:\']//following::span[1]');
		this.getMembershipInReviewPage = page.locator('//label[normalize-space()=\'Memberships:\']//following::span[1]');
		this.getMemberEmailAddressInReviewPage = page.locator('//label[normalize-space()=\'Member email address:\']//following::span[1]');
		this.getMembershipNumberInReviewPage = page.locator('//label[normalize-space()=\'Membership number:\']//following::span[1]');
		this.getPreviousSpotlightAccountInReviewPage = page.locator('//label[normalize-space()=\'Previous Spotlight account:\']//following::span[1]');
		this.getSpotlightAccountNameInReviewPage = page.locator('//label[normalize-space()=\'Spotlight account name:\']//following::span[1]');
		this.getSpotlightMemberTypeInReviewPage = page.locator('//label[normalize-space()=\'Spotlight member type:\']//following::span[1]');
		this.getSpotlightEmailAddresInReviewPage = page.locator('//label[normalize-space()=\'Spotlight email address:\']//following::span[1]');
	    this.selectCastingYearsDropdown = page.locator('//input[@inputmode=\'none\']');
	    this.selectCastingYearsDropdownValue = page.locator('//div[text()=\'1-2 years\']');
	    this.cdWorkingCondtions = page.locator('//span[text()=\'Yes, I am aware\']');
		this.cdspotlightfollowing = page.locator('//span[text()=\'Both\']');
		this.cdspotlightfollowingNotsure = page.locator('//span[contains(text(),\'Not sure\')]');
		this.cdContinueBtnInAbouttoPage = page.locator('.c-button.c-button__primary.c-button--medium');
		this.castingdirectoruploadcv = page.locator('input[aria-label=\'Click to select file or drag here\']');
		this.cdlinkurl = page.locator('.input-array__add__input');
		this.cdlinkAddBtn = page.locator('//span[normalize-space()=\'Add\']');
		this.selectcdworkingageundereighteen = page.locator('//span[@class=\'c-radio-formik__text\'][normalize-space()=\'Yes\']');
		this.cdContinueBtnInReviewPage = page.locator('//span[normalize-space()=\'Continue\']');
		this.deleteuploadcv = page.locator('div[class=\'icon-delete\']');
		this.entertextinNotsureOption = page.locator('#aboutYou');
	}

	async getwelcometext() {
		await expect(this.cdGetwelcometext).toHaveText(userdata.CD_Welcome_Page_Text);
	}

	async enterCdFirstname() 	{
		await this.cdFirstName.fill(await webevents.uuidalphabet());
	}

	async getCdFirstname() 	{
	    this._getFirstnameval = await this.cdFirstName.getAttribute('value');
	}

	async enterCdLastname() {
		await this.cdSurName.fill(await webevents.uuidalphabet());
	}

	async getCdLastname() {
		this._getLastnameval = await this.cdSurName.getAttribute('value');
	}

	async getFullName() {
		this._fullName = this._getFirstnameval.concat(' ' + this._getLastnameval);
	    console.log(this._fullName);
		return this._fullName;
	}

	async enterCdMobilenumber() {
		await this.cdMobileNumber.fill(userdata.Performer_Mobile);
	}

	async enterLandlinenumber() {
		await this.cdLandlineNumber.fill(userdata.Performer_Landline);
	}

	async enterEmailAddress() {
		    	await Promise.all([
			 this.cdemailAddress.fill(await webevents.uuidalphabet() + '@gmail.com').then,
			 this._getemailaddressinWelcomePage = await this.cdemailAddress.getAttribute('value'),
		]);
	}

	async getEmailAddressfromWelcomepageValue(): Promise<string> {
		 this._getemailaddressinWelcomePage = await webevents.uuidalphabet() + '@gmail.com';
		console.log('email from welcome page', this._getemailaddressinWelcomePage);
		 return this._getemailaddressinWelcomePage;
	}

	async selectCdOccupationDropdown() {
		await this.cdOccupation.click();
		await this.cdOccupationValue.click();
	}

	async enterCompanyname() {
		await this.cdCompanyName.fill(userdata.CD_Companyname);
	}

	async enterWebsiteUrl(locator: Locator, data: string) {
		await this.cdWebsite.fill(userdata.CD_Website);
		await webevents.enterElementText(locator, data);
	}

	async selectMembershipOraginzationOptionAsNo() {
		await this.cdMembershipOptionNo.click();
	}

	async selectExistingMemberofSpotlightOptionAsNo() {
		await this.cdSpotlightAccCapacityNo.click();
	}

	async selectTermAndConditioncheckbox() {
		await this.cdTermCondtionCheckbox.click();
	}

	async welcomeContinueBtnClick() {
		await this.cdwelcomeContinueBtn.click();
	}

	async getAboutpagetext() {
		await expect(this.cdAboutyoupage).toHaveText(userdata.CD_About_Page_Text);
	}

	async selectMembershipOraginzationOptionAsYes() {
		await this.cdMembershipOptionYes.click();
	}

	async selectcastingDirectorMembershipdropdown() {
		await this.cdMemebreshipdropdown.click();
		await this.cdMemebreshipdropdownSelectValue.click();
	}

	async enterProfessionalMembershipshipName() {
		await this.professionalOrgMemershipName.fill(userdata.CD_Membership_Name);
	}

	async enterProfessionalMembershipshipEmail() {
		await this.professionalOrgMembershipEmail.fill(userdata.CD_Membership_Email);
	}

	async enterProfessionalMembershipshipNumber() {
		await this.professionalOrgMembershipNumber.fill(userdata.CD_Membership_Number);
	}

	async selectSpotlightAccountOptionAsYes() {
		await this.cdSpotlightAccCapacityYes.click();
	}

	async enterSpotlightAccountMembershipName() {
		await this.cdspotlightAccountName.fill(userdata.CD_Membership_Name);
	}

	async selectSpotlightAccountMembershipType() {
		await this.cdspotlightSelectMembershiptypeDropdown.click();
		await this.cdspotlightSelectMembershiptypeDropdownValue.click();
	}

	async entercdExistingSpotlightEmail() {
		await this.cdExistingSpotlightEmail.fill(userdata.CD_Previous_Spotlight_Email);
	}

	async getReviewpageTitletext() {
		await expect(this.cdReviewyoupage).toHaveText(userdata.CD_Review_Page_Text);
	}

	// Validate Review page when CD is member of professional group and existing spotlightmember

	async getfullNametextInReviewpage(): Promise<string> {
			  return this.getFullnameInReviewPage.textContent();
	}

	async getEmailaddressfromReview() {
		await Promise.all([
			this.page.waitForSelector('a'),
			this._getemailaddressinReviewPage = await this.getEmailAddressInReviewPage.textContent(),
		]);
		console.log('email from review page', this._getemailaddressinReviewPage);
		return this._getemailaddressinReviewPage;
	}

	async validateFullnameInReviewPage() {
		expect(await this.getfullNametextInReviewpage()).toBe(this._fullName);
	}

	async validateEmailaddressInReviewpage() {
		expect(this._getemailaddressinWelcomePage).toBe(this._getemailaddressinReviewPage);
	}

	async validateOccupationInReviewPage() {
		await expect(this.getYourOccupationInReviewPage).toHaveText(userdata.CD_Occupation_Text);
	}

	async validateCompanynameInReviewPage() {
		await expect(this.getCompanyNameInReviewPage).toHaveText(userdata.CD_Companyname);
	}

	async validateCompanyWebsiteInReviewPage() {
		await expect(this.getCompanyWebsiteInReviewPage).toHaveText(userdata.CD_Companyname);
	}

	async validateMembershipInReviewPage() {
		await expect(this.getMembershipInReviewPage).toHaveText('Yes');
	}

	async validateMembershipEmailInReviewPage() {
		await expect(this.getMemberEmailAddressInReviewPage).toHaveText(userdata.CD_Membership_Email);
	}

	async validateMembershipNumberInReviewPage() {
		await expect(this.getMembershipNumberInReviewPage).toHaveText(userdata.CD_Membership_Number);
	}

	async validateSpotlightExistingMembershipTypeInReviewPage() {
		await expect(this.getPreviousSpotlightAccountInReviewPage).toHaveText('Yes');
	}

	async validateSpotlightExistingMembershipNameInReviewPage() {
		await expect(this.getSpotlightAccountNameInReviewPage).toHaveText(userdata.CD_Membership_Name);
	}

	async validateSpotlightExistingMemberTypeInReviewPage() {
		await expect(this.getSpotlightMemberTypeInReviewPage).toHaveText(userdata.CD_Spotlight_Previous_Account_Type);
	}

	async validateExistingSpotlightEmailInReviewPage() {
		await expect(this.getSpotlightEmailAddresInReviewPage).toHaveText(userdata.CD_Previous_Spotlight_Email);
	}

	async selectcdyearsofexperience() {
		await this.selectCastingYearsDropdown.click();
		await this.selectCastingYearsDropdownValue.click();
	}

	async entercdLinkUrl() {
		await webevents.enterElementText(this.cdlinkurl, 'www.talentsystem.com');
	    await webevents.clickElement(this.cdlinkAddBtn);
	}

	async uploadcvInAboutPage() {
		await webevents.uploadFileImages('Upload_Doc/pdf_format_cv.pdf', this.castingdirectoruploadcv);
	}

	async validateUploadcvSuppotedExtensionInAbouttoPage() {
		const suppotedfile = ['pdf_format_cv.pdf', 'jpg_format_cv.jpg', 'png_format_cv.png', 'doc_format_cv.docx'];
		console.log(suppotedfile.length);
		for (let i = 0; i <= suppotedfile.length - 1; i++) {
			await webevents.uploadFileImages(String('Upload_Doc/' + suppotedfile[i]), this.castingdirectoruploadcv);
		    await webevents.clickElement(this.deleteuploadcv);

			console.log('supported file format is', suppotedfile[i]);
		}

		console.log('file formats should supported');
	}

	async selectcdworkingcondition() {
		await this.selectcdworkingageundereighteen.click();
		await this.cdWorkingCondtions.click();
	}

	async selectcdspotlightfollowing() {
		await this.cdspotlightfollowing.click();
	}

	async continuetoReviewBtnInAboutpage() {
		await this.cdContinueBtnInAbouttoPage.click();
	}

	async continueBtnInReviewPage() {
		await this.cdContinueBtnInReviewPage.click();
	}

	async selectcdspotlightfollowithNotsureOption() {
		await this.cdspotlightfollowingNotsure.click();
		await webevents.enterElementText(this.entertextinNotsureOption, 'Casting is a pre-production process that involves choosing actors to fill the roles in a particular TV show');
	}
}
