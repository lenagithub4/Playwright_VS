import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../utils/testData';
import { test, expect} from '../../fixtures/auth.fixture'

test('login to Dashboard', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.login(
        users.standard.username,
        users.standard.password
    );

    await expect(page.locator('h4')).toHaveText('Dashboard');
});

