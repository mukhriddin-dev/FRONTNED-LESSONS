"use strict";

// -----------------  SELECTORS --------

// let h1=document.getElementById('text') 10
// let h1=document.getElementsByTagName("h1"); HTML Collection [] 2
// let h1=document.getElementsByClassName('text-center') // HTML Collection []
// console.log(h1)

// const text=document.querySelector('h1') // tag selector
// const text=document.querySelector('#text') // id selector
//const text=document.querySelector('.text-center') // className selector

// const textElements=document.querySelectorAll('h1') // NodeList []
// console.log(textElements)


// const text1=document.querySelector(".card .box1 .text-center");
// const text2=document.querySelector(".card .box2 .text-center");
//
// console.log(text1)
// console.log(text2)



// item2.parentElement -> return parentElement
// item2.parentNode -> return parentNode
// item2.parentElement.parentElement -> return grand parent
// item2.item2.nextElementSibling  -> nextElementSibling
// item2.previousElementSibling
// console.log(item2)

// HTMLElement.style -> CSSStyleDeclaration Object

// const obj={
//     color:""
// }
//
// obj.color="red";
//
// item2.style.color="white";
// item2.style.backgroundColor="lime";
// item2.style.cssText="color:red; background-color:green"
// item2.style.marginLeft="300px"
//
// console.log(item2.style)

const parent1=document.querySelector("#parent1");
const item2=document.querySelector(".item2");
const btn=document.querySelector(".btn");


function setStyle(){
    parent1.style.cssText="border-radius:135px";
    console.log("success 1")
}

// events

// inline -> event attribute="func()"

btn.onclick=function (){
    setStyle()
    console.log("success 2")
}

item2.onclick=function (){
    console.log(this)
    this.nextElementSibling.style.display="none";
    this.parentElement.parentElement.style.borderRadius="100px";
}













