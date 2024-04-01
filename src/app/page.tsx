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
        <p className="flex justify-center text-center text-4xl sm:text-5xl lg:text-6xl font-cambria p-6">Qui sommes-nous ?</p>
        <div className="flex flex-1 justify-center items-center flex-col xl:flex-row h-full w-full">
          <div className="font-inter flex xl:basis-1/2 justify-end p-4 sm:p-4 sm:p-2 md:p-8">
            <div className='flex justify-center text-justify md:text-center xl:text-end font-medium flex-col font-georgia text-xl sm:text-xl xl:text-2xl 2xl:text-3xl w-full sm:w-[500px] md:w-full xl:w-[550px] 2xl:w-[650px]'>
              <p className='text-gray-900 py-1 sm:py-2'>Martial, bientôt 40ans, je suis né dans une famille de collectionneurs, où le virus s&lsquo;est transmis.</p>
              <p className='text-gray-800 py-0 sm:py-1'>J&lsquo;aime chiner, j&lsquo;ai le sens du contact et je suis toujours ouvert à la discussion.</p>
              <p className='text-gray-800 py-0 sm:py-1'>Je parcours brocantes et nouveaux lieux à la recherche d&lsquo;objets originaux.</p>
              <p className='text-gray-700 py-1 sm:py-2'>Visitez les pages du site à la recherche de votre objet coup de cœur !</p>
            </div>
          </div>
          <div className="flex xl:basis-1/2 justify-center xl:justify-start w-full sm:w-[500px] md:w-full p-4 sm:p-0 py-0 sm:pb-4">
            <img className="object-cover md:rounded-lg" src="/assets/images/about-us.jpg" alt="" />
          </div>
        </div>
        <Footer/>
      </section>
    </main>
  )
}
