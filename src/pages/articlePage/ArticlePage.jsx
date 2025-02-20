import styled from "./articlePage.module.css"
import Navbar from "../../components/navbar/navbar"
import img from "./../../assests/img/R.jpg"
import Footer from "../../components/footer/footer"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Spinner from "../../components/spinner/spinner"

function ArticlePage() {
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const params = useParams()
    useEffect(() => {

        setIsLoading(true)
        axios.get(`http://localhost:7000/articles/${params.id}`)
            .then(result => {
                console.log(result.data);

                setArticle(result.data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
    }, []);
    return (
        <div>
            <Navbar title="افشین شاپ" />
            <div className="container">

                {
                    isLoading ? <Spinner /> : (
                        <div className={styled.articlePage}>
                            <h1>{article.title}</h1>

                            <div className={styled.information}>
                                <span>تاریخ:{article.date}</span>
                                <span>نویسنده : {article.athor}</span>
                                <span>مدت زمان خواندن : {article.readingTime}</span>
                            </div>
                            <img src={article.imageUrl} alt="" />
                            <p>{article.content}</p>
                        </div>
                    )
                }

            </div>
            <Footer />
        </div>
    )
}

export default ArticlePage