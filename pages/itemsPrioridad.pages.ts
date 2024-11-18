import { expect, Locator, Page } from '@playwright/test';

export class ItemsPrioridadPage {
    readonly page: Page;
    readonly url = 'https://todo.ly/';
    readonly loginButton: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly submitLoginButton: Locator;
    readonly homeTab: Locator;
    readonly newItemInput: Locator;
    readonly addButton: Locator;
    readonly optionsButton: Locator;
    readonly priorityMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator('.HPHeaderLogin > a');
        this.emailInput = page.locator('#ctl00_MainContent_LoginControl1_TextBoxEmail');
        this.passwordInput = page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword');
        this.submitLoginButton = page.getByRole('button', { name: 'Submit' });
        this.homeTab = page.getByRole('cell', { name: 'Home', exact: true });
        this.newItemInput = page.locator('#NewItemContentInput');
        this.addButton = page.getByRole('button', { name: 'Add' });
        this.optionsButton = page.getByRole('img', { name: 'Options' });
        this.priorityMenu = page.locator('#itemContextMenu');
    }

    async goto() {
        await this.page.goto(this.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    }

    async login(email: string, password: string) {
        await this.loginButton.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitLoginButton.click();
    }

    async navigateToHome() {
        await this.homeTab.click();
    }

    async addItemWithRandomPriority(itemName: string) {
        const priorities = ['1', '2', '3', '4'];
        const randomPriority = priorities[Math.floor(Math.random() * priorities.length)]; 
        await this.newItemInput.fill(itemName);
        await this.addButton.click();
        await this.optionsButton.click();
        await this.priorityMenu.getByText(randomPriority).click();
    }
}
