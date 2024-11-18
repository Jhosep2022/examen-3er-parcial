import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todo.ly/');
  await page.locator('.HPHeaderLogin > a').click();
  await page.locator('#ctl00_MainContent_LoginControl1_TextBoxEmail').fill('jose.condori.r@ucb.edu.bo');
  await page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword').click();
  await page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword').fill('joseamadeo');
  await page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword').press('Enter');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('cell', { name: 'Add New Project', exact: true }).click();
  await page.locator('#NewProjNameInput').click();
  await page.locator('#NewProjNameInput').fill('proyecto-icono-nuevo');
  await page.locator('#NewProjNameButton').click();
  await page.getByRole('img', { name: 'Options' }).click();
  await page.locator('span:nth-child(10)').first().click();
});