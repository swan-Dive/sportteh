import axios from "axios"
import { ArticleDataType } from "@/types/DataTypes"
import Link from "next/link"
import "./page.css"
import "../page.css"
import { Fragment } from "react"


const getArticles = async(): Promise<ArticleDataType[]> => {
  const res = await axios.get(process.env.APP_SERVER + "getAllArticles")
  let articles = res.data.rows
  return articles
}


export default async function Articles() {
  const articles = await getArticles()

  return (
    <div className="main">
      
    {articles.length > 0 ?
      <Link href={`/articles/${articles[0].id}`}>
        <div className="first_article" >
          <img src={articles[0].photo} className="article_photo"/>
          <div className="article_separator">
            <h2>{articles[0].name}</h2>
            <p>{articles[0].content}</p>
          </div>
        </div>
      </Link>
    : <></>}
    <div className="articles">
    {articles.map((item, index) => (
      index === 0 ? <Fragment key={index}></Fragment> :

        <div className="article">
          <img src={item.photo} className="article_photo"/>
          <div className="article_separator">
            <Link href={`/articles/${item.id}`} key={'article' + index}>
              <h2>{item.name}</h2>
            </Link>   
            <p>{item.content}</p>
          </div>
        </div>  

    ))}
    </div>
  </div>
  )
}