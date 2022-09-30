import { test } from '@playwright/test';
import LoginPage from '../../pages/login.page';
import * as testdata from '../../test-Data/login-Testdata.json';
import UserTypes from '../../pages/userTypes';

test('Validate Login using Performer from Spotlight', async ({ page }) => {
	const loginPage = new LoginPage(page);
	const usertype = new UserTypes(page);
	await loginPage.navigateToUrl(testdata.URL);
	await loginPage.signinbuttonOnMainPage();
	await usertype.performerOption();
    
	await loginPage.doLogin(testdata.Performer_username, testdata.Performer_password);
	await usertype.validatePerformerLogin();
});

test('Validate Login using Agent from Spotlight', async ({ page }) => {
	const usertype = new UserTypes(page);
	const loginPage = new LoginPage(page);

	await loginPage.navigateToUrl(testdata.URL);
	await loginPage.signinbuttonOnMainPage();
	await usertype.agentOption();
	await loginPage.doLogin(testdata.Agent_username, testdata.Agent_password);
	await usertype.validateAgentLogin();
});

test('Validate Login using Casting Director from Spotlight', async ({ page }) => {
	const usertype = new UserTypes(page);
	const loginPage = new LoginPage(page);

	await loginPage.navigateToUrl(testdata.URL);
	await loginPage.signinbuttonOnMainPage();
	await usertype.castingDirectorOption();
	await loginPage.doLogin(testdata.Casting_username, testdata.Casting_password);
	await usertype.validateCastingDirectorLogin();
});
