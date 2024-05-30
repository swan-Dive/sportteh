'use client'
import { register } from "@/actions/manageContests"

export default function RegisterButton({contestId} : {contestId : string}) {


  return (
    <form action={register}>
      <input type="hidden" name="contestId" id="contestId" defaultValue={contestId} />
      <button className="main_button" type="submit"> 
        Зарегестрироваться
      </button>
    </form>
  )
}