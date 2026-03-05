import { test, expect } from "../../fixtures/test.fixture";
import { ENV } from "../../config/env.config";

test.describe("E2E Purchase Flow @regression", () => {

  test("User can login, add product to cart and place order", async ({
    page,
    loginPage,
    productPage,
    cartPage
  }) => {

    await page.goto("/");

    await loginPage.openLoginModal();
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);
    await loginPage.verifyLoginSuccess(ENV.USERNAME);

    await productPage.selectProduct("Samsung galaxy s6");

    page.once("dialog", dialog => dialog.accept());

    await productPage.addToCart();

    await cartPage.openCart();
    await cartPage.placeOrder();
    await cartPage.fillOrderForm();
    await cartPage.confirmOrder();

    await expect(page.locator(".sweet-alert"))
      .toContainText("Thank you");

  });

});