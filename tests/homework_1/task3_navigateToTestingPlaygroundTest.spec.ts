import { test, expect} from '../../fixtures/auth.fixture'

test.beforeEach(async ({loggedInPage }) => {
    await expect(loggedInPage.locator('h4')).toHaveText('Dashboard');
});

test('click menu Testing Playground', async ({ loggedInPage }) => {
  await loggedInPage.getByTestId('nav-testing').click();

  await expect(loggedInPage.locator('h4')).toHaveText('Testing Playground');

  //  assertion 'Now you see me' is hidden
  await expect(loggedInPage.getByText('Now you see me')).toBeHidden();

  await loggedInPage.getByText('Toggle Hidden Element').click();

  // assertion 'Now you see me' is visible
  await expect(loggedInPage.getByText('Now you see me')).toBeVisible();
});