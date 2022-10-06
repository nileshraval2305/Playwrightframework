import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import * as testdata from '../test-Data/Spotlight-testdata.json';


export default class Performer_JoinNow {

   readonly Performer_Addcredit_Btn: Locator;

   readonly Performer_Product_Name_Textbox: Locator;
   readonly Performer_Select_Type_Dropdown: Locator;
   readonly Performer_Select_Type_Dropdown_Value: Locator;
   readonly Performer_Enter_Search_Dropdown_Value: Locator;
   readonly Performer_Role_Name_Textbox: Locator;
   readonly Performer_Production_Company_Textbox: Locator;
   readonly Performer_Save_Credit_Btn: Locator;
   readonly Performer_Director_Name_Textbox: Locator;
   readonly Performer_Credit_Link_Textbox: Locator;
   readonly Performer_Date_From_Datepicker: Locator;
   readonly Performer_Date_From_Value_Datepicker: Locator;
   readonly Performer_Date_To_Datepicker: Locator;
   readonly Performer_Date_To_Value_Datepicker: Locator;
   readonly Performer_Upload_File: Locator;
   readonly Performer_Union_Contract: Locator;
   readonly Performer_Get_Credit_Header_Text: Locator;
   readonly Performer_Continue_About_To_You_Btn: Locator;
   constructor(public page: Page) {


      this.Performer_Addcredit_Btn = page.locator("#btn-add-credit span.c-button__text");
      this.Performer_Product_Name_Textbox = page.locator("#productionName");
      this.Performer_Select_Type_Dropdown = page.locator("text=Please select");
      this.Performer_Select_Type_Dropdown_Value = page.locator("text=Choreography");
      this.Performer_Role_Name_Textbox = page.locator("#roleName");
      this.Performer_Production_Company_Textbox = page.locator("#company");
      this.Performer_Save_Credit_Btn = page.locator("#btn-save-credit");
      this.Performer_Director_Name_Textbox = page.locator("#director");
      this.Performer_Credit_Link_Textbox = page.locator("#creditLink");
      this.Performer_Date_From_Datepicker = page.locator("input[name='dateFrom']");
      this.Performer_Date_From_Value_Datepicker = page.locator("text=2018");
      this.Performer_Date_To_Datepicker = page.locator("input[name='dateTo']");
      this.Performer_Date_To_Value_Datepicker = page.locator("text=2019");
      this.Performer_Upload_File = page.locator("input[aria-label='Click to select file or drag here']");
      this.Performer_Union_Contract = page.locator("//span[contains(text(),'Yes')]");
      this.Performer_Get_Credit_Header_Text = page.locator(".c-expandable-row__header-content");
      this.Performer_Continue_About_To_You_Btn = page.locator("#btn-eligibility-continue-0");
   }

   async Performer_Addcredit_Btn_Click() {

      await this.Performer_Addcredit_Btn.click();
   }

   async Performer_Product_Name__Enter_Textbox() {

      await this.Performer_Product_Name_Textbox.type(testdata.Performer_Production_name);
   }

   async Performer_Select_Movie_Type_Dropdown() {

      await this.Performer_Select_Type_Dropdown.click();
      await this.Performer_Select_Type_Dropdown_Value.click();

   }

   async Performer_Role_Name_Enter_Textboxt() {

      await this.Performer_Role_Name_Textbox.type(testdata.Performer_Role_Name);
   }

   async Performer_Production_Company_Enter_Textbox() {

      await this.Performer_Production_Company_Textbox.type(testdata.Performer_Production_Company);
   }

   async Performer_Director_Name_Enter_Textbox() {

      await this.Performer_Director_Name_Textbox.type(testdata.Performer_Director_Name);
   }

   async Performer_Credit_Link_Enter_Textbox() {

      await this.Performer_Credit_Link_Textbox.type(testdata.Performer_Credit_Link_Textbox);
   }

   async Performer_Date_From_Select_Datepicker() {

      await this.Performer_Date_From_Datepicker.click();
      await this.Performer_Date_From_Value_Datepicker.click();

   }
   async Performer_Date_TO_Select_Datepicker() {

      await this.Performer_Date_To_Datepicker.click();
      await this.Performer_Date_To_Value_Datepicker.click();

   }

   async Performer_Upload_Contract_File() {

      await this.Performer_Upload_File.setInputFiles("Upload_Doc/actor-agreement.pdf");

   }

   async Performer_Union_Contract_Option() {

      await this.Performer_Union_Contract.click();

   }

   async Performer_Save_Credit_Btn_Click() {

      await this.Performer_Save_Credit_Btn.click();
   }

   async Validate_Performer_Get_Credit_Header_Text() {
      await expect(this.Performer_Get_Credit_Header_Text).toHaveText('Fox Star Studios:');
   }
  
   async Performer_Continue_About_To_You_Btn_Click() {

      await this.Performer_Continue_About_To_You_Btn.click();
   }

}

