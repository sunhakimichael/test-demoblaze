export class ProductPage {

  constructor(private page: { click: (arg0: string) => any; }) {}

  async selectProduct(product: string) {

    await this.page.click(`a:has-text("${product}")`);

  }

  async addToCart() {

    await this.page.click("text=Add to cart");

  }

}