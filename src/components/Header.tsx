import { Information } from "./Information"
import { Icon } from "./Icon"

interface Props {
    children: React.ReactNode
}

export const Header = ({children}: Props) => {
    return  (
        <div className="flex flex-row relative bg-red-900">
            <div className="basis-1/2 md:basis-1/4 p-5 font-georgia md:font-inter">
              <Information/>
            </div>
            <div className="invisible md:visible basis-0 md:basis-1/2 flex justify-center">
                <img className="relative w-full max-w-lg absolute -bottom-16" src="/assets/images/logo.jpg" alt="" />
            </div>
            <div className="basis-1/2 md:basis-1/4 flex justify-end space-x-1 p-5">
                <Icon src="facebook" link="https://www.facebook.com/bmcreation.ch/?locale=fr_FR"/>
                <Icon src="email" link=""/>
                <Icon src="go-down" link="#nav-footer"/>
            </div>
        </div>
    )
}