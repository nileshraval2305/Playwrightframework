import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://devaws-www.spotlabs.uk/casting/2cbdf6e2-d1ce-4390-a6a4-900b9b7c6649/breakdowns/9e218394-f088-468c-aeba-9a02c2c98a1b/edit/roles');

  await page.goto('https://devaws-portal.spotlabs.uk/portal/signin?ReturnUrl=https%3a%2f%2fdevaws-portal.spotlabs.uk%2fportal%2foauth2%2fauthorize%3fclient_id%3dportal-website%26scope%3duser%26response_type%3dcode%26redirect_uri%3dhttps%3a%2f%2fdevaws-id.spotlabs.uk%2fCallback%26state%3dCfDJ8HVn9fjbXEJGsB82oGPH1wL4HBtCkN8lUIwd_FlcAe7SBXzZRgyiqX_6OMSfOpx82XhxWPykyjgkixoTR9lTmyIDYLdwIVFrZ0Lv8yFj_onmiRGmxgEheAWNvJAOvq0hL8QSworMu7WWmsGeexj-lT_1-i8QDwPfrWOvaFi-5DiELnBamGJ5uO071y4dskJhwI_qM4_YHjA6N7FDYl4QllOeLMa9XG1wVvveNOcvNFKDemz1Ni6st2tZm28WTtCpsga6G7c11hwWBXVB5jn_zNFuyL_yBkhr5EtZHoVpftB_5dTGAkdq7U_07b47LH5u4lrd8ZAOzJjmunUnw17zCW_M_c5p51jeNj-I-JhG0rnrhy7ybON2bVCkb6UC_g3nZuJJHl8gB9m3X4xCBYB39LEn575hs6tIcvHS7ZtLetADVdFUx9oxMhhq369zsQ2WRxSQjftMYLAQb8uRSX644rzFg7RB9Y6MvjP8wuShVFm-xHsXyUxKbXGvq9nCiilfu35MlDUJspugiiMzcssPaWTz5Png5AAnWJ5a9VVgBbsCEeED2Fqzq9-7drfNKwWLRT5eD8VDwIbfmgnd2YBqVmCRtPoieFq6A3zeyM53MeufZN5JH9TUAWTN9hLDkMGiv5UM1NHnPdEP1ElZRVxpe2cTwlMy_SWay3Li2TB7MJhmgFavvbzaOEecdte03e6dYwEJOeMC1uaJV_MXdULY3L4-8W2riPEiPcAttGx6524Q');

  await page.getByPlaceholder('Enter email or username').click();

  await page.getByPlaceholder('Enter email or username').fill('ddula');

  await page.getByPlaceholder('Enter email or username').press('Tab');

  await page.getByPlaceholder('Enter your password').fill('J0ker27');

  await page.getByRole('button').first().click();

  await page.goto('https://devaws-id.spotlabs.uk/External/Callback');

  await page.goto('https://devaws-www.spotlabs.uk/casting/signin-oidc?code=QcRAuDuH8B2iukUxSZsyxBr7ubQXlSMMexuDKcP9u80&scope=profile%20openid%20spotlightapp%20apiaccess%20offline_access&state=ba8d21f6dd8e4da3896cb946a6df75ab&session_state=7TswmFMEP0NbmKclQqWUAHgHUTue9IKH-hYDU39BPZ4.5ynf8mCv-ffhXAhKsF2d-g');

  await page.goto('https://devaws-www.spotlabs.uk/casting/2cbdf6e2-d1ce-4390-a6a4-900b9b7c6649/breakdowns/9e218394-f088-468c-aeba-9a02c2c98a1b/edit/roles');

  await page.locator('input[name="name"]').click();

  await page.locator('input[name="name"]').fill('Actor');

  await page.locator('div:nth-child(2) > .c-radio__container > .c-radio__content > .c-radio__box').first().click();

  await page.getByRole('checkbox', { name: 'Male' }).check();

  await page.locator('div:nth-child(3) > div > .c-radiolist > .c-input-wrapper > .c-radiolist__container > div:nth-child(2) > .c-radio__container > .c-radio__content > .c-radio__box').click();

  await page.locator('[id="\\30 \\ -\\ Asian"]').check();

  await page.locator('input[name="ageMin"]').click();

  await page.getByText('14').click();

  await page.getByRole('textbox', { name: 'Any age' }).click();

  await page.getByText('36').click();

  await page.locator('input[name="heightMin"]').click();

  await page.getByText('5′ 2″').click();

  await page.getByRole('textbox', { name: 'Any height' }).click();

  await page.getByText('6′ 10″').click();

  await page.locator('textarea[name="contractTypeInfo"]').click();

  await page.locator('textarea[name="contractTypeInfo"]').fill('testing');

  await page.locator('input[name="agreementAccepted"]').check();

  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page).toHaveURL('https://devaws-www.spotlabs.uk/casting/2cbdf6e2-d1ce-4390-a6a4-900b9b7c6649/breakdowns/9e218394-f088-468c-aeba-9a02c2c98a1b/edit/send-options');

  await page.locator('label:has-text("Yes") span').nth(1).click();

  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByLabel('Agents & Personal Managers').check();

  await page.getByLabel('Also post to the jobs feed (these roles will be sent directly to performers)').check();

  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page).toHaveURL('https://devaws-www.spotlabs.uk/casting/2cbdf6e2-d1ce-4390-a6a4-900b9b7c6649/breakdowns/9e218394-f088-468c-aeba-9a02c2c98a1b/edit/preview');

  await page.getByRole('button', { name: 'Send breakdown' }).click();
  await expect(page).toHaveURL('https://devaws-www.spotlabs.uk/casting/2cbdf6e2-d1ce-4390-a6a4-900b9b7c6649?showBreakdownSendingSuccess=1&showBreakdownSentToReviewSuccess=false');

  await page.goto('https://devaws-www.spotlabs.uk/casting/2cbdf6e2-d1ce-4390-a6a4-900b9b7c6649');

});