import Contests from "../Contests";


export async function ContComponent() {

  return (
    <div>
      <Contests apiURL="getPartContests" pathName="/profile/check-contest/" query=""/>
    </div>
  )
}