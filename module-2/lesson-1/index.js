"use strict";

const box=$(".box");

console.log(box.clientHeight)
console.log(box.offsetHeight)

console.log(box.clientWidth)
console.log(box.offsetWidth)

console.log(box.clientTop)
console.log(box.offsetTop)
console.log(box.offsetLeft)

console.log(box.scrollHeight)
console.log(box.scrollWidth)
console.log(box.scrollTop)



console.log("window X:", window.scrollX)
console.log("window Y:", window.scrollY)

box.addEventListener('scroll',()=>{

    console.log(box.scrollTop)

    if(box.scrollTop>100){
        box.style.backgroundColor="red";
    }

    if(box.scrollTop>300){
        box.style.backgroundColor="blue";
    }

    if(box.scrollTop>400){
        box.style.backgroundColor="yellow";
    }

})

window.addEventListener('unload', (e)=>{
    console.log("Page unload...")
})

window.addEventListener('beforeunload', (e)=>{
    console.log("Page beforeunload...")
})

window.addEventListener('load', ()=>{
    console.log("Page loaded... 100%")
})

window.addEventListener('DOMContentLoaded', ()=>{
    console.log("Page loading...")
})

box.addEventListener('drag', (e)=>{
    console.log(e)
})


