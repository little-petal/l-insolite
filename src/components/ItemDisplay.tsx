import { Prisma, $Enums } from "@prisma/client/index"
import Image from 'next/image'
import Link from "next/link";

interface Props {
    id: number,
    title: string,
    description: string | null,
    price: Prisma.Decimal | null,
    type: $Enums.Type,
    images: string[]
}

/* bg-red-300 sm:bg-orange-300 md:bg-yellow-200 lg:bg-green-300 xl:bg-teal-300 2xl:bg-sky-300 3xl:bg-violet-300 */
export const ItemDisplay = ({id, title, description, price, type, images}: Props) => {
    return (
        <div className="relative p-4 h-fit bg-stone-light rounded-md">
            <div className="flex flex-col space-y-4 content-between h-full h-96">
              <Image 
                className="h-full w-full object-cover rounded-lg" 
                src={"/uploads/" + images[0] ?? "assets/images/image-not-found.jpg"}
                height={400} 
                width={300} 
                alt={images[0]} />
              <div className="grow flex flex-col space-y-4 h-24">
                <Link 
                  href={'/item/'+ id}
                  ><p className="font-cambria text-xl">{title}</p>
                </Link>
                <p className="font-cambria">{(description ?? "").length > 60 ? description?.slice(0, 60)+"..." : description}</p>
              </div>
              <div className="self-end p-1 max-w-max bg-stone-medium rounded-md">
                  <p className="font-inter">{price + "€"}</p>
              </div>
            </div>
        </div> 
    )
}