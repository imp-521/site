import axios from "axios"
import { useEffect, useState } from "react";
import Article from "../../components/article/article";
import Navbar from "../../components/navbar/navbar"
import styled from "./home.module.css"
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/spinner";

function Home() {

    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(false)



    useEffect(() => {
        setIsLoading(true)

        axios
            .get("http://localhost:7000/articles")
            .then((result) => {
                setArticle(result.data)
                setIsLoading(false)
            })
            .catch((erorr) => {
                console.log(erorr)
                setIsLoading(false)

            });



    }, [])
    return (
        <div className={styled.homeWrapper}>
            <Navbar title="افشین شاپ" />
            
            <div className="container">
                <h2>
                    مقالات جدید
                </h2>
                {
                    isLoading ? <Spinner /> :
                        (
                            <div className={styled.articles}>
                                {article.map((article => (
                                    <Link to={`article/${article.id}`}>
                                        <Article key={article.id} article={article} />

                                    </Link>
                                )))
                                }



                            </div>
                        )
                }
            </div>
            <Footer />

        </div>
    );
}

export default Home;