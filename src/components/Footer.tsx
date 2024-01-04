import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/20/solid"
import { Information } from "./Information"
import { Icon } from "./Icon"

export const Footer = () => {
    return  (
        <div className="flex flex-row bottom-0 left-0 right-0 p-5 bg-red-800">
            <div className="basis-1/2 md:basis-1/4 font-georgia md:font-inter">
              <Information/>
            </div>
            <div className="invisible md:visible basis-0 md:basis-1/2 flex justify-center flex item-stretch">
                <a className="self-end text-xs" href="https://www.flaticon.com/free-icons" title="lamp icons">Icons created by Freepik - Flaticon</a>
            </div>
            <div className="basis-1/2 md:basis-1/4 flex justify-end space-x-1 items-center">
                <Link href="/dashboard">
                  <img className="w-10 h-10" src={"/assets/icons/login.png"} alt="Connexion" />
                </Link>
                <Icon src="go-top" link="#nav-landing-page"/>
            </div>
        </div>
    )
}