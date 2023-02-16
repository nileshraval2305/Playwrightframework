import WebActions from '../../lib/webapplicationActions';
import type {Page, Locator} from '@playwright/test';
import {expect} from '@playwright/test';
import * as userdata from '../../test-Data/Spotlight-testdata.json';
let webaction: WebActions;

export default class DoPaymentOptions {
	readonly totalPayabletext: Locator;
	readonly getMembershipFee: Locator;
	readonly getTotaltoPay: Locator;
	readonly getInstallmentfrequency: Locator;
	readonly getTotalNumberofInstallment: Locator;
	readonly getAmount: Locator;
	readonly getTotalAmount: Locator;
	readonly confirmBtn: Locator;
	readonly firstName: Locator;
	readonly lastName: Locator;
	readonly address: Locator;
	readonly city: Locator;
	readonly country: Locator;
	readonly postalcode: Locator;
	readonly selectVisaCard: Locator;
	readonly visaCardNumber: Locator;
	readonly validmonthfromcard: Locator;
	readonly validyearfromcard: Locator;
	readonly expirymonthfromcard: Locator;
	readonly expiryyearfromcard: Locator;
	readonly securitycode: Locator;
	readonly processedBtn: Locator;
	readonly confirmandpay: Locator;
	readonly validateApplicationcompletetitle: Locator;
	readonly enterCardNumber: Locator;

	constructor(public page: Page) {
		webaction = new WebActions(this.page);

		this.totalPayabletext = page.locator('text=Total Payable');
		this.getMembershipFee = page.locator('#net-total');
		this.getTotaltoPay = page.locator('#gross-total');
		this.getInstallmentfrequency = page.locator('#freq');
		this.getTotalNumberofInstallment = page.locator('#number');
		this.getAmount = page.locator('#amout');
		this.getTotalAmount = page.locator('#total');
		this.confirmBtn = page.locator('#confirm-button');
		this.firstName = page.locator('#BillingForenames');
		this.lastName = page.locator('#BillingSurname');
		this.address = page.locator('#AddressLine1');
		this.city = page.locator('#City');
		this.country = page.locator('#CountryDropDown');
		this.postalcode = page.locator('#Postcode');
		this.selectVisaCard = page.locator('img[name=\'VISA\']');
		this.enterCardNumber = page.locator('input[name=\'cardnumber\']');
		this.validmonthfromcard = page.locator('select[name=\'startmonth\']');
		this.validyearfromcard = page.locator('select[name=\'startyear\']');
		this.validyearfromcard = page.locator('select[name=\'startyear\']');
		this.expirymonthfromcard = page.locator('select[name=\'expirymonth\']');
		this.expiryyearfromcard = page.locator('select[name=\'expiryyear\']');
		this.securitycode = page.locator('input[name=\'securitycode\']');
		this.processedBtn = page.locator('img[name=\'proceed\']');
		this.validateApplicationcompletetitle = page.locator('.py-4.text-2xl');
		this.confirmandpay = page.locator('button[id=\'confirm-button\'] span[class=\'ui-button-text\']');
	}

	async validatePaymentPage(Amount: string, frequency: string) {
		await webaction.validateGetAndCompareText(this.totalPayabletext, 'Total Payable');
		await webaction.verifyElementAttribute(this.getTotaltoPay, 'value', Amount);
		await webaction.verifyElementAttribute(this.getMembershipFee, 'value', Amount);
		await webaction.verifyElementAttribute(this.getInstallmentfrequency, 'value', frequency);
		await webaction.verifyElementAttribute(this.getTotalNumberofInstallment, 'value', '1');
	}

	async continueButton() {
		await webaction.clickElement(this.confirmBtn);
	}

	async validateBillingDetailsPage() {
		await webaction.enterElementText(this.firstName, 'Nilesh');
		await webaction.enterElementText(this.lastName, 'Raval');
		await webaction.enterElementText(this.address, 'V 304 Swaminarayan park 1');
		await webaction.enterElementText(this.city, 'London');
		await webaction.selectdropdownvalue(this.country, 'IN');
		await webaction.enterElementText(this.postalcode, '380007');
		await webaction.clickElement(this.confirmBtn);
		await webaction.clickElement(this.selectVisaCard);
		await webaction.enterElementText(this.enterCardNumber, userdata.Visa_Card);
		await webaction.selectdropdownvalue(this.validmonthfromcard, '04');
		await webaction.selectdropdownvalue(this.validyearfromcard, '22');
		await webaction.selectdropdownvalue(this.expirymonthfromcard, '05');
		await webaction.selectdropdownvalue(this.expiryyearfromcard, '34');
		await webaction.enterElementText(this.securitycode, userdata.Visa_CVV);
	}

	async confirmandPayButton() {
		await webaction.clickElement(this.confirmandpay);
	}

	async processedButton() {
		await webaction.clickElement(this.processedBtn);
	}

	async validateApplicationCompletePage() {
		await webaction.validateGetAndCompareText(this.validateApplicationcompletetitle, 'Application complete!');
	}
}

