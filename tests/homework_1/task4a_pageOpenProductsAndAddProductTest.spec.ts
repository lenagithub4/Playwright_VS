import { test, expect} from '../../fixtures/auth.fixture'

test.beforeEach(async ({loggedInPage }) => {
    await expect(loggedInPage.locator('h4')).toHaveText('Dashboard');
});


let productName = 'Apple';

test.beforeEach(async ({loggedInPage, page }) => {
    await expect(loggedInPage.locator('h4')).toHaveText('Dashboard');

    await page.getByTestId('nav-products').click();
    await expect(page.locator('h4')).toHaveText('Products');

    const products = await page.locator('li').allTextContents();

    let counter = 0;
    let newProductName = productName;

    while (products.includes(newProductName)) {
        counter++;
        newProductName = `Apple${counter}`;
    }

    productName = newProductName;
});

test('click menu Products & add new product', async ({ page }) => {
    await page.getByLabel('Product Name').fill(productName);

    await page.getByRole('button', { name: 'ADD' }).click();

    await expect(page.locator('li')).toContainText([productName]);
});