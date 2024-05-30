import { ArticleDataType } from "@/types/DataTypes"
import axios from "axios"

export default function Article({params} : {params : {article : string}}) {
  const article = getArticle(params.article)
  return (
    <div className="main">
    </div>
  )
}

async function getArticle(articleId: string) {
  const res = await axios.get(process.env.NEXT_PUBLIC_APP_SERVER + "getArticle", {params: {articleId}})
  let article: ArticleDataType = res.data.rows[0]
  return article
}