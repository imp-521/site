import { useState } from "react"
import Navbar from "../../components/navbar/navbar"
import styled from "./createArticle.module.css"
import Input from "../../components/input/input"
import Textarea from "../../components/textarea/textarea"
import axios from "axios"
import Footer from "../../components/footer/footer"

function CreateArticle() {

    const [article, setArticle] = useState({
        title: "",
        date: "",
        readingTime: "",
        athor: "",
        message: "",
        imageUrl: "",
    })
    const handleChangeArticle = (e) => {

        setArticle((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }))
    }

    const handleChangeArticleMessage = (e) => {

        setArticle((prevState) => ({
            ...prevState,
            message: e.target.value,

        }))
    }

    const handleCreateNewArticle = () => {
        axios.post("http://localhost:7000/articles", {
            id: 9,
            imageUrl: article.imageUrl,
            title: article.title,
            readingTime: article.readingTime,
            date: article.date,
            athor: article.athor,
            content: article.message
        })
    }



    return (
        <>
            <Navbar title="افشین شاپ" />
            <div className="container">
                <div className={styled.createArticlePage}>
                    <h1>ساخت مقاله</h1>

                    <Input label="عنوان" name="title" handeleChange={handleChangeArticle} />
                    <Input label="تاریخ" name="date" handeleChange={handleChangeArticle} />
                    <Input label="مدت زمان خواندن" name="readingTime" handeleChange={handleChangeArticle} />
                    <Input label="نویسنده" name="athor" handeleChange={handleChangeArticle} />
                    <Input label="ادرس عکس" name="imageUrl" handeleChange={handleChangeArticle} />


                    <Textarea label="متن" onChange={handleChangeArticleMessage} />


                    <button onClick={handleCreateNewArticle}>ساخت مقاله</button>


                </div>
            </div>
            <Footer />

        </>



    )
}


export default CreateArticle 