import "./page.css"
import "../page.css"
import RatingTable from "@/components/RatingTable"
import Search from "@/components/Search"
import { Suspense } from "react"

export default function Ratings({searchParams}: {
  searchParams: {
    query?: string;
    page?: string;
  };
}) {

  const query = searchParams.query || ''

  return (
    <div className="main_wrap">
      <div className="contest">
        <div className="competitions_header">
          <h2>Рейтинг</h2>
          <p>Зал славы лучших в своем виде спорта</p>
          <Search placeholder="Введите имя участника" />      
          <Suspense>
            <RatingTable query={query}/>
         </Suspense>
        </div>


      </div>
    </div>
  )
}