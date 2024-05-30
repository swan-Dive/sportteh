'use client'
import {manageContests} from "@/actions/manageContests"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { useCallback } from "react"
import Dialog from "../Dialog"
import { useFormStatus } from "react-dom"


export function OrgComponent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const {pending} = useFormStatus()
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  function addContestButton(formData: FormData) {
    router.push(pathname + '?' + createQueryString('showDialog', 'n'))
    manageContests(formData, 'add')
  }

  function closeContestButton() {
    router.push(pathname + '?' + createQueryString('showDialog', 'n'))
  }

  function SubmitButton() {
    const {pending} = useFormStatus()
  
    return (
      <button className="main_button" type="submit"> {pending ? "Загрузка..." : "Добавить"}</button>
    )
  }

  return (
    <>
    {console.log(pending)}
      <Dialog title="Добавить соревнование" onClose={closeContestButton}>
        <form action={addContestButton}>
          <input className="input_style" type="text" name='name' id="name" placeholder="Название соревнования" required/>
          <input className="input_style" type="text" name="description"  id="description" placeholder="Описание" required/>
          <input className="input_style" type="text" name='place_id' id="place_id" placeholder="Место проведения" required/>
          <input className="input_style" type="text" name="type_of_sport" id="type_of_sport" placeholder="Вид спорта" required/>
          <div>
            <label>Онлайн?</label>
            <input type="checkbox" name="is_online" id="is_online" />
          </div>
          <label>Фото соревнования</label>
          <input name="photo" id="photo" type="file" accept="image/*" required/>
          <SubmitButton/>
        </form>
      </Dialog>
      <button className="main_button fix_profile_button" onClick={() => router.push(pathname + '?' + createQueryString('showDialog', 'y'))}>Добавить соревнование</button>

      
    </>
  )
} 
