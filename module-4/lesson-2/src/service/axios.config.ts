import axios from "axios";


export const api=axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
})