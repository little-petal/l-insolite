import { Tooltip } from "@material-tailwind/react";

interface Props {
    type: "ALL" | "TABLEAU" | "LUMINAIRE" | "CHAISE" | "MOBILIER" | "ELECTRONIQUE" | "JEUX" | "MIROIR" | "DIVERS" | "FABRICATION"
    filter: any
}

export const Filter = ({type, filter}: Props) => {
  const name = type == "ALL" ? "Tous les articles" : type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

  return  (
    <Tooltip className="hidden sm:block bg-stone-light px-4 py-3 text-black text-lg" content={name}>
      <button className='hover:bg-stone-medium/60 p-2 sm:p-3' onClick={() => filter(type)} >
        <img 
          className="w-8 h-8 md:w-10 md:h-10" 
          src={"/assets/icons/" + type.toLowerCase() + ".png"} 
          alt={"2"+name}
        />
      </button>
    </Tooltip>
  )
}
