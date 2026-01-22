import { test, expect } from '@playwright/test';
let userName;
test("post request", async ({ request }) => {
  const response = await request.post(
    "https://petstore.swagger.io/v2/user",
    {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      data: {
        username: "gobhiii@123",
        firstName: "gobhiii",
        lastName: "prasadam",
        email: "gobhiii12@gmail.com",
        password: "Gobhiii@123",
        phone: "9876542125",
        userStatus: 0
      }
    }
  );
const res=await response.json();
   userName=res.username
   
  expect(response.status()).toBe(200);
});

test("this is Get Test",async({request})=>{
   const response=await request.get("https://petstore.swagger.io/v2/user/"+userName);
   console.log(await response.json());
   expect(response.status()).toBe(200);
})
