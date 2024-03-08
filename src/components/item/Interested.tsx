'use client'

import clsx from "clsx";

interface Props {
  className: string;
}

export const Interested = ({ className }: Props) => {
  return (
    <div className={clsx("flex flex-1 place-content-center p-6 box-border border-stone-dark border-4 bg-stone-medium rounded-lg", className)}>
      <div className="flex flex-col w-full space-y-8 justify-self-center">
        <p className="text-black text-center text-2xl">Intéressé(e) par l&apos;article ? Vous pouvez me contacter !</p>
        <div className="flex flex-col place-content-center space-y-2">
          <div className="flex flex-row space-x-4 place-content-center">
            <img
              src="/assets/icons/appel-black.png"
              alt="Téléphone"
              className="object-scale-down w-[40px]" /> 
            <p className="self-center text-black text-xl md:text-2xl font-inter">+41 7 97 51 17 99</p>
          </div>
          <div className="flex flex-row space-x-4 place-content-center">
            <img
              src="/assets/icons/email-black.png"
              alt="E-mail"
              className="object-scale-down w-[40px]" /> 
            <p className="self-center text-black text-xl md:text-2xl font-inter">mathurinmalin@gmail.com</p>
          </div>
        </div>
      </div>
    </div> 
  )
}