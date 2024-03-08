import Link from "next/link"
import { Information } from "./Information"
import { Icon } from "./Icon"

export const Footer = () => {
    return  (
        <div className="flex flex-row bottom-0 left-0 right-0 p-5 bg-red-900">
            <div className="basis-1/2 md:basis-1/4 font-georgia md:font-inter">
              <Information/>
            </div>
            <div className="invisible md:visible basis-0 md:basis-1/2 flex justify-center flex item-stretch">
            </div>
            <div className="basis-1/2 md:basis-1/4 flex justify-end space-x-1 items-center">
                <Link href="/register">
                  <img className="w-10 h-10" src={"/assets/icons/login.png"} alt="Connexion" />
                </Link>
                <Icon src="go-top" link="#nav-landing-page"/>
            </div>
        </div>
    )
}