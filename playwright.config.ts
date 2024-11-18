import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['json', { outputFile: 'test-results.json' }]],
  use: {
    baseURL: 'https://todo.ly/', // URL base de tu aplicación
    trace: 'retain-on-failure', // Trazas solo en fallos
    screenshot: 'only-on-failure', // Capturas de pantalla solo en fallos
    video: 'retain-on-failure', // Videos solo en fallos
    actionTimeout: 10000, // Timeout para acciones individuales
    navigationTimeout: 60000, // Timeout para navegación
    viewport: { width: 1280, height: 720 }, // Viewport estándar
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
