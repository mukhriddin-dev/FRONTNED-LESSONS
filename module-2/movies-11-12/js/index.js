"use strict";

const cardsGrid=$("#cards");
const globalSearch=$("#search");
const genresOption=$("#genres");
const searchForm=$('#search-form');
const likeCount=$("#like-count");
const toast=$("#toast");
const toastContent=$("#toast .left");

const data=movies.splice(0,100)

// --------------- normalize data -----------

const normalize=data.map((el)=>{
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

// ------------- Data rendering ------------

function renderData(data){

cardsGrid.innerHTML=`<span class="loader"></span>`;

    setTimeout(()=>{

        if(data.length){

            cardsGrid.innerHTML="";

            data?.forEach((el)=>{

                const card=createElement('div', 'card', `
            
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
                          <button id="add-like" data-like="${el.id}">
                              <i id="like" class="bi bi-heart-fill" data-like="${el.id}"></i>
                          </button>
                      </div>
            `);

                cardsGrid.appendChild(card);

            });
        }else{
            cardsGrid.innerHTML="<h1>NOT FOUND!</h1>"
        }

    },2000)

}

renderData(normalize);

// ------------- Global search -------------

globalSearch.addEventListener('keyup', (e)=>{
    let filteredData=normalize.filter((el)=> el.title.toLowerCase().includes(e.target.value.toLowerCase()));
    renderData(filteredData);
})

// ---------- Dynamic options -----------

function  filteredOptions(state){
    const options=[];
    state?.forEach((el)=>{
        el.genres.forEach(g=>{
            if(!options.includes(g)){
                 options.push(g)
            }
        })
    })
    options.sort()
    return options;
}

function  renderOptions(state){
    state.forEach((el)=>{
        const option=createElement('option', 'option-item', el);
        genresOption.appendChild(option)
    })
}

renderOptions( filteredOptions(normalize) )


// ------------ Multi search -----------------

function  multiSearch(state){

    console.log($('#name').value)
    console.log($('#rating').value)
    console.log($('#genres').value)

    let filteredData=state.filter((el)=> {

        console.log(el.title.toLowerCase())
        console.log(Number(el.rating))
        console.log(el.genres)

       return  el.title.toLowerCase().includes( $('#name').value.toLowerCase())  && Math.round(Number($('#rating').value)) <= Number(el.rating) && el.genres.includes($('#genres').value);
    });

    console.log(filteredData)

    renderData(filteredData)
}

searchForm.addEventListener('submit', e => {
    console.log("submit")
    multiSearch(normalize)
})


// ----------  Event delegation -----------


cardsGrid.addEventListener('click', (e)=>{


    /// ----------- Read more action -----------

    if(e.target.getAttribute('id')==="read-more" && e.target.nodeName==='BUTTON'){
         const id=e.target.getAttribute('data-id');
          localStorage.setItem('film-id',id);
          window.location.href="./film.html";
    }


    /// ---------- add to like -------------------

    if(e.target.getAttribute('id')==="add-like" && e.target.nodeName==='BUTTON' || e.target.getAttribute('id')==="like" ){

        let likedlist=JSON.parse(localStorage.getItem('liked-list')) || [];

        const id=e.target.getAttribute('data-like');


        if(!likedlist.includes(id)){
            likedlist.push(id);
            localStorage.setItem('liked-list',JSON.stringify(likedlist));
            renderLikeCount(likedlist);
            toaster('success', `${id} bilan film qo'shildi.`, 3200 )
        }else{
            toaster('warning', `${id} already added!`, 2200 )

        }

    }

})



function renderLikeCount(data){
    likeCount.textContent=data.length;
}

renderLikeCount(JSON.parse(localStorage.getItem('liked-list')));



// ------------- Toaster function -----------------


function toaster(type, content, time){

    if(type === 'success'){

        toast.classList.add('show','success');
        toast.classList.remove('warning','error');

        toastContent.innerHTML=`
         <strong>Successfully added film</strong>
         <p>${content}</p>
        `;

        setTimeout(()=>{
            toast.classList.remove('show');
        },time)

    }

    if(type === 'warning'){

        toast.classList.add('show','warning');
        toast.classList.remove('success','error');
        toastContent.innerHTML=`
         <strong>Warning! already added!</strong>
         <p>${content}</p>
        `;

        setTimeout(()=>{
            toast.classList.remove('show');
        },time)

    }
}




















