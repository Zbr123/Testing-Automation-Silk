
const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    get usernameInput() {
        return $('~username');
    }

    get passwordInput() {
        return $('~password');
    }

    get loginButton() {
        return $('~login');
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = LoginPage;
