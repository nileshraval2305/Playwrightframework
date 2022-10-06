import { test } from "../Fixtures/spotlight_Fixture"

import * as testdata from '../../test-Data/login-Testdata.json';



test('Validate AddCredit button in performer section', async ({ page, loginpage, performerpage, joinpage, Performer_registerpage }) => {


    await loginpage.navigateToUrl(testdata.URL);
    await joinpage.joinnowbtnOnMainPage();
    await performerpage.Performer_Findmore_Button_Click();
    await performerpage.Joinnow_Button_Click();
    await performerpage.Validate_Performer_Welcome_Text();
    await performerpage.Validate_Performer_Experience_Text();
    await performerpage.Validate_Performer_Training_Text();
    await performerpage.Validate_Performer_Recommendation_Text();
    await performerpage.Enter_Performer_Firstname();
    await performerpage.Enter_Performer_Surname();
    await performerpage.Check_name_availability_Btn_Click();
    await performerpage.Enter_Performer_Email();
    await performerpage.Select_Performer_Term_Checkbox();
    await performerpage.Performer_Continue_Eligibility_Click();
    await performerpage.Validate_Performer_Vaidate_Eligibility_Text();
    await performerpage.select_Performer_Experience_Criteria_Option();
    await performerpage.Performer_Continue_Eligibility_Btn2_Click();
    await Performer_registerpage.Performer_Addcredit_Btn_Click();
    await Performer_registerpage.Performer_Product_Name__Enter_Textbox();
    await Performer_registerpage.Performer_Select_Movie_Type_Dropdown();
    await Performer_registerpage.Performer_Role_Name_Enter_Textboxt();
    await Performer_registerpage.Performer_Production_Company_Enter_Textbox();
    await Performer_registerpage.Performer_Credit_Link_Enter_Textbox();
    await Performer_registerpage.Performer_Director_Name_Enter_Textbox();
    await Performer_registerpage.Performer_Date_From_Select_Datepicker();
    await Performer_registerpage.Performer_Date_TO_Select_Datepicker();
    await Performer_registerpage.Performer_Upload_Contract_File();
    await Performer_registerpage.Performer_Union_Contract_Option();
    await Performer_registerpage.Performer_Save_Credit_Btn_Click();
    await Performer_registerpage.Validate_Performer_Get_Credit_Header_Text();
    await Performer_registerpage.Performer_Continue_About_To_You_Btn_Click();
    //await page.pause();


});