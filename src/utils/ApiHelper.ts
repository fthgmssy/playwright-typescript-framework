import { APIRequestContext } from "@playwright/test";

export class ApiHelper {
  constructor(private request: APIRequestContext) {}

  async get(endpoint: string) {
    const response = await this.request.get(endpoint);
    return { status: response.status(), body: await response.json().catch(() => null) };
  }

  async post(endpoint: string, data: object) {
    const response = await this.request.post(endpoint, { data });
    return { status: response.status(), body: await response.json().catch(() => null) };
  }
}
