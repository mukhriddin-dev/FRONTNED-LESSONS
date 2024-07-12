"use strict";
const filmTitle=$("#film-title");
const filmImg=$("#film-img");
const filmVideo=$("#video");
const goBack=$("#go-back");

const db=movies.splice(0,100);
const filmID=localStorage.getItem('film-id')

// --------------- normalize data -----------

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


function findFilmById(filmId){
    return normalize.filter((el)=>el.id===filmId)[0]
}


const state=findFilmById(filmID);

function renderData(data){
    filmTitle.textContent=data.title;
    filmImg.src=data.imgMax;
    filmVideo.src=data.youtube;
}

renderData(state);



goBack.addEventListener("click", ()=>{
    location.href="./index.html";
});

