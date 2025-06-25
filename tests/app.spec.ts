import { test, expect } from '@playwright/test';
import { flashcards } from '../src/data/flashcards';

test.describe('Ukrainian Flashcards App E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the home page before each test
    await page.goto('/');
  });

  test('should load the home page and display main navigation', async ({ page }) => {
    // Check for the main heading
    await expect(page.getByRole('heading', { name: 'Ukrainian Flashcards' })).toBeVisible();

    // Check for navigation buttons
    await expect(page.getByRole('link', { name: 'Study Mode' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Quiz Mode' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Stats Page' })).toBeVisible();
  });

  test('should navigate to category selection and back', async ({ page }) => {
    // Click on "Study Mode"
    await page.getByRole('link', { name: 'Study Mode' }).click();

    // Check that we are on the category selection page
    await expect(page).toHaveURL('/select/study');
    await expect(page.getByRole('heading', { name: 'Study Mode: Select a Category' })).toBeVisible();

    // Check for category buttons
    await expect(page.getByRole('link', { name: 'Animals' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Food' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Verbs' })).toBeVisible();

    // Go back to the home page
    await page.getByRole('link', { name: 'Back to Home' }).click();
    await expect(page).toHaveURL('/');
  });

  test('should navigate to a category and see the first flashcard', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Study' }).click();

    await page.getByRole('link', { name: 'Animals' }).click();
    await page.waitForURL('/study/animals'); // Explicitly wait for navigation

    await expect(page.getByTestId('flashcard')).toBeVisible();
    await expect(page.getByText('кіт')).toBeVisible();
  });

  test('should complete a full study session for a category', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Study' }).click();

    await page.getByRole('link', { name: 'Animals' }).click();
    await page.waitForURL('/study/animals'); // Explicitly wait for navigation

    const cardsInCategory = flashcards.filter((card) => card.category === 'animals');

    for (let i = 0; i < cardsInCategory.length; i++) {
      const card = cardsInCategory[i];
      const flashcard = page.getByTestId('flashcard');

      // Check for the Ukrainian word
      await expect(flashcard.getByText(card.ukrainian)).toBeVisible();

      // Flip the card
      await flashcard.click();

      // Check for the English word
      await expect(flashcard.getByText(card.english)).toBeVisible();

      // Click next, unless it's the last card
      if (i < cardsInCategory.length - 1) {
        await page.getByRole('button', { name: 'Next Card' }).click();
      }
    }

    // After the last card, one more click should trigger the completion message
    await page.getByRole('button', { name: 'Next Card' }).click();

    // --- Session Complete ---
    await expect(page.getByText('Study session complete!')).toBeVisible();

    // Go back to category selection
    await page.getByRole('link', { name: 'Choose another category' }).click();
    await expect(page).toHaveURL('/select/study');
  });
}); 