'use server'
import axios from "axios"
import { cookies } from "next/headers"
import { RegisterDataType } from "@/types/DataTypes"
import { jwtVerify } from "jose"
import { redirect } from "next/navigation"

const secretKey = 'secret'
const key = new TextEncoder().encode(secretKey)
export async function decrypt(input: string) {
  return await jwtVerify(input, key, {
    algorithms: ['HS256']
  })

}


export default async function registerUser(prevState: any, formData: FormData) {
  const data = {login: formData.get('login'), password: formData.get('password'), role_id: formData.get('role_id')}
  let response: RegisterDataType = {message: '',  token: ''}
  await axios.post<RegisterDataType>(process.env.NEXT_PUBLIC_APP_SERVER + 'register', data)
  .then((res) => {
    response = {message: res.data.message,  token: res.data.token}
  })
  .catch(err => {
    console.log('error')
  })
  cookies().set('token', response.token, {httpOnly: true, path: '/'})  
  redirect('/')
  return {message : response.message}
}

export async function login(prevState: any, formData: FormData) {
  const data = {login: formData.get('login'), password: formData.get('password')}
  let response: RegisterDataType = {message: '', token: ''}
  await axios.post<RegisterDataType>(process.env.NEXT_PUBLIC_APP_SERVER + 'login', data)
  .then((res) => {
    response = {message: res.data.message, token: res.data.token}
  })
  .catch(err => {
    console.log('error')
  })
  cookies().set('token', response.token, {httpOnly: true, path: '/'})  
  console.log("I AM HERE")
  redirect('/')
  
  return {message : response.message}
}

export async function getSession() {
  const session = cookies().get('token')?.value
  if (!session) return null
  return (await decrypt(session)).payload
}

export async function logout() {
    console.log(123)
    cookies().set('token', '', {expires: new Date(0), path: '/'})
    console.log(123)
}