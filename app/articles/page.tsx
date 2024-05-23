import axios from "axios"
import { ArticleDataType } from "@/types/DataTypes"
import Link from "next/link"
import "./page.css"
import "../page.css"


const getArticles = async(): Promise<ArticleDataType[]> => {
  const res = await axios.get(process.env.APP_SERVER + "getAllArticles")
  let articles = res.data.rows
  return articles

}


export default async function Articles() {
  const articles = await getArticles()

  return (
    <div className="main">
      
    {articles.length > 0 ? <div className="first_article" >
        <img src={articles[0].photo} className="article_photo"/>
        <div className="article_separator">
          <h2>{articles[0].name}</h2>
          <p>{articles[0].content}</p>
        </div>
      </div>  : <></>}
    <div className="articles">
    {articles.map((item, index) => (
      index === 0 ?<></> :
      <Link href={`/articles/${item.id}`}>
      <div className="article">
        <img src={item.photo} className="article_photo"/>
        <div className="article_separator">
          <h2>{item.name}</h2>
          <p>{item.content}</p>
        </div>
      </div>  
      </Link>   
    ))}
    </div>
  </div>
  )
}