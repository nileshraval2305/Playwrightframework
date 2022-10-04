import {test} from '@playwright/test';
import JoinNowPage from '../../pages/joinNow.page';
import LoginPage from '../../pages/login.page';
import * as testdata from '../../test-Data/login-Testdata.json';

test('Validate Join now page', async ({page}) => {
	const loginPage = new LoginPage(page);
	const joinPage = new JoinNowPage(page);
	await loginPage.navigateToUrl(testdata.URL);
	await joinPage.joinnowbtnOnMainPage();
	await joinPage.validatePerformerTitle();
	await joinPage.validateAgentsTitle();
	await joinPage.validateCastingProfessionalsTitle();
	await joinPage.validateGratuatesTitle();
	await joinPage.validateYoungPerformersTitle();
	
});
