"use strict";


const wrapperLikedFilms=$("#liked-list");
const db=movies.splice(0,100);
const likedFilms=JSON.parse(localStorage.getItem("liked-list"));


const normalize=db.map((el)=>{
    return {
        title:el.title,
        year:el.year,
        genres:el.categories,
        id:el.imdbId,
        rating:el.imdbRating,
        time:`${ Math.floor(el.runtime/60)}H ${el.runtime%60}M`,
        language:el.language,
        youtube:`https://youtube.com/embed/${el.youtubeId}`,
        summary:el.summary,
        imgMax:el.bigThumbnail,
        imgMin:el.smallThumbnail,
    }
})


const findResult=[];


function  findFilmLikedList(DB, likedList){
    if(DB.length){

        likedList.forEach(item=>{

             if(likedList.length){

                 DB.forEach(el=>{

                    if(likedList.includes(el.id)){
                        if(!findResult.includes(el)){
                               findResult.push(el)
                        }

                    }
                 })
             }
        })
    }
}

findFilmLikedList(normalize,likedFilms)


function renderData(data){

    wrapperLikedFilms.innerHTML=`<span class="loader"></span>`;

    setTimeout(()=>{

        if(data.length){

            wrapperLikedFilms.innerHTML="";

            data?.forEach((el)=>{

                const card=createElement('div', 'card',  `
            
            <img src="${el.imgMax}" alt="smt">
                  <div class="card-body">
                    <h2>${el.title.substring(0,24)}...</h2>
                      <ul class="mb-4">
                         <li>
                             <strong>year:</strong> <span>${el.year}</span>
                         </li>
                          <li>
                              <strong>Rating:</strong> <span>${el.rating}</span>
                          </li>
                          <li>
                              <strong>language:</strong> <span>${el.language}</span>
                          </li>
                          <li class="text-[13px]">
                              <strong>Genres:</strong> <span>${el.genres}</span>
                          </li>
                          <li>
                              <strong>Runtime:</strong> <span>${el.time}</span>
                          </li>
                      </ul>
                      <div class="flex justify-between ">
                          <button id="read-more" data-id="${el.id}">read more</button>
                          <button id="del-like" data-del="${el.id}">
                              <i id="delete" class="bi-trash3" data-del="${el.id}"></i>
                          </button>
                      </div>
            `);

                wrapperLikedFilms.appendChild(card);

            });
        }else{
            wrapperLikedFilms.innerHTML="<h1>NOT FOUND!</h1>"
        }

    },2000)

}

renderData(findResult);


wrapperLikedFilms.addEventListener('click', (e)=>{

    if(e.target.getAttribute('id')==='del-like' && e.target.nodeName==='BUTTON' || e.target.getAttribute('id')==='delete'){
        const id=e.target.getAttribute('data-del');
        removeLikedList(id)
    }
})


function removeLikedList(id){
    const result=likedFilms.filter(item=>item!==id);
    localStorage.setItem('liked-list', JSON.stringify(result));
    window.location.reload()
}












