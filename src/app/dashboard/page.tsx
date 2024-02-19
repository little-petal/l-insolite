import { searchAllItems } from '../../lib/prisma';
import { Header } from '@/components/dashboard/Header';
import Link from 'next/link';
import { unstable_noStore as noStore } from 'next/cache';

export default async function Dashboard() {
  noStore();
  let items = await searchAllItems();
  
  return (
    <main className='bg-emerald-light min-h-screen'>
      <Header isMainPage={true} isRegister={false}/>
      <div className='flex p-6'>
        <Link 
          className="bg-orange-200 border border-orange-600 p-6"
          href={'/dashboard/create'}
          >Créer un article
        </Link>
      </div>
      <div className='p-5'>
        <div className="flex flex-col">
            {items?.sort((a, b) => (Number(a.createdAt) - Number(b.createdAt)))?.map((item) => (
            <div
              key={item.title}
              className="w-full flex flex-row justify-between m-2 bg-emerald-medium"
            >
              <p className="flex justify-start p-2 self-center">{item.title}</p>
              <div className="flex flex-row p-1 space-x-2">
                <Link 
                  className="bg-orange-200 border border-orange-600 p-4"
                  href={'/dashboard/'+ item.id +'/update'}
                  >Modifier
                </Link>
                <Link 
                  className="bg-orange-200 border border-orange-600 p-4"
                  href={'/dashboard/'+ item.id +'/delete'}
                  >Supprimer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
