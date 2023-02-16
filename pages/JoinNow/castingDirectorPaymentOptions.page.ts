
import WebActions from '../../lib/webapplicationActions';
import type {Page, Locator} from '@playwright/test';
import {expect} from '@playwright/test';
let webaction: WebActions;
export default class CastingDirectorPaymentOptions {
	readonly validatePaymentPageTitle: Locator;
	readonly validateTwoYearsPaymentSubscriptionsText: Locator;
	readonly twoYearsPaymentAmount: Locator;
	readonly oneYearsPaymentAmount: Locator;
	readonly threeMonthPaymentAmount: Locator;
	readonly oneMonthPaymentAmount: Locator;
	readonly validateOneYearsPaymentSubscriptionsText: Locator;
	readonly validateThreeMonthPaymentSubscriptionsText: Locator;
	readonly validateOneMonthPaymentSubscriptionsText: Locator;
	readonly selectTwoYearPaymentOption: Locator;
	readonly selectOneYearPaymentOption: Locator;
	readonly selectThreeMonthsPaymentOption: Locator;
	readonly selectOneMonthsPaymentOption: Locator;

	constructor(public page: Page) {
		webaction = new WebActions(this.page);
		this.validatePaymentPageTitle = page.locator('//h1[normalize-space()=\'YOUR SPOTLIGHT MEMBERSHIP\']');
		this.validateTwoYearsPaymentSubscriptionsText = page.locator('text=2 Year Subscription Credit/Debit Card');
		this.twoYearsPaymentAmount = page.locator('//h4[normalize-space()=\'£412.50 + VAT per user\']');
		this.oneYearsPaymentAmount = page.locator('//h4[normalize-space()=\'£245.00 + VAT per user\']');
		this.threeMonthPaymentAmount = page.locator('//h4[normalize-space()=\'£105.00 + VAT per user\']');
		this.oneMonthPaymentAmount = page.locator('//h4[normalize-space()=\'£70.00 + VAT per user\']');
		this.validateOneYearsPaymentSubscriptionsText = page.locator('text=1 Year Subscription Credit/Debit Card');
		this.validateThreeMonthPaymentSubscriptionsText = page.locator('text=3 Month Subscription Credit/Debit Card');
		this.validateOneMonthPaymentSubscriptionsText = page.locator('text=1 Month Subscription Credit/Debit Card');
		this.selectTwoYearPaymentOption = page.locator('//h3[normalize-space()=\'2 Year Subscription Credit/Debit Card\']//following::button[1]');
		this.selectOneYearPaymentOption = page.locator('//h3[normalize-space()=\'1 Year Subscription Credit/Debit Card\']//following::button[1]');
		this.selectThreeMonthsPaymentOption = page.locator('//h3[normalize-space()=\'3 Month Subscription Credit/Debit Card\']//following::button[1]');
		this.selectOneMonthsPaymentOption = page.locator('//h3[normalize-space()=\'1 Month Subscription Credit/Debit Card\']//following::button[1]');
	}

	async validateCastingDirectorPaymentPage() {
		await webaction.validateGetAndCompareText(this.validatePaymentPageTitle, 'YOUR SPOTLIGHT MEMBERSHIP');
		await webaction.validateGetAndCompareText(this.validateTwoYearsPaymentSubscriptionsText, '2 Year Subscription Credit/Debit Card');
		await webaction.validateGetAndCompareText(this.twoYearsPaymentAmount, '£412.50 + VAT per user');
		await webaction.validateGetAndCompareText(this.oneYearsPaymentAmount, '£245.00 + VAT per user');
		await webaction.validateGetAndCompareText(this.threeMonthPaymentAmount, '£105.00 + VAT per user');
		await webaction.validateGetAndCompareText(this.oneMonthPaymentAmount, '£70.00 + VAT per user');
		await webaction.validateGetAndCompareText(this.validateOneYearsPaymentSubscriptionsText, '1 Year Subscription Credit/Debit Card');
		await webaction.validateGetAndCompareText(this.validateThreeMonthPaymentSubscriptionsText, '3 Month Subscription Credit/Debit Card');
		await webaction.validateGetAndCompareText(this.validateOneMonthPaymentSubscriptionsText, '1 Month Subscription Credit/Debit Card');
	}

	async validatetwoyearsPaymentOption() {
		await webaction.clickElement(this.selectTwoYearPaymentOption);
	}

	async validateOneyearsPaymentOption() {
		await webaction.clickElement(this.selectOneYearPaymentOption);
	}

	async validateThreeMonthsPaymentOption() {
		await webaction.clickElement(this.selectThreeMonthsPaymentOption);
	}

	async validateOneMonthsPaymentOption() {
		await webaction.clickElement(this.selectOneMonthsPaymentOption);
	}
}
