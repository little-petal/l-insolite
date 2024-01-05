import { WriteItem } from '@/types/WriteItem';
import { Item, PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

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

export async function createOneItem(item: WriteItem) {

  const itemCreated = await prisma.item.create({
    data: {
      title: item.title,
      description: item.description,
      price: item.price,
      type: item.type,
      published: item.published,
      images: item.images
    }});
    return itemCreated;
};

export async function updateOneItem(itemId: number, item: WriteItem) {

  const itemUpdated = await prisma.item.update({
    where : { id: itemId},
    data: {
      title: item.title,
      description: item.description,
      price: item.price,
      type: item.type,
      published: item.published,
      images: item.images
    }});
    return itemUpdated;
};

export async function deleteOneItem(itemId: number) {

  const itemDeleted = await prisma.item.delete({
    where : { id: itemId}});
    return itemDeleted;
};