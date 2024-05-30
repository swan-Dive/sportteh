'use server'
import axios from "axios"
import { getSession } from "./auth"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function manageContests(formData: FormData, type: string) {
  const session = await getSession()
  formData.append('userEmail', typeof(session?.userEmail) === 'string' ? session?.userEmail: "")
  if (formData.get('is_online')) {
    formData.set('is_online', 'true')
  } else {
    formData.append('is_online', 'false')
  }

  let api = ""
  if (type === 'add') {
    api ='addContest'
  } 
  else if (type === 'update') {
    api = 'updateContest'
  }

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: process.env.NEXT_PUBLIC_APP_SERVER + api,
    headers: {
      'Content-Type': `multipart/form-data`,
    },
    data: formData,
  };
 
  await axios.request(config)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
  revalidatePath('/profile')
  
  return {message: "OK"}
  
}

export async function register(formData: FormData) {
  const session = await getSession()
  try {
  const res = await axios.post(process.env.NEXT_PUBLIC_APP_SERVER + 'addContestant', {login: session?.userEmail, id: formData.get('contestId')})
  } catch(err) {
    console.log(err)
  }
}

export async function postResult(formData: FormData) {
  const session = await getSession()
  await axios.post(process.env.NEXT_PUBLIC_APP_SERVER + 'addScore', {contest_id: formData.get('contest_id'), login: session?.userEmail, video_link: formData.get('video_link')})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}

export async function becomeVolonteer(formData: FormData) {
  const session = await getSession()
  await axios.post(process.env.NEXT_PUBLIC_APP_SERVER + 'becomeVolonteer', {contest_id: formData.get('contest_id'), login: session?.userEmail})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}

export async function updateVoloteer(formData: FormData) {

  let volonteers_to_add = []
  console.log(formData.keys())
  for (let pair of formData.entries()) {
    console.log(pair)
    if (pair[0] !== 'contest_id')
    volonteers_to_add.push(pair[0])
  }
  await axios.post(process.env.NEXT_PUBLIC_APP_SERVER + 'setVolonteers', {contest_id: formData.get('contest_id'), volonteers: volonteers_to_add})
  .then(res => {
    //console.log(res)
  })
  .catch(err => {
    //console.log(err)
  })
}

export async function approveScore(formData: FormData) {
  await axios.post(process.env.NEXT_PUBLIC_APP_SERVER + 'approveScore', {id: formData.get('id'), score: formData.get('score')})
  .then(res => {
    //console.log(res)
  })
  .catch(err => {
    //console.log(err)
  })
}