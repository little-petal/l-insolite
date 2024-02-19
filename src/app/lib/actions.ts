'use server'

import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { env } from "process";

export async function authenticate(formData: FormData) {
  let authenticated = false;

  try {
    const username: string = formData.get("username") as string;
    const password: string = formData.get("password") as string;

    if(username == env.USERNAME_APP && await comparePassword(password)) {
      authenticated = true;
    } else {
      authenticated = false;
    }
  } catch (error) {
    if (error) {
      return "Error";
    }
  } finally {
    redirect(authenticated ? '/dashboard' : 'register');
  }
}

async function comparePassword(password: string) {  
  return await bcrypt.compare(password, env.HASH_APP || "");
}