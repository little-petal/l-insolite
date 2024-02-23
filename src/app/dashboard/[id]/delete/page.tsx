import { Button } from '@/components/Button';
import { Header } from '@/components/dashboard/Header';
import { deleteOneItem, searchOneItem } from '@/lib/prisma';
import { headers } from "next/headers";
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface Props {
  params: any;
}

export default async function Delete({ params }: Props) {
  const deleteItem = async () => {
    'use server'

    try {
      const item = await searchOneItem(parseInt(params.id));

      const dataToDelete = new FormData()
      for (const fileName of item.images) {
        dataToDelete.append('fileNames', fileName);
      };

      const host = headers().get("host");
      await fetch(`http://${host}/api/upload`, {
        method: 'DELETE',
        body: dataToDelete
      }); 

      await deleteOneItem(parseInt(params.id));
    } catch (e) {
      console.error("Delete failed", e);
    } finally {
      redirect('/dashboard');
    }
  }

  return (
    <main className='bg-emerald-light min-h-screen'>
      <Header isMainPage={false} isRegister={false}/>
      <div className="flex flex-col p-5">
        <p className='flex justify-center'>Voulez-vous vraiment supprimer cette article définitivement ?</p>
        <div className='flex flex-row justify-center space-x-2'>
          <Button className="bg-orange-200 border border-orange-600 p-4" onClick={deleteItem}>Oui</Button>
          <Link className="bg-orange-200 border border-orange-600 p-4" href={'/dashboard'}>Non</Link>
        </div>
      </div>
    </main>
  )
}