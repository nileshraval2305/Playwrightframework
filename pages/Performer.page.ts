import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import { v4 as uuidv4 } from 'uuid';

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
  readonly Performer_Get_Price_Text: Locator;
  readonly Performer_Welcome_Text: Locator;
  readonly Performer_Training_Text: Locator;
  readonly Performer_Recommendation_Text: Locator;
  readonly Performer_Experience_Text: Locator;
  readonly unicid: String;
  readonly Performer_Firstname: Locator;
  readonly Performer_Surname: Locator;
  readonly Check_name_availability: Locator;
  readonly Performer_Email: Locator;
  readonly Performer_Term_Checkbox: Locator;
  readonly Performer_Continue_Eligibility: Locator;
  readonly Performer_Vaidate_Eligibility_Text: Locator;

  constructor(public page: Page) {
    this.unicid = uuidv4();

    this.Performer_Text = page.locator(".heroHeading");
    this.Performer_Findmore_Btn = page.locator("a[href='/join-us/performers/']");
    this.Performer_Join_Btn = page.locator("div[class='heroItem'] a[class='button']");
    this.Performer_Spotlight_Profile_Text = page.locator("text=Spotlight profile");
    this.Performer_Spotlight_Discounts_Text = page.locator("//strong[normalize-space()='Discounts']");
    this.Performer_Developement_Events_Text = page.locator("text=Development and Events");
    this.Performer_Advice_and_Support_Text = page.locator("text=Advice and Support");
    this.performer_Contact_Text = page.locator("//a[@class='itemLink'][normalize-space()='Contacts']");
    this.Performer_Get_Price_Text = page.locator("div[class='joinPriceInfo'] h3");
    this.Performer_Faq_Text = page.locator("//a[@class='itemLink'][normalize-space()='FAQs']");

    this.Performer_Welcome_Text = page.locator(".py-1.text-2xl");

    this.Performer_Training_Text = page.locator("//strong[normalize-space()='Training']")
    this.Performer_Recommendation_Text = page.locator("//strong[normalize-space()='Recommendation']");
    this.Performer_Experience_Text = page.locator("//strong[normalize-space()='Experience']");
    this.Performer_Firstname = page.locator("#forenames");
    this.Performer_Surname = page.locator("#surname");
    this.Check_name_availability = page.locator("a[id='btn-check-name-available'] span[class='c-button__text']");
    this.Performer_Email = page.locator("#email");
    this.Performer_Term_Checkbox = page.locator("input[name='termsAgree']");
    this.Performer_Continue_Eligibility = page.locator("a[id='btn-signup-application'] span[class='c-button__text']");
    this.Performer_Vaidate_Eligibility_Text = page.locator(".py-4.text-2xl");

  }

  async Performer_Findmore_Button_Click() {

    await this.Performer_Findmore_Btn.click()
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
    await expect(this.Performer_Get_Price_Text).toHaveText('From £172.50 per year*');
  }

  async Joinnow_Button_Click() {

    await this.Performer_Join_Btn.click();
  }
  async Validate_Performer_Welcome_Text() {
    await expect(this.Performer_Welcome_Text).toHaveText('Welcome to the Spotlight Performer Application');
  }

  async Validate_Performer_Experience_Text() {
    await expect(this.Performer_Experience_Text).toHaveText('Experience');
  }
  async Validate_Performer_Training_Text() {
    await expect(this.Performer_Training_Text).toHaveText('Training');
  }

  async Validate_Performer_Recommendation_Text() {
    await expect(this.Performer_Recommendation_Text).toHaveText('Recommendation');
  }
  async UUID_alphabet() {
    //console.log(this.unicid.replace(/[0-9,-]/g, ''));

    return this.unicid.replace(/[0-9,-]/g, '')

  }

  async Enter_Performer_Firstname() {

    await this.Performer_Firstname.fill(await this.UUID_alphabet())

  }

  async Enter_Performer_Surname() {

    await this.Performer_Surname.fill(await this.UUID_alphabet())

  }

  async Check_name_availability_Btn_Click() {

    await this.Check_name_availability.click();

  }
  async Enter_Performer_Email() {

    await this.Performer_Email.fill(await this.UUID_alphabet() + "@gmail.com");

  }

  async Select_Performer_Term_Checkbox() {

    await this.Performer_Term_Checkbox.click();
  }

  async Performer_Continue_Eligibility_Click() {

    await this.Performer_Continue_Eligibility.click();

  }

  async Validate_Performer_Vaidate_Eligibility_Text() {
    await expect(this.Performer_Vaidate_Eligibility_Text).toHaveText('Eligibility:');
  }

}

