import { Type } from "./Type";
import { Prisma } from "@prisma/client";

export type Item = {
    id: number,
    title: string,
    description: string | null,
    price: Prisma.Decimal | null,
    type: Type,
    published: boolean,
    createdAt: Date; 
    updatedAt: Date | null,
    images: string[]
  };