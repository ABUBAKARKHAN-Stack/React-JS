import axios from "axios";


const api = axios.create({
    baseURL: "https://www.omdbapi.com/"
})


export function getMovies(){
    return api.get("?s=Titanic&apikey=3e53cc40")
}