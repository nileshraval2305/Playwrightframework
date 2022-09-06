import { test } from "@playwright/test";
import JoinnowPage from "../../pages/joinnowPage";

import LoginPage from "../../pages/loginPage";
import * as  testdata from "../../test-Data/login-Testdata.json"



test("Validate Join now page",async ({page}) => {

    const loginPage = new LoginPage(page)
    const joinpage = new JoinnowPage(page);
    await loginPage.navigateToURL(testdata.URL);
    await joinpage.joinnowbtnOnMainPage();
    await joinpage.validate_Performer_Title();
    await joinpage.validate_Agents_Title();
    await joinpage.validate_Casting_Professionals_Title();
    await joinpage.validate_Gratuates_Title();
    await joinpage.validate_Young_Performers_Title();
    

} )