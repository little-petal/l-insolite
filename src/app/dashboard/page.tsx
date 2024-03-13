import { Content } from '@/components/dashboard/Content';
import { searchAllItems } from '../../lib/prisma';
import { Header } from '@/components/dashboard/Header';
import { unstable_noStore as noStore } from 'next/cache';

export default async function Dashboard() {
  noStore();
  let items = await searchAllItems();

  return (
    <main className='bg-emerald-light min-h-screen'>
      <Header isMainPage={true} isRegister={false}/>
      <Content items={items?.sort((a, b) => (Number(a.createdAt) - Number(b.createdAt)))}/>
    </main>
  )
}
