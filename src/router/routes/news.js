import News from "@/views/news/news";
import Newstabel from "@/views/news/newstabel";
import Newslist from "@/views/news/newslist";

var newsRouter = { path: "/news", component: News ,redirect:"news/newstabel",children:[
    { path: "newstabel", component: Newstabel},
    { path: "newslist", component: Newslist},]}
    

export default newsRouter;
