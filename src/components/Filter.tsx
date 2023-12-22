interface Props {
    type: "ALL" | "ASSISE" | "LUMINAIRE" | "MOBILIER" | "RADIO" | "VAISSELLE" | "HORLOGE" | "MIROIR" | "DIVERS" | "FABRICATION"
    filter: any
}

export const Filter = ({type, filter}: Props) => {
    const name = type.toLowerCase();

    return  (
        <button className='hover:bg-stone-400/70 p-2 sm:p-3' title={name.charAt(0).toUpperCase() + name.slice(1)} onClick={() => filter(type)} >
            <img 
                className="w-8 h-8 md:w-10 md:h-10" 
                src={"/assets/icons/"+name+".png"} 
                alt={name.charAt(0).toUpperCase() + name.slice(1)}
            />
        </button>
    )
}
