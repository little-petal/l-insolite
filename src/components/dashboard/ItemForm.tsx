'use client'

import { Item, Prisma, Type } from "@prisma/client";
import { WriteItem } from "@/types/WriteItem";
import { useState } from "react";
import { ErrorDialog } from "./ErrorDialog";
import { Help } from "./Help";
import { Spinner } from "@material-tailwind/react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

interface Props {
  item: Item | null;
  onSubmit: any;
  isCreation: boolean;
}

export const ItemForm = ({ item, onSubmit, isCreation }: Props) => {
  const [message, setMessage] = useState<string | null>(null);
  const [files, setFiles] = useState<File[] | null>();
  const [openError, setOpenError] = useState(false);
  const [error, setError] = useState("");
  const [inProcess, setInProcess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

        
    try {
      setInProcess(true);

      const formData = new FormData(e.target);

      if (files)
      {
        if (!isCreation && item)
        {
          const dataToDelete = new FormData()
          for (const fileName of item.images) {
            dataToDelete.append('fileNames', fileName);
          };
          const del = await fetch('/api/upload', {
            method: 'DELETE',
            body: dataToDelete
          });
          // Handle the error
          if (!del.ok) throw new Error("DELETE API UPLOAD : " + await del.text())
        }
        
        const data = new FormData();

        for (const file of files) {
          data.append('files', file);
        }

        const post = await fetch('/api/upload', {
          method: 'POST',
          body: data
        });
        // Handle the error
        if (!post.ok) throw new Error("POST API UPLOAD : " + await post.text())

        const response: { fileNames: string[] } = await post.json();
        onSubmit(convertFormDataToWriteItem(formData, response.fileNames));

      } else {
        onSubmit(convertFormDataToWriteItem(formData, item?.images ?? [""]));
      }
      setMessage(isCreation ? "L'article a bien été créé." : "L'article a bien été modifié.")
    } catch (e: any) {
      setError(e.toString());
      setOpenError(true);
      setInProcess(false);
    } finally {
      setInProcess(false);
    }
  }

  function convertFormDataToWriteItem(formData: FormData, filenames : string[]): WriteItem {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string | null;
    const price = new Prisma.Decimal(parseFloat(formData.get('price') as string));
    const type = formData.get('type') as Type;
    const published = formData.get('published') === 'on';
    const images = filenames;

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

  function handleOnDragEnd(result: DropResult): void {
    if (!files || !result.destination) {
      return;
    }

    const reorderedFiles = reorder(
      files,
      result.source.index,
      result.destination.index
    );

    setFiles(reorderedFiles);
  }

  const reorder = (list: File[], startIndex: number, endIndex: number): File[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (
    <>
      <ErrorDialog openError={openError} handleOpenError={() => setOpenError(!openError)} error={error} />
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
        <div className="flex flex-col space-x-3">
          <div className="flex flex-row space-x-3">
            <p>Importer une image :</p>
            <Help>Les images doivent être dans l&apos;idéal en format 4/3 et portrait. La taille de l&apos;ensemble des images ne peut pas dépasser 75Mo.</Help>
          </div>
          <div className="flex flex-wrap flex-row p-3">
            {item?.images.map((image, index) => (
              <img key={index} className="m-2 object-cover h-40 w-32 sm:h-80 sm:w-60" src={"/uploads/" + image ?? "assets/images/image-not-found.jpg"} alt="" />
            ))}
          </div>
          <label className="flex flex-row space-x-3">
            <input type="file" name="file" accept="image/*" multiple onChange={(e) => setFiles(e.target.files ? Array.from(e.target.files) : null)} required={isCreation} />
          </label>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
              {(provided) => (
                <div className="flex flex-row flex-wrap" ref={provided.innerRef} {...provided.droppableProps}>
                  {files && files.map((file, index) => (
                    <Draggable key={"draggable-" + index} draggableId={"draggable-" + index} index={index}>
                      {(provided) => (
                        <div className={"draggable-" + index} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <img className="m-2 object-cover h-40 w-32 sm:h-80 sm:w-60" src={URL.createObjectURL(file)} alt="" />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="flex flex-row space-x-3">
          <button className="bg-orange-200 border border-orange-600 p-4" type="submit">Enregistrer l&lsquo;article</button>
          {inProcess && (
            <Spinner className="h-10 w-10" />
          )}
        </div>
      </form>
      {message && (
        <div>{message}</div>
      )}
    </>
    );
}
