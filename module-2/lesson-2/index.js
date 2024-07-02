"use strict";

// const container=$(".container");
// const button=$(".btn-success");


// const btnInfo=document.createElement('button');
//       btnInfo.classList.add("btn-info","btn");
//       btnInfo.textContent="Info";
//       button.after(btnInfo)

      // button.before(btnInfo)

//
// button.setAttribute('type','button');
// button.setAttribute('id','button');
// button.setAttribute('title','button');
// button.setAttribute('disabled','true');
//
// console.log(button)
// console.log(button.getAttribute('class')) // value
// console.log(button.getAttribute('id')) // null


// function  createElement(limit){
//     for(let i=0; i<limit; i++){
//         const div=document.createElement("div");
//         div.classList.add('p-5','bg-success','card', 'w-25','m-2');
//         div.innerHTML=`<h1>Hello world! ${i}</h1>`;
//         container.prepend(div)
//     }
// }

// createElement(10)


// const input=$("#input-form");
// const controlInput=$("#control-input");
//
// controlInput.addEventListener('click', ()=>{
//     if( input.getAttribute('type')==='password'){
//         input.setAttribute('type','text');
//         controlInput.innerHTML="<i class='bx bxs-hide' ></i>"
//     }else{
//         input.setAttribute('type','password');
//         controlInput.innerHTML=" <i class='bx bxs-show'></i>"
//     }
//
// })



const parentContent=$("#parent");


// const div=document.createElement('div');
//       div.classList.add('card');
//       div.innerHTML=`
//       <h2>Content title</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum quam quasi.</p>
//       <img src="https://picsum.photos/id/34/200/160" alt="smth">`;
//       parentContent.append(div);


const template=$("#content");
const cloneTemplate=template.content.cloneNode(true);
      parentContent.appendChild(cloneTemplate);

console.log(cloneTemplate)





