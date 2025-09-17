import type { SignIn, User } from "../interface/auth.interface"
import { request } from "../utils/request"


export const signIn = async ({ email, password }: SignIn) => {
  const res = await request.post('/auth/login', {
    email,
    password
  })
  return res.data
}

export const signUp = async ({ email, password, name, phone, address }: User) => {
  const res = await request.post('/auth/register', {
    email,
    password,
    name,
    phone,
    address,
    roles: ["ROLE_USER"],
  })
  return res.data
}