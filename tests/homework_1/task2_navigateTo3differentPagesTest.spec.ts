import { test, expect} from '../../fixtures/auth.fixture'

test.beforeEach(async ({loggedInPage }) => {
    await expect(loggedInPage.locator('h4')).toHaveText('Dashboard');
});




test('click menu Users', async ({ loggedInPage }) => {
    await loggedInPage.getByTestId('nav-users').click();
    await expect(loggedInPage.locator('h4')).toHaveText('Users');
});

test('click menu Products', async ({ loggedInPage }) => {
    await loggedInPage.getByTestId('nav-products').click();
    await expect(loggedInPage.locator('h4')).toHaveText('Products');
});

test('click menu Form Elements', async ({ loggedInPage }) => {
    await loggedInPage.getByTestId('nav-form-elements').click();
    await expect(loggedInPage.locator('h4')).toHaveText('Form Elements');
});