import { expect } from '@playwright/test';

export class HomePage {
    constructor(page) {
        this.page = page;

        // Navigation Links
        this.homeLink = page.locator('a[href="#home"]');
        this.aboutLink = page.locator('a[href="#about"]');
        this.educationLink = page.locator('a[href="#education"]');
        this.skillsLink = page.locator('a[href="#skills"]');
        this.goalsLink = page.locator('a[href="#goals"]');
        this.contactLink = page.locator('a[href="#contact"]');

        // Hero Section
        this.heroName = page.locator('.hero__name');

        // Contact Form
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.messageInput = page.locator('#message');
        this.submitButton = page.locator('#submitBtn');

        // Success Message
        this.successMessage = page.locator('.success-message');
    }

    async openWebsite() {
        await this.page.goto('/');
    }

    async verifyTitle() {
        await expect(this.page).toHaveTitle('Munaza Munir | Personal Profile');
    }

    async verifyHeroSection() {
        await expect(this.heroName).toBeVisible();
    }

    async goToContact() {
        await this.contactLink.click();
    }

    async fillContactForm(name, email, message) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.messageInput.fill(message);
    }

    async submitForm() {
        await this.submitButton.click();
    }
}