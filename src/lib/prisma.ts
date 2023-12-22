import { Item, PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

declare global {
    var prisma: PrismaClient;
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global!.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export async function searchAllItems() {
    const items = await prisma.item.findMany({
      });
      return <Item[]>items;
};

export async function searchItemsToDisplay() {
    const items = await prisma.item.findMany({
        where : { published: true },
      });
      return <Item[]>items;
};

export async function searchOneItem(itemId: number) {
    const items = await prisma.item.findFirst({
        where : { id: itemId},
      });
      return <Item>items;
};
