import { Button } from '@/components/Button';
import { Header } from '@/components/dashboard/Header';
import { deleteOneItem, searchOneItem } from '@/lib/prisma';
import { headers } from "next/headers";
import Link from 'next/link';

interface Props {
  params: any;
}

export default async function Delete({ params }: Props) {
  const deleteItem = async () => {
    'use server'

    const item = await searchOneItem(parseInt(params.id));
  
    const host = headers().get("host");

    await fetch(`http://${host}/api/upload`, {
      method: 'DELETE',
      body: JSON.stringify({ fileName: item?.images[0] }),
    }); 
  
    await deleteOneItem(parseInt(params.id));
  }

  return (
    <main>
      <Header isMainPage={false}/>
      <div className="flex flex-col h-screen bg-emerald-light p-5">
        <p className='flex justify-center'>Voulez-vous vraiment supprimer cette article définitivement ?</p>
        <div className='flex flex-row justify-center space-x-2'>
          <Button className="bg-orange-200 border border-orange-600 p-4" onClick={deleteItem}>Oui</Button>
          <Link className="bg-orange-200 border border-orange-600 p-4" href={'/dashboard'}>Non</Link>
        </div>
      </div>
    </main>
  )
}