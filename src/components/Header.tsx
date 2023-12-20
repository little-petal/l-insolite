import { SocialNetwork } from "./SocialNetwork"

interface Props {
    children: React.ReactNode
}

export const Header = ({children}: Props) => {
    return  (
        <div className="flex flex-row relative bg-red-900">
            <div className="basis-1/2 md:basis-1/4 p-5">
                <h2>L&lsquo;INSOLITE</h2>
                <h4>Mobilier vintage et objets insolites</h4>
                <h4>07 97 51 17 99</h4>
            </div>
            <div className="invisible md:visible basis-0 md:basis-1/2 flex justify-center">
                <img className="relative w-full max-w-lg absolute -bottom-16" src="/assets/images/logo.jpg" alt="" />
            </div>
            <div className="basis-1/2 md:basis-1/4 flex justify-end space-x-1 p-5">
                <SocialNetwork src="facebook" link="https://facebook.com"/>
                <SocialNetwork src="instagram" link="https://instagram.com"/>
                <SocialNetwork src="email" link=""/>
            </div>
        </div>
    )
}