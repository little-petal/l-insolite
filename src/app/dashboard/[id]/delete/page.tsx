import { Button } from '@/components/Button';
import Header from '@/components/dashboard/Header';
import { deleteOneItem } from '@/lib/prisma';
import Link from 'next/link';

interface Props {
  params: any;
}

export default async function Delete({params }: Props) {
  const deleteItem = async () => {
    'use server'

    await deleteOneItem(parseInt(params.id));
  }

  return (
    <main>
      <Header/>
        <div className="flex flex-col bg-green-300 p-5">
          <p className='flex justify-center'>Voulez-vous vraiment supprimer cette article définitivement ?</p>
          <div className='flex flex-row justify-center space-x-2'>
            <Button className="bg-sky-500 p-4" onClick={deleteItem}>Oui</Button>
            <Link className="bg-sky-500 p-4" href={'/dashboard'}>Non</Link>
          </div>
        </div>
    </main>
  )
}