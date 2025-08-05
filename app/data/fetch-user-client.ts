import { APIResponse } from "@/features/user/types/response.type";

export async function fetchUserClient(): Promise<APIResponse> {
  const response = await fetch("/api/user");

  if (!response.ok) {
    return {
      data: null,
      success: false,
      message: "Failed to fetch user",
    };
  }

  return response.json();
}
