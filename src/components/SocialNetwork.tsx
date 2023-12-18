interface Props {
    src: "facebook" | "instagram" | "email";
    link?: string;
}

export const SocialNetwork = ({src, link}: Props) => {
    return (
        <button>
            <a href={link}><img className="w-10 h-10" src={"/assets/icons/"+src+"-icon.png"} alt={src.toUpperCase()} /></a>
        </button>
    )
}