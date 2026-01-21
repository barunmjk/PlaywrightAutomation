import { test, expect } from '@playwright/test';

test("post request", async ({ request }) => {
  const response = await request.post(
    "https://petstore.swagger.io/v2/user",
    {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      data: {
        username: "gobhii@123",
        firstName: "gobhii",
        lastName: "prasada",
        email: "gobhii12@gmail.com",
        password: "Gobhii@123",
        phone: "987654212",
        userStatus: 0
      }
    }
  );
console.log(await response.json());
  // Assertion
  expect(response.status()).toBe(200);
});
