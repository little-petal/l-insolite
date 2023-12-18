import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ItemDisplay } from '@/components/ItemDisplay'
import { searchAllItems } from '../lib/prisma';

export default async function Home() {

  const items = await searchAllItems();

  return (
    <main className='bg-red-800'>
      <Header>L&lsquo;insolite</Header>
      <div className="flex justify-start space-x-1 h-screen bg-cover bg-center bg-no-repeat bg-landing-page">
        <div className='flex absolute bottom-16'>
          <a className="flex text-amber-50" href="#nav-products">
            v Voir nos articles
          </a>
        </div>
      </div>
      <section id="nav-products">
        <div className='container mx-auto p-6'>
          <p className='text-6xl'>Nos articles</p>
          <div className="flex flex-wrap">
            {items?.map((item) => 
                <div key={item.title} className="p-3 min-h-50 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4">
                    <ItemDisplay title={item.title} description={item.description} price={item.price} type={item.type} images={item.images}/>
                </div>
            )}
          </div>  
        </div>
      </section>
      <Footer/>
    </main>
  )
}
