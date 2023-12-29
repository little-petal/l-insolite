import { ItemForm } from '@/components/dashboard/ItemForm';
import Header from '@/components/dashboard/Header';
import { WriteItem } from '@/types/WriteItem';
import { createOneItem } from '@/lib/prisma';

export default async function Create() {
  const createItem = async (item: WriteItem) => {
    'use server'

    await createOneItem(item);
  }
  

  return (
    <main>
      <Header/>
        <div className="bg-green-300 p-5">
          <ItemForm item={null} onSubmit={createItem}/>
        </div>
    </main>
  )
}
