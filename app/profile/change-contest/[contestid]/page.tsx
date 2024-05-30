import ChangeContest from "@/components/contestRelated/changeContest"
import { UserDataType } from "@/types/DataTypes"
import axios from "axios"

export default async function ContestParticipant({params} : {params : {contestid : string}}) {
  const contest = await getContest(params.contestid)

  return (
    <div className="main_wrap">

      {<ChangeContest contest={contest} />}
    </div>
  )
}


async function getContest(id: string) {

  let res = await axios.post(process.env.NEXT_PUBLIC_APP_SERVER + "getContest", {id: id})
  // let volonteers = res.data.rows[0].volonteer_to_verify
  // let users_res = await axios.get(process.env.NEXT_PUBLIC_APP_SERVER + "getAllUsers")
  // // let users: UserDataType[] = users_res.data.rows
  // // for (let i = 0 ; i < volonteers.length; ++i) {
  // //   for (let j = 0 ; j < users.length; ++j) {
  // //     if (users[j].id === volonteers[i]) {
  // //       volonteers[]
  // //     }
  // //   }    
  // // }
  return res.data.rows[0]
}
