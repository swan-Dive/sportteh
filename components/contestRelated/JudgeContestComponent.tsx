import { approveScore } from "@/actions/manageContests";
import { ContestDataType, RatingDataType, } from "@/types/DataTypes";


export default function JudgeContestComponent({contest, ratings} : {contest: ContestDataType, ratings: RatingDataType[]})  {

  return (
    <>
      <div className="competition" >
        <img src={contest.photo} className="competitions_photo"/>
        <div className="competitions_separator">
          <h2>{contest.name}</h2>
          <p>{contest.place_id}</p>
        </div>
      </div>
      {ratings && ratings.map((rating, index) => (
        <div key={'rating' + index}>
          <form action={approveScore}>
            <div className="judge_score">
              <h2 style={{'textAlign' : 'center', 'fontWeight': '900'}}>Оцените результат</h2>
              <h3>{rating.name}</h3>
              <p>{rating.video_link}</p>
              <input type="number" name="score" id="score" defaultValue='0' />
              <input type="hidden" name="id" id="id" defaultValue={rating.id} />
              <br></br>
              <button className="main_button" type="submit" >Отправить</button>
            </div>
          </form>
         
        </div>
      ))}
    </>
  )
}