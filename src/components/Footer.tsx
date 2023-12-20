import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/20/solid"

export const Footer = () => {
    return  (
        <div className="flex flex-row relative p-5 bg-red-800">
            <div className="basis-1/2 md:basis-1/4">
            <h2>L&lsquo;INSOLITE</h2>
                <h4>Mobilier vintage et objets insolites</h4>
                <h4>07 97 51 17 99</h4>
            </div>
            <div className="basis-0 md:basis-1/2 flex justify-center"></div>
            <div className="basis-1/2 md:basis-1/4 flex justify-end space-x-1">
                <Link
                href="/login"
                className="flex items-center gap-5 self-start rounded-lg bg-stone-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-blue-400 md:text-base"
                >
                    <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
                </Link>
            </div>
         
        </div>
    )
}