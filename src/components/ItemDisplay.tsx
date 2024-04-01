import { Carousel } from "@material-tailwind/react";
import { Prisma, $Enums } from "@prisma/client/index"
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
        <div className="relative p-3 h-fit bg-stone-light rounded-lg">
            <div className="flex flex-col space-y-4 content-between h-full">
                <Carousel className="rounded-xl h-96" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  {images.map((image, index) => (
                    <img key={index} className="h-full w-full object-cover" src={"/uploads/" + image ?? "assets/images/image-not-found.jpg"} alt="" />
                  ))}
                </Carousel>
                <div className="grow flex flex-col space-y-4 h-24">
                  <Link 
                    href={'/item/'+ id}
                    ><p className="font-georgia text-xl">{title}</p>
                  </Link>
                  <p className="font-georgia">{(description ?? "").length > 60 ? description?.slice(0, 60)+"..." : description}</p>
                </div>
                <div className="self-end p-1 max-w-max bg-stone-medium rounded-md">
                    <p className="font-inter">{price + "€"}</p>
                </div>
            </div>
        </div> 
    )
}