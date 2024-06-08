// "use strict";


// console.log(this) // global window


// function  test(){
//     console.log(this)
// }
// test()


// func Dec & useStrict -> this undefined
// fun Dec & !useStrict -> global window


// const app=function (){
//     console.log(this)
// }
//
// app()

// useStrict & func Expr -> undefined
// !useStrict & fun Expr -> global window


// const arrow=()=>{
//     console.log(this)
// }

// arrow()

// useStrict & arrow Func -> Global window
// !useStrict & arrow Func -> Global window

// let arr=[this, "key", "app"]
// console.log(arr[0])

// call , apply , bind

// const person={
//     name:"Jahongir",
//     age:22,
//     job:"Programmer",
// }
//
// const car=Object({
//     name:"BMW",
//     year:2024
// })
//
// console.log(car.name)
// console.log(car.year)
// console.log(person.name) // Jahongir
// console.log(person['name']) // Jahongir


// const person={
//     name:"jahongir",
//     age:23,
//     job:"progreammer",
//     hobbies:['swim', 'sleep'],
//     readBook: function (){
//         console.log('Read Book');
//     },
//     sayHello:function(){
//         console.log('Asssalamu alaykum!');
//     },
//     getAllInfo:function(){
//         console.log(`name:${this.name} age: ${this.age} job: ${this.job} , hobbies: ${this.hobbies}`);
//     }
// }


// delete person.age;
// person.age=11;
// console.log(person)

// person.name="Javohir";

// this -> bu

// person.getAllInfo()

// person.readBook()
// person.sayHello()


// const lang={
//     uz:{
//         title:"Xush kelibsiz",
//         about:"Biz haqimizda"
//     },
//     en:{
//         title: "Welcome to",
//         about:"About me"
//     }
// }

// console.log(lang.uz)
// console.log(lang['uz']) ++

// function  changeLanguage(langType){
//     console.log(lang[langType])
// }
//
// changeLanguage('en')

// ...

// function  createCar(name, color , year , price ,other){
//     return (
//
//         {
//         name:name,
//         color:color,
//         year:year,
//         price:price,
//             ...other
//        }
//
//     )
// }
// const merc=createCar('MX7', 'black', 2029 , 3000000, {key1:"key1"})
// const bmw=createCar('bmw','red',2021, 45500);
//
// console.log(merc)



// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greet: function () {
//         console.log('Hello, World!');
//     }
// };

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greet() {
//         console.log('Hello, World!');
//     }
// };

// person.greet();


// for in , for of

const obj={
    color:'red',
    width:100,
    height:200,
    weight:40000
}

console.log(obj?.max?.length)

// for(let key in obj){
//     console.log(`${key}: ${obj[key]}`)
// }




























