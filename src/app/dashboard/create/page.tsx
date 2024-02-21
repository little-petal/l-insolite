import { ItemForm } from '@/components/dashboard/ItemForm';
import { Header } from '@/components/dashboard/Header';
import { WriteItem } from '@/types/WriteItem';
import { createOneItem } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default async function Create() {
  const createItem = async (item: WriteItem) => {
    'use server'

    try {
      await createOneItem(item);
    } catch (e) {
      console.error("Creation failed", e);
    } finally {
      redirect('/dashboard');
    }
  }
  
  return (
    <main className='bg-emerald-light min-h-screen'>
      <Header isMainPage={false} isRegister={false}/>
      <div className="p-5">
        <ItemForm item={null} onSubmit={createItem} isCreation={true}/>
      </div>
    </main>
  )
}
