import { expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {

  async openLoginModal() {
    await this.page.click("#login2");
  }

  async login(username: string, password: string) {

    await this.page.fill("#loginusername", username);
    await this.page.fill("#loginpassword", password);

    await this.page.click("button:has-text('Log in')");
  }

  async verifyLoginSuccess(username: string) {

    await expect(this.page.locator("#nameofuser"))
      .toContainText(username);

  }

}