import { test, expect} from '../../fixtures/auth.fixture'

test.beforeEach(async ({loggedInPage }) => {
    await expect(loggedInPage.locator('h4')).toHaveText('Dashboard');
});




test('click menu Products & add new product', async ({ page }) => {
    await page.getByTestId('nav-products').click();
    await expect(page.locator('h4')).toHaveText('Products');

    const productName = 'Apple';

    // Fill product name
    await page.getByLabel('Product Name').fill(productName);

    // Click ADD button
    await page.getByRole('button', { name: 'ADD' }).click();

    // Verify product appears in the list
    await expect(page.locator('li')).toContainText([productName]);

});

