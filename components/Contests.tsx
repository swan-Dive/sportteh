import { ContestDataType } from "@/types/DataTypes"
import axios from "axios"
import { Fragment } from "react"
import { ContestComponent } from "./ContestComponent"
import { getSession } from "@/actions/auth"
import { JWTPayload } from "jose"

type Props = {
  pathName: string
  apiURL: string 
  query: string
}


export default async function Contests({apiURL, pathName, query=""} : Props) {
  const session = await getSession()
  console.log('query: ', query)

  const contests: ContestDataType[] = await getContests(session, apiURL, query)
  return (
    <div className="competitions_body">
    {contests && contests.map((contest, index) => (
      <Fragment key={'contests' + index}>
        <ContestComponent contest={contest} onClickURL={pathName + contest.id}/>
      </Fragment>
    ))}
    </div>
  )
}

async function getContests(session: JWTPayload | null, apiURL: string, query: string) {
  const res = await axios.post(process.env.NEXT_PUBLIC_APP_SERVER + apiURL, {userEmail: session?.userEmail, query: query})
  .catch(err => {
    console.log(err)
  })
 
  console.log(res?.data.rows)
  return res?.data.rows

}