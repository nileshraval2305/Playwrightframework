import { expect, Page } from "@playwright/test";
export default class JoinnowPage {


    constructor(public page: Page) {



    }

    async joinnowbtnOnMainPage() {

        await this.page.locator("nav[id='desktopNav'] a[title='Find out more about our membership types and how to join Spotlight']").click();
    }


    async validate_Membership_text() {

        const gettext = await this.page.locator(".heroHeading").textContent();

        await expect.soft(gettext).toContain('Your Membership Options');
    }


    async validate_Performer_Title() {

        const gettext = await this.page.locator("div[class='containerGroups'] div:nth-child(1) div:nth-child(2) strong:nth-child(1)").textContent();

        await expect.soft(gettext).toContain('Performers');
    }
    async validate_Agents_Title() {

        const gettext = await this.page.locator("div[class='containerGroups'] div:nth-child(2) div:nth-child(2) strong:nth-child(1)").textContent();

        await expect.soft(gettext).toContain('Agents');
    }

    async validate_Casting_Professionals_Title() {

        const gettext = await this.page.locator("div.joinWrapper section:nth-child(2) div.containerGroups div.groupHolder:nth-child(3) div.groupTitle > strong:nth-child(1)").textContent();

        await expect.soft(gettext).toContain('Casting Professionals');
    }


    async validate_Young_Performers_Title() {

        const gettext = await this.page.locator("div.joinWrapper section:nth-child(2) div.containerGroups div.groupHolder:nth-child(4) div.groupTitle > strong:nth-child(1)").textContent();

        await expect.soft(gettext).toContain('Young Performers');
    }


    async validate_Gratuates_Title() {

        const gettext = await this.page.locator("div.joinWrapper section:nth-child(2) div.containerGroups div.groupHolder:nth-child(5) div.groupTitle > strong:nth-child(1)").textContent();

        await expect.soft(gettext).toContain('Graduates');
    }
}