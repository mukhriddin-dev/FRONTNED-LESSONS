"use strict";

let baseURL = "http://localhost:3000";

let postForm = $("#post-form");
let postTitle = $("#post-title");
let postBody = $("#post-body");
let notif=$("#notif");
let postsList=$(".list");

let updateBody=$("#body")
let updateTitle=$("#title")
let updateBtn=$("#form")

let modalWindow=$(".modal-wrapper");
let closeBtn=$("#close-btn")

// ---------------- data fetching ------------------

async function getPosts(URL) {
  try {
    const req=await fetch(URL);
    const res=await req.json();

    if(req.status===200){
        renderData(res.reverse())
    }

    if(req.status===404){
        renderError('not found 404!')
     }

  } catch (err) {
       renderError(err.message)
  }
}


async function getPostById(URL,id){
  
    try {
        const req=await fetch(`${URL}/${id}`);
        const res=await req.json();
    
        if(req.status===200){
            updateBody.value=res.body;
            updateTitle.value=res.title
        }
    
        if(req.status===404){
            renderError('not found 404!')
         }
    
      } catch (err) {
           renderError(err.message)
      }
}

getPosts(`${baseURL}/posts`)


// -------------- render data to UI -----------


function renderData(data){
    if(data.length){

        data.forEach(el => {

            const listItem=createElement('li', 'p-4 mb-2 border rounded list-item',
                 ` <h5>${el.title}</h5>
                   <p class="bg-light py-3">${el.body}</p>
                   <select class="dropdown"> 
                      <option selected disabled>...</option>
                      <option id="edit" value="${'EDIT+'+el.id}">EDIT</option>
                      <option id="delete" value="${'DELETE+'+el.id}">DELETE</option>
                   </selcet>
                 `
            );

            postsList.appendChild(listItem);

        });
    }else{
        postsList.innerHTML="<h4 class='text-denger text-center'> NOT FOUND POST</h4>"
    }
}


// -------------- render Error to UI -----------

function renderError(err){
   notif.textContent=err;
}

// -------------- create new post -----------

async function createPost(URL){

    const newPost={
        id: String(Date.now()),
        title: postTitle.value,
        body: postBody.value
    } 

    try{

        if(newPost.title.trim().length===0 || newPost.body.trim().length===0){
           notif.textContent="fill form!";
        }else{
            const req=await fetch(URL,{
                  method:'POST',
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body: JSON.stringify(newPost)
            });

            if(req.status===404){
                renderError("Not fond 404")
            }

        }

    }catch(err){
        renderError(err.message)
    }
    
}



// -------------- click action -----------

postForm.addEventListener('submit', (e)=>{

    e.preventDefault();
    createPost(`${baseURL}/posts`)

})



// ---------------- delete function  -------------

async function deletePost(URL,id){
    try{
        await fetch(`${URL}/${id}`,{method:"DELETE"})
    }catch(err){
        console.err(err.message);
    }
}

//--------------- update function -----------------



async function updatePost(URL, id){

    const updateObject={
        title: updateTitle.value,
        body:updateBody.value
    } 

  try{
    const req=await fetch(`${URL}/${id}`,{
        method:'PUT',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updateObject)
    })


    if(req.status==='201'){
        modalWindow.style.display="none";
    }

  }catch(err){
    console.err(err.message);
  }
}


// --------------- delete event handler -------------
postsList.addEventListener('change', (e)=>{

    e.preventDefault();

   if(e.target.nodeName==="SELECT"){

      const id=e.target.value;
      const actionType=id.split("+");
      const postId=actionType[1];
      const eventType=actionType[0]

      if(eventType==='DELETE'){
        deletePost(`${baseURL}/posts`, postId)
      }

      if(eventType==='EDIT'){
        localStorage.setItem('update-id', postId)
        getPostById(`${baseURL}/posts`,postId)
        modalWindow.style.display="grid";
        
      }

    }
})



closeBtn.addEventListener('click', ()=>{
    modalWindow.style.display="none";
})

updateBtn.addEventListener('submit', ()=>{
    let id=localStorage.getItem('update-id')
    updatePost(`${baseURL}/posts`, id)
})
