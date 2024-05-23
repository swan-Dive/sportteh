import axios from "axios"
import "./page.css"
import "../page.css"

type CompetitionsType = {
  photo: string
  name: string
  place: string
  show: boolean
}

const getData = async(): Promise<CompetitionsType[]> =>{
  const res = await axios.get(process.env.APP_SERVER + "getAllContests")
  let competitions :CompetitionsType[]  = res.data.rows
  if (competitions)
    for (let i = 0; i < competitions.length; ++i) {
      competitions[i].show = true
    }
  return competitions
  
}

export default async function Competitions() {
  const competitions = await getData()
 
  return (
    
    <div className="main">
      <div className="competitions_header">
          <h2>События</h2>
          <p>Узнай что интересного происходит рядом с тобой в мире спорта</p>
          <input  type="text" placeholder="ЛОКАЦИЯ" />
      </div>

      <div className="competitions_body">
          {competitions.map((item : CompetitionsType) => (
              item.show &&
              <div className="competition">
                  <img src={item.photo} className="competitions_photo"/>
                  <div className="competitions_separator">
                      <h2>{item.name}</h2>
                      <p>{item.place}</p>
                  </div>
              </div>
          ))}
      </div>

    </div>

  )


}

