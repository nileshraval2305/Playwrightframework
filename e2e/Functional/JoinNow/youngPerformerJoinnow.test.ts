/* eslint-disable no-mixed-spaces-and-tabs */
import ENV from '../../../utils/env';
import {test} from '../../Fixtures/spotlight_Fixture';
import * as testdata from '../../../test-Data/login-Testdata.json';

test('Young perfomer joining application End to End Flow', async ({page, loginpage, webevents, youngperformer, Performer_registerpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl.concat(testdata.Young_Performer_URL));
	});

	await test.step('Validate Welcome Text Header ', async () => {
	    await youngperformer.getwelcometext();
	});

	await test.step('Enter First Name of Young Performer', async () => {
		await youngperformer.enterYoungPerformerFirstname();
	});

	await test.step('Enter SirName of Young Performer', async () => {
		await youngperformer.enterYoungPerformerSurname();
	});
	await test.step('Select DOB of Young performer', async () => {
		await youngperformer.youngperformerSelectDobCalenderDropdown();
	});

	await test.step('Enter Parent Firstname of young performer', async () => {
		await youngperformer.enterYoungPerformerParentFirstname();
	});
	await test.step('Enter Parent Surname of young performer', async () => {
		await youngperformer.enterYoungPerformerParentSurname();
	});
	await test.step('Enter email Address', async () => {
		await youngperformer.enterYoungPerformerEmail();
	});
	await test.step('Enter phone number', async () => {
		await youngperformer.enterYoungPerformerPhone();
	});

	await test.step('Select Term and condition checkbox', async () => {
		await youngperformer.selectyoungPerformerTermConditionCheckbox();
	});
	await test.step('Click on Continue Eligibility Button', async () => {
		await youngperformer.youngPerformerContinueBtn();
	});
	await test.step('Validate About You Page Text', async () => {
		await Performer_registerpage.validatePerformerAboutToYoupageText();
	});

	await test.step('Upload Headshot', async () => {
		await Performer_registerpage.performerUploadFileImages('Upload_Doc/headhshot.jpg');
	});
	await test.step('Select Existing Photographer', async () => {
		await Performer_registerpage.performerSelectPhotographer();
	});
	await test.step('Click on Choose Photo button', async () => {
		await Performer_registerpage.performerChoosePotoBtnClick();
	});
	await test.step('Select Previous Membership option', async () => {
		await youngperformer.youngPerformerChooseSelectSpotlightMembership();
	});

	await test.step('Select Performer Publish Age Checkbox', async () => {
		await Performer_registerpage.performerAboutToPageSelectPublishAgeCheckbox();
	});

	await test.step('Select Performer Playing Age', async () => {
		await youngperformer.youngPerformerAboutToPageSelectPlayingAge();
	});
	await test.step('Select Performer Select Gender', async () => {
		await Performer_registerpage.performerAboutToPageSelectGender();
	});
	await test.step('Select Public Profile Radio Button', async () => {
		await Performer_registerpage.performerAboutToPageSelectDisplayedPublicProfile();
	});
	await test.step('Select About Page continue Button', async () => {
		await youngperformer.youngPerformerContinueToReviewButtonClick();
	});
	await test.step('Validate young Performer Review page text', async () => {
		await Performer_registerpage.validatePerformerReviewpageText();
	});

	await test.step('Validate Young Performer Review page compare all field', async () => {
		await youngperformer.validateYoungPerformerReviewPageEligibilityCreditsLabelText();
		await youngperformer.validateYoungPerformerReviewAgent();
	});

	await test.step('Click on Continue Checkout button', async () => {
		await Performer_registerpage.performerContinueCheckoutClick();
	});
	await test.step('Validate Payment Subscription text', async () => {
		await Performer_registerpage.youngPerformerValidatePaymentSubscriptionText();
	});
	await test.step('Select Debit and Credit Card option', async () => {
		await Performer_registerpage.performerselectcreditcardBtnClick();
	});
	await test.step('Validate Payment Invoice Text', async () => {
		await Performer_registerpage.performerValidatePaymentInvoiceText('£114.00', 'year');
	});

	await test.step('Click on Payment Continue Btn', async () => {
		await Performer_registerpage.performercreditcardPaymentContinueBtnClick();
	});

	await test.step('Enter Performer Billing Details', async () => {
		await Performer_registerpage.performerBillingDetails();
	});

	await test.step('Click on Confirm Pay Button', async () => {
		await Performer_registerpage.performerBillingConfirmPayBtnClick();
	});

	await test.step('Select Payment using Visa Card', async () => {
		await Performer_registerpage.performerPaymentUsingVisaCard();
	});

	await test.step('Select Payment Processed Button', async () => {
		await Performer_registerpage.performerPaymentProcessedBtnClick();
	});
	await test.step('Click on Pay Now Button', async () => {
		await Performer_registerpage.performerPaymentPaynowBtn();
	});
	await test.step('Validate Registration Completed Text', async () => {
		await Performer_registerpage.validatePerformerRegistrationCompleteText();
	});
});

test('Young Perfomer Joining Application End to End Flow Using Annual Direct Payment Option', async ({page, loginpage, youngperformer, Performer_registerpage, Payment}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl.concat(testdata.Young_Performer_URL));
	});

	await test.step('Validate Welcome Text Header ', async () => {
	    await youngperformer.getwelcometext();
	});

	await test.step('Enter First Name of Young Performer', async () => {
		await youngperformer.enterYoungPerformerFirstname();
	});

	await test.step('Enter SirName of Young Performer', async () => {
		await youngperformer.enterYoungPerformerSurname();
	});
	await test.step('Select DOB of Young performer', async () => {
		await youngperformer.youngperformerSelectDobCalenderDropdown();
	});

	await test.step('Enter Parent Firstname of young performer', async () => {
		await youngperformer.enterYoungPerformerParentFirstname();
	});
	await test.step('Enter Parent Surname of young performer', async () => {
		await youngperformer.enterYoungPerformerParentSurname();
	});
	await test.step('Enter email Address', async () => {
		await youngperformer.enterYoungPerformerEmail();
	});
	await test.step('Enter phone number', async () => {
		await youngperformer.enterYoungPerformerPhone();
	});

	await test.step('Select Term and condition checkbox', async () => {
		await youngperformer.selectyoungPerformerTermConditionCheckbox();
	});
	await test.step('Click on Continue Eligibility Button', async () => {
		await youngperformer.youngPerformerContinueBtn();
	});
	await test.step('Validate About You Page Text', async () => {
		await Performer_registerpage.validatePerformerAboutToYoupageText();
	});

	await test.step('Upload Headshot', async () => {
		await Performer_registerpage.performerUploadFileImages('Upload_Doc/headhshot.jpg');
	});
	await test.step('Select Existing Photographer', async () => {
		await Performer_registerpage.performerSelectPhotographer();
	});
	await test.step('Click on Choose Photo button', async () => {
		await Performer_registerpage.performerChoosePotoBtnClick();
	});
	await test.step('Select Previous Membership option', async () => {
		await youngperformer.youngPerformerChooseSelectSpotlightMembership();
	});

	await test.step('Select Performer Publish Age Checkbox', async () => {
		await Performer_registerpage.performerAboutToPageSelectPublishAgeCheckbox();
	});

	await test.step('Select Performer Playing Age', async () => {
		await youngperformer.youngPerformerAboutToPageSelectPlayingAge();
	});
	await test.step('Select Performer Select Gender', async () => {
		await Performer_registerpage.performerAboutToPageSelectGender();
	});
	await test.step('Select Public Profile Radio Button', async () => {
		await Performer_registerpage.performerAboutToPageSelectDisplayedPublicProfile();
	});
	await test.step('Select About Page continue Button', async () => {
		await youngperformer.youngPerformerContinueToReviewButtonClick();
	});
	await test.step('Validate young Performer Review page text', async () => {
		await Performer_registerpage.validatePerformerReviewpageText();
	});

	await test.step('Validate Young Performer Review page compare all field', async () => {
		await youngperformer.validateYoungPerformerReviewPageEligibilityCreditsLabelText();
		await youngperformer.validateYoungPerformerReviewAgent();
	});

	await test.step('Click on Continue Checkout button', async () => {
		await Performer_registerpage.performerContinueCheckoutClick();
	});
	await test.step('Validate Payment Subscription text', async () => {
		await Performer_registerpage.youngPerformerValidatePaymentSubscriptionText();
	});
	await test.step('Select Direct Debit option', async () => {
		await Payment.youngPerformerAnnuaalDirectDebitSelectBtnClick();
	});
	await test.step('Validate Payment Invoice Text', async () => {
		await Performer_registerpage.performerValidatePaymentInvoiceText('£114.00', 'year');
	});
	await test.step('Click on Confirm Pay Button', async () => {
		await Performer_registerpage.performerBillingConfirmPayBtnClick();
	});
	await test.step('Validate Direct Debit page', async () => {
		await Payment.validateDirectDebitBillingDetails();
	});

	await test.step('Validate Registration Completed Text', async () => {
		await Performer_registerpage.validatePerformerRegistrationCompleteText();
	});
});
test('Young Perfomer Joining Application End to End Flow Using Monthly Direct Payment Option', async ({page, loginpage, youngperformer, Performer_registerpage, Payment}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl.concat(testdata.Young_Performer_URL));
	});

	await test.step('Validate Welcome Text Header ', async () => {
	    await youngperformer.getwelcometext();
	});

	await test.step('Enter First Name of Young Performer', async () => {
		await youngperformer.enterYoungPerformerFirstname();
	});

	await test.step('Enter SirName of Young Performer', async () => {
		await youngperformer.enterYoungPerformerSurname();
	});
	await test.step('Select DOB of Young performer', async () => {
		await youngperformer.youngperformerSelectDobCalenderDropdown();
	});

	await test.step('Enter Parent Firstname of young performer', async () => {
		await youngperformer.enterYoungPerformerParentFirstname();
	});
	await test.step('Enter Parent Surname of young performer', async () => {
		await youngperformer.enterYoungPerformerParentSurname();
	});
	await test.step('Enter email Address', async () => {
		await youngperformer.enterYoungPerformerEmail();
	});
	await test.step('Enter phone number', async () => {
		await youngperformer.enterYoungPerformerPhone();
	});

	await test.step('Select Term and condition checkbox', async () => {
		await youngperformer.selectyoungPerformerTermConditionCheckbox();
	});
	await test.step('Click on Continue Eligibility Button', async () => {
		await youngperformer.youngPerformerContinueBtn();
	});
	await test.step('Validate About You Page Text', async () => {
		await Performer_registerpage.validatePerformerAboutToYoupageText();
	});

	await test.step('Upload Headshot', async () => {
		await Performer_registerpage.performerUploadFileImages('Upload_Doc/headhshot.jpg');
	});
	await test.step('Select Existing Photographer', async () => {
		await Performer_registerpage.performerSelectPhotographer();
	});
	await test.step('Click on Choose Photo button', async () => {
		await Performer_registerpage.performerChoosePotoBtnClick();
	});
	await test.step('Select Previous Membership option', async () => {
		await youngperformer.youngPerformerChooseSelectSpotlightMembership();
	});

	await test.step('Select Performer Publish Age Checkbox', async () => {
		await Performer_registerpage.performerAboutToPageSelectPublishAgeCheckbox();
	});

	await test.step('Select Performer Playing Age', async () => {
		await youngperformer.youngPerformerAboutToPageSelectPlayingAge();
	});
	await test.step('Select Performer Select Gender', async () => {
		await Performer_registerpage.performerAboutToPageSelectGender();
	});
	await test.step('Select Public Profile Radio Button', async () => {
		await Performer_registerpage.performerAboutToPageSelectDisplayedPublicProfile();
	});
	await test.step('Select About Page continue Button', async () => {
		await youngperformer.youngPerformerContinueToReviewButtonClick();
	});
	await test.step('Validate young Performer Review page text', async () => {
		await Performer_registerpage.validatePerformerReviewpageText();
	});

	await test.step('Validate Young Performer Review page compare all field', async () => {
		await youngperformer.validateYoungPerformerReviewPageEligibilityCreditsLabelText();
		await youngperformer.validateYoungPerformerReviewAgent();
	});

	await test.step('Click on Continue Checkout button', async () => {
		await Performer_registerpage.performerContinueCheckoutClick();
	});
	await test.step('Validate Payment Subscription text', async () => {
		await Performer_registerpage.youngPerformerValidatePaymentSubscriptionText();
	});
	await test.step('Select Direct Debit option', async () => {
		await Payment.youngPerformerMonthlyDirectDebitSelectBtnClick();
	});
	await test.step('Validate Payment Invoice Text', async () => {
		await Performer_registerpage.performerValidatePaymentInvoiceText('£123.84', 'month');
	});
	await test.step('Click on Confirm Pay Button', async () => {
		await Performer_registerpage.performerBillingConfirmPayBtnClick();
	});
	await test.step('Validate Direct Debit page', async () => {
		await Payment.validateDirectDebitBillingDetails();
	});

	await test.step('Validate Registration Completed Text', async () => {
		await Performer_registerpage.validatePerformerRegistrationCompleteText();
	});
});

