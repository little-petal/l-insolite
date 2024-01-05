import { Prisma, $Enums } from "@prisma/client/index"

interface Props {
    title: string,
    description: string | null,
    price: Prisma.Decimal | null,
    type: $Enums.Type,
    images: string[]
}

/* bg-red-300 sm:bg-orange-300 md:bg-yellow-200 lg:bg-green-300 xl:bg-teal-300 2xl:bg-sky-300 3xl:bg-violet-300 */
export const ItemDisplay = ({title, description, price, type, images}: Props) => {
    return (
        <div className="relative p-3 h-full bg-stone-200">
            <div className="flex flex-col space-y-4 content-between h-full">
                <div className="flex justify-center bg-green-100">
                    <img className="object-cover sm:h-80 sm:w-80" src={images ? images[0] : "assets/images/image-not-found.jpg"} alt="" />
                </div>
                {/* <img className="h-screen bg-cover bg-center bg-no-repeat bg-landing-page" src={images[0]} alt="" /> */}
                <div className="grow flex flex-col space-y-4">
                    <p className="font-georgia text-xl">{title}</p>
                    <p className="font-georgia">{description}</p>
                </div>
                <div className="self-end p-1 max-w-max bg-stone-300 rounded-md">
                    <p className="font-inter">{price + "€"}</p>
                </div>
            </div>
        </div> 
    )
}