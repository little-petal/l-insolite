interface Props {
  isMainPage: boolean;
  isRegister: boolean;
}

export const Header = ({ isMainPage, isRegister }: Props) => {
  return (
      <div className="flex flex-row bg-emerald-dark">
        <div className="flex justify-start self-center w-1/6 sm:w-1/5 p-3 sm:p-5">
          {!isMainPage &&
            <button>
              <a href={"/dashboard"}><img className="w-10 h-10" src={"/assets/icons/undo.png"} alt="Retour" /></a>
            </button>
          }
        </div>
        <div className="flex justify-center self-center w-4/6 sm:w-3/5 p-1 sm:p-5">
          <p className='text-lg sm:text-2xl lg:text-3xl'>L&lsquo;insolite - {isRegister ? "Connexion" : "Tableau de bord"}</p>
        </div>
        <div className="flex justify-end self-center w-1/6 sm:w-1/5 p-3 sm:p-5">
          {isMainPage &&
            <button>
              <a href={"/"}><img className="w-10 h-10" src={"/assets/icons/logout.png"} alt="Déconnexion" /></a>
            </button>
          }
        </div>
      </div>
  )
}
