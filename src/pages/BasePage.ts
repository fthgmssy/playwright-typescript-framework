import { Page, Locator } from "@playwright/test";

export abstract class BasePage {
  constructor(protected page: Page) {}

  async navigate(path: string = "") {
    await this.page.goto(path);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  protected locator(selector: string): Locator {
    return this.page.locator(selector);
  }
}
