import { APIResponse } from "../types/response.type";

export async function fetchUser(): Promise<APIResponse> {
  // should be moved to .env
  // but for simplicity we keep it here
  const url = "https://randomuser.me/api/?results=1&nat=us";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const data = await response.json();

  return data;
}
