import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ItemsSection } from '@/components/ItemsSection';
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
      <ItemsSection items={items}/>
      <section id="nav-about-us" className='snap-start'>
      <Footer/>
      </section>
    </main>
  )
}
