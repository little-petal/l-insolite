'use client'

import { Item } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";

interface Props {
  items: Item[] | null;
}

export const Content = ({ items }: Props) => {
  const [selectedItems, setSelectedItems] = useState(items as Item[]);
  const [searchId, setSearchId] = useState<number>();

  async function onSubmit(e: any) {
    e.preventDefault();

    if (!searchId) {
      setSelectedItems(items as Item[]);
    } else {
      setSelectedItems(items?.filter((x) => x.id == searchId) as Item[]);
    }
  }

  return (
    <>
      <div className='flex p-6 justify-between items-center'>
        <Link 
          className="text-md sm:text-lg bg-orange-200 border border-orange-600 p-6"
          href={'/dashboard/create'}
          >Créer un article
        </Link>
        <div className="h-full flex justify-center items-center">
          <form className="flex space-x-4" method="post" onSubmit={onSubmit}>
            <input type="number" name="searchId" value={searchId} onChange={(event) => {setSearchId(event.target.valueAsNumber)}} />
            <button type="submit">
              <img className="w-6 sm:w-10 h-6 sm:h-10" src={"/assets/icons/search.png"} alt="Rechercher" />
            </button>
          </form>
        </div>
      </div>
      <div className='p-5'>
        <div className="flex flex-col">
            {selectedItems?.sort((a, b) => (Number(a.createdAt) - Number(b.createdAt)))?.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-row justify-between m-2 bg-emerald-medium"
            >
              <div className='flex justify-center'>
                <div className='pl-2 self-center w-8 sm:w-12'>
                  {item.published &&
                   <img className="w-10 sm:w-10 h-6 sm:h-10" src={"/assets/icons/visible.png"} alt="Visible" />
                  }
                </div>
                <p className="w-24 sm:w-28 text-lg sm:text-xl justify-start mx-2 p-2 self-center bg-emerald-light border border-emerald-dark">Réf.{item.id}</p>
                <p className="text-md sm:text-lg justify-start p-2 self-center">{item.title}</p>
              </div>
              <div className="flex flex-row p-1 space-x-2">
                <Link 
                  className="p-4"
                  href={'/dashboard/'+ item.id +'/update'}
                  ><img className="w-6 sm:w-10 h-6 sm:h-10" src={"/assets/icons/update.png"} alt="Modifier" />
                </Link>
                <Link 
                  className="p-4"
                  href={'/dashboard/'+ item.id +'/delete'}
                  ><img className="w-6 sm:w-10 h-6 sm:h-10" src={"/assets/icons/delete.png"} alt="Supprimer" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    )
}