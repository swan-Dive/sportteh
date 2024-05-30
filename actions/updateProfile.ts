'use server'
import axios from "axios"
import { getSession } from "./auth"
import { revalidatePath } from "next/cache"


export async function updateProfile(formData: FormData) {
  const photo = formData.get('photo')
  console.log(formData.get('photo'))
  const session = await getSession()
  if (!session) {
    return {message: "failed"}
  }
  if (photo) {

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: process.env.NEXT_PUBLIC_APP_SERVER + 'updateUser',
      headers: {
        'Content-Type': `multipart/form-data`,
      },
      data: formData,
    };

    await axios.request(config)
    .then(res => {
      console.log('Here', res)
    })
    .catch(err => {
      console.log(err)
    })
  }
  revalidatePath('/profile')
  //return {message: "success"}
}