'use client'

import { Item } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pagination } from "../Pagination";

interface Props {
  items: Item[] | null;
}

export const Content = ({ items }: Props) => {
  const pagination = 20;
  const [active, setActive] = useState(1);
  const [selectedItems, setSelectedItems] = useState(items as Item[]);
  const [searchId, setSearchId] = useState<number>();
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

  async function onSubmit(e: any) {
    e.preventDefault();

    if (!searchId) {
      setSelectedItems(items as Item[]);
    } else {
      setActive(1);
      setSelectedItems(items?.filter((x) => x.id == searchId) as Item[]);
    }
  }

  return (
    <>
      <div className='flex p-2 sm:p-6 justify-between items-center'>
        <Link 
          className="text-md sm:text-lg bg-orange-200 border border-orange-600 p-6"
          href={'/dashboard/create'}
          >Créer un article
        </Link>
        <div className="h-full flex justify-center items-center">
          <form className="flex space-x-4" method="post" onSubmit={onSubmit}>
            <input className="w-32 sm:w-60" type="number" name="searchId" value={searchId} onChange={(event) => {setSearchId(event.target.valueAsNumber)}} />
            <button type="submit">
              <img className="w-6 sm:w-10 h-6 sm:h-10" src={"/assets/icons/search.png"} alt="Rechercher" />
            </button>
          </form>
        </div>
      </div>
      <div className='p-2 sm:p-6'>
        <div className="flex flex-col">
            {paginatedItems?.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-row justify-between my-1 sm:m-2 bg-emerald-medium"
            >
              <div className='flex w-3/4 justify-start'>
                <div className='pl-2 self-center w-8 sm:w-12'>
                  {item.published &&
                   <img className="w-5 sm:w-10 h-5 sm:h-10" src={"/assets/icons/visible.png"} alt="Visible" />
                  }
                </div>
                <p className="hidden sm:block w-24 sm:w-28 text-lg sm:text-xl justify-start mx-2 p-2 self-center bg-emerald-light border border-emerald-dark">Réf.{item.id}</p>
                <p className="text-md sm:text-lg justify-start p-2 self-center">{item.title}</p>
              </div>
              <div className="flex flex-row w-1/4 p-1 space-x-2 justify-center sm:justify-end">
                <Link 
                  className="p-1 place-self-center"
                  href={'/dashboard/'+ item.id +'/update'}
                  ><img className="w-6 sm:w-10 h-6 sm:h-10" src={"/assets/icons/update.png"} alt="Modifier" />
                </Link>
                <Link 
                  className="p-1 place-self-center"
                  href={'/dashboard/'+ item.id +'/delete'}
                  ><img className="w-6 sm:w-10 h-6 sm:h-10" src={"/assets/icons/delete.png"} alt="Supprimer" />
                </Link>
              </div>
            </div>
          ))}
          <div className="self-center">
            <Pagination active={active} next={next} prev={prev} max={selectedItems ? Math.ceil(selectedItems.length/pagination) : 0 }/>
          </div>
        </div>
      </div>
    </>
    )
}