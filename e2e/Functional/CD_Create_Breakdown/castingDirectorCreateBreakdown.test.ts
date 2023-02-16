import * as userdata from '../../../test-Data/Spotlight-testdata.json';
import {test} from '../../Fixtures/spotlight_Fixture';
import * as testdata from '../../../test-Data/login-Testdata.json';
import ENV from '../../../utils/env';

test('Validate Create New Breakdown from Casting Director', async ({loginpage, cdjoining, usertype, cdCreateBreakdown}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});

	await test.step('Click on signin button', async () => {
		await loginpage.signinbuttonOnMainPage();
	});

	await test.step('Click on Casting Director option', async () => {
		await usertype.castingDirectorOptiontest();
	});

	await test.step('Enter username and password then click on continue ', async () => {
		await loginpage.logintest(testdata.Casting_username, testdata.Casting_password);
	});

	await test.step('Click on Create Breakdown button ', async () => {
		await cdCreateBreakdown.createBreakdownQuicklink();
	});

	await test.step('Select Project folder from dropdown', async () => {
		await cdCreateBreakdown.selectProjectFolderDropdownclick();
	});

	await test.step('Select New folder from dropdown', async () => {
		await cdCreateBreakdown.selectNewfolderInProjectDropdown();
	});
	await test.step('Enter project Name', async () => {
		await cdCreateBreakdown.enterProjectName();
	});
	await test.step('click on contine Button from Project', async () => {
		await cdCreateBreakdown.continueBtnInProject();
	});
	await test.step('Validate Production Details text from Dropdown', async () => {
		await cdCreateBreakdown.validateProductionDetailstext();
	});
	await test.step('Enter Production title Name', async () => {
		await cdCreateBreakdown.enterProductionTitleName();
	});
	await test.step('Validate Production Type', async () => {
		await cdCreateBreakdown.selectProductionType();
	});

	await test.step('Enter Production Summary Details', async () => {
		await cdCreateBreakdown.enterProductionSummarydetails();
	});

	await test.step('Enter Production Location', async () => {
		await cdCreateBreakdown.enterProductionlocation();
	});
	await test.step('Select Production country', async () => {
		await cdCreateBreakdown.selectProductionCountryvalue();
	});
	await test.step('Enter Director Name', async () => {
		await cdCreateBreakdown.enterDirectorNameAsOptional();
	});
	await test.step('Enter Producer Name', async () => {
		await cdCreateBreakdown.enterProducerNameAsOptional();
	});

	await test.step('Select Contract type of Project', async () => {
		await cdCreateBreakdown.selectcontracttypeofProject();
	});

	await test.step('Enter Casting location', async () => {
		await cdCreateBreakdown.enterCastingLocationVal();
	});

	await test.step('Select Casting country', async () => {
		await cdCreateBreakdown.selectCastingCountryDropdownval();
	});

	await test.step('Select closing date of Breakdown', async () => {
		await cdCreateBreakdown.selectClosingDateofBreakdown();
	});

	await test.step('Click on next Button', async () => {
		await cdCreateBreakdown.nextButtonClick();
	});
});
