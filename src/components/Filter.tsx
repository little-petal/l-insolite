interface Props {
    type: "ASSISE" | "LUMINAIRE" | "MOBILIER" | "RADIO" | "VAISSELLE" | "HORLOGE" | "MIROIR" | "DIVERS" | "FABRICATION"
    filter: any
}

export const Filter = ({type, filter}: Props) => {
    const name = type.toLowerCase();

    return  (
        <button className='hover:bg-green-600 p-3' title={name.charAt(0).toUpperCase() + name.slice(1)} onClick={() => filter(type)} >
            <img 
                className="w-10 h-10" 
                src={"/assets/icons/"+name+".png"} 
                alt={name.charAt(0).toUpperCase() + name.slice(1)}
            />
        </button>
    )
}
