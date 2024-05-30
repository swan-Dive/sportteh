import "./page.css"
import "../page.css"
import Contests from "@/components/Contests"
import Search from "@/components/Search"



export default function Competitions({searchParams}: {
  searchParams: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams.query || ''
  return (
    <div className="main">
      <div className="competitions_header">
        <h2>События</h2>
        <p>Узнай что интересного происходит рядом с тобой в мире спорта</p>
        <Search placeholder="ЛОКАЦИЯ"/>
      </div>

      <Contests apiURL="getAllContests" pathName="/competitions/" query={query}/>
    </div>
  )
}