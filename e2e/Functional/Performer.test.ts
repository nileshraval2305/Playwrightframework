
import {test} from '../Fixtures/spotlight_Fixture';
import * as testdata from '../../test-Data/login-Testdata.json';

test('Validate Findoutmore button in performer section', async ({loginpage, performerpage, joinpage}) => {
	await loginpage.navigateToUrl(testdata.URL);
	await joinpage.joinnowbtnOnMainPage();
	await performerpage.performerFindmoreButtonClick();
	await performerpage.joinnowButtonClick();
	await performerpage.validatePerformerWelcomeText();
	await performerpage.validatePerformerExperienceText();
	await performerpage.validatePerformerTrainingText();
	await performerpage.validatePerformerRecommendationText();
	await performerpage.enterPerformerFirstname();
	await performerpage.enterPerformerSurname();
	await performerpage.checknameavailabilityBtnClick();
	await performerpage.enterPerformerEmail();
	await performerpage.selectPerformerTermCheckbox();
	await performerpage.performerContinueEligibilityClick();
	await performerpage.validatePerformerEligibilityText();
});

test('Validate Joinnow button in performer section', async ({loginpage, performerpage, joinpage}) => {
	await loginpage.navigateToUrl(testdata.URL);
	await joinpage.joinnowbtnOnMainPage();
	await performerpage.performerFindmoreButtonClick();
	await performerpage.joinnowButtonClick();
	await performerpage.validatePerformerWelcomeText();
	await performerpage.validatePerformerExperienceText();
	await performerpage.validatePerformerTrainingText();
	await performerpage.validatePerformerRecommendationText();
	await performerpage.enterPerformerFirstname();
	await performerpage.enterPerformerSurname();
	await performerpage.checknameavailabilityBtnClick();
	await performerpage.enterPerformerEmail();
	await performerpage.selectPerformerTermCheckbox();
	await performerpage.performerContinueEligibilityClick();
	await performerpage.validatePerformerEligibilityText();
});
