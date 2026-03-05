import { test, expect } from "@playwright/test";

test("Products API should return 200", async ({ request }) => {

  const response =
    await request.get("https://api.demoblaze.com/entries");

  expect(response.status()).toBe(200);

});