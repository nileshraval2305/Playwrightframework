/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/naming-convention */
import WebActions from '../../lib/webapplicationActions';
import type {Page, Locator} from '@playwright/test';

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
	readonly enterBillingAddressCardholder: Locator;
	readonly selectBillingAddressValue: Locator;
	readonly billingPageContinueBtn: Locator;
	readonly billingCardSortcode: Locator;
	readonly billingAccountNumber: Locator;
	readonly billingContinueBtn: Locator;
	readonly cardholderSetupDirectDebit: Locator;
	readonly billingEmailaddress: Locator;
	constructor(public page: Page) {
		webaction = new WebActions(this.page);
		this.validateYoungPerformerAnnualDirectdebitPaymentTitle = page.locator('text=\'Young Performer Annual Direct Debit');
		this.validateYoungPerformerAnnualDebitCreditPaymentTitle = page.locator('text=\'Young Performer Annual Credit / Debit Card');
		this.validateYoungPerformerMonthlyInstallmentDebitCreditPaymentTitle = this.page.locator('text=\'Young Performer Monthly Instalment Direct Debit');
		this.validatePerformerSubscriptionAnnualDirectDebitFee = page.locator('//div[contains(@class,\'container\')]//div[1]//div[1]//following::h4[1]');
		this.validatePerformerSubscriptionAnnualDebitCreditFee = page.locator('//div[contains(@class,\'container\')]//div[1]//div[1]//following::h4[2]');
		this.validatePerformerSubscriptionMonthlyDebitCreditFee = page.locator('//div[contains(@class,\'container\')]//div[1]//div[1]//following::h4[3]/span');
	    this.youngPerformerDirectDebitSelectBtn = page.locator('//div[2]/div[1]/div[3]/a[1]/button[1]');
		this.youngPerformerMonthlyDirectDebitBtn = page.locator('//div[3]//div[3]//a[1]//button[1]//span[1]');
	    this.validateDirectdebittext = page.locator('.css-ggp4ev');
		this.enterFirstNameofCardholder = page.locator('#given_name');
		this.enterLastNameofCardholder = page.locator('#family_name');
		this.enterBillingAddressCardholder = page.locator('input[placeholder=\'Start typing your postcode and select\']');
	    this.billingEmailaddress = page.locator('#email');
		this.selectBillingAddressValue = page.locator('li[id=\'react-autowhatever-1--item-0\'] span[class=\'css-ggp4ev\']');
		this.billingPageContinueBtn = page.locator('button[type=\'submit\']');
		this.billingCardSortcode = page.locator('#branch_code');
		this.billingAccountNumber = page.locator('#account_number');
		this.billingContinueBtn = page.locator('button[type=\'submit\']');
		this.cardholderSetupDirectDebit = page.locator('//span[normalize-space()=\'Set up this Direct Debit\']');
	}

	async validateYoungperformerAnnualPaymentLabeltext() {
		await webaction.validateGetAndCompareText(this.validateYoungPerformerAnnualDirectdebitPaymentTitle, 'Young Performer Annual Direct Debit');
		await webaction.validateGetAndCompareText(this.validateYoungPerformerAnnualDebitCreditPaymentTitle, 'Young Performer Annual Credit / Debit Card');
		await webaction.validateGetAndCompareText(this.validateYoungPerformerMonthlyInstallmentDebitCreditPaymentTitle, 'Young Performer Monthly Instalment Direct Debit');
		await webaction.validateGetAndCompareText(this.validatePerformerSubscriptionAnnualDirectDebitFee, ' £114.00/year');
		await webaction.validateGetAndCompareText(this.validatePerformerSubscriptionAnnualDebitCreditFee, ' £114.00/year');
		await webaction.validateGetAndCompareText(this.validatePerformerSubscriptionMonthlyDebitCreditFee, ' £123.84/year');
	}

	async youngPerformerAnnuaalDirectDebitSelectBtnClick() {
		await this.youngPerformerDirectDebitSelectBtn.click();
	}

	async youngPerformerMonthlyDirectDebitSelectBtnClick() {
		await this.youngPerformerMonthlyDirectDebitBtn.click();
	}

	async validateDirectDebitBillingDetails() {
		await webaction.validateGetAndCompareText(this.validateDirectdebittext, 'Set up a Direct Debit with');
	    await this.enterFirstNameofCardholder.fill(userdata.Performer_First_Name);
		await this.enterLastNameofCardholder.fill(userdata.Performer_Last_Name);
		await this.enterBillingAddressCardholder.fill(userdata.Performer_BillingAddress);
		await this.selectBillingAddressValue.click();
		await this.billingEmailaddress.fill(userdata.Performer_Previous_Register_Email);
		await this.billingPageContinueBtn.click();
		await this.billingCardSortcode.fill(userdata.Debit_Card_Sort_Code);
		await this.billingAccountNumber.fill(userdata.AccountNumber);
		await this.billingPageContinueBtn.click();
		await this.cardholderSetupDirectDebit.click();
	}
}
