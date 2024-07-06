"use strict";

// function Car(name , price , color){
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.getColor = function (){
//         return this.color;
//     }
// }
//
// Car.prototype.getInfo = function(){
//     console.log(`${this.name} ${this.price} ${this.color}`);
// }
//
// const bmw=new Car('I3', '45000', 'black');
// const k5=new Car('k5', '25000', 'black');
//
// bmw.getInfo()
// k5.getInfo()
// console.log(k5.getColor())
//
//
//
// console.log(bmw)

//// ---------------- O O P --------------------

// class Car{
//
//     #power=2000
//
//     constructor(name,brand,color,price,year) {
//         this.name=name;
//         this.brand=brand;
//         this.color=color;
//         this.price=price;
//         this.year=year;
//     }
//
//     getFullInfo(){
//         console.log(`${this.name} ${this.brand} ${this.price} ${this.year}`);
//     }
//
//     // changePowers(val){
//     //     this.#power=val;
//     // }
//
//     static getPrice(obj){
//         console.log(`${obj.price}`)
//     }
//
//
// }




// class Smartphone extends Car{
//
//     constructor(name,brand,color,price,year,capacity,camera) {
//          super(name,brand,color,price,year)
//          this.capacity=capacity;
//          this.camera=camera;
//     }
//
//     // changePower(val){
//     //     this.#power=val
//     // }
//
// }


// const bmw=new Car('i3','bmw','white','42k$','2023');
// // Car.getPrice(bmw)
//
// console.log(bmw)
//
// const iphone=new Smartphone('15 pro max', 'apple','silver', '1200$', '2023','99%','48mp')
//
// console.log(iphone)
//
//
// iphone.changePower(3000);
// console.log(iphone)


// Smartphone.getPrice(iphone)


// bmw.getFullInfo()
// iphone.getFullInfo()


///// --------------


// class Car {
//
//     #wheel=4;
//
//     constructor(name,brand, color, year,price ,power) {
//         this.name = name;
//         this.brand = brand;
//         this.color = color;
//         this.year = year;
//         this.price = price;
//         this.power = power;
//     }
//
//     getPower(){
//         return this.power;
//     }
//
//     getName(){
//         return `${this.name} ${this.brand}`;
//     }
//
// }
//
// class Smartphone extends Car{
//
//     #type="Smartphone";
//     #screenType="smth"
//
//     constructor(name,brand, color, year ,price, power, camera) {
//         super(name,brand, color, year ,price , power);
//         this.camera = camera;
//     }
//
//     getCamera(){
//         return this.camera;
//     }
//
// }
//
// class Laptop extends Smartphone{
//
//     #chip="Intel";
//
//     constructor(name,brand, color, year ,price, power, camera) {
//         super(name,brand, color, year ,price, power, camera);
//     }
//
//     getPrint(){
//         return `${this.name} ${this.brand} ${this.color} ${this.year} ${this.price}`;
//     }
//
//
// }


// const nexia=new Car('Nexia 2', 'Chevrolet', 'white','2015','12000$', 102);
// const iphone=new Smartphone('15 pro max','apple','natural titan', 2024 , '1200$', 100, 48)
// const hp=new Laptop('hp x360', 'hp' , 'silver' , 2023, 1000 , 100 , 5);

// console.log(nexia)
// console.log(iphone)
// console.log(hp)


// class Calculator {
//
//     add(a,b){
//         return a + b;
//     }
//
//     divide(a,b){
//        return a / b;
//     }
//
//     multiply(a,b){
//         return a * b;
//     }
//
//     subtract(a,b){
//         return a - b;
//     }
//
// }
//
// const action=new Calculator();
//
// console.log(action.add(12,10))
// console.log(action.subtract(23,11))
// console.log(action.divide(48,24))
// console.log(action.multiply(5,23))


// function  fun1(){
//     console.log("step 120")
// }
//
// function  fun2(){
//     console.log("step 3")
// }
//
//
// function  fun3(){
//     console.log("step 45")
// }

// function  fun4(cb1, cb2 , cb3){
//     setTimeout(()=>{
//         cb1()
//         setTimeout(()=>{
//             cb2()
//             setTimeout(()=>{
//                 cb3()
//                 setTimeout(()=>{
//                     console.log("step 4")
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// }
//
// fun4(fun1, fun2, fun3)

// 5s

// async function getNumbers(step){
//     const res=await step;
//     for(let i=0; i<res; i++){
//         console.log("step: "+i)
//     }
// }
//
// getNumbers(100)

// console.log("hi!")



// Promise

// pending --> kutasiz   loader

// success -> success -> success

// fail  -> fail  -> reject


// setTimeout(()=>{
//     let a=12;
//     console.log(a)
// },1000)

// promise state=[ pending -> pending , resolve -> fulfilled , reject -> rejected ]

let isload=false;
let data=[1,2,3,4,5,6,7,8,9,10];

const request=new Promise((resolve, reject)=>{

if(isload){
    return resolve(data)
}else{
    return reject("Not found 404")
}

})

request.then((state)=>{
       console.log(state)
       })
      .catch((err)=>{
        console.log(err)
      }).finally(()=>{
        console.log("finished")
      })















