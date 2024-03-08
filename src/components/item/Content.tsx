'use client'

import { Carousel } from "@material-tailwind/react";
import { Item } from "@prisma/client";
import { Interested } from "./Interested";

interface Props {
  item: Item | null;
}

export const Content = ({ item }: Props) => {
  if (!item) {
    return (
      <div className="flex w-full h-full py-60 justify-center">
        <p className="text-black text-2xl sm:text-3xl lg:text-4xl font-inter p-2 text-center">L&apos;article n&apos;a pas été trouvé.</p>
      </div>
    )
  }

  return (
    // <div className="flex h-full w-full flex-col space-y-4 px-3 lg:px-24 pb-12 p-3 sm:p-6 bg-red-300 sm:bg-orange-300 md:bg-yellow-200 lg:bg-green-300 xl:bg-teal-300 2xl:bg-sky-300 3xl:bg-violet-300">
    <div className="flex h-full w-full flex-col space-y-4 px-3 lg:px-24 pb-12 p-3 sm:p-6">
      <div className="flex place-items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex w-full md:w-[420px] xl:w-[580px]">
          <Carousel className="rounded-lg h-full" placeholder={undefined}>
            {item.images.map((image, index) => (
              <img key={index} className="h-full w-full object-cover" src={"/uploads/" + image ?? "assets/images/image-not-found.jpg"} alt="" />
            ))}
          </Carousel>
        </div>
        <div className="flex flex-1 flex-col place-items-center p-6 bg-stone-medium rounded-lg">
          <div className="flex flex-col w-full xl:w-2/3 h-2/3 space-y-8 justify-self-center">
            <p className="text-black text-center text-4xl">{item.title}</p>
            <p className="text-black text-center text-2xl">{item.price + "€"}</p>
            <p className="text-black text-xl self-start bg-stone-dark p-2">{"Référence : " + item.id}</p>
            <p className="text-black text-center text-lg">{item.description}</p>
          </div>
          <Interested className="invisible xl:visible"/>
        </div>
      </div>
      <Interested className="visible xl:invisible"/>
    </div>
  )
}