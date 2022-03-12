import axios from 'axios'

export const url = "http://localhost:9000"


export const addUser = (data) => {
    try {
        const res = axios.post(`${url}/add`,data);;
        return res.data
    } 
    catch (error) {
        console.log(error, "error while calling adduser api")
    }
}