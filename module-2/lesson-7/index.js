// "use strict";


// setTimeOut    ->  1
// setInterval   ->  infinity

// setTimeout(()=>{ console.log("step 1") } , 0 );
// setTimeout(()=>{ console.log("step 2") } , 1000 );
// setTimeout(()=>{ console.log("step 3") } , 2000 );
// setTimeout(()=>{ console.log("hello react") } , 3000 );
// setTimeout( (text)=>{ console.log("hello react"+text) } , 3000 , "Vue.js" );
// let startBtn=document.getElementById("start");
// let stopBtn=document.getElementById("stop");
// let btn=document.getElementById("start");
// let timeText=document.getElementById("time");
// let countText=document.getElementById("count");
// let all=0;
// let count=0;
// const autoCount=setInterval( ()=>{
//     count++;
//     timeText.innerHTML=`${count}`;
//
//     if(count===33){
//         all+=count;
//         countText.innerHTML=`${all}`;
//         count=0;
//     }
// },100)
//
// startBtn.addEventListener('click',()=>{
//
// })
// stopBtn.addEventListener('click', ()=>{
//     count=0;
//     clearInterval(autoCount)
// })


// -------- Object ---------

// let editor={
//     name:"VsCode",
//     theme:"Dracula"
// }
//
// editor.status=true;
//
// console.log(editor.theme)
// for(let key in editor){
//     console.log("old:",key)
// }
//
// Object.defineProperty(editor,'theme', {
//     value:"Github dark",
//     enumerable:true,
//     writable:false,
//     configurable:false,
// })
//
// Object.defineProperty(editor,'theme', {
//     value:"Github darken",
//     enumerable:true,
//     writable:false,
//     configurable:true,
// })
//
//
// for(let key in editor){
//     console.log("new:", editor[key])
// }
//
// let result=Object.getOwnPropertyDescriptor(editor, 'name')

// console.log(this) // ! && @strict -> window
//
// function dec(){
//     console.log(this)
// }
//
// dec() // @strict mode -> undefined
//       // !@strict mode -> window
//
//
// let obj={
//     test:"test",
//     fun:function (){
//         console.log(this)
//     }
// }
//
// obj.fun()


//
// let person1={
//     name:"Shomurod",
//     age:24,
//     hobbies:['swim','sleeping'],
//
// }
//
// const person2={
//     name:"Shamshod",
//     age:22,
//     hobbies:['a','b'],
// }
//
// function  getAge(){
//     return this.age
// }
//
// const age1=getAge.call(person1)
// const age2=getAge.call(person2)
// console.log(age1, age2)

// const thisFunction=function (a){
//     this.hobbies.push(a)
//     return this.hobbies
// }
//
// thisFunction.call(person1, 'watching youtube')
// thisFunction.call(person2, 'telegram')

// const thisFunction=function (a, b){
//     this.hobbies.push(a,b)
//     return this.hobbies
// }
//
// thisFunction.apply(person1, ['watching youtube', 'linked'])
// thisFunction.apply(person2, ['telegram','instagram'])
//

// const thisFunction=function (a, b){
//     this.hobbies.push(a,b)
//     return this.hobbies
// }
//
// const fun1=thisFunction.bind(person1);
//
// console.log(fun1( 'w' , 'wx' ))

// console.log(person1)
// console.log(person2)























