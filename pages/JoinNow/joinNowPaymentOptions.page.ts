/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/naming-convention */
import WebActions from '../../lib/webapplicationActions';
import type {Page, Locator, FrameLocator} from '@playwright/test';
import {expect} from '@playwright/test';
import * as userdata from '../../test-Data/Spotlight-testdata.json';
let webaction: WebActions;
export default class joinNowPaymentOptions {
	readonly validateYoungPerformerAnnualDirectdebitPaymentTitle: Locator;
	readonly validateYoungPerformerAnnualDebitCreditPaymentTitle: Locator;
	readonly validateYoungPerformerMonthlyInstallmentDebitCreditPaymentTitle: Locator;
	readonly validatePerformerSubscriptionAnnualDirectDebitFee: Locator;
	readonly validatePerformerSubscriptionAnnualDebitCreditFee: Locator;
	readonly validatePerformerSubscriptionMonthlyDebitCreditFee: Locator;
	readonly youngPerformerDirectDebitSelectBtn: Locator;
	readonly youngPerformerMonthlyDirectDebitBtn: Locator;
	readonly validateDirectdebittext: Locator;
	readonly enterFirstNameofCardholder: Locator;
	readonly enterLastNameofCardholder: Locator;
	readonly enterEmailofCardholder: Locator;
	readonly enterBillingAddress1Cardholder: Locator;
	readonly enterBillingAddress2Cardholder: Locator;
	readonly enterCityOfCardholder: Locator;
	readonly selectBillingAddressValue: Locator;
	readonly billingPageContinueBtn: Locator;
	readonly billingCardSortcode: Locator;
	readonly billingAccountNumber: Locator;
	readonly billingContinueBtn: Locator;
	readonly cardholderSetupDirectDebit: Locator;
	readonly billingEmailaddress: Locator;
	readonly performerGetMembershipFeeTextFromHeader: Locator;
	readonly performerAnnualSubscriptionCreditDebitcardWithoutVat: Locator;
	readonly performerAnnualSubscriptionCreditDebitcardVat: Locator;
	readonly performerAnnualSubscriptionCreditDebitcardTotalfees: Locator;
	readonly enterPostalCodeOfCardholder: Locator;
	readonly framepageCardNumber: FrameLocator;
	readonly framepageExpMonth: FrameLocator;
	readonly framepageExpYear: FrameLocator;
	readonly framepageExpCvv: FrameLocator;
	readonly enterCardnumber: Locator;
	readonly enterMonthOfCard: Locator;
	readonly enterYearOfCard: Locator;
	readonly enterCvvOfCard: Locator;
	readonly performerGetBillingDetailsHeaderText: Locator;
	public countryName: string;
	readonly selectCountryDropdown: Locator;
	readonly enterCountryName: Locator;
	readonly enterStateName: Locator;
	readonly selectCountryDropdownValue: Locator;
	readonly paymentCheckoutBtn: Locator;
	readonly phoneNumber: Locator;
	public stateName: string;
	readonly selectStateProvince: Locator;
	readonly selectDirectDebitAnnualPaymentOption: Locator;
	readonly confirmAuthorizationBtn: Locator;
	readonly enterAccountNumber: Locator;
	readonly reEnterAccountNumber: Locator;
	readonly enterreSortCode: Locator;
	readonly enterAccountHolderName: Locator;
	readonly performerAnnualSubscriptionDirectDebit: Locator;
	readonly annualDebitCardOption: Locator;
	readonly setupDirectDebitBtn: Locator;
	readonly selectDirectDebitMonthlyBtn: Locator;
	readonly youngperformerDirectDebitAnnualPaymentOption: Locator;

	constructor(public page: Page) {
		webaction = new WebActions(this.page);
		this.validateYoungPerformerAnnualDirectdebitPaymentTitle = page.locator('text=\'Young Performer Annual Direct Debit');
		this.validateYoungPerformerAnnualDebitCreditPaymentTitle = page.locator('text=\'Young Performer Annual Credit / Debit Card');
		this.validateYoungPerformerMonthlyInstallmentDebitCreditPaymentTitle = this.page.locator('text=\'Young Performer Monthly Instalment Direct Debit');
		this.validatePerformerSubscriptionAnnualDirectDebitFee = page.locator('//div[contains(@class,\'container\')]//div[1]//div[1]//following::h4[1]');
		this.validatePerformerSubscriptionAnnualDebitCreditFee = page.locator('//div[contains(@class,\'container\')]//div[1]//div[1]//following::h4[2]');
		this.validatePerformerSubscriptionMonthlyDebitCreditFee = page.locator('//div[contains(@class,\'container\')]//div[1]//div[1]//following::h4[3]/span');
	    this.youngPerformerDirectDebitSelectBtn = page.locator('//div[@class="checkout-single-page__subscription"]//div[2]//a[1]//span[1]');
		this.youngPerformerMonthlyDirectDebitBtn = page.locator('//div[3]//div[3]//a[1]//button[1]//span[1]');
	    this.validateDirectdebittext = page.locator('.css-ggp4ev');
		this.enterFirstNameofCardholder = page.locator('//input[@name=\'first_name\']');
		this.enterLastNameofCardholder = page.locator('//input[@name=\'last_name\']');
		this.enterBillingAddress1Cardholder = page.locator('//input[@name=\'address1\']');
		this.enterBillingAddress2Cardholder = page.locator('//input[@name=\'address2\']');
	    this.enterCityOfCardholder = page.locator('//input[@name=\'city\']');
		this.enterPostalCodeOfCardholder = page.locator('//input[@name=\'postal_code\']');
		this.framepageCardNumber = page.frameLocator('(//iframe[contains(@name,\'recurly-element\')])[1]');
		this.enterCardnumber = this.framepageCardNumber.locator('//input[@title=\'Card number\']');
		this.framepageExpMonth = page.frameLocator('(//iframe[contains(@name,\'recurly-element\')])[2]');
		this.enterMonthOfCard = this.framepageExpMonth.locator('//input[@placeholder=\'MM\']');
		this.framepageExpYear = page.frameLocator('(//iframe[contains(@name,\'recurly-element\')])[3]');
		this.enterYearOfCard = this.framepageExpYear.locator('//input[@placeholder=\'YY\']');
		this.framepageExpCvv = page.frameLocator('(//iframe[contains(@name,\'recurly-element\')])[4]');
		this.enterCvvOfCard = this.framepageExpCvv.locator('//input[@id=\'recurly-hosted-field-input\']');
		this.billingEmailaddress = page.locator('#email');
		this.selectBillingAddressValue = page.locator('li[id=\'react-autowhatever-1--item-0\'] span[class=\'css-ggp4ev\']');
		this.billingPageContinueBtn = page.locator('button[type=\'submit\']');
		this.billingCardSortcode = page.locator('#branch_code');
		this.billingAccountNumber = page.locator('#account_number');
		this.billingContinueBtn = page.locator('button[type=\'submit\']');
		this.cardholderSetupDirectDebit = page.locator('//span[normalize-space()=\'Set up this Direct Debit\']');
		this.performerGetMembershipFeeTextFromHeader = page.locator('div[class=\'subscription-wrapper subscription-wrapper_selected\'] div[class=\'subscription__price-net_text\']');
	    this.performerAnnualSubscriptionDirectDebit = page.locator('//h3[normalize-space()="Performer annual subscription - Direct Debit]');
		this.performerAnnualSubscriptionCreditDebitcardWithoutVat = page.locator('//div[@class=\'flex items-baseline justify-between text-lg mb-2.5\']//div//following-sibling::div');
	    this.performerAnnualSubscriptionCreditDebitcardVat = page.locator('//span[normalize-space()=\'VAT @20%\']//following::div[1]');
	    this.performerAnnualSubscriptionCreditDebitcardTotalfees = page.locator('//span[normalize-space()=\'TOTAL\']//following-sibling::span');
		this.performerGetBillingDetailsHeaderText = page.locator('text = 2. Enter billing details');
		this.selectCountryDropdown = page.locator('//input[@placeholder=\'Select country\']');
		this.enterCountryName = page.locator('//input[@class=\'g-with-search-icon\']');
		this.selectCountryDropdownValue = page.locator('//div[text()=\'' + this.countryName + '\']');
		this.paymentCheckoutBtn = page.locator('//span[normalize-space()="Payment checkout"]');
		this.phoneNumber = page.locator('#phone');
		this.selectStateProvince = page.locator('//input[@placeholder="Select State/Province"]');
		this.enterStateName = page.locator('//div[@class="c-dropdown-input__options-container c-dropdown-input__options-container--open-down"]//input[@type="text"]');
		this.selectDirectDebitAnnualPaymentOption = page.locator('//div[@class="checkout-single-page__subscription"]//div[3]//a[1]//span[1]');
		this.youngperformerDirectDebitAnnualPaymentOption = page.locator('//div[@class="checkout-single-page__subscription"]//div[3]//a[1]//span[1]');
		this.confirmAuthorizationBtn = page.locator('//span[normalize-space()="Confirm"]');
		this.enterAccountNumber = page.locator('//input[@name="account_number"]');
		this.reEnterAccountNumber = page.locator('//input[@name="account_number_confirmation"]');
		this.enterAccountHolderName = page.locator('//input[@name="name_on_account"]');
		this.enterreSortCode = page.locator('//input[@name="sort_code"]');
		this.annualDebitCardOption = page.locator('//span[normalize-space()=\'Set up this Direct Debit\']');
		this.setupDirectDebitBtn = page.locator('//span[normalize-space()=\'Set up this Direct Debit\']');
		this.selectDirectDebitMonthlyBtn = page.locator('//div[@class="checkout-single-page__subscription"]//div[1]//a[1]//span[1]');
		this.youngperformerDirectDebitAnnualPaymentOption = page.locator('//div[@class="checkout-single-page__subscription"]//div[2]//a[1]//span[1]');
	}

	async validateYoungperformerAnnualPaymentLabeltext() {
		await webaction.validateGetAndCompareText(this.validateYoungPerformerAnnualDirectdebitPaymentTitle, 'Young Performer Annual Direct Debit');
		await webaction.validateGetAndCompareText(this.validateYoungPerformerAnnualDebitCreditPaymentTitle, 'Young Performer Annual Credit / Debit Card');
		await webaction.validateGetAndCompareText(this.validateYoungPerformerMonthlyInstallmentDebitCreditPaymentTitle, 'Young Performer Monthly Instalment Direct Debit');
		await webaction.validateGetAndCompareText(this.validatePerformerSubscriptionAnnualDirectDebitFee, ' £114.00/year');
		await webaction.validateGetAndCompareText(this.validatePerformerSubscriptionAnnualDebitCreditFee, ' £114.00/year');
		await webaction.validateGetAndCompareText(this.validatePerformerSubscriptionMonthlyDebitCreditFee, ' £123.84/year');
	}

	async youngPerformerAnnualDirectDebitSelectBtnClick() {
		await this.youngPerformerDirectDebitSelectBtn.click();
	}

	async youngPerformerMonthlyDirectDebitSelectBtnClick() {
		await this.youngPerformerMonthlyDirectDebitBtn.click();
	}

	async validateDirectDebitBillingDetails() {
		await webaction.validateGetAndCompareText(this.validateDirectdebittext, 'Set up a Direct Debit with');
	    await this.enterFirstNameofCardholder.fill(userdata.Performer_First_Name);
		await this.enterLastNameofCardholder.fill(userdata.Performer_Last_Name);
		// Await this.enterBillingAddressCardholder.fill(userdata.Performer_BillingAddress);
		await this.selectBillingAddressValue.click();
		await this.billingEmailaddress.fill(userdata.Performer_Previous_Register_Email);
		await this.billingPageContinueBtn.click();
		await this.billingCardSortcode.fill(userdata.Debit_Card_Sort_Code);
		await this.billingAccountNumber.fill(userdata.AccountNumber);
		await this.billingPageContinueBtn.click();
		await this.cardholderSetupDirectDebit.click();
	}

	async performerValidateSubscriptionTypeForDebitAndCredit(totalfees: string, Totalvat: string, feesWithoutVat: string) {
		expect(await this.performerGetMembershipFeeTextFromHeader.textContent()).toContain(totalfees);

		expect(await this.performerAnnualSubscriptionCreditDebitcardWithoutVat.textContent()).toContain(feesWithoutVat);
		expect(await this.performerAnnualSubscriptionCreditDebitcardVat.textContent()).toContain(Totalvat);
		expect(await this.performerAnnualSubscriptionCreditDebitcardTotalfees.textContent()).toContain(totalfees);
	}

	async performerBillingDetailsCreditcard(countryname: string, zipcode: string) {
		await expect(this.performerGetBillingDetailsHeaderText).toHaveText('2. Enter billing details');
		await webaction.enterElementText(this.enterFirstNameofCardholder, await webaction.uuidalphabet());
		await webaction.enterElementText(this.enterLastNameofCardholder, await webaction.uuidalphabet());
		await webaction.enterElementText(this.enterBillingAddress1Cardholder, userdata.Performer_Address1);
		await webaction.enterElementText(this.enterBillingAddress2Cardholder, userdata.Performer_Address2);
		await webaction.enterElementText(this.enterCityOfCardholder, userdata.Performer_City);
		await webaction.enterElementText(this.enterPostalCodeOfCardholder, zipcode);
		await this.performerCountry(countryname);
		await webaction.enterElementText(this.phoneNumber, userdata.Performer_Mobile);
		await webaction.enterElementText(this.enterCardnumber, userdata.Visa_Card);
		await webaction.enterElementText(this.enterMonthOfCard, userdata.Visa_Month);
		await webaction.enterElementText(this.enterYearOfCard, userdata.Visa_Year);
		await webaction.enterElementText(this.enterCvvOfCard, userdata.Visa_CVV);
	}

	async enterFirstName() {
		await webaction.enterElementText(this.enterFirstNameofCardholder, await webaction.uuidalphabet());
	}

	async enterLastName() {
		await webaction.enterElementText(this.enterLastNameofCardholder, await webaction.uuidalphabet());
	}

	async enterbillingAddress1() {
		await webaction.enterElementText(this.enterBillingAddress1Cardholder, userdata.Performer_Address1);
	}

	async enterbillingAddress2() {
		await webaction.enterElementText(this.enterBillingAddress2Cardholder, userdata.Performer_Address2);
	}

	async enterCityNameInBillingAddress() {
		await webaction.enterElementText(this.enterCityOfCardholder, userdata.Performer_City);
	}

	async enterPostalCodeInBillingAddress() {
		await webaction.enterElementText(this.enterPostalCodeOfCardholder, userdata.Performer_Postcode);
	}

	async enterDebitOrCreditcardNumber() {
		await webaction.enterElementText(this.enterCardnumber, userdata.Visa_Card);
	}

	async enterDebitOrCreditcardMonth() {
		await webaction.enterElementText(this.enterMonthOfCard, userdata.Visa_Month);
	}

	async enterDebitOrCreditcardYear() {
		await webaction.enterElementText(this.enterYearOfCard, userdata.Visa_Year);
	}

	async enterDebitOrCreditcardCvv() {
		await webaction.enterElementText(this.enterYearOfCard, userdata.Visa_CVV);
	}

	async performerCountry(country: string) {
		this.countryName = country;
		await webaction.clickElement(this.selectCountryDropdown);
		await webaction.clickElement(this.enterCountryName);
		await webaction.typeElement(this.enterCountryName, this.countryName);

		// Await webevents.enterElementText(this.enterCountryName, country);

		await this.page.locator('//div[text()=\'' + this.countryName + '\']').click();
	}

	async paymentCheckout() {
		await webaction.clickElement(this.paymentCheckoutBtn);
	}

	async performerState(state: string) {
		this.stateName = state;
		await webaction.clickElement(this.selectStateProvince);
		await webaction.clickElement(this.enterStateName);
		await webaction.enterElementText(this.enterStateName, this.stateName);
		await this.page.locator('//div[text()=\'' + this.stateName + '\']').click();
	}

	async selectDirectDebitAnnualOption() {
		await webaction.clickElement(this.selectDirectDebitAnnualPaymentOption);
	}

	async selectDirectDebitMonthlyOption() {
		await webaction.clickElement(this.selectDirectDebitMonthlyBtn);
	}

	async confirmBtnfromAuthorizationPopup() {
		await webaction.clickElement(this.confirmAuthorizationBtn);
	}

	async performerBillingDirectDebit(zipcode: string) {
		await expect(this.performerGetBillingDetailsHeaderText).toHaveText('2. Enter billing details');
		await webaction.enterElementText(this.enterFirstNameofCardholder, await webaction.uuidalphabet());
		await webaction.enterElementText(this.enterLastNameofCardholder, await webaction.uuidalphabet());
		await webaction.enterElementText(this.enterBillingAddress1Cardholder, userdata.Performer_Address1);
		await webaction.enterElementText(this.enterBillingAddress2Cardholder, userdata.Performer_Address2);
		await webaction.enterElementText(this.enterCityOfCardholder, userdata.Performer_City);
		await webaction.enterElementText(this.enterPostalCodeOfCardholder, zipcode);
		// Await this.performerCountry(countryname);
		await webaction.enterElementText(this.phoneNumber, userdata.Performer_Mobile);
		await webaction.enterElementText(this.enterAccountHolderName, await webaction.uuidalphabet());
		await webaction.enterElementText(this.enterAccountNumber, userdata.AccountNumber);
		await webaction.enterElementText(this.reEnterAccountNumber, userdata.AccountNumber);
		await webaction.enterElementText(this.enterreSortCode, userdata.Debit_Card_Sort_Code);
	}

	async performerValidateSubscriptionTypeOrderSummary(totalfees: string, Totalvat: string, feesWithoutVat: string) {
		expect(await this.performerAnnualSubscriptionCreditDebitcardWithoutVat.textContent()).toContain(feesWithoutVat);
		expect(await this.performerAnnualSubscriptionCreditDebitcardVat.textContent()).toContain(Totalvat);
		expect(await this.performerAnnualSubscriptionCreditDebitcardTotalfees.textContent()).toContain(totalfees);
	}

	async performerDirectDebitAnnually() {
		await webaction.clickElement(this.setupDirectDebitBtn);
	}
}
