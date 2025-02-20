
import AboutUs from "./pages/About us/AboutUs";
import ArticlePage from "./pages/articlePage/ArticlePage";
import CreateArticle from "./pages/createArticle/createArticle";
import Home from "./pages/Home/home"
import {Route , Routes} from "react-router-dom" 

function App(){
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/createArticle" element={<CreateArticle/>} />



      





      </Routes>








  
    </div>
);
}




export default App;
