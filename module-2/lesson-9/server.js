const http=require("http");

const app=http.createServer((req,res)=>{
   if(req.url==="/posts" && req.method==="GET"){
    res.writeHead('status',200)
    res.end(JSON.stringify([1,2,3,4]))
   }else{
    res.writeHead('status',404)
    res.end("Not found")
   }
})

app.listen(3000, ()=>{"Server is running on 3000 PORT"})

