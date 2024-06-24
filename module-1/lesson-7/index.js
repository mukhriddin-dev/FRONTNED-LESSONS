"use strict";

/// Array destructuring

const arr=['apple', 'limon', 'bliss'];

const [a,l,b]=arr;

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])


const person={
    name:"Davlatbek",
    age:23,
    job:"Programmer",
    favColor:"black"
}

const extraInfo={
    isMarried:false,
    hobbies:['coding', 'reading'],
    isHaveCar:true,
    name:"Dostonbek"
}

const user={
    ...person,
    ...extraInfo
}


// console.log(Object.seal(user))
user.name="Kamronbek"

// Object.freeze(user)
// Object.isFrozen(user)
// user.weight=80;
// console.log(Object.isFrozen(user))

// user.weight=70;

//console.log(Object.keys(user)) //  keys[]
//console.log(Object.values(user)) // values[]
//console.log(Object.entries(user)) // key+value[]

//const object=Object.entries(user);

//console.log(Object.fromEntries(object)) // to Object

/// ----------- Function ----------

// function getData(a,b,c,d,...e){
//     console.log(a,b,c,d, e )
//     console.log(...e)
// }

// call
// getData(1,2,3,4,5,6,6,7,89,9)


// function  toArray(str){
//
//     const arr=str.split('');
//
//     for(let i=0;i<arr.length;i++){
//
//         if(arr[i]!=="l"){
//             console.log(arr[i])
//         }
//
//     }
//
// }
//
// toArray("Hello");

// let c=122;
//
// function  pure(a,b){
//     console.log(a,b)
// }
// pure(1,2)
//
//
// function  imPure(a){
//     return a+c;
// }

// ------- Factory Function --------

// const createCar=(name, brand, color, year)=>{
//
//     return (
//         {
//         name,
//         brand,
//         color,
//         year
//        }
//     )
// }
//
// const bmw=createCar('bmw x7', 'bmw', 'red', 2024);
// const nexia=createCar('nexia 3', 'nexi', 'red', 2024);
//
// console.log(bmw)
// console.log(nexia)


// ---------- Pipe Function --------

// const one=(x)=>x+10;
// const two=(x)=>x*2;
// const three=(x)=>x**3;
//
// const res1=one(1);
//
// const res2=two(res1);
//
// const res3=three(res2);
//
// //10648
//
// const result=three(   two(  one(1)  )  )
//
// console.log(result)

/// Currying Function

// const state=(a,b,c,d)=> a+b+c+d;
// const result=state(1,2,3,4) // 10
//
// const curry=(a)=>{
//     return (b)=>{
//         return (c)=>{
//             return (d)=>{
//                 return a+b+c+d;
//             }
//         }
//     }
// }
//
// const curry2=(a)=>(b)=>(c)=>(d)=>a+b+c+d
//
// console.log( curry2(1)(2)(3)(4) )
// console.log( curry(1)(2)(3)(4) )

// HOF

// const app=(fun)=>{
//     return fun
// }
//
// function  test(){
//     return [1,2,3,5]
// }
//
// const res=app(test);
//
// console.log(res())


// const abs=(b)=>b+10;
// const test=(c)=>c/10;
// const show=(x)=>x*2;
// abs(test(show(2)))































