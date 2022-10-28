/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {test} from '../Fixtures/spotlight_Fixture';
import * as testdata from '../../test-Data/login-Testdata.json';

test('Validate Findoutmore button in performer section', async ({loginpage, performerpage, joinpage}) => {
    await loginpage.navigateToUrl(testdata.URL);
    await joinpage.joinnowbtnOnMainPage();
    await performerpage.performer_Findmore_Button_Click();
    await performerpage.joinnow_Button_Click();
    await performerpage.validate_Performer_Welcome_Text();
    await performerpage.validate_Performer_Experience_Text();
    await performerpage.validate_Performer_Training_Text();
    await performerpage.validate_Performer_Recommendation_Text();
    await performerpage.enter_Performer_Firstname();
    await performerpage.enter_Performer_Surname();
    await performerpage.check_name_availability_Btn_Click();
    await performerpage.enter_Performer_Email();
    await performerpage.select_Performer_Term_Checkbox();
    await performerpage.performer_Continue_Eligibility_Click();
    await performerpage.validate_Performer_Eligibility_Text();
});

test('Validate Joinnow button in performer section', async ({ loginpage, performerpage, joinpage }) => {


    await loginpage.navigateToUrl(testdata.URL);
    await joinpage.joinnowbtnOnMainPage();
    await performerpage.performer_Findmore_Button_Click();
    await performerpage.joinnow_Button_Click();
    await performerpage.validate_Performer_Welcome_Text();
    await performerpage.validate_Performer_Experience_Text();
    await performerpage.validate_Performer_Training_Text();
    await performerpage.validate_Performer_Recommendation_Text();
    await performerpage.enter_Performer_Firstname();
    await performerpage.enter_Performer_Surname();
    await performerpage.check_name_availability_Btn_Click();
    await performerpage.enter_Performer_Email();
    await performerpage.select_Performer_Term_Checkbox();
    await performerpage.performer_Continue_Eligibility_Click();
    await performerpage.validate_Performer_Eligibility_Text();
    //await page.pause();
});