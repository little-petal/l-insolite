'use client'

import { Item, Prisma, Type } from "@prisma/client";
import { WriteItem } from "@/types/WriteItem";
import { useState } from "react";

interface Props {
  item: Item | null;
  onSubmit: any;
  isCreation: boolean;
}

export const ItemForm = ({ item, onSubmit, isCreation }: Props) => {
  const [message, setMessage] = useState<string | null>(null);
  const [file, setFile] = useState<File>();

  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (file)
    {
      try {
        const data = new FormData();
        data.set('file', file);
  
        const post = await fetch('/api/upload', {
          method: 'POST',
          body: data
        });
  
        const response: { fileName: string } = await post.json();
  
        onSubmit(convertFormDataToWriteItem(formData, response.fileName));

        if (!isCreation)
        {
          await fetch('/api/upload', {
            method: 'DELETE',
            body: JSON.stringify({ fileName: item?.images[0] }),
          });
        }

        // Handle the error
        if (!post.ok) throw new Error(await post.text())
      } catch (e: any) {
        // Handle the error here
        console.error(e);
      }
    } else {
      onSubmit(convertFormDataToWriteItem(formData, item?.images[0] ?? ""));
    }
    setMessage(isCreation ? "L'article a bien été créé." : "L'article a bien été modifié.")
  }

  function convertFormDataToWriteItem(formData: FormData, filename : string): WriteItem {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string | null;
    const price = new Prisma.Decimal(parseFloat(formData.get('price') as string));
    const type = formData.get('type') as Type;
    const published = formData.get('published') === 'on';
    const images = [ filename ];
    // const images = (formData.getAll('images') as string[]).filter(Boolean);

    const writeItem: WriteItem = {
      title,
      description,
      price,
      type,
      published,
      images,
    };
  
    return writeItem;
  }

  return (
    <>
      <form className="flex flex-col space-y-3" method="post" onSubmit={handleSubmit}>
        <label className="flex flex-col">
          Titre de l&lsquo;article: <input type="text" name="title" defaultValue={item?.title} required={isCreation}/>
        </label>
        <label className="flex flex-col">
          Description de l&lsquo;article: <input type="text" name="description" defaultValue={item?.description ?? ""} required={isCreation}/>
        </label>
        <label className="flex flex-col">
          Prix de l&lsquo;article: <input type="number" name="price" defaultValue={item?.price?.toString()} required={isCreation}/>
        </label>
        <div className="flex flex-row space-x-3">
          <p>Type:</p>
          <div className="flex flex-col space-y-3">
            <label><input type="radio" name="type" value="TABLEAU" defaultChecked={item?.type == "TABLEAU"} /> Tableau</label>
            <label><input type="radio" name="type" value="LUMINAIRE" defaultChecked={item?.type == "LUMINAIRE"} /> Luminaire</label>
            <label><input type="radio" name="type" value="CHAISE" defaultChecked={item?.type == "CHAISE"} /> Chaise</label>
            <label><input type="radio" name="type" value="MOBILIER" defaultChecked={item?.type == "MOBILIER"} /> Mobilier</label>
            <label><input type="radio" name="type" value="ELECTRONIQUE" defaultChecked={item?.type == "ELECTRONIQUE"} /> Electronique</label>
            <label><input type="radio" name="type" value="JEUX" defaultChecked={item?.type == "JEUX"} /> Jeux</label>
            <label><input type="radio" name="type" value="MIROIR" defaultChecked={item?.type == "MIROIR"} /> Miroir</label>
            <label><input type="radio" name="type" value="DIVERS" defaultChecked={item?.type == "DIVERS"} /> Divers</label>
            <label><input type="radio" name="type" value="FABRICATION" defaultChecked={item?.type == "FABRICATION"} /> Fabrication</label>
          </div>
        </div>
        <div className="flex flex-row space-x-3">
          <p>Publier ?</p>
          <label className="flex flex-row space-x-3">
            <input type="checkbox" name="published" defaultChecked={item?.published} />
          </label>
        </div>
        <div className="flex flex-col md:flex-row space-x-3">
          <p>Importer une image :</p>
          <div className="p-3 min-h-50 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4">
            <img className="object-cover h-24 w-24 sm:h-48 sm:w-48" src={"/uploads/" + item?.images[0]} alt="" />
          </div>
          <label className="flex flex-row space-x-3">
            {/* <input name="file" ref={inputFileRef} type="file" required={isCreation}/> */}
            <input type="file" name="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0])} required={isCreation} />
          </label>
        </div>
        <button className="bg-orange-200 border border-orange-600 p-4" type="submit">Enregistrer l&lsquo;article</button>
      </form>
      {message && (
        <div>{message}</div>
      )}
    </>
    );
}
