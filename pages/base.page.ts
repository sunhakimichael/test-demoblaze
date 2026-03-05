import { Page } from "@playwright/test";

export class BasePage {

  constructor(protected page: Page) {}

  async gotoHome() {
    await this.page.goto("/");
  }

}