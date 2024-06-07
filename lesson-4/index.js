"use strict";


// funName("a", 'b', "f");

// Function declaration

// function funName(arg1, arg2, arg3){
//     console.log(arg1, arg2, arg3);
// }
//
// funName("a", 'b', "c");



// app(1,22,33)  x
// ncaught ReferenceError: Cannot access 'app' before initialization

// function expression

// const app=function(a,b,c){
//        console.log(a,b,c);
// }
//
// const bFun=app;
//
// bFun(88,99,111)
// app(1,22,33)



// arrowFun(9999,8888,2);
// ncaught ReferenceError: Cannot access 'arrowFun' before initialization
// Arrow function

// const arrowFun=(a,b,c)=>{
//     console.log(a,b,c)
// }
//
// const cloneArrow=arrowFun;
//
// arrowFun(9999,8888,2);
// cloneArrow(0,23,122);


// immediately invoked function in javascript (IIFE)


// (
//     function (a){
//         console.log(a)
//     }
//
// )("9a")


//  return  ->


// fun dec
// console.log(app(10,15))
// const result=app(11,12)
// console.log(result)

// function  app(a,b){
//     console.log("s")
//           return a*4;
//
// }

// console.log(app(10,15))
// const result=app(11,12)
// console.log(result)


// const calc=function (a,action,b){
//     switch (action){
//         case "+":  return   a+b; break;
//         case "-":  return a-b; break;
//         case "*":  return a*b; break;
//         case "/": return a/b; break;
//         default: return "not found"
//     }
// }
//
//
// const res=calc(11, "-", 32)
//
// console.log(res)

// const one=calc("on my ", "way");
// console.log(one)
// console.log(  calc(22,10) );

// arrow function

// const arrow=(a,b)=>a+b
//
// console.log(arrow(99,2))


// function  test(a=0,b=0){
//     console.log(a+b)
// }
//
// test(12,21);


// const test=function (a=12, b=21){
//     console.log(a,b)
// }
//
// test("salon", "hey")
// const test=(a=1,b=2)=>a+b;
//
// console.log(test(10,20))
// getNumber
// showMenu
// isHaveColor
// createApp


// ------ Array -------

// const colors=['red', 'green' , 'blue']; // array literal ++
// const cars=Array('bmw', 'nexia');
// console.log(cars)
// console.log(colors[0])


// const num=[];
//
// num[0]=1;
// num[1]=2;
// num[2]=3;
// num[3]=4;
//
// console.log(num)

//
// const num=[1,2,3,4,5,6,7,8,9,10];
// num[0]="first";
// delete num[5];
// num[num.length]=11;
// num[num.length]=12;
//
// console.log(num)

// array destructuring
// const b=[8,9,10,11]
// const arr=[1,2,3,4,5,6];
//
//
// const summa=[ ...b, ...arr]
// const [a,...n]=summa;
// console.log(a)
// console.log(n)
// console.log(summa)

// const [a,f,g, ...w]=[1,2,3,4,5,6];

// console.log(f)
// console.log(w)
// console.log(arr[0])


const letters=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'];


// for(let i=0; i<letters.length; i++){
//     if(letters[i] === 'h') break;
//     console.log(letters[i]);
// }


// for in

// for (let i in letters) {
//     console.log(letters[i]);
// }

// for of

// for (let el of letters) {
//     console.log(el)
// }








