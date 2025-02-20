import styled from "./navbar.module.css"
import { Link } from "react-router-dom"
function Navbar(samira) {

    return (
        <div className={styled.headerWrapper}>
            <div className="container">
                <div className={styled.navbar}>


                    <ul>
                        <h3>{samira.title}</h3>
                        <li>
                            <Link to={"/"}>لیست مقالات</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>درباره</Link>
                        </li>
                        <li>
                            <Link to={"/createArticle"}>ساخت مقاله</Link>
                        </li>
                    </ul>

                </div>

            </div>
        </div>

    )

}


export default Navbar