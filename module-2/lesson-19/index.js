"use strict";

// const isTrue=false;

// const promise1=new Promise((resolve , reject)=>{
//     setTimeout(()=> resolve("Proimse 1  resolved!"), 2000)
// })

// const promise2=new Promise((resolve , reject)=>{
//     setTimeout(()=> {
//         if(isTrue){
//             resolve("Proimse 2  resolved!")
//         }else{
//             reject("Not found 404")
//         }
//     }, 1000)
// })


// const promise3=new Promise((resolve , reject)=>{
//     setTimeout(()=> {
//         if(isTrue){
//             resolve("Proimse 3  resolved!")
//         }else{
//             reject("NOT FOUND!!!")
//         }
//     }, 1500)
// })



// const promiseArray=[promise1 , promise2 , promise3]


// Promise.any(promiseArray).then((res)=>{
//     console.log("All result: ", res)
// })

// .all(promiseArray)  -> resolve 

// .allSettled(promiseArray) -> resolve , reject

// .race(promiseArray)  -> first resolved promise

// .any() ->


// regEx

// const regex=/(hello|world)/;

// // const regex=new RegExp('salom')
// console.log(regex)
// console.log(regex.test('w'))  
// console.log(regex.test('world')) 

// 2024-07-29
// 11:53:45

let input=document.querySelector('#date');

const dateRegex=/^\d{4}-\d{2}-\d{2}$/;
const timeRegex=/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/

console.log(dateRegex.test('2021-01-89'))
console.log(timeRegex.test('23:45:23'))


input.addEventListener('keyup',(e)=>{
   if(dateRegex.test(e.target.value)){
    e.target.style.border="2px solid green"
    console.log(e.target.value)
   }else{
     e.target.style.border="2px solid red"
   }
})


const userNameRegex=/^\w+$/

console.log(userNameRegex.test('user11'))

const passwordRegex=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.* ).{8,16}$/;

console.log(passwordRegex.test('12adminUz_super'))

















