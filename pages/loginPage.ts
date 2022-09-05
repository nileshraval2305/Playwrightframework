import { Page } from "@playwright/test";
export default class LoginPage {


    constructor(public page: Page) {


    }

   async navigateToURL(URL:string)
   {
    await this.page.goto(URL);

   }
   
   
    async signinbuttonOnMainPage() {

        await this.page.locator("#signInLink").click();
    }

    async enterUsername(username: string) {
        await this.page.locator("#Username")
            .type(username);
    }

    async enterPasseword(password: string) {
        await this.page.locator("#Password")
            .type(password);
    }

    async performerOption()
    {
        await this.page.locator("a.performer").click();

    } 

   async continueButton()
   {
    await Promise.all( [
        this.page.waitForNavigation(),
        this.page.locator("#sign-in-button").click()
    ]
    )
   }
  
    async doLogin(username:string,password:string)
    {

    await this.enterUsername(username);
    await this.enterPasseword(password);
    await this.continueButton();

    }



}