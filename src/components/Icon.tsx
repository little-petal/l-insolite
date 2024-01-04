interface Props {
    src: "facebook" | "instagram" | "email" | "go-top" | "go-down";
    link?: string;
    alt?: string
}

export const Icon = ({src, link, alt}: Props) => {
    return (
        <button>
            <a href={link}><img className="w-10 h-10" src={"/assets/icons/"+src+".png"} alt={alt ? alt : src.charAt(0).toUpperCase() + src.slice(1)} /></a>
        </button>
    )
}