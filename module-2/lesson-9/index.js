"use strict";

// const isLoading = false;

// const data = [1, 2, 3, 4, 4, 5, 6];

// const req = new Promise((resolve, reject) => {
//     if (isLoading) {
//         return resolve(data);
//     } else {
//         return reject("Not found Data !");
//     }
// });

// req
// .then( (res)=> { console.log('res:', res)})
// .catch((err)=>{ console.log("error:", err)})
// .finally(()=>{console.log("Finally!")})


// const request=(data, status)=>{
//     return new Promise((res,rej)=>{
//         if(status){
//             return res(data)
//         }
//         else{
//             return rej("Error")
//         }
//     })
// }


// const response=request([1,2,3], false)
//                .then((res)=>res)
//                .catch((err)=>err)
//                .finally(()=>"Finally!")


// console.log(response)


// const btn=document.querySelector("#submit");


// btn.addEventListener('click', ()=>{
//     console.log(window.fetch())
// })


// const req=fetch('https://picsum.photos/id/124/300/300');

// req.then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("finally")
// })



// fetch(URL) -> Promise -> Resolve || Reject

// API -> Application programming interface
// SERVER & CLINET -> API
// BaseURL 
// end point
// parametrs -> parmas
// header 
// body
// request method

let gridContainer=$(".grid");

let baseURL='https://fakestoreapi.com'


function getProducts(URL){

    renderLoader()

    fetch(URL)
    .then((res)=>res.json()
    .then((result)=> {
         renderData(result)
    } ))
    .catch((err)=>{
     renderError(err)
    })
   
}

getProducts(`${baseURL}/products`)


function renderData(data){

    if(data.length){

        renderClear();

       data.forEach(item => {

        const card=createElement('div', 'card' , `
               <img src="${item.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${item?.title?.substring(0,20)}...</h5>
                    <p class="card-text">${item?.description?.substring(0,34)}...</p>
                   <div class="d-flex gap-2">
                    <a href="#" class="btn outlined mb-2">${item?.price}$</a>
                    <a href="#" class="btn btn-primary w-75">sale</a>
                   </div>
                </div>
            `);

            gridContainer.appendChild(card)
       });

    }
}

function renderError(err){
    gridContainer.innerHTML="";
    const alert=createElement('div', 'alert alert-danger my-5', `<h4> Error: ${err.message} </h4>`)
    gridContainer.appendChild(alert);
}

function renderLoader(){
    gridContainer.innerHTML="";
    gridContainer.innerHTML=`<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
}

function renderClear(){
    gridContainer.innerHTML="";
}

//







