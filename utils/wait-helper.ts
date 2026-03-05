import { Page, Locator } from "@playwright/test"

export class WaitHelper {

  static async waitForVisible(locator: Locator) {

    await locator.waitFor({
      state: "visible",
      timeout: 10000
    })

  }

  static async waitForClickable(locator: Locator) {

    await locator.waitFor({
      state: "attached",
      timeout: 10000
    })

  }

}