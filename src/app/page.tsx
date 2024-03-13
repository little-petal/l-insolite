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
      <section id="nav-footer" className="bg-stone-dark relative min-h-screen snap-always snap-end flex flex-col">
        <p className="flex justify-center text-4xl sm:text-5xl lg:text-6xl font-georgia p-6">Qui sommes-nous ?</p>
        <div className="flex flex-1 justify-center items-center flex-col xl:flex-row h-full w-full">
          <div className="font-georgia flex flex-col xl:basis-1/2 justify-center p-6 sm:p-8 md:p-12">
            <p className='flex justify-center text-center text-lg sm:text-xl lg:text-2xl'>Martial, bientôt 40ans, je suis né dans une famille de collectionneurs, où le virus s&lsquo;est transmis.</p>
            <p className='flex justify-center text-center text-lg sm:text-xl lg:text-2xl'>J&lsquo;aime chiner, j&lsquo;ai le sens du contact et je suis toujours ouvert à la discussion.</p>
            <p className='flex justify-center text-center text-lg sm:text-xl lg:text-2xl'>Je parcours brocantes et nouveaux lieux à la recherche d&lsquo;objets originaux.</p>
            <p className='flex justify-center text-center text-lg sm:text-xl lg:text-2xl'>Visitez les pages du site à la recherche de votre objet coup de cœur!</p>
          </div>
          <div className="flex xl:basis-1/2 justify-center">
            <img className="object-cover" src="/assets/images/about-us.jpg" alt="" />
          </div>
        </div>
        <Footer/>
      </section>
    </main>
  )
}
