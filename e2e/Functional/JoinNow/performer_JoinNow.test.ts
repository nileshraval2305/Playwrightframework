/* eslint-disable no-trailing-spaces */
import {test} from '../../Fixtures/spotlight_Fixture';
import ENV from '../../../utils/env';
import * as userdata from '../../../test-Data/Spotlight-testdata.json';

test('Perform joining application using Experience Option', async ({page, loginpage, performerpage, joinpage, Performer_registerpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});
	await test.step('Click on Join Now button in Home Page', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});
	await test.step('Click on Findmore button', async () => {
		await performerpage.performerFindmoreButtonClick();
	});
	await test.step('Click on Join Button', async () => {
		await performerpage.joinnowButtonClick();
	});
	await test.step('Validate Welcome Text Header ', async () => {
		await performerpage.validatePerformerWelcomeText();
	});
	await test.step('Validate Experience Text Header', async () => {
		await performerpage.validatePerformerExperienceText();
	});
	await test.step('Validate Training Text Header', async () => {
		await performerpage.validatePerformerTrainingText();
	});
	await test.step('Validate Recommendation Text Header', async () => {
		await performerpage.validatePerformerRecommendationText();
	});
	await test.step('Enter First Name of Performer', async () => {
		await performerpage.enterPerformerFirstname();
	});
	await test.step('Enter SirName of Performer', async () => {
		await performerpage.enterPerformerSurname();
	});
	await test.step('Click On Avaiable button to check name', async () => {
		await performerpage.checknameavailabilityBtnClick();
	});

	await test.step('Enter Email address of Performer', async () => {
		await performerpage.enterPerformerEmail();
	});
	await test.step('Select Term checkbox', async () => {
		await performerpage.selectPerformerTermCheckbox();
	});
	await test.step('Click on Eligibility button', async () => {
		await performerpage.performerContinueEligibilityClick();
	});
	await test.step('Validate Performer Eligibility text', async () => {
		await performerpage.validatePerformerEligibilityText();
	});

	await test.step('Click on Performer Experience Radio Button', async () => {
		await performerpage.selectPerformerExperienceCriteriaOption();
	});
	await test.step('Click on Continue Eligibility Button', async () => {
		await performerpage.performerContinueEligibilityBtn2Click();
	});

	await test.step('Click on Add credits button and enter all required details', async () => {
		await Performer_registerpage.performerAddCreditSection();
	});
	await test.step('Validate Get credit header title', async () => {
		await Performer_registerpage.validateGetAndCompareText(Performer_registerpage.performerGetCreditHeaderText, userdata.Performer_Credit_Header_Text);
	});

	await test.step('Click on Continue About to You button', async () => {
		await Performer_registerpage.performerContinueAboutToYouBtnClick();
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
	await test.step('Enter Phone Number', async () => {
		await Performer_registerpage.performerAboutToPageEnterPhoneNumber();
	});
	await test.step('Enter Landline Number', async () => {
		await Performer_registerpage.performerAboutToPageEnterLandlinenumber();
	});
	await test.step('Select Previous Membership option', async () => {
		await Performer_registerpage.performerAboutToPagePreviousMembership();
	});
	await test.step('Enter Performer DOB', async () => {
		await Performer_registerpage.performerSelectDobCalenderDropdown();
	});

	await test.step('Select Performer Publish Age Checkbox', async () => {
		await Performer_registerpage.performerAboutToPageSelectPublishAgeCheckbox();
	});
	
	await test.step('Select Performer Playing Age', async () => {
		await Performer_registerpage.performerAboutToPageSelectPlayingAge();
	});
	await test.step('Select Performer Select Gender', async () => {
		await Performer_registerpage.performerAboutToPageSelectGender();
	});
	await test.step('Select Public Profile Radio Button', async () => {
		await Performer_registerpage.performerAboutToPageSelectDisplayedPublicProfile();
	});
	await test.step('Select About Page continue Button', async () => {
		await Performer_registerpage.performerAboutToPageContinueButtonClick();
	});
	await test.step('Validate Performer Review page text', async () => {
		await Performer_registerpage.validatePerformerReviewpageText();
	});

	await test.step('Validate Performer Review page Credit label text', async () => {
		await Performer_registerpage.validatePerformerReviewPageEligibilityCreditsLabelText();
	});
	await test.step('Click on Continue Checkout button', async () => {
		await Performer_registerpage.performerContinueCheckoutClick();
	});
	await test.step('Validate Payment Subscription text', async () => {
		await Performer_registerpage.performerValidatePaymentSubscriptionText();
	});
	await test.step('Select Debit and Credit Card option', async () => {
		await Performer_registerpage.performerselectcreditcardBtnClick();
	});
	await test.step('Validate Payment Invoice Text', async () => {
		await Performer_registerpage.performerValidatePaymentInvoiceText('£172.50', 'year');
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

	// Await test.step('Enter OTP ', async () => {
	//	await Performer_registerpage.Performer_Payment_By_Card_Enter_OTP();
	// });
	// await test.step('Click on Next Button ', async () => {
	//	await Performer_registerpage.Performer_Payment_By_Card_Next_Btn_Click();
	//	});
	await test.step('Validate Registration Completed Text', async () => {
		await Performer_registerpage.validatePerformerRegistrationCompleteText();
	});
});

test('Perform joining application using Training Option', async ({page, loginpage, performerpage, joinpage, Performer_registerpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});
	await test.step('Click on Join Now button in Home Page', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});
	await test.step('Click on Findmore button', async () => {
		await performerpage.performerFindmoreButtonClick();
	});
	await test.step('Click on Join Button', async () => {
		await performerpage.joinnowButtonClick();
	});
	await test.step('Validate Welcome Text Header ', async () => {
		await performerpage.validatePerformerWelcomeText();
	});
	await test.step('Validate Experience Text Header', async () => {
		await performerpage.validatePerformerExperienceText();
	});
	await test.step('Validate Training Text Header', async () => {
		await performerpage.validatePerformerTrainingText();
	});
	await test.step('Validate Recommendation Text Header', async () => {
		await performerpage.validatePerformerRecommendationText();
	});
	await test.step('Enter First Name of Performer', async () => {
		await performerpage.enterPerformerFirstname();
	});
	await test.step('Enter SirName of Performer', async () => {
		await performerpage.enterPerformerSurname();
	});
	await test.step('Click On Avaiable button to check name', async () => {
		await performerpage.checknameavailabilityBtnClick();
	});

	await test.step('Enter Email address of Performer', async () => {
		await performerpage.enterPerformerEmail();
	});
	await test.step('Select Term checkbox', async () => {
		await performerpage.selectPerformerTermCheckbox();
	});
	await test.step('Click on Eligibility button', async () => {
		await performerpage.performerContinueEligibilityClick();
	});
	await test.step('Validate Performer Eligibility text', async () => {
		await performerpage.validatePerformerEligibilityText();
	});

	await test.step('Click on Training Radio Button', async () => {
		await performerpage.performerTrainingOptionClick();
	});

	await test.step('Click on Continue Eligibility Button', async () => {
		await performerpage.performerContinueEligibilityBtn2Click();
	});

	await test.step('Click on Add course button and fill all the details', async () => {
		await Performer_registerpage.performerAddCourseSection();
	});

	await test.step('Validate Add course Header', async () => {
		await Performer_registerpage.validateGetAndCompareText(Performer_registerpage.performerGetCreditHeaderText, userdata.Performer_Add_Course_Title);	
	});

	await test.step('Click on Continue About to You Button', async () => {
		await Performer_registerpage.webapplicationEventClick(Performer_registerpage.performerContinueAboutToYouBtn);
	});

	await test.step('Validate About Page text', async () => {
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
	await test.step('Enter Phone Number', async () => {
		await Performer_registerpage.performerAboutToPageEnterPhoneNumber();
	});
	await test.step('Enter Landline Number', async () => {
		await Performer_registerpage.performerAboutToPageEnterLandlinenumber();
	});
	await test.step('Select Previous Membership option', async () => {
		await Performer_registerpage.performerAboutToPagePreviousMembership();
	});
	await test.step('Enter Performer DOB', async () => {
		await Performer_registerpage.performerSelectDobCalenderDropdown();
	});

	await test.step('Select Performer Publish Age Checkbox', async () => {
		await Performer_registerpage.performerAboutToPageSelectPublishAgeCheckbox();
	});

	await test.step('Select Performer Playing Age', async () => {
		await Performer_registerpage.performerAboutToPageSelectPlayingAge();
	});
	await test.step('Select Performer Select Gender', async () => {
		await Performer_registerpage.performerAboutToPageSelectGender();
	});
	await test.step('Select Public Profile Radio Button', async () => {
		await Performer_registerpage.performerAboutToPageSelectDisplayedPublicProfile();
	});
	await test.step('Select About Page continue Button', async () => {
		await Performer_registerpage.performerAboutToPageContinueButtonClick();
	});
	await test.step('Validate Performer Review page text', async () => {
		await Performer_registerpage.validatePerformerReviewpageText();
	});

	await test.step('Validate Review page Add course details data text', async () => {
		await Performer_registerpage.validatePerformerReviewPageAddCourseCreditsLabelText();
	});
	await test.step('Click on Continue Checkout button', async () => {
		await Performer_registerpage.performerContinueCheckoutClick();
	});
	await test.step('Validate Payment Subscription text', async () => {
		await Performer_registerpage.performerValidatePaymentSubscriptionText();
	});
	await test.step('Select Debit and Credit Card option', async () => {
		await Performer_registerpage.performerselectcreditcardBtnClick();
	});
	await test.step('Validate Payment Invoice Text', async () => {
		await Performer_registerpage.performerValidatePaymentInvoiceText('£172.50', 'year');
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

test('Perform joining application using Recommended Option', async ({page, loginpage, performerpage, joinpage, Performer_registerpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});
	await test.step('Click on Join Now button in Home Page', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});
	await test.step('Click on Findmore button', async () => {
		await performerpage.performerFindmoreButtonClick();
	});
	await test.step('Click on Join Button', async () => {
		await performerpage.joinnowButtonClick();
	});
	await test.step('Validate Welcome Text Header ', async () => {
		await performerpage.validatePerformerWelcomeText();
	});
	await test.step('Validate Experience Text Header', async () => {
		await performerpage.validatePerformerExperienceText();
	});
	await test.step('Validate Training Text Header', async () => {
		await performerpage.validatePerformerTrainingText();
	});
	await test.step('Validate Recommendation Text Header', async () => {
		await performerpage.validatePerformerRecommendationText();
	});
	await test.step('Enter First Name of Performer', async () => {
		await performerpage.enterPerformerFirstname();
	});
	await test.step('Enter SirName of Performer', async () => {
		await performerpage.enterPerformerSurname();
	});
	await test.step('Click On Avaiable button to check name', async () => {
		await performerpage.checknameavailabilityBtnClick();
	});

	await test.step('Enter Email address of Performer', async () => {
		await performerpage.enterPerformerEmail();
	});
	await test.step('Select Term checkbox', async () => {
		await performerpage.selectPerformerTermCheckbox();
	});
	await test.step('Click on Eligibility button', async () => {
		await performerpage.performerContinueEligibilityClick();
	});
	await test.step('Validate Performer Eligibility text', async () => {
		await performerpage.validatePerformerEligibilityText();
	});
	await test.step('Click on Performer Recommended Button', async () => {
		await performerpage.performerRecommendedRadioBtnClick();
	});
	await test.step('Click on Continue Button', async () => {
		await performerpage.performerContinueEligibilityBtn2Click();
	});
	await test.step('Validate Performerm Recommended header', async () => {
		await Performer_registerpage.validateGetAndCompareText(Performer_registerpage.performerGetRecommendedHeader, userdata.Performer_Recommended_Header_Text);
	});
	await test.step('Enter full name of Referee', async () => {
		await Performer_registerpage.performerEnterFullNameOfReferee();
	});

	await test.step('Select Referee\'s Membership', async () => {
		await Performer_registerpage.performerSelectRefereeMembership();
	});
	await test.step('Upload Recommendation Letter', async () => {
		await Performer_registerpage.performerUploadFileImages('Upload_Doc/Recommendation_letter.jpg');
	});
	await test.step('Validate upload file is loaded', async () => {
		await Performer_registerpage.checkUploadFileisLoaded(Performer_registerpage.validateFileIsLoaded, userdata.Recommended_Letter);
	});

	await test.step('Click on Continue About to You Button', async () => {
		await Performer_registerpage.webapplicationEventClick(Performer_registerpage.performerContinueAboutToYouBtn);
	});
	await test.step('Validate About Page text', async () => {
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
	await test.step('Enter Phone Number', async () => {
		await Performer_registerpage.performerAboutToPageEnterPhoneNumber();
	});
	await test.step('Enter Landline Number', async () => {
		await Performer_registerpage.performerAboutToPageEnterLandlinenumber();
	});
	await test.step('Select Previous Membership option', async () => {
		await Performer_registerpage.performerAboutToPagePreviousMembership();
	});
	await test.step('Enter Performer DOB', async () => {
		await Performer_registerpage.performerSelectDobCalenderDropdown();
	});

	await test.step('Select Performer Publish Age Checkbox', async () => {
		await Performer_registerpage.performerAboutToPageSelectPublishAgeCheckbox();
	});

	await test.step('Select Performer Playing Age', async () => {
		await Performer_registerpage.performerAboutToPageSelectPlayingAge();
	});

	await test.step('Select Performer Select Gender', async () => {
		await Performer_registerpage.performerAboutToPageSelectGender();
	});
	await test.step('Select Public Profile Radio Button', async () => {
		await Performer_registerpage.performerAboutToPageSelectDisplayedPublicProfile();
	});
	await test.step('Select About Page continue Button', async () => {
		await Performer_registerpage.performerAboutToPageContinueButtonClick();
	});
	await test.step('Validate Performer Review page text', async () => {
		await Performer_registerpage.validatePerformerReviewpageText();
	});

	await test.step('Validate Review page Recommendation data text', async () => {
		await Performer_registerpage.validatePerformerReviewPageAddRecommedationLabelText();
	});
	await test.step('Click on Continue Checkout button', async () => {
		await Performer_registerpage.performerContinueCheckoutClick();
	});
	await test.step('Validate Payment Subscription text', async () => {
		await Performer_registerpage.performerValidatePaymentSubscriptionText();
	});
	await test.step('Select Debit and Credit Card option', async () => {
		await Performer_registerpage.performerselectcreditcardBtnClick();
	});
	await test.step('Validate Payment Invoice Text', async () => {
		await Performer_registerpage.performerValidatePaymentInvoiceText('£172.50', 'year');
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

test('Validate Back Button in Eligibility section from Performers', async ({page, loginpage, performerpage, joinpage, Performer_registerpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});
	await test.step('Click on Join Now button in Home Page', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});
	await test.step('Click on Findmore button', async () => {
		await performerpage.performerFindmoreButtonClick();
	});
	await test.step('Click on Join Button', async () => {
		await performerpage.joinnowButtonClick();
	});
	await test.step('Validate Welcome Text Header ', async () => {
		await performerpage.validatePerformerWelcomeText();
	});
	await test.step('Validate Experience Text Header', async () => {
		await performerpage.validatePerformerExperienceText();
	});
	await test.step('Validate Training Text Header', async () => {
		await performerpage.validatePerformerTrainingText();
	});
	await test.step('Validate Recommendation Text Header', async () => {
		await performerpage.validatePerformerRecommendationText();
	});
	await test.step('Enter First Name of Performer', async () => {
		await performerpage.enterPerformerFirstname();
	});
	await test.step('Enter SirName of Performer', async () => {
		await performerpage.enterPerformerSurname();
	});
	await test.step('Click On Avaiable button to check name', async () => {
		await performerpage.checknameavailabilityBtnClick();
	});

	await test.step('Enter Email address of Performer', async () => {
		await performerpage.enterPerformerEmail();
	});
	await test.step('Select Term checkbox', async () => {
		await performerpage.selectPerformerTermCheckbox();
	});
	await test.step('Click on Eligibility button', async () => {
		await performerpage.performerContinueEligibilityClick();
	});
	await test.step('Validate Performer Eligibility text', async () => {
		await performerpage.validatePerformerEligibilityText();
	});

	await test.step('Click on Performer Experience Radio Button', async () => {
		await performerpage.selectPerformerExperienceCriteriaOption();
	});

	await test.step('Click on Continue Eligibility Button', async () => {
		await performerpage.performerContinueEligibilityBtn2Click();
	});

	await test.step('Click on Back Button', async () => {
		await Performer_registerpage.performerBackBtnInEligibility();
	});

	await test.step('Radio button option is avaiable hence Back button is working', async () => {
		await performerpage.validatePerformerExperienceCriteriaOption();
	});
});

test('Perform Back button on About to page using Experience Option', async ({page, loginpage, performerpage, joinpage, Performer_registerpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});
	await test.step('Click on Join Now button in Home Page', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});
	await test.step('Click on Findmore button', async () => {
		await performerpage.performerFindmoreButtonClick();
	});
	await test.step('Click on Join Button', async () => {
		await performerpage.joinnowButtonClick();
	});
	await test.step('Validate Welcome Text Header ', async () => {
		await performerpage.validatePerformerWelcomeText();
	});
	await test.step('Validate Experience Text Header', async () => {
		await performerpage.validatePerformerExperienceText();
	});
	await test.step('Validate Training Text Header', async () => {
		await performerpage.validatePerformerTrainingText();
	});
	await test.step('Validate Recommendation Text Header', async () => {
		await performerpage.validatePerformerRecommendationText();
	});
	await test.step('Enter First Name of Performer', async () => {
		await performerpage.enterPerformerFirstname();
	});
	await test.step('Enter SirName of Performer', async () => {
		await performerpage.enterPerformerSurname();
	});
	await test.step('Click On Avaiable button to check name', async () => {
		await performerpage.checknameavailabilityBtnClick();
	});

	await test.step('Enter Email address of Performer', async () => {
		await performerpage.enterPerformerEmail();
	});
	await test.step('Select Term checkbox', async () => {
		await performerpage.selectPerformerTermCheckbox();
	});
	await test.step('Click on Eligibility button', async () => {
		await performerpage.performerContinueEligibilityClick();
	});
	await test.step('Validate Performer Eligibility text', async () => {
		await performerpage.validatePerformerEligibilityText();
	});

	await test.step('Click on Performer Experience Radio Button', async () => {
		await performerpage.selectPerformerExperienceCriteriaOption();
	});
	await test.step('Click on Continue Eligibility Button', async () => {
		await performerpage.performerContinueEligibilityBtn2Click();
	});

	await test.step('Click on Add credits button and enter all required details', async () => {
		await Performer_registerpage.performerAddCreditSection();
	});
	await test.step('Validate Get credit header title', async () => {
		await Performer_registerpage.validateGetAndCompareText(Performer_registerpage.performerGetCreditHeaderText, userdata.Performer_Credit_Header_Text);
	});

	await test.step('Click on Continue About to You button', async () => {
		await Performer_registerpage.performerContinueAboutToYouBtnClick();
	});

	await test.step('Validate About You Page Text', async () => {
		await Performer_registerpage.validatePerformerAboutToYoupageText();
	});
	await test.step('Click on Back Button in About You Page', async () => {
		await Performer_registerpage.performerBackBtnInAboutPage();
	});
	await test.step('Validate Get credit header title', async () => {
		await Performer_registerpage.validateGetAndCompareText(Performer_registerpage.performerGetCreditHeaderText, userdata.Performer_Credit_Header_Text);
	});
});

test('Validate Back Button on Review page Training Option', async ({page, loginpage, performerpage, joinpage, Performer_registerpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});
	await test.step('Click on Join Now button in Home Page', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});
	await test.step('Click on Findmore button', async () => {
		await performerpage.performerFindmoreButtonClick();
	});
	await test.step('Click on Join Button', async () => {
		await performerpage.joinnowButtonClick();
	});
	await test.step('Validate Welcome Text Header ', async () => {
		await performerpage.validatePerformerWelcomeText();
	});
	await test.step('Validate Experience Text Header', async () => {
		await performerpage.validatePerformerExperienceText();
	});
	await test.step('Validate Training Text Header', async () => {
		await performerpage.validatePerformerTrainingText();
	});
	await test.step('Validate Recommendation Text Header', async () => {
		await performerpage.validatePerformerRecommendationText();
	});
	await test.step('Enter First Name of Performer', async () => {
		await performerpage.enterPerformerFirstname();
	});
	await test.step('Enter SirName of Performer', async () => {
		await performerpage.enterPerformerSurname();
	});
	await test.step('Click On Avaiable button to check name', async () => {
		await performerpage.checknameavailabilityBtnClick();
	});

	await test.step('Enter Email address of Performer', async () => {
		await performerpage.enterPerformerEmail();
	});
	await test.step('Select Term checkbox', async () => {
		await performerpage.selectPerformerTermCheckbox();
	});
	await test.step('Click on Eligibility button', async () => {
		await performerpage.performerContinueEligibilityClick();
	});
	await test.step('Validate Performer Eligibility text', async () => {
		await performerpage.validatePerformerEligibilityText();
	});

	await test.step('Click on Training Radio Button', async () => {
		await performerpage.performerTrainingOptionClick();
	});

	await test.step('Click on Continue Eligibility Button', async () => {
		await performerpage.performerContinueEligibilityBtn2Click();
	});

	await test.step('Click on Add course button and fill all the details', async () => {
		await Performer_registerpage.performerAddCourseSection();
	});

	await test.step('Validate Add course Header', async () => {
		await Performer_registerpage.validateGetAndCompareText(Performer_registerpage.performerGetCreditHeaderText, userdata.Performer_Add_Course_Title);	
	});

	await test.step('Click on Continue About to You Button', async () => {
		await Performer_registerpage.webapplicationEventClick(Performer_registerpage.performerContinueAboutToYouBtn);
	});

	await test.step('Validate About Page text', async () => {
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
	await test.step('Enter Phone Number', async () => {
		await Performer_registerpage.performerAboutToPageEnterPhoneNumber();
	});
	await test.step('Enter Landline Number', async () => {
		await Performer_registerpage.performerAboutToPageEnterLandlinenumber();
	});
	await test.step('Select Previous Membership option', async () => {
		await Performer_registerpage.performerAboutToPagePreviousMembership();
	});
	await test.step('Enter Performer DOB', async () => {
		await Performer_registerpage.performerSelectDobCalenderDropdown();
	});

	await test.step('Select Performer Publish Age Checkbox', async () => {
		await Performer_registerpage.performerAboutToPageSelectPublishAgeCheckbox();
	});

	await test.step('Select Performer Playing Age', async () => {
		await Performer_registerpage.performerAboutToPageSelectPlayingAge();
	});
	await test.step('Select Performer Select Gender', async () => {
		await Performer_registerpage.performerAboutToPageSelectGender();
	});
	await test.step('Select Public Profile Radio Button', async () => {
		await Performer_registerpage.performerAboutToPageSelectDisplayedPublicProfile();
	});
	await test.step('Click on About Page continue Button', async () => {
		await Performer_registerpage.performerAboutToPageContinueButtonClick();
	});
	await test.step('Click on Back Button', async () => {
		await Performer_registerpage.performerBackBtnInReviewPage();
	});
	await test.step('Validate About Page text', async () => {
		await Performer_registerpage.validatePerformerAboutToYoupageText();
	});
});

test('Validate Back Button on Payment Page', async ({page, loginpage, performerpage, joinpage, Performer_registerpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});
	await test.step('Click on Join Now button in Home Page', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});
	await test.step('Click on Findmore button', async () => {
		await performerpage.performerFindmoreButtonClick();
	});
	await test.step('Click on Join Button', async () => {
		await performerpage.joinnowButtonClick();
	});
	await test.step('Validate Welcome Text Header ', async () => {
		await performerpage.validatePerformerWelcomeText();
	});
	await test.step('Validate Experience Text Header', async () => {
		await performerpage.validatePerformerExperienceText();
	});
	await test.step('Validate Training Text Header', async () => {
		await performerpage.validatePerformerTrainingText();
	});
	await test.step('Validate Recommendation Text Header', async () => {
		await performerpage.validatePerformerRecommendationText();
	});
	await test.step('Enter First Name of Performer', async () => {
		await performerpage.enterPerformerFirstname();
	});
	await test.step('Enter SirName of Performer', async () => {
		await performerpage.enterPerformerSurname();
	});
	await test.step('Click On Avaiable button to check name', async () => {
		await performerpage.checknameavailabilityBtnClick();
	});

	await test.step('Enter Email address of Performer', async () => {
		await performerpage.enterPerformerEmail();
	});
	await test.step('Select Term checkbox', async () => {
		await performerpage.selectPerformerTermCheckbox();
	});
	await test.step('Click on Eligibility button', async () => {
		await performerpage.performerContinueEligibilityClick();
	});
	await test.step('Validate Performer Eligibility text', async () => {
		await performerpage.validatePerformerEligibilityText();
	});

	await test.step('Click on Performer Experience Radio Button', async () => {
		await performerpage.selectPerformerExperienceCriteriaOption();
	});
	await test.step('Click on Continue Eligibility Button', async () => {
		await performerpage.performerContinueEligibilityBtn2Click();
	});

	await test.step('Click on Add credits button and enter all required details', async () => {
		await Performer_registerpage.performerAddCreditSection();
	});
	await test.step('Validate Get credit header title', async () => {
		await Performer_registerpage.validateGetAndCompareText(Performer_registerpage.performerGetCreditHeaderText, userdata.Performer_Credit_Header_Text);
	});

	await test.step('Click on Continue About to You button', async () => {
		await Performer_registerpage.performerContinueAboutToYouBtnClick();
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
	await test.step('Enter Phone Number', async () => {
		await Performer_registerpage.performerAboutToPageEnterPhoneNumber();
	});
	await test.step('Enter Landline Number', async () => {
		await Performer_registerpage.performerAboutToPageEnterLandlinenumber();
	});
	await test.step('Select Previous Membership option', async () => {
		await Performer_registerpage.performerAboutToPagePreviousMembership();
	});
	await test.step('Enter Performer DOB', async () => {
		await Performer_registerpage.performerSelectDobCalenderDropdown();
	});

	await test.step('Select Performer Publish Age Checkbox', async () => {
		await Performer_registerpage.performerAboutToPageSelectPublishAgeCheckbox();
	});
	
	await test.step('Select Performer Playing Age', async () => {
		await Performer_registerpage.performerAboutToPageSelectPlayingAge();
	});
	await test.step('Select Performer Select Gender', async () => {
		await Performer_registerpage.performerAboutToPageSelectGender();
	});
	await test.step('Select Public Profile Radio Button', async () => {
		await Performer_registerpage.performerAboutToPageSelectDisplayedPublicProfile();
	});
	await test.step('Select About Page continue Button', async () => {
		await Performer_registerpage.performerAboutToPageContinueButtonClick();
	});
	
	await test.step('Validate Performer Review page Credit label text', async () => {
		await Performer_registerpage.validatePerformerReviewPageEligibilityCreditsLabelText();
	});
	await test.step('Click on Continue Checkout button', async () => {
		await Performer_registerpage.performerContinueCheckoutClick();
	});
		
	await test.step('Click on Return to checkout application button', async () => {
		await Performer_registerpage.performerBackBtnInCheckoutPage();
	});
	await test.step('Validate Performer Review page text', async () => {
		await Performer_registerpage.validatePerformerReviewpageText();
	});
});

test('Validate Cancel button on Review page', async ({page, loginpage, performerpage, joinpage, Performer_registerpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});
	await test.step('Click on Join Now button in Home Page', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});
	await test.step('Click on Findmore button', async () => {
		await performerpage.performerFindmoreButtonClick();
	});
	await test.step('Click on Join Button', async () => {
		await performerpage.joinnowButtonClick();
	});
	await test.step('Validate Welcome Text Header ', async () => {
		await performerpage.validatePerformerWelcomeText();
	});
	await test.step('Validate Experience Text Header', async () => {
		await performerpage.validatePerformerExperienceText();
	});
	await test.step('Validate Training Text Header', async () => {
		await performerpage.validatePerformerTrainingText();
	});
	await test.step('Validate Recommendation Text Header', async () => {
		await performerpage.validatePerformerRecommendationText();
	});
	await test.step('Enter First Name of Performer', async () => {
		await performerpage.enterPerformerFirstname();
	});
	await test.step('Enter SirName of Performer', async () => {
		await performerpage.enterPerformerSurname();
	});
	await test.step('Click On Avaiable button to check name', async () => {
		await performerpage.checknameavailabilityBtnClick();
	});

	await test.step('Enter Email address of Performer', async () => {
		await performerpage.enterPerformerEmail();
	});
	await test.step('Select Term checkbox', async () => {
		await performerpage.selectPerformerTermCheckbox();
	});
	await test.step('Click on Eligibility button', async () => {
		await performerpage.performerContinueEligibilityClick();
	});
	await test.step('Validate Performer Eligibility text', async () => {
		await performerpage.validatePerformerEligibilityText();
	});

	await test.step('Click on Performer Experience Radio Button', async () => {
		await performerpage.selectPerformerExperienceCriteriaOption();
	});
	await test.step('Click on Continue Eligibility Button', async () => {
		await performerpage.performerContinueEligibilityBtn2Click();
	});

	await test.step('Click on Add credits button and enter all required details', async () => {
		await Performer_registerpage.performerAddCreditSection();
	});
	await test.step('Validate Get credit header title', async () => {
		await Performer_registerpage.validateGetAndCompareText(Performer_registerpage.performerGetCreditHeaderText, userdata.Performer_Credit_Header_Text);
	});

	await test.step('Click on Continue About to You button', async () => {
		await Performer_registerpage.performerContinueAboutToYouBtnClick();
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
	await test.step('Enter Phone Number', async () => {
		await Performer_registerpage.performerAboutToPageEnterPhoneNumber();
	});
	await test.step('Enter Landline Number', async () => {
		await Performer_registerpage.performerAboutToPageEnterLandlinenumber();
	});
	await test.step('Select Previous Membership option', async () => {
		await Performer_registerpage.performerAboutToPagePreviousMembership();
	});
	await test.step('Enter Performer DOB', async () => {
		await Performer_registerpage.performerSelectDobCalenderDropdown();
	});

	await test.step('Select Performer Publish Age Checkbox', async () => {
		await Performer_registerpage.performerAboutToPageSelectPublishAgeCheckbox();
	});
	
	await test.step('Select Performer Playing Age', async () => {
		await Performer_registerpage.performerAboutToPageSelectPlayingAge();
	});
	await test.step('Select Performer Select Gender', async () => {
		await Performer_registerpage.performerAboutToPageSelectGender();
	});
	await test.step('Select Public Profile Radio Button', async () => {
		await Performer_registerpage.performerAboutToPageSelectDisplayedPublicProfile();
	});
	await test.step('Select About Page continue Button', async () => {
		await Performer_registerpage.performerAboutToPageContinueButtonClick();
	});
	
	await test.step('Validate Performer Review page Credit label text', async () => {
		await Performer_registerpage.validatePerformerReviewPageEligibilityCreditsLabelText();
	});
	await test.step('Click on Cancel button', async () => {
		await Performer_registerpage.doperformerReviewCancelBtn();
	});
	await test.step('Click on Leave Application button', async () => {
		await Performer_registerpage.doperformerLeaveApplicationBtn();
	});
	await test.step('Validate Welcome Text Header ', async () => {
		await performerpage.validatePerformerWelcomeText();
	});
});

test('Validate Cancel button on About page', async ({page, loginpage, performerpage, joinpage, Performer_registerpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});
	await test.step('Click on Join Now button in Home Page', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});
	await test.step('Click on Findmore button', async () => {
		await performerpage.performerFindmoreButtonClick();
	});
	await test.step('Click on Join Button', async () => {
		await performerpage.joinnowButtonClick();
	});
	await test.step('Validate Welcome Text Header ', async () => {
		await performerpage.validatePerformerWelcomeText();
	});
	await test.step('Validate Experience Text Header', async () => {
		await performerpage.validatePerformerExperienceText();
	});
	await test.step('Validate Training Text Header', async () => {
		await performerpage.validatePerformerTrainingText();
	});
	await test.step('Validate Recommendation Text Header', async () => {
		await performerpage.validatePerformerRecommendationText();
	});
	await test.step('Enter First Name of Performer', async () => {
		await performerpage.enterPerformerFirstname();
	});
	await test.step('Enter SirName of Performer', async () => {
		await performerpage.enterPerformerSurname();
	});
	await test.step('Click On Avaiable button to check name', async () => {
		await performerpage.checknameavailabilityBtnClick();
	});

	await test.step('Enter Email address of Performer', async () => {
		await performerpage.enterPerformerEmail();
	});
	await test.step('Select Term checkbox', async () => {
		await performerpage.selectPerformerTermCheckbox();
	});
	await test.step('Click on Eligibility button', async () => {
		await performerpage.performerContinueEligibilityClick();
	});
	await test.step('Validate Performer Eligibility text', async () => {
		await performerpage.validatePerformerEligibilityText();
	});

	await test.step('Click on Performer Experience Radio Button', async () => {
		await performerpage.selectPerformerExperienceCriteriaOption();
	});
	await test.step('Click on Continue Eligibility Button', async () => {
		await performerpage.performerContinueEligibilityBtn2Click();
	});

	await test.step('Click on Add credits button and enter all required details', async () => {
		await Performer_registerpage.performerAddCreditSection();
	});
	await test.step('Validate Get credit header title', async () => {
		await Performer_registerpage.validateGetAndCompareText(Performer_registerpage.performerGetCreditHeaderText, userdata.Performer_Credit_Header_Text);
	});

	await test.step('Click on Continue About to You button', async () => {
		await Performer_registerpage.performerContinueAboutToYouBtnClick();
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
	await test.step('Enter Phone Number', async () => {
		await Performer_registerpage.performerAboutToPageEnterPhoneNumber();
	});
	await test.step('Enter Landline Number', async () => {
		await Performer_registerpage.performerAboutToPageEnterLandlinenumber();
	});
	await test.step('Select Previous Membership option', async () => {
		await Performer_registerpage.performerAboutToPagePreviousMembership();
	});
	await test.step('Enter Performer DOB', async () => {
		await Performer_registerpage.performerSelectDobCalenderDropdown();
	});

	await test.step('Select Performer Publish Age Checkbox', async () => {
		await Performer_registerpage.performerAboutToPageSelectPublishAgeCheckbox();
	});
	
	await test.step('Select Performer Playing Age', async () => {
		await Performer_registerpage.performerAboutToPageSelectPlayingAge();
	});
	await test.step('Select Performer Select Gender', async () => {
		await Performer_registerpage.performerAboutToPageSelectGender();
	});
	await test.step('Select Public Profile Radio Button', async () => {
		await Performer_registerpage.performerAboutToPageSelectDisplayedPublicProfile();
	});
	
	await test.step('Click on Cancel button', async () => {
		await Performer_registerpage.doperformerReviewCancelBtn();
	});
	await test.step('Click on Leave Application button', async () => {
		await Performer_registerpage.doperformerLeaveApplicationBtn();
	});
	await test.step('Validate Welcome Text Header ', async () => {
		await performerpage.validatePerformerWelcomeText();
	});
});

test('Validate Cancel button on Eligibility page', async ({page, loginpage, performerpage, joinpage, Performer_registerpage}) => {
	await test.step('Navigate to Webapplication URL', async () => {
		await loginpage.navigateToUrl(ENV.baseUrl);
	});
	await test.step('Click on Join Now button in Home Page', async () => {
		await joinpage.joinnowbtnOnMainPage();
	});
	await test.step('Click on Findmore button', async () => {
		await performerpage.performerFindmoreButtonClick();
	});
	await test.step('Click on Join Button', async () => {
		await performerpage.joinnowButtonClick();
	});
	await test.step('Validate Welcome Text Header ', async () => {
		await performerpage.validatePerformerWelcomeText();
	});
	await test.step('Validate Experience Text Header', async () => {
		await performerpage.validatePerformerExperienceText();
	});
	await test.step('Validate Training Text Header', async () => {
		await performerpage.validatePerformerTrainingText();
	});
	await test.step('Validate Recommendation Text Header', async () => {
		await performerpage.validatePerformerRecommendationText();
	});
	await test.step('Enter First Name of Performer', async () => {
		await performerpage.enterPerformerFirstname();
	});
	await test.step('Enter SirName of Performer', async () => {
		await performerpage.enterPerformerSurname();
	});
	await test.step('Click On Avaiable button to check name', async () => {
		await performerpage.checknameavailabilityBtnClick();
	});

	await test.step('Enter Email address of Performer', async () => {
		await performerpage.enterPerformerEmail();
	});
	await test.step('Select Term checkbox', async () => {
		await performerpage.selectPerformerTermCheckbox();
	});
	await test.step('Click on Eligibility button', async () => {
		await performerpage.performerContinueEligibilityClick();
	});
	await test.step('Validate Performer Eligibility text', async () => {
		await performerpage.validatePerformerEligibilityText();
	});

	await test.step('Click on Performer Experience Radio Button', async () => {
		await performerpage.selectPerformerExperienceCriteriaOption();
	});
	await test.step('Click on Continue Eligibility Button', async () => {
		await performerpage.performerContinueEligibilityBtn2Click();
	});

	await test.step('Click on Add credits button and enter all required details', async () => {
		await Performer_registerpage.performerAddCreditSection();
	});
	await test.step('Validate Get credit header title', async () => {
		await Performer_registerpage.validateGetAndCompareText(Performer_registerpage.performerGetCreditHeaderText, userdata.Performer_Credit_Header_Text);
	});
	
	await test.step('Click on Cancel button', async () => {
		await Performer_registerpage.doperformerReviewCancelBtn();
	});
	await test.step('Click on Leave Application button', async () => {
		await Performer_registerpage.doperformerLeaveApplicationBtn();
	});
	await test.step('Validate Welcome Text Header ', async () => {
		await performerpage.validatePerformerWelcomeText();
	});
});
