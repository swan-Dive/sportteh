import RegisterResult from "@/components/contestRelated/RegisterResult"
import axios from "axios"

export default async function ContestParticipant({params} : {params : {contestid : string}}) {
  const contest = await getContest(params.contestid)

  return (
    <div className="main">
      <div className="competition" >
        <img src={contest.photo} className="competitions_photo"/>
        <div className="competitions_separator">
          <h2>{contest.name}</h2>
          <p>{contest.place_id}</p>
        </div>
      </div>
      {<RegisterResult contest_id={params.contestid} />}
    </div>
  )
}

async function getContest(id: string) {

  const res = await axios.post(process.env.NEXT_PUBLIC_APP_SERVER + "getContest", {id: id})
  return res.data.rows[0]
}