import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ItemsSection } from '@/components/ItemsSection';
import { searchItemsToDisplay } from '@/lib/prisma';
import { unstable_noStore as noStore } from 'next/cache';

export default async function Home() {
  noStore();
  let items = await searchItemsToDisplay();

  return (
    <main className='bg-sable'>
      <section id="nav-landing-page" className='h-screen bg-cover bg-center bg-no-repeat bg-landing-page-sm md:bg-landing-page-md flex flex-col snap-always snap-start'>
        <Header isMainPage={true}/>
        <div className="flex justify-center md:justify-start space-x-1">
          <div className='flex absolute md:left-16 bottom-16'>
            <a className="flex text-sable" href="#nav-products">
              <i className="fa-sharp fa-solid fa-angle-down fa-fade fa-xl md:fa-2xl">Voir nos articles</i>
            </a>
          </div>
        </div>
      </section>
      <section id="nav-products">
        <ItemsSection items={items.sort((a, b) => (Number(b.createdAt) - Number(a.createdAt)))}/>
      </section>
      <section id="nav-footer" className="bg-stone-dark relative h-screen snap-always snap-end flex flex-col">
        <p className="flex justify-center text-4xl sm:text-5xl lg:text-6xl font-georgia p-6">Qui sommes-nous ?</p>
        <div className="flex flex-wrap justify-center items-center md:flex-row h-full w-full">
          <div className="lg:basis-1/3 font-georgia flex flex-col justify-center p-6">
            <p className='flex justify-center text-md sm:text-xl lg:text-2xl'>Boutique l&lsquo;Insolite</p>
            <p className='flex justify-center text-md sm:text-xl lg:text-2xl'>JukeBox - Flipper - Antiquités - Objets insolites</p>
            <p className='flex justify-center text-md sm:text-xl lg:text-2xl'>Achat et vente - Rénovation</p>
          </div>
          <div className="lg:basis-2/3 flex justify-center">
            <img className="object-cover" src="/assets/images/about-us.jpg" alt="" />
          </div>
        </div>
        <Footer/>
      </section>
    </main>
  )
}
