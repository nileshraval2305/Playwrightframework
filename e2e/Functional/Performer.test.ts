import { test } from '@playwright/test';
import JoinNowPage from '../../pages/joinNow.page';
import PerformerPage from '../../pages/Performer.page';
import * as testdata from '../../test-Data/login-Testdata.json';
import LoginPage from '../../pages/login.page';


test('Validate Findoutmore button in performer section', async ({ page }) => {
	
	const loginPage = new LoginPage(page);
	const joinPage = new JoinNowPage(page);
	const performer = new PerformerPage(page);
    await loginPage.navigateToUrl(testdata.URL);
	await joinPage.joinnowbtnOnMainPage();
    await performer.Performer_Findmore_Button_Click();
    await performer.Validate_Performer_Spotlight_Profile_Text();
    await performer.Validate_Performer_Advice_and_Support_Text();
    await performer.Validate_Performer_Developement_Events_Text();
    await performer.Validate_Performer_Faq_Text();
    await performer.Validate_Performer_Spotlight_Discounts_Text();
    await performer.Validate_Performer_Text();
    await performer.Validate_performer_Contact();
    await performer.Validate_Performer_Get_Price_Text();
    
    
});

test('Validate Joinnow button in performer section', async ({ page }) => {
	
	const loginPage = new LoginPage(page);
	const joinPage = new JoinNowPage(page);
	const performer = new PerformerPage(page);
    await loginPage.navigateToUrl(testdata.URL);
	await joinPage.joinnowbtnOnMainPage();
    await performer.Performer_Findmore_Button_Click();
    await performer.Joinnow_Button_Click();
    await performer.Validate_Performer_Welcome_Text();
    await performer.Validate_Performer_Experience_Text();
    await performer.Validate_Performer_Training_Text();
    await performer.Validate_Performer_Recommendation_Text();
    await performer.Enter_Performer_Firstname();
    await performer.Enter_Performer_Surname();
    await performer.Check_name_availability_Btn_Click();
    await performer.Enter_Performer_Email();
    await performer.Select_Performer_Term_Checkbox();
    await performer.Performer_Continue_Eligibility_Click();
    await performer.Validate_Performer_Vaidate_Eligibility_Text();
    //await page.pause();
});