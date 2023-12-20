import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ItemDisplay } from '@/components/ItemDisplay'
import { searchAllItems } from '../lib/prisma';

export default async function Home() {

  const items = await searchAllItems();

  return (
    <main className='bg-amber-50'>
      <section id="nav-landing-page" className='h-screen bg-cover bg-center bg-no-repeat bg-landing-page-sm md:bg-landing-page-md flex flex-col snap-start'>
        <Header>L&lsquo;insolite</Header>
        <div className="flex justify-center md:justify-start space-x-1">
          <div className='flex absolute md:left-16 bottom-16'>
            <a className="flex text-stone-300" href="#nav-products">
              <i className="fa-sharp fa-solid fa-angle-down fa-fade fa-xl md:fa-2xl">Voir nos articles</i>
            </a>
          </div>
        </div>
      </section>
      <section id="nav-products" className='xl:h-screen snap-start snap-stop'>
        <div className='container mx-auto p-6'>
          <p className='text-5xl lg:text-6xl font-georgia'>Nos articles</p>
          <div className="flex flex-wrap">
            {items?.map((item) => 
                <div key={item.title} className="p-3 min-h-50 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4">
                    <ItemDisplay title={item.title} description={item.description} price={item.price} type={item.type} images={item.images}/>
                </div>
            )}
          </div>  
        </div>
        <div bg-sky-500></div>
      </section>
      <section id="nav-about-us" className='snap-start'>
      <Footer/>
      </section>
    </main>
  )
}
