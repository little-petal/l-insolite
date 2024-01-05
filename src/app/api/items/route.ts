import { prisma } from "@/lib/prisma";
import { Item } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const items = await prisma.item.findMany({
    where : { published: true },
  });
  
  return NextResponse.json<Item[]>(items)
}