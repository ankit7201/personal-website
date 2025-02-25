export interface FetchAPIOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, unknown>;
}

export const fetchAPI = async (url: string, options: FetchAPIOptions) => {
  const { method, body } = options;
  const request: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    ...(body && { body: JSON.stringify(body) }),
  };

  try {
    const response = await fetch(url, request);
    if (!response.ok) {
      return {
        error: response.statusText,
        statusCode: response.status,
      };
    }

    return await response.json();
  } catch (err) {
    console.error(`Error ${method} data:`, err);
    throw err;
  }
};
