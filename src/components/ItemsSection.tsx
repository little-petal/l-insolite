"use client";

import { ItemDisplay } from "./ItemDisplay";
import { Filter } from "./Filter";
import { Item } from "@prisma/client";
import { useState } from "react";

interface Props {
  items: Item[];
}

export const ItemsSection = ({ items }: Props) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>(items);

  function filterItems(type: string) {
    const i = selectedItems.find((x) => x.type === type);
    setSelectedItems(items.filter((x) => (x.type as string) === type));
    console.log(type);
  }

  return (
    <section id="nav-products" className="snap-start snap-stop relative">
      <div className="container mx-auto p-6 xl:h-screen">
        <p className="text-5xl lg:text-6xl font-georgia">Nos articles</p>
        <div className="flex flex-wrap">
          {selectedItems?.map((item) => (
            <div
              key={item.title}
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
        </div>
      </div>
      <div className="flex flex-wrap md:flex-row justify-center content-end space-x-6 h32 md:h-16 bg-stone-200/70 sticky bottom-0 left-0 right-0">
        <div className="flex space-x-6">
          <Filter type="ASSISE" filter={filterItems} />
          <Filter type="LUMINAIRE" filter={filterItems} />
          <Filter type="MOBILIER" filter={filterItems} />
          <Filter type="RADIO" filter={filterItems} />
          <Filter type="VAISSELLE" filter={filterItems} />
        </div>
        <div className="flex space-x-6">
          <Filter type="HORLOGE" filter={filterItems} />
          <Filter type="MIROIR" filter={filterItems} />
          <Filter type="DIVERS" filter={filterItems} />
          <Filter type="FABRICATION" filter={filterItems} />
        </div>
      </div>
    </section>
  );
};
