'use client'
import { useCallback } from "react"
import Dialog from "../Dialog"
import { usePathname, useSearchParams, useRouter} from "next/navigation"
import { postResult } from "@/actions/manageContests"

export default function RegisterResult({contest_id} : {contest_id: string}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
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
    postResult(formData)
  }

  function closeContestButton() {
    router.push(pathname + '?' + createQueryString('showDialog', 'n'))
  }

  return (
    <>
    <Dialog title="Добавить соревнование" onClose={closeContestButton}>
      <form action={addContestButton}>
        <input type="text" name='video_link' id="video_link" placeholder="Ссылка на видео" required/>
        <input type="hidden" name="contest_id" id="contest_id" defaultValue={contest_id} />
        <button  type="submit">Добавить</button>
      </form>
    </Dialog>
    <button className="main_button" onClick={() => router.push(pathname + '?' + createQueryString('showDialog', 'y'))}>Добавить результат</button>
  </>
  )
}