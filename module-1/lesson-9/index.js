"use strict";

//

// function  countdown(num,n){
//
//     console.log(num) // 0 ,
//
//     if(num<n){
//         num += 1;
//         countdown(num,n)
//     }else{
//         return
//     }
// }
//
//
// countdown(0,100)

// let count = 0;
//
// function makeCounter() {
//
//
//
//     return function() {
//
//         return function (){
//
//             return function (){
//
//                 return count++;
//
//             }
//         }
//     };
//
// }
//
// makeCounter()

// let counter = makeCounter();
// console.log(counter())
// console.log(counter())
// console.log(counter())

// function  rec(a){
//     console.log("Call"+a)
//     rec()
// }
//
//
// rec(1) // 1

/// ---------------- Object copying ----------
// ----- Deep clone & shallow clone. --------




// const obj3={
//     key:22
// }

// const obj2=obj; // shallow

// const obj2=Object.assign({}, obj, {key:22} )  // deep
// const obj2={...obj,...obj3}
// obj2.version="ES24";
// console.log(obj)
// console.log(obj2)

/// ---------- JSON - JAVASCRIPT OBJECT NOTION ----------

// const obj={
//     name:"javascript",
//     frameworks:['react','vue','angular'],
//     year:1999
// }

// const copyObject=JSON.parse( JSON.stringify(obj) ); // deep copy
// copyObject.vaersion="ES25";
// console.log(obj)
// console.log(copyObject)


// const json=JSON.stringify(obj);
// const toObject=JSON.parse(json)
// toObject.index="122";
// console.log(obj)
// console.log(json)
// console.log(toObject)


// const num=Number("123");
// console.log(typeof  num)

/// ------------- Function constructor -----------


// function Car(name, brand , color, power , maxSpeed){
//     this.name = name;
//     this.brand  = brand ;
//     this.color = color;
//     this.power  = power ;
//     this.maxSpeed = maxSpeed;
//
//     this.allInfo=function (){
//         console.log(`${this.name}: ${this.brand }`);
//     }
// }
//
// console.log([])
//
// Car.prototype.getBrand = function(){
//     return this.brand
// }
//
// const bmw=new Car('C5' , 'BMW' , 'BLACK' , '3000', '400');
// const tico=new Car('Tico' , 'Chevrolet' , 'green' , '30', '180');
//
// console.log(bmw.getBrand())
// bmw.allInfo()
// tico.allInfo()

























