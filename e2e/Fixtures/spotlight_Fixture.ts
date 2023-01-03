/* eslint-disable @typescript-eslint/naming-convention */
import {test as basetest} from '@playwright/test';
import JoinNowPage from '../../pages/joinNow.page';
import PerformerPage from '../../pages/Performer.page';
import Performerjoinnowpage from '../../pages/PerformerJoinNow.page';
import LoginPage from '../../pages/login.page';
import UserTypes from '../../pages/userTypes';
import Performerstorage from '../../session-Storage/performer_Storage.page';
import YoungPerformerpage from '../../pages/youngPerformerJoinnow.page';
import WebApplicationactions from '../../lib/webapplicationActions';
import PaymentOption from '../../pages/joinNowPaymentOptions.page';
import CDJoiningPage from '../../pages/castingDirectorJoining.page';
import GeneralPaymentOption from '../../pages/generalPaymentOption.page';
import CDPaymentOption from '../../pages/castingDirectorPaymentOptions.page';

type pages = {
	joinpage: JoinNowPage;
	performerpage: PerformerPage;
	loginpage: LoginPage;
	usertype: UserTypes;
	Performer_registerpage: Performerjoinnowpage;
	performer_Auto_Login: Performerstorage;
	youngperformer: YoungPerformerpage;
	webevents: WebApplicationactions;
	Payment: PaymentOption;
	cdjoining: CDJoiningPage;
	doPaymentoption: GeneralPaymentOption;
	cdpaymentoption: CDPaymentOption;
};

const testpages = basetest.extend<pages>({

	async joinpage({page}, use) {
		await use(new JoinNowPage(page));
	},
	async performerpage({page}, use) {
		await use(new PerformerPage(page));
	},
	async loginpage({page}, use) {
		await use(new LoginPage(page));
	},
	async usertype({page}, use) {
		await use(new UserTypes(page));
	},
	async Performer_registerpage({page}, use) {
		await use(new Performerjoinnowpage(page));
	},
	async performer_Auto_Login({browser}, use) {
		await use(await Performerstorage.create(browser));
	},
	async youngperformer({page}, use) {
		await use(new YoungPerformerpage(page));
	},
	async webevents({page}, use) {
		await use(new WebApplicationactions(page));
	},
	async Payment({page}, use) {
		await use(new PaymentOption(page));
	},
	async cdjoining({page}, use) {
		await use(new CDJoiningPage(page));
	},

	async doPaymentoption({page}, use) {
		await use(new GeneralPaymentOption(page));
	},

	async cdpaymentoption({page}, use) {
		await use(new CDPaymentOption(page));
	},
});
export const test = testpages;
