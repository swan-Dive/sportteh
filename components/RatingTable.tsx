import axios from "axios"
import { RatingDataType } from "@/types/DataTypes"
import Image from "next/image"

const RatingTable = async({query} : {query: string}) => {

  const ratings: RatingDataType[] = await getRatings(query)

  return (
    <div className="rating_table_wrap">
      <table className="rating_table">

      <thead>
        <tr>
          <th className="table_photo">Фото</th>
          <th className="table_data">ФИО</th>
          <th className="table_data">Результат</th>
          <th className="table_data">Видео</th>
        </tr>
      </thead>
      <tbody>

        {ratings.map((item, index) => (
          <tr key={'ratings' + index}>
            <td className="table_photo_td">{<Image src={item.photo} width={50} height={50} alt="user photo"></Image>}</td>
            <td>{item.name}</td>
            <td>{item.score}</td>
            <td>{item.video_link}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )

} 

const getRatings = async(query: string) => {
  const res = await axios.get(process.env.NEXT_PUBLIC_APP_SERVER + `getRatings`, {params: {query}})
  let ratings: RatingDataType[] = res.data.rows
  return ratings
}

export default RatingTable