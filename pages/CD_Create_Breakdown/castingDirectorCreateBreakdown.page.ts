
import type {Page, Locator} from '@playwright/test';
import {expect} from '@playwright/test';
import WebActions from '../../lib/webapplicationActions';
import * as userdata from '../../test-Data/Spotlight-testdata.json';
let webevents: WebActions;
export default class CastingDirector {
	readonly cdCreateBreakdown: Locator;
	readonly selectProjectFolderDropdown: Locator;
	readonly projectFolderDropdownValNewfolder: Locator;
	readonly enterProjectFolderName: Locator;
	readonly continueBtnInProjectFolder: Locator;
	readonly validateProductionDetailstxt: Locator;
	readonly enterProductionTitle: Locator;
	readonly selectProdctionTypeDropdown: Locator;
	readonly selectProdctionTypeDropdownVal: Locator;
	readonly enterProductionSummary: Locator;
	readonly enterProductionDates: Locator;
	readonly enterProductionLocation: Locator;
	readonly selectProductionCountry: Locator;
	readonly selectProductionCountryVal: Locator;
	readonly enterDirectorName: Locator;
	readonly enterProducerName: Locator;
	readonly enterProductionCompany: Locator;
	readonly selectContractTypeDropdown: Locator;
	readonly selectContractTypeDropdownVal: Locator;
	readonly enterCastingLocation: Locator;
	readonly selectCastingCountryDropdown: Locator;
	readonly selectCastingCountryDropdownVal: Locator;
	readonly selectClosingDate: Locator;
	readonly selectClosingDatePickerVal: Locator;
	readonly castingDetailsnextBtn: Locator;
	readonly castingroleName: Locator;
	readonly selectGenderspecificOptionBtn: Locator;
	readonly selectApperancespecificOptionBtn: Locator;
	readonly selectMinAgeDropdown: Locator;
	readonly selectMinAgeDropdownValue: Locator;
	readonly selectMaxAgeDropdown: Locator;
	readonly selectMaxAgeDropdownValue: Locator;
	readonly selectHeightMinDropdown: Locator;
	readonly selectHeightMinDropdownValue: Locator;
	readonly selectHeightMaxDropdown: Locator;
	readonly selectHeightMaxDropdownValue: Locator;
	readonly enterContractType: Locator;
	readonly uploadFiles: Locator;
	readonly acceptAgreement: Locator;
	readonly globalListClick: Locator;
	readonly agentAndPersonalManager: Locator;
	readonly sendRoleDirectlyToPerformer: Locator;
	readonly roleExclusiveOnSpotlight;
	readonly sendOptionNextBtn;
	readonly sendBreakdown;
	readonly selectGenderMaleCheckbox;
	readonly changeInMetric;
	readonly getBreakdownTitle;
	getTextBreakdowntextAfterCreated: string;
	getTextBreakdowntextBeforeCreated: string;

	constructor(readonly page: Page) {
		this.page = page;
		webevents = new WebActions(this.page);
		this.cdCreateBreakdown = page.locator('//a[normalize-space()=\'Create a breakdown\']');
		this.selectProjectFolderDropdown = page.locator('input[placeholder=\'Please select\']');
		this.projectFolderDropdownValNewfolder = page.locator('//div[contains(text(),\'New folder\')]');
		this.enterProjectFolderName = page.locator('input[name=\'name\']');
		this.continueBtnInProjectFolder = page.locator('a[class=\'c-button c-button__primary\'] span[class=\'c-button__text\']');
		this.validateProductionDetailstxt = page.locator('h1.c-form-title__heading');
		this.enterProductionTitle = page.locator('input[name=\'productionTitle\']');
		this.selectProdctionTypeDropdown = page.locator('input[placeholder=\'Select type\']');
		this.selectProdctionTypeDropdownVal = page.locator('//div[normalize-space()=\'Feature Film\']');
		this.enterProductionSummary = page.locator('textarea[name=\'productionSummary\']');
		this.enterProductionDates = page.locator('textarea[name=\'productionDates\']');
		this.enterProductionLocation = page.locator('input[name=\'productionLocation\']');
		this.selectProductionCountry = page.locator('input[placeholder=\'Select country\'][name=\'productionCountryCode\']');
		this.selectProductionCountryVal = page.locator('//div[normalize-space()=\'United Kingdom\']');
		this.enterDirectorName = page.locator('input[name=\'productionDirector\']');
		this.enterProducerName = page.locator('input[name=\'productionProducer\']');
		this.enterProductionCompany = page.locator('input[name=\'productionProducer\']');
		this.selectContractTypeDropdown = page.locator('input[placeholder=\'Select contract type\']');
		this.selectContractTypeDropdownVal = page.locator('//div[normalize-space()=\'Equity - Above Minimum\']');
		this.enterCastingLocation = page.locator('input[name=\'location\']');
		this.selectCastingCountryDropdown = page.locator('input[placeholder=\'Select country\'][name=\'countryCode\']');
		this.selectCastingCountryDropdownVal = page.locator('//div[normalize-space()=\'United Kingdom\']');
		this.selectClosingDate = page.locator('input[name=\'closingDate\']');
		this.selectClosingDatePickerVal = page.locator('button[class=\'react-calendar__tile react-calendar__tile--now react-calendar__month-view__days__day\']');
		this.castingDetailsnextBtn = page.locator('a[class=\'c-button c-button__primary\'] span[class=\'c-button__text\']');
		this.castingroleName = page.locator('input[name=\'name\']');
		this.selectGenderspecificOptionBtn = page.locator('(//span[text()=\'Specific\'])[1]');
		this.selectGenderMaleCheckbox = page.locator('//input[@aria-label=\'Male\']');
		this.selectApperancespecificOptionBtn = page.locator('(//span[text()=\'Specific\'])[1]');
		this.selectMinAgeDropdown = page.locator('//input[@name=\'ageMin\']');
		this.selectMinAgeDropdownValue = page.locator('//div[normalize-space()=\'18\']');
		this.selectMaxAgeDropdown = page.locator('//input[@name=\'ageMax\']');
		this.selectMaxAgeDropdownValue = page.locator('//div[normalize-space()=\'28\']');
		this.changeInMetric = page.locator('//a[normalize-space()=\'Change to metric\']');
		this.selectHeightMinDropdown = page.locator('//input[@name=\'heightMin\']');
		this.selectHeightMinDropdownValue = page.locator('//div[normalize-space()=\'140 cm\']');
		this.selectHeightMaxDropdown = page.locator('//input[@name=\'heightMax\']');
		this.selectHeightMaxDropdownValue = page.locator('//div[normalize-space()=\'180 cm\']');
		this.enterContractType = page.locator('//textarea[@name=\'contractTypeInfo\']');
		this.uploadFiles = page.locator('.c-file-uploader__text');
		this.acceptAgreement = page.locator('//input[@name=\'agreementAccepted\']');
		this.globalListClick = page.locator('//div[contains(text(),\'Global lists\')]');
		this.agentAndPersonalManager = page.locator('//input[@value=\'agentCategory0\']');
		this.sendRoleDirectlyToPerformer = page.locator('//input[@value=\'performerCategory1\']');
		this.roleExclusiveOnSpotlight = page.locator('//span[contains(text(),\'Yes\')]');
		this.sendOptionNextBtn = page.locator('//span[normalize-space()=\'Next\']');
		this.sendBreakdown = page.locator('//span[normalize-space()=\'Send breakdown\']');
		this.getBreakdownTitle = page.locator('.c-table__title-content a');
	}

	async createBreakdownQuicklink() {
		await webevents.clickElement(this.cdCreateBreakdown);
	}

	async selectProjectFolderDropdownclick() {
		await webevents.clickElement(this.selectProjectFolderDropdown);
	}

	async selectNewfolderInProjectDropdown() {
		await webevents.clickElement(this.projectFolderDropdownValNewfolder);
	}

	async enterProjectName() {
		await webevents.enterElementText(this.enterProjectFolderName, await webevents.uuidAlphabetWithFixLength('Project_'));
	}

	async continueBtnInProject() {
		await webevents.clickElement(this.continueBtnInProjectFolder);
	}

	async validateProductionDetailstext() {
		await webevents.validateGetAndCompareText(this.validateProductionDetailstxt, 'Production details');
	}

	async enterProductionTitleName() {
		await webevents.enterElementText(this.enterProductionTitle, await webevents.uuidAlphabetWithFixLength('Movie_'));
	}

	async getProductionTitleName() {
		this.getTextBreakdowntextBeforeCreated = await webevents.getElementText(this.enterProductionTitle);
		return this.getTextBreakdowntextBeforeCreated;
	}

	async selectProductionType() {
		await webevents.clickElement(this.selectProdctionTypeDropdown);
		await webevents.clickElement(this.selectProdctionTypeDropdownVal);
	}

	async enterProductionSummarydetails() {
		await webevents.enterElementText(this.enterProductionSummary, userdata.CD_ProductionSummary);
	}

	async enterProductionlocation() {
		await webevents.enterElementText(this.enterProductionLocation, userdata.CD_ProductionLocation);
	}

	async selectProductionCountryvalue() {
		await webevents.clickElement(this.selectProductionCountry);
		await webevents.clickElement(this.selectProductionCountryVal);
	}

	async enterDirectorNameAsOptional() {
		await webevents.enterElementText(this.enterDirectorName, userdata.Performer_Director_Name);
	}

	async enterProducerNameAsOptional() {
		await webevents.enterElementText(this.enterProducerName, userdata.ProducerName);
	}

	async selectcontracttypeofProject() {
		await webevents.clickElement(this.selectContractTypeDropdown);
		await webevents.clickElement(this.selectContractTypeDropdownVal);
	}

	async enterCastingLocationVal() {
		await webevents.enterElementText(this.enterCastingLocation, userdata.Casting_Location);
	}

	async selectCastingCountryDropdownval() {
		await webevents.clickElement(this.selectCastingCountryDropdown);
		await webevents.clickElement(this.selectCastingCountryDropdownVal);
	}

	async selectClosingDateofBreakdown() {
		await webevents.clickElement(this.selectClosingDate);
		await webevents.clickElement(this.selectClosingDatePickerVal);
	}

	async nextButtonClick() {
		await webevents.clickElement(this.castingDetailsnextBtn);
	}

	async castingRoleName() {
		await webevents.enterElementText(this.castingroleName, userdata.Casting_RoleName);
	}

	async selectGender() {
		await webevents.clickElement(this.selectGenderspecificOptionBtn);
		await webevents.clickElement(this.selectGenderMaleCheckbox);
	}

	async selectPlayingAgeRange() {
		await webevents.clickElement(this.selectMinAgeDropdown);
		await webevents.clickElement(this.selectMinAgeDropdownValue);
		await webevents.clickElement(this.selectMaxAgeDropdown);
		await webevents.clickElement(this.selectMaxAgeDropdownValue);
	}

	async changeInMetriclinkText() {
		await webevents.clickElement(this.changeInMetric);
	}

	async selectHeightRange() {
		await webevents.clickElement(this.selectHeightMinDropdown);
		await webevents.clickElement(this.selectHeightMinDropdownValue);
		await webevents.clickElement(this.selectHeightMaxDropdown);
		await webevents.clickElement(this.selectHeightMaxDropdownValue);
	}

	async enterContratTypeDetails() {
		await webevents.enterElementText(this.enterContractType, userdata.Role_ContractType);
	}

	async aceeptAgreementOption() {
		await webevents.clickElement(this.acceptAgreement);
	}

	async selectGloballistOptions() {
		await webevents.clickElement(this.globalListClick);
		await webevents.clickElement(this.agentAndPersonalManager);
		await webevents.clickElement(this.sendRoleDirectlyToPerformer);
	}

	async selectexclusiveSpotlightOption() {
		await webevents.clickElement(this.roleExclusiveOnSpotlight);
	}

	async sendoptionsNextBtn() {
		await webevents.clickElement(this.sendOptionNextBtn);
	}

	async sendBreakdownBtn() {
		await webevents.clickElement(this.sendBreakdown);
	}

	async getBreakdowntitle() {
		await webevents.getElementText(this.getBreakdownTitle);
	}

	async validateBreakdownIsCreated() {
		await Promise.all([this.sendBreakdown.click(),
			this.getBreakdownTitle.innerText()]);

		await webevents.verifyElementContainsTextUsingLocator(await this.getBreakdownTitle.innerText(), this.getTextBreakdowntextBeforeCreated);
	}
}
