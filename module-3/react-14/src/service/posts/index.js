import { req } from "../axios.config";


export const postAPI={
    getAll:async()=>req.get("/posts"),
    getById:async(id)=>req.get(`/posts/${id}`),
}