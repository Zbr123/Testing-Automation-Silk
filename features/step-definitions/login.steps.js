
const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

Given('I am on the login page', async () => {
    await loginPage.open();
});

When('I enter valid credentials', async () => {
    await loginPage.login('testuser', 'password123');
});

Then('I should see the dashboard', async () => {
    await expect(dashboardPage.dashboardHeader).toBeDisplayed();
});
