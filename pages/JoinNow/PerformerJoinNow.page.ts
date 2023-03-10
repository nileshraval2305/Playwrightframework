
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import type {Page, Locator} from '@playwright/test';
import {FrameLocator} from '@playwright/test';
import {expect} from '@playwright/test';
import * as testdata from '../../test-Data/Spotlight-testdata.json';

export default class PerformerJoinNow {
	readonly performerAddcreditBtn: Locator;

	readonly performerProductNameTextbox: Locator;
	readonly performerSelectTypeDropdown: Locator;
	readonly performerSelectTypeDropdownValue: Locator;
	readonly performerEnterSearchDropdownValue: Locator;
	readonly performerRoleNameTextbox: Locator;
	readonly performerProductionCompanyTextbox: Locator;
	readonly performerSaveCreditBtn: Locator;
	readonly performerDirectorNameTextbox: Locator;
	readonly performerCreditLinkTextbox: Locator;
	readonly performerDateFromDatepicker: Locator;
	readonly performerDateFromValueDatepicker: Locator;
	readonly performerDateToDatepicker: Locator;
	readonly performerDateToValueDatepicker: Locator;
	readonly performerUploadFile: Locator;
	readonly performerUnionContract: Locator;
	readonly performerGetCreditHeaderText: Locator;
	readonly performerContinueAboutToYouBtn: Locator;
	readonly performerAboutToYoupage: Locator;
	readonly performerAboutToPagePhoneNumber: Locator;
	readonly performerAboutToPageLandlinenumber: Locator;
	readonly performerSpotlightMemberOption: Locator;
	readonly performerSpotlightDobClickDropdown: Locator;
	readonly performerSelectDropdownDobMonth: Locator;
	readonly performerSelectDropdownDobMonVal: Locator;
	readonly performerSelectDropdownDobYear: Locator;
	readonly performerSelectDropdownDobDate: Locator;
	readonly performerPhotographerName: Locator;
	readonly performerPhotographerNameVal: Locator;
	readonly performerChoosePoto: Locator;
	readonly performerPreviousName: Locator;
	readonly performerType: Locator;
	readonly performerTypeValue: Locator;
	readonly performerPreviousEmail: Locator;
	readonly performerPublishAge: Locator;
	readonly performerPlayingAgeFrom: Locator;
	readonly performerPlayingAgeTo: Locator;
	readonly performerPlayingAgeFromValue: Locator;
	readonly performerPlayingAgeToValue: Locator;
	readonly performerSelectGenderDropdown: Locator;
	readonly performerSelectGenderDropdownVal: Locator;
	readonly performerDisplayedPubllicProfile: Locator;
	readonly performerAboutContinueBtn: Locator;
	readonly performerReviewPageText: Locator;
	readonly performerEligibilityCreditsText: Locator;
	readonly performerPictureTypeText: Locator;
	readonly performerRoleText: Locator;
	readonly performerProductionCompnayText: Locator;
	readonly performerDirectorNameText: Locator;
	readonly performerPhoneNumberText: Locator;
	readonly performerDobText: Locator;
	readonly performerGenderText: Locator;
	readonly performerContinueCheckout: Locator;
	readonly validatePaymentSubscriptionText: Locator;
	readonly validatePerformerAnnualDirectDebitText: Locator;
	readonly validatePerformerAnnualCreditDebitCardText: Locator;
	readonly validatePerformerMonthlyInstalmentDirectDebitText: Locator;
	readonly performerSelectCreditcardOption: Locator;
	readonly performerGetMembershipFeeText: Locator;
	readonly performerTotalPayText: Locator;
	readonly performerGetFrequencyText: Locator;
	readonly performerGetTotalInstallmentText: Locator;
	readonly performerConfirmPayButton: Locator;
	readonly performerBillingFirstName: Locator;
	readonly performerBillingLastName: Locator;
	readonly performerBillingAddress: Locator;
	readonly performerBillingCity: Locator;
	readonly performerBillingCountry: Locator;
	readonly performerBillingPostcode: Locator;
	readonly performerGetBillingDetailsHeaderText: Locator;
	readonly performerBillingConfirmPay: Locator;
	readonly performerBillingCountryValue: Locator;
	readonly performerPaymentByVisaCard: Locator;
	readonly performerPaymentByVisaCardNumber: Locator;
	readonly performerPaymentByCardValidMonth: Locator;
	readonly performerPaymentByCardValidYear: Locator;
	readonly performerPaymentByCardExpiryMonth: Locator;
	readonly performerPaymentByCardExpiryYear: Locator;
	readonly performerPaymentByCardSecurityCode: Locator;
	readonly performerPaymentByCardProcessedBtn: Locator;
	readonly performerPaymentByCardFirstName: Locator;
	readonly performerPaymentByCardLastName: Locator;
	readonly performerPaymentByCardOtp: string;
	readonly performerPaymentByCardNextBtn: Locator;
	readonly performerRegistrationCompleteGetText: Locator;

	readonly performerAddCourseBtn: Locator;
	readonly performerSchoolname: Locator;
	readonly performerCoursename: Locator;
	readonly performerSelectQualificationLevelDropdown: Locator;
	readonly performerCourseUrl: Locator;
	readonly performerSelectQualificationLevelDropdownValue: Locator;
	readonly performerSelectCourseFulltimeOption: Locator;
	readonly performerSaveCourseBtn: Locator;
	readonly performerUploadFileDeleteIcon: Locator;
	readonly performerUploadFileTitle: Locator;
	readonly performerGetHeaderText: Locator;
	readonly performerEligibilityTrainingText: Locator;
	readonly performerCourseNameText: Locator;
	readonly performerQualificationLevelText: Locator;
	readonly performerFullnameOfReferee: Locator;
	readonly performerGetRecommendedHeader: Locator;
	readonly performerRefereeMembershipDropdown: Locator;
	readonly performerRefereeMembershipDropdownValue: Locator;
	readonly validateFileIsLoaded: Locator;
	readonly validateEligibilityRecommendation: Locator;
	readonly validateRefereeMembership: Locator;
	readonly performerPaymentPayNowBtn: Locator;
	readonly validateBackBtnInEligibility: Locator;
	readonly backBtnAboutToPage: Locator;
	readonly backBtnReviewPage: Locator;
	readonly backBtnCheckoutPage: Locator;
	readonly performerCancelBtn: Locator;
	readonly performerLeaveApplicationBtn: Locator;
	readonly performerSpotlightMemberOptionAsNo: Locator;
	readonly performerselectmembershipdropdown: Locator;
	readonly performerselectmembershipdropdownoption: Locator;
	readonly performerselectagencydropdown: Locator;
	readonly performerselectagencydropdownoption: Locator;

	constructor(public page: Page) {
		this.performerAddcreditBtn = page.locator('#btn-add-credit span.c-button__text');
		this.performerProductNameTextbox = page.locator('#productionName');
		this.performerSelectTypeDropdown = page.locator('text=Please select');
		this.performerSelectTypeDropdownValue = page.locator('text=Choreography');
		this.performerRoleNameTextbox = page.locator('#roleName');
		this.performerProductionCompanyTextbox = page.locator('#company');
		this.performerSaveCreditBtn = page.locator('#btn-save-credit');
		this.performerDirectorNameTextbox = page.locator('#director');
		this.performerCreditLinkTextbox = page.locator('#creditLink');
		this.performerDateFromDatepicker = page.locator('input[name=\'dateFrom\']');
		this.performerDateFromValueDatepicker = page.locator('text=2018');
		this.performerDateToDatepicker = page.locator('input[name=\'dateTo\']');
		this.performerDateToValueDatepicker = page.locator('text=2019');
		this.performerUploadFile = page.locator('input[aria-label=\'Click to select file or drag here\']');
		this.performerUnionContract = page.locator('//span[contains(text(),\'Yes\')]');
		this.performerGetCreditHeaderText = page.locator('.c-expandable-row__header-content');
		this.performerContinueAboutToYouBtn = page.locator('text=Continue to About you');
		this.performerAboutToYoupage = page.locator('.py-4.text-2xl');
		this.performerAboutToPagePhoneNumber = page.locator('input[name=\'mobileNumber\']');
		this.performerAboutToPageLandlinenumber = page.locator('input[name=\'landlineNumber\']');
		this.performerSpotlightMemberOption = page.locator('//section[@class=\'flex flex-col pb-4 space-y-4 border-b border-grey-light\']//span[@class=\'c-radio-formik__text\'][normalize-space()=\'Yes\']');
		this.performerSpotlightMemberOptionAsNo = page.locator('//section[@class=\'flex flex-col pb-4 space-y-4 border-b border-grey-light\']//span[@class=\'c-radio-formik__text\'][normalize-space()=\'No\']');
		this.performerSelectDropdownDobDate = page.locator('.react-datepicker__day.react-datepicker__day--006');
		this.performerSelectDropdownDobMonth = page.locator('.react-datepicker__month-select');
		this.performerSelectDropdownDobMonVal = page.locator('.react-datepicker__month-select');
		this.performerSelectDropdownDobYear = page.locator('.react-datepicker__year-select');
		this.performerSpotlightDobClickDropdown = page.locator('input[name=\'dateOfBirth\']');
		this.performerPhotographerName = page.locator('//input[@autocapitalize=\'none\']');
		this.performerChoosePoto = page.locator('#btn-headshot-choose-photo');
		this.performerPhotographerNameVal = page.locator('.SelectFormik__option.css-ff68kf-option');
		this.performerPreviousName = page.locator('#currentName');
		this.performerType = page.locator('.css-n1zvgg-control');
		this.performerTypeValue = page.locator('.SelectFormik__option.css-ff68kf-option');
		this.performerPreviousEmail = page.locator('#currentEmail');
		this.performerPublishAge = page.locator('input[name=\'publishAge\']');
		this.performerPlayingAgeFrom = page.locator('//label[normalize-space()=\'Playing age from\']//following::div[3]');
		this.performerPlayingAgeFromValue = page.locator('//div[normalize-space()=\'20 years\']');
		this.performerPlayingAgeTo = page.locator('//label[normalize-space()=\'Playing age to\']//following::div[3]');

		this.performerPlayingAgeToValue = page.locator('//div[normalize-space()=\'22 years\']');
		this.performerSelectGenderDropdown = page.locator('section[class=\'flex flex-col pt-2 border-b border-grey-light\'] div div[class=\' css-1bnsk3c-placeholder\']');
		this.performerSelectGenderDropdownVal = page.locator('.SelectFormik__option.css-ff68kf-option');
		this.performerDisplayedPubllicProfile = page.locator('(//div[@class=\'radio-group-formik__fields\']/div[1]/label[1]/span[1])[2]');
		this.performerAboutContinueBtn = page.locator('#btn-aboutyou-continue');
		this.performerReviewPageText = page.locator('.py-4.text-2xl');
		this.performerEligibilityCreditsText = page.locator('text=Eligibility - Credits');
		this.performerEligibilityTrainingText = page.locator('text=Eligibility - Training');
		this.performerPictureTypeText = page.locator('text=Choreography');
		this.performerCourseNameText = page.locator('text=Diploma in Acting');
		this.performerRoleText = page.locator('text=Actor');
		this.performerProductionCompnayText = page.locator('text=Fox Studios');
		this.performerQualificationLevelText = page.locator('text=BA (Hons)');
		this.performerDirectorNameText = page.locator('text=Rakesh roshan');
		this.performerPhoneNumberText = page.locator('text=+44 9725288129');
		this.performerDobText = page.locator('text=06.03.1995');
		this.performerGenderText = page.locator('text=Male');
		this.performerContinueCheckout = page.locator('.c-button.c-button__primary.c-button--medium');
		this.validatePaymentSubscriptionText = page.locator('h1:has-text(\'Your Spotlight Subscription\')');
		this.validatePerformerAnnualDirectDebitText = page.locator('h3:has-text(\'Performer Annual Direct Debit\')');
		this.validatePerformerAnnualCreditDebitCardText = page.locator('h3:has-text(\'Performer Annual Credit / Debit Card\')');
		this.validatePerformerMonthlyInstalmentDirectDebitText = page.locator('h3:has-text(\'Performer Monthly Instalment Direct Debit\')');
		this.performerSelectCreditcardOption = page.locator('//div[2]/div[3]/a[1]/button[1]');
		this.performerGetBillingDetailsHeaderText = page.locator('div[class=\'billing-form\'] h1');
		this.performerGetMembershipFeeText = page.locator('#net-total');
		this.performerTotalPayText = page.locator('#gross-total');
		this.performerGetFrequencyText = page.locator('#freq');
		this.performerGetTotalInstallmentText = page.locator('#number');
		this.performerConfirmPayButton = page.locator('#confirm-button');
		this.performerBillingFirstName = page.locator('#BillingForenames');
		this.performerBillingLastName = page.locator('#BillingSurname');
		this.performerBillingAddress = page.locator('#AddressLine1');
		this.performerBillingCity = page.locator('#City');
		this.performerBillingCountry = page.locator('#CountryDropDown');
		this.performerBillingPostcode = page.locator('#Postcode');
		this.performerBillingConfirmPay = page.locator('button[id=\'confirm-button\'] span[class=\'ui-button-text\']');
		this.performerBillingCountryValue = page.locator('option[value=\'GB\']');

		this.performerPaymentByVisaCard = page.locator('img[name=\'VISA\']');
		this.performerPaymentByVisaCardNumber = page.locator('input[name=\'cardnumber\']');
		this.performerPaymentByCardValidMonth = page.locator('select[name=\'startmonth\']');
		this.performerPaymentByCardValidYear = page.locator('select[name=\'startyear\']');
		this.performerPaymentByCardExpiryMonth = page.locator('select[name=\'expirymonth\']');
		this.performerPaymentByCardExpiryYear = page.locator('select[name=\'expiryyear\']');
		this.performerPaymentByCardSecurityCode = page.locator('input[name=\'securitycode\']');
		this.performerPaymentByCardProcessedBtn = page.locator('img[name=\'proceed\']');
		this.performerPaymentByCardFirstName = page.locator('input[name=\'cardfirstnames\']');
		this.performerPaymentByCardLastName = page.locator('input[name=\'cardsurname\']');
		this.performerPaymentPayNowBtn = page.locator('img[alt=\'Pay Now\']');

		this.performerPaymentByCardNextBtn = page.locator('input[value=\'Next\']');
		this.performerRegistrationCompleteGetText = page.locator('.py-4.text-2xl');

		this.performerAddCourseBtn = page.locator('#btn-add-course');
		this.performerSchoolname = page.locator('#schoolName');
		this.performerCoursename = page.locator('#courseName');
		this.performerSelectQualificationLevelDropdown = page.locator('//input[@inputmode=\'none\']//parent::div');
		this.performerSelectQualificationLevelDropdownValue = page.locator('//div[text()=\'BA (Hons)\']');
		this.performerCourseUrl = page.locator('#courseUrl');
		this.performerSelectCourseFulltimeOption = page.locator('//span[contains(text(),\'Full-time\')]');
		this.performerSaveCourseBtn = page.locator('a[id=\'btn-save-course\'] span[class=\'c-button__text\']');
		this.performerUploadFileDeleteIcon = page.locator('div[class=\'icon-delete\']');
		this.performerUploadFileTitle = page.locator('.c-record-with-action-controls__title');
		this.performerFullnameOfReferee = page.locator('#refereeName');
		this.performerGetRecommendedHeader = page.locator('text=Please add your recommendation information');
		this.performerRefereeMembershipDropdown = page.locator('text=Please select');
		this.performerRefereeMembershipDropdownValue = page.locator('text=Nederlandse Agenten Associatie');
		this.validateFileIsLoaded = page.locator('.c-record-with-action-controls__title');
		this.validateEligibilityRecommendation = page.locator('text=Eligibility - Recommendation');
		this.validateRefereeMembership = page.locator('//span[contains(text(),\'Nederlandse Agenten Associatie\')]');
		this.validateBackBtnInEligibility = page.locator('#btn-eligibility-back-0');
		this.backBtnAboutToPage = page.locator('#btn-aboutyou-back');
		this.backBtnReviewPage = page.locator('//div[@class=\'flex space-x-2\']//div[1]//a[1]');
		this.backBtnCheckoutPage = page.locator('#cancel-button');
		this.performerCancelBtn = page.locator('text=Cancel');
		this.performerLeaveApplicationBtn = page.locator('text=Leave application');
		this.performerselectmembershipdropdown = page.locator('//label[normalize-space()=\'Memberships (optional):\']//following::div[1]');
		this.performerselectmembershipdropdownoption = page.locator('text=Equity');
		this.performerselectagencydropdown = page.locator('//label[normalize-space()=\'Agent (optional):\']//following::div[1]');
		this.performerselectagencydropdownoption = page.locator('text=11:11 ENTERTAINMENT');
	}

	async performerAddCreditBtnClick() {
		await this.performerAddcreditBtn.click();
	}

	async performerProductNameEnterTextbox() {
		await this.performerProductNameTextbox.type(testdata.Performer_Production_name);
	}

	async performerSelectMovieTypeDropdown() {
		await this.performerSelectTypeDropdown.click();
		await this.performerSelectTypeDropdownValue.click();
	}

	async performerRoleNameEnterTextbox() {
		await this.performerRoleNameTextbox.type(testdata.Performer_Role_Name);
	}

	async performerProductionCompanyEnterTextbox() {
		await this.performerProductionCompanyTextbox.type(testdata.Performer_Production_Company);
	}

	async performerDirectorNameEnterTextbox() {
		await this.performerDirectorNameTextbox.type(testdata.Performer_Director_Name);
	}

	async performerCreditLinkEnterTextbox() {
		await this.performerCreditLinkTextbox.type(testdata.Performer_Credit_Link_Textbox);
	}

	async performerDateFromSelectDatepicker() {
		await this.performerDateFromDatepicker.click();
		await this.performerDateFromValueDatepicker.click();
	}

	async performerDateToSelectDatepicker() {
		await this.performerDateToDatepicker.click();
		await this.performerDateToValueDatepicker.click();
	}

	async performerUploadFileImages(File_Location: string) {
		// Await this.Performer_Upload_File.setInputFiles("Upload_Doc/actor-agreement.pdf");
		await this.performerUploadFile.setInputFiles(File_Location);
	}

	async performerUnionContractOption() {
		await this.performerUnionContract.click();
	}

	async performerSaveCreditBtnClick() {
		await this.performerSaveCreditBtn.click();
	}

	async validateGetAndCompareText(Expected_Locator: Locator, Expected_Value: string) {
		await expect(Expected_Locator).toHaveText(Expected_Value);
	}

	async webapplicationEventClick(Locator: Locator) {
		await Locator.click();
	}

	async performerContinueAboutToYouBtnClick() {
		await Promise.all([
			this.page.waitForLoadState('domcontentloaded'),
			this.performerContinueAboutToYouBtn.click(),
		]);
	}

	async validatePerformerAboutToYoupageText() {
		await expect(this.performerAboutToYoupage).toHaveText('About you');
	}

	async performerSelectPhotographer() {
		await this.performerPhotographerName.isVisible();
		await this.performerPhotographerName.fill('Alex Norton');
		await this.performerPhotographerNameVal.click();
		// Await this.page.press(".css-ackcql input",'Tab');
	}

	async performerSelectDobCalenderDropdown() {
		await this.performerSpotlightDobClickDropdown.click();

		await this.performerSelectDropdownDobMonth.selectOption('2');

		await this.performerSelectDropdownDobYear.selectOption('1995');
		await this.performerSelectDropdownDobDate.click();
	}

	async performerChoosePotoBtnClick() {
		await this.performerChoosePoto.click();
	}

	async performerAboutToPageEnterPhoneNumber() {
		await this.performerAboutToPagePhoneNumber.type(testdata.Performer_Mobile);
	}

	async performerAboutToPageEnterLandlinenumber() {
		await this.performerAboutToPageLandlinenumber.type(testdata.Performer_Landline);
	}

	async performerAboutToPagePreviousMembership() {
		await this.performerSpotlightMemberOption.click();
		await this.performerPreviousName.type(testdata.Performer_Previous_Name);

		await Promise.all([this.performerType.click(),
			this.performerTypeValue.click()]);

		await this.performerPreviousEmail.type(testdata.Performer_Previous_Register_Email);
	}

	async performerAboutToPagePreviousMembershipSelectasNo() {
		await this.performerSpotlightMemberOptionAsNo.click();
	}

	async performerAboutToPageSelectPublishAgeCheckbox() {
		await this.performerPublishAge.click();
	}

	async performerAboutToPageSelectPlayingAge() {
		await this.performerPlayingAgeFrom.click();
		await this.performerPlayingAgeFromValue.click();
		await this.performerPlayingAgeTo.click();
		await this.performerPlayingAgeToValue.click();
	}

	async performerAboutToPageSelectGender() {
		await this.performerSelectGenderDropdown.click();
		await this.performerSelectGenderDropdownVal.click();
	}

	async performerAboutToPageSelectDisplayedPublicProfile() {
		await this.performerDisplayedPubllicProfile.click();
	}

	async performerAboutToPageselectmemebershipDropdown() {
		await this.performerselectmembershipdropdown.click();
		await this.performerselectmembershipdropdownoption.click();
	}

	async performerAboutToPageselectAgency() {
		await this.performerselectagencydropdown.click();
		await this.performerselectagencydropdownoption.click();
	}

	async performerAboutToPageContinueButtonClick() {
		await this.performerAboutContinueBtn.click();
	}

	async validatePerformerReviewpageText() {
		await Promise.all([this.page.waitForLoadState('domcontentloaded'),
			await expect(this.performerReviewPageText).toHaveText('Review')]);
	}

	async validatePerformerReviewPageEligibilityCreditsLabelText() {
		await this.validateGetAndCompareText(this.performerEligibilityCreditsText, 'Eligibility - Credits');
		await this.validateGetAndCompareText(this.performerPictureTypeText, 'Choreography');
		await this.validateGetAndCompareText(this.performerProductionCompnayText, 'Fox Studios');

		await this.validateGetAndCompareText(this.performerDirectorNameText, 'Rakesh roshan');
		await this.validateGetAndCompareText(this.performerPhoneNumberText, '+44 9725288129');
		await this.validateGetAndCompareText(this.performerDobText, '06.03.1995');
		await this.validateGetAndCompareText(this.performerGenderText, 'Male');
	}

	async validatePerformerReviewPageAddCourseCreditsLabelText() {
		await this.validateGetAndCompareText(this.performerEligibilityTrainingText, 'Eligibility - Training');
		await this.validateGetAndCompareText(this.performerCourseNameText, 'Diploma in Acting');
		await this.validateGetAndCompareText(this.performerQualificationLevelText, 'BA (Hons)');
	}

	async validatePerformerReviewPageAddRecommedationLabelText() {
		await this.validateGetAndCompareText(this.validateEligibilityRecommendation, 'Eligibility - Recommendation');
		await this.validateGetAndCompareText(this.validateRefereeMembership, 'Nederlandse Agenten Associatie');
	}

	async performerContinueCheckoutClick() {
		await this.performerContinueCheckout.click();
	}

	async performerValidatePaymentSubscriptionText() {
		await expect(this.validatePaymentSubscriptionText).toHaveText('Your Spotlight Subscription');
		await expect(this.validatePerformerAnnualDirectDebitText).toHaveText('Performer Annual Direct Debit');
		await expect(this.validatePerformerAnnualCreditDebitCardText).toHaveText('Performer Annual Credit / Debit Card');
		await expect(this.validatePerformerMonthlyInstalmentDirectDebitText).toHaveText('Performer Monthly Instalment Direct Debit');
	}

	async performerselectcreditcardBtnClick() {
		await Promise.all([this.page.waitForNavigation(),
			this.performerSelectCreditcardOption.click()]);
	}

	async performerValidatePaymentInvoiceText(Membershipfee: string, installmentfrequency: string) {
		await this.page.waitForLoadState('domcontentloaded');

		expect(await this.performerGetMembershipFeeText.getAttribute('value')).toContain(Membershipfee);

		expect(await this.performerTotalPayText.getAttribute('value')).toContain(Membershipfee);
		expect(await this.performerGetFrequencyText.getAttribute('value')).toContain(installmentfrequency);
		expect(await this.performerGetTotalInstallmentText.getAttribute('value')).toContain('1');
	}

	async performercreditcardPaymentContinueBtnClick() {
		await this.performerConfirmPayButton.click();
	}

	async performerBillingDetails() {
		await expect(this.performerGetBillingDetailsHeaderText).toHaveText('Your billing details');
		await this.performerBillingFirstName.type(testdata.Performer_First_Name);
		await this.performerBillingLastName.type(testdata.Performer_Last_Name);
		await this.performerBillingAddress.type(testdata.Performer_Address);
		await this.performerBillingCity.type(testdata.Performer_City);
		await this.performerBillingCountry.selectOption('GB');
		// Await this.Performer_Billing_Country_Value.click();
		await this.performerBillingPostcode.type(testdata.Performer_Postcode);
	}

	async performerBillingConfirmPayBtnClick() {
		await this.performerBillingConfirmPay.click();
	}

	async performerPaymentUsingVisaCard() {
		await this.performerPaymentByVisaCard.click();
		await this.performerPaymentByCardFirstName.type('');
		await this.performerPaymentByCardFirstName.type(testdata.Performer_First_Name);
		await this.performerPaymentByCardLastName.type('');
		await this.performerPaymentByCardLastName.type(testdata.Performer_Last_Name);
		await this.performerPaymentByVisaCardNumber.type(testdata.Visa_Card);
		await this.performerPaymentByCardValidMonth.selectOption('02');
		await this.performerPaymentByCardValidYear.selectOption('04');
		await this.performerPaymentByCardExpiryMonth.selectOption('04');
		await this.performerPaymentByCardExpiryYear.selectOption('32');
		await this.performerPaymentByCardExpiryYear.selectOption('32');
		await this.performerPaymentByCardSecurityCode.type(testdata.Visa_CVV);
	}

	async performerPaymentProcessedBtnClick() {
		await this.performerPaymentByCardProcessedBtn.click();
	}

	async performerPaymentByCardEnterOtp() {
		const otp = this.page.frameLocator('iframe[name=\'3diframe\']').getByPlaceholder('xxxxxx');
		await otp.fill(testdata.Visa_OTP);
	}

	async performerPaymentPaynowBtn() {
		await this.performerPaymentPayNowBtn.click();
	}

	async performerPaymentByCardNextBtnClick() {
		const nextbutton = this.page.frameLocator('iframe[name=\'3diframe\']').locator('input[value=\'Next\']');

		await nextbutton.click();
	}

	async validatePerformerRegistrationCompleteText() {
		await Promise.all([this.page.waitForNavigation(),

			await expect(this.performerRegistrationCompleteGetText).toHaveText('Application complete!')]);
	}

	async performerAddCreditSection() {
		await this.performerAddCreditBtnClick();
		await this.performerProductNameEnterTextbox();
		await this.performerSelectMovieTypeDropdown();
		await this.performerRoleNameEnterTextbox();
		await this.performerProductionCompanyEnterTextbox();
		await this.performerCreditLinkEnterTextbox();
		await this.performerDirectorNameEnterTextbox();
		await this.performerDateFromSelectDatepicker();
		await this.performerDateToSelectDatepicker();
		await this.performerUploadFileImages('Upload_Doc/actor-agreement.pdf');
		await this.performerUnionContractOption();
		await this.performerSaveCreditBtnClick();
	}

	async performerAddCourseSection() {
		await this.performerAddCourseBtn.click();
		await this.performerSchoolname.type(testdata.Performer_SchoolName);
		await this.performerCoursename.type(testdata.Performer_CourseName);
		await this.performerDateFromSelectDatepicker();
		await this.performerDateToSelectDatepicker();
		await this.performerSelectQualificationLevelDropdown.click();
		await this.performerSelectQualificationLevelDropdownValue.click();
		await this.performerCourseUrl.type(testdata.Performer_Course_URL);
		await this.performerSelectCourseFulltimeOption.click();
		await this.performerUploadFileImages('Upload_Doc/Acting-Course.pdf');

		await Promise.all([this.page.waitForLoadState('domcontentloaded'),
			await expect(this.performerUploadFileTitle).toHaveText('Acting-Course.pdf')]);

		await this.performerSaveCourseBtn.click();
	}

	async performerEnterFullNameOfReferee() {
		await this.performerFullnameOfReferee.type(testdata.Recommended_Full_Name);
	}

	async performerSelectRefereeMembership() {
		await this.performerRefereeMembershipDropdown.click();
		await this.performerRefereeMembershipDropdownValue.click();
	}

	async checkUploadFileisLoaded(Web_Obj: Locator, expected_text: string) {
		await Promise.all([this.page.waitForLoadState('domcontentloaded'),
			await expect(Web_Obj).toHaveText(expected_text)]);
	}

	async performerBackBtnInEligibility() {
		await Promise.all([this.page.waitForLoadState('domcontentloaded'),
			this.validateBackBtnInEligibility.click()]);
	}

	async performerBackBtnInAboutPage() {
		await Promise.all([this.page.waitForLoadState('domcontentloaded'),
			this.backBtnAboutToPage.click()]);
	}

	async performerBackBtnInReviewPage() {
		await Promise.all([this.page.waitForLoadState('domcontentloaded'),
			this.backBtnReviewPage.click()]);
	}

	async performerBackBtnInCheckoutPage() {
		await Promise.all([this.page.waitForLoadState('domcontentloaded'),
			this.backBtnCheckoutPage.click()]);
	}

	async doperformerReviewCancelBtn() {
		await this.performerCancelBtn.click();
	}

	async doperformerLeaveApplicationBtn() {
		await this.performerLeaveApplicationBtn.click();
	}

	async youngPerformerValidatePaymentSubscriptionText() {
		await expect(this.validatePaymentSubscriptionText).toHaveText('Your Spotlight Subscription');
		await expect(this.validatePerformerAnnualDirectDebitText).toHaveText('Young Performer Annual Direct Debit');
		await expect(this.validatePerformerAnnualCreditDebitCardText).toHaveText('Young Performer Annual Credit / Debit Card');
		await expect(this.validatePerformerMonthlyInstalmentDirectDebitText).toHaveText('Young Performer Monthly Instalment Direct Debit');
	}
}
