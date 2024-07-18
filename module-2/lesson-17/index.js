// Map , Set

// const car=new Map();

// set -> yangi element qo'shadi -> set('key' , value);
// get -> 
// has  -> key borligini tekshiradi
// delete ->
// clear -> 
// size ->
// car.delete(1)
// console.log(car.has('brand'));

// car.set('name', 'bmw')
// car.set(1,"one")
// car.set("color", "red")


// console.log(car);
// console.log(car.keys());
// console.log(car.values());

// car.forEach((item)=>{
//     console.log(item);
// })

// console.log(car.entries());



// const lang=new Set();

// Set unique value qaytaradi
// add -> yangi element qo'shadi -> set('key' , value);
// has  -> key borligini tekshiradi
// delete ->
// clear -> 
// size ->

// lang.add("PHP")
// lang.add("NODEJS")
// lang.add("GO lang")
// lang.add("Rust")


// console.log(lang);

// for(let key of lang.values()){
//     console.log(key);
// }


// for(let key of lang.keys()){
//     console.log(key);
// }

// console.log(lang.entries());

// lang.forEach((item)=>{
//     console.log("FI:", item);
// });


// const numbers=[1,2,3,4,5,4,1,2,3,77,98,23,12];

// const unique=Array.from(new Set(numbers));

// const unique=[...new Set(numbers)];

// numbers.forEach((el)=>{
//     if(!unique.includes(el)){
//         unique.push(el)
//     }
// })

// console.log(numbers);
// console.log(unique);


// const back=new Set(['php', 'nodejs', 'go','js'])
// const front=new Set(['vue','react','html','js'])
// const mobile=new Set(['dart', 'kotlin', 'react native','react','js'])

// union
// intersection

// console.log(back.union(front).union(mobile));
// console.log(back.intersection(front).intersection(mobile));


// const wm=new WeakMap();

// const object={key:12};

// wm.set(object, "hello world")


// console.log(wm);
// console.log(wm.get(object));


// const wm=new WeakSet();

// const object1={key:12};
// const object2={key:32};

// wm.add(object1);
// wm.add(object2);
// console.log(wm);

// function setData(param){
//     if(param){
//         console.log(param);
//     }
//    return;
// }

// setData('salom')

// func generator

// function *getData(a,b,c,x){
//    yield a;
//    yield b;
//    yield c;
//    yield x;
// } 

// const num=getData(22,33,44,55);

// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());

// console.log(num.next());
// console.log(num.next());
// console.log(num.next());



// const proxy=new Proxy();


// const obj={
//     key:"Test",
//     get(){
//         return this.key;
//     },
//     set(prop){
//         this.key=prop
//     }
// }

// obj.set("test1111")
// console.log(obj.get());

const student={
    isname:"Ozodbek",
    age:22
}

const handler={
    get: function(target , prop){
         return target[prop] ? target[prop] : "propert does not exist!!!"
    },
    set:function(target,prop,value){

         if(prop==='age' && typeof value!=='number'){
            throw new TypeError(`${prop} must be a number`)
         }
         else if(prop==="isname" && typeof value!=='string'){
           throw new Error(`${prop} ${value} must be a string and length > 10 !!!`)
         }

         target[prop]=value;
         return true;
    }
}

const proxy=new Proxy(student,handler);

proxy.age=24;
proxy.isname="salom"
console.log(proxy.age);
console.log(proxy.isname);








