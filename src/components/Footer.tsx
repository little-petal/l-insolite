import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/20/solid"

export const Footer = () => {
    return  (
        <div className="flex flex-row relative p-5 bg-red-800">
            <div className="basis-1/2 md:basis-1/4 font-georgia md:font-inter">
                <p className='text-xl lg:text-2xl'>L&lsquo;INSOLITE</p>
                <p className='text-sm lg:text-base'>Mobilier vintage et objets insolites</p>
                <p className='text-sm lg:text-base'>07 97 51 17 99</p>
            </div>
            <div className="invisible md:visible basis-0 md:basis-1/2 flex justify-center flex item-stretch">
                <a className="self-end" href="https://www.flaticon.com/free-icons" title="lamp icons">Icons created by Freepik - Flaticon</a>
            </div>
            <div className="basis-1/2 md:basis-1/4 flex justify-end space-x-1">
                <Link
                href="/login"
                className="flex items-center gap-5 self-start rounded-lg bg-stone-300 px-6 py-3 text-sm font-inter transition-colors hover:bg-stone-500 md:text-base"
                >
                    <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
                </Link>
            </div>
         
        </div>
    )
}