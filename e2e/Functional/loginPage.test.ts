
import * as testdata from '../../test-Data/login-Testdata.json';
import {test} from '../Fixtures/spotlight_Fixture';

test.skip('Validate Login using Performer from Spotlight', async ({page, loginpage, usertype}) => {
	await loginpage.navigateToUrl(testdata.URL);
	await loginpage.signinbuttonOnMainPage();
	await usertype.doperformerOption();
	await loginpage.logintest(testdata.Performer_username, testdata.Performer_password);
	await page.context().storageState({path: 'Performer.json'});
	await usertype.validatePerformerLogintest();
});
test.use({storageState: 'Performer.json'});
test.skip('Validate By pass Login using Performer from Spotlight', async ({loginpage, usertype}) => {
	await loginpage.navigateToUrl(testdata.URL);
	await loginpage.myaccountbtnOnMainPage();

	await usertype.validatePerformerLogintest();
});
test.use({storageState: 'Agent.json'});
test.skip('Validate By pass Login using Agent from Spotlight', async ({loginpage, usertype, page}) => {
	await loginpage.navigateToUrl(testdata.URL);
	await loginpage.myaccountbtnOnMainPage();
	// Await usertype.agentOption();
	// await loginpage.doLogin(testdata.Agent_username, testdata.Agent_password);

	// await page.context().storageState({ path: 'Agent.json'});
	await usertype.validateAgentLogintest();
});

test.skip('Validate Login using Agent from Spotlight', async ({loginpage, usertype, page}) => {
	await loginpage.navigateToUrl(testdata.URL);
	await loginpage.signinbuttonOnMainPage();
	await usertype.agentOptiontest();
	await loginpage.logintest(testdata.Agent_username, testdata.Agent_password);

	await page.context().storageState({path: 'Agent.json'});
	await usertype.validateAgentLogintest();
});

test.use({storageState: 'Castingdirector.json'});
test.skip('Validate By Pass Login using Casting Director from Spotlight', async ({loginpage, usertype, page}) => {
	await loginpage.navigateToUrl(testdata.URL);
	await loginpage.myaccountbtnOnMainPage();
	// Await usertype.castingDirectorOption();
	// await loginpage.doLogin(testdata.Casting_username, testdata.Casting_password);
	// await page.context().storageState({ path: 'Castingdirector.json'});

	await usertype.validateCastingDirectorLogintest();
});

test.skip('Validate Login using Casting Director from Spotlight', async ({loginpage, usertype, page}) => {
	await loginpage.navigateToUrl(testdata.URL);
	await loginpage.signinbuttonOnMainPage();
	await usertype.castingDirectorOptiontest();
	await loginpage.logintest(testdata.Casting_username, testdata.Casting_password);
	await page.context().storageState({path: 'Castingdirector.json'});

	await usertype.validateCastingDirectorLogintest();
});
