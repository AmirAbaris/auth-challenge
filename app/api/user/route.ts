import { fetchUser } from "@/app/data/fetch-user-server";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await fetchUser();
  return NextResponse.json(result);
}
