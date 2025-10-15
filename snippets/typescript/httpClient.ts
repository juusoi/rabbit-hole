/**
 * Super-lightweight HTTP client wrapper that enforces timeout and retries.
 */
import fetch, { Response } from "node-fetch";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
  retries?: number;
  timeoutMs?: number;
}

export class HttpClient {
  constructor(private readonly baseUrl: string) {}

  async request(path: string, options: RequestOptions = {}): Promise<Response> {
    const { retries = 2, timeoutMs = 5000, method = "GET", headers, body } = options;
    const url = new URL(path, this.baseUrl).toString();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      return await this.execute({ url, method, headers, body, controller, retries });
    } finally {
      clearTimeout(timeout);
    }
  }

  private async execute(params: {
    url: string;
    method: HttpMethod;
    headers?: Record<string, string>;
    body?: unknown;
    controller: AbortController;
    retries: number;
  }): Promise<Response> {
    const { url, method, headers, body, controller, retries } = params;
    try {
      return await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", ...headers },
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      });
    } catch (error) {
      if (retries <= 0) throw error;
      return this.execute({ ...params, retries: retries - 1 });
    }
  }
}
