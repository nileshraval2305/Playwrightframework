import * as userdata from '../../../test-Data/Spotlight-testdata.json';
import {test} from '../../Fixtures/spotlight_Fixture';

import ENV from '../../../utils/env';

test('Validate Welcome Page from Casting Director Joining', async ({loginpage, cdjoining, joinpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});

	await test.step('Click on Join now button from header', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});

	await test.step('Click on Findmore Button in Casting professional section ', async () => {
		await cdjoining.cdFindmoreBtn();
	});

	await test.step('Click on join now Button in Casting professional section ', async () => {
		await cdjoining.cdJoinnowPagebtn();
	});

	await test.step('Validate Welcome Text Header ', async () => {
		await cdjoining.getwelcometext();
	});

	await test.step('Enter First Name of Casting Director Application', async () => {
		await cdjoining.enterCdFirstname();
	});

	await test.step('Enter LastName of Casting Director Application', async () => {
		await cdjoining.enterCdLastname();
	});
	await test.step('Enter Mobile number', async () => {
		await cdjoining.enterCdMobilenumber();
	});
	await test.step('Enter Landline number', async () => {
		await cdjoining.enterLandlinenumber();
	});
	await test.step('Enter email address', async () => {
		await cdjoining.enterEmailAddress();
	});
	await test.step('Select Occupation', async () => {
		await cdjoining.selectCdOccupationDropdown();
	});
	await test.step('Enter companyname', async () => {
		await cdjoining.enterCompanyname();
	});

	await test.step('Enter website url', async () => {
		await cdjoining.enterWebsiteUrl(cdjoining.cdWebsite, userdata.CD_Website);
	});
	await test.step('Select casting director Memnbership organization as NO', async () => {
		await cdjoining.selectMembershipOraginzationOptionAsNo();
	});

	await test.step('Select Existing Member of spotlight option as NO', async () => {
		await cdjoining.selectExistingMemberofSpotlightOptionAsNo();
	});

	await test.step('Select Term & condition checkbox', async () => {
		await cdjoining.selectTermAndConditioncheckbox();
	});
	await test.step('Click on Continue button', async () => {
		await cdjoining.welcomeContinueBtnClick();
	});
	await test.step('Validate About you page text button', async () => {
		await cdjoining.getAboutpagetext();
	});
});

test('Validate Welcome Page of Casting Director who has part of Professional group and Existing Member of spotlight', async ({loginpage, cdjoining, joinpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});

	await test.step('Click on Join now button from header', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});

	await test.step('Click on Findmore Button in Casting professional section ', async () => {
		await cdjoining.cdFindmoreBtn();
	});

	await test.step('Click on join now Button in Casting professional section ', async () => {
		await cdjoining.cdJoinnowPagebtn();
	});

	await test.step('Validate Welcome Text Header ', async () => {
		// Await cdjoining.getwelcometext();
	});

	await test.step('Enter First Name of Casting Director Application', async () => {
		await cdjoining.enterCdFirstname();
	});

	await test.step('Enter LastName of Casting Director Application', async () => {
		await cdjoining.enterCdLastname();
	});
	await test.step('Enter Mobile number', async () => {
		await cdjoining.enterCdMobilenumber();
	});
	await test.step('Enter Landline number', async () => {
		await cdjoining.enterLandlinenumber();
	});
	await test.step('Enter email address', async () => {
		await cdjoining.enterEmailAddress();
	});
	await test.step('Select Occupation', async () => {
		await cdjoining.selectCdOccupationDropdown();
	});
	await test.step('Enter companyname', async () => {
		await cdjoining.enterCompanyname();
	});

	await test.step('Enter website url', async () => {
		await cdjoining.enterWebsiteUrl(cdjoining.cdWebsite, userdata.CD_Website);
	});
	await test.step('Select casting director Memnbership organization as Yes', async () => {
		await cdjoining.selectMembershipOraginzationOptionAsYes();
	});

	await test.step('Select casting director Memnbership organization Option as CDA group', async () => {
		await cdjoining.selectcastingDirectorMembershipdropdown();
	});
	await test.step('Enter Professional Membership Name', async () => {
		await cdjoining.enterProfessionalMembershipshipName();
	});

	await test.step('Enter professional Membership Email', async () => {
		await cdjoining.enterProfessionalMembershipshipEmail();
	});

	await test.step('Enter Membership number', async () => {
		await cdjoining.enterProfessionalMembershipshipNumber();
	});

	await test.step('Select Existing Spotlight Account Membership with Yes Option', async () => {
		await cdjoining.selectSpotlightAccountOptionAsYes();
	});

	await test.step('Enter Memership name', async () => {
		await cdjoining.enterSpotlightAccountMembershipName();
	});

	await test.step('Select Spotlight Account Memership type', async () => {
		await cdjoining.selectSpotlightAccountMembershipType();
	});
	await test.step('Select spotlight Account Email address', async () => {
		await cdjoining.entercdExistingSpotlightEmail();
	});

	await test.step('Select Term & condition checkbox', async () => {
		await cdjoining.selectTermAndConditioncheckbox();
	});
	await test.step('Click on Continue button', async () => {
		await cdjoining.welcomeContinueBtnClick();
	});
	await test.step('Validate Review page title', async () => {
		await cdjoining.getReviewpageTitletext();
	});
});

test('Validate Review Page of Casting Director who has part of Professional group and Existing Member of spotlight', async ({loginpage, cdjoining, joinpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});

	await test.step('Click on Join now button from header', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});

	await test.step('Click on Findmore Button in Casting professional section ', async () => {
		await cdjoining.cdFindmoreBtn();
	});

	await test.step('Click on join now Button in Casting professional section ', async () => {
		await cdjoining.cdJoinnowPagebtn();
	});

	await test.step('Validate Welcome Text Header ', async () => {
		await cdjoining.getwelcometext();
	});

	await test.step('Enter First Name of Casting Director Application', async () => {
		await cdjoining.enterCdFirstname();
	});

	await test.step('Enter LastName of Casting Director Application', async () => {
		await cdjoining.enterCdLastname();
	});
	await test.step('Enter Mobile number', async () => {
		await cdjoining.enterCdMobilenumber();
	});
	await test.step('Enter Landline number', async () => {
		await cdjoining.enterLandlinenumber();
	});
	await test.step('Enter email address and getting email address', async () => {
		await cdjoining.enterEmailAddress();
		await cdjoining.getEmailAddressfromWelcomepageValue();
	});
	await test.step('Select Occupation', async () => {
		await cdjoining.selectCdOccupationDropdown();
	});
	await test.step('Enter companyname', async () => {
		await cdjoining.enterCompanyname();
	});

	await test.step('Enter website url', async () => {
		await cdjoining.enterWebsiteUrl(cdjoining.cdWebsite, userdata.CD_Website);
	});
	await test.step('Select casting director Memnbership organization as Yes', async () => {
		await cdjoining.selectMembershipOraginzationOptionAsYes();
	});

	await test.step('Select casting director Memnbership organization Option as CDA group', async () => {
		await cdjoining.selectcastingDirectorMembershipdropdown();
	});
	await test.step('Enter Professional Membership Name', async () => {
		await cdjoining.enterProfessionalMembershipshipName();
	});

	await test.step('Enter professional Membership Email', async () => {
		await cdjoining.enterProfessionalMembershipshipEmail();
	});

	await test.step('Enter Membership number', async () => {
		await cdjoining.enterProfessionalMembershipshipNumber();
	});

	await test.step('Select Existing Spotlight Account Membership with Yes Option', async () => {
		await cdjoining.selectSpotlightAccountOptionAsYes();
	});

	await test.step('Enter Memership name', async () => {
		await cdjoining.enterSpotlightAccountMembershipName();
	});

	await test.step('Select Spotlight Account Memership type', async () => {
		await cdjoining.selectSpotlightAccountMembershipType();
	});
	await test.step('Select spotlight Account Email address', async () => {
		await cdjoining.entercdExistingSpotlightEmail();
	});

	await test.step('Select Term & condition checkbox', async () => {
		await cdjoining.selectTermAndConditioncheckbox();
	});
	await test.step('Click on Continue button', async () => {
		await cdjoining.welcomeContinueBtnClick();
	});
	await test.step('Validate Review page title', async () => {
		await cdjoining.getReviewpageTitletext();
	});
	await test.step('Validate Occupation  in Review page', async () => {
		await cdjoining.validateOccupationInReviewPage();
	});
	await test.step('Validate Companyname  in Review page', async () => {
		await cdjoining.validateCompanynameInReviewPage();
	});
	await test.step('Validate to select membership as(Yes/No) of professional group in Review page', async () => {
		await cdjoining.validateMembershipInReviewPage();
	});
	await test.step('Validate to Memberhipemail in Review page', async () => {
		await cdjoining.validateMembershipEmailInReviewPage();
	});

	await test.step('Validate to Memberhipnumber in Review page', async () => {
		await cdjoining.validateMembershipNumberInReviewPage();
	});

	await test.step('Validate to previous Spotlight Membership(Yes/No) in Review page', async () => {
		await cdjoining.validateSpotlightExistingMembershipTypeInReviewPage();
	});

	await test.step('Validate to previous Spotlight Membership name in Review page', async () => {
		await cdjoining.validateSpotlightExistingMembershipNameInReviewPage();
	});
	await test.step('Validate to previous Spotlight Membership Type in Review page', async () => {
		await cdjoining.validateSpotlightExistingMemberTypeInReviewPage();
	});

	await test.step('Validate to previous Spotlight Email in Review page', async () => {
		await cdjoining.validateExistingSpotlightEmailInReviewPage();
	});
});
test('Verified End to End flow with 2 years subscription plan from Casting Director Joining', async ({loginpage, cdjoining, cdpaymentoption, doPaymentoption, joinpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});

	await test.step('Click on Join now button from header', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});

	await test.step('Click on Findmore Button in Casting professional section ', async () => {
		await cdjoining.cdFindmoreBtn();
	});

	await test.step('Click on join now Button in Casting professional section ', async () => {
		await cdjoining.cdJoinnowPagebtn();
	});

	await test.step('Validate Welcome Text Header ', async () => {
		await cdjoining.getwelcometext();
	});

	await test.step('Enter First Name of Casting Director Application', async () => {
		await cdjoining.enterCdFirstname();
	});

	await test.step('Enter LastName of Casting Director Application', async () => {
		await cdjoining.enterCdLastname();
	});
	await test.step('Get full name Casting Director Application', async () => {
		await cdjoining.getCdFirstname();
		await cdjoining.getCdLastname();
		await cdjoining.getFullName();
	});
	await test.step('Enter Mobile number', async () => {
		await cdjoining.enterCdMobilenumber();
	});
	await test.step('Enter Landline number', async () => {
		await cdjoining.enterLandlinenumber();
	});
	await test.step('Enter email address', async () => {
		await cdjoining.enterEmailAddress();
		await cdjoining.getEmailAddressfromWelcomepageValue();
	});
	await test.step('Select Occupation', async () => {
		await cdjoining.selectCdOccupationDropdown();
	});
	await test.step('Enter companyname', async () => {
		await cdjoining.enterCompanyname();
	});

	await test.step('Enter website url', async () => {
		await cdjoining.enterWebsiteUrl(cdjoining.cdWebsite, userdata.CD_Website);
	});
	await test.step('Select casting director Memnbership organization as NO', async () => {
		await cdjoining.selectMembershipOraginzationOptionAsNo();
	});

	await test.step('Select Existing Member of spotlight option as NO', async () => {
		await cdjoining.selectExistingMemberofSpotlightOptionAsNo();
	});

	await test.step('Select Term & condition checkbox', async () => {
		await cdjoining.selectTermAndConditioncheckbox();
	});
	await test.step('Click on Continue button', async () => {
		await cdjoining.welcomeContinueBtnClick();
	});
	await test.step('Validate About you page text button', async () => {
		await cdjoining.getAboutpagetext();
	});
	await test.step('Select casting years dropdown', async () => {
		await cdjoining.selectcdyearsofexperience();
	});
	await test.step('Enter link url from About you page', async () => {
		await cdjoining.entercdLinkUrl();
	});

	await test.step('upload casting director CV', async () => {
		await cdjoining.uploadcvInAboutPage();
	});

	await test.step('Select CD working condition', async () => {
		await cdjoining.selectcdworkingcondition();
	});
	await test.step('Select CD following condtion', async () => {
		await cdjoining.selectcdspotlightfollowing();
	});

	await test.step('click on Continue to Review Button', async () => {
		await cdjoining.continuetoReviewBtnInAboutpage();
	});
	await test.step('Validate Review page title', async () => {
		await cdjoining.getReviewpageTitletext();
	});

	await test.step('Validate full name in Review page', async () => {
		await cdjoining.getEmailaddressfromReview();
		await cdjoining.validateEmailaddressInReviewpage();
	});
	await test.step('Validate Email address in Review page', async () => {
		await cdjoining.getfullNametextInReviewpage();
		await cdjoining.validateFullnameInReviewPage();
	});
	await test.step('Click on continue to Review page button', async () => {
		await cdjoining.continueBtnInReviewPage();
	});

	await test.step('Validate Casting director payment Page', async () => {
		await cdpaymentoption.validateCastingDirectorPaymentPage();
	});
	await test.step('Click on two year Payment option', async () => {
		await cdpaymentoption.validatetwoyearsPaymentOption();
	});
	await test.step('Validate Amount details Details from Subscription page', async () => {
		await doPaymentoption.validatePaymentPage('£495.00', 'One-off Payment');
	});
	await test.step('Click on confirm button from Subscription page', async () => {
		await doPaymentoption.continueButton();
	});
	await test.step('Click on Billing details from Subscription page', async () => {
		await doPaymentoption.validateBillingDetailsPage();
	});

	await test.step('Click on Processed button ', async () => {
		await doPaymentoption.processedButton();
	});
	await test.step('Click on Pay now button ', async () => {
		await doPaymentoption.processedButton();
	});
	await test.step('Validate Application complete page ', async () => {
		await doPaymentoption.validateApplicationCompletePage();
	});
});

test('Verified End to End flow with 1 year subscription plan from Casting Director Joining', async ({loginpage, cdjoining, cdpaymentoption, doPaymentoption, joinpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});

	await test.step('Click on Join now button from header', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});

	await test.step('Click on Findmore Button in Casting professional section ', async () => {
		await cdjoining.cdFindmoreBtn();
	});

	await test.step('Click on join now Button in Casting professional section ', async () => {
		await cdjoining.cdJoinnowPagebtn();
	});

	await test.step('Validate Welcome Text Header ', async () => {
		await cdjoining.getwelcometext();
	});

	await test.step('Enter First Name of Casting Director Application', async () => {
		await cdjoining.enterCdFirstname();
	});

	await test.step('Enter LastName of Casting Director Application', async () => {
		await cdjoining.enterCdLastname();
	});
	await test.step('Get full name Casting Director Application', async () => {
		await cdjoining.getCdFirstname();
		await cdjoining.getCdLastname();
		await cdjoining.getFullName();
	});
	await test.step('Enter Mobile number', async () => {
		await cdjoining.enterCdMobilenumber();
	});
	await test.step('Enter Landline number', async () => {
		await cdjoining.enterLandlinenumber();
	});
	await test.step('Enter email address', async () => {
		await cdjoining.enterEmailAddress();
		await cdjoining.getEmailAddressfromWelcomepageValue();
	});
	await test.step('Select Occupation', async () => {
		await cdjoining.selectCdOccupationDropdown();
	});
	await test.step('Enter companyname', async () => {
		await cdjoining.enterCompanyname();
	});

	await test.step('Enter website url', async () => {
		await cdjoining.enterWebsiteUrl(cdjoining.cdWebsite, userdata.CD_Website);
	});
	await test.step('Select casting director Memnbership organization as NO', async () => {
		await cdjoining.selectMembershipOraginzationOptionAsNo();
	});

	await test.step('Select Existing Member of spotlight option as NO', async () => {
		await cdjoining.selectExistingMemberofSpotlightOptionAsNo();
	});

	await test.step('Select Term & condition checkbox', async () => {
		await cdjoining.selectTermAndConditioncheckbox();
	});
	await test.step('Click on Continue button', async () => {
		await cdjoining.welcomeContinueBtnClick();
	});
	await test.step('Validate About you page text button', async () => {
		await cdjoining.getAboutpagetext();
	});
	await test.step('Select casting years dropdown', async () => {
		await cdjoining.selectcdyearsofexperience();
	});
	await test.step('Enter link url from About you page', async () => {
		await cdjoining.entercdLinkUrl();
	});

	await test.step('upload casting director CV', async () => {
		await cdjoining.uploadcvInAboutPage();
	});

	await test.step('Select CD working condition', async () => {
		await cdjoining.selectcdworkingcondition();
	});
	await test.step('Select CD following condtion', async () => {
		await cdjoining.selectcdspotlightfollowing();
	});

	await test.step('click on Continue to Review Button', async () => {
		await cdjoining.continuetoReviewBtnInAboutpage();
	});
	await test.step('Validate Review page title', async () => {
		await cdjoining.getReviewpageTitletext();
	});

	await test.step('Validate full name in Review page', async () => {
		await cdjoining.getEmailaddressfromReview();
		await cdjoining.validateEmailaddressInReviewpage();
	});
	await test.step('Validate Email address in Review page', async () => {
		await cdjoining.getfullNametextInReviewpage();
		await cdjoining.validateFullnameInReviewPage();
	});
	await test.step('Click on continue to Review page button', async () => {
		await cdjoining.continueBtnInReviewPage();
	});

	await test.step('Validate Casting director payment Page', async () => {
		await cdpaymentoption.validateCastingDirectorPaymentPage();
	});
	await test.step('Click on One year Payment option', async () => {
		await cdpaymentoption.validateOneyearsPaymentOption();
	});
	await test.step('Validate Amount details Details from Subscription page', async () => {
		await doPaymentoption.validatePaymentPage('£294.00', 'One-off Payment');
	});
	await test.step('Click on confirm button from Subscription page', async () => {
		await doPaymentoption.continueButton();
	});
	await test.step('Click on Billing details from Subscription page', async () => {
		await doPaymentoption.validateBillingDetailsPage();
	});

	await test.step('Click on Processed button ', async () => {
		await doPaymentoption.processedButton();
	});
	await test.step('Click on Pay now button ', async () => {
		await doPaymentoption.processedButton();
	});
	await test.step('Validate Application complete page ', async () => {
		await doPaymentoption.validateApplicationCompletePage();
	});
});

test('Verified End to End flow with 3 months subscription plan from Casting Director Joining', async ({joinpage, loginpage, cdjoining, cdpaymentoption, doPaymentoption}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});

	await test.step('Click on Join now button from header', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});

	await test.step('Click on Findmore Button in Casting professional section ', async () => {
		await cdjoining.cdFindmoreBtn();
	});

	await test.step('Click on join now Button in Casting professional section ', async () => {
		await cdjoining.cdJoinnowPagebtn();
	});

	await test.step('Validate Welcome Text Header ', async () => {
		await cdjoining.getwelcometext();
	});

	await test.step('Enter First Name of Casting Director Application', async () => {
		await cdjoining.enterCdFirstname();
	});

	await test.step('Enter LastName of Casting Director Application', async () => {
		await cdjoining.enterCdLastname();
	});
	await test.step('Get full name Casting Director Application', async () => {
		await cdjoining.getCdFirstname();
		await cdjoining.getCdLastname();
		await cdjoining.getFullName();
	});
	await test.step('Enter Mobile number', async () => {
		await cdjoining.enterCdMobilenumber();
	});
	await test.step('Enter Landline number', async () => {
		await cdjoining.enterLandlinenumber();
	});
	await test.step('Enter email address', async () => {
		await cdjoining.enterEmailAddress();
		await cdjoining.getEmailAddressfromWelcomepageValue();
	});
	await test.step('Select Occupation', async () => {
		await cdjoining.selectCdOccupationDropdown();
	});
	await test.step('Enter companyname', async () => {
		await cdjoining.enterCompanyname();
	});

	await test.step('Enter website url', async () => {
		await cdjoining.enterWebsiteUrl(cdjoining.cdWebsite, userdata.CD_Website);
	});
	await test.step('Select casting director Memnbership organization as NO', async () => {
		await cdjoining.selectMembershipOraginzationOptionAsNo();
	});

	await test.step('Select Existing Member of spotlight option as NO', async () => {
		await cdjoining.selectExistingMemberofSpotlightOptionAsNo();
	});

	await test.step('Select Term & condition checkbox', async () => {
		await cdjoining.selectTermAndConditioncheckbox();
	});
	await test.step('Click on Continue button', async () => {
		await cdjoining.welcomeContinueBtnClick();
	});
	await test.step('Validate About you page text button', async () => {
		await cdjoining.getAboutpagetext();
	});
	await test.step('Select casting years dropdown', async () => {
		await cdjoining.selectcdyearsofexperience();
	});
	await test.step('Enter link url from About you page', async () => {
		await cdjoining.entercdLinkUrl();
	});

	await test.step('upload casting director CV', async () => {
		await cdjoining.uploadcvInAboutPage();
	});

	await test.step('Select CD working condition', async () => {
		await cdjoining.selectcdworkingcondition();
	});
	await test.step('Select CD following condtion', async () => {
		await cdjoining.selectcdspotlightfollowing();
	});

	await test.step('click on Continue to Review Button', async () => {
		await cdjoining.continuetoReviewBtnInAboutpage();
	});
	await test.step('Validate Review page title', async () => {
		await cdjoining.getReviewpageTitletext();
	});

	await test.step('Validate full name in Review page', async () => {
		await cdjoining.getEmailaddressfromReview();
		await cdjoining.validateEmailaddressInReviewpage();
	});
	await test.step('Validate Email address in Review page', async () => {
		await cdjoining.getfullNametextInReviewpage();
		await cdjoining.validateFullnameInReviewPage();
	});
	await test.step('Click on continue to Review page button', async () => {
		await cdjoining.continueBtnInReviewPage();
	});

	await test.step('Validate Casting director payment Page', async () => {
		await cdpaymentoption.validateCastingDirectorPaymentPage();
	});
	await test.step('Click on Three month Payment option', async () => {
		await cdpaymentoption.validateThreeMonthsPaymentOption();
	});
	await test.step('Validate Amount details Details from Subscription page', async () => {
		await doPaymentoption.validatePaymentPage('£126.00', 'One-off Payment');
	});
	await test.step('Click on confirm button from Subscription page', async () => {
		await doPaymentoption.continueButton();
	});
	await test.step('Click on Billing details from Subscription page', async () => {
		await doPaymentoption.validateBillingDetailsPage();
	});

	await test.step('Click on Processed button ', async () => {
		await doPaymentoption.processedButton();
	});
	await test.step('Click on Pay now button ', async () => {
		await doPaymentoption.processedButton();
	});
	await test.step('Validate Application complete page ', async () => {
		await doPaymentoption.validateApplicationCompletePage();
	});
});

test('Verified End to End flow with 1 month subscription plan from Casting Director Joining', async ({loginpage, cdjoining, cdpaymentoption, doPaymentoption, joinpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});

	await test.step('Click on Join now button from header', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});

	await test.step('Click on Findmore Button in Casting professional section ', async () => {
		await cdjoining.cdFindmoreBtn();
	});

	await test.step('Click on join now Button in Casting professional section ', async () => {
		await cdjoining.cdJoinnowPagebtn();
	});

	await test.step('Validate Welcome Text Header ', async () => {
		// Await cdjoining.getwelcometext();
	});

	await test.step('Enter First Name of Casting Director Application', async () => {
		await cdjoining.enterCdFirstname();
	});

	await test.step('Enter LastName of Casting Director Application', async () => {
		await cdjoining.enterCdLastname();
	});
	await test.step('Get full name Casting Director Application', async () => {
		await cdjoining.getCdFirstname();
		await cdjoining.getCdLastname();
		await cdjoining.getFullName();
	});
	await test.step('Enter Mobile number', async () => {
		await cdjoining.enterCdMobilenumber();
	});
	await test.step('Enter Landline number', async () => {
		await cdjoining.enterLandlinenumber();
	});
	await test.step('Enter email address', async () => {
		await cdjoining.enterEmailAddress();
		await cdjoining.getEmailAddressfromWelcomepageValue();
	});
	await test.step('Select Occupation', async () => {
		await cdjoining.selectCdOccupationDropdown();
	});
	await test.step('Enter companyname', async () => {
		await cdjoining.enterCompanyname();
	});

	await test.step('Enter website url', async () => {
		await cdjoining.enterWebsiteUrl(cdjoining.cdWebsite, userdata.CD_Website);
	});
	await test.step('Select casting director Memnbership organization as NO', async () => {
		await cdjoining.selectMembershipOraginzationOptionAsNo();
	});

	await test.step('Select Existing Member of spotlight option as NO', async () => {
		await cdjoining.selectExistingMemberofSpotlightOptionAsNo();
	});

	await test.step('Select Term & condition checkbox', async () => {
		await cdjoining.selectTermAndConditioncheckbox();
	});
	await test.step('Click on Continue button', async () => {
		await cdjoining.welcomeContinueBtnClick();
	});
	await test.step('Validate About you page text button', async () => {
		await cdjoining.getAboutpagetext();
	});
	await test.step('Select casting years dropdown', async () => {
		await cdjoining.selectcdyearsofexperience();
	});
	await test.step('Enter link url from About you page', async () => {
		await cdjoining.entercdLinkUrl();
	});

	await test.step('upload casting director CV', async () => {
		await cdjoining.uploadcvInAboutPage();
	});

	await test.step('Select CD working condition', async () => {
		await cdjoining.selectcdworkingcondition();
	});
	await test.step('Select CD following condtion', async () => {
		await cdjoining.selectcdspotlightfollowing();
	});

	await test.step('click on Continue to Review Button', async () => {
		await cdjoining.continuetoReviewBtnInAboutpage();
	});
	await test.step('Validate Review page title', async () => {
		await cdjoining.getReviewpageTitletext();
	});

	await test.step('Validate full name in Review page', async () => {
		await cdjoining.getEmailaddressfromReview();
		await cdjoining.validateEmailaddressInReviewpage();
	});
	await test.step('Validate Email address in Review page', async () => {
		await cdjoining.getfullNametextInReviewpage();
		await cdjoining.validateFullnameInReviewPage();
	});
	await test.step('Click on continue to Review page button', async () => {
		await cdjoining.continueBtnInReviewPage();
	});

	await test.step('Validate Casting director payment Page', async () => {
		await cdpaymentoption.validateCastingDirectorPaymentPage();
	});
	await test.step('Click on one month Payment option', async () => {
		await cdpaymentoption.validateOneMonthsPaymentOption();
	});
	await test.step('Validate Amount details Details from Subscription page', async () => {
		await doPaymentoption.validatePaymentPage('£84.00', 'One-off Payment');
	});
	await test.step('Click on confirm button from Subscription page', async () => {
		await doPaymentoption.continueButton();
	});
	await test.step('Click on Billing details from Subscription page', async () => {
		await doPaymentoption.validateBillingDetailsPage();
	});

	await test.step('Click on Processed button ', async () => {
		await doPaymentoption.processedButton();
	});
	await test.step('Click on Pay now button ', async () => {
		await doPaymentoption.processedButton();
	});
	await test.step('Validate Application complete page ', async () => {
		await doPaymentoption.validateApplicationCompletePage();
	});
});

test('Verified Supported extension in uploaded cv of Casting Director About page Joining', async ({loginpage, cdjoining, cdpaymentoption, doPaymentoption, joinpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});

	await test.step('Click on Join now button from header', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});

	await test.step('Click on Findmore Button in Casting professional section ', async () => {
		await cdjoining.cdFindmoreBtn();
	});

	await test.step('Click on join now Button in Casting professional section ', async () => {
		await cdjoining.cdJoinnowPagebtn();
	});

	await test.step('Validate Welcome Text Header ', async () => {
		await cdjoining.getwelcometext();
	});

	await test.step('Enter First Name of Casting Director Application', async () => {
		await cdjoining.enterCdFirstname();
	});

	await test.step('Enter LastName of Casting Director Application', async () => {
		await cdjoining.enterCdLastname();
	});
	await test.step('Get full name Casting Director Application', async () => {
		await cdjoining.getCdFirstname();
		await cdjoining.getCdLastname();
		await cdjoining.getFullName();
	});
	await test.step('Enter Mobile number', async () => {
		await cdjoining.enterCdMobilenumber();
	});
	await test.step('Enter Landline number', async () => {
		await cdjoining.enterLandlinenumber();
	});
	await test.step('Enter email address', async () => {
		await cdjoining.enterEmailAddress();
		await cdjoining.getEmailAddressfromWelcomepageValue();
	});
	await test.step('Select Occupation', async () => {
		await cdjoining.selectCdOccupationDropdown();
	});
	await test.step('Enter companyname', async () => {
		await cdjoining.enterCompanyname();
	});

	await test.step('Enter website url', async () => {
		await cdjoining.enterWebsiteUrl(cdjoining.cdWebsite, userdata.CD_Website);
	});
	await test.step('Select casting director Memnbership organization as NO', async () => {
		await cdjoining.selectMembershipOraginzationOptionAsNo();
	});

	await test.step('Select Existing Member of spotlight option as NO', async () => {
		await cdjoining.selectExistingMemberofSpotlightOptionAsNo();
	});

	await test.step('Select Term & condition checkbox', async () => {
		await cdjoining.selectTermAndConditioncheckbox();
	});
	await test.step('Click on Continue button', async () => {
		await cdjoining.welcomeContinueBtnClick();
	});
	await test.step('Validate About you page text button', async () => {
		await cdjoining.getAboutpagetext();
	});
	await test.step('Select casting years dropdown', async () => {
		await cdjoining.selectcdyearsofexperience();
	});
	await test.step('Enter link url from About you page', async () => {
		await cdjoining.entercdLinkUrl();
	});

	await test.step('upload casting director CV', async () => {
		await cdjoining.validateUploadcvSuppotedExtensionInAbouttoPage();
	});
});

test('Verified About you page with casting performer underage 18 with using Existing spotlight account as Not sure option', async ({joinpage, loginpage, cdjoining}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});

	await test.step('Click on Join now button from header', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});

	await test.step('Click on Findmore Button in Casting professional section ', async () => {
		await cdjoining.cdFindmoreBtn();
	});

	await test.step('Click on join now Button in Casting professional section ', async () => {
		await cdjoining.cdJoinnowPagebtn();
	});

	await test.step('Validate Welcome Text Header ', async () => {
		// Await cdjoining.getwelcometext();
	});

	await test.step('Enter First Name of Casting Director Application', async () => {
		await cdjoining.enterCdFirstname();
	});

	await test.step('Enter LastName of Casting Director Application', async () => {
		await cdjoining.enterCdLastname();
	});
	await test.step('Get full name Casting Director Application', async () => {
		await cdjoining.getCdFirstname();
		await cdjoining.getCdLastname();
		await cdjoining.getFullName();
	});
	await test.step('Enter Mobile number', async () => {
		await cdjoining.enterCdMobilenumber();
	});
	await test.step('Enter Landline number', async () => {
		await cdjoining.enterLandlinenumber();
	});
	await test.step('Enter email address', async () => {
		await cdjoining.enterEmailAddress();
		await cdjoining.getEmailAddressfromWelcomepageValue();
	});
	await test.step('Select Occupation', async () => {
		await cdjoining.selectCdOccupationDropdown();
	});
	await test.step('Enter companyname', async () => {
		await cdjoining.enterCompanyname();
	});

	await test.step('Enter website url', async () => {
		await cdjoining.enterWebsiteUrl(cdjoining.cdWebsite, userdata.CD_Website);
	});
	await test.step('Select casting director Memnbership organization as NO', async () => {
		await cdjoining.selectMembershipOraginzationOptionAsNo();
	});

	await test.step('Select Existing Member of spotlight option as NO', async () => {
		await cdjoining.selectExistingMemberofSpotlightOptionAsNo();
	});

	await test.step('Select Term & condition checkbox', async () => {
		await cdjoining.selectTermAndConditioncheckbox();
	});
	await test.step('Click on Continue button', async () => {
		await cdjoining.welcomeContinueBtnClick();
	});
	await test.step('Validate About you page text button', async () => {
		await cdjoining.getAboutpagetext();
	});
	await test.step('Select casting years dropdown', async () => {
		await cdjoining.selectcdyearsofexperience();
	});
	await test.step('Enter link url from About you page', async () => {
		await cdjoining.entercdLinkUrl();
	});

	await test.step('upload casting director CV', async () => {
		await cdjoining.uploadcvInAboutPage();
	});

	await test.step('Select CD working condition', async () => {
		await cdjoining.selectcdworkingcondition();
	});
	await test.step('Select CD following with NotSure Option', async () => {
		await cdjoining.selectcdspotlightfollowithNotsureOption();
	});

	await test.step('click on Continue to Review Button', async () => {
		await cdjoining.continuetoReviewBtnInAboutpage();
	});
	await test.step('Validate Review page title', async () => {
		await cdjoining.getReviewpageTitletext();
	});

	await test.step('Validate full name in Review page', async () => {
		await cdjoining.getEmailaddressfromReview();
		await cdjoining.validateEmailaddressInReviewpage();
	});
	await test.step('Validate Email address in Review page', async () => {
		await cdjoining.getfullNametextInReviewpage();
		await cdjoining.validateFullnameInReviewPage();
	});
	await test.step('Click on continue to Review page button', async () => {
		await cdjoining.continueBtnInReviewPage();
	});
});

test('Verified End to End flow without entering optionals fields  as company website and casting experience dropdown from about page.', async ({joinpage, loginpage, cdjoining, cdpaymentoption, doPaymentoption}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});

	await test.step('Click on Join now button from header', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});

	await test.step('Click on Findmore Button in Casting professional section ', async () => {
		await cdjoining.cdFindmoreBtn();
	});

	await test.step('Click on join now Button in Casting professional section ', async () => {
		await cdjoining.cdJoinnowPagebtn();
	});

	await test.step('Validate Welcome Text Header ', async () => {
		await cdjoining.getwelcometext();
	});

	await test.step('Enter First Name of Casting Director Application', async () => {
		await cdjoining.enterCdFirstname();
	});

	await test.step('Enter LastName of Casting Director Application', async () => {
		await cdjoining.enterCdLastname();
	});
	await test.step('Get full name Casting Director Application', async () => {
		await cdjoining.getCdFirstname();
		await cdjoining.getCdLastname();
		await cdjoining.getFullName();
	});
	await test.step('Enter Mobile number', async () => {
		await cdjoining.enterCdMobilenumber();
	});
	await test.step('Enter Landline number', async () => {
		await cdjoining.enterLandlinenumber();
	});
	await test.step('Enter email address', async () => {
		await cdjoining.enterEmailAddress();
		await cdjoining.getEmailAddressfromWelcomepageValue();
	});
	await test.step('Select Occupation', async () => {
		await cdjoining.selectCdOccupationDropdown();
	});
	await test.step('Enter companyname', async () => {
		await cdjoining.enterCompanyname();
	});

	await test.step('Select casting director Memnbership organization as NO', async () => {
		await cdjoining.selectMembershipOraginzationOptionAsNo();
	});

	await test.step('Select Existing Member of spotlight option as NO', async () => {
		await cdjoining.selectExistingMemberofSpotlightOptionAsNo();
	});

	await test.step('Select Term & condition checkbox', async () => {
		await cdjoining.selectTermAndConditioncheckbox();
	});
	await test.step('Click on Continue button', async () => {
		await cdjoining.welcomeContinueBtnClick();
	});
	await test.step('Validate About you page text button', async () => {
		await cdjoining.getAboutpagetext();
	});

	await test.step('Enter link url from About you page', async () => {
		await cdjoining.entercdLinkUrl();
	});

	await test.step('upload casting director CV', async () => {
		await cdjoining.uploadcvInAboutPage();
	});

	await test.step('Select CD working condition', async () => {
		await cdjoining.selectcdworkingcondition();
	});
	await test.step('Select CD following condtion', async () => {
		await cdjoining.selectcdspotlightfollowing();
	});

	await test.step('click on Continue to Review Button', async () => {
		await cdjoining.continuetoReviewBtnInAboutpage();
	});
	await test.step('Validate Review page title', async () => {
		await cdjoining.getReviewpageTitletext();
	});

	await test.step('Validate full name in Review page', async () => {
		await cdjoining.getEmailaddressfromReview();
		await cdjoining.validateEmailaddressInReviewpage();
	});
	await test.step('Validate Email address in Review page', async () => {
		await cdjoining.getfullNametextInReviewpage();
		await cdjoining.validateFullnameInReviewPage();
	});
	await test.step('Click on continue to Review page button', async () => {
		await cdjoining.continueBtnInReviewPage();
	});

	await test.step('Validate Casting director payment Page', async () => {
		await cdpaymentoption.validateCastingDirectorPaymentPage();
	});
	await test.step('Click on one month Payment option', async () => {
		await cdpaymentoption.validateOneMonthsPaymentOption();
	});
	await test.step('Validate Amount details Details from Subscription page', async () => {
		await doPaymentoption.validatePaymentPage('£84.00', 'One-off Payment');
	});
	await test.step('Click on confirm button from Subscription page', async () => {
		await doPaymentoption.continueButton();
	});
	await test.step('Click on Billing details from Subscription page', async () => {
		await doPaymentoption.validateBillingDetailsPage();
	});

	await test.step('Click on Processed button ', async () => {
		await doPaymentoption.processedButton();
	});
	await test.step('Click on Pay now button ', async () => {
		await doPaymentoption.processedButton();
	});
	await test.step('Validate Application complete page ', async () => {
		await doPaymentoption.validateApplicationCompletePage();
	});
});
test('Verified End to End flow with social media handle from CD application Joining', async ({joinpage, loginpage, cdjoining, cdpaymentoption, doPaymentoption}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});

	await test.step('Click on Join now button from header', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});

	await test.step('Click on Findmore Button in Casting professional section ', async () => {
		await cdjoining.cdFindmoreBtn();
	});

	await test.step('Click on join now Button in Casting professional section ', async () => {
		await cdjoining.cdJoinnowPagebtn();
	});

	await test.step('Validate Welcome Text Header ', async () => {
		// Await cdjoining.getwelcometext();
	});

	await test.step('Enter First Name of Casting Director Application', async () => {
		await cdjoining.enterCdFirstname();
	});

	await test.step('Enter LastName of Casting Director Application', async () => {
		await cdjoining.enterCdLastname();
	});
	await test.step('Get full name Casting Director Application', async () => {
		await cdjoining.getCdFirstname();
		await cdjoining.getCdLastname();
		await cdjoining.getFullName();
	});
	await test.step('Enter Mobile number', async () => {
		await cdjoining.enterCdMobilenumber();
	});
	await test.step('Enter Landline number', async () => {
		await cdjoining.enterLandlinenumber();
	});
	await test.step('Enter email address', async () => {
		await cdjoining.enterEmailAddress();
		await cdjoining.getEmailAddressfromWelcomepageValue();
	});
	await test.step('Select Occupation', async () => {
		await cdjoining.selectCdOccupationDropdown();
	});
	await test.step('Enter companyname', async () => {
		await cdjoining.enterCompanyname();
	});

	await test.step('Enter Professional link as start with @', async () => {
		await cdjoining.enterWebsiteUrl(cdjoining.cdWebsite, userdata.CD_Professionallink);
	});
	await test.step('Select casting director Memnbership organization as NO', async () => {
		await cdjoining.selectMembershipOraginzationOptionAsNo();
	});

	await test.step('Select Existing Member of spotlight option as NO', async () => {
		await cdjoining.selectExistingMemberofSpotlightOptionAsNo();
	});

	await test.step('Select Term & condition checkbox', async () => {
		await cdjoining.selectTermAndConditioncheckbox();
	});
	await test.step('Click on Continue button', async () => {
		await cdjoining.welcomeContinueBtnClick();
	});
	await test.step('Validate About you page text button', async () => {
		await cdjoining.getAboutpagetext();
	});
	await test.step('Select casting years dropdown', async () => {
		await cdjoining.selectcdyearsofexperience();
	});
	await test.step('Enter link url from About you page', async () => {
		await cdjoining.entercdLinkUrl();
	});

	await test.step('upload casting director CV', async () => {
		await cdjoining.uploadcvInAboutPage();
	});

	await test.step('Select CD working condition', async () => {
		await cdjoining.selectcdworkingcondition();
	});
	await test.step('Select CD following condtion', async () => {
		await cdjoining.selectcdspotlightfollowing();
	});

	await test.step('click on Continue to Review Button', async () => {
		await cdjoining.continuetoReviewBtnInAboutpage();
	});
	await test.step('Validate Review page title', async () => {
		await cdjoining.getReviewpageTitletext();
	});

	await test.step('Validate full name in Review page', async () => {
		await cdjoining.getEmailaddressfromReview();
		await cdjoining.validateEmailaddressInReviewpage();
	});
	await test.step('Validate Email address in Review page', async () => {
		await cdjoining.getfullNametextInReviewpage();
		await cdjoining.validateFullnameInReviewPage();
	});
	await test.step('Click on continue to Review page button', async () => {
		await cdjoining.continueBtnInReviewPage();
	});

	await test.step('Validate Casting director payment Page', async () => {
		await cdpaymentoption.validateCastingDirectorPaymentPage();
	});
	await test.step('Click on one month Payment option', async () => {
		await cdpaymentoption.validateOneMonthsPaymentOption();
	});
	await test.step('Validate Amount details Details from Subscription page', async () => {
		await doPaymentoption.validatePaymentPage('£84.00', 'One-off Payment');
	});
	await test.step('Click on confirm button from Subscription page', async () => {
		await doPaymentoption.continueButton();
	});
	await test.step('Click on Billing details from Subscription page', async () => {
		await doPaymentoption.validateBillingDetailsPage();
	});

	await test.step('Click on Processed button ', async () => {
		await doPaymentoption.processedButton();
	});
	await test.step('Click on Pay now button ', async () => {
		await doPaymentoption.processedButton();
	});
	await test.step('Validate Application complete page ', async () => {
		await doPaymentoption.validateApplicationCompletePage();
	});
});
