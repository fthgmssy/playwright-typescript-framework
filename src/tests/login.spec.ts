import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate("/login");
  });

  test("valid credentials should log in successfully", async () => {
    await loginPage.login("tomsmith", "SuperSecretPassword!");
    expect(await loginPage.isLoginSuccessful()).toBeTruthy();
  });

  test("invalid password should show error", async () => {
    await loginPage.login("tomsmith", "wrongpassword");
    const msg = await loginPage.getFlashMessage();
    expect(msg).toContain("invalid");
  });

  test("invalid username should show error", async () => {
    await loginPage.login("invaliduser", "SuperSecretPassword!");
    const msg = await loginPage.getFlashMessage();
    expect(msg).toContain("invalid");
  });
});
