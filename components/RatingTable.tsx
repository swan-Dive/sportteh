import axios from "axios"

type RatingsType = {
  show: boolean
  score: string
  name: string
  amount: string
}

const RatingTable = async({query} : {query: string}) => {

  const ratings: RatingsType[] = await getRatings(query)
  console.log(query)

  return (
    <table>
     <tbody>
      <tr>
        <th>ФИО</th>
        <th>Результат</th>
        <th>Количество <br></br>выступлений</th>
        
      </tr>
      {ratings.map((item, index) => (
        <tr key={'ratings' + index}>
          <td>{item.name}</td>
          <td>{item.score}</td>
          <td>{item.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )

} 

const getRatings = async(query: string) => {
  const res = await axios.get(process.env.NEXT_PUBLIC_APP_SERVER + `getRatings`, {params: {query}})
  let ratings: RatingsType[] = res.data.rows


  return ratings
}

export default RatingTable