'use client'

import { ItemDisplay } from "./ItemDisplay";
import { Filter } from "./Filter";
import { Item } from "@prisma/client";
import { Suspense, useEffect, useState } from "react";
import { Pagination } from "./Pagination";

interface Props {
  items: Item[] | null;
}

export const ItemsSection = ({ items }: Props) => {
  const pagination = 20;
  const [active, setActive] = useState(1);
  const [selectedItems, setSelectedItems] = useState(items as Item[]);
  const [paginatedItems, setPaginatedItems] = useState(selectedItems.slice(active-1, pagination) as Item[]);

  useEffect(() => {
    setPaginatedItems(selectedItems.slice((active-1)*pagination, active*pagination));
  })

  const next = () => {
    if (!items || items?.length == 0) return;
    if (active === items.length/pagination) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };
    
  function filterItems(type: string) {
    if (!items) { return; }
    if (type === "ALL")
    {
      setActive(1);
      setSelectedItems(items);
    } else {
      const i = selectedItems.find((x) => x.type === type);
      setActive(1);
      setSelectedItems(items.filter((x) => (x.type as string) === type));
    }
  }

  return (
    <div className="relative">
      <div className="container mx-auto p-6 min-h-screen snap-always snap-start">
        <div className="flex flex-row justify-between" >
          <p className="text-4xl sm:text-5xl lg:text-6xl font-georgia p-2">Nos articles</p>
          <Pagination active={active} next={next} prev={prev} max={selectedItems ? Math.ceil(selectedItems.length/pagination) : 0 }/>
        </div>
        {!paginatedItems || paginatedItems.length == 0 && 
          <div className="flex w-full h-full py-60 justify-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-inter p-2 text-center">Aucun article disponible.</p>
          </div>
        }
        <div className="flex flex-wrap">
          {paginatedItems &&
            <Suspense fallback={<div>Loading...</div>}>
              {paginatedItems?.map((item) => (
                <div
                  key={item.id}
                  className="p-3 min-h-32 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4"
                >
                  <ItemDisplay
                    id={item.id}
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
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap md:flex-row justify-center content-end space-x-0 sm:space-x-3 md:space-x-6 h16 md:h-16 bg-red-900 sticky bottom-0 left-0 right-0 z-50 snap-always snap-end">
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
