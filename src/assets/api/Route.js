import axios from "axios"
const myUrl = 'https://api.themoviedb.org/3/movie/550?api_key=a847ea9395b412949d66a6859540cccd'

const RouteApi = {
    GetMovies: ()=> axios.get(myUrl),
}

export default RouteApi