import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Portfolio Website Automation', () => {

    test('TC01 - Verify website title', async ({ page }) => {
        const home = new HomePage(page);

        await home.openWebsite();
        await home.verifyTitle();
    });

    test('TC02 - Verify hero section is visible', async ({ page }) => {
        const home = new HomePage(page);

        await home.openWebsite();
        await home.verifyHeroSection();
    });

    test('TC03 - Verify navigation to Contact section', async ({ page }) => {
        const home = new HomePage(page);

        await home.openWebsite();
        await home.goToContact();

        await expect(page.locator('#contact')).toBeVisible();
    });

    test('TC04 - Submit contact form with valid data', async ({ page }) => {
        const home = new HomePage(page);

        await home.openWebsite();
        await home.goToContact();

        await home.fillContactForm(
            'Munaza Munir',
            'munaza@gmail.com',
            'This is a Playwright automation test.'
        );

        await home.submitForm();

        await expect(home.successMessage).toBeVisible();
    });

    test('TC05 - Verify invalid email validation', async ({ page }) => {

    const home = new HomePage(page);

    await home.openWebsite();

    await home.goToContact();

    await home.fillContactForm(
        'Munaza',
        'invalid-email',
        'Testing invalid email'
    );

    await home.submitForm();

    await expect(home.successMessage).not.toBeVisible();

});

});