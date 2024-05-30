import { getSession } from "@/actions/auth";
import RegisterButton from "@/components/contestRelated/RegisterButton";
import RegisterResult from "@/components/contestRelated/RegisterResult";
import RegisterVolonteer from "@/components/contestRelated/RegisterVolonteer";
import { RatingDataType } from "@/types/DataTypes";
import axios from "axios";

function parseJwt(token: string) {
  if (!token) { return; }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export default async function Contest({params} : {params : {contest_id : string}}) {

  const contest = await getContest(params.contest_id)
  const session = await getSession()
  const ratings: RatingDataType[] = await getRatings(params.contest_id)
  return (
    <div className="main_wrap">

        <div className="competition" >
          <div className="competitions_separator">
            <h2>{contest.name}</h2>
            <p>{contest.place_id}</p>
            {contest.org && <p>Организатор: {contest.org}</p>}
          </div>
          {session?.roleId === 3 && <RegisterButton contestId={params.contest_id}/>}
          {session?.roleId === 2 && <RegisterVolonteer contestId={params.contest_id}/>}
        </div>
        <div className="rating_table_wrap">
          <table className="rating_table">

            <tbody>
            <tr>
              <th>Фото</th>
              <th>Имя</th>
              <th>Результат</th>
              <th>Видео</th>
              
            </tr>
        
            {ratings && ratings.map((rating, index) => (

              <tr  key={'rating' + index}>
                <td>{rating.photo}</td>
                <td>{rating.name}</td>
                <td>{rating.score}</td>
                <td>{rating.video_link}</td>
                
              </tr>

            ))}
                </tbody>
          </table>
        </div>
        {session?.roleId === 3 && <RegisterResult contest_id={params.contest_id} />}
    </div>
  )
}

async function getContest(id: string) {
  let   contest = {  id: '',
  photo: '',
  name: '',
  is_online: false,
  place_id: '',
  type_of_sport: '',
  description: '',
  org: ''}
  console.log("ID ", id)
  await axios.post(process.env.NEXT_PUBLIC_APP_SERVER + 'getContest', {id: id})
  .then(res => {
    contest = res.data.rows[0]
  })
  .catch(err => {
  })
  return contest
}

async function getRatings(id: string) {
  let ratings: RatingDataType[] = []
  await axios.post(process.env.NEXT_PUBLIC_APP_SERVER + 'getRatingById', {id: id})
  .then(res => {
    ratings = res.data.rows
  })
  .catch(err => {
    console.log(err)
  })
  console.log(ratings)
  return ratings

}