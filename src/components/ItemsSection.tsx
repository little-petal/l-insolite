"use client";

import { ItemDisplay } from "./ItemDisplay";
import { Filter } from "./Filter";
import { Item } from "@prisma/client";
import { Suspense, use, useState } from "react";
import { searchAllItems } from "@/lib/prisma";

interface Props {
  items: Item[] | null;
}

export const ItemsSection = ({ items }: Props) => {

  const [selectedItems, setSelectedItems] = useState(items as Item[]);

  function filterItems(type: string) {
    if (!items) { return; }
    if (type === "ALL")
    {
      setSelectedItems(items);
    } else {
      const i = selectedItems.find((x) => x.type === type);
      setSelectedItems(items.filter((x) => (x.type as string) === type));
    }
  }

  return (
    <div className="relative">
      <div className="container mx-auto p-6 xl:h-min-screen snap-always snap-start">
        <p className="text-5xl lg:text-6xl font-georgia p-2">Nos articles</p>
        <div className="flex flex-wrap">
          {selectedItems &&
            <Suspense fallback={<div>Loading...</div>}>
              {selectedItems?.sort((a, b) => (Number(b.createdAt) - Number(a.createdAt)))?.map((item) => (
                <div
                  key={item.id}
                  className="p-3 min-h-50 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4"
                >
                  <ItemDisplay
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    type={item.type}
                    images={item.images}
                  />
                </div>
              ))}
            </Suspense>
          }
          {!selectedItems && 
            <div className="justify-center content-center">Aucun article</div>
          }
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap md:flex-row justify-center content-end space-x-0 sm:space-x-3 md:space-x-6 h16 md:h-16 bg-red-900 sticky bottom-0 left-0 right-0 snap-always snap-end">
        <div className="flex space-x-6 sm:space-x-3 md:space-x-6">
          <Filter type="ALL" filter={filterItems} />
          <Filter type="TABLEAU" filter={filterItems} />
          <Filter type="LUMINAIRE" filter={filterItems} />
          <Filter type="CHAISE" filter={filterItems} />
          <Filter type="MOBILIER" filter={filterItems} />
        </div>
        <div className="flex space-x-6 sm:space-x-3 md:space-x-6">
          <Filter type="ELECTRONIQUE" filter={filterItems} />
          <Filter type="JEUX" filter={filterItems} />
          <Filter type="MIROIR" filter={filterItems} />
          <Filter type="DIVERS" filter={filterItems} />
          <Filter type="FABRICATION" filter={filterItems} />
        </div>
      </div>
    </div>
  );
};
