export default async function Header() {
  return (
      <div className="flex flex-row bg-sky-800">
        <div className="basis-4/5 flex justify-start self-center p-5">
          <p className='text-2xl lg:text-3xl'>L&lsquo;insolite - Tableau de bord</p>
        </div>
        <div className="basis-1/5 flex justify-end self-center p-5">
          <button>
            <a href={"/"}><img className="w-10 h-10" src={"/assets/icons/logout.png"} alt="Déconnexion" /></a>
          </button>
        </div>
      </div>
  )
}
