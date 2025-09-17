
export interface SignIn {
  email: string
  password: string
}

export interface User {
  id?: string
  name: string
  email: string
  password: string
  phone: string
  address: string
  roles?: string[]
}