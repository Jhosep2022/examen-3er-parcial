import { test } from '@playwright/test';
import { ItemsPrioridadPage } from '../pages/itemsPrioridad.pages';

// Generador de nombres aleatorios para los ítems
function generateRandomItemName(): string {
    const timestamp = Date.now();
    return `item-${timestamp}`;
}

test('Pruebas para agregar ítems con prioridades aleatorias', async ({ page }) => {
    const itemsPrioridadPage = new ItemsPrioridadPage(page);

    // Navega a la página
    await itemsPrioridadPage.goto();

    // Inicia sesión
    await itemsPrioridadPage.login('jose.condori.r@ucb.edu.bo', 'joseamadeo');

    // Navega a la pestaña "Home"
    await itemsPrioridadPage.navigateToHome();

    // Agrega ítems con nombres y prioridades aleatorias
    for (let i = 0; i < 1; i++) {
        const randomItemName = generateRandomItemName();
        await itemsPrioridadPage.addItemWithRandomPriority(randomItemName);
    }
});
