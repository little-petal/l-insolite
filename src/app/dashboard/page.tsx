import { searchAllItems } from '../../lib/prisma';
import Header from '@/components/dashboard/Header';
import Link from 'next/link';

export default async function Dashboard() {

  const items = await searchAllItems();
  console.log("ITEMS DASHBOARD :" + items)
  
  return (
    <main>
      <Header/>
      <div className='flex p-6'>
        <Link 
          className="bg-sky-500 p-6"
          href={'/dashboard/create'}
          >Créer un article
        </Link>
      </div>
      <div className='h-screen bg-yellow-300 p-5'>
        <div className="flex flex-col">
            {items?.map((item) => (
            <div
              key={item.title}
              className="w-full flex flex-row justify-between m-2 bg-green-700"
            >
              <p className="flex justify-start self-center">{item.title}</p>
              <div className="flex flex-row space-x-2">
                <Link 
                  className="bg-sky-500 p-4"
                  href={'/dashboard/'+ item.id +'/update'}
                  >Modifier
                </Link>
                <Link 
                  className="bg-sky-500 p-4"
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
