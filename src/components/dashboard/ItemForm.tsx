"use client";

import { Item, Prisma, Type } from "@prisma/client";
import { WriteItem } from "@/types/WriteItem";
import { useRef, useState } from "react";
import { PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";

interface Props {
  item: Item | null;
  onSubmit: any;
  isCreation: boolean;
}

export const ItemForm = ({ item, onSubmit, isCreation }: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  
  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (!inputFileRef.current?.files) {
      throw new Error('No file selected');
    }

    const file = inputFileRef.current.files[0];

    if (file)
    {
      const newBlob = await upload(file.name, file, {
        access: 'public',
        handleUploadUrl: '/api/dashboard',
      });
  
      setBlob(newBlob);
      
      onSubmit(convertFormDataToWriteItem(formData, newBlob.url));
      
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
            <label><input type="radio" name="type" value="ASSISE" defaultChecked={item?.type == "ASSISE"} /> Assise</label>
            <label><input type="radio" name="type" value="LUMINAIRE" defaultChecked={item?.type == "LUMINAIRE"} /> Luminaire</label>
            <label><input type="radio" name="type" value="MOBILIER" defaultChecked={item?.type == "MOBILIER"} /> Mobilier</label>
            <label><input type="radio" name="type" value="RADIO" defaultChecked={item?.type == "RADIO"} /> Radio</label>
            <label><input type="radio" name="type" value="VAISSELLE" defaultChecked={item?.type == "VAISSELLE"} /> Vaiselle</label>
            <label><input type="radio" name="type" value="HORLOGE" defaultChecked={item?.type == "HORLOGE"} /> Horloge</label>
            <label><input type="radio" name="type" value="MIROIR" defaultChecked={item?.type == "MIROIR"} /> Miroir</label>
            <label><input type="radio" name="type" value="DIVERS" defaultChecked={item?.type == "DIVERS"} /> Divers</label>
            <label><input type="radio" name="type" value="FABRICATION" defaultChecked={item?.type == "FABRICATION"} /> Fabrication</label>
          </div>
        </div>
        <div className="flex flex-row space-x-3">
          <p>Publier ?</p>
          <label className="flex flex-row space-x-3">
            <input type="checkbox" name="published" defaultChecked={item?.published} required={isCreation}/>
          </label>
        </div>
        <div className="flex flex-row space-x-3">
          <p>Importer une image :</p>
          <div className="p-3 min-h-50 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4">
            <img className="object-cover sm:h-48 sm:w-48" src={item?.images[0]} alt="" />
          </div>
          <label className="flex flex-row space-x-3">
            <input name="file" ref={inputFileRef} type="file" required={isCreation}/>
          </label>
        </div>
        <button className="bg-orange-200 border border-orange-600 p-4" type="submit">Enregistrer l&lsquo;article</button>
      </form>
      {message && (
        <div>{message}</div>
      )}
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
    );
}
