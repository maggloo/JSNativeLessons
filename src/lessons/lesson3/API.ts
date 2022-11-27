import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '3755568a';
const axiosInstance = axios.create(configOMB);


type filmType = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}
type GetTasksResponseType = {
    Response: string
    totalResults: string
    Search: Array<filmType>
}


const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get<GetTasksResponseType>(`?apikey=${key}&s=${title}`)
            .then(res => res.data)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get<GetTasksResponseType>(`?apikey=${key}&s=${title}&type=${type}`)
            .then(res => res.data)
    }
};


export default API;
