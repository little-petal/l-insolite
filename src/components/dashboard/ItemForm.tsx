"use client";

import { Item, Prisma, Type } from "@prisma/client";
import { WriteItem } from "@/types/WriteItem";

interface Props {
  item: Item | null;
  onSubmit: any;
}

export const ItemForm = ({ item, onSubmit }: Props) => {

  function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);
    onSubmit(convertFormDataToWriteItem(formData));
  }

  function convertFormDataToWriteItem(formData: FormData): WriteItem {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string | null;
    const price = new Prisma.Decimal(parseFloat(formData.get('price') as string));
    const type = formData.get('type') as Type;
    const published = formData.get('published') === 'on';
    const images = item?.images || [];
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
    <form className="flex flex-col space-y-3" method="post" onSubmit={handleSubmit}>
      <label className="flex flex-col">
        Titre de l'article: <input type="text" name="title" defaultValue={item?.title}/>
      </label>
      <label className="flex flex-col">
        Description de l'article: <input type="text" name="description" defaultValue={item?.description ?? ""}/>
      </label>
      <label className="flex flex-col">
        Prix de l'article: <input type="number" name="price" defaultValue={item?.price?.toString()}/>
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
           <input type="checkbox" name="published" defaultChecked={item?.published} />
        </label>
      </div>
      <button className="bg-sky-500 p-4" type="submit">Enregistrer l'article</button>
    </form>
    )
}
