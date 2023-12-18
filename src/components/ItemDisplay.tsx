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
        <div className="relative p-3 border-2 border-black h-full bg-amber-50">
            <div className="flex flex-col space-y-4 content-between h-full">
                <div className="flex justify-center bg-green-100">
                    <img className="object-cover sm:h-80 sm:w-80" src={images[0]} alt="" />
                </div>
                {/* <img className="h-screen bg-cover bg-center bg-no-repeat bg-landing-page" src={images[0]} alt="" /> */}
                <div className="grow flex flex-col space-y-4">
                    <h2>{title}</h2>
                    <h5>{description}</h5>
                </div>
                <div className="self-end p-1 max-w-max bg-emerald-400 rounded-md">
                    <h4>{price + "€"}</h4>
                </div>
            </div>
        </div> 
    )
}