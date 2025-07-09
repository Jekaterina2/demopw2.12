import {expect, Locator, test} from "@playwright/test";
import { faker } from "@faker-js/faker/locale/ar";
import * as dotenv from 'dotenv';
dotenv.config();

const randomUsername = faker.internet.username();
const randomPassword = faker.internet.password();

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.APP_URL!);
});

test('sign-in button is disabled', async ({ page }) => {
    const loginButton: Locator = page.getByRole('button', { name: 'Sign in' });
    const userName: Locator = page.locator('#username');
    const password: Locator = page.locator('#password');

    await userName.fill('testtest');
    await password.fill('test');
    await expect(loginButton).toBeDisabled();

});

test('By using random username and random password, username and password fields are defined', async ({ page }) => {
    const usernameInput: Locator = page.locator('#username');
    const passwordInput: Locator = page.locator('#password');
    await usernameInput.fill(randomUsername);
    await passwordInput.fill(randomPassword);
    expect(usernameInput).toBeDefined();
    expect(passwordInput).toBeDefined();
});

