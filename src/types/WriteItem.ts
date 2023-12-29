import { Prisma, Type } from "@prisma/client";

export type WriteItem = {
    title: string,
    description: string | null,
    price: Prisma.Decimal,
    type: Type,
    published: boolean,
    images: string[]
  };