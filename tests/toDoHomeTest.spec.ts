import { ToDoHomePage } from '../pages/todoHome.pages.ts';
import { test, expect } from '@playwright/test';
import { generateRandomProjectName } from '../utils/generaterandom.ts';

test.describe('Pruebas de la Página Principal de ToDo', () => {
    let todoHomePage: ToDoHomePage;
    let randomProjectName: string;

    test.beforeEach(async ({ page }) => {
        todoHomePage = new ToDoHomePage(page);
        await todoHomePage.goto();
        randomProjectName = generateRandomProjectName();
    });

    test('debería iniciar sesión, crear un nuevo proyecto y cambiar el ícono del proyecto', async ({ page }) => {
        // Iniciar sesión
        await todoHomePage.loginButton.click();
        await todoHomePage.emailLoginInput.fill('jose.condori.r@ucb.edu.bo');
        await todoHomePage.passwordLoginInput.fill('joseamadeo');
        await todoHomePage.submitLoginButton.click();

        await todoHomePage.createNewProject(randomProjectName);

        await todoHomePage.changeProjectIcon();

    });
});
