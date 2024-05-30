import JudgeContestComponent from "@/components/contestRelated/JudgeContestComponent"
import axios from "axios"

export default async function JudgeContest({params} : {params : {contestid : string}}) {
  const contest = await getContest(params.contestid)
  const ratings = await getRatings(params.contestid)
  console.log(ratings)
  return (
    <div className="main">
      <JudgeContestComponent contest={contest} ratings={ratings}/>
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

async function getRatings(id: string) {
  
  let res = await axios.post(process.env.NEXT_PUBLIC_APP_SERVER + "getRatingById", {id: id})
  .catch(err => {
    console.log(err)
  })
  return res?.data.rows
}