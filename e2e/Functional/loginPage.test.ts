import { test } from '../Fixtures/spotlight_Fixture';
import LoginPage from '../../pages/login.page';
import * as testdata from '../../test-Data/login-Testdata.json';
import UserTypes from '../../pages/userTypes';

test('Validate Login using Performer from Spotlight', async ({ loginpage,usertype }) => {
	
	await loginpage.navigateToUrl(testdata.URL);
	await loginpage.signinbuttonOnMainPage();
	await usertype.performerOption();
    
	await loginpage.doLogin(testdata.Performer_username, testdata.Performer_password);
	await usertype.validatePerformerLogin();
});

test('Validate Login using Agent from Spotlight', async ({ loginpage,usertype }) => {
	
	await loginpage.navigateToUrl(testdata.URL);
	await loginpage.signinbuttonOnMainPage();
	await usertype.agentOption();
	await loginpage.doLogin(testdata.Agent_username, testdata.Agent_password);
	await usertype.validateAgentLogin();
});

test('Validate Login using Casting Director from Spotlight', async ({ loginpage,usertype }) => {

	await loginpage.navigateToUrl(testdata.URL);
	await loginpage.signinbuttonOnMainPage();
	await usertype.castingDirectorOption();
	await loginpage.doLogin(testdata.Casting_username, testdata.Casting_password);
	await usertype.validateCastingDirectorLogin();
});
