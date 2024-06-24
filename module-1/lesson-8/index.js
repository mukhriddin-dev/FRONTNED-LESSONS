"use strict";

// push , pop , shift , unshift , concat , slice , splice , ..smt

// let numbers = [10, 5, 7, 105, 30];
//
// let students = [
//
//     { name: "Murodjon", age: 30 },
//
//     { name: "Yulduzxon", age: 25 },
//
//     { name: "Husan", age: 15 },
//
//     { name: "Ismoil", age: 10 },
//
//     { name: "Hasan", age: 15 },
// ];

// fOR LOOP
//

// const res=[]
// for (let i = 0; i < students.length; i++) {
//
//     if(students[i].age > 15){
//         res.push(students[i]);
//     }
//
// }
//
// console.log(res)

// ForEach -- loop

// students.forEach((el)=>{
//
// if(el.age>15){
//     res.push(el)
// }
//
// });
//
// console.log(res)


// Map -> new array


// const res=students.map((el,ind)=>{
//    if(el.age>10){
//        if(typeof  el !=="undefined"){
//            return el
//        }
//    }
// })
//

// console.log(res)

// Filter -> filter  value -> new array

// const res=students.filter((el,i, arr)=>{
//     return el.name.length>6
// })
//
// console.log(res)

// const check=students.every((el,i,arr)=>{
//     return el.age>25
// })
//
// console.log(check)


// const check=students.some((el,i,arr)=>{
//     return el.age>25
// })
//
// console.log(check)


// find

// const res=students.find((el,i,arr)=>{
//    return i>3;
// })
//
// console.log(res)


//findIndex

// const res=students.findIndex((el,i,arr)=>{
//    return el.age>20;
// })
//
// console.log(res)


// reduce method

// const num=[1,2,3,4,5,6,7,8,9,10];

// const summa=num.reduce( (ac,a)=>{ return ac+a } , 100  )
//
// console.log(summa)

// reduceRight

// const num=[1,2,3,4,5,6,7,8,9,10];
//
// const summa=num.reduceRight( (ac,a)=>{ return ac+a } , 0 )
// //
// console.log(summa)


// Sort
//
// const num=['Abdulloh','Murodjon','Yulduzxon','Husan', 'Azamat'];
// const byAge=num.sort();
// console.log(byAge);

// RegEx  -> Sting , new Regx()








