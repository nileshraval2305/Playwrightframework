import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export default class Performer {

  readonly Performer_Findmore_Btn: Locator;
  readonly Performer_Text: Locator;
  readonly Performer_Join_Btn: Locator;
  readonly Performer_Spotlight_Profile_Text: Locator;
  readonly Performer_Spotlight_Discounts_Text: Locator;
  readonly Performer_Developement_Events_Text: Locator;
  readonly Performer_Advice_and_Support_Text: Locator;
  readonly performer_Contact_Text: Locator;
  readonly Performer_Faq_Text: Locator;
  readonly Performer_Get_Price_Text:Locator;
  
  constructor(public page: Page) {


    this.Performer_Text=this.page.locator(".heroHeading");
    this.Performer_Findmore_Btn = this.page.locator("a[href='/join-us/performers/']");
    this.Performer_Join_Btn = this.page.locator("div[class='heroItem'] a[class='button']");
    this.Performer_Spotlight_Profile_Text = this.page.locator("text=Spotlight profile");
    this.Performer_Spotlight_Discounts_Text = this.page.locator("//strong[normalize-space()='Discounts']");
    this.Performer_Developement_Events_Text = this.page.locator("//strong[normalize-space()='Development and Events']");
    this.Performer_Advice_and_Support_Text = this.page.locator("ul:nth-child(2) > li:nth-child(4) > strong:nth-child(2)");
    this.performer_Contact_Text = this.page.locator("li:nth-child(5) > strong:nth-child(2) > a:nth-child(1)");
    this.Performer_Get_Price_Text=this.page.locator("div[class='joinPriceInfo'] h3");
    this.Performer_Faq_Text= this.page.locator(" li:nth-child(6) > strong:nth-child(2) > a:nth-child(1)");



  }

  async Validate_Performer_Text() {
		await expect(this.Performer_Text).toHaveText('Performers');
	}
 
  async Validate_Performer_Spotlight_Profile_Text() {
		await expect(this.Performer_Spotlight_Profile_Text).toHaveText('Spotlight profile');
	}
  async Validate_Performer_Spotlight_Discounts_Text() {
		await expect(this.Performer_Spotlight_Discounts_Text).toHaveText('Discounts');
	}
  async Validate_Performer_Developement_Events_Text() {
		await expect(this.Performer_Developement_Events_Text).toHaveText('Development and Events');
	}

  async Validate_Performer_Advice_and_Support_Text() {
		await expect(this.Performer_Advice_and_Support_Text).toHaveText('Advice and Support');
	}

  async Validate_performer_Contact() {
		await expect(this.performer_Contact_Text).toHaveText('Contacts');

	}

  async Validate_Performer_Faq_Text() {
		await expect(this.Performer_Faq_Text).toHaveText('FAQs');
	}
  async Validate_Performer_Get_Price_Text() {
		await expect(this.Performer_Get_Price_Text).toHaveText('From £172.50 per year*AQs');
	}
}