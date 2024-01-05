import { searchItemsToDisplay } from "@/lib/prisma";
import { Item } from "@prisma/client";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from 'next/cache';

export async function GET(request: Request) {
  console.log("resquest :" + request);
  noStore()
  const items = await searchItemsToDisplay();
  console.log("ITEMS IN ROUTE"+items);

  return NextResponse.json<Item[]>(items)
}