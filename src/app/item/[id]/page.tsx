import { Header } from '@/components/Header'
import { Content } from '@/components/item/Content';
import { searchOneItem } from '@/lib/prisma';
import { unstable_noStore as noStore } from 'next/cache';

interface Props {
  params: any;
}

export default async function Item({params }: Props) {
  noStore();
  const item = await searchOneItem(parseInt(params.id));

  return (
    <main className='bg-sable'>
      <section>
        <div className='flex flex-col min-h-svh relative'>
          <Header isMainPage={false}/>
          <Content item={item}/>
          <div className='bg-stone-dark p-3 w-full fixed bottom-0'></div>
        </div>
      </section>
    </main>
  )
}
