'use server'
import axios from "axios"
import { cookies } from "next/headers"

type RegisterDataType = {
  message: string
  email: string
  token: string
}

export default async function RegisterUser(prevState: any, formData: FormData) {
  const data = {login: formData.get('login'), password: formData.get('password')}
  let response: RegisterDataType = {message: '', email: '', token: ''}
  await axios.post<RegisterDataType>(process.env.NEXT_PUBLIC_APP_SERVER + 'register', data)
  .then((res) => {
    response = {message: res.data.message, email: res.data.email, token: res.data.token}
  })
  cookies().set('token', response.token)
  cookies().set('email', response.email)
  

  return {message : response.message}
}