"use client";

import { Item } from "@prisma/client";

interface Props {
  items: Item[];
  updateItem : any;
  deleteItem: any;
}

export const ItemsList = ({ items, updateItem, deleteItem }: Props) => {
  return (
      <div className="flex flex-col">
          {items?.map((item) => (
          <div
            key={item.title}
            className="w-full flex flex-row justify-between p-2 bg-green-700"
          >
            <p className="flex justify-start self-center">{item.title}</p>
            <div className="flex flex-row space-x-2">
              <button onClick={async () => updateItem()}>Modifier</button>
              <button onClick={async () => deleteItem()}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    )
}