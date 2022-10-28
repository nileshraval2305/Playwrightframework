import { Page, Locator, FrameLocator } from '@playwright/test';
import { expect } from '@playwright/test';
import * as testdata from '../test-Data/Spotlight-testdata.json';
import UserTypes from './userTypes';


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
   readonly Performer_About_To_You_page: Locator;
   readonly Performer_About_To_Page_PhoneNumber: Locator;
   readonly Performer_About_To_Page_Landlinenumber: Locator;
   readonly Performer_Spotlight_Member_Option: Locator;
   readonly Performer_Spotlight_DOB_Click_Dropdown: Locator;
   readonly Performer_Select_Dropdown_Dob_Month: Locator;
   readonly Performer_Select_Dropdown_Dob_Mon_Val: Locator;
   readonly Performer_Select_Dropdown_Dob_Year: Locator;
   readonly Performer_Select_Dropdown_Dob_Date: Locator;
   readonly Performer_Photographer_Name: Locator;
   readonly Performer_Photographer_Name_Val: Locator;
   readonly Performer_Choose_Poto: Locator;
   readonly Performer_Previous_Name: Locator;
   readonly Performer_Type: Locator;
   readonly Performer_Type_Value: Locator;
   readonly Performer_Previous_Email: Locator;
   readonly Performer_Publish_Age: Locator;
   readonly Performer_Playing_Age_From: Locator;
   readonly Performer_Playing_Age_To: Locator;
   readonly Performer_Playing_Age_From_Value: Locator;
   readonly Performer_Playing_Age_To_Value: Locator;
   readonly Performer_Select_Gender_Dropdown: Locator;
   readonly Performer_Select_Gender_Dropdown_Val: Locator;
   readonly Performer_Displayed_Publlic_Profile: Locator;
   readonly Performer_About_Continue_Btn: Locator;
   readonly Performer_Review_Page_Text: Locator;
   readonly Performer_Eligibility_Credits_Text: Locator;
   readonly Performer_Picture_Type_Text: Locator;
   readonly Performer_Role_Text: Locator;
   readonly Performer_Production_Compnay_Text: Locator;
   readonly Performer_Director_Name_Text: Locator;
   readonly Performer_Phone_Number_Text: Locator;
   readonly Performer_DOB_Text: Locator;
   readonly Performer_Gender_Text: Locator;
   readonly Performer_Continue_Checkout: Locator
   readonly Validate_Payment_Subscription_Text: Locator
   readonly Validate_Performer_Annual_Direct_Debit_Text: Locator;
   readonly Validate_Performer_Annual_Credit_Debit_Card_Text: Locator;
   readonly Validate_Performer_Monthly_Instalment_Direct_Debit_Text: Locator;
   readonly Performer_Select_Creditcard_Option: Locator;
   readonly Performer_Get_Membership_Fee_Text: Locator;
   readonly Performer_Total_Pay_Text: Locator;
   readonly Performer_Get_Frequency_Text: Locator;
   readonly Performer_Get_Total_Installment_Text: Locator;
   readonly Performer_Confirm_Pay_Button: Locator;
   readonly Performer_Billing_FirstName: Locator;
   readonly Performer_Billing_LastName: Locator;
   readonly Performer_Billing_Address: Locator;
   readonly Performer_Billing_City: Locator;
   readonly Performer_Billing_Country: Locator;
   readonly Performer_Billing_Postcode: Locator;
   readonly Performer_Get_Billing_Details_Header_Text: Locator;
   readonly Performer_Billing_Confirm_Pay: Locator;
   readonly Performer_Billing_Country_Value: Locator;
   readonly Performer_Payment_By_Visa_Card: Locator;
   readonly Performer_Payment_By_Visa_Card_Number: Locator;
   readonly Performer_Payment_By_Card_Valid_Month: Locator;
   readonly Performer_Payment_By_Card_Valid_Year: Locator;
   readonly Performer_Payment_By_Card_Expiry_Month: Locator;
   readonly Performer_Payment_By_Card_Expiry_Year: Locator;
   readonly Performer_Payment_By_Card_Security_Code: Locator;
   readonly Performer_Payment_By_Card_Processed_Btn: Locator;
   readonly Performer_Payment_By_Card_First_Name: Locator;
   readonly Performer_Payment_By_Card_Last_Name: Locator;
   readonly Performer_Payment_By_Card_OTP: String;
   readonly Performer_Payment_By_Card_Next_Btn: Locator;
   readonly Performer_Registration_Complete_Get_Text: Locator;

   readonly Performer_Add_Course_Btn: Locator;
   readonly Performer_Schoolname: Locator;
   readonly Performer_Coursename: Locator;
   readonly Performer_Select_Qualification_Level_Dropdown: Locator;
   readonly Performer_Course_URL: Locator;
   readonly Performer_Select_Qualification_Level_Dropdown_Value: Locator;
   readonly Performer_Select_Course_Fulltime_Option: Locator;
   readonly Performer_Save_Course_Btn: Locator;
   readonly Performer_Upload_File_Delete_Icon: Locator;
   readonly Performer_Upload_File_Title: Locator;
   readonly Performer_Get_Header_Text: Locator;
   readonly Performer_Eligibility_Training_Text: Locator;
   readonly Performer_Course_Name_Text: Locator;
   readonly Performer_Qualification_Level_Text: Locator;
   readonly Performer_Fullname_Of_Referee: Locator;
   readonly Performer_Get_Recommended_Header: Locator;
   readonly Performer_Referee_Membership_Dropdown: Locator;
   readonly Performer_Referee_Membership_Dropdown_Value: Locator;
   readonly Validate_File_IS_Loaded: Locator;
   readonly Validate_Eligibility_Recommendation: Locator;
   readonly Validate_Referee_Membership: Locator;
   readonly Performer_Payment_Pay_Now_Btn:Locator;

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
      this.Performer_Continue_About_To_You_Btn = page.locator("text=Continue to About you");
      this.Performer_About_To_You_page = page.locator(".py-4.text-2xl");
      this.Performer_About_To_Page_PhoneNumber = page.locator("input[name='mobileNumber']");
      this.Performer_About_To_Page_Landlinenumber = page.locator("input[name='landlineNumber']");
      this.Performer_Spotlight_Member_Option = page.locator("//section[@class='flex flex-col pb-4 space-y-4 border-b border-grey-light']//span[@class='c-radio-formik__text'][normalize-space()='No']")
      this.Performer_Select_Dropdown_Dob_Date = page.locator(".react-datepicker__day.react-datepicker__day--006");
      this.Performer_Select_Dropdown_Dob_Month = page.locator(".react-datepicker__month-select");
      this.Performer_Select_Dropdown_Dob_Mon_Val = page.locator(".react-datepicker__month-select");
      this.Performer_Select_Dropdown_Dob_Year = page.locator(".react-datepicker__year-select");
      this.Performer_Spotlight_DOB_Click_Dropdown = page.locator("input[name='dateOfBirth']");
      this.Performer_Photographer_Name = page.locator(".css-ackcql input");
      this.Performer_Choose_Poto = page.locator("#btn-headshot-choose-photo");
      this.Performer_Photographer_Name_Val = page.locator(".SelectFormik__option.css-ff68kf-option");
      this.Performer_Previous_Name = page.locator("#currentName");
      this.Performer_Type = page.locator(".css-18e889c-control .css-1d8n9bt");
      this.Performer_Type_Value = page.locator("//div[contains(@class,'css-18e889c-control')]//div[contains(@class,'css-1d8n9bt')]")
      this.Performer_Previous_Email = page.locator("#currentEmail");
      this.Performer_Publish_Age = page.locator("input[name='publishAge']");
      this.Performer_Playing_Age_From = page.locator("//div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]");
      this.Performer_Playing_Age_From_Value = page.locator("//div[normalize-space()='20 years']");
      this.Performer_Playing_Age_To = page.locator("//div[3]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]");

      this.Performer_Playing_Age_To_Value = page.locator("//div[3]/div[2]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[41]");
      this.Performer_Select_Gender_Dropdown = page.locator("section[class='flex flex-col pt-2 border-b border-grey-light'] div div[class=' css-1bnsk3c-placeholder']");
      this.Performer_Select_Gender_Dropdown_Val = page.locator(".SelectFormik__option.css-ff68kf-option");
      this.Performer_Displayed_Publlic_Profile = page.locator("(//div[@class='radio-group-formik__fields']/div[1]/label[1]/span[1])[2]");
      this.Performer_About_Continue_Btn = page.locator("#btn-aboutyou-continue");
      this.Performer_Review_Page_Text = page.locator(".py-4.text-2xl");
      this.Performer_Eligibility_Credits_Text = page.locator("text=Eligibility - Credits");
      this.Performer_Eligibility_Training_Text = page.locator("text=Eligibility - Training");
      this.Performer_Picture_Type_Text = page.locator("text=Choreography");
      this.Performer_Course_Name_Text = page.locator("text=Diploma in Acting")
      this.Performer_Role_Text = page.locator("text=Actor");
      this.Performer_Production_Compnay_Text = page.locator("text=Fox Studios");
      this.Performer_Qualification_Level_Text = page.locator("text=BA (Hons)")
      this.Performer_Director_Name_Text = page.locator("text=Rakesh roshan");
      this.Performer_Phone_Number_Text = page.locator("text=+44 9725288129");
      this.Performer_DOB_Text = page.locator("text=06.03.1995");
      this.Performer_Gender_Text = page.locator("text=Male");
      this.Performer_Continue_Checkout = page.locator(".c-button.c-button__primary.c-button--medium");
      this.Validate_Payment_Subscription_Text = page.locator("h1:has-text('Your Spotlight Subscription')");
      this.Validate_Performer_Annual_Direct_Debit_Text = page.locator("h3:has-text('Performer Annual Direct Debit')");
      this.Validate_Performer_Annual_Credit_Debit_Card_Text = page.locator("h3:has-text('Performer Annual Credit / Debit Card')");
      this.Validate_Performer_Monthly_Instalment_Direct_Debit_Text = page.locator("h3:has-text('Performer Monthly Instalment Direct Debit')");
      this.Performer_Select_Creditcard_Option = page.locator("//div[2]/div[3]/a[1]/button[1]");
      this.Performer_Get_Billing_Details_Header_Text = page.locator("div[class='billing-form'] h1")
      this.Performer_Get_Membership_Fee_Text = page.locator("#net-total");
      this.Performer_Total_Pay_Text = page.locator("#gross-total");
      this.Performer_Get_Frequency_Text = page.locator("#freq");
      this.Performer_Get_Total_Installment_Text = page.locator("#number");
      this.Performer_Confirm_Pay_Button = page.locator("#confirm-button");
      this.Performer_Billing_FirstName = page.locator("#BillingForenames");
      this.Performer_Billing_LastName = page.locator("#BillingSurname");
      this.Performer_Billing_Address = page.locator("#AddressLine1");
      this.Performer_Billing_City = page.locator("#City");
      this.Performer_Billing_Country = page.locator("#CountryDropDown");
      this.Performer_Billing_Postcode = page.locator("#Postcode");
      this.Performer_Billing_Confirm_Pay = page.locator("button[id='confirm-button'] span[class='ui-button-text']");
      this.Performer_Billing_Country_Value = page.locator("option[value='GB']");
      //Card Payment
      this.Performer_Payment_By_Visa_Card = page.locator("img[name='VISA']");
      this.Performer_Payment_By_Visa_Card_Number = page.locator("input[name='cardnumber']");
      this.Performer_Payment_By_Card_Valid_Month = page.locator("select[name='startmonth']");
      this.Performer_Payment_By_Card_Valid_Year = page.locator("select[name='startyear']");
      this.Performer_Payment_By_Card_Expiry_Month = page.locator("select[name='expirymonth']");
      this.Performer_Payment_By_Card_Expiry_Year = page.locator("select[name='expiryyear']");
      this.Performer_Payment_By_Card_Security_Code = page.locator("input[name='securitycode']");
      this.Performer_Payment_By_Card_Processed_Btn = page.locator("img[name='proceed']");
      this.Performer_Payment_By_Card_First_Name = page.locator("input[name='cardfirstnames']");
      this.Performer_Payment_By_Card_Last_Name = page.locator("input[name='cardsurname']");
      this.Performer_Payment_Pay_Now_Btn = page.locator("img[alt='Pay Now']");

      this.Performer_Payment_By_Card_Next_Btn = page.locator("input[value='Next']");
      this.Performer_Registration_Complete_Get_Text = page.locator(".py-4.text-2xl");

      this.Performer_Add_Course_Btn = page.locator("#btn-add-course");
      this.Performer_Schoolname = page.locator("#schoolName");
      this.Performer_Coursename = page.locator("#courseName");
      this.Performer_Select_Qualification_Level_Dropdown = page.locator(".css-1d8n9bt");
      this.Performer_Select_Qualification_Level_Dropdown_Value = page.locator(".SelectFormik__option.css-ff68kf-option");
      this.Performer_Course_URL = page.locator("#courseUrl");
      this.Performer_Select_Course_Fulltime_Option = page.locator("//span[contains(text(),'Full-time')]");
      this.Performer_Save_Course_Btn = page.locator("a[id='btn-save-course'] span[class='c-button__text']");
      this.Performer_Upload_File_Delete_Icon = page.locator("div[class='icon-delete']");
      this.Performer_Upload_File_Title = page.locator(".c-record-with-action-controls__title");
      this.Performer_Fullname_Of_Referee = page.locator("#refereeName");
      this.Performer_Get_Recommended_Header = page.locator("text=Please add your recommendation information");
      this.Performer_Referee_Membership_Dropdown = page.locator("text=Please select");
      this.Performer_Referee_Membership_Dropdown_Value = page.locator("text=Association of Talent Agents");
      this.Validate_File_IS_Loaded = page.locator(".c-record-with-action-controls__title");
      this.Validate_Eligibility_Recommendation = page.locator("text=Eligibility - Recommendation");
      this.Validate_Referee_Membership = page.locator("//span[contains(text(),'Association of Talent Agents to update later when ')]");






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

   async Performer_Role_Name_Enter_Textbox() {

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

   async Performer_Upload_File_Images(File_Location: string) {

      //await this.Performer_Upload_File.setInputFiles("Upload_Doc/actor-agreement.pdf");
      await this.Performer_Upload_File.setInputFiles(File_Location);
   }

   async Performer_Union_Contract_Option() {

      await this.Performer_Union_Contract.click();

   }

   async Performer_Save_Credit_Btn_Click() {

      await this.Performer_Save_Credit_Btn.click();
   }

   async Validate_Get_And_Compare_Text(Expected_Locator: Locator, Expected_Value: string) {
      await expect(Expected_Locator).toHaveText(Expected_Value);
   }


   async Webapplication_Event_Click(Locator: Locator) {

      await Locator.click();
   }

   async Performer_Continue_About_To_You_Btn_Click() {

      await this.Performer_Continue_About_To_You_Btn.click();
   }

   async Validate_Performer_About_To_You_page_Text() {
      await expect(this.Performer_About_To_You_page).toHaveText('About you');


   }
   async Performer_Select_Photographer() {
      await this.Performer_Photographer_Name.isVisible();
      await this.Performer_Photographer_Name.type("Alex Norton");
      await this.Performer_Photographer_Name_Val.click();
      // await this.page.press(".css-ackcql input",'Tab');
   }


   async Performer_Select_DOB__Calender_Dropdown() {
      await this.Performer_Spotlight_DOB_Click_Dropdown.click();

      await this.Performer_Select_Dropdown_Dob_Month.selectOption("2");

      await this.Performer_Select_Dropdown_Dob_Year.selectOption("1995");
      await this.Performer_Select_Dropdown_Dob_Date.click();


   }

   async Performer_choose_Poto_Btn_Click() {

      await this.Performer_Choose_Poto.click();
   }
   async Performer_About_To_Page_Enter_PhoneNumber() {

      await this.Performer_About_To_Page_PhoneNumber.type(testdata.Performer_Mobile)
   }
   async Performer_About_To_Page_Enter_Landlinenumber() {

      await this.Performer_About_To_Page_Landlinenumber.type(testdata.Performer_Landline)
   }

   async Performer_About_To_Page_Previous_Membership() {

      await this.Performer_Spotlight_Member_Option.click();
      //await this.Performer_Previous_Name.type(testdata.Performer_Previous_Name)
      //await this.Performer_Type.click();
      //await this.Performer_Type_Value.click();
      // await this.Performer_Previous_Email.type(testdata.Performer_Previous_Register_Email)


   }
   async Performer_About_To_Page_Select_Publish_Age_Checkbox() {

      await this.Performer_Publish_Age.click();

   }

   async Performer_About_To_Page_Select_Playing_Age() {

      await this.Performer_Playing_Age_From.click()
      await this.Performer_Playing_Age_From_Value.click();
      await this.Performer_Playing_Age_To.click();
      await this.Performer_Playing_Age_To_Value.click();
   }
   async Performer_About_To_Page_Select_Gender() {

      await this.Performer_Select_Gender_Dropdown.click();
      await this.Performer_Select_Gender_Dropdown_Val.click();

   }
   async Performer_About_To_Page_Select_Displayed_Public_Profile() {

      await this.Performer_Displayed_Publlic_Profile.click();

   }
   async Performer_About_To_Page_Continue_Button_Click() {

      await this.Performer_About_Continue_Btn.click();

   }
   async Validate_Performer_Review_page_Text() {
      await expect(this.Performer_Review_Page_Text).toHaveText('Review');

   }



   async Validate_Performer_Review_Page_Eligibility_Credits_Label_Text() {

      await this.Validate_Get_And_Compare_Text(this.Performer_Eligibility_Credits_Text, "Eligibility - Credits");
      await this.Validate_Get_And_Compare_Text(this.Performer_Picture_Type_Text, "Choreography");
      await this.Validate_Get_And_Compare_Text(this.Performer_Production_Compnay_Text, "Fox Studios");

      await this.Validate_Get_And_Compare_Text(this.Performer_Director_Name_Text, "Rakesh roshan");
      await this.Validate_Get_And_Compare_Text(this.Performer_Phone_Number_Text, "+44 9725288129");
      await this.Validate_Get_And_Compare_Text(this.Performer_DOB_Text, "06.03.1995");
      await this.Validate_Get_And_Compare_Text(this.Performer_Gender_Text, "Male");

   }

   async Validate_Performer_Review_Page_Add_Course_Credits_Label_Text() {

      await this.Validate_Get_And_Compare_Text(this.Performer_Eligibility_Training_Text, "Eligibility - Training");
      await this.Validate_Get_And_Compare_Text(this.Performer_Course_Name_Text, "Diploma in Acting");
      await this.page.pause();
      await this.Validate_Get_And_Compare_Text(this.Performer_Qualification_Level_Text, "BA (Hons)");

   }

   async Validate_Performer_Review_Page_Add_Recommedation_Label_Text() {

      await this.Validate_Get_And_Compare_Text(this.Validate_Eligibility_Recommendation, "Eligibility - Recommendation");
      await this.Validate_Get_And_Compare_Text(this.Validate_Referee_Membership, "Association of Talent Agents to update later when we have the options");




   }

   async Performer_Continue_Checkout_Click() {

      await this.Performer_Continue_Checkout.click();

   }
   async Performer_Validate_Payment_Subscription_Text() {

      await expect(this.Validate_Payment_Subscription_Text).toHaveText('Your Spotlight Subscription');
      await expect(this.Validate_Performer_Annual_Direct_Debit_Text).toHaveText('Performer Annual Direct Debit');
      await expect(this.Validate_Performer_Annual_Credit_Debit_Card_Text).toHaveText('Performer Annual Credit / Debit Card');
      await expect(this.Validate_Performer_Monthly_Instalment_Direct_Debit_Text).toHaveText('Performer Monthly Instalment Direct Debit');

   }
   async Performer_Select_Creditcard_Btn_Click() {

      await Promise.all([this.page.waitForNavigation(),
      this.Performer_Select_Creditcard_Option.click()]);

   }
   async Performer_Validate_Payment_Invoice_Text() {

      await this.page.waitForLoadState('domcontentloaded');

      expect(await this.Performer_Get_Membership_Fee_Text.getAttribute("value")).toContain("£172.50");

      expect(await this.Performer_Total_Pay_Text.getAttribute("value")).toContain('£172.50');
      expect(await this.Performer_Get_Frequency_Text.getAttribute("value")).toContain('year');
      expect(await this.Performer_Get_Total_Installment_Text.getAttribute("value")).toContain('1');

   }

   async Performer_Creditcard_Payment_Continue_Btn_Click() {

      await this.Performer_Confirm_Pay_Button.click();

   }

   async Performer_Billing_Details() {
      await expect(this.Performer_Get_Billing_Details_Header_Text).toHaveText('Your billing details');
      await this.Performer_Billing_FirstName.type(testdata.Performer_First_Name);
      await this.Performer_Billing_LastName.type(testdata.Performer_Last_Name);
      await this.Performer_Billing_Address.type(testdata.Performer_Address);
      await this.Performer_Billing_City.type(testdata.Performer_City);
      await this.Performer_Billing_Country.selectOption("GB");
      //await this.Performer_Billing_Country_Value.click();
      await this.Performer_Billing_Postcode.type(testdata.Performer_Postcode);

   }
   async Performer_Billing_Confirm_Pay_Btn_Click() {

      await this.Performer_Billing_Confirm_Pay.click();

   }

   async Performer_Payment_Using_Visa_Card() {

      await this.Performer_Payment_By_Visa_Card.click();
      await this.Performer_Payment_By_Card_First_Name.type("");
      await this.Performer_Payment_By_Card_First_Name.type(testdata.Performer_First_Name);
      await this.Performer_Payment_By_Card_Last_Name.type("");
      await this.Performer_Payment_By_Card_Last_Name.type(testdata.Performer_Last_Name);
      await this.Performer_Payment_By_Visa_Card_Number.type(testdata.Visa_Card);
      await this.Performer_Payment_By_Card_Valid_Month.selectOption("02");
      await this.Performer_Payment_By_Card_Valid_Year.selectOption("04");
      await this.Performer_Payment_By_Card_Expiry_Month.selectOption("04");
      await this.Performer_Payment_By_Card_Expiry_Year.selectOption("32");
      await this.Performer_Payment_By_Card_Expiry_Year.selectOption("32");
      await this.Performer_Payment_By_Card_Security_Code.type(testdata.Visa_CVV);
   }

   async Performer_Payment_Processed_Btn_Click() {
      
      await this.Performer_Payment_By_Card_Processed_Btn.click();

   }

   async Performer_Payment_By_Card_Enter_OTP() {
     
      const OTP = this.page.frameLocator("iframe[name='3diframe']").getByPlaceholder("xxxxxx");
      await OTP.fill(testdata.Visa_OTP);
      

   }
   
   async Performer_Payment_Paynow_Btn() {

      await this.Performer_Payment_Pay_Now_Btn.click();
   }

   
   async Performer_Payment_By_Card_Next_Btn_Click() {
      const Nextbutton = this.page.frameLocator("iframe[name='3diframe']").locator("input[value='Next']");

      await Nextbutton.click();

   }


   async Validate_Performer_Registration_Complete_Text() {

      await Promise.all([this.page.waitForNavigation(),
      expect(this.Performer_Registration_Complete_Get_Text).toHaveText('Application complete!')]);



   }

   async Performer_Add_Credit_Section() {

      await this.Performer_Addcredit_Btn_Click();
      await this.Performer_Product_Name__Enter_Textbox();
      await this.Performer_Select_Movie_Type_Dropdown();
      await this.Performer_Role_Name_Enter_Textbox();
      await this.Performer_Production_Company_Enter_Textbox();
      await this.Performer_Credit_Link_Enter_Textbox();
      await this.Performer_Director_Name_Enter_Textbox();
      await this.Performer_Date_From_Select_Datepicker();
      await this.Performer_Date_TO_Select_Datepicker();
      await this.Performer_Upload_File_Images("Upload_Doc/actor-agreement.pdf");
      await this.Performer_Union_Contract_Option();
      await this.Performer_Save_Credit_Btn_Click();

   }





   async Performer_Add_Course_Section() {

      await this.Performer_Add_Course_Btn.click();
      await this.Performer_Schoolname.type(testdata.Performer_SchoolName);
      await this.Performer_Coursename.type(testdata.Performer_CourseName);
      await this.Performer_Date_From_Select_Datepicker();
      await this.Performer_Date_TO_Select_Datepicker();
      await this.Performer_Select_Qualification_Level_Dropdown.click();
      await this.Performer_Select_Qualification_Level_Dropdown_Value.click();
      await this.Performer_Course_URL.type(testdata.Performer_Course_URL)
      await this.Performer_Select_Course_Fulltime_Option.click();
      await this.Performer_Upload_File_Images("Upload_Doc/Acting-Course.pdf");



      await Promise.all([this.page.waitForLoadState('domcontentloaded'),
      expect(this.Performer_Upload_File_Title).toHaveText('Acting-Course.pdf')]);

      await this.Performer_Save_Course_Btn.click();

   }

   async Performer_Enter_Full_Name_Of_Referee() {

      await this.Performer_Fullname_Of_Referee.type(testdata.Recommended_Full_Name);

   }

   async Performer_Select_Referee_Membership() {

      await this.Performer_Referee_Membership_Dropdown.click();
      await this.Performer_Referee_Membership_Dropdown_Value.click();
   }

   async Check_Upload_File_is_Loaded(Web_Obj: Locator, expected_text: string) {

      await Promise.all([this.page.waitForLoadState('domcontentloaded'),
      expect(Web_Obj).toHaveText(expected_text)]);
   }





}