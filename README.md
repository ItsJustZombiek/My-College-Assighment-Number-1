(I use english for it because it's more convinient for me so yuh yeah-)

Playwright Testing

For this assignment, I used Playwright to test the TodoMVC website.

Website: https://demo.playwright.dev/todomvc/

What I tested

The test opens the website and checks that the main heading is visible. It then adds a task called "Finish my assignment" and checks that it appears on the page.

After that, it marks the task as complete and checks that there are no active tasks left.

How did I run the test

I needed Node.js installed first. So i opened the terminal in the project folder and run:

bash
npm install
npx playwright install chromium
npx playwright test

Test screenshot

The screenshot below shows the page after the test has completed successfully.

What I learned

I learned how to open a website with Playwright, find elements on a page, enter text into an input field, click a checkbox and check whether the expected results appeared. So yeh pretty simple and cool stuff- 