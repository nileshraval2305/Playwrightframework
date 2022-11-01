/* eslint-disable @typescript-eslint/naming-convention */
import {test as basetest} from '@playwright/test';
import JoinNowPage from '../../pages/joinNow.page';
import PerformerPage from '../../pages/Performer.page';
import Performer_joinnowpage from '../../pages/performer_JoinNow.page';
import LoginPage from '../../pages/login.page';
import UserTypes from '../../pages/userTypes';
import Performerstorage from '../../session-Storage/performer_Storage.page';

type pages = {
	joinpage: JoinNowPage;
	performerpage: PerformerPage;
	loginpage: LoginPage;
	usertype: UserTypes;
	Performer_registerpage: Performer_joinnowpage;
	performer_Auto_Login: Performerstorage;
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
		await use(new Performer_joinnowpage(page));
	},
	async performer_Auto_Login({browser}, use) {
		await use(await Performerstorage.create(browser));
	},

});
export const test = testpages;
