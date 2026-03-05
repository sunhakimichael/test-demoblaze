export class CartPage {

  constructor(private page: { click: (arg0: string) => any; fill: (arg0: string, arg1: string) => any; }) {}

  async openCart() {

    await this.page.click("#cartur");

  }

  async placeOrder() {

    await this.page.click("button:has-text('Place Order')");

  }

  async fillOrderForm() {

    await this.page.fill("#name", "QA Engineer");
    await this.page.fill("#country", "Indonesia");
    await this.page.fill("#city", "Jakarta");
    await this.page.fill("#card", "1234123412341234");
    await this.page.fill("#month", "12");
    await this.page.fill("#year", "2026");

  }

  async confirmOrder() {

    await this.page.click("button:has-text('Purchase')");

  }

}