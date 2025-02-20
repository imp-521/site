import styled from "./article.module.css"
import picture from "./../../assests/img/R.jpg"

function Article(props){
    
    return(
        <div className={styled.articleWrapper}>
            <img src={props.article.imageUrl} alt="" />
            <h3>{props.article.title}</h3>
            <p>خواندن {props.article.readingTime} دقیقه ای</p>
         
        </div>

    )
}

export default Article