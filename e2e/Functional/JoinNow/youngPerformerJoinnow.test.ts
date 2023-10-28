/* eslint-disable no-mixed-spaces-and-tabs */
import ENV from '../../../utils/env';
import {test} from '../../Fixtures/spotlight_Fixture';
import * as testdata from '../../../test-Data/login-Testdata.json';
import * as userdata from '../../../test-Data/Spotlight-testdata.json';

test('Young perfomer joining application End to End Flow', async ({Payment, loginpage, webevents, youngperformer, Performer_registerpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl.concat(testdata.Young_Performer_URL));
		await loginpage.refreshUrl();
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
	await test.step('Enter Address 1', async () => {
		await Performer_registerpage.performerAddAddress1();
	});

	await test.step('Enter Address 2', async () => {
		await Performer_registerpage.performerAddAddress2();
	});

	await test.step('Enter City', async () => {
		await Performer_registerpage.performerCity('London');
	});

	await test.step('Enter Zip code', async () => {
		await Performer_registerpage.performerZipCode(userdata.Performer_Postcode);
	});

	await test.step('Select country', async () => {
		await Performer_registerpage.performerCountry('United Kingdom');
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
		await Performer_registerpage.performerValidatePaymentSubscriptionText('Young Performer annual subscription - credit/debit card', 'Young Performer annual subscription - Direct Debit', 'Young Performer monthly subscription - Direct Debit');
	});
	await test.step('Select Debit and Credit Card option', async () => {
		await Performer_registerpage.youngperformerselectcreditcardBtnClick();
	});
	await test.step('Validate Payment subscription Invoice Text', async () => {
		await Payment.performerValidateSubscriptionTypeOrderSummary('£114.00', '£19.00', '£95.00');
	});

	await test.step('Enter Performer Billing Details', async () => {
		await Payment.performerBillingDetailsCreditcard('United Kingdom', userdata.Performer_Postcode);
	});

	await test.step('Click on Payment Checkout Button', async () => {
		await Payment.paymentCheckout();
	});

	await test.step('Validate Registration Completed Text', async () => {
		await Performer_registerpage.validatePerformerRegistrationCompleteText('Application complete!');
	});
});

test('Young perfomer joining application End to End Flow without Existing Membership as NO', async ({Payment, loginpage, webevents, youngperformer, Performer_registerpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl.concat(testdata.Young_Performer_URL));
		await loginpage.refreshUrl();
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
	await test.step('Enter Address 1', async () => {
		await Performer_registerpage.performerAddAddress1();
	});

	await test.step('Enter Address 2', async () => {
		await Performer_registerpage.performerAddAddress2();
	});

	await test.step('Enter City', async () => {
		await Performer_registerpage.performerCity('London');
	});

	await test.step('Enter Zip code', async () => {
		await Performer_registerpage.performerZipCode(userdata.Performer_Postcode);
	});

	await test.step('Select country', async () => {
		await Performer_registerpage.performerCountry('United Kingdom');
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
		await youngperformer.youngPerformerChooseSelectSpotlightMembershipAsNo();
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
		await youngperformer.validateYoungPerformerReviewPageLabelTextWithoutSpotlightMemember();
		await youngperformer.validateYoungPerformerReviewAgent();
	});

	await test.step('Click on Continue Checkout button', async () => {
		await Performer_registerpage.performerContinueCheckoutClick();
	});
	await test.step('Validate Payment Subscription text', async () => {
		await Performer_registerpage.performerValidatePaymentSubscriptionText('Young Performer annual subscription - credit/debit card', 'Young Performer annual subscription - Direct Debit', 'Young Performer monthly subscription - Direct Debit');
	});
	await test.step('Select Debit and Credit Card option', async () => {
		await Performer_registerpage.youngperformerselectcreditcardBtnClick();
	});
	await test.step('Validate Payment subscription Invoice Text', async () => {
		await Payment.performerValidateSubscriptionTypeOrderSummary('£114.00', '£19.00', '£95.00');
	});

	await test.step('Enter Performer Billing Details', async () => {
		await Payment.performerBillingDetailsCreditcard('United Kingdom', userdata.Performer_Postcode);
	});

	await test.step('Click on Payment Checkout Button', async () => {
		await Payment.paymentCheckout();
	});

	await test.step('Validate Registration Completed Text', async () => {
		await Performer_registerpage.validatePerformerRegistrationCompleteText('Application complete!');
	});
});

test('Young Perfomer Joining Application End to End Flow Using Annual Direct Payment Option', async ({page, loginpage, youngperformer, Performer_registerpage, Payment}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl.concat(testdata.Young_Performer_URL));
		await loginpage.refreshUrl();
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
	await test.step('Enter Address 1', async () => {
		await Performer_registerpage.performerAddAddress1();
	});

	await test.step('Enter Address 2', async () => {
		await Performer_registerpage.performerAddAddress2();
	});

	await test.step('Enter City', async () => {
		await Performer_registerpage.performerCity('Newyork');
	});

	await test.step('Enter Zip code', async () => {
		await Performer_registerpage.performerZipCode(userdata.Performer_Postcode_USA);
	});

	await test.step('Select country', async () => {
		await Performer_registerpage.performerCountry('United States');
	});

	await test.step('Select state', async () => {
		await Performer_registerpage.performerState('California');
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
		await Performer_registerpage.performerValidatePaymentSubscriptionText('Young Performer annual subscription - credit/debit card', 'Young Performer annual subscription - Direct Debit', 'Young Performer monthly subscription - Direct Debit');
	});
	await test.step('Select Direct debit Card Annualy option', async () => {
		await Payment.youngPerformerAnnualDirectDebitSelectBtnClick();
	});

	await test.step('Click on Confirm Payment option', async () => {
		await Payment.confirmBtnfromAuthorizationPopup();
	});

	await test.step('Validate Payment subscription Invoice Text', async () => {
		await Payment.performerValidateSubscriptionTypeOrderSummary('£114.00', '£19.00', '£95.00');
	});

	await test.step('Enter billing and Payment Details', async () => {
		await Payment.performerBillingDirectDebit(userdata.Performer_Postcode);
	});

	await test.step('Click on Payment Checkout Button', async () => {
		await Payment.paymentCheckout();
	});

	await test.step('Click on Setup direct debit button Click ', async () => {
		await Payment.performerDirectDebitAnnually();
	});

	await test.step('Validate Registration Completed Text', async () => {
		await Performer_registerpage.validatePerformerRegistrationCompleteText('Direct Debit set up successfully!');
	});
});
test('Young Perfomer Joining Application End to End Flow Using Monthly Direct Payment Option', async ({page, loginpage, youngperformer, Performer_registerpage, Payment}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl.concat(testdata.Young_Performer_URL));
		await loginpage.refreshUrl();
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

	await test.step('Enter Address 1', async () => {
		await Performer_registerpage.performerAddAddress1();
	});

	await test.step('Enter Address 2', async () => {
		await Performer_registerpage.performerAddAddress2();
	});

	await test.step('Enter City', async () => {
		await Performer_registerpage.performerCity('London');
	});

	await test.step('Enter Zip code', async () => {
		await Performer_registerpage.performerZipCode(userdata.Performer_Postcode);
	});

	await test.step('Select country', async () => {
		await Performer_registerpage.performerCountry('United Kingdom');
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
		await Performer_registerpage.performerValidatePaymentSubscriptionText('Young Performer annual subscription - credit/debit card', 'Young Performer annual subscription - Direct Debit', 'Young Performer monthly subscription - Direct Debit');
	});
	await test.step('Select Direct debit Card montly option', async () => {
		await Payment.selectDirectDebitMonthlyOption();
	});

	await test.step('Click on Confirm Payment option', async () => {
		await Payment.confirmBtnfromAuthorizationPopup();
	});

	await test.step('Validate Payment subscription Invoice Text', async () => {
		await Payment.performerValidateSubscriptionTypeOrderSummary('£10.32', '£1.72', '£8.60');
	});

	await test.step('Enter billing and Payment Details', async () => {
		await Payment.performerBillingDirectDebit(userdata.Performer_Postcode);
	});
	await test.step('Click on Payment Checkout Button', async () => {
		await Payment.paymentCheckout();
	});

	await test.step('Click on Setup direct debit button Click ', async () => {
		await Payment.performerDirectDebitAnnually();
	});
	await test.step('Validate Registration Completed Text', async () => {
		await Performer_registerpage.validatePerformerRegistrationCompleteText('Direct Debit set up successfully!');
	});
});

test('Young Perfomer Joining Application End to End Flow Using Annual Direct Payment Option without select Spotlight membership as NO', async ({page, loginpage, youngperformer, Performer_registerpage, Payment}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl.concat(testdata.Young_Performer_URL));
		await loginpage.refreshUrl();
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
	await test.step('Enter Address 1', async () => {
		await Performer_registerpage.performerAddAddress1();
	});

	await test.step('Enter Address 2', async () => {
		await Performer_registerpage.performerAddAddress2();
	});

	await test.step('Enter City', async () => {
		await Performer_registerpage.performerCity('London');
	});

	await test.step('Enter Zip code', async () => {
		await Performer_registerpage.performerZipCode(userdata.Performer_Postcode);
	});

	await test.step('Select country', async () => {
		await Performer_registerpage.performerCountry('United Kingdom');
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
		await youngperformer.youngPerformerChooseSelectSpotlightMembershipAsNo();
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
		await youngperformer.validateYoungPerformerReviewPageLabelTextWithoutSpotlightMemember();
		await youngperformer.validateYoungPerformerReviewAgent();
	});

	await test.step('Click on Continue Checkout button', async () => {
		await Performer_registerpage.performerContinueCheckoutClick();
	});
	await test.step('Validate Payment Subscription text', async () => {
		await Performer_registerpage.performerValidatePaymentSubscriptionText('Young Performer annual subscription - credit/debit card', 'Young Performer annual subscription - Direct Debit', 'Young Performer monthly subscription - Direct Debit');
	});
	await test.step('Select Direct debit Card Annualy option', async () => {
		await Payment.youngPerformerAnnualDirectDebitSelectBtnClick();
	});

	await test.step('Click on Confirm Payment option', async () => {
		await Payment.confirmBtnfromAuthorizationPopup();
	});

	await test.step('Validate Payment subscription Invoice Text', async () => {
		await Payment.performerValidateSubscriptionTypeOrderSummary('£114.00', '£19.00', '£95.00');
	});

	await test.step('Enter billing and Payment Details', async () => {
		await Payment.performerBillingDirectDebit(userdata.Performer_Postcode);
	});

	await test.step('Click on Payment Checkout Button', async () => {
		await Payment.paymentCheckout();
	});

	await test.step('Click on Setup direct debit button Click ', async () => {
		await Payment.performerDirectDebitAnnually();
	});

	await test.step('Validate Registration Completed Text', async () => {
		await Performer_registerpage.validatePerformerRegistrationCompleteText('Direct Debit set up successfully!');
	});
});

test('Young Perfomer Joining Application End to End Flow Using Monthly Direct Payment Option with Select Spotlight Memebship option as No', async ({page, loginpage, youngperformer, Performer_registerpage, Payment}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl.concat(testdata.Young_Performer_URL));
		await loginpage.refreshUrl();
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
	await test.step('Enter Address 1', async () => {
		await Performer_registerpage.performerAddAddress1();
	});

	await test.step('Enter Address 2', async () => {
		await Performer_registerpage.performerAddAddress2();
	});

	await test.step('Enter City', async () => {
		await Performer_registerpage.performerCity('London');
	});

	await test.step('Enter Zip code', async () => {
		await Performer_registerpage.performerZipCode(userdata.Performer_Postcode);
	});

	await test.step('Select country', async () => {
		await Performer_registerpage.performerCountry('United Kingdom');
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
		await youngperformer.youngPerformerChooseSelectSpotlightMembershipAsNo();
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
		await youngperformer.validateYoungPerformerReviewPageLabelTextWithoutSpotlightMemember();
		await youngperformer.validateYoungPerformerReviewAgent();
	});

	await test.step('Click on Continue Checkout button', async () => {
		await Performer_registerpage.performerContinueCheckoutClick();
	});
	await test.step('Validate Payment Subscription text', async () => {
		await Performer_registerpage.performerValidatePaymentSubscriptionText('Young Performer annual subscription - credit/debit card', 'Young Performer annual subscription - Direct Debit', 'Young Performer monthly subscription - Direct Debit');
	});
	await test.step('Select Direct debit Card montly option', async () => {
		await Payment.selectDirectDebitMonthlyOption();
	});

	await test.step('Click on Confirm Payment option', async () => {
		await Payment.confirmBtnfromAuthorizationPopup();
	});

	await test.step('Validate Payment subscription Invoice Text', async () => {
		await Payment.performerValidateSubscriptionTypeOrderSummary('£10.32', '£1.72', '£8.60');
	});

	await test.step('Enter billing and Payment Details', async () => {
		await Payment.performerBillingDirectDebit(userdata.Performer_Postcode);
	});
	await test.step('Click on Payment Checkout Button', async () => {
		await Payment.paymentCheckout();
	});

	await test.step('Click on Setup direct debit button Click ', async () => {
		await Payment.performerDirectDebitAnnually();
	});
	await test.step('Validate Registration Completed Text', async () => {
		await Performer_registerpage.validatePerformerRegistrationCompleteText('Direct Debit set up successfully!');
	});
});
