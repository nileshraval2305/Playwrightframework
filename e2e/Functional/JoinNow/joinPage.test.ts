
import {test} from '../../Fixtures/spotlight_Fixture';
import ENV from '../../../utils/env';

test('Validate Join now page', async ({joinpage, loginpage, page}) => {
	await page.goto(ENV.baseUrl);
	await joinpage.joinnowbtnOnMainPage();
	await joinpage.validatePerformerTitle();
	await joinpage.validateAgentsTitle();
	await joinpage.validateCastingProfessionalsTitle();
	await joinpage.validateGratuatesTitle();
	await joinpage.validateYoungPerformersTitle();
});
