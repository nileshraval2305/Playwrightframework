
import {test} from '../../Fixtures/spotlight_Fixture';
import ENV from '../../../utils/env';
import * as dotenv from 'dotenv';

dotenv.config({
	path: 'env/.env.dev',
	override: true,
});

test('Validate Join now page', async ({joinpage, loginpage, page}) => {
	await page.goto(ENV.baseUrl);
	await joinpage.joinnowbtnOnMainPage();
	await joinpage.validatePerformerTitle();
	await joinpage.validateAgentsTitle();
	await joinpage.validateCastingProfessionalsTitle();
	await joinpage.validateGratuatesTitle();
	await joinpage.validateYoungPerformersTitle();
});
