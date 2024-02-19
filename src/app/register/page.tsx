'use client'

import { Header } from "@/components/dashboard/Header";
import { authenticate } from "../lib/actions";

export default async function Register() {
  async function onSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);
    await authenticate(formData);
  }

  return (
    <main className='bg-emerald-light h-screen'>
      <Header isMainPage={true} isRegister={true}/>
      <div className="h-full flex justify-center items-center">
        <form className="flex flex-col space-y-3 border border-red-600 p-12" method="post" onSubmit={onSubmit}>
          <p className="bg-emerald-medium text-center text-xl mb-6">Connexion</p>
          <label className="flex flex-col">
            E-mail: <input type="text" name="username" required={true}/>
          </label>
          <label className="flex flex-col">
            Mot de passe : <input type="text" name="password" required={true}/>
          </label>
          <button className="bg-white border border-red-600 p-4" type="submit">Se connecter</button>
        </form>
      </div>
    </main>
  )
}