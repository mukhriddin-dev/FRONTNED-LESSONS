// let URL="https://jsonplaceholder.typicode.com"


// API -> Public / Private 

// PUBLIC -> AUTH
// PRIVATE -> REQUIRED AUTH

// baseURL -> 
// endPoint -> /posts , /comments




// POST   -> Create   C R U D
// GET    -> Read
// DELETE -> Delete
// PUT    -> Update

// PATCH  -> Update*


// fetch(URL,PARMS)

// const headers={
//     method:'GET',
//     headers:{
//         'Content-Type':'application/json',
//     }
// }

// function useFetch(URL,params){
//     fetch(URL, params)
//    .then((res)=>res.json())
//    .then((data)=>{
//     renderList(data)
//   })
// }

// useFetch(`${URL}/todos`, headers)


// async function useFetch(URL){
//     try{
//         let req=await fetch(URL);
//         let res=await req.json();

//         if(req.status===404){
//             alert("404 not found!")
//         }

//         if(req.status===200){
//             renderList(res)
//         }
        
//     }catch(err){
//       console.log("error: ", err.message)
//     }finally{
        
//     }
// }

// useFetch(`${URL}/todos`)


// let wrap=$(".list");


// function renderList(data){

//     data.length && data.forEach(element => {
//         const listItem=createElement('li', 'list-item p-2 my-2 shadow', `<p> <strong>${element.id}</strong> ${element?.title} </p>`);
//         $(".list").appendChild(listItem)
//     });

// }