import {test} from '../Fixtures/spotlight_Fixture';

import * as testdata from '../../test-Data/login-Testdata.json';

test('Validate Join now page', async ({joinpage, loginpage}) => {
	await loginpage.navigateToUrl(testdata.URL);
	await joinpage.joinnowbtnOnMainPage();
	await joinpage.validatePerformerTitle();
	await joinpage.validateAgentsTitle();
	await joinpage.validateCastingProfessionalsTitle();
	await joinpage.validateGratuatesTitle();
	await joinpage.validateYoungPerformersTitle();
});
