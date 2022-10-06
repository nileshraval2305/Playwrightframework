import { test } from "../Fixtures/spotlight_Fixture"

import * as testdata from '../../test-Data/login-Testdata.json';



test('Validate Findoutmore button in performer section', async ({ loginpage, performerpage, joinpage }) => {


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

});

test('Validate Joinnow button in performer section', async ({ loginpage, performerpage, joinpage }) => {


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
    //await page.pause();
});