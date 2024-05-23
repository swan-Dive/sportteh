'use client'
import "./page.css"
import "../page.css"
import RatingTable from "@/components/RatingTable"
import Search from "@/components/Search"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

type RatingsType = {
  show: boolean
  score: string
  name: string
  amount: string
}


export default function Ratings({searchParams}: {
  searchParams: {
    query?: string;
    page?: string;
  };
}) {

  const query = searchParams.query || ''

  console.log(123)
  return (
    <div className="main">
      <div className="contest">
        <div className="competitions_header">
              <h2>Рейтинг</h2>
              <p>Зал славы лучших в своем виде спорта</p>
              <Search placeholder="Введите имя участника">

              </Search>
        </div>

        <Suspense>
          <RatingTable query={query}/>
        </Suspense>

      </div>
    

  </div>
  )
}