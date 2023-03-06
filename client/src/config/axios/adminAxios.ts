import axios from "axios";

const instance = axios.create({
    baseURL:"https://go-socialize.onrender.com/admin"
    // baseURL:"http://localhost:4000/admin"
})
axios.interceptors.request.use(
    function(config){
        return config;
    },
    function (error){
        return Promise.reject(error)
    }
)

export default  {
    get:instance.get,
    post:instance.post,
    delete:instance.delete,
}