import Contests from "../Contests";


export async function VolComponent() {

  return (
    <>
      <Contests apiURL="getContestsOfVolonteer" pathName="/profile/judge-contest/" query=""/>
    </>
  )
}