import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todo.ly/');
  await page.locator('.HPHeaderLogin > a').click();
  await page.locator('#ctl00_MainContent_LoginControl1_TextBoxEmail').fill('jose.condori.r@ucb.edu.bo');
  await page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword').click();
  await page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword').fill('joseamadeo');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('cell', { name: 'Home', exact: true }).click();
  await page.locator('#NewItemContentInput').click();
  await page.locator('#NewItemContentInput').fill('item1');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('img', { name: 'Options' }).click();
  await page.locator('#itemContextMenu').getByText('1').click();
  await page.locator('#NewItemContentInput').click();
  await page.locator('#NewItemContentInput').fill('item2');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('img', { name: 'Options' }).click();
  await page.locator('#itemContextMenu').getByText('2').click();
  await page.locator('#NewItemContentInput').click();
  await page.locator('#NewItemContentInput').fill('item3');
  await page.getByRole('img', { name: 'Options' }).click();
  await page.locator('#itemContextMenu').getByText('3').click();
  await page.locator('#NewItemContentInput').click();
  await page.locator('#NewItemContentInput').fill('item4');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('img', { name: 'Options' }).click();
  await page.locator('#itemContextMenu').getByText('4').click();
});