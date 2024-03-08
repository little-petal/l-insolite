import Link from "next/link"

export const Information = () => {
    return  (
      <>
        <Link className="text-xl text-sable lg:text-2xl" href={'/'}>L&lsquo;INSOLITE</Link>
        <p className='text-sm text-sable lg:text-base'>Mobilier vintage et objets insolites</p>
        <p className='text-sm text-sable lg:text-base'>+41 7 97 51 17 99</p>
      </>
    )
}