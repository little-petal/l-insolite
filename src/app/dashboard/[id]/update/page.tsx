import { ItemForm } from '@/components/dashboard/ItemForm';
import Header from '@/components/dashboard/Header';
import { searchOneItem, updateOneItem } from '@/lib/prisma';
import { WriteItem } from '@/types/WriteItem';

interface Props {
  params: any;
}

export default async function Update({params }: Props) {
  const item = await searchOneItem(parseInt(params.id));

  const updateItem = async (item: WriteItem) => {
    'use server'

    await updateOneItem(parseInt(params.id), item);
  }

  return (
    <main>
      <Header/>
        <div className="bg-green-300 p-5">
          <ItemForm item={item} onSubmit={updateItem}/>
        </div>
    </main>
  )
}
