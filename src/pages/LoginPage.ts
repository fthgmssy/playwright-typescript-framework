import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  private readonly usernameInput = this.locator("#username");
  private readonly passwordInput = this.locator("#password");
  private readonly loginButton   = this.locator("button[type='submit']");
  private readonly flashMessage  = this.locator("#flash");

  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getFlashMessage(): Promise<string> {
    await this.flashMessage.waitFor({ state: "visible" });
    return this.flashMessage.innerText();
  }

  async isLoginSuccessful(): Promise<boolean> {
    return this.getCurrentUrl().then(url => url.includes("/secure"));
  }
}
