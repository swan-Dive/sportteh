import { becomeVolonteer } from "@/actions/manageContests";


export default function RegisterVolonteer({contestId} : {contestId : string}) {

  return (
    <>
      <form action={becomeVolonteer}>
        <input type="hidden" id="contest_id" name="contest_id" defaultValue={contestId}/>
        <button className="main_button" type="submit">Стать волонтером</button>
      </form>
    </>
  )
}