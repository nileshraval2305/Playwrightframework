import { expect, Page } from "@playwright/test";

export default class UserTypes {


    constructor(public page: Page) {



    }

    async performerOption() {
        await this.page.locator("a.performer").click();

    }
    async agentOption() {

        await this.page.locator("a.agent").click();
    }

    async castingDirectorOption() {

        await this.page.locator("a.casting").click();
    }


    async validatePerformerLogin() {
        const gettext = await this.page.locator("text=Upcoming events").textContent();
        await expect.soft(gettext).toContain('Upcoming events');



    }


    async validateAgentLogin() {

        await expect.soft(this.page.locator("input[placeholder='Search performer name']")).toBeVisible();



    }

    async validateCastingDirectorLogin() {

        await expect.soft(this.page.locator("div[class='a-content-container'] li:nth-child(1) a:nth-child(1)")).toBeVisible();



    }
}


