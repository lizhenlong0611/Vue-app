import axios from "axios";
axios.interceptors.response.use((ret)=>{
    return ret.data || ret ;
})
axios.interceptors.request.use((ret)=>{
    const jwt = localStorage.getItem('jwt' )
    if(jwt){
        ret.headers.Authorization = jwt
    }
    return ret
})
export default axios;