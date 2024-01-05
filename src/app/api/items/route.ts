import { searchItemsToDisplay } from "@/lib/prisma";
import { Item } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const items = await searchItemsToDisplay();
  
  return NextResponse.json<Item[]>(items)
}