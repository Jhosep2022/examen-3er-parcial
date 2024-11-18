import { expect, Locator, Page } from '@playwright/test';

export class ToDoHomePage {
    readonly url = "https://todo.ly/";
    readonly page: Page;
    readonly logo: Locator;
    readonly signUpFreeButton: Locator;
    readonly signUpDialog: Locator;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly tosCheckbox: Locator;
    readonly signUpButton: Locator;
    readonly loginButton: Locator;
    readonly emailLoginInput: Locator;
    readonly passwordLoginInput: Locator;
    readonly submitLoginButton: Locator;
    readonly addNewProjectButton: Locator;
    readonly newProjectNameInput: Locator;
    readonly newProjectNameButton: Locator;
    readonly optionsButton: Locator;
    readonly changeIconOption: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('#logo');
        this.signUpFreeButton = page.locator('.HPHeaderSignup > a:nth-child(1)');
        this.signUpDialog = page.locator('.HPsignupDiv');
        this.fullNameInput = page.locator('#ctl00_MainContent_SignupControl1_TextBoxFullName');
        this.emailInput = page.locator('#ctl00_MainContent_SignupControl1_TextBoxEmail');
        this.passwordInput = page.locator('#ctl00_MainContent_SignupControl1_TextBoxPassword');
        this.tosCheckbox = page.locator('#ctl00_MainContent_SignupControl1_CheckBoxTerms');
        this.signUpButton = page.locator('#ctl00_MainContent_SignupControl1_ButtonSignup');
        this.loginButton = page.locator('.HPHeaderLogin > a');
        this.emailLoginInput = page.locator('#ctl00_MainContent_LoginControl1_TextBoxEmail');
        this.passwordLoginInput = page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword');
        this.submitLoginButton = page.getByRole('button', { name: 'Submit' });
        this.addNewProjectButton = page.getByRole('cell', { name: 'Add New Project', exact: true });
        this.newProjectNameInput = page.locator('#NewProjNameInput');
        this.newProjectNameButton = page.locator('#NewProjNameButton');
        this.optionsButton = page.getByRole('img', { name: 'Options' });
        this.changeIconOption = page.locator('span:nth-child(10)').first();
    }

    async goto() {
        await this.page.goto(this.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    }

    async clickOnSignUpFreeButton() {
        await this.signUpFreeButton.waitFor({ state: 'visible' });
        await this.signUpFreeButton.click();
        await expect(this.signUpDialog).toBeVisible();
    }

    async fillSignUpForm(fullName: string, email: string, password = "InsecurePwd"): Promise<void> {
        await this.fullNameInput.waitFor({ state: 'visible' });
        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.tosCheckbox.check();
    }

    async saveNewUser() {
        await this.signUpButton.click();
        await expect(this.page.locator('text=Projects')).toBeVisible(); // Más específico
    }

    async createNewProject(projectName: string) {
        await this.addNewProjectButton.waitFor({ state: 'attached' });
        await expect(this.addNewProjectButton).toBeVisible();
        await this.addNewProjectButton.click();
        await this.newProjectNameInput.fill(projectName);
        await this.newProjectNameButton.click();

        // Usa un selector más específico para evitar conflictos
        await expect(this.page.locator(`.ProjItemContent:has-text("${projectName}")`)).toBeVisible();
    }

    async changeProjectIcon() {
        await this.optionsButton.waitFor({ state: 'visible' });
        await this.optionsButton.click();
        await this.changeIconOption.waitFor({ state: 'visible' });
        await this.changeIconOption.click();
    }
}
